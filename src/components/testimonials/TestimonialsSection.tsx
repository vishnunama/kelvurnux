'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface Testimonial {
  id: number;
  text: string;
  authorName?: string;
  authorPosition: string;
  photo: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "The flexibility of Kvaornux’s modular setup is a huge win for our 24/7 live operations. Working with their team feels like having an in-house department of experts who keep technical execution fast and reliable.",
    authorName: "",
    authorPosition: "Lakebets Project",
    photo: "/assets/author-nikita.webp",
    rating: 5,
  },
  {
    id: 2,
    text: "The platform seamlessly unifies casino, sportsbook, and multi-tier agent operations into one connected system. The mobile-first H5 interface delivers a fast and intuitive player experience.",
    authorName: "",
    authorPosition: "Jeetfast24 Project",
    photo: "/assets/author-karyna.webp",
    rating: 5,
  },
  {
    id: 3,
    text: "Kvaornux delivered a fully localized platform tailored to our market’s payment habits and language requirements. Smooth integrations, reliable back-office, and exceptional uptime.",
    authorName: "",
    authorPosition: "Pori444 Project",
    photo: "/assets/author-nikita.webp",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="clients-testimonials-section" id="testimonials">
      <style>{`
        .clients-testimonials-section {
          position: relative;
          padding: 5.5rem 0 6.5rem;
          background: radial-gradient(105.28% 100.86% at 82.74% 0, rgba(0, 235, 170, 0.15) 0, rgba(0, 235, 170, 0) 47.08%),
                      radial-gradient(90.07% 98.52% at 31.01% 0, rgba(0, 195, 179, 0.12) 0, rgba(0, 195, 179, 0) 47.08%),
                      #0b0b0f;
          overflow: hidden;
        }

        .clients-testimonials-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 1rem 0 2rem;
          --slide-w: 660px;
          --slide-m: 16px;
        }

        .clients-testimonials-wrapper::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 14vw;
          height: 100%;
          background: linear-gradient(270deg, rgba(11, 11, 15, 0) 0%, #0b0b0f 100%);
          z-index: 5;
          pointer-events: none;
        }

        .clients-testimonials-wrapper::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 14vw;
          height: 100%;
          background: linear-gradient(90deg, rgba(11, 11, 15, 0) 0%, #0b0b0f 100%);
          z-index: 5;
          pointer-events: none;
        }

        .clients-testimonials-slider-track {
          display: flex;
          align-items: center;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          width: max-content;
        }

        .clients-testimonial-slide {
          flex-shrink: 0;
          width: var(--slide-w);
          max-width: 84vw;
          margin: 0 var(--slide-m);
          opacity: 0.32;
          transition: opacity 0.5s ease, transform 0.5s ease;
          cursor: pointer;
        }

        .clients-testimonial-slide.active-slide {
          opacity: 1 !important;
          transform: scale(1.02);
          cursor: default;
        }

        .clients-testimonial-item {
          border-radius: 1.6rem;
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.1) 0%, rgba(0, 235, 170, 0.04) 50%, rgba(0, 235, 170, 0.01) 100%), #10161a;
          padding: 2.2rem 2.5rem;
          min-height: 195px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(0, 235, 170, 0.12);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
          transition: background 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
        }

        .clients-testimonial-slide.active-slide .clients-testimonial-item {
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.18) 0%, rgba(0, 235, 170, 0.1) 40%, rgba(0, 235, 170, 0.04) 100%), #121c19 !important;
          border-color: rgba(0, 235, 170, 0.28) !important;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.6) !important;
        }

        .clients-testimonial-content {
          margin-bottom: 2rem;
        }

        .clients-testimonial-text {
          font-size: 1.15rem;
          line-height: 1.65;
          color: #a5d8d0;
          font-weight: 400;
        }

        .clients-testimonial-slide.active-slide .clients-testimonial-text {
          color: #ffffff !important;
          font-size: 1.2rem;
          font-weight: 400;
        }

        .clients-testimonial-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .clients-testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }

        .clients-testimonial-author-photo {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(0, 235, 170, 0.2);
          border: 1.5px solid rgba(0, 235, 170, 0.5);
          flex-shrink: 0;
        }

        .clients-testimonial-author-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .clients-testimonial-author-position {
          font-size: 1.1rem;
          color: #00ebaa;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .stars-wrapper {
          background: rgba(0, 235, 170, 0.12);
          padding: 0.4rem 0.8rem;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .star-icon {
          width: 1.1rem;
          height: 1.1rem;
          color: #00ebaa;
          fill: currentColor;
        }

        .swiper-navigation-clients-testimonials {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2rem;
          gap: 1rem;
          position: relative;
          z-index: 10;
        }

        .swiper-button-custom {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 -3px 4px 0 rgba(6, 10, 13, 0.26) inset, 0 2px 2.8px 0 rgba(255, 255, 255, 0.13) inset;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          border: none;
          transition: all 0.3s ease-in-out;
        }

        .swiper-button-custom:hover {
          background: rgba(0, 235, 170, 0.25);
          color: #00ebaa;
          transform: scale(1.05);
        }

        .swiper-pagination-dots {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin: 0 1rem;
        }

        .swiper-pagination-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .swiper-pagination-dot.active-dot {
          width: 26px;
          border-radius: 9999px;
          background: #00ebaa;
          box-shadow: 0 0 12px rgba(0, 235, 170, 0.6);
        }

        @media (max-width: 768px) {
          .clients-testimonials-section {
            padding: 4rem 0 5rem;
          }
          .clients-testimonials-wrapper {
            --slide-w: calc(100vw - 48px);
            --slide-m: 8px;
            padding: 0.5rem 0 1.5rem;
          }
          .clients-testimonials-wrapper::before,
          .clients-testimonials-wrapper::after {
            display: none !important;
          }
          .clients-testimonial-slide {
            width: var(--slide-w);
            max-width: calc(100vw - 32px);
            margin: 0 var(--slide-m);
          }
          .clients-testimonial-item {
            padding: 1.6rem 1.35rem !important;
            min-height: auto !important;
            border-radius: 1.35rem !important;
          }
          .clients-testimonial-content {
            margin-bottom: 1.25rem !important;
          }
          .clients-testimonial-text {
            font-size: 0.96rem !important;
            line-height: 1.6 !important;
          }
          .clients-testimonial-slide.active-slide .clients-testimonial-text {
            font-size: 0.98rem !important;
          }
          .clients-testimonial-info {
            margin-top: 0.5rem !important;
            gap: 0.75rem !important;
          }
          .clients-testimonial-author {
            gap: 0.75rem !important;
          }
          .clients-testimonial-author-photo {
            width: 40px !important;
            height: 40px !important;
          }
          .clients-testimonial-author-name {
            font-size: 1.05rem !important;
          }
          .clients-testimonial-author-position {
            font-size: 0.95rem !important;
          }
          .stars-wrapper {
            padding: 0.3rem 0.6rem !important;
          }
          .star-icon {
            width: 0.95rem !important;
            height: 0.95rem !important;
          }
        }
      `}</style>

      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-3 sm:mb-4">
          What Our Clients Say
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#94a3b8] font-normal leading-relaxed max-w-2xl mx-auto">
          Feedback from teams who use our solutions in daily operations.
        </p>
      </div>

      {/* Slider Carousel Matching Image 2 */}
      <div
        className="clients-testimonials-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="clients-testimonials-slider-track"
          style={{
            transform: `translateX(calc(50vw - (${activeIndex} * (var(--slide-w) + (var(--slide-m) * 2)) + ((var(--slide-w) + (var(--slide-m) * 2)) / 2))))`,
          }}
        >
          {testimonialsData.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`clients-testimonial-slide ${
                idx === activeIndex ? 'active-slide' : ''
              }`}
              onClick={() => setActiveIndex(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveIndex(idx);
                }
              }}
              aria-label={`View testimonial from ${testimonial.authorPosition}`}
            >
              <div className="clients-testimonial-item">
                <div className="clients-testimonial-content">
                  <div className="clients-testimonial-text">
                    <p>{testimonial.text}</p>
                  </div>
                </div>

                <div className="clients-testimonial-info">
                  <div className="clients-testimonial-author">
                    <div className="clients-testimonial-author-photo">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.authorName || testimonial.authorPosition}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="clients-testimonial-author-content">
                      {testimonial.authorName && (
                        <div className="clients-testimonial-author-name">
                          {testimonial.authorName}
                        </div>
                      )}
                      <div className="clients-testimonial-author-position">
                        {testimonial.authorPosition}
                      </div>
                    </div>
                  </div>

                  <div className="stars-wrapper" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="star-icon"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls Navigation (Arrows & Capsule Pagination Dots) */}
        <div className="swiper-navigation-clients-testimonials">
          <button
            type="button"
            className="swiper-button-custom"
            aria-label="Previous testimonial"
            onClick={handlePrev}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <div className="swiper-pagination-dots" role="tablist" aria-label="Testimonial pagination">
            {testimonialsData.map((testimonial, idx) => (
              <button
                key={testimonial.id}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`Go to slide ${idx + 1}`}
                className={`swiper-pagination-dot ${
                  idx === activeIndex ? 'active-dot' : ''
                }`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>

          <button
            type="button"
            className="swiper-button-custom"
            aria-label="Next testimonial"
            onClick={handleNext}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
