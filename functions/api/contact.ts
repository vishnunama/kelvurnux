const GOOGLE_SCRIPT_FALLBACK = 'https://script.google.com/macros/s/AKfycbwnkew4hScJ4Hy0ooHtPM5lezcts7e2y_ooMGUqCcGyDF1IAyQMunzOZNBdW97neag9/exec';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface PagesContext {
  request: Request;
  env: {
    GOOGLE_SCRIPT_URL?: string;
  };
}

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const req = context.request;

  try {
    let body: any;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid JSON request payload.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, phone, category, request, _hp } = body || {};

    if (_hp) {
      return new Response(
        JSON.stringify({ success: true, message: 'Enquiry processed successfully.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedPhone = typeof phone === 'string' ? phone.trim() : '';
    const trimmedCategory = typeof category === 'string' ? category.trim() : '';
    const trimmedRequest = typeof request === 'string' ? request.trim() : '';

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid name (2-100 characters).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail) || trimmedEmail.length > 400) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!trimmedPhone || trimmedPhone.length < 3 || trimmedPhone.length > 50) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please provide a valid contact phone or handle.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!trimmedCategory) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please select a solution category.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!trimmedRequest || trimmedRequest.length < 2 || trimmedRequest.length > 2000) {
      return new Response(
        JSON.stringify({ success: false, error: 'Please describe your project request (2-2000 characters).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const targetUrl = context.env?.GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_FALLBACK;

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
      });
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Could not connect to submission service. Please try again.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!gasResponse.ok) {
      return new Response(
        JSON.stringify({ success: false, error: `Backend service responded with HTTP ${gasResponse.status}. Enquiry was not saved.` }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let gasData: any = null;
    const rawText = await gasResponse.text();
    try {
      gasData = JSON.parse(rawText);
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Backend service returned an invalid acknowledgement. Enquiry not saved.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (gasData?.status !== 'success') {
      return new Response(
        JSON.stringify({ success: false, error: gasData?.message || 'Backend service failed to save the enquiry.' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Your enquiry has been received and confirmed.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error while processing enquiry.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
