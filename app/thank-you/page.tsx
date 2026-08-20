'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Trigger conversion event when page loads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17927403225/2YcnCLDf-rsCEar22e0p',
        'value': 1.0,
        'currency': 'USD'
      });
    }

    // Google Tag Manager event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'form_submission',
        'eventCategory': 'engagement',
        'eventAction': 'form_submit',
        'eventLabel': 'contact_form_success'
      });
    }

    console.log('Thank you page loaded - Conversion tracked');
  }, []);

  const handleClose = () => {
    router.push('/');
  };

  const handleOpenNewTab = () => {
    window.open('/thank-you', '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4 min-h-screen"
        onClick={handleClose}
      >
        {/* Modal */}
        <div 
          className="modal-window relative z-50 flex w-full max-w-2xl max-h-90 flex-col justify-between items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Desktop */}
          <button
            onClick={handleClose}
            className="modal-close desktop absolute -right-12 -top-12 w-6 h-6 bg-transparent border-none outline-none cursor-pointer transition-all duration-300 hover:opacity-70 hidden lg:flex justify-center items-center"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_2727_6764" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9"></rect>
              </mask>
              <g mask="url(#mask0_2727_6764)">
                <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4833 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4833 5.6998 18.3C5.51647 18.1167 5.4248 17.8833 5.4248 17.6C5.4248 17.3167 5.51647 17.0833 5.6998 16.9L10.5998 12L5.6998 7.09999C5.51647 6.91665 5.4248 6.68332 5.4248 6.39999C5.4248 6.11665 5.51647 5.88332 5.6998 5.69999C5.88314 5.51665 6.11647 5.42499 6.3998 5.42499C6.68314 5.42499 6.91647 5.51665 7.0998 5.69999L11.9998 10.6L16.8998 5.69999C17.0831 5.51665 17.3165 5.42499 17.5998 5.42499C17.8831 5.42499 18.1165 5.51665 18.2998 5.69999C18.4831 5.88332 18.5748 6.11665 18.5748 6.39999C18.5748 6.68332 18.4831 6.91665 18.2998 7.09999L13.3998 12L18.2998 16.9C18.4831 17.0833 18.5748 17.3167 18.5748 17.6C18.5748 17.8833 18.4831 18.1167 18.2998 18.3C18.1165 18.4833 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4833 16.8998 18.3L11.9998 13.4Z" fill="white"></path>
              </g>
            </svg>
          </button>

          {/* Modal Content */}
          <div 
            className="modal-window-content w-full rounded-3xl overflow-y-auto"
            style={{
              padding: '3.25rem',
              background: 'radial-gradient(107.85% 100.05% at 50% -.03%, rgba(48, 196, 255, .18) 0, rgba(75, 204, 255, 0) 52.41%), #141820',
              boxShadow: '0 12px 33.8px 0 rgba(0, 0, 0, .16), 0 2px 4.4px 0 rgba(128, 179, 255, .28) inset'
            }}
          >
            {/* Close Button - Mobile */}
            <button
              onClick={handleClose}
              className="modal-close mobile lg:hidden absolute top-6 right-6 w-6 h-6 bg-transparent border-none outline-none cursor-pointer transition-all duration-300 hover:opacity-70"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_mobile" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask0_mobile)">
                  <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4833 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4833 5.6998 18.3C5.51647 18.1167 5.4248 17.8833 5.4248 17.6C5.4248 17.3167 5.51647 17.0833 5.6998 16.9L10.5998 12L5.6998 7.09999C5.51647 6.91665 5.4248 6.68332 5.4248 6.39999C5.4248 6.11665 5.51647 5.88332 5.6998 5.69999C5.88314 5.51665 6.11647 5.42499 6.3998 5.42499C6.68314 5.42499 6.91647 5.51665 7.0998 5.69999L11.9998 10.6L16.8998 5.69999C17.0831 5.51665 17.3165 5.42499 17.5998 5.42499C17.8831 5.42499 18.1165 5.51665 18.2998 5.69999C18.4831 5.88332 18.5748 6.11665 18.5748 6.39999C18.5748 6.68332 18.4831 6.91665 18.2998 7.09999L13.3998 12L18.2998 16.9C18.4831 17.0833 18.5748 17.3167 18.5748 17.6C18.5748 17.8833 18.4831 18.1167 18.2998 18.3C18.1165 18.4833 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4833 16.8998 18.3L11.9998 13.4Z" fill="white"></path>
                </g>
              </svg>
            </button>

            {/* Modal Container */}
            <div className="modal-container relative w-full flex flex-col flex-grow">
              {/* Success Response */}
              <div className="form-response flex flex-col items-center text-center">
                {/* Success Icon */}
                <div className="form-response-icon block w-12 mb-8 mx-auto">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="url(#paint0_linear)"></circle>
                    <path d="M20 28L16 24M20 28L24 32L34 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <defs>
                      <linearGradient id="paint0_linear" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#00ebaa"></stop>
                        <stop offset="100%" stopColor="#00ebaa"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Title */}
                <div className="form-response-title mb-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Success!
                  </h3>
                </div>

                {/* Message */}
                <div className="form-response-text mb-8">
                  <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                    Thank you for reaching out. Our manager will contact you shortly. Let's start building your iGaming Empire!
                  </p>
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    outline: '0',
                    width: 'fit-content',
                    borderRadius: '1.6rem',
                    padding: '0.4rem 3rem',
                    minHeight: '3.5rem',
                    backgroundColor: '#00ebaa',
                    cursor: 'pointer',
                    color: '#000',
                    fontWeight: '700',
                  }}
                >
                  <span className="relative z-10 text-black font-bold">Continue</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}