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
import { SPORTSBOOK_DEVELOPER_FAQS } from './faqData';

const resultIcons = [Gamepad2, Layers, Wallet, RotateCcw, ShieldCheck, TrendingUp];
const tagIcons = [Wallet, Gamepad2, ShieldCheck, Globe, Zap];

export default function SportsbookDeveloperClient() {
  const [activeModuleId, setActiveModuleId] = useState('live-betting');

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
      id: 'live-betting',
      label: 'In-Play & Bet Slip',
      title: 'Fast Mobile-First Betting & Bet Builder UX',
      summary:
        'Engineered for thumb-first mobile play during live matches, keeping odds updates instantaneous and bet placement effortless.',
      image: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
      bullets: [
        'Instant odds-change highlighting (green/red pulse) with configurable accept-higher-odds preferences',
        'Same-game Bet Builder combining match results, totals, player props, and handicaps',
        'Live pitch visualization and ball-by-ball momentum trackers integrated directly above markets',
        'Real-time cashout engine supporting full, partial, and automated rule-based cashout',
      ],
    },
    {
      id: 'risk-desk',
      label: 'Risk & Trading Desk',
      title: 'Real-Time Book Liability & Margin Control',
      summary:
        'Gives the operator’s trading team complete visibility over exposure before high-variance outcomes affect profitability.',
      image: '/assets/case-studies/sportsbook-platform/risk-dashboard.webp',
      bullets: [
        'Live event exposure heatmaps computed per selection, tournament, match, and player profile',
        'Automated stake limitation and dynamic bet acceptance delays for syndicated sharp bettors',
        'Centralized margin adjustments and regional market toggles across 80+ sports and 1,000+ markets',
        'One-click emergency market suspension and official sports result settlement triggers',
      ],
    },
    {
      id: 'api-aggregation',
      label: 'Odds Feeds & APIs',
      title: 'Multi-Source Odds Feed Normalization',
      summary:
        'Unified odds aggregation pipeline connecting official sports data providers with multi-provider failover redundancy.',
      image: '/assets/sportsbook-developer/fiverr-api-slide.jpg',
      bullets: [
        'Official integration with Betradar, Genius Sports, and Pinnacle sports data feeds',
        'Topic-scoped WebSocket channels broadcasting sub-second odds updates to active clients',
        'Automated result settlement and ticket grading triggered by verified official data feeds',
        'Modular sportsbook iframe integration for embedding into existing online casino platforms',
      ],
    },
    {
      id: 'pam-cashier',
      label: 'PAM & Agent Cashier',
      title: 'Omnichannel Single-Wallet & Back Office',
      summary:
        'Centralized Player Account Management (PAM) supporting omnichannel balances, retail shop POS terminals, and multi-tier agent networks.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      bullets: [
        'Single-wallet ledger enabling bettors to wager across sports and casino with zero manual transfers',
        'Multi-currency fiat payment gateways and crypto wallet integrations with automated reconciliation',
        'Retail betting shop point-of-sale (POS) terminal software with barcode thermal ticket printing',
        'Multi-tier agent, master agent, and cashier hierarchy with real-time commission reporting',
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
        'Consumes contracted sports data feeds, normalizes market schemas across 80+ sports, and caches active pricing snapshots in Redis.',
    },
    {
      step: 'Layer 02',
      title: 'WebSocket Delta Gateway',
      subtitle: 'Socket.io + Redis Pub/Sub',
      details:
        'Pushes sub-140ms live odds ticks, match visualizations, and suspension states only to subscribed event rooms.',
    },
    {
      step: 'Layer 03',
      title: 'High-Throughput Validator',
      subtitle: 'Risk Rules + Single-Wallet Lock',
      details:
        'Validates odds tolerance, event liability limits, and player profiles before committing atomic wallet transactions.',
    },
    {
      step: 'Layer 04',
      title: 'Trading & Settlement Desk',
      subtitle: 'Live Exposure + Auto-Grading',
      details:
        'Real-time book exposure heatmaps, sharp-player stake limits, automated ticket grading, and regulatory audit logging.',
    },
  ];

  const specTable = [
    { parameter: 'Supported Bet Types', specification: 'Singles, accumulators, system wagers, chain bets, same-game Bet Builder, and live in-play wagering' },
    { parameter: 'Live Odds Distribution', specification: 'Topic-scoped WebSocket delta streaming backed by Redis Pub/Sub for sub-140ms latency' },
    { parameter: 'Risk & Liability Engine', specification: 'Real-time exposure calculation per selection/event, dynamic bet acceptance delays, and sharp stake caps' },
    { parameter: 'Cashout Engine', specification: 'Mathematical dynamic cashout supporting full cashout, partial cashout, and auto-cashout rules' },
    { parameter: 'Wallet & PAM Integration', specification: 'Unified single-wallet ledger shared across sportsbook and casino with multi-currency fiat & crypto' },
    { parameter: 'Retail & POS Operations', specification: 'Point-of-sale cashier terminals, barcode thermal ticket printing, and multi-tier agent hierarchies' },
    { parameter: 'Front-End Architecture', specification: 'React.js, Next.js, and TypeScript with mobile-first responsive PWA and native Android APK support' },
    { parameter: 'Source Code & Ownership', specification: 'White label licensing, turnkey deployment, and bespoke source-code ownership defined in agreement' },
  ];

  const metrics = [
    { value: '50+', label: 'Platforms Delivered', note: 'Global sportsbooks, casinos & sweepstakes platforms' },
    { value: '150+', label: 'Provider APIs Integrated', note: 'Sports odds feeds, casino games & payment gateways' },
    { value: '80+', label: 'Sports & Virtuals Covered', note: '1,000+ betting markets with automated margin rules' },
    { value: '< 140ms', label: 'Live Odds Stream Latency', note: 'Topic-based WebSockets with delta compression' },
    { value: '99.99%', label: 'Engine Uptime SLA', note: 'Decoupled microservices with zero-downtime scaling' },
    { value: '100%', label: 'Contractual IP Ownership', note: 'Source code and repository handover per agreement' },
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
          opacity: 0.26;
          pointer-events: none;
        }

        .cs-hero-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 22, 25, 0.58) 0%, rgba(10, 22, 25, 0.86) 100%);
          pointer-events: none;
        }

        .cs-hero-banner-content {
          position: relative;
          z-index: 5;
          max-width: 900px;
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
          max-width: 820px;
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

        /* FACTS CARDS (BALANCED SPEC) */
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

      {/* 1. HERO SECTION & BANNER (EXACT /us-sweepstakes-casino-platform-development DESIGN) */}
      <section className="cs-hero-section">
        <div className="cs-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumbs-item">
              Home
            </Link>
            <span className="breadcrumbs-sep">›</span>
            <span className="breadcrumbs-item breadcrumbs-current">
              Sportsbook Developer
            </span>
          </nav>

          <div className="cs-hero-banner">
            <Image
              src="/assets/case-studies/sportsbook-platform/hero-showcase.webp"
              alt="Professional Sportsbook Developer and Betting Platform Engineering"
              width={1440}
              height={810}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay" />
            <div className="cs-hero-banner-content">
              <div className="cs-hero-eyebrow">
                <Sparkles className="w-4 h-4 text-[#00ebaa]" />
                <span>Dedicated iGaming Engineering • Commercial B2B Services</span>
              </div>

              <h1 className="cs-hero-title">
                Professional Sportsbook Developer for Custom Betting Websites
              </h1>

              <div className="cs-hero-description">
                <p>
                  Build your sportsbook platform with sub-second in-play odds, multi-source API integration,
                  single-wallet PAM, and automated trading risk controls engineered for high-concurrency operators.
                </p>
              </div>

              <div className="cs-hero-tags">
                {[
                  'Real-Time Live Odds Engine',
                  'Dynamic Cashout & Bet Builder',
                  'Single-Wallet PAM Sync',
                  'Risk & Liability Trading Desk',
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

          {/* FACTS CARDS (EXACT 4-CARD ROW FROM CASE STUDY SPEC) */}
          <dl className="cs-facts">
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Engagement Intent</dt>
              <dd className="cs-facts-value">Hire Sportsbook Developer</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Target Markets</dt>
              <dd className="cs-facts-value">Global (US, LATAM, EU, Africa)</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Delivery Scope</dt>
              <dd className="cs-facts-value">White Label, Turnkey & Bespoke</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Core Tech Stack</dt>
              <dd className="cs-facts-value">React, Node.js, Go, WebSockets</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. TWO COLUMN DETAILS SECTION (EXACT ALTERNATING TEXT/IMAGE LAYOUT FROM CASE STUDY) */}
      <section className="cs-two-col-section">
        <div className="cs-container">
          {/* GRID 1: Custom Sportsbook Platform Engineering (Text Left, Platform UI Graphic Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Custom Sportsbook Platform Engineering</h2>
              <div className="cs-two-col-content">
                <p>
                  Sports betting businesses face unique concurrency demands: during major sporting fixtures, in-play
                  betting traffic surges exponentially within seconds. Off-the-shelf templates frequently suffer from
                  stale odds locking, delayed bet slip confirmations, and settlement backlogs.
                </p>
                <p>
                  KVAORNUX engineers decoupled, high-load sports betting platforms using modern React.js frontends and
                  high-concurrency Node.js/Go backend microservices, ensuring lightning-fast bet validation and zero
                  downtime during peak tournament spikes.
                </p>
                <ul>
                  <li>Sub-second live odds distribution via topic-scoped WebSockets</li>
                  <li>Responsive bet slip validator supporting singles, accumulators, system bets, and Bet Builder</li>
                  <li>Configurable in-play bet acceptance delays to defend against pitch-side latency exploitation</li>
                  <li>Omnichannel player account management (PAM) linking sportsbook, live casino, and virtuals</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/sportsbook-developer/fiverr-gig-cover.jpg"
                alt="Custom Sportsbook Software Development Platform Engineering by Kvaornux"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 2: Live Odds Feeds & Automated Risk Desk (Dashboard Left, Text Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/sportsbook-platform/risk-dashboard.webp"
                alt="Sportsbook Risk Management Desk and Automated Trading Controls"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Automated Trading Desk & Sharp Player Defense</h2>
              <div className="cs-two-col-content">
                <p>
                  Protecting bookmaker gross gaming revenue (GGR) requires robust betting risk management software.
                  As an experienced sportsbook software provider, KVAORNUX engineers custom bookmaker software
                  and central sportsbook management software that computes real-time net liability across every selection, tournament, and fixture.
                </p>
                <p>
                  Traders maintain complete control with automated stake factor throttling for sharp betting syndicates,
                  cross-market arbitrage alerts, per-league margin overrides, and one-click market suspensions.
                </p>
                <ul>
                  <li>Live exposure heatmaps recalculated instantly on every accepted betting ticket</li>
                  <li>Automated stake limits and max-exposure caps configured by sport or risk profile</li>
                  <li>Dynamic cashout engine offering full, partial, and automated rule-based cashout</li>
                  <li>Direct connection to official verified feeds for instant ticket grading and settlement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 3: Sportsbook API Integration & Official Feeds (Text Left, Architecture Graphic Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Sportsbook API Integration & Official Odds Feeds</h2>
              <div className="cs-two-col-content">
                <p>
                  Seamless connectivity to top-tier sports data feeds is the lifeblood of a modern sportsbook.
                  As an end-to-end sportsbook api provider, our developers integrate unified sportsbook odds apis
                  and robust betting api for sportsbook business operations connecting industry leaders including
                  Betradar, Pinnacle, Kambi, Genius Sports, and Sporting Solutions.
                </p>
                <p>
                  With sub-140ms latency pipelines, auto-reconciling settlement webhooks, and automatic odds feed
                  failover, your betting platform operates continuously with official data and odds apis for sportsbooks,
                  protecting margins against stale odds exploitation.
                </p>
                <ul>
                  <li>Direct connection to official sportsbook apis covering 80+ sports and 1,000+ betting markets</li>
                  <li>Real-time WebSocket streaming with automatic provider redundancy and failover</li>
                  <li>Automated match settlement, void handling, and bet ticket grade reconciliation</li>
                  <li>Turnkey and white label API wrappers for rapid integration into existing PAMs</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/sportsbook-developer/fiverr-api-slide.jpg"
                alt="Sportsbook API Integration and Official Live Odds Telemetry Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 4: Security, Compliance & Retail Cashier (Text Left, Compliance Cards Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Omnichannel Security, Cashier & Retail Modularity</h2>
              <div className="cs-two-col-content">
                <p>
                  Whether operating licensed online sportsbooks, sweepstakes betting platforms, or physical betting
                  shops, our engineering ensures enterprise-grade compliance and financial integrity.
                </p>
                <ul>
                  <li>
                    <strong className="text-white">Sportsbook iFrame Development:</strong> Embed a responsive sportsbook iframe developed for your existing casino website with single-wallet session synchronization.
                  </li>
                  <li>
                    <strong className="text-white">Sweepstakes Dual-Wallet Engine:</strong> Social sports betting
                    architecture with Gold Coins & Sweeps Coins, AMOE verification, and geofencing.
                  </li>
                  <li>
                    <strong className="text-white">Blockchain & Retail Integration:</strong> Blockchain sportsbook software development with crypto payments alongside POS retail shop terminals with thermal ticket printing.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { title: 'Single-Wallet PAM', desc: 'Unified ledger connecting sports, casino, and virtuals into one shared balance.' },
                { title: 'Multi-Currency Gateways', desc: 'Secure fiat payment gateway and crypto processing with automated invoicing.' },
                { title: 'Retail POS Terminals', desc: 'POS shop terminals with barcode thermal ticket printing and cashier shift accounting.' },
                { title: 'Sportsbook iFrame', desc: 'Lightweight embeddable iframe for existing casino platforms with live authentication sync.' },
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

      {/* 3. CORE ENGINEERING MODULES DELIVERED (EXACT CASE STUDY MODULE TABS) */}
      <section className="cs-modules-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Core Engineering Modules Delivered</h2>
          <p className="cs-section-sub">
            Interactive breakdown of the production software modules, trading controls, and back-office tooling built
            by our sportsbook developers.
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

      {/* 4. THREE PACKAGES COMPARISON (FIVERR-INSPIRED GIG PACKAGES IN CASE STUDY STYLE) */}
      <section id="packages" className="py-16 md:py-20 bg-[#0b0b0f] border-t border-white/10">
        <div className="cs-container">
          <h2 className="cs-section-heading">Sportsbook Development Delivery Packages</h2>
          <p className="cs-section-sub">
            Compare our white label, turnkey, and custom bespoke development models to select the right platform scope
            and ownership terms for your business. Whether you want to buy sportsbook software or partner with verified
            sportsbook software providers for turnkey sports betting solutions, we tailor each deployment to your jurisdiction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Starter — White Label */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Starter — White Label
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">White Label Sportsbook</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Faster launch with established betting engine</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Existing sportsbook platform customized with your brand identity and essential odds feeds. Lower
                  upfront cost, faster time to market, source code subject to agreement.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Package Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Existing battle-tested sportsbook platform',
                      'Custom branding & configuration',
                      'Responsive mobile & web interface',
                      'Essential sportsbook API integration (40+ sports)',
                      'Existing admin system & cashier reporting',
                      'Source code subject to agreement',
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
                <h3 className="text-2xl font-bold text-white mb-1.5">Turnkey Sportsbook</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Complete platform with casino & backend ownership</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Complete casino and sportsbook solution with backend, database, integrated casino aggregator, risk
                  management desk, and source-code ownership according to contract.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Package Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Complete standalone sportsbook platform',
                      'Casino game aggregator integration (slots & live)',
                      'Payment gateway integration (fiat & crypto)',
                      'Omnichannel player wallet & PAM ledger',
                      'Automated liability desk & risk dashboard',
                      'Backend and database deployment',
                      'Source code ownership according to contract',
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

            {/* Premium — Custom Development */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Premium Package
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Custom Development</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Bespoke platform built around client requirements</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Fully customized platform engineered from scratch around client requirements, with dedicated
                  developers, custom microservices, and source-code ownership defined in agreement.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Package Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      '100% custom UI/UX design & front-end workflows',
                      'Custom sportsbook microservices (Node.js/Go)',
                      'Selected sports data & odds API integrations',
                      'Customized admin functionality & retail terminals',
                      'Custom workflows (sweepstakes or crypto betting)',
                      'Dedicated frontend and backend engineering team',
                      'Source code & IP ownership defined in contract',
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

      {/* 5. SYSTEM ARCHITECTURE & TECHNICAL SPEC TABLE (EXACT CASE STUDY SPEC TABLE) */}
      <section id="system-architecture" className="cs-arch-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Low-Latency Event-Driven Sportsbook Pipeline</h2>
          <p className="cs-section-sub">
            Decoupling odds feed ingestion from bet validation ensures heavy spectator browsing never slows down ticket
            placement, risk monitoring, or wallet settlement.
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
              <span className="text-xs text-[#a5d8d0]">Production Betting Architecture</span>
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

      {/* 6. PLATFORM DELIVERED METRICS (RESULTS 3x2 GRID FROM CASE STUDY) */}
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

      {/* 7. CLIENT TESTIMONIAL (EXACT CARD FROM CASE STUDY) */}
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
              &quot;KVAORNUX delivered a high-throughput sports betting engine that seamlessly manages our peak matchday
              surges. The real-time odds streaming over WebSockets and the automated trading risk desk give us the speed
              and liability protection our operation required.&quot;
            </div>
            <div className="cs-testimonial-role">
              VP of Product Engineering • Regulated Sportsbook Operator
            </div>
          </div>
        </div>
      </section>

      {/* 8. NATIVE SITE FAQ SECTION */}
      <FAQSection customFaqData={SPORTSBOOK_DEVELOPER_FAQS} hideBgImage={true} />

      {/* 9. OPPORTUNITIES BANNER + CONTACT FORM SECTION */}
      <OpportunitiesSection />
      <section id="contact-us" className="py-12 bg-[#0b0b0f] relative z-10">
        <ContactForm defaultCategory="Sportsbook" />
      </section>
    </div>
  );
}
