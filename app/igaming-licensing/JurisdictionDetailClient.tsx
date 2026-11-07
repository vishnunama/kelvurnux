'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldAlert,
  ShieldCheck,
  FileText,
  CheckCircle2,
  ExternalLink,
  Layers,
  ArrowRight,
  HelpCircle,
  Calendar,
  AlertTriangle,
} from 'lucide-react';
import { JurisdictionGuideData } from './types';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';

interface Props {
  data: JurisdictionGuideData;
}

export default function JurisdictionDetailClient({ data }: Props) {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('contact-us') || document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 220;

      sectionElements.forEach((sec) => {
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        const id = sec.getAttribute('id') || '';

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasFaqs = Boolean(data.faqs && data.faqs.length > 0);

  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'licensing-authority-and-official-resources', title: 'Licensing Authority and Official Resources' },
    { id: 'eligibility-and-company-requirements', title: 'Eligibility and Company Requirements' },
    { id: 'application-documents', title: 'Application Documents' },
    { id: 'application-process', title: 'Application Process' },
    { id: 'fees-and-ongoing-costs', title: 'Fees and Ongoing Costs' },
    { id: 'ongoing-obligations', title: 'Ongoing Obligations' },
    { id: 'platform-games-and-payment-planning', title: 'Platform, Games and Payment Planning' },
    ...(hasFaqs ? [{ id: 'frequently-asked-questions', title: 'Frequently Asked Questions' }] : []),
    { id: 'sources-and-review-date', title: 'Sources and Review Date' },
  ];

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

        [data-anim-delay="1"] { animation-delay: 0.1s !important; }
        [data-anim-delay="2"] { animation-delay: 0.2s !important; }

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

        /* BREADCRUMBS - FROM CASE STUDY SPEC */
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          color: #a5d8d0;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .breadcrumbs-item {
          color: #a5d8d0;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .breadcrumbs-item:hover {
          color: #00ebaa;
        }

        .breadcrumbs-sep {
          color: #4a6863;
        }

        .breadcrumbs-current {
          color: #ffffff;
          font-weight: 500;
        }

        /* DRAFT NOTICE BANNER */
        .draft-notice-card {
          border-radius: 1.2rem;
          border: 1px solid rgba(234, 179, 8, 0.4);
          background: linear-gradient(180deg, rgba(234, 179, 8, 0.12) 0%, rgba(234, 179, 8, 0.04) 100%), #121815;
          padding: 1.4rem 1.8rem;
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          margin-bottom: 3rem;
        }

        .draft-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(234, 179, 8, 0.2);
          color: #facc15;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* TOC STICKY SIDEBAR - FROM BLOG POST */
        .toc-card {
          position: sticky;
          top: 6rem;
          z-index: 10;
          max-height: calc(100vh - 8rem);
          overflow-y: auto;
          border-radius: 1.2rem;
          border: 1px solid rgba(0, 235, 170, 0.25);
          background: linear-gradient(180deg, #0a2528 0%, #07151c 100%);
          box-shadow: -2px 2px 4px 0 rgba(255, 139, 67, 0.11) inset, 0 -2px 4.6px 0 rgba(126, 201, 255, 0.16) inset, 0 10px 30px rgba(0, 0, 0, 0.4);
          padding: 1.8rem 1.5rem;
          width: 100%;
        }

        .toc-card::-webkit-scrollbar {
          width: 4px;
        }
        .toc-card::-webkit-scrollbar-thumb {
          background: rgba(0, 235, 170, 0.3);
          border-radius: 4px;
        }

        .toc-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .toc-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .toc-link-item {
          font-size: 0.92rem;
          line-height: 1.45;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s ease;
          display: block;
        }

        .toc-link-item:hover {
          color: #00ebaa;
          padding-left: 0.25rem;
        }

        .toc-link-item.active {
          color: #00ebaa;
          font-weight: 700;
        }

        /* BLOG/DETAIL CONTENT STYLING - REUSING SITE'S ESTABLISHED STYLES */
        .blog-content h2 {
          font-size: clamp(1.75rem, 2.5vw, 2.2rem);
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: #fff;
          scroll-margin-top: 110px;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.98) 10%, rgba(200, 230, 220, 0.85) 90%), #fff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .blog-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-top: 1.6rem;
          margin-bottom: 0.85rem;
          color: #00ebaa;
        }

        .blog-content p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #b4d5da;
          margin-bottom: 1.25rem;
        }

        .blog-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          list-style-type: disc;
        }

        .blog-content li {
          font-size: 1rem;
          line-height: 1.6;
          color: #d1e5e8;
        }

        /* REUSABLE ESTABLISHED TABLE STYLES - FROM BLOG POST */
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 235, 170, 0.2);
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .blog-content th, .blog-content td {
          padding: 0.95rem 1.1rem;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.95rem;
          color: #d1d5db;
        }

        .blog-content th {
          background: rgba(0, 235, 170, 0.1);
          color: #00ebaa;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.82rem;
          letter-spacing: 0.05em;
        }

        .blog-content tr:last-child td {
          border-bottom: none;
        }

        .glass-card {
          background: linear-gradient(121deg, rgba(0, 235, 170, 0.15) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a;
          border: 1px solid rgba(0, 235, 170, 0.28);
          border-radius: 1.2rem;
        }

        .placeholder-tag {
          display: inline-block;
          font-size: 0.82rem;
          color: #94a3b8;
          font-style: italic;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: 0.35rem;
          border: 1px dashed rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 1024px) {
          .portfolio-hero {
            padding: 9rem 0 4rem;
          }
        }

        @media (max-width: 600px) {
          .portfolio-hero {
            padding: 10rem 0 3.5rem;
          }
          .portfolio-hero-container {
            padding: 0 1rem !important;
          }
          .portfolio-hero-title {
            font-size: clamp(2.1rem, 7.5vw, 2.8rem);
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
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="breadcrumbs justify-center mb-4" data-anim="from-top">
            <Link href="/" className="breadcrumbs-item">
              Home
            </Link>
            <span className="breadcrumbs-sep">/</span>
            <Link href="/igaming-licensing" className="breadcrumbs-item">
              Licensing &amp; Regulations
            </Link>
            <span className="breadcrumbs-sep">/</span>
            <span className="breadcrumbs-current">
              {data.title}
            </span>
          </nav>

          <h1 className="events-hero-title" data-anim="from-top">
            {data.title}
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
            {data.jurisdiction}
          </div>

          <p className="events-hero-desc" data-anim="from-bottom" data-anim-delay="2">
            {data.summary}
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
                <span>Anjouan, Union of Comoros</span>
              </div>

              <div className="event-location">
                <div className="event-chip">
                  <Layers className="event-chip-icon" size={20} />
                  <span>Casino &amp; Sportsbook</span>
                </div>
                <div className="event-chip event-chip--accent">
                  <span>B2B &amp; B2C Scope</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN DETAIL CONTENT AREA WITH STICKY TOC
          ========================================================================= */}
      <section className="py-12 bg-[#0b0b0f] relative z-10">
        <div className="max-w-[124rem] mx-auto lg:px-[4.5rem] px-[1.2rem]">
          {/* Visible Research Pending Notice Banner */}
          <div className="draft-notice-card">
            <AlertTriangle className="text-yellow-400 shrink-0 mt-0.5" size={24} />
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="draft-badge">Review Draft</span>
                <span className="text-yellow-400 text-sm font-semibold">Verification in Progress</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed m-0">
                {data.noticeText}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Sections (Left Side, 8 cols) */}
            <main className="lg:col-span-8 blog-content">
              {/* 1. OVERVIEW */}
              <section id="overview" className="mb-14 scroll-mt-28">
                <h2>Overview</h2>
                {data.overviewText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                {/* FACTS TABLE */}
                {data.facts && data.facts.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-white text-lg font-semibold mb-3">Key Jurisdiction Facts</h3>
                    <div className="overflow-x-auto">
                      <table>
                        <thead>
                          <tr>
                            <th style={{ width: '40%' }}>Parameter</th>
                            <th style={{ width: '60%' }}>Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.facts.map((fact, idx) => (
                            <tr key={idx}>
                              <td className="font-medium text-white">{fact.label}</td>
                              <td>
                                {fact.value.includes('verification') ? (
                                  <span className="placeholder-tag">{fact.value}</span>
                                ) : (
                                  <span>{fact.value}</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </section>

              {/* 2. LICENSING AUTHORITY AND OFFICIAL RESOURCES */}
              <section id="licensing-authority-and-official-resources" className="mb-14 scroll-mt-28">
                <h2>Licensing Authority and Official Resources</h2>
                <p>
                  Regulatory oversight for interactive gaming operations in Anjouan is managed through the local administrative gaming board and offshore authority framework.
                </p>
                {data.licensingAuthority.description && (
                  <p>{data.licensingAuthority.description}</p>
                )}

                <div className="glass-card p-6 rounded-xl my-6">
                  <h4 className="text-white font-semibold text-base mb-3 flex items-center gap-2">
                    <ExternalLink className="text-[#00ebaa]" size={18} />
                    <span>Official Resources &amp; Verification Portals</span>
                  </h4>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {data.licensingAuthority.officialResources?.map((resource, idx) => (
                      <li key={idx} className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-none">
                        <span className="text-gray-300 font-medium">{resource.name}</span>
                        {resource.verified && resource.url ? (
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-[#00ebaa] hover:underline">
                            Visit Official Site
                          </a>
                        ) : (
                          <span className="placeholder-tag">{resource.description || 'Content pending verification'}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* 3. ELIGIBILITY AND COMPANY REQUIREMENTS */}
              <section id="eligibility-and-company-requirements" className="mb-14 scroll-mt-28">
                <h2>Eligibility and Company Requirements</h2>
                <p>
                  To apply for an offshore gaming license, applicants must satisfy standard corporate governance criteria, director fit-and-proper assessments, and AML operational standards.
                </p>
                <ul>
                  {data.eligibilityRequirements.map((req, idx) => (
                    <li key={idx}>
                      {req.includes('verification') ? (
                        <>
                          {req.replace('(Content pending verification).', '')}
                          <span className="placeholder-tag ml-1">Content pending verification</span>
                        </>
                      ) : (
                        req
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 4. APPLICATION DOCUMENTS */}
              <section id="application-documents" className="mb-14 scroll-mt-28">
                <h2>Application Documents</h2>
                <p>
                  The following checklist reflects standard document dossier requirements typical for offshore gaming license applications. Individual requirements are confirmed during pre-submission due diligence.
                </p>
                <div className="glass-card p-6 rounded-xl my-6">
                  <div className="space-y-4">
                    {data.applicationDocuments.map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-none last:pb-0">
                        <FileText className="text-[#00ebaa] shrink-0 mt-1" size={18} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="text-white font-medium text-base">{doc.title}</span>
                            {doc.mandatory && (
                              <span className="text-xs uppercase tracking-wider text-[#00ebaa] bg-[#00ebaa]/10 px-2 py-0.5 rounded">
                                Required
                              </span>
                            )}
                          </div>
                          {doc.description && (
                            <p className="text-gray-400 text-sm mt-1 mb-0 leading-normal">
                              {doc.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 5. APPLICATION PROCESS */}
              <section id="application-process" className="mb-14 scroll-mt-28">
                <h2>Application Process</h2>
                <p>
                  The typical licensing workflow moves through legal formation, technical readiness assessment, formal submission, and operational clearance.
                </p>
                <div className="space-y-4 my-6">
                  {data.applicationProcessSteps.map((step) => (
                    <div key={step.step} className="glass-card p-5 rounded-xl flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#00ebaa]/15 border border-[#00ebaa]/40 text-[#00ebaa] flex items-center justify-center font-bold text-sm shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-base mb-1">{step.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed m-0">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. FEES AND ONGOING COSTS */}
              <section id="fees-and-ongoing-costs" className="mb-14 scroll-mt-28">
                <h2>Fees and Ongoing Costs</h2>
                <p>
                  Statutory fees and renewal charges must be verified directly against official licensing authority schedules. Kvaornux does not broker licenses or publish unverified commercial fees.
                </p>
                {data.fees && data.fees.length > 0 && (
                  <div className="overflow-x-auto my-6">
                    <table>
                      <thead>
                        <tr>
                          <th>Fee Component</th>
                          <th>Amount</th>
                          <th>Currency</th>
                          <th>Source &amp; Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.fees.map((fee, idx) => (
                          <tr key={idx}>
                            <td className="font-medium text-white">{fee.item}</td>
                            <td>
                              <span className="placeholder-tag">{fee.amount}</span>
                            </td>
                            <td>{fee.currency}</td>
                            <td className="text-xs text-gray-400">
                              <div>{fee.notes}</div>
                              <span className="text-[#00ebaa]/80 italic">({fee.source})</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>

              {/* 7. ONGOING OBLIGATIONS */}
              <section id="ongoing-obligations" className="mb-14 scroll-mt-28">
                <h2>Ongoing Obligations</h2>
                <p>
                  Licensed operators are required to uphold standard regulatory compliance, maintain transactional records, and observe operational standards on an ongoing basis:
                </p>
                <ul>
                  {data.ongoingObligations.map((obl, idx) => (
                    <li key={idx}>{obl}</li>
                  ))}
                </ul>
              </section>

              {/* 8. PLATFORM, GAMES AND PAYMENT PLANNING */}
              <section id="platform-games-and-payment-planning" className="mb-14 scroll-mt-28">
                <h2>Platform, Games and Payment Planning</h2>
                <p>
                  Operating an interactive gaming brand requires robust technical infrastructure designed to align with jurisdictional requirements:
                </p>

                <div className="space-y-5 my-6">
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-white font-bold text-lg mb-2 mt-0 flex items-center gap-2">
                      <Layers className="text-[#00ebaa]" size={20} />
                      <span>Platform Infrastructure</span>
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {data.platformPlanning.casinoTech}
                    </p>
                    <Link href="/turnkey-casino-software-solutions" className="text-xs uppercase font-semibold tracking-wider text-[#00ebaa] hover:underline inline-flex items-center gap-1">
                      <span>Explore Turnkey Platform Architecture</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-white font-bold text-lg mb-2 mt-0 flex items-center gap-2">
                      <Layers className="text-[#00ebaa]" size={20} />
                      <span>Game Content &amp; Aggregation</span>
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {data.platformPlanning.gameAggregation}
                    </p>
                    <Link href="/casino-aggregator-api-solution" className="text-xs uppercase font-semibold tracking-wider text-[#00ebaa] hover:underline inline-flex items-center gap-1">
                      <span>Explore Game Aggregator API</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-white font-bold text-lg mb-2 mt-0 flex items-center gap-2">
                      <Layers className="text-[#00ebaa]" size={20} />
                      <span>Payments &amp; Ledger Reconciliation</span>
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {data.platformPlanning.paymentsAndWallets}
                    </p>
                    <Link href="/crypto-casino-software" className="text-xs uppercase font-semibold tracking-wider text-[#00ebaa] hover:underline inline-flex items-center gap-1">
                      <span>Explore Crypto &amp; Fiat Wallet Capabilities</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Software Provider Scope Notice */}
                <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-gray-400 leading-relaxed my-6">
                  <strong className="text-white block mb-1">Notice of Software Scope:</strong>
                  Kvaornux is a B2B technology provider supplying gaming software, game aggregation, and platform infrastructure. Kvaornux does not issue gaming licenses, provide legal advice, represent regulatory authorities, or guarantee licensing approval. Licensing remains the sole responsibility of the operating entity.
                </div>
              </section>

              {/* 9. FREQUENTLY ASKED QUESTIONS (Conditionally rendered) */}
              {hasFaqs && (
                <section id="frequently-asked-questions" className="mb-14 scroll-mt-28">
                  <h2>Frequently Asked Questions</h2>
                  <FAQSection faqs={data.faqs} hideBgImage />
                </section>
              )}

              {/* 10. SOURCES AND REVIEW DATE */}
              <section id="sources-and-review-date" className="mb-14 scroll-mt-28">
                <h2>Sources and Review Date</h2>
                <p>
                  Information on this page is compiled for technical platform planning. Official statutory records are reviewed periodically:
                </p>

                <div className="glass-card p-6 rounded-xl my-4 text-sm">
                  <div className="mb-4">
                    <span className="text-gray-400 block mb-1 font-medium">Source References:</span>
                    {data.sources && data.sources.length > 0 ? (
                      <ul className="list-disc pl-5 m-0 space-y-1 text-gray-300">
                        {data.sources.map((src, idx) => (
                          <li key={idx}>
                            <span>{src.title}</span>
                            {src.notes && <span className="text-gray-400 ml-1">({src.notes})</span>}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="placeholder-tag">Content pending verification against official registry</span>
                    )}
                  </div>

                  <div>
                    <span className="text-gray-400 block mb-1 font-medium">Review Date:</span>
                    {data.reviewDate ? (
                      <span className="text-white font-semibold flex items-center gap-2">
                        <Calendar size={16} className="text-[#00ebaa]" />
                        {data.reviewDate}
                      </span>
                    ) : (
                      <span className="placeholder-tag">Content pending verification (review draft)</span>
                    )}
                  </div>
                </div>
              </section>
            </main>

            {/* Table of Contents Sticky Sidebar (Right Side, 4 cols) */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="toc-card">
                <h3 className="toc-title">Table of Contents</h3>
                <ul className="toc-list">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`toc-link-item ${activeSection === item.id ? 'active' : ''}`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Sidebar Platform CTA */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-white text-sm font-bold mb-2">
                    Planning Platform Technology?
                  </h4>
                  <p className="text-xs text-gray-400 mb-4 leading-normal">
                    Align your casino software and game aggregation with your chosen jurisdiction.
                  </p>
                  <a
                    href="#contact-us"
                    onClick={handleScrollToContact}
                    className="portfolio-hero-btn text-xs py-2 px-4 h-auto w-full font-bold"
                  >
                    <span>Discuss Your Casino Platform</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-16 bg-[#0b0b0f] relative z-10 border-t border-white/10">
        <ContactForm />
      </section>
    </div>
  );
}

