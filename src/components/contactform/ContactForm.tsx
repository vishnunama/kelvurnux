'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwnkew4hScJ4Hy0ooHtPM5lezcts7e2y_ooMGUqCcGyDF1IAyQMunzOZNBdW97neag9/exec';

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    category: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const elements = elementsRef.current.filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Please fill out this field.';
    if (!formData.email.trim()) newErrors.email = 'Please fill out this field.';
    if (!formData.phone.trim()) newErrors.phone = 'Please fill out this field.';
    if (!formData.request.trim()) newErrors.request = 'Please fill out this field.';
    if (!formData.category) newErrors.category = 'Please select a business type.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const triggerConversionTracking = () => {
    try {
      // Google Ads conversion tracking
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

      console.log('Form submitted - Conversion tracked');
    } catch (error) {
      console.error('Error tracking conversion:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        request: '',
        category: '',
      });

      // Trigger conversion tracking
      triggerConversionTracking();

      console.log('Form submitted successfully:', formData);

      // Hard refresh and open thank you page in new tab
      // Add small delay to ensure tracking pixel fires
      setTimeout(() => {
        window.open('/thank-you', '_blank');
        // Optional: Refresh current page after opening new tab
        // window.location.reload();
      }, 500);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  return (
    <div 
      className="min-h-screen p-4 sm:p-6 md:p-8"
      id="contact-form-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent"
            ref={(el) => { if (el) elementsRef.current[0] = el; }}
            data-anim="from-bottom"
          >
            Contact us
          </h2>
          <p 
            className="text-[#a5a5a5] text-base sm:text-lg md:text-lg lg:text-xl max-w-2xl mx-auto px-2 font-light"
            ref={(el) => { if (el) elementsRef.current[1] = el; }}
            data-anim="from-bottom"
            data-anim-delay="1"
          >
            Whether you're launching a new iGaming business, migrating from an existing solution, or scaling
            internationally — our team is ready.
          </p>
        </div>

        {/* Main Container */}
        <div 
          className="rounded-xl sm:rounded-2xl md:rounded-[2.4rem] bg-[#141820] border border-white/10 shadow-2xl overflow-hidden"
          ref={(el) => { if (el) elementsRef.current[2] = el; }}
          data-anim="fade-in"
          data-anim-delay="2"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 p-5 sm:p-8 md:p-15">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-top">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                Let's Build Your iGaming Success Together!
              </h3>
              <p className="text-[#a5a5a5] text-base sm:text-lg md:text-lg lg:text-xl mb-6 sm:mb-8 font-light">
                Leave your details. We'll arrange a call with the right specialist
              </p>
              {/* Decorative Image Placeholder */}
              <div className="hidden lg:block w-full h-48 sm:h-56 md:h-64">
              <img src="/assets/contacts-cubes.webp" alt="Contact illustration" />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col">
              <form 
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
                {/* Name */}
                <div>
                  <label className="block text-[#cecece] text-sm sm:text-base md:text-base font-medium mb-1.5 sm:mb-2">
                    Name <span className="text-[#00ebaa]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={60}
                    minLength={2}
                    disabled={isSubmitting}
                    className="w-full h-10 sm:h-12 md:h-[3.25rem] px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[#00ebaa] focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[#cecece] text-sm sm:text-base md:text-base font-medium mb-1.5 sm:mb-2">
                    Email <span className="text-[#00ebaa]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={400}
                    disabled={isSubmitting}
                    className="w-full h-10 sm:h-12 md:h-[3.25rem] px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[#00ebaa] focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone/Telegram */}
                <div>
                  <label className="block text-[#cecece] text-sm sm:text-base md:text-base font-medium mb-1.5 sm:mb-2">
                    Telegram / WhatsApp <span className="text-[#00ebaa]">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={50}
                    disabled={isSubmitting}
                    className="w-full h-10 sm:h-12 md:h-[3.25rem] px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[#00ebaa] focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Request */}
                <div>
                  <label className="block text-[#cecece] text-sm sm:text-base md:text-base font-medium mb-1.5 sm:mb-2">
                    Your Request <span className="text-[#00ebaa]">*</span>
                  </label>
                  <textarea
                    name="request"
                    value={formData.request}
                    onChange={handleInputChange}
                    maxLength={1000}
                    disabled={isSubmitting}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[#00ebaa] focus:bg-white/15 transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder="Tell us about your project..."
                  />
                  {errors.request && (
                    <p className="text-red-500 text-sm mt-1">{errors.request}</p>
                  )}
                </div>

                {/* Business Type - Category Dropdown */}
                <div ref={dropdownRef}>
                  <label className="block text-[#cecece] text-sm sm:text-base md:text-base font-medium mb-1.5 sm:mb-2">
                    What type of business are you? <span className="text-[#00ebaa]">*</span>
                  </label>
                  
                  {/* Custom Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === 'category' ? null : 'category'
                        )
                      }
                      className="w-full h-10 sm:h-12 md:h-[3.25rem] px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm sm:text-base text-white placeholder-white/40 focus:outline-none focus:border-[#00ebaa] focus:bg-white/15 transition-all duration-300 flex items-center justify-between text-left hover:bg-white/15 disabled:opacity-50"
                    >
                      <span className={formData.category ? 'text-white' : 'text-white/50'}>
                        {formData.category || 'Select business type...'}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#00ebaa] transition-transform duration-300 flex-shrink-0 ${
                          openDropdown === 'category' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === 'category' && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1f2e] border border-white/20 rounded-lg shadow-2xl z-[999] overflow-hidden max-h-64 overflow-y-auto">
                        {[
                          'White Label Casino Solutions',
                          'Custom iGaming Solution',
                          'Turnkey Casino Software Solutions',
                          'Crypto iGaming Solutions',
                          'API Integration Solution',
                          'Other',
                        ].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, category: option }));
                              setOpenDropdown(null);
                              if (errors.category) {
                                setErrors((prev) => ({ ...prev, category: '' }));
                              }
                            }}
                            className={`w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-left transition-all duration-200 border-b border-white/10 last:border-b-0 ${
                              formData.category === option
                                ? 'bg-white/20 text-[#00ebaa] font-medium'
                                : 'text-white hover:bg-white/15 hover:text-[#00ebaa]'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {errors.category && (
                    <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                  )}
                </div>

                {/* Privacy Notice */}
                <div className="text-sm sm:text-base text-gray-400 pt-3 sm:pt-4 md:pt-6 border-t border-white/10">
                  <p>
                    <span className="text-[#00ebaa]">*</span> Your message will be processed in
                    accordance with our{' '}
                    <a href="/privacy-policy/" className="text-[#00ebaa] hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center items-center gap-3 pt-4 sm:pt-6 flex-wrap">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: 'none',
                      outline: '0',
                      width: 'fit-content',
                      borderRadius: '9999px',
                      padding: '0.6rem 2.2rem',
                      minHeight: '2.8rem',
                      backgroundColor: '#00ebaa',
                      cursor: 'pointer',
                      color: '#000',
                      fontWeight: '700',
                    }}
                  >
                    <span className="relative z-10 text-black font-bold">
                      {isSubmitting ? 'Submitting...' : 'Submit Your Request'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        [data-anim="fade-in"] {
          opacity: 0;
        }

        [data-anim="fade-in"].visible {
          animation: fadeIn 0.6s ease-out forwards;
        }

        [data-anim="from-bottom"] {
          opacity: 0;
        }

        [data-anim="from-bottom"].visible {
          animation: fadeInFromBottom 0.6s ease-out forwards;
        }

        [data-anim-delay="1"].visible { animation-delay: 0.1s; }
        [data-anim-delay="2"].visible { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
}