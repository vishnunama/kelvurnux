'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Layers,
  Cpu,
  Lock,
  CheckCircle2,
  ArrowRight,
  Wallet,
  Gamepad2,
  Globe,
  RotateCcw,
  TrendingUp,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';

export interface ArchitectureNode {
  step: string;
  title: string;
  subtitle: string;
  details: string;
}

export interface ModuleTab {
  id: string;
  label: string;
  title: string;
  summary: string;
  bullets: string[];
}

export interface TechnicalMetric {
  value: string;
  label: string;
  note: string;
}

export interface ComplianceItem {
  title: string;
  description: string;
}

export interface CaseStudyFaq {
  question: string;
  answer: string;
}

export interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

export interface CaseStudySpecRow {
  parameter: string;
  specification: string;
}

export interface EnterpriseCaseStudyData {
  slug: string;
  eyebrow: string;
  regionBadge: string;
  title: string;
  subtitle: string;
  tags: string[];
  facts: {
    clientProfile: string;
    targetMarket: string;
    solutionModel: string;
    timeline: string;
    techStack: string;
    complianceScope: string;
  };
  heroImage: string;
  heroImageAlt: string;
  dashboardImage: string;
  dashboardImageAlt: string;
  challengeTitle: string;
  challengeParagraphs: string[];
  challengePoints: string[];
  solutionTitle: string;
  solutionParagraphs: string[];
  solutionPoints: string[];
  architectureHeading: string;
  architectureIntro: string;
  architectureNodes: ArchitectureNode[];
  specTable: CaseStudySpecRow[];
  moduleTabs: ModuleTab[];
  complianceHeading: string;
  complianceIntro: string;
  complianceItems: ComplianceItem[];
  metrics: TechnicalMetric[];
  engineeringQuote: {
    quote: string;
    attribution: string;
  };
  faqs: CaseStudyFaq[];
  relatedLinks: RelatedLink[];
  contactCategory: string;
}

const resultIcons = [Gamepad2, Layers, Wallet, RotateCcw, ShieldCheck, TrendingUp];
const tagIcons = [Wallet, Gamepad2, ShieldCheck, Globe];

export default function EnterpriseCaseStudyTemplate({
  data,
}: {
  data: EnterpriseCaseStudyData;
}) {
  const [activeModuleId, setActiveModuleId] = useState(data.moduleTabs[0]?.id || '');
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-anim]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeModule =
    data.moduleTabs.find((tab) => tab.id === activeModuleId) || data.moduleTabs[0];

  return (
    <div ref={pageRef} className="cs-page-anim min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        /* EXACT CASE STUDY DESIGN SYSTEM MATCHING /igaming-case-studies/casino-platform-development 100% */
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
          margin-bottom: 40px;
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
          background: radial-gradient(187.98% 100% at 48.7% 0%, #0c3835 0%, #072225 16.35%, #0a1619 70.3%);
          padding: clamp(32px, 5vw, 48px) clamp(24px, 4vw, 32px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          margin-bottom: 44px;
        }

        .cs-hero-banner-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.28;
          pointer-events: none;
        }

        .cs-hero-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 22, 25, 0.55) 0%, rgba(10, 22, 25, 0.85) 100%);
          pointer-events: none;
        }

        .cs-hero-banner-content {
          position: relative;
          z-index: 5;
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
        }

        .cs-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #00ebaa;
          margin-bottom: 14px;
        }

        .cs-hero-title {
          font-size: clamp(28px, 4vw, 48px);
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
          gap: 14px;
          justify-content: center;
        }

        .cs-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(0, 235, 170, 0.1);
          backdrop-filter: blur(10px);
          border: none;
          color: #ffffff;
          font-size: 15px;
          font-weight: 500;
        }

        .cs-hero-tag svg {
          color: #00ebaa;
          flex-shrink: 0;
        }

        /* FACTS CARDS MATCHING EXACT SPEC */
        .cs-facts {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          margin-bottom: 36px;
        }

        .cs-facts-item {
          flex: 1;
          min-width: 210px;
          max-width: 295px;
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
          font-size: 14px;
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

        /* TWO COLUMN GRID MATCHING EXACT SPEC */
        .cs-two-col-section {
          padding: 48px 0;
          background: radial-gradient(105.28% 100.86% at 82.74% 0, rgba(0, 235, 170, 0.08) 0, rgba(0, 235, 170, 0) 47.08%), radial-gradient(90.07% 98.52% at 31.01% 0, rgba(0, 235, 170, 0.08) 0, rgba(0, 235, 170, 0) 47.08%), #0b0b0f;
        }

        .cs-two-col-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 44px;
          align-items: center;
          margin-bottom: 56px;
        }

        .cs-two-col-grid:last-child {
          margin-bottom: 0;
        }

        .cs-two-col-title {
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 16px;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cs-two-col-content p {
          font-size: 16px;
          line-height: 1.65;
          color: #b4d5da;
          font-weight: 400;
          margin-bottom: 16px;
        }

        .cs-two-col-content ul {
          margin-top: 14px;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          list-style-type: disc;
        }

        .cs-two-col-content li {
          font-size: 15px;
          color: #b4d5da;
          font-weight: 400;
          line-height: 1.55;
        }

        .cs-two-col-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          width: 100%;
          margin: 0 auto;
          border: 1px solid rgba(0, 235, 170, 0.25);
          background: #0d161b;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
        }

        /* SHARED SECTION HEADINGS MATCHING EXACT SITE GRADIENT */
        .cs-section-heading {
          font-size: clamp(26px, 3.8vw, 38px);
          font-weight: 700;
          line-height: 1.15;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 auto 16px;
          text-align: center;
          max-width: 100%;
        }

        .cs-section-sub {
          font-size: 16px;
          line-height: 1.6;
          color: #b4d5da;
          max-width: 720px;
          margin: 0 auto 36px;
          text-align: center;
        }

        /* KVAORNUX GLASS CARD TOKEN */
        .cs-glass-card {
          border-radius: 1.8rem;
          border: 1px solid rgba(0, 235, 170, 0.25);
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.14) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a;
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.2) inset;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* MODULE TABS MATCHING SITE FILTER / CTA SYSTEM */
        .cs-modules-section {
          padding: 56px 0;
          background: #0b0b0f;
        }

        .cs-module-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
        }

        .cs-module-tab {
          padding: 11px 22px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid rgba(0, 235, 170, 0.25);
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.09) 0%, rgba(0, 235, 170, 0.02) 100%), #10161a;
          color: #d1e5e8;
        }

        .cs-module-tab:hover {
          border-color: rgba(0, 235, 170, 0.55);
          color: #ffffff;
        }

        .cs-module-tab.active {
          background: radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%);
          box-shadow: 0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset;
          border-color: transparent;
          color: #04160f;
          font-weight: 700;
        }

        .cs-module-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 32px;
          align-items: center;
        }

        /* ARCHITECTURE & SPEC TABLE SECTION */
        .cs-arch-section {
          padding: 56px 0;
          background: radial-gradient(105.28% 100.86% at 82.74% 0, rgba(0, 235, 170, 0.08) 0, rgba(0, 235, 170, 0) 47.08%), radial-gradient(90.07% 98.52% at 31.01% 0, rgba(0, 235, 170, 0.08) 0, rgba(0, 235, 170, 0) 47.08%), #0b0b0f;
        }

        .cs-arch-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }

        .cs-spec-table {
          width: 100%;
          border-collapse: collapse;
        }

        .cs-spec-table th {
          text-align: left;
          padding: 14px 24px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #00ebaa;
          border-bottom: 1px solid rgba(0, 235, 170, 0.2);
          background: rgba(0, 235, 170, 0.05);
        }

        .cs-spec-table td {
          padding: 16px 24px;
          font-size: 15px;
          line-height: 1.55;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .cs-spec-table tr:last-child td {
          border-bottom: none;
        }

        /* PLATFORM DELIVERED (RESULTS 3x2) MATCHING EXACT SPEC */
        .cs-results {
          padding: 52px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: #0b0b0f;
        }

        .cs-results-heading {
          font-size: clamp(26px, 3.8vw, 38px);
          font-weight: 700;
          line-height: 1.1;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 auto 32px;
          width: max-content;
          max-width: 100%;
        }

        .cs-results-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .cs-results-item {
          display: flex;
          flex-direction: column;
          padding: 24px 24px;
          overflow: hidden;
          position: relative;
          border-radius: 1.8rem;
          border: 1px solid rgba(0, 235, 170, 0.25);
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.14) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a;
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.2) inset;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          text-align: left;
        }

        .cs-results-icon {
          width: 44px;
          height: 44px;
          padding: 10px;
          border-radius: 99px;
          background: #759296;
          color: #0b0b0f;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
        }

        .cs-results-value {
          font-size: 30px;
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .cs-results-label {
          font-size: 15px;
          font-weight: 500;
          line-height: 1.4;
          color: #d1e5e8;
        }

        .cs-results-note {
          font-size: 13px;
          line-height: 1.5;
          color: #8ea7ad;
          margin-top: 6px;
        }

        /* CLIENT TESTIMONIAL MATCHING EXACT SPEC */
        .cs-testimonial {
          padding: 48px 0;
          background: radial-gradient(105.28% 100.86% at 82.74% 0, rgba(0, 235, 170, 0.08) 0, rgba(0, 235, 170, 0) 47.08%), radial-gradient(90.07% 98.52% at 31.01% 0, rgba(0, 235, 170, 0.08) 0, rgba(0, 235, 170, 0) 47.08%), #0b0b0f;
        }

        .cs-testimonial-heading {
          font-size: clamp(26px, 3.8vw, 38px);
          font-weight: 700;
          line-height: 1.1;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 auto 32px;
          width: max-content;
          max-width: 100%;
        }

        .cs-testimonial-card {
          max-width: 960px;
          margin: 0 auto;
          padding: 32px 28px;
          text-align: left;
          position: relative;
          border-radius: 1.8rem;
          border: 1px solid rgba(0, 235, 170, 0.25);
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.14) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a;
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.2) inset;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .cs-testimonial-quote-icon {
          margin-bottom: 24px;
          width: 44px;
          height: 34px;
        }

        .cs-testimonial-quote {
          font-size: 18px;
          line-height: 1.65;
          color: #ffffff;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .cs-testimonial-role {
          font-size: 16px;
          color: #00ebaa;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .cs-facts {
            gap: 16px;
          }
          .cs-facts-item {
            min-width: calc(50% - 16px);
          }
          .cs-results-list {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .cs-arch-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cs-two-col-grid,
          .cs-module-grid {
            display: flex;
            flex-direction: column;
            gap: 28px;
          }
          .cs-two-col-text {
            order: 1;
            width: 100%;
          }
          .cs-two-col-image {
            order: 2;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .cs-container {
            padding: 0 16px;
          }
          .cs-hero-section {
            padding: 88px 0 16px;
          }
          .cs-hero-banner {
            padding: 24px 16px;
            margin-bottom: 20px;
            border-radius: 20px;
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
            max-width: 100%;
            padding: 16px;
            border-radius: 18px;
          }
          .cs-two-col-section,
          .cs-modules-section,
          .cs-arch-section,
          .cs-results,
          .cs-testimonial {
            padding: 36px 0;
          }
          .cs-results-list,
          .cs-arch-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .cs-results-item {
            width: 100%;
            padding: 18px 16px;
            border-radius: 18px;
          }
          .cs-results-value {
            font-size: 26px;
          }
          .cs-testimonial-card {
            padding: 22px 16px;
            border-radius: 18px;
          }
          .cs-testimonial-quote {
            font-size: 15px;
          }
        }

        @keyframes cs-from-bottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cs-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .cs-page-anim [data-anim] { opacity: 0; }
        .cs-page-anim [data-anim="from-bottom"].visible { animation: cs-from-bottom 0.6s ease-out forwards; }
        .cs-page-anim [data-anim="fade-in"].visible { animation: cs-fade-in 0.6s ease-out forwards; }
        .cs-page-anim [data-anim-delay="1"].visible { animation-delay: 0.1s; }
        .cs-page-anim [data-anim-delay="2"].visible { animation-delay: 0.2s; }
      `}</style>

      {/* 1. HERO SECTION & BANNER (EXACT /casino-platform-development DESIGN) */}
      <section className="cs-hero-section">
        <div className="cs-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumbs-item">
              Home
            </Link>
            <span className="breadcrumbs-sep">›</span>
            <Link href="/igaming-case-studies" className="breadcrumbs-item">
              Portfolio
            </Link>
            <span className="breadcrumbs-sep">›</span>
            <span className="breadcrumbs-item breadcrumbs-current">
              {data.eyebrow}
            </span>
          </nav>

          <div data-anim="from-bottom" className="cs-hero-banner">
            <Image
              src={data.heroImage}
              alt={data.heroImageAlt}
              width={1440}
              height={810}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay" />
            <div className="cs-hero-banner-content">
              <div className="cs-hero-eyebrow">
                <Lock className="w-3.5 h-3.5" />
                <span>NDA Case Study • {data.regionBadge}</span>
              </div>

              <h1 className="cs-hero-title">{data.title}</h1>

              <div className="cs-hero-description">
                <p>{data.subtitle}</p>
              </div>

              <div className="cs-hero-tags">
                {data.tags.map((tag, idx) => {
                  const IconComp = tagIcons[idx % tagIcons.length];
                  return (
                    <span key={idx} className="cs-hero-tag">
                      <IconComp className="w-5 h-5" />
                      <span>{tag}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FACTS CARDS (EXACT 4-CARD ROW FROM /casino-platform-development) */}
          <dl data-anim="fade-in" data-anim-delay="1" className="cs-facts">
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Client</dt>
              <dd className="cs-facts-value">{data.facts.clientProfile}</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Market</dt>
              <dd className="cs-facts-value">{data.facts.targetMarket}</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Delivery</dt>
              <dd className="cs-facts-value">{data.facts.timeline}</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Core Stack</dt>
              <dd className="cs-facts-value">{data.facts.techStack}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. TWO COLUMN DETAILS SECTION (EXACT ALTERNATING TEXT/IMAGE LAYOUT) */}
      <section className="cs-two-col-section">
        <div className="cs-container">
          {/* GRID 1: The Challenge (Text Left, Hero Visual Right) */}
          <div className="cs-two-col-grid">
            <div data-anim="from-bottom" className="cs-two-col-text">
              <h2 className="cs-two-col-title">The Challenge</h2>
              <div className="cs-two-col-content">
                {data.challengeParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                <ul>
                  {data.challengePoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div data-anim="fade-in" data-anim-delay="1" className="cs-two-col-image">
              <Image
                src={data.heroImage}
                alt={data.heroImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 2: The Solution (Dashboard Visual Left, Text Right) */}
          <div className="cs-two-col-grid">
            <div data-anim="fade-in" className="cs-two-col-image">
              <Image
                src={data.dashboardImage}
                alt={data.dashboardImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
            <div data-anim="from-bottom" data-anim-delay="1" className="cs-two-col-text">
              <h2 className="cs-two-col-title">The Solution</h2>
              <div className="cs-two-col-content">
                {data.solutionParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                <ul>
                  {data.solutionPoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 3: Security & Regulatory Readiness (Text Left, Compliance Cards Right) */}
          <div className="cs-two-col-grid">
            <div data-anim="from-bottom" className="cs-two-col-text">
              <h2 className="cs-two-col-title">{data.complianceHeading}</h2>
              <div className="cs-two-col-content">
                <p>{data.complianceIntro}</p>
                <ul>
                  {data.complianceItems.map((item, idx) => (
                    <li key={idx}>
                      <strong className="text-white">{item.title}:</strong>{' '}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div data-anim="fade-in" data-anim-delay="1" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {data.complianceItems.map((item, idx) => (
                <div key={idx} className="cs-glass-card p-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#00ebaa] shrink-0" />
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b4d5da] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ENGINEERING MODULES DELIVERED (STYLED 100% TO MATCH KVAORNUX SITE) */}
      <section className="cs-modules-section">
        <div className="cs-container">
          <h2 data-anim="from-bottom" className="cs-section-heading">Core Engineering Modules Delivered</h2>
          <p data-anim="from-bottom" data-anim-delay="1" className="cs-section-sub">
            Interactive breakdown of the production software modules, wallet controls, and back-office tooling built for this engagement.
          </p>

          <div data-anim="fade-in" data-anim-delay="2" className="cs-module-tabs">
            {data.moduleTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveModuleId(tab.id)}
                className={`cs-module-tab ${activeModuleId === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div data-anim="fade-in" data-anim-delay="2" className="cs-module-grid">
            <div className="cs-glass-card p-7 sm:p-8 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                {activeModule.title}
              </h3>
              <p className="text-sm sm:text-base text-[#b4d5da] leading-relaxed mb-5">
                {activeModule.summary}
              </p>
              <ul className="space-y-3">
                {activeModule.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#d1e5e8] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00ebaa] mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs-two-col-image">
              <Image
                src={data.dashboardImage}
                alt={data.dashboardImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SYSTEM ARCHITECTURE & TECHNICAL SPEC TABLE (AEO / GEO ENGINE IN EXACT SITE STYLE) */}
      <section id="system-architecture" className="cs-arch-section">
        <div className="cs-container">
          <h2 data-anim="from-bottom" className="cs-section-heading">{data.architectureHeading}</h2>
          <p data-anim="from-bottom" data-anim-delay="1" className="cs-section-sub">{data.architectureIntro}</p>

          <div data-anim="fade-in" data-anim-delay="1" className="cs-arch-grid">
            {data.architectureNodes.map((node, idx) => (
              <div key={idx} className="cs-glass-card p-6 text-left flex flex-col">
                <span className="inline-block w-fit px-3 py-1 rounded-full text-xs font-bold bg-[#00ebaa]/15 text-[#00ebaa] mb-4">
                  {node.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">{node.title}</h3>
                <p className="text-xs font-semibold text-[#00ebaa] mb-3">{node.subtitle}</p>
                <p className="text-sm text-[#b4d5da] leading-relaxed">{node.details}</p>
              </div>
            ))}
          </div>

          <div data-anim="fade-in" data-anim-delay="2" className="cs-glass-card overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#00ebaa]" />
                Technical Specification Summary
              </h3>
              <span className="text-xs text-[#a5d8d0]">Production Architecture</span>
            </div>
            <div className="overflow-x-auto">
              <table className="cs-spec-table">
                <thead>
                  <tr>
                    <th className="w-1/3">Architecture Layer</th>
                    <th>Implementation Details</th>
                  </tr>
                </thead>
                <tbody>
                  {data.specTable.map((row, idx) => (
                    <tr key={idx}>
                      <td className="font-semibold text-white">{row.parameter}</td>
                      <td className="text-[#b4d5da]">{row.specification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLATFORM DELIVERED (EXACT 3x2 RESULTS GRID FROM /casino-platform-development) */}
      <section className="cs-results">
        <div className="cs-container">
          <h2 data-anim="from-bottom" className="cs-results-heading">Platform Delivered</h2>
          <div data-anim="fade-in" data-anim-delay="1" className="cs-results-list">
            {data.metrics.map((metric, idx) => {
              const IconComp = resultIcons[idx % resultIcons.length];
              return (
                <div key={idx} className="cs-results-item">
                  <div className="cs-results-icon">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <p className="cs-results-value">{metric.value}</p>
                  <p className="cs-results-label">{metric.label}</p>
                  <p className="cs-results-note">{metric.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIAL (EXACT CARD FROM /casino-platform-development) */}
      <section className="cs-testimonial">
        <div className="cs-container">
          <h2 data-anim="from-bottom" className="cs-testimonial-heading">Client testimonials</h2>
          <div data-anim="fade-in" data-anim-delay="1" className="cs-testimonial-card">
            <div className="cs-testimonial-quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="34" viewBox="0 0 44 34" fill="none">
                <path d="M10.3158 34C8.5614 34 6.87719 33.5424 5.26316 32.6273C3.7193 31.6418 2.45614 30.2691 1.47368 28.5093C0.491228 26.7495 0 24.7081 0 22.3851C0 19.9917 0.526316 17.4928 1.57895 14.8882C2.70175 12.2836 4.35088 9.71428 6.52632 7.18013C8.77193 4.64596 11.6491 2.25259 15.1579 0L20.1053 5.2795C17.8596 7.67288 16.1754 10.0311 15.0526 12.354C13.9298 14.6066 13.3684 16.7184 13.3684 18.6894C13.3684 20.8716 13.9298 22.5963 15.0526 23.8634C16.1754 25.1304 17.7193 26.3623 19.6842 27.559C19.0526 29.53 17.8246 31.1139 16 32.3106C14.2456 33.4369 12.3509 34 10.3158 34ZM34.2105 34C32.4561 34 30.7719 33.5424 29.1579 32.6273C27.614 31.6418 26.3509 30.2691 25.3684 28.5093C24.386 26.7495 23.8947 24.7081 23.8947 22.3851C23.8947 19.9917 24.4211 17.4928 25.4737 14.8882C26.5965 12.2836 28.2456 9.71428 30.4211 7.18013C32.6667 4.64596 35.5439 2.25259 39.0526 0L44 5.2795C41.7544 7.67288 40.0702 10.0311 38.9474 12.354C37.8246 14.6066 37.2632 16.7184 37.2632 18.6894C37.2632 20.8716 37.8246 22.5963 38.9474 23.8634C40.0702 25.1304 41.614 26.3623 43.5789 27.559C42.9474 29.53 41.7193 31.1139 39.8947 32.3106C38.1404 33.4369 36.2456 34 34.2105 34Z" fill="#ffffff" fillOpacity="0.2"></path>
              </svg>
            </div>
            <div className="cs-testimonial-quote">
              {data.engineeringQuote.quote}
            </div>
            <div className="cs-testimonial-role">
              {data.engineeringQuote.attribution}
            </div>
          </div>
        </div>
      </section>

      {/* 7. NATIVE SITE FAQ SECTION (MATCHING ENTIRE KVAORNUX WEBSITE 100%) */}
      <FAQSection customFaqData={data.faqs} hideBgImage={true} />

      {/* 8. RELATED SOLUTIONS (EXACT KVAORNUX GLASS CARDS) */}
      <section className="py-12 bg-[#0b0b0f]">
        <div className="cs-container">
          <h2 data-anim="from-bottom" className="cs-section-heading">Explore Related Solutions</h2>
          <div data-anim="fade-in" data-anim-delay="1" className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {data.relatedLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="cs-glass-card p-6 text-left flex flex-col justify-between group transition-all hover:border-[#00ebaa]/55"
              >
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00ebaa] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#b4d5da] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00ebaa]">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT FORM SECTION */}
      <section id="contact-us" className="py-16 bg-[#0b0b0f] relative z-10">
        <ContactForm defaultCategory={data.contactCategory} />
      </section>
    </div>
  );
}
