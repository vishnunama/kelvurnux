'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, Key, Zap, ShieldCheck, Layers, ArrowRight } from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';
import StepsSection from '@/src/components/stepssection/StepsSection';

// Global function to initialize or reset animations consistent with Kvaornux Portfolio & Blog
const resetAllAnimations = () => {
  const allAnimElements = document.querySelectorAll('[data-anim]');

  allAnimElements.forEach((el) => {
    el.classList.remove('visible');
  });

  setTimeout(() => {
    allAnimElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    allAnimElements.forEach((el) => {
      observer.observe(el);
    });
  }, 50);
};

export default function LicensingHubClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    resetAllAnimations();
    const timer = setTimeout(() => {
      resetAllAnimations();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('contact-us') || document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
    }
  };

  const jurisdictions = [
    {
      id: 'anjouan',
      title: 'Anjouan Gaming License',
      slug: 'anjouan',
      link: '/igaming-licensing/anjouan',
      description:
        'Offshore regulatory framework covering online casino, sportsbook, and game aggregation operations under a unified license model.',
      image: '/assets/licensing/anjouan-gaming-license.webp',
      imageAlt: 'Anjouan Gaming License Regulatory Framework and Compliance',
      features: [
        'Anjouan (Union of Comoros)',
        'Casino & Sportsbook Scope',
        'B2B & B2C Operations',
        'Review Draft Available',
      ],
    },
  ];

  const filteredJurisdictions = jurisdictions.filter((j) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      j.title.toLowerCase().includes(q) ||
      j.description.toLowerCase().includes(q) ||
      j.features.some((f) => f.toLowerCase().includes(q))
    );
  });

  const currentItem = filteredJurisdictions[activeSlideIndex] || filteredJurisdictions[0];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        @keyframes from-bottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes from-top {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        [data-anim] { 
          opacity: 1 !important;
        }

        [data-anim="from-bottom"] { 
          animation: from-bottom 0.6s ease-out forwards !important;
          opacity: 1 !important;
        }

        [data-anim="from-top"] { 
          animation: from-top 0.6s ease-out forwards !important;
          opacity: 1 !important;
        }

        [data-anim-delay="1"] { animation-delay: 0.1s !important; }
        [data-anim-delay="2"] { animation-delay: 0.2s !important; }
        [data-anim-delay="3"] { animation-delay: 0.3s !important; }

        /* =========================================================================
           EVENTS HERO STYLES (2nd Image Layout + 1st Image Emerald Color Theme)
           Full-width background image, edge-to-edge, NO card borders, pure clean hero
           ========================================================================= */
        .events-hero-section {
          padding: clamp(7.5rem, 11vw, 11rem) 0 4rem;
          position: relative;
          background: radial-gradient(120% 100% at 50% 40%, rgba(0, 235, 170, 0.2) 0%, rgba(0, 235, 170, 0.06) 60%, rgba(11, 11, 15, 0) 100%), rgb(11, 11, 15);
          overflow: hidden;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .events-hero-bg {
          z-index: 1;
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 72%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0%, #000 72%, transparent 100%);
        }

        .events-hero-bg img,
        .events-hero-bg-img {
          object-fit: cover;
          object-position: center 25%;
          width: 100% !important;
          height: 100% !important;
          display: block;
          opacity: 0.85;
          filter: hue-rotate(-120deg) saturate(1.15) brightness(0.68) contrast(1.18);
        }

        /* Subtle emerald glow matching exact user specification */
        .events-hero-bg:before {
          content: "";
          z-index: 2;
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(120% 100% at 50% 40%, rgba(0, 235, 170, 0.2) 0%, rgba(0, 235, 170, 0.06) 60%, rgba(11, 11, 15, 0) 100%);
        }

        /* Top header dark vignette and bottom smooth fade into #0b0b0f */
        .events-hero-bg:after {
          content: "";
          z-index: 3;
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, #0b0b0f 0%, rgba(11, 11, 15, 0.85) 12%, transparent 35%, transparent 68%, rgba(11, 11, 15, 0.85) 90%, #0b0b0f 100%);
        }

        .events-hero-container {
          max-width: 1240px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(1.2rem, 3vw, 2.5rem);
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .events-hero-title {
          letter-spacing: -0.04em;
          color: #fff;
          font-size: clamp(2.4rem, 5.2vw, 4.6rem);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 auto 2.2rem;
          text-align: center;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.85), 0 2px 6px rgba(0, 0, 0, 0.9);
        }

        .events-hero-logo {
          justify-content: center;
          align-items: center;
          height: auto;
          display: flex;
          margin-bottom: 1.25rem;
        }

        .events-hero-logo img {
          width: auto;
          max-width: 340px;
          height: clamp(3.2rem, 5.5vw, 4.8rem);
          display: block;
          filter: drop-shadow(0 4px 18px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 25px rgba(0, 235, 170, 0.45));
        }

        .events-hero-name {
          color: #fff;
          font-size: clamp(1.35rem, 2.5vw, 2rem);
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.015em;
          margin-bottom: 0.85rem;
          text-shadow: 0 3px 12px rgba(0, 0, 0, 0.85);
        }

        .events-hero-desc {
          font-size: clamp(1rem, 1.4vw, 1.15rem);
          line-height: 1.6;
          color: #bdf6eb !important;
          max-width: 680px;
          margin: 0 auto 2.2rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
        }

        .events-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          outline: 0;
          border: none;
          cursor: pointer;
          font-weight: 700;
          min-width: 270px;
          height: 3.6rem;
          padding: 0.85rem 2.4rem;
          font-size: 1.05rem;
          border-radius: 9999px;
          position: relative;
          color: #04160f;
          text-decoration: none;
          text-align: center;
          line-height: 1.5;
          background: radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%);
          box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.65) inset, 0 10px 24px rgba(0, 235, 170, 0.32);
          transition: filter 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          margin-bottom: 0.5rem;
        }

        .events-hero-btn:hover {
          filter: brightness(0.92);
          transform: translateY(-2px);
          color: #04160f;
          box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.65) inset, 0 14px 30px rgba(0, 235, 170, 0.45);
        }

        .events-hero-btn:active {
          filter: brightness(0.86);
          transform: translateY(0);
        }

        .events-hero-meta {
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          width: 100%;
          padding-top: 2rem;
          margin-top: 2.75rem;
        }

        .event-info-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.25rem;
          width: 100%;
          flex-wrap: wrap;
        }

        .event-location {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .event-chip {
          color: #fff;
          white-space: nowrap;
          background: rgba(11, 15, 18, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 9999px;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          height: 3rem;
          padding: 0 1.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          display: inline-flex;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
        }
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 9999px;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          height: 3rem;
          padding: 0 1.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          display: inline-flex;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }

        .event-chip-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #00ebaa;
          flex-shrink: 0;
        }

        .event-chip--accent {
          color: #04160f;
          background: #00ebaa;
          border-color: #00ebaa;
          font-weight: 700;
          box-shadow: 0 0 18px rgba(0, 235, 170, 0.4);
        }

        @media (max-width: 768px) {
          .events-hero-section {
            padding: 8.5rem 0 3.5rem;
          }
          .events-hero-title {
            margin-bottom: 1.6rem;
          }
          .events-hero-meta {
            padding-top: 1.5rem;
            margin-top: 2rem;
          }
          .event-info-wrapper {
            flex-direction: column;
            align-items: stretch;
            gap: 0.85rem;
          }
          .event-location {
            flex-direction: column;
            width: 100%;
            gap: 0.85rem;
          }
          .event-chip {
            width: 100%;
            justify-content: center;
            height: 2.85rem;
            font-size: 0.9rem;
          }
          .events-hero-btn {
            width: 100%;
          }
        }

        /* =========================================================================
           EVENTS GALLERY SECTION (Jurisdictions Showcase matching 2nd Image)
           ========================================================================= */
        .events-gallery-section {
          padding: 5rem 0 6rem;
          background: #0b0b0f;
          position: relative;
        }

        .events-gallery-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 clamp(1.2rem, 3vw, 2.5rem);
          position: relative;
          z-index: 2;
        }

        .events-gallery-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 2.25rem;
          flex-wrap: wrap;
        }

        .events-gallery-title {
          color: #fff;
          font-size: clamp(2rem, 3.8vw, 2.85rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin: 0;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.98) 10%, rgba(200, 230, 220, 0.85) 90%), #fff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* REUSABLE SEARCH CONTROL */
        .cs-search {
          flex-grow: 1;
          max-width: 320px;
          min-width: 200px;
        }

        .cs-search-field {
          position: relative;
          display: flex;
          align-items: center;
        }

        .cs-search-icon {
          position: absolute;
          left: 1.1rem;
          width: 1.4rem;
          height: 1.4rem;
          pointer-events: none;
        }

        .cs-search-input {
          width: 100%;
          padding: 0.65rem 2.8rem 0.65rem 3.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 9.9rem;
          color: #fff;
          font-size: 1.05rem;
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .cs-search-input::placeholder {
          color: #71717a;
        }

        .cs-search-input:focus {
          border-color: #00ebaa;
          background: rgba(255, 255, 255, 0.08);
        }

        .cs-search-clear {
          position: absolute;
          right: 1.4rem;
          background: transparent;
          border: none;
          color: #00ebaa;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        /* Large Outer Card Panel (matching exact user specification) */
        .events-gallery-panel {
          position: relative;
          border-radius: 2.2rem;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.18) 0%, rgba(0, 235, 170, 0.12) 32.21%, rgba(0, 235, 170, 0.07) 68.75%, rgba(0, 235, 170, 0.03) 100%), #10161a;
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.3) inset, 0 24px 70px rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0;
        }

        /* Slide layout: Left Info Card + Right Attached Image */
        .events-gallery-slide {
          position: relative;
          display: flex;
          align-items: center;
          min-height: 520px;
          width: 100%;
          border: none;
        }

        /* Right Image Container - Extends edge-to-edge on right and attaches to left card */
        .events-gallery-slide-img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 68%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
          background: #141a20;
          border: none;
          display: block;
        }

        .events-gallery-slide-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          border: none;
          transition: transform 0.6s ease;
        }

        .events-gallery-panel:hover .events-gallery-slide-img img {
          transform: scale(1.02);
        }

        /* Left Floating Info Box - Directly attached / overlapping the image */
        .events-gallery-slide-info {
          position: relative;
          z-index: 2;
          width: 440px;
          max-width: 44%;
          margin: clamp(1.2rem, 2vw, 2rem) 0 clamp(1.2rem, 2vw, 2rem) clamp(1.2rem, 2vw, 2rem);
          background: rgba(7, 22, 17, 0.92);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 1.8rem;
          padding: clamp(1.8rem, 2.4vw, 2.4rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: none;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.7);
        }

        .events-gallery-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #00ebaa;
          background: rgba(0, 235, 170, 0.12);
          border: none;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          width: fit-content;
          margin-bottom: 1rem;
        }

        .events-gallery-slide-title {
          color: #ffffff;
          font-size: clamp(1.45rem, 2vw, 1.85rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 0.85rem;
        }

        .events-gallery-slide-desc {
          color: #a5d8d0;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .events-gallery-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .events-gallery-feature {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          color: #e2e8f0;
          font-size: 0.9rem;
        }

        .events-gallery-btn-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 1rem;
        }

        .events-guide-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1rem;
          font-weight: 700;
          color: #00ebaa;
          text-decoration: none;
          transition: gap 0.25s ease, color 0.25s ease;
        }

        .events-guide-btn:hover {
          gap: 0.85rem;
          color: #46ffc8;
        }

        .events-guide-btn-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 9999px;
          background: #00ebaa;
          color: #04160f;
          box-shadow: 0 0 16px rgba(0, 235, 170, 0.45);
          transition: transform 0.25s ease, filter 0.25s ease;
          border: none;
        }

        .events-guide-btn-arrow:hover {
          transform: scale(1.08);
          filter: brightness(1.05);
        }

        /* Dots Pagination matching Image 1 */
        .events-gallery-dots {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-top: 1.4rem;
        }

        .events-gallery-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.25);
          transition: all 0.25s ease;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .events-gallery-dot.active {
          width: 22px;
          background: #00ebaa;
          box-shadow: 0 0 10px rgba(0, 235, 170, 0.6);
        }

        @media (max-width: 1024px) {
          .events-gallery-slide {
            flex-direction: column-reverse;
            min-height: auto;
          }
          .events-gallery-slide-img {
            position: relative;
            width: 100%;
            height: 320px;
          }
          .events-gallery-slide-info {
            width: 100%;
            max-width: 100%;
            margin: 1.2rem;
          }
        }
      `}</style>

      {/* =========================================================================
          HERO SECTION (2nd Image Layout + 1st Image Emerald Color Theme)
          Full-width background image, edge-to-edge, NO card borders
          ========================================================================= */}
      <section className="events-hero-section">
        {/* Full-width Background Image & Dark Emerald Overlay */}
        <div className="events-hero-bg">
          <Image
            src="/assets/event-hero-1-scaled.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="events-hero-bg-img"
          />
        </div>

        {/* Hero Content Container directly over full-width background */}
        <div className="events-hero-container">
          <h1 className="events-hero-title" data-anim="from-top">
            iGaming Licensing &amp; Regulations
          </h1>

          <div className="events-hero-logo" data-anim="from-bottom" data-anim-delay="1">
            <Image
              src="/assets/logo.webp"
              alt="Kvaornux"
              width={320}
              height={80}
              className="w-auto h-12 sm:h-14 md:h-16 object-contain"
              priority
            />
          </div>

          <div className="events-hero-name" data-anim="from-bottom" data-anim-delay="2">
            Global Compliance &amp; Jurisdiction Architecture
          </div>

          <p className="events-hero-desc" data-anim="from-bottom" data-anim-delay="2">
            Explore licensing requirements, application steps and official resources to help you plan your casino or sportsbook project.
          </p>

          <div data-anim="from-bottom" data-anim-delay="3">
            <a
              href="#contact-us"
              onClick={handleScrollToContact}
              className="btn btn-fill events-hero-btn"
            >
              <span>Discuss Your Casino Platform</span>
            </a>
          </div>

          {/* Bottom Meta Chips Divider */}
          <div className="events-hero-meta" data-anim="from-bottom" data-anim-delay="3">
            <div className="event-info-wrapper">
              <div className="event-chip">
                <ShieldCheck className="event-chip-icon" size={20} />
                <span>Offshore &amp; Tier-1 Frameworks</span>
              </div>

              <div className="event-location">
                <div className="event-chip">
                  <Layers className="event-chip-icon" size={20} />
                  <span>B2B Platform Software</span>
                </div>
                <div className="event-chip event-chip--accent">
                  <span>150+ Providers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EVENTS GALLERY SECTION (Jurisdictions Showcase matching 2nd Image)
          ========================================================================= */}
      <section className="events-gallery-section events-panel">
        <div className="events-gallery-container">
          <div className="events-gallery-toolbar" data-anim="from-top">
            <h2 className="events-gallery-title">
              Jurisdictions
            </h2>

            {/* Jurisdiction Search Field */}
            <div className="cs-search">
              <div className="cs-search-field">
                <svg className="cs-search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2938 14.5697 18.0025 12.8204 18 11C18 7.133 14.867 4 11 4C7.133 4 4 7.133 4 11C4 14.867 7.133 18 11 18C12.8204 18.0025 14.5697 17.2938 15.875 16.025L16.025 15.875Z" fill="#8EE8FF"></path>
                </svg>
                <input
                  type="search"
                  className="cs-search-input"
                  placeholder="Search jurisdictions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="cs-search-clear"
                    aria-label="Clear search"
                    onClick={() => setSearchQuery('')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Large Showcase Panel Container (matching 2nd Image) */}
          {filteredJurisdictions.length === 0 ? (
            <div className="py-16 text-center text-[#94a3b8] text-xl font-medium">
              No jurisdictions found matching your criteria.
            </div>
          ) : (
            <div className="events-gallery-panel" data-anim="from-bottom" data-anim-delay="1">
              <div className="events-gallery-slide">
                {/* Left Floating Info Box */}
                <div className="events-gallery-slide-info">
                  <div>
                    <span className="events-gallery-badge">
                      Union of Comoros · Unified License
                    </span>

                    <h3 className="events-gallery-slide-title">
                      {currentItem.title}
                    </h3>

                    <p className="events-gallery-slide-desc">
                      {currentItem.description}
                    </p>

                    <ul className="events-gallery-features">
                      {currentItem.features.map((feature, idx) => (
                        <li key={idx} className="events-gallery-feature">
                          <svg className="w-3.5 h-3.5 text-[#00ebaa] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 12l10 10 10-10L12 2z" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="events-gallery-btn-row">
                      <Link href={currentItem.link} className="events-guide-btn">
                        <span>View Guide</span>
                      </Link>
                      <Link
                        href={currentItem.link}
                        className="events-guide-btn-arrow"
                        aria-label={`View ${currentItem.title}`}
                      >
                        <ArrowRight size={20} />
                      </Link>
                    </div>

                    {/* Pagination Dots (matching Image 2) */}
                    <div className="events-gallery-dots">
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`events-gallery-dot ${idx === activeSlideIndex ? 'active' : ''}`}
                          onClick={() => setActiveSlideIndex(idx % filteredJurisdictions.length)}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Image Container */}
                <Link href={currentItem.link} className="events-gallery-slide-img">
                  <Image
                    src={currentItem.image}
                    alt={currentItem.imageAlt}
                    fill
                    priority
                    className="object-cover"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          WHAT EACH GUIDE COVERS (Reusing existing StepsSection component)
          ========================================================================= */}
      <StepsSection
        customTitle="What Each Guide Covers"
        customSubtitle="Structured, factual overviews designed to help operators evaluate jurisdictional requirements before deploying platform infrastructure."
        customSteps={[
          {
            id: 1,
            title: 'Regulatory Authority & Official Framework',
            text: 'Official regulatory bodies, governing legislation, and public registry portals for licensee verification.',
          },
          {
            id: 2,
            title: 'Eligibility & Corporate Requirements',
            text: 'Corporate entity structuring, director vetting standards, and AML compliance obligations.',
          },
          {
            id: 3,
            title: 'Application Dossier & Process',
            text: 'Required corporate documentation, procedural stages, and regulatory evaluation checkpoints.',
          },
          {
            id: 4,
            title: 'Statutory Fees & Ongoing Costs',
            text: 'Transparent statutory fees, annual license renewals, and recurring compliance levies.',
          },
          {
            id: 5,
            title: 'Platform & Technical Readiness',
            text: 'Configuring turnkey or white-label casino and sportsbook software to align with regulatory requirements.',
          },
        ]}
      />

      {/* =========================================================================
          RELATED PLATFORM SOLUTIONS (Reusing existing DiscoverMore component)
          ========================================================================= */}
      <DiscoverMore
        customTitle="Related Platform Solutions"
        customSubtitle="Connect your licensed operations with battle-tested casino and sportsbook technology."
        customItems={[
          {
            id: 1,
            title: 'White Label Casino',
            description: 'A ready-to-launch iGaming solution with your branding, fully managed infrastructure, and minimal operational load.',
            icon: Layout,
            link: '/white-label-casino-solutions',
            span: 2,
          },
          {
            id: 2,
            title: 'Turnkey Casino',
            description: 'A full-access modular iGaming platform designed for total business control, scalability, and long-term growth.',
            icon: Key,
            link: '/turnkey-casino-software-solutions',
            span: 2,
          },
          {
            id: 3,
            title: 'Crypto Casino Software',
            description: 'Crypto-ready gaming platform supporting multi-currency digital asset payments, secure transactions, and player wallets.',
            icon: Zap,
            link: '/crypto-casino-software',
            span: 2,
          },
        ]}
      />

      {/* Software Scope Notice */}
      <div className="max-w-4xl mx-auto px-6 py-6 text-center text-xs text-gray-400">
        <p className="m-0">
          Kvaornux is a B2B technology provider supplying gaming software, game aggregation, and platform infrastructure. Kvaornux does not issue gaming licenses, provide legal advice, represent regulatory authorities, or guarantee licensing approval.
        </p>
      </div>

      {/* Contact Section */}
      <section id="contact-us" className="py-16 bg-[#0b0b0f] relative z-10 border-t border-white/10">
        <ContactForm />
      </section>
    </div>
  );
}

