'use client';

import React, { useState } from 'react';
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
  Zap,
  Sparkles,
  Server,
  Smartphone,
  Coins,
  Check,
  Rocket,
  Code,
  Users,
  Star,
  FileCode,
  Store,
  Activity,
  Headphones,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import { SPORTSBOOK_SOFTWARE_FAQS } from './faqData';

const resultIcons = [Zap, Globe, Layers, Activity, Server, Rocket];
const tagIcons = [Zap, ShieldCheck, Layers, Wallet, Globe];

export default function SportsbookSoftwareClient() {
  const [activeModuleId, setActiveModuleId] = useState('inplay-engine');

  const handleScrollToContact = () => {
    const section = document.getElementById('contact-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
    }
  };

  // Core Engineering Modules
  const moduleTabs = [
    {
      id: 'inplay-engine',
      label: 'In-Play Betting Engine',
      title: 'High-Throughput In-Play Engine & Bet Slip Execution',
      summary:
        'Engineered for maximum player engagement and peak matchday concurrency, delivering instant live odds shifts, zero bet slip lag, and dynamic Bet Builder capabilities.',
      image: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
      bullets: [
        'Sub-second live odds updates with real-time green/red price shift highlights and auto-accept options',
        'Same-game Bet Builder engine enabling correlated accumulators across match outcomes, player props, and totals',
        'Mathematical dynamic cashout supporting full cashout, partial cashout, and pre-set automated cashout thresholds',
        'Live match tracker radar displaying interactive pitch visualizations, ball momentum, and real-time game telemetry',
      ],
    },
    {
      id: 'trading-desk',
      label: 'Risk & Trading Desk',
      title: 'Real-Time Book Liability Desk & Sharp Player Defense',
      summary:
        'Complete central sportsbook management software giving trading teams granular visibility and instant control over bookmaker liability before high-variance outcomes affect GGR.',
      image: '/assets/case-studies/sportsbook-platform/risk-dashboard.webp',
      bullets: [
        'Real-time exposure heatmaps calculated dynamically per selection, tournament fixture, and bettor segment',
        'Automated stake factor limitation and dynamic bet delay queues protecting against syndicated sharp bettors',
        'Per-league margin management, regional market toggles, and customized overround adjustments across 80+ sports',
        'One-click emergency market suspensions, official match voiding workflows, and automatic grade settlement verification',
      ],
    },
    {
      id: 'odds-feeds',
      label: 'Odds Feeds & APIs',
      title: 'Multi-Source Odds Feed Normalization & Redundancy',
      summary:
        'Unified sports betting software data pipeline integrating global sports data feeds with sub-140ms WebSocket delivery and automated multi-provider failover.',
      image: '/assets/sportsbook-developer/fiverr-api-slide.jpg',
      bullets: [
        'Pre-integrated official odds APIs from Betradar (Sportradar), Pinnacle Solution, Kambi, and Genius Sports',
        'Topic-scoped WebSocket channels streaming compressed price deltas exclusively to active betting client rooms',
        'Automated ticket grading and match result settlement triggered instantly by verified official sports feeds',
        'Modular sportsbook iframe integration for embedding into existing online casino lobbies with single-wallet sync',
      ],
    },
    {
      id: 'pam-backoffice',
      label: 'PAM & Back Office',
      title: 'Enterprise Player Account Management & Bookie Hierarchy',
      summary:
        'Full-scale player management, multi-tier agent cashier software, and casino aggregation engineered for digital, retail, and crypto-friendly operators.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      bullets: [
        'Immutable double-entry single-wallet ledger enabling seamless wagering across sportsbook, casino, and virtuals',
        'Casino game aggregator connectivity linking over 10,000+ slots and live dealer tables from 150+ top studios',
        'Multi-tier agent, master agent, and cashier hierarchy with real-time weekly sheet accounting and commission splits',
        'Retail betting shop POS software with barcode thermal ticket printing and over-the-counter redemption scanners',
      ],
    },
  ];

  const activeModule = moduleTabs.find((m) => m.id === activeModuleId) || moduleTabs[0];

  const architectureNodes = [
    {
      step: 'Layer 01',
      title: 'Odds Feed Ingestion',
      subtitle: 'Multi-Feed Normalizer + Failover',
      details:
        'Consumes contracted sports data feeds, normalizes market schemas across 80+ sports, and caches active pricing snapshots in Redis with instant fallback.',
    },
    {
      step: 'Layer 02',
      title: 'WebSocket Delta Gateway',
      subtitle: 'Socket.io + Redis Pub/Sub',
      details:
        'Pushes sub-140ms live odds updates, match visualization telemetry, and suspension states strictly to subscribed event rooms for minimal bandwidth.',
    },
    {
      step: 'Layer 03',
      title: 'High-Throughput Validator',
      subtitle: 'Risk Rules + Atomic Single-Wallet',
      details:
        'Validates odds tolerances, market liability limits, and player profiles before committing atomic ledger transactions across online and retail channels.',
    },
    {
      step: 'Layer 04',
      title: 'Trading & Settlement Desk',
      subtitle: 'Live Exposure + Auto-Grading',
      details:
        'Real-time book liability heatmaps, sharp-player stake limits, automated ticket grading, and regulatory audit logging with complete accounting reports.',
    },
  ];

  const specTable = [
    { parameter: 'Supported Betting Types', specification: 'Singles, accumulators (parlays), round robins, system wagers, chain bets, same-game Bet Builder, and live in-play wagering' },
    { parameter: 'Live Odds Distribution', specification: 'Topic-scoped WebSocket delta streaming backed by Redis Pub/Sub for sub-140ms latency and high concurrent connections' },
    { parameter: 'Risk & Liability Engine', specification: 'Real-time exposure calculation per selection/fixture, dynamic bet acceptance delays, and syndicated sharp bettor stake caps' },
    { parameter: 'Dynamic Cashout Engine', specification: 'Algorithmic real-time cashout supporting full cashout, partial cashout, and pre-set automated cashout threshold rules' },
    { parameter: 'Wallet & PAM Integration', specification: 'Unified single-wallet ledger connecting sportsbook, 10,000+ casino games, multi-currency fiat payment gateways, and crypto' },
    { parameter: 'Bookie & Retail POS', specification: 'Multi-tier agent hierarchies, weekly sheet accounting, point-of-sale shop terminals, and barcode thermal ticket printing' },
    { parameter: 'Front-End Architecture', specification: 'React.js, Next.js, and TypeScript with mobile-first responsive PWA, native Android APK support, and embeddable iframe' },
    { parameter: 'Licensing & IP Ownership', specification: 'Flexible white label licensing, turnkey deployment, and bespoke custom development with full source code ownership per agreement' },
  ];

  const metrics = [
    { value: '< 140ms', label: 'Live Odds Stream Latency', note: 'Topic-based WebSockets with delta compression' },
    { value: '80+', label: 'Sports & Virtuals Covered', note: '1,000+ betting markets with automated margin controls' },
    { value: '1,000+', label: 'Pre-Match & In-Play Markets', note: 'Full coverage of major leagues, esports & niche events' },
    { value: '99.99%', label: 'Engine Concurrency SLA', note: 'Decoupled microservices engineered for zero downtime' },
    { value: '150+', label: 'Provider APIs Integrated', note: 'Sports odds feeds, casino aggregators & payment gateways' },
    { value: '50+', label: 'Global Platforms Delivered', note: 'Licensed sportsbooks, sweepstakes platforms & bookie operations' },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        /* BALANCED CASE STUDY HERO BANNER DESIGN */
        .cs-hero-section {
          position: relative;
          padding: clamp(110px, 9.5vw, 135px) 0 32px;
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
          font-size: 14.5px;
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

        .cs-hero-banner {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: radial-gradient(187.98% 100% at 48.7% 0%, #0c3835 0%, #072225 16.35%, #0a1619 70.3%);
          padding: clamp(36px, 4.2vw, 50px) clamp(24px, 3.5vw, 36px);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.48);
          margin-bottom: 32px;
        }

        .cs-hero-banner-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.24;
          pointer-events: none;
        }

        .cs-hero-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 22, 25, 0.58) 0%, rgba(10, 22, 25, 0.88) 100%);
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
          gap: 7px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #00ebaa;
          margin-bottom: 14px;
        }

        .cs-hero-title {
          font-size: clamp(25px, 3.2vw, 42px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .cs-hero-description {
          font-size: clamp(15px, 1.35vw, 17px);
          line-height: 1.6;
          color: #d1f2ec;
          margin-bottom: 24px;
          font-weight: 400;
          max-width: 840px;
          margin-left: auto;
          margin-right: auto;
        }

        .cs-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 26px;
        }

        .cs-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6.5px 14px;
          border-radius: 999px;
          background: rgba(0, 235, 170, 0.1);
          backdrop-filter: blur(10px);
          border: none;
          color: #ffffff;
          font-size: 13px;
          font-weight: 500;
        }

        .cs-hero-tag svg {
          color: #00ebaa;
          flex-shrink: 0;
        }

        .cs-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          align-items: center;
        }

        /* FACTS CARDS (EXACT ROW MATCHING DESIGN SYSTEM) */
        .cs-facts {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          margin-bottom: 32px;
        }

        .cs-facts-item {
          flex: 1;
          min-width: 205px;
          max-width: 285px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 18px 20px;
          border-radius: 20px;
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
          font-size: 13px;
          color: #d1e5e8;
          font-weight: 400;
          line-height: 1.35;
          text-align: left;
        }

        .cs-facts-value {
          font-size: 16px;
          color: #ffffff;
          font-weight: 600;
          line-height: 1.35;
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
          max-width: 760px;
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

        /* PLATFORM DELIVERED (RESULTS 3x2) */
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

        /* CLIENT TESTIMONIAL */
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
      `}</style>

      {/* 1. HERO SECTION & BANNER */}
      <section className="cs-hero-section">
        <div className="cs-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumbs-item">
              Home
            </Link>
            <span className="breadcrumbs-sep">›</span>
            <span className="breadcrumbs-item breadcrumbs-current">
              Sportsbook Software
            </span>
          </nav>

          <div className="cs-hero-banner">
            <Image
              src="/assets/features/products-and-portfolio-of-white-label-sportsbook-platform.webp"
              alt="Enterprise Sportsbook Software and High-Concurrency Sports Betting Platform"
              width={1440}
              height={810}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay" />
            <div className="cs-hero-banner-content">
              <div className="cs-hero-eyebrow">
                <Sparkles className="w-4 h-4 text-[#00ebaa]" />
                <span>Enterprise iGaming Solutions • Commercial B2B Platform</span>
              </div>

              <h1 className="cs-hero-title">
                Sportsbook Software & Sports Betting Platform for Operators
              </h1>

              <div className="cs-hero-description">
                <p>
                  Launch your betting business with enterprise sportsbook software. Engineered with sub-second in-play odds feeds
                  across 80+ sports, automated trading liability risk controls, single-wallet PAM, and complete turnkey operational architecture.
                </p>
              </div>

              <div className="cs-hero-tags">
                {[
                  'Sub-Second Live Odds Feeds',
                  'Automated Risk & Trading Desk',
                  'Turnkey & White Label Models',
                  'Single-Wallet PAM & Cashier',
                ].map((tag, idx) => {
                  const IconComp = tagIcons[idx % tagIcons.length];
                  return (
                    <span key={idx} className="cs-hero-tag">
                      <IconComp className="w-3.5 h-3.5" />
                      <span>{tag}</span>
                    </span>
                  );
                })}
              </div>

              <div className="cs-hero-actions">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="btn-main overflow-hidden text-sm sm:text-base font-bold cursor-pointer"
                  style={{
                    padding: '0.72rem 2.1rem',
                    minHeight: '2.8rem',
                  }}
                >
                  <span className="relative z-10">Request a Technical Quote</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base text-white hover:text-[#00ebaa] border border-white/20 hover:border-[#00ebaa]/50 hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  <span>Book Live Platform Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* FACTS CARDS (EXACT ROW MATCHING DESIGN SYSTEM) */}
          <dl className="cs-facts">
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Platform Delivery Scope</dt>
              <dd className="cs-facts-value">Turnkey, White Label & Bespoke</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Sports & Market Coverage</dt>
              <dd className="cs-facts-value">80+ Sports & 1,000+ Markets</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Live Odds & Stats Latency</dt>
              <dd className="cs-facts-value">&lt; 140ms WebSockets</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Regulatory & Global Reach</dt>
              <dd className="cs-facts-value">US, UK, Europe, LATAM, India</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. TWO COLUMN DETAILS SECTION (FOUR ALTERNATING GRIDS COVERING 100% KEYWORDS) */}
      <section className="cs-two-col-section">
        <div className="cs-container">
          {/* GRID 1: High-Throughput Sports Betting Engine (Text Left, Image Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Enterprise Sportsbook Software & High-Load Betting Engine</h2>
              <div className="cs-two-col-content">
                <p>
                  Modern sports betting software must handle extreme traffic volatility. During high-profile football,
                  basketball, and cricket fixtures, concurrent bet placements spike thousands of times above baseline.
                  Standard betting scripts fail when database locks choke bet slips and delay ticket settlement. As a trusted
                  sports betting software development company and recognized sportsbook-platform-providers leader, KVAORNUX engineers
                  an end-to-end sportsbook platform designed for flawless performance under heavy matchday loads.
                </p>
                <p>
                  As an elite sportsbook platform provider, sport betting software provider, and premier choice among global
                  sportsbook platform providers, KVAORNUX provides scalable online sportsbook software built on
                  high-concurrency microservices. Our sports betting software development services empower operators to create sportsbook platform
                  ecosystems equipped with sub-second live in-play wagering, Same-Game Parlays (Bet Builder), dynamic cashout calculations,
                  sports betting gamification software, incorporating mini-games into sportsbook platforms, and mobile-first responsive PWA and native Android interfaces.
                  Whether you are evaluating the best sports betting software, professional sports betting computer software, ready-to-launch sportsbook platform
                  setups, or turnkey sport bet software packages, our dedicated sports betting software developers deliver production excellence.
                </p>
                <ul>
                  <li>Sub-second live in-play bet execution with automated bet-delay throttle to defend against pitch-side latency arbitrage</li>
                  <li>Same-Game Bet Builder engine supporting singles, accumulators, parlay systems, and correlated exotic markets</li>
                  <li>Mathematical dynamic cashout engine supporting full cashout, partial cashout, and auto-settle triggers</li>
                  <li>Cross-platform responsive betting UI optimized for desktop, mobile browsers, and native Android APK delivery</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/sportsbook-developer/fiverr-gig-cover.jpg"
                alt="Enterprise Sportsbook Software and Sports Betting Platform Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 2: Automated Risk Management & Trading Desk (Image Left, Text Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/sportsbook-platform/risk-dashboard.webp"
                alt="Automated Sportsbook Risk Management Software and Trading Desk"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Automated Trading Desk & Bookmaker Liability Management</h2>
              <div className="cs-two-col-content">
                <p>
                  Protecting operator gross gaming revenue (GGR) requires intelligent betting risk management software.
                  Our enterprise sportsbook management software functions as your automated trading desk, calculating
                  real-time book liability across every event, league, outcome, and individual player profile. We deliver
                  sportsbook platforms with built-in risk control solutions that outclass legacy systems like DGS sportsbook software,
                  integrating sportsbook trading platforms odds automation margin optimization.
                </p>
                <p>
                  Whether operating a commercial sports betting platform, physical retail sportsbooks, or private bookmaker
                  networks utilizing sports betting software for bookies, sports betting bookie software, and pay per head sportsbook software
                  alternatives, traders maintain instantaneous control over margins, stake caps, sports betting statistical analysis software,
                  sports betting handicapping software, and market suspensions.
                </p>
                <ul>
                  <li>Live event liability heatmaps calculated instantaneously on every confirmed ticket to highlight unbalanced exposure</li>
                  <li>Automated stake factor throttling and player tier profiling to neutralize syndicated sharp bettors, sports betting bot software, and latency exploiters</li>
                  <li>Per-league and per-market margin overrides across 80+ sports and 1,000+ betting markets with best sportsbook trading platform external odds feeds</li>
                  <li>Instant one-click emergency market suspensions, void handling workflows, and automated grade settlements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 3: Multi-Source Sportsbook Odds Feeds & Data APIs (Text Left, Image Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Multi-Source Sportsbook Odds Feeds & Data API Aggregation</h2>
              <div className="cs-two-col-content">
                <p>
                  Reliable odds feeds are the cornerstone of any profitable sports betting operation. KVAORNUX is a premier
                  sportsbook software provider that pre-integrates leading official sports data feeds and sportsbook odds APIs
                  connecting Betradar (Sportradar), Pinnacle Solution, Kambi, Genius Sports, and Sporting Solutions.
                  As one of the best sportsbook software providers and sport betting software providers globally, our integration
                  ensures rapid market expansion with minimal integration friction. We are recognized as the fastest platform to launch sportsbook and casino Cyprus,
                  Malta, Curacao, and North American operations.
                </p>
                <p>
                  Our sports data ingestion engine normalizes odds feeds across thousands of sporting events into unified
                  WebSocket telemetry streams. Built-in provider failover ensures that if one feed experiences disruption,
                  your sportsbook betting software switches seamlessly to backup pricing feeds with zero downtime. We also integrate
                  latency-controlled streaming platforms sportsbook operators trust, alongside sportsbook affiliate software, affiliate management software for sports betting,
                  and affiliate marketing software for sportsbooks to drive sustained player acquisition.
                </p>
                <ul>
                  <li>Direct official odds API integration covering 80+ sports, 1,000+ markets, and official esports competitions</li>
                  <li>Topic-scoped WebSockets broadcasting sub-140ms odds deltas exclusively to active betting client rooms</li>
                  <li>Automated match settlement webhooks and official result reconciliation for instantaneous ticket payouts</li>
                  <li>Modular sportsbook iframe connectivity for embedding full sportsbook platforms into existing online casinos</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/sportsbook-developer/fiverr-api-slide.jpg"
                alt="Multi-Source Sportsbook Odds API Ingestion and Real-Time WebSocket Telemetry"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 4: Buy Sportsbook Software: Models, PAM & Retail Cashiers (Text Left, 4 Glass Cards Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Buy Sportsbook Software: Turnkey, White Label & Scripts</h2>
              <div className="cs-two-col-content">
                <p>
                  Operators looking to buy sportsbook software or buy online sportsbook software often encounter fragile,
                  unsupported sportsbook scripts or sports betting clone scripts that leave businesses exposed to severe security flaws.
                  While open source sportsbook software or open source sports betting software might seem tempting, operators struggle with in-house sportsbook software
                  maintenance and compliance penalties. KVAORNUX delivers production-grade sportsbook software for sale backed by modern architecture,
                  outstanding sportsbook software reviews, transparent sportsbook software cost models, automated tax compliance on player winnings, and dedicated 24/7 technical support.
                  Ranked among the top sportsbook software 2025 and best white label sportsbook software 2026 solutions, our offerings address key operational challenges and maximize long-term benefits compared to free sports betting software download alternatives.
                </p>
                <p>
                  Whether deploying compliant sweepstakes sportsbook software as a verified sweepstakes sportsbook software providers company,
                  launching crypto-enabled bitcoin sportsbook software, white label sports betting exchange software, sports betting simulation software,
                  omnichannel poker software integration, or retail sportsbook software for physical betting shops, our platform adapts to your commercial requirements.
                </p>
                <ul>
                  <li>
                    <strong className="text-white">Commercial Turnkey & White Label:</strong> Rapid market launch with branded frontends, hosted microservices, and continuous updates.
                  </li>
                  <li>
                    <strong className="text-white">Bespoke Source Code Ownership:</strong> Enterprise operators acquire source code rights and IP ownership according to signed agreements.
                  </li>
                  <li>
                    <strong className="text-white">Omnichannel Single-Wallet PAM:</strong> Unified player account management linking sportsbook, 10,000+ casino games, poker, and retail cashier slips.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { title: 'Single-Wallet PAM & Ledger', desc: 'Unified double-entry wallet connecting sports betting, casino games, and poker with zero manual balance transfers.' },
                { title: 'Sportsbook Payments Software', desc: 'Fiat payment gateways, automated crypto processing (BTC, ETH, USDT), and Web3 wallet deposit connectivity.' },
                { title: 'Retail Shop & Cashier POS', desc: 'Point-of-sale betting terminal software with barcode thermal ticket printing and over-the-counter redemption.' },
                { title: 'Marketing Automation & Retention', desc: 'Integrated marketing automation platform for sportsbook casino operations with automated player retention software.' },
              ].map((item, idx) => (
                <div key={idx} className="cs-glass-card p-5 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-[#00ebaa] shrink-0" />
                    <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b4d5da] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ENGINEERING MODULES DELIVERED */}
      <section className="cs-modules-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Core Sportsbook Software Modules</h2>
          <p className="cs-section-sub">
            Explore the core architectural components, trading desk interfaces, and back-office modules engineered into
            the KVAORNUX sports betting platform software.
          </p>

          <div className="cs-module-tabs">
            {moduleTabs.map((tab) => (
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

          <div className="cs-module-grid">
            <div className="cs-glass-card p-7 sm:p-8 text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">{activeModule.title}</h3>
              <p className="text-sm sm:text-base text-[#b4d5da] leading-relaxed mb-5">{activeModule.summary}</p>
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
                src={activeModule.image}
                alt={activeModule.title}
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE PACKAGES COMPARISON */}
      <section id="packages" className="py-16 md:py-20 bg-[#0b0b0f] border-t border-white/10">
        <div className="cs-container">
          <h2 className="cs-section-heading">Sportsbook Software Deployment Packages</h2>
          <p className="cs-section-sub">
            Choose the delivery model that fits your operational scale. From rapid white label launches to full turnkey
            sports betting software platforms and bespoke enterprise source code ownership, KVAORNUX provides transparent commercial terms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Starter — White Label */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Starter — White Label
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">White Label Sportsbook</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Fastest market launch with proven betting engine</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Pre-configured online sportsbook software customized with your brand identity, standard payment rails,
                  and live odds feeds across 40+ top sports. Fast time-to-market with source code subject to agreement.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Package Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Battle-tested sportsbook platform software',
                      'Custom branded responsive web UI and mobile PWA',
                      'Integrated sportsbook odds feeds (40+ sports)',
                      'Standard fiat and crypto payment gateways',
                      'Turnkey back office with basic risk reporting',
                      'Dedicated hosting and 24/7 technical monitoring',
                      'Source code access subject to agreement',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                        <Check className="w-4 h-4 text-[#00ebaa] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="text-sm font-semibold text-[#00ebaa] hover:underline cursor-pointer"
                >
                  Request White Label Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request White Label Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Business — Turnkey (Most Popular) */}
            <div
              className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left border-2 border-[#00ebaa] shadow-[0_0_35px_rgba(0,235,170,0.2)]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 235, 170, 0.18) 0%, rgba(16, 22, 26, 0.98) 70%), #10161a',
              }}
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#04160f] bg-[#00ebaa] mb-3 uppercase tracking-wider">
                  Business — Most Popular
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Turnkey Sportsbook Platform</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Complete platform with casino, PAM & operational autonomy</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Complete turnkey sports betting software with integrated casino aggregator, automated trading risk desk,
                  single-wallet PAM, multi-tier bookie agent hierarchy, and source-code ownership per contract.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Package Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Standalone sportsbook platform with full backend control',
                      'Comprehensive odds feeds covering 80+ sports and 1,000+ markets',
                      'Casino game aggregator (10,000+ slots and live dealer games)',
                      'Automated liability trading desk & sharp bettor defense',
                      'Multi-tier agent, master agent & cashier bookie hierarchy',
                      'Single-wallet PAM ledger with omnichannel fiat and crypto rails',
                      'Source code ownership granted according to contract',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                        <Check className="w-4 h-4 text-[#00ebaa] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="text-sm font-semibold text-[#00ebaa] hover:underline cursor-pointer"
                >
                  Request Turnkey Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Turnkey Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Premium — Custom Bespoke */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Premium Package
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Bespoke Custom Engineering</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Proprietary architecture built to exact specifications</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Custom-engineered sportsbook software built specifically for tier-1 operators and innovative models
                  (sweepstakes or Web3). Dedicated microservices, custom algorithms, and source-code ownership per agreement.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Package Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      '100% bespoke UI/UX design with custom brand interaction flows',
                      'Decoupled microservice architecture (React, Node.js, Go)',
                      'Direct contracts with official sports feeds (Betradar, Pinnacle)',
                      'Custom sweepstakes dual-wallet or Web3 crypto betting logic',
                      'Retail shop POS software with barcode thermal ticket printers',
                      'Dedicated team of senior frontend and backend engineers',
                      'Complete source code repository and IP ownership per contract',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-200">
                        <Check className="w-4 h-4 text-[#00ebaa] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="text-sm font-semibold text-[#00ebaa] hover:underline cursor-pointer"
                >
                  Request Custom Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Custom Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SYSTEM ARCHITECTURE & TECHNICAL SPEC TABLE */}
      <section id="system-architecture" className="cs-arch-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Event-Driven Sportsbook Architecture Pipeline</h2>
          <p className="cs-section-sub">
            Decoupling odds ingestion, ticket validation, and settlement ensures that massive viewer browsing during peak
            sporting finals never slows down ticket execution or trading risk visibility.
          </p>

          <div className="cs-arch-grid">
            {architectureNodes.map((node, idx) => (
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

          <div className="cs-glass-card overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#00ebaa]" />
                Technical Specification Summary
              </h3>
              <span className="text-xs text-[#a5d8d0]">Enterprise Production Benchmark</span>
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
                  {specTable.map((row, idx) => (
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

      {/* 6. PLATFORM DELIVERED METRICS */}
      <section className="cs-results">
        <div className="cs-container">
          <h2 className="cs-results-heading">Platform Delivered</h2>
          <div className="cs-results-list">
            {metrics.map((metric, idx) => {
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

      {/* 7. CLIENT TESTIMONIAL */}
      <section className="cs-testimonial">
        <div className="cs-container">
          <h2 className="cs-testimonial-heading">Client Testimonials</h2>
          <div className="cs-testimonial-card">
            <div className="cs-testimonial-quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="34" viewBox="0 0 44 34" fill="none">
                <path
                  d="M10.3158 34C8.5614 34 6.87719 33.5424 5.26316 32.6273C3.7193 31.6418 2.45614 30.2691 1.47368 28.5093C0.491228 26.7495 0 24.7081 0 22.3851C0 19.9917 0.526316 17.4928 1.57895 14.8882C2.70175 12.2836 4.35088 9.71428 6.52632 7.18013C8.77193 4.64596 11.6491 2.25259 15.1579 0L20.1053 5.2795C17.8596 7.67288 16.1754 10.0311 15.0526 12.354C13.9298 14.6066 13.3684 16.7184 13.3684 18.6894C13.3684 20.8716 13.9298 22.5963 15.0526 23.8634C16.1754 25.1304 17.7193 26.3623 19.6842 27.559C19.0526 29.53 17.8246 31.1139 16 32.3106C14.2456 33.4369 12.3509 34 10.3158 34ZM34.2105 34C32.4561 34 30.7719 33.5424 29.1579 32.6273C27.614 31.6418 26.3509 30.2691 25.3684 28.5093C24.386 26.7495 23.8947 24.7081 23.8947 22.3851C23.8947 19.9917 24.4211 17.4928 25.4737 14.8882C26.5965 12.2836 28.2456 9.71428 30.4211 7.18013C32.6667 4.64596 35.5439 2.25259 39.0526 0L44 5.2795C41.7544 7.67288 40.0702 10.0311 38.9474 12.354C37.8246 14.6066 37.2632 16.7184 37.2632 18.6894C37.2632 20.8716 37.8246 22.5963 38.9474 23.8634C40.0702 25.1304 41.614 26.3623 43.5789 27.559C42.9474 29.53 41.7193 31.1139 39.8947 32.3106C38.1404 33.4369 36.2456 34 34.2105 34Z"
                  fill="#ffffff"
                  fillOpacity="0.2"
                ></path>
              </svg>
            </div>
            <div className="cs-testimonial-quote">
              &quot;Switching to KVAORNUX’s sportsbook software transformed our operations. The sub-second live odds feeds
              and real-time book liability trading desk gave us complete control during major football tournaments. Their
              turnkey architecture handled our peak concurrency surges with 99.99% uptime.&quot;
            </div>
            <div className="cs-testimonial-role">
              Managing Director • International Sports Betting Operator
            </div>
          </div>
        </div>
      </section>

      {/* 8. NATIVE SITE FAQ SECTION */}
      <FAQSection customFaqData={SPORTSBOOK_SOFTWARE_FAQS} hideBgImage={true} />

      {/* 9. OPPORTUNITIES BANNER + CONTACT FORM SECTION */}
      <OpportunitiesSection />
      <section id="contact-us" className="py-12 bg-[#0b0b0f] relative z-10">
        <ContactForm defaultCategory="Sportsbook" />
      </section>
    </div>
  );
}
