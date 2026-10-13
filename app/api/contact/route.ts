import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_FALLBACK = 'https://script.google.com/macros/s/AKfycbwnkew4hScJ4Hy0ooHtPM5lezcts7e2y_ooMGUqCcGyDF1IAyQMunzOZNBdW97neag9/exec';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory sliding window deduplication store for rate limiting (per-instance)
const submissionTracker = new Map<string, number>();

function cleanOldTrackers() {
  const now = Date.now();
  for (const [key, timestamp] of submissionTracker.entries()) {
    if (now - timestamp > 60000) {
      submissionTracker.delete(key);
    }
  }
}

export async function POST(req: Request) {
  try {
    cleanOldTrackers();

    let body: any;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    const { name, email, phone, category, request, _hp } = body || {};

    // 1. Silent Honeypot check for bots
    if (_hp) {
      return NextResponse.json(
        { success: true, message: 'Enquiry processed successfully.' },
        { status: 200 }
      );
    }

    // 2. Strict Input Validation
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedPhone = typeof phone === 'string' ? phone.trim() : '';
    const trimmedCategory = typeof category === 'string' ? category.trim() : '';
    const trimmedRequest = typeof request === 'string' ? request.trim() : '';

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid name (2-100 characters).' },
        { status: 400 }
      );
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 400) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!trimmedPhone || trimmedPhone.length < 3 || trimmedPhone.length > 50) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid contact phone or handle.' },
        { status: 400 }
      );
    }

    if (!trimmedCategory) {
      return NextResponse.json(
        { success: false, error: 'Please select a solution category.' },
        { status: 400 }
      );
    }

    if (!trimmedRequest || trimmedRequest.length < 2 || trimmedRequest.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Please describe your project request (2-2000 characters).' },
        { status: 400 }
      );
    }

    // 3. Duplicate submission prevention (same email + request within 15 seconds)
    const duplicateKey = `${trimmedEmail.toLowerCase()}:${trimmedRequest.slice(0, 30)}`;
    const lastSubTime = submissionTracker.get(duplicateKey);
    const now = Date.now();
    if (lastSubTime && now - lastSubTime < 15000) {
      return NextResponse.json(
        { success: false, error: 'Duplicate submission detected. Please wait a few seconds before trying again.' },
        { status: 429 }
      );
    }
    submissionTracker.set(duplicateKey, now);

    // 4. Server-to-server dispatch to Google Apps Script
    const targetUrl = process.env.GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_FALLBACK;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    let gasResponse: Response;
    try {
      gasResponse = await fetch(targetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
          category: trimmedCategory,
          request: trimmedRequest,
          timestamp: new Date().toISOString(),
        }),
        redirect: 'follow',
        signal: controller.signal,
      });
    } catch (fetchErr: any) {
      clearTimeout(timeoutId);
      if (fetchErr?.name === 'AbortError') {
        return NextResponse.json(
          { success: false, error: 'Backend request timed out. Please try again or reach out on WhatsApp/Telegram.' },
          { status: 504 }
        );
      }
      return NextResponse.json(
        { success: false, error: 'Could not connect to submission service. Please try again.' },
        { status: 502 }
      );
    } finally {
      clearTimeout(timeoutId);
    }

    // 5. Verify meaningful backend acknowledgement (Requirement 5)
    if (!gasResponse.ok) {
      return NextResponse.json(
        { success: false, error: `Backend service responded with HTTP ${gasResponse.status}. Enquiry was not saved.` },
        { status: 502 }
      );
    }

    let gasData: any = null;
    const rawText = await gasResponse.text();
    try {
      gasData = JSON.parse(rawText);
    } catch {
      // Returned HTML or non-JSON (e.g. error page)
      return NextResponse.json(
        { success: false, error: 'Backend service returned an invalid acknowledgement. Enquiry not saved.' },
        { status: 502 }
      );
    }

    // The Google Apps Script must confirm with status === 'success'
    if (gasData?.status !== 'success') {
      return NextResponse.json(
        { success: false, error: gasData?.message || 'Backend service failed to save the enquiry.' },
        { status: 502 }
      );
    }

    // 6. Confirmed delivery success
    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been received and confirmed.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing enquiry.' },
      { status: 500 }
    );
  }
}
