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
  Gamepad2,
} from 'lucide-react';
import { JurisdictionGuideData } from './types';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';

const licenseImages: Record<string, string> = {
  anjouan: '/assets/licensing/anjouan-gaming-license.webp',
  curacao: '/assets/licensing/curacao-gaming-license.webp',
  malta: '/assets/licensing/malta-mga-license.webp',
  kahnawake: '/assets/licensing/kahnawake-license-3d.webp',
  'isle-of-man': '/assets/licensing/isle-of-man-license-3d.webp',
};

interface Props {
  data: JurisdictionGuideData;
}

export default function JurisdictionDetailClient({ data }: Props) {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const heroBgImage = licenseImages[data.slug] || '/assets/licensing/anjouan-gaming-license.webp';

  const factsList = data.facts && data.facts.length >= 4
    ? data.facts.slice(0, 4)
    : [
        { label: 'Jurisdiction', value: data.jurisdiction },
        { label: 'Regulatory Authority', value: data.licensingAuthority.name },
        { label: 'Permitted Activities', value: 'Content pending verification' },
        { label: 'Licensing Model', value: 'Content pending verification' },
      ];

  const permittedFact = data.facts?.find((f) => f.label.toLowerCase().includes('permitted'));
  const modelFact = data.facts?.find((f) => f.label.toLowerCase().includes('licensing model'));

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
    { id: 'overview', title: data.overviewHeading || 'Overview' },
    { id: 'licensing-authority-and-official-resources', title: data.authorityHeading || 'Licensing Authority and Official Resources' },
    { id: 'eligibility-and-company-requirements', title: data.eligibilityHeading || 'Eligibility and Company Requirements' },
    { id: 'application-documents', title: data.documentsHeading || 'Application Documents' },
    { id: 'application-process', title: data.processHeading || 'Application Process' },
    { id: 'fees-and-ongoing-costs', title: data.feesHeading || 'Fees and Ongoing Costs' },
    { id: 'ongoing-obligations', title: data.obligationsHeading || 'Ongoing Obligations' },
    { id: 'platform-games-and-payment-planning', title: data.platformHeading || 'Platform, Games and Payment Planning' },
    { id: 'sources-and-review-date', title: 'Sources and Review Date' },
    ...(hasFaqs ? [{ id: 'frequently-asked-questions', title: 'Frequently Asked Questions' }] : []),
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
           CASE STUDY STYLE HERO SECTION & BANNER (Matching Image 2 Spec 100%)
           ========================================================================= */
        .cs-hero-section {
          position: relative;
          padding: clamp(120px, 12vw, 160px) 0 40px;
          background: #0b0b0f;
          overflow: hidden;
        }

        .cs-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          color: #a5d8d0;
          margin-bottom: 32px;
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

        .cs-hero-banner {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          background: radial-gradient(ellipse at center, rgba(0, 45, 40, 0.6) 0%, rgba(0, 55, 48, 0.45) 60%, rgba(8, 32, 28, 0.5) 100%), #081a18;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(48px, 6vw, 68px) clamp(24px, 4vw, 44px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          margin-bottom: 44px;
          border: none;
        }

        .cs-hero-banner-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          pointer-events: none;
        }

        .cs-hero-banner-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(0, 40, 35, 0.45) 0%, rgba(0, 55, 48, 0.38) 60%, rgba(0, 50, 45, 0.35) 100%);
          pointer-events: none;
        }

        .cs-hero-banner-content {
          position: relative;
          z-index: 5;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          width: 100%;
        }

        .cs-hero-title {
          font-size: clamp(28px, 4.2vw, 48px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .cs-hero-description {
          font-size: clamp(16px, 1.6vw, 18px);
          line-height: 1.65;
          color: #d1f2ec;
          margin-bottom: 32px;
          font-weight: 400;
        }

        .cs-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }

        .cs-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(0, 235, 170, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: none;
          color: #ffffff;
          font-size: 15px;
          font-weight: 500;
        }

        .cs-hero-tag svg {
          color: #00ebaa;
          flex-shrink: 0;
        }

        /* FACTS CARDS MATCHING EXACT CASE STUDY SPEC */
        .cs-facts {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          margin-bottom: 36px;
        }

        .cs-facts-item {
          flex: 1;
          min-width: 200px;
          max-width: 280px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 24px 20px;
          border-radius: 24px;
          border: 1px solid rgba(0, 235, 170, 0.28);
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.14) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a;
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.2) inset;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          justify-content: center;
          align-items: flex-start;
          text-align: left;
        }

        .cs-facts-label {
          font-size: 15px;
          color: #d1e5e8;
          font-weight: 400;
          line-height: 1.4;
          text-align: left;
        }

        .cs-facts-value {
          font-size: 17px;
          color: #ffffff;
          font-weight: 600;
          line-height: 1.4;
          text-align: left;
        }

        @media (max-width: 768px) {
          .cs-hero-section {
            padding: 100px 0 24px;
          }
          .cs-container {
            padding: 0 16px;
          }
          .cs-hero-banner {
            min-height: auto;
            padding: 32px 18px;
            margin-bottom: 20px;
            border-radius: 20px;
            border: none;
          }
          .cs-hero-title {
            font-size: 24px;
            margin-bottom: 12px;
          }
          .cs-hero-description {
            font-size: 14px;
            margin-bottom: 18px;
          }
          .cs-hero-tags {
            gap: 8px;
          }
          .cs-hero-tag {
            padding: 6px 12px;
            font-size: 13px;
          }
          .cs-facts {
            gap: 12px;
            margin-bottom: 20px;
          }
          .cs-facts-item {
            min-width: 100%;
            width: 100%;
            padding: 16px 16px;
            border-radius: 18px;
          }
          .cs-facts-label {
            font-size: 13px;
          }
          .cs-facts-value {
            font-size: 16px;
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
          HERO SECTION & BANNER (Matching Case Study Spec / Image 2)
          ========================================================================= */}
      <section className="cs-hero-section">
        <div className="cs-container">
          {/* Breadcrumbs */}
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumbs-item">
              Home
            </Link>
            <span className="breadcrumbs-sep">›</span>
            <Link href="/igaming-licensing" className="breadcrumbs-item">
              Licensing &amp; Regulations
            </Link>
            <span className="breadcrumbs-sep">›</span>
            <span className="breadcrumbs-item breadcrumbs-current">
              {data.title}
            </span>
          </nav>

          {/* Hero Banner with 3D License Background */}
          <div className="cs-hero-banner">
            <Image
              src={heroBgImage}
              alt={data.title}
              width={1600}
              height={520}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay"></div>
            <div className="cs-hero-banner-content">
              <h1 className="cs-hero-title">
                {data.title}
              </h1>

              <div className="cs-hero-description">
                <p>{data.summary}</p>
              </div>

              <div className="cs-hero-tags">
                {data.heroTags && data.heroTags.length > 0 ? (
                  data.heroTags.map((tag, idx) => (
                    <span key={idx} className="cs-hero-tag">
                      {idx === 0 && <ShieldCheck className="w-5 h-5 text-[#00ebaa]" />}
                      {idx === 1 && <Gamepad2 className="w-5 h-5 text-[#00ebaa]" />}
                      {idx >= 2 && <Layers className="w-5 h-5 text-[#00ebaa]" />}
                      <span>{tag}</span>
                    </span>
                  ))
                ) : (
                  <>
                    <span className="cs-hero-tag">
                      <ShieldCheck className="w-5 h-5 text-[#00ebaa]" />
                      <span>{data.jurisdiction.split('(')[0].trim()}</span>
                    </span>
                    {permittedFact && (
                      <span className="cs-hero-tag">
                        <Gamepad2 className="w-5 h-5 text-[#00ebaa]" />
                        <span>{permittedFact.value.includes('verification') ? 'Permitted Scope: Verification in Progress' : permittedFact.value}</span>
                      </span>
                    )}
                    {modelFact && (
                      <span className="cs-hero-tag">
                        <Layers className="w-5 h-5 text-[#00ebaa]" />
                        <span>{modelFact.value.includes('verification') ? 'Licensing Model: Verification in Progress' : modelFact.value}</span>
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* FACTS CARDS (Matching Case Study 4-Card Spec) */}
          <div className="cs-facts">
            {factsList.map((fact, idx) => (
              <div key={idx} className="cs-facts-item">
                <span className="cs-facts-label">{fact.label}</span>
                <span className="cs-facts-value">{fact.value}</span>
              </div>
            ))}
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
                <span className="draft-badge">{data.noticeBadge || 'Review Draft'}</span>
                <span className="text-yellow-400 text-sm font-semibold">{data.noticeHeading || 'Verification in Progress'}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed m-0">
                {data.noticeText}
              </p>
              {data.noticeLinks && data.noticeLinks.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                  {data.noticeLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00ebaa] hover:underline inline-flex items-center gap-1 font-medium bg-[#00ebaa]/10 px-2.5 py-1 rounded"
                    >
                      <span>{link.label}</span>
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Content Sections (Left Side, 8 cols) */}
            <main className="lg:col-span-8 blog-content">
              {/* 1. OVERVIEW */}
              <section id="overview" className="mb-14 scroll-mt-28">
                <h2>{data.overviewHeading || 'Overview'}</h2>
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
                    {data.factsNote && (
                      <p className="text-xs text-gray-400 mt-2 italic">{data.factsNote}</p>
                    )}
                  </div>
                )}
              </section>

              {/* 2. LICENSING AUTHORITY AND OFFICIAL RESOURCES */}
              <section id="licensing-authority-and-official-resources" className="mb-14 scroll-mt-28">
                <h2>{data.authorityHeading || 'Licensing Authority and Official Resources'}</h2>
                {data.authorityText && data.authorityText.length > 0 ? (
                  data.authorityText.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : data.licensingAuthority.description ? (
                  <p>{data.licensingAuthority.description}</p>
                ) : (
                  <p className="placeholder-tag">Licensing authority description pending verification.</p>
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
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-[#00ebaa] hover:underline inline-flex items-center gap-1 font-medium">
                            <span>{resource.linkLabel || 'Visit Official Site'}</span>
                            <ExternalLink size={14} />
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
                <h2>{data.eligibilityHeading || 'Eligibility and Company Requirements'}</h2>
                {data.eligibilityText && data.eligibilityText.length > 0 ? (
                  data.eligibilityText.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>
                    {data.eligibilityIntro || `To apply for a licence under ${data.jurisdiction.split('(')[0].trim()} regulations, applicants must satisfy established corporate governance criteria, director fit-and-proper assessments, and compliance standards.`}
                  </p>
                )}
                {data.eligibilityRequirements && data.eligibilityRequirements.length > 0 && (
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
                )}
              </section>

              {/* 4. APPLICATION DOCUMENTS */}
              <section id="application-documents" className="mb-14 scroll-mt-28">
                <h2>{data.documentsHeading || 'Application Documents'}</h2>
                <p>
                  {data.documentsIntro || `The following checklist reflects standard document dossier requirements described in regulatory guidance for ${data.jurisdiction.split('(')[0].trim()}. Individual requirements are confirmed during pre-submission due diligence.`}
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
                {data.documentsClosing && (
                  <p className="text-gray-400 text-sm mt-2">{data.documentsClosing}</p>
                )}
              </section>

              {/* 5. APPLICATION PROCESS */}
              <section id="application-process" className="mb-14 scroll-mt-28">
                <h2>{data.processHeading || 'Application Process'}</h2>
                <p>
                  {data.processIntro || 'The typical licensing workflow moves through legal formation, technical readiness assessment, formal submission, and operational clearance.'}
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
                {data.processTimingNote && (
                  <p className="text-gray-400 text-sm mt-4 italic">{data.processTimingNote}</p>
                )}
              </section>

              {/* 6. FEES AND ONGOING COSTS */}
              <section id="fees-and-ongoing-costs" className="mb-14 scroll-mt-28">
                <h2>{data.feesHeading || 'Fees and Ongoing Costs'}</h2>
                <p>
                  {data.feesIntro || 'Statutory fees and renewal charges must be verified directly against official licensing authority schedules. Kvaornux does not broker licenses or publish unverified commercial fees.'}
                </p>
                {data.fees && data.fees.length > 0 && (
                  <div className="overflow-x-auto my-6">
                    {data.fees.some((f) => f.b2bAmount) ? (
                      <table>
                        <thead>
                          <tr>
                            <th>{data.feesTableHeaders?.charge || 'Charge'}</th>
                            <th>{data.feesTableHeaders?.b2c || 'B2C: serving players'}</th>
                            <th>{data.feesTableHeaders?.b2b || 'B2B: supplying operators'}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.fees.map((fee, idx) => (
                            <tr key={idx}>
                              <td className="font-medium text-white">{fee.item}</td>
                              <td className="text-white">{fee.amount}</td>
                              <td className="text-gray-300">{fee.b2bAmount || 'Not applicable'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
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
                                {fee.amount.includes('verification') ? (
                                  <span className="placeholder-tag">{fee.amount}</span>
                                ) : (
                                  <span className="text-white font-medium">{fee.amount}</span>
                                )}
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
                    )}
                  </div>
                )}
                {data.feesSupportingText && data.feesSupportingText.length > 0 && (
                  <div className="space-y-3 mt-4">
                    {data.feesSupportingText.map((p, idx) => (
                      <p key={idx} className="text-gray-300 text-sm leading-relaxed m-0">{p}</p>
                    ))}
                  </div>
                )}
              </section>

              {/* 7. ONGOING OBLIGATIONS */}
              <section id="ongoing-obligations" className="mb-14 scroll-mt-28">
                <h2>{data.obligationsHeading || 'Ongoing Obligations'}</h2>
                <p>
                  {data.obligationsIntro || 'Licensed operators are required to uphold standard regulatory compliance, maintain transactional records, and observe operational standards on an ongoing basis:'}
                </p>
                {data.obligationsText && data.obligationsText.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {data.obligationsText.map((p, idx) => (
                      <p key={idx} className="text-gray-300 text-sm leading-relaxed m-0">{p}</p>
                    ))}
                  </div>
                )}
                {data.ongoingObligations && data.ongoingObligations.length > 0 && (
                  <ul>
                    {data.ongoingObligations.map((obl, idx) => (
                      <li key={idx}>{obl}</li>
                    ))}
                  </ul>
                )}
              </section>

              {/* 8. PLATFORM, GAMES AND PAYMENT PLANNING */}
              <section id="platform-games-and-payment-planning" className="mb-14 scroll-mt-28">
                <h2>{data.platformHeading || 'Platform, Games and Payment Planning'}</h2>
                <p>
                  {data.platformIntro || 'Operating an interactive gaming brand requires robust technical infrastructure designed to align with jurisdictional requirements:'}
                </p>
                {data.platformSupportingCopy && (
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {data.platformSupportingCopy}
                  </p>
                )}

                <div className="space-y-5 my-6">
                  {data.platformPlanning.cards && data.platformPlanning.cards.length > 0 ? (
                    data.platformPlanning.cards.map((card, idx) => (
                      <div key={idx} className="glass-card p-6 rounded-xl">
                        <h3 className="text-white font-bold text-lg mb-2 mt-0 flex items-center gap-2">
                          <Layers className="text-[#00ebaa]" size={20} />
                          <span>{card.title}</span>
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {card.description}
                        </p>
                        <Link href={card.linkHref} className="text-xs uppercase font-semibold tracking-wider text-[#00ebaa] hover:underline inline-flex items-center gap-1">
                          <span>{card.linkText || (idx === 0 ? 'Explore Turnkey Platform Architecture' : idx === 1 ? 'Explore Game Aggregator API' : 'Explore Crypto & Fiat Wallet Capabilities')}</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    ))
                  ) : (
                    <>
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
                    </>
                  )}
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href="#contact-us"
                    onClick={handleScrollToContact}
                    className="inline-flex items-center justify-center rounded-full bg-[#00ebaa] text-black font-semibold text-sm px-6 py-3 hover:bg-[#00d69b] transition-all gap-2"
                  >
                    <span>Discuss Your Platform</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </section>

              {/* 9. SOURCES AND REVIEW DATE */}
              <section id="sources-and-review-date" className="mb-14 scroll-mt-28">
                <h2>Sources and Review Date</h2>
                <p>
                  Information on this page is compiled for technical platform planning. Official statutory records are reviewed periodically:
                </p>

                <div className="glass-card p-6 rounded-xl my-4 text-sm">
                  <div className="mb-4">
                    <span className="text-gray-400 block mb-2 font-medium">Source References:</span>
                    {data.sources && data.sources.length > 0 ? (
                      <ul className="list-disc pl-5 m-0 space-y-2 text-gray-300">
                        {data.sources.map((src, idx) => (
                          <li key={idx}>
                            {src.url ? (
                              <a
                                href={src.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00ebaa] hover:underline inline-flex items-center gap-1"
                              >
                                <span>{src.title}</span>
                                <ExternalLink size={12} />
                              </a>
                            ) : (
                              <span>{src.title}</span>
                            )}
                            {src.notes && <span className="text-gray-400 ml-1">({src.notes})</span>}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="placeholder-tag">Content pending verification against official registry</span>
                    )}
                  </div>

                  <div>
                    <span className="text-gray-400 block mb-1 font-medium">{data.reviewDateLabel || 'Review Date:'}</span>
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
                    <span>Discuss Your Platform</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Standalone Full-Width matching CustomSweepstakesClient design) */}
      {hasFaqs && (
        <FAQSection
          id="frequently-asked-questions"
          customFaqData={data.faqs}
          hideBgImage={true}
        />
      )}

      {/* Contact Section */}
      <section id="contact-us" className="py-16 bg-[#0b0b0f] relative z-10">
        <ContactForm />
      </section>
    </div>
  );
}

