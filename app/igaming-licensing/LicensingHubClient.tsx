'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout, Key, Zap, ShieldCheck, Layers } from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';

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
  const [activeCompareIndex, setActiveCompareIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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
        'Explore Anjouan gaming licence requirements, application steps, costs and official resources for planning your project.',
      image: '/assets/licensing/anjouan-gaming-license.webp',
      imageAlt: 'Anjouan Gaming License Regulatory Framework and Compliance',
      features: [
        'Licensing requirements',
        'Application documents',
        'Fees and ongoing costs',
        'Official resources',
      ],
    },
    {
      id: 'curacao',
      title: 'Curaçao Gaming License',
      slug: 'curacao',
      link: '/igaming-licensing/curacao',
      description:
        'Explore Curaçao gaming licence requirements, application steps, costs and official resources for planning your project.',
      image: '/assets/licensing/curacao-gaming-license.webp',
      imageAlt: 'Curaçao Gaming License GCB Regulatory Framework',
      features: [
        'Licensing requirements',
        'Application documents',
        'Fees and ongoing costs',
        'Official resources',
      ],
    },
    {
      id: 'malta',
      title: 'Malta Gaming License',
      slug: 'malta',
      link: '/igaming-licensing/malta',
      description:
        'Explore Malta gaming licence requirements, application steps, costs and official resources for planning your project.',
      image: '/assets/licensing/malta-mga-license.webp',
      imageAlt: 'Malta Gaming Authority MGA Regulatory Framework',
      features: [
        'Licensing requirements',
        'Application documents',
        'Fees and ongoing costs',
        'Official resources',
      ],
    },
    {
      id: 'kahnawake',
      title: 'Kahnawake Gaming License',
      slug: 'kahnawake',
      link: '/igaming-licensing/kahnawake',
      description:
        'Explore Kahnawake gaming licence requirements, application steps, costs and official resources for planning your project.',
      image: '/assets/licensing/kahnawake-license-3d.webp',
      imageAlt: 'Kahnawake Gaming Commission Regulatory Framework',
      features: [
        'Licensing requirements',
        'Application documents',
        'Fees and ongoing costs',
        'Official resources',
      ],
    },
    {
      id: 'isle-of-man',
      title: 'Isle of Man Gaming License',
      slug: 'isle-of-man',
      link: '/igaming-licensing/isle-of-man',
      description:
        'Explore Isle of Man gaming licence requirements, application steps, costs and official resources for planning your project.',
      image: '/assets/licensing/isle-of-man-license-3d.webp',
      imageAlt: 'Isle of Man Gambling Supervision Commission Regulatory Framework',
      features: [
        'Licensing requirements',
        'Application documents',
        'Fees and ongoing costs',
        'Official resources',
      ],
    },
  ];

  const comparisonCards = [
    {
      id: 'anjouan',
      title: 'Anjouan Licensing',
      description:
        'B2C Operator Licence listed by Anjouan Gaming. Confirm company setup, target-market legal recognition, banking acceptance, and the Anjouan legal-status note before applying.',
      bullets: [
        'Licence: B2C Operator Licence',
        'Issuance Fee: €17,828 on issuance (separate application fee not specified)',
        'Annual Renewal: €17,828 (+ €500 per additional B2C domain)',
        'Setup Focus: Company setup, banking acceptance & legal-status note',
      ],
      href: '/igaming-licensing/anjouan',
      ctaLabel: 'Explore Anjouan',
    },
    {
      id: 'curacao',
      title: 'Curaçao Licensing (LOK)',
      description:
        'B2C Online Gaming Licence under Curaçao’s LOK framework. Requires a company established under Curaçao law with a registered office in Curaçao and ownership/local management disclosures with the CGA.',
      bullets: [
        'Licence: B2C Online Gaming Licence (LOK)',
        'Application Fee: €4,592 (one-time application fee)',
        'Annual Fee: €47,450 total (€24,490 licence + €22,960 supervision)',
        'Setup Focus: Curaçao entity, registered office & CGA disclosures',
      ],
      href: '/igaming-licensing/curacao',
      ctaLabel: 'Explore Curaçao',
    },
    {
      id: 'malta',
      title: 'Malta Licensing (MGA)',
      description:
        'B2C Gaming Service Licence regulated by the Malta Gaming Authority. Requires an EU/EEA company meeting capital, financial reporting, and system audit requirements, with compliance contributions and taxes budgeted separately.',
      bullets: [
        'Licence: B2C Gaming Service Licence (MGA)',
        'Application Fee: €5,000 (non-refundable)',
        'Annual Fee: €25,000 standard (€10,000 for Type 4 only)',
        'Setup Focus: EU/EEA entity, capital, financial reporting & system audit',
      ],
      href: '/igaming-licensing/malta',
      ctaLabel: 'Explore Malta',
    },
    {
      id: 'kahnawake',
      title: 'Kahnawake Licensing (CPA)',
      description:
        'Client Provider Authorization (CPA) regulated by the Kahnawake Gaming Commission. Operations must be hosted from the licensed hosting facility in Kahnawà:ke with Key Person Permit vetting and Control System Submission.',
      bullets: [
        'Licence: Client Provider Authorization (CPA)',
        'Application Fee: US$35,000 before 1 Jan 2027; US$40,000 from 1 Jan 2027 (incl. Year 1)',
        'Annual Fee: US$20,000 regular (up to 6 domains; US$500/yr extra)',
        'Setup Focus: Kahnawà:ke hosting, Key Person vetting & Control System',
      ],
      href: '/igaming-licensing/kahnawake',
      ctaLabel: 'Explore Kahnawake',
    },
    {
      id: 'isle-of-man',
      title: 'Isle of Man Licensing (OGRA)',
      description:
        'Full Online Gambling Licence or Sub-Licence under OGRA. Requires an Isle of Man company, at least two locally resident directors, designated management roles, local hosting, and player fund arrangements.',
      bullets: [
        'Licence: Full Online Gambling Licence / Sub-Licence (OGRA)',
        'Application Fee: £5,250',
        'Annual Fee: £36,750 (Full Licence) / £5,250 (Sub-Licence)',
        'Setup Focus: Isle of Man company, 2 resident directors & local hosting',
      ],
      href: '/igaming-licensing/isle-of-man',
      ctaLabel: 'Explore Isle of Man',
    },
  ];

  const handleComparePrev = () => {
    setActiveCompareIndex((prev) => (prev - 1 + comparisonCards.length) % comparisonCards.length);
  };

  const handleCompareNext = () => {
    setActiveCompareIndex((prev) => (prev + 1) % comparisonCards.length);
  };

  const filteredJurisdictions = jurisdictions.filter((j) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      j.title.toLowerCase().includes(q) ||
      j.description.toLowerCase().includes(q) ||
      j.features.some((f) => f.toLowerCase().includes(q))
    );
  });

  const handlePrev = () => {
    if (filteredJurisdictions.length <= 1) return;
    setActiveSlideIndex((prev) => (prev - 1 + filteredJurisdictions.length) % filteredJurisdictions.length);
  };

  const handleNext = () => {
    if (filteredJurisdictions.length <= 1) return;
    setActiveSlideIndex((prev) => (prev + 1) % filteredJurisdictions.length);
  };

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredJurisdictions.length]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused || filteredJurisdictions.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % filteredJurisdictions.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, filteredJurisdictions.length]);

  // Mobile Touch Swipe Navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

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
          filter: hue-rotate(-95deg) saturate(1.2) brightness(0.48) contrast(1.22);
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
          font-family: 'Gabarito', sans-serif;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          outline: none;
          width: fit-content;
          max-width: 100%;
          border-radius: 9999px;
          padding: 0.75rem 2.25rem;
          min-height: 3.25rem;
          background: radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%);
          cursor: pointer;
          color: #04160f;
          font-weight: 700;
          font-size: 1.05rem;
          line-height: 1.2;
          text-decoration: none;
          text-align: center;
          overflow: hidden;
          transition: filter 0.25s ease;
          box-shadow: 0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset;
          box-sizing: border-box;
          margin-bottom: 0.5rem;
        }

        .events-hero-btn:hover {
          transform: none;
          filter: brightness(0.92);
          color: #04160f;
          box-shadow: 0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset;
        }

        .events-hero-btn:active {
          transform: none;
          filter: brightness(0.86);
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

        /* Large Outer Card Panel */
        .events-gallery-panel {
          position: relative;
          border-radius: 2.2rem;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.10) 0%, rgba(0, 235, 170, 0.04) 40%, rgba(0, 235, 170, 0.01) 100%), #12181d;
          border: none;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
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

        /* Left Floating Info Box - Directly attached / overlapping the image with site theme */
        .events-gallery-slide-info {
          position: relative;
          z-index: 2;
          width: 440px;
          max-width: 44%;
          margin: clamp(1.2rem, 2vw, 2rem) 0 clamp(1.2rem, 2vw, 2rem) clamp(1.2rem, 2vw, 2rem);
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.18) 0%, rgba(0, 235, 170, 0.12) 32.21%, rgba(0, 235, 170, 0.07) 68.75%, rgba(0, 235, 170, 0.03) 100%), #0a141a;
          border: 1px solid rgba(0, 235, 170, 0.35);
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.3) inset, 0 20px 50px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 1.8rem;
          padding: clamp(1.8rem, 2.4vw, 2.4rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
          margin-top: auto;
          padding-top: 1rem;
        }

        .events-guide-btn {
          display: inline-flex;
          align-items: center;
          font-size: 1.05rem;
          font-weight: 700;
          color: #00ebaa;
          text-decoration: none;
          background: transparent;
          border: none;
          outline: none;
          padding: 0;
          transition: color 0.25s ease, opacity 0.25s ease;
          letter-spacing: -0.01em;
          cursor: pointer;
        }

        .events-guide-btn:hover {
          color: #46ffc8;
          opacity: 0.9;
        }

        .events-gallery-toolbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .events-gallery-controls-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1.4rem;
          gap: 1rem;
        }

        /* Dots Pagination matching Image 1 */
        .events-gallery-dots {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-top: 0;
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
          width: 24px;
          background: #00ebaa;
          box-shadow: 0 0 10px rgba(0, 235, 170, 0.6);
        }

        /* Slider Navigation Buttons matching Image 2 */
        .events-slider-nav,
        .events-toolbar-nav {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .events-toolbar-nav {
          display: none;
        }

        @media (min-width: 768px) {
          .events-toolbar-nav {
            display: flex;
          }
        }

        .events-nav-btn {
          width: 2.85rem;
          min-width: 2.85rem;
          height: 2.85rem;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 -3px 4px 0 rgba(6, 10, 13, 0.26) inset, 0 2px 2.8px 0 rgba(255, 255, 255, 0.13) inset;
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          transition: all 0.25s cubic-bezier(0.32, 0.72, 0.3, 1);
          outline: none;
        }

        .events-nav-btn:hover {
          background: rgba(0, 235, 170, 0.22);
          border-color: rgba(0, 235, 170, 0.4);
          color: #00ebaa;
          transform: scale(1.08);
        }

        .events-nav-btn:active {
          transform: scale(0.94);
        }

        .events-slide-animated {
          animation: slideCrossFade 0.4s ease-out;
        }

        @keyframes slideCrossFade {
          from {
            opacity: 0.4;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .events-gallery-panel {
            border-radius: 1.8rem;
            background: linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.05) 40%, rgba(0, 235, 170, 0.01) 100%), #12181d;
            border: none !important;
            box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5);
          }
          .events-gallery-slide {
            flex-direction: column-reverse;
            min-height: auto;
          }
          .events-gallery-slide-img {
            position: relative;
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
            max-height: 280px;
            min-height: 200px;
            display: block;
            border: none !important;
            border-bottom: none !important;
            outline: none;
          }
          .events-gallery-slide-info {
            width: 100%;
            max-width: 100%;
            margin: 0;
            background: transparent;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            border-radius: 0;
            box-shadow: none;
            padding: 1.5rem 1.35rem 1.6rem;
            border: none !important;
            border-top: none !important;
          }
        }

        @media (max-width: 768px) {
          .events-gallery-section {
            padding: 2.5rem 0 3.5rem;
          }
          .events-gallery-container {
            padding: 0 1rem;
          }
          .events-gallery-toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5rem;
          }
          .events-gallery-title-group {
            width: auto;
            display: flex;
            align-items: center;
          }
          .events-gallery-title {
            font-size: 1.85rem;
          }
          .events-gallery-toolbar-actions {
            width: auto;
          }
          .cs-search {
            width: 100%;
            max-width: 100%;
          }
          .cs-search-input {
            font-size: 0.95rem;
            padding: 0.6rem 2.4rem 0.6rem 2.8rem;
          }

          /* Mobile Card Panel: single clean unified card without border */
          .events-gallery-panel {
            border-radius: 1.6rem;
            background: linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.05) 40%, rgba(0, 235, 170, 0.01) 100%), #12181d;
            border: none !important;
            box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5);
          }

          .events-gallery-slide-img {
            max-height: 220px;
            min-height: 180px;
            border: none !important;
            border-bottom: none !important;
          }

          .events-gallery-slide-info {
            padding: 1.25rem 1.15rem 1.35rem;
            border: none !important;
            border-top: none !important;
          }

          .events-gallery-slide-title {
            font-size: 1.4rem;
            line-height: 1.25;
            margin-bottom: 0.65rem;
          }

          .events-gallery-slide-desc {
            font-size: 0.88rem;
            line-height: 1.55;
            margin-bottom: 1rem;
          }

          .events-gallery-features {
            gap: 0.55rem;
            margin-bottom: 1.25rem;
          }

          .events-gallery-feature {
            font-size: 0.85rem;
          }

          /* Mobile View Guide Link */
          .events-gallery-btn-row {
            padding-top: 0.25rem;
            width: 100%;
          }

          .events-guide-btn {
            font-size: 0.98rem;
          }

          /* Mobile Slider Controls: Prev/Next on LEFT, Dots on RIGHT/CENTER */
          /* Padded away from floating WhatsApp/Telegram buttons on bottom-right */
          .events-gallery-controls-footer {
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: 1.15rem;
            padding-right: 3.5rem;
          }

          .events-slider-nav {
            gap: 0.5rem;
          }

          .events-nav-btn {
            width: 2.5rem;
            min-width: 2.5rem;
            height: 2.5rem;
          }

          .events-gallery-dots {
            gap: 0.45rem;
          }

          .events-gallery-dot {
            width: 7px;
            height: 7px;
          }

          .events-gallery-dot.active {
            width: 20px;
          }
        }

        .licensing-compare-carousel-section {
          position: relative;
          padding: 5.5rem 0 6.5rem;
          background: radial-gradient(105.28% 100.86% at 82.74% 0, rgba(0, 235, 170, 0.15) 0, rgba(0, 235, 170, 0) 47.08%),
                      radial-gradient(90.07% 98.52% at 31.01% 0, rgba(0, 195, 179, 0.12) 0, rgba(0, 195, 179, 0) 47.08%),
                      #0b0b0f;
          overflow: hidden;
        }

        .licensing-compare-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 1.25rem 0 2rem;
          --slide-w: 620px;
          --slide-m: 16px;
        }

        .licensing-compare-wrapper::before {
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

        .licensing-compare-wrapper::after {
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

        .licensing-compare-track {
          display: flex;
          align-items: stretch;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          width: max-content;
        }

        .licensing-compare-slide {
          flex-shrink: 0;
          width: var(--slide-w);
          max-width: 84vw;
          margin: 0 var(--slide-m);
          opacity: 0.32;
          transition: opacity 0.5s ease, transform 0.5s ease;
          cursor: pointer;
          display: flex;
        }

        .licensing-compare-slide.active-slide {
          opacity: 1 !important;
          transform: scale(1.02);
          cursor: default;
        }

        .licensing-compare-card {
          width: 100%;
          border-radius: 1.5rem;
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.1) 0%, rgba(0, 235, 170, 0.04) 50%, rgba(0, 235, 170, 0.01) 100%), #10161a;
          padding: 2.25rem 2.25rem 1.85rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(0, 235, 170, 0.14);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
          transition: background 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease;
        }

        .licensing-compare-slide.active-slide .licensing-compare-card {
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.16) 0%, rgba(0, 235, 170, 0.08) 40%, rgba(0, 235, 170, 0.03) 100%), #121c19 !important;
          border-color: rgba(0, 235, 170, 0.28) !important;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.6) !important;
        }

        .licensing-compare-arrow-btn {
          width: 3rem;
          height: 3rem;
          border-radius: 9.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%);
          color: #04160f;
          text-decoration: none;
          box-shadow: 0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset;
          transition: filter 0.25s ease;
          flex-shrink: 0;
        }

        .licensing-compare-arrow-btn:hover {
          filter: brightness(0.92);
        }

        .licensing-compare-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.75rem;
          gap: 1rem;
          position: relative;
          z-index: 10;
        }

        .licensing-compare-nav-btn {
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

        .licensing-compare-nav-btn:hover {
          background: rgba(0, 235, 170, 0.25);
          color: #00ebaa;
          transform: scale(1.05);
        }

        .licensing-compare-dots {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin: 0 1rem;
        }

        .licensing-compare-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .licensing-compare-dot.active-dot {
          width: 26px;
          border-radius: 9999px;
          background: #00ebaa;
          box-shadow: 0 0 12px rgba(0, 235, 170, 0.6);
        }

        @media (max-width: 768px) {
          .licensing-compare-carousel-section {
            padding: 4rem 0 5rem;
          }
          .licensing-compare-wrapper {
            --slide-w: calc(100vw - 48px);
            --slide-m: 8px;
            padding: 0.75rem 0 1.5rem;
          }
          .licensing-compare-wrapper::before,
          .licensing-compare-wrapper::after {
            display: none !important;
          }
          .licensing-compare-slide {
            width: var(--slide-w);
            max-width: calc(100vw - 32px);
            margin: 0 var(--slide-m);
          }
          .licensing-compare-card {
            padding: 1.65rem 1.35rem 1.45rem !important;
            border-radius: 1.35rem !important;
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
            Compare licensing requirements, fees and application steps for five iGaming jurisdictions. Use the official sources to check your options, then plan the software for your casino or sportsbook.
          </p>

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
            <div className="flex items-center">
              <h2 className="events-gallery-title">
                Jurisdictions
              </h2>
            </div>

            <div className="events-gallery-toolbar-actions">
              {/* Toolbar Navigation Buttons (matching Image 2) */}
              {filteredJurisdictions.length > 1 && (
                <div className="events-toolbar-nav">
                  <button
                    type="button"
                    className="events-nav-btn"
                    onClick={handlePrev}
                    aria-label="Previous license"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="events-nav-btn"
                    onClick={handleNext}
                    aria-label="Next license"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Large Showcase Panel Container (matching 2nd Image) */}
          {filteredJurisdictions.length === 0 ? (
            <div className="py-16 text-center text-[#94a3b8] text-xl font-medium">
              No jurisdictions found matching your criteria.
            </div>
          ) : (
            <div
              className="events-gallery-panel"
              data-anim="from-bottom"
              data-anim-delay="1"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div key={currentItem.id} className="events-gallery-slide events-slide-animated">
                {/* Left Floating Info Box */}
                <div className="events-gallery-slide-info">
                  <div>
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
                    </div>

                    {/* Controls Footer: Pagination Dots + Prev/Next Buttons (matching Image 1 & Image 2) */}
                    <div className="events-gallery-controls-footer">
                      <div className="events-gallery-dots">
                        {filteredJurisdictions.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className={`events-gallery-dot ${idx === activeSlideIndex ? 'active' : ''}`}
                            onClick={() => setActiveSlideIndex(idx)}
                            aria-label={`Go to ${filteredJurisdictions[idx].title}`}
                          />
                        ))}
                      </div>

                      {/* Slider Navigation Buttons (matching Image 2) */}
                      <div className="events-slider-nav">
                        <button
                          type="button"
                          className="events-nav-btn"
                          onClick={handlePrev}
                          aria-label="Previous license"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="events-nav-btn"
                          onClick={handleNext}
                          aria-label="Next license"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
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
          COMPARE IGAMING LICENSING OPTIONS (Testimonials-style Carousel + Case-Study Cards)
          ========================================================================= */}
      <section className="licensing-compare-carousel-section relative z-10">
        <div className="max-w-[124rem] mx-auto lg:px-[4.5rem] px-[1.2rem] text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-4">
            Compare iGaming Licensing Options
          </h2>
          <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
            Review key operator routes, published regulatory fees and local setup considerations across five jurisdictions. Confirm current requirements and total startup costs directly with each authority before applying.
          </p>
        </div>

        <div className="licensing-compare-wrapper">
          <div
            className="licensing-compare-track"
            style={{
              transform: `translateX(calc(50vw - (${comparisonCards.length + activeCompareIndex} * (var(--slide-w) + (var(--slide-m) * 2)) + ((var(--slide-w) + (var(--slide-m) * 2)) / 2))))`,
            }}
          >
            {[...comparisonCards, ...comparisonCards, ...comparisonCards].map((card, idx) => {
              const realIdx = idx % comparisonCards.length;
              const isCenterSlide = idx === comparisonCards.length + activeCompareIndex;
              return (
              <div
                key={`${card.id}-${idx}`}
                className={`licensing-compare-slide ${isCenterSlide ? 'active-slide' : ''}`}
                onClick={() => setActiveCompareIndex(realIdx)}
              >
                <div className="licensing-compare-card">
                  <div>
                    <h3 className="text-2xl sm:text-[1.65rem] font-bold text-white mb-4 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-[0.98rem] leading-relaxed mb-6">
                      {card.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-[0.95rem] text-white/90">
                          <svg
                            className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2L2 12l10 10 10-10L12 2z" />
                          </svg>
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                    >
                      <span>{card.ctaLabel}</span>
                    </Link>
                    <Link
                      href={card.href}
                      onClick={(e) => e.stopPropagation()}
                      className="licensing-compare-arrow-btn"
                      aria-label={card.title}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12H19M19 12L13 6M19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          {/* Controls Navigation (Arrows & Pagination Dots) */}
          <div className="licensing-compare-nav">
            <button
              type="button"
              className="licensing-compare-nav-btn"
              aria-label="Previous jurisdiction"
              onClick={handleComparePrev}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <div className="licensing-compare-dots">
              {comparisonCards.map((card, idx) => (
                <button
                  key={card.id}
                  type="button"
                  className={`licensing-compare-dot ${idx === activeCompareIndex ? 'active-dot' : ''}`}
                  aria-label={`View ${card.title}`}
                  onClick={() => setActiveCompareIndex(idx)}
                />
              ))}
            </div>

            <button
              type="button"
              className="licensing-compare-nav-btn"
              aria-label="Next jurisdiction"
              onClick={handleCompareNext}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OPERATOR PLANNING GUIDES (Checklist & Market Access — 2-Column Emerald Cards)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#0b0b0f] relative z-10">
        <div className="max-w-[124rem] mx-auto lg:px-[4.5rem] px-[1.2rem]">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mb-4">
              Operator Planning Guides
            </h2>
            <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
              Organize your application requirements and target-market checks before scoping your platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Online Casino Licensing Checklist',
                description:
                  'Prepare your company documents, launch budget and platform requirements before submitting a licensing application.',
                bullets: [
                  '7-step preparation sequence from offer scope to final review',
                  'Company, ownership, budget, games and payment checks',
                  'Platform & technical brief aligned with regulator checklists',
                ],
                href: '/igaming-licensing/checklist',
                ctaLabel: 'Open Licensing Checklist',
              },
              {
                title: 'iGaming Market Access',
                description:
                  'Find out what to check before accepting players in a new country, state or province.',
                bullets: [
                  'Six practical market checks across product, payments and marketing',
                  'Local vs. cross-border licensing considerations',
                  'Official regulator examples for Great Britain and Ontario',
                ],
                href: '/igaming-licensing/market-access',
                ctaLabel: 'Explore Market Access',
              },
            ].map((guide) => (
              <div
                key={guide.title}
                className="rounded-xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#00ebaa]/50"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a',
                  border: '1px solid rgba(0, 235, 170, 0.22)',
                }}
              >
                <div>
                  <h3 className="text-2xl md:text-[1.75rem] font-bold text-white mb-4">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 text-[0.98rem] leading-relaxed mb-6">
                    {guide.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {guide.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-[0.95rem] text-white/90"
                      >
                        <svg
                          className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 12l10 10 10-10L12 2z" />
                        </svg>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <Link
                    href={guide.href}
                    className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                  >
                    <span>{guide.ctaLabel}</span>
                  </Link>
                  <Link
                    href={guide.href}
                    aria-label={guide.title}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[#04160f] transition-transform hover:scale-105 shrink-0"
                    style={{
                      background:
                        'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                      boxShadow:
                        '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          RELATED PLATFORM SOLUTIONS (Reusing existing DiscoverMore component)
          ========================================================================= */}
      <DiscoverMore
        customTitle="Related Platform Solutions"
        customSubtitle="Explore software options for your casino or sportsbook project."
        customItems={[
          {
            id: 1,
            title: 'White Label Casino',
            description: 'Start with a ready-made casino platform customized for your brand. Source code is available for an additional fee.',
            icon: Layout,
            link: '/white-label-casino-solutions',
            span: 2,
          },
          {
            id: 2,
            title: 'Turnkey Casino',
            description: 'Get casino, sportsbook and platform source code in one package, with ownership terms defined in your agreement.',
            icon: Key,
            link: '/turnkey-casino-software-solutions',
            span: 2,
          },
          {
            id: 3,
            title: 'Crypto Casino Software',
            description: 'Build a branded casino or sportsbook platform with selected crypto payment services and back-office tools.',
            icon: Zap,
            link: '/crypto-casino-software',
            span: 2,
          },
        ]}
      />



      {/* Contact Section */}
      <section id="contact-us" className="py-16 bg-[#0b0b0f] relative z-10">
        <ContactForm />
      </section>
    </div>
  );
}

