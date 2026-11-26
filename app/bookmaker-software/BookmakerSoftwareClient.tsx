'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Wallet,
  Globe,
  Zap,
  Sparkles,
  Server,
  Check,
  Store,
  Users,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import { BOOKMAKER_SOFTWARE_FAQS } from './faqData';

const resultIcons = [Users, Store, ShieldCheck, Zap, Wallet, Layers];
const tagIcons = [Users, ShieldCheck, Store, Zap, Wallet];

export default function BookmakerSoftwareClient() {
  const [activeModuleId, setActiveModuleId] = useState('agent-hierarchy');

  const handleScrollToContact = () => {
    const section = document.getElementById('contact-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
    }
  };

  const moduleTabs = [
    {
      id: 'agent-hierarchy',
      label: 'Agent & PPH System',
      title: 'Multi-Tier Bookie Agent System & Credit Sheets',
      summary:
        'Built for bookmakers running hierarchical master agent, sub-agent, and private player networks—without paying steep recurring pay-per-head rental fees per player.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      bullets: [
        'Unlimited hierarchy levels: Super Admin, Master Agent, Sub-Agent, Cashier, and Player accounts',
        'Automated weekly figure sheets, credit/freeplay balances, settle amounts, and net commission splits',
        'Per-player min/max wager caps, daily/weekly loss thresholds, and parlay payout limits',
        'Unified sportsbook plus casino agent software tracking slots, crash games, and live tables',
      ],
    },
    {
      id: 'risk-odds',
      label: 'Bookmaker Risk Desk',
      title: 'Real-Time Liability Heatmaps & Sharp Player Defense',
      summary:
        'Give bookmakers complete control over line movement, juice/vig margins, live bet delays, and real-time wager alerts to keep every book profitable.',
      image: '/assets/case-studies/sportsbook-platform/risk-dashboard.webp',
      bullets: [
        'Live wager ticker and instant exposure heatmaps recalculated per event, market, and selection',
        'Automated sharp-bettor profiling, stake factor throttling, and dynamic in-play delay timers',
        'Per-agent and per-league margin adjustments across 80+ sports and 1,000+ betting markets',
        'Instant market suspension toggles, official Betradar/Pinnacle feed sync, and void management',
      ],
    },
    {
      id: 'retail-pos',
      label: 'Retail Shop POS & Kiosks',
      title: 'Land-Based Betting Shop Terminals & Thermal Ticketing',
      summary:
        'Power physical retail sportsbooks and betting shops with fast cashier terminal software, barcode slip scanning, and self-service kiosk support.',
      image: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
      bullets: [
        'High-speed POS cashier interface built for rapid ticket entry during live match windows',
        'Thermal receipt slip printing with unique QR/barcode verification for over-the-counter payouts',
        'Cashier shift open/close drawer reconciliation, vault transfers, and branch P&L auditing',
        'Self-service terminal (SSBTs) touchscreen UI synchronized with central bookmaker PAM',
      ],
    },
    {
      id: 'player-front',
      label: 'Mobile Bookie Front-End',
      title: 'Fast Mobile Betting UX & Multi-Currency Cashiers',
      summary:
        'Give players a sleek mobile betting experience rivaling top global bookmakers—pairing credit-line wagering or instant fiat and Bitcoin/USDT deposits.',
      image: '/assets/sportsbook-developer/fiverr-gig-cover.jpg',
      bullets: [
        'Responsive HTML5 web app + native Android APK with quick-bet sliders and one-tap cashout',
        'Same-Game Parlays (Bet Builder), teasers, pleasers, round robins, and live in-play markets',
        'Dual mode: private credit-sheet agent model or online deposit wallet (fiat + crypto)',
        'Localized multi-language UI supporting American, decimal, fractional, and Asian odds styles',
      ],
    },
  ];

  const activeModule = moduleTabs.find((m) => m.id === activeModuleId) || moduleTabs[0];

  const architectureNodes = [
    {
      step: 'Layer 01',
      title: 'Official Odds & Lines Engine',
      subtitle: 'Live Feeds + Custom Overrounds',
      details:
        'Streams official pre-match and live odds across 80+ sports with bookmaker margin rules, teasers, and instant line-freeze protections.',
    },
    {
      step: 'Layer 02',
      title: 'Agent & Credit Ledger',
      subtitle: 'Multi-Tier Hierarchy + Weekly Sheets',
      details:
        'Tracks agent credit allocations, player balances, freeplay bonuses, win/loss figures, and automated weekly settlement cycles.',
    },
    {
      step: 'Layer 03',
      title: 'Real-Time Risk & Exposure Desk',
      subtitle: 'Live Bet Ticker + Sharp Throttling',
      details:
        'Evaluates per-selection liability, player risk tiers, and steam-move delays before every online or retail POS ticket locks.',
    },
    {
      step: 'Layer 04',
      title: 'Omnichannel Cashier & Retail POS',
      subtitle: 'Thermal Slips + Fiat & Crypto',
      details:
        'Unifies physical betting shop thermal ticket redemption with online fiat gateways, Bitcoin/USDT crypto wallets, and audit reports.',
    },
  ];

  const specTable = [
    { parameter: 'Hierarchy & Agent Tools', specification: 'Super Admin → Master Agent → Agent → Cashier → Player with automated weekly sheets and commission splits' },
    { parameter: 'PPH vs Private Ownership', specification: 'Eliminate rising weekly price-per-head fees by operating your own branded private bookie website & admin suite' },
    { parameter: 'Wager & Ticket Types', specification: 'Straights, parlays, Same-Game Bet Builder, teasers, round robins, if-bets, reverses, and live in-play wagering' },
    { parameter: 'Risk & Line Controls', specification: 'Live bet ticker, exposure heatmaps, player stake caps, parlay limits, per-league vig overrides, and sharp alerts' },
    { parameter: 'Retail Betting Shop POS', specification: 'Cashier POS software, barcode thermal ticket printing, QR payout scanning, shift drawers, and betting kiosks' },
    { parameter: 'Casino & Live Dealer Add-On', specification: 'Combined casino agent software linking 10,000+ slots, crash games, and live dealers to the same player balance' },
    { parameter: 'Settlement & Cashier Rails', specification: 'Credit-sheet weekly settlement plus optional online fiat payment gateways and BTC/ETH/USDT crypto deposits' },
    { parameter: 'Deployment & Support', specification: 'Branded cloud deployment, dedicated sandbox demo, mobile PWA/APK delivery, and contractual source-code options' },
  ];

  const metrics = [
    { value: '5+ Tiers', label: 'Agent Hierarchy Depth', note: 'Master agents, sub-agents, cashiers & private players' },
    { value: '< 140ms', label: 'Live Odds & Ticker Speed', note: 'Real-time WebSocket updates with zero polling lag' },
    { value: '80+', label: 'Sports & Markets Synced', note: 'NFL, NBA, MLB, soccer, cricket, UFC & esports' },
    { value: '10,000+', label: 'Casino Agent Games', note: 'Slots, crash & live tables unified in one balance' },
    { value: '100%', label: 'Automated Weekly Sheets', note: 'Real-time agent figures, hold % & settle reconciliation' },
    { value: '24/7', label: 'POS & Cloud Reliability', note: 'Built for both online bookies and retail betting shops' },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
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

        .cs-glass-card {
          border-radius: 1.8rem;
          border: 1px solid rgba(0, 235, 170, 0.25);
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.14) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a;
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.2) inset;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

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
              Bookmaker Software
            </span>
          </nav>

          <div className="cs-hero-banner">
            <Image
              src="/assets/case-studies/sportsbook-platform/risk-dashboard.webp"
              alt="Enterprise Bookmaker Software, Bookie Agent System and Retail Betting POS"
              width={1440}
              height={810}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay" />
            <div className="cs-hero-banner-content">
              <div className="cs-hero-eyebrow">
                <Sparkles className="w-4 h-4 text-[#00ebaa]" />
                <span>Bookie Agent Systems &amp; Retail Shops • B2B Bookmaking Tech</span>
              </div>

              <h1 className="cs-hero-title">
                Bookmaker Software, Bookie Agent System &amp; PPH Platform
              </h1>

              <div className="cs-hero-description">
                <p>
                  Run your online bookmaker network or physical betting shops with enterprise bookie software. Built-in
                  multi-tier agent hierarchies, automated weekly credit sheets, sharp-player risk defense, and retail POS
                  terminals without steep per-head rental fees.
                </p>
              </div>

              <div className="cs-hero-tags">
                {[
                  'Multi-Tier Bookie Agent System',
                  'Pay-Per-Head Alternative',
                  'Real-Time Liability Risk Desk',
                  'Retail Shop POS & Kiosks',
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
                  <span className="relative z-10">Request Bookmaker Software Quote</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base text-white hover:text-[#00ebaa] border border-white/20 hover:border-[#00ebaa]/50 hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  <span>Book Agent &amp; Risk Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* FACTS CARDS */}
          <dl className="cs-facts">
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Operational Model</dt>
              <dd className="cs-facts-value">Private Bookie, PPH &amp; Retail Shops</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Agent Hierarchy</dt>
              <dd className="cs-facts-value">Master, Sub-Agent &amp; Cashier</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Odds &amp; Casino Bundle</dt>
              <dd className="cs-facts-value">80+ Sports &amp; 10,000+ Casino Games</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Retail Hardware Support</dt>
              <dd className="cs-facts-value">POS Terminals &amp; Thermal Printers</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. TWO COLUMN STORY GRIDS */}
      <section className="cs-two-col-section">
        <div className="cs-container">
          {/* GRID 1: Bookmaker & Bookie Software vs Pay Per Head */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Enterprise Bookmaker Software vs Pay-Per-Head Rental</h2>
              <div className="cs-two-col-content">
                <p>
                  Relying on generic pay per head (PPH) sites or price per head sportsbook rental providers forces
                  growing bookmakers to pay recurring per-player head fees every week while sharing dated agent panels
                  and sluggish polling lines. When you launch with KVAORNUX online bookie software, you control your own
                  private bookie website software with zero per-head scaling penalties.
                </p>
                <p>
                  Our sports bookie software gives licensed bookmakers and commercial PPH operators the best bookie
                  software foundation—combining real-time WebSocket odds, custom line management, automated weekly sheets,
                  and seamless{' '}
                  <Link href="/sportsbook-software" className="text-[#00ebaa] hover:underline font-medium">
                    sportsbook software
                  </Link>{' '}
                  infrastructure engineered for high matchday traffic.
                </p>
                <ul>
                  <li>Create a bookie website with custom domain branding, mobile-first bet slip, and sub-140ms live odds</li>
                  <li>Eliminate weekly price per head bookie fees as your active player sheet scales up</li>
                  <li>Automated Monday weekly settle reports tracking credit, freeplay, carryovers, and net balances</li>
                  <li>Full control over player wager limits, parlay payout caps, teasers, and custom vig/overrounds</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/features/turnkey-back-office-admin-dashboard-analytics.webp"
                alt="Bookmaker Management Software, Agent Credit Sheets and Analytics"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 2: Multi-Tier Bookie Agent System & Casino Agent Software */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/sportsbook-platform/risk-dashboard.webp"
                alt="Multi-Tier Bookie Agent System and Real-Time Bookmaker Risk Controls"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Bookmaker Agent System, Casino Agents &amp; Sharp Defense</h2>
              <div className="cs-two-col-content">
                <p>
                  Managing sub-agents, player credit limits, and mixed sports plus casino action requires rock-solid
                  accounting. Our betting agent software and bookmaker agent system organize unlimited agent tiers—letting
                  Master Agents allocate credit lines, adjust commission splits, and monitor live wagers in real time.
                </p>
                <p>
                  Unlike basic bookie software programs limited strictly to straight sports bets, KVAORNUX includes
                  integrated casino agent software unlocking 10,000+ slots, live dealer tables, and crash games inside
                  every player account—boosting agent hold percentages during quiet sports calendars.
                </p>
                <ul>
                  <li>
                    <strong className="text-white">Multi-Tier Agent Hierarchy:</strong> Super Admin, Master Agent, Sub-Agent, and Cashier roles with granular permission locks.
                  </li>
                  <li>
                    <strong className="text-white">Live Wager Ticker &amp; Hold Controls:</strong> Monitor incoming tickets instantaneously and adjust juice/vig margins per league.
                  </li>
                  <li>
                    <strong className="text-white">Sharp-Bettor Defense:</strong> Automated player profiling, stake throttling, and live in-play delay timers stop steam-move abuse.
                  </li>
                  <li>
                    <strong className="text-white">Combined Sports &amp; Casino Sheets:</strong> One unified settle statement spanning live sports, props, live dealers, and virtuals.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 3: Retail Sportsbook & Betting Shop POS Software */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Retail Sportsbook &amp; Physical Betting Shop POS Software</h2>
              <div className="cs-two-col-content">
                <p>
                  Operating brick-and-mortar betting shops or retail sportsbook counters requires dedicated point-of-sale
                  speed and strict cashier accountability. Our retail sportsbook software equips over-the-counter shops
                  and self-service kiosks with instant ticket printing, QR/barcode payout scanners, and live TV odds boards.
                </p>
                <p>
                  Every retail terminal connects directly to your central bookmaker management engine—so shop cashiers,
                  branch managers, and online mobile players share one synchronized odds feed, risk pool, and real-time
                  P&amp;L audit trail.
                </p>
                <ul>
                  <li>Fast POS cashier terminal built for quick over-the-counter multi-leg and live match tickets</li>
                  <li>Thermal receipt ticket printing with encrypted barcodes for instant payout verification</li>
                  <li>Cashier shift open/close reconciliation, safe drops, and branch-level hold margin reports</li>
                  <li>Touchscreen Self-Service Betting Terminals (SSBTs) &amp; live digital odds display screens</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/sportsbook-platform/hero-showcase.webp"
                alt="Retail Sportsbook POS Software and Self-Service Betting Terminals"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 4: Official Odds Feeds & Settlement Flexibility (4 Glass Cards) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">How Bookmakers Set Odds &amp; Scale Globally</h2>
              <div className="cs-two-col-content">
                <p>
                  Understanding how bookies set odds and protect hold percentages starts with clean upstream data. Through
                  our{' '}
                  <Link href="/sportsbook-api-integration" className="text-[#00ebaa] hover:underline font-medium">
                    sportsbook API integration
                  </Link>{' '}
                  pipeline, bookmakers access official Betradar, Pinnacle, Kambi, and Genius Sports lines across 80+
                  sports—while retaining manual overround overrides, team-limit caps, and automated ticket grading.
                </p>
                <p>
                  Ready to step up from small PPH rental sheets into a full commercial operation? Explore our{' '}
                  <Link href="/turnkey-sportsbook-solutions" className="text-[#00ebaa] hover:underline font-medium">
                    Turnkey Sportsbook
                  </Link>{' '}
                  and{' '}
                  <Link href="/white-label-sportsbook" className="text-[#00ebaa] hover:underline font-medium">
                    White Label Sportsbook
                  </Link>{' '}
                  packages tailored for licensed operators.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { title: 'Weekly Credit Sheets', desc: 'Automated settle figures, player credit limits, carryovers, and agent split payouts.' },
                { title: 'Fiat & Crypto Cashiers', desc: 'Optional online deposits via local payment gateways, Bitcoin, Ethereum, and USDT.' },
                { title: 'Custom Overrounds & Limits', desc: 'Adjust juice/vig margins, max parlay payouts, and sport-specific risk ceilings anytime.' },
                { title: 'Zero Per-Head Lock-In', desc: 'Scale unlimited active players on your own branded bookie software without rising PPH fees.' },
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

      {/* 3. CORE BOOKMAKER MODULES TABS */}
      <section className="cs-modules-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Core Bookmaker &amp; Bookie Software Modules</h2>
          <p className="cs-section-sub">
            Explore the agent hierarchy dashboards, liability trading controls, retail betting shop POS tools, and mobile
            betting interfaces built into KVAORNUX bookmaker software.
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

      {/* 4. THREE BOOKMAKER DEPLOYMENT PACKAGES */}
      <section id="packages" className="py-16 md:py-20 bg-[#0b0b0f] border-t border-white/10">
        <div className="cs-container">
          <h2 className="cs-section-heading">Bookmaker &amp; Bookie Software Packages</h2>
          <p className="cs-section-sub">
            Select the operational package built for your business—from private bookie agent websites to combined
            sports-and-casino PPH suites and land-based retail shop networks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Package 1 — Private Bookie & Agent System */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Agent &amp; Credit Edition
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Bookie Agent Website</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Private PPH alternative without per-head fees</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Branded online bookie software featuring multi-tier agent credit hierarchies, weekly figure sheets,
                  custom wager limits, and mobile-first live sports betting.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Included Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Branded player betting portal + agent control panel',
                      'Multi-tier Master Agent & Sub-Agent credit sheets',
                      'Official live & pre-match odds feeds (60+ top sports)',
                      'Per-player min/max stakes & parlay payout caps',
                      'Automated Monday weekly settle & balance figures',
                      'Live wager ticker & emergency line-freeze toggles',
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
                  Request Bookie Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Bookie Agent Website Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Package 2 — Omnichannel Bookmaker & Casino Suite (Most Popular) */}
            <div
              className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left border-2 border-[#00ebaa] shadow-[0_0_35px_rgba(0,235,170,0.2)]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 235, 170, 0.18) 0%, rgba(16, 22, 26, 0.98) 70%), #10161a',
              }}
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#04160f] bg-[#00ebaa] mb-3 uppercase tracking-wider">
                  Most Popular
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Full Bookmaker &amp; Casino Suite</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Sportsbook, casino agents, crypto &amp; automated risk</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Complete bookmakers software combining 80+ sports, 10,000+ casino games inside casino agent software,
                  automated sharp-bettor protection, and online fiat/crypto cashiers.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Included Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Full sports bookie software (80+ sports, 1,000+ markets)',
                      'Integrated casino agent software (10,000+ slots & live dealers)',
                      'Real-time exposure heatmaps & sharp-player stake caps',
                      'Both credit-sheet agents & instant fiat/Bitcoin cashiers',
                      'Same-Game Bet Builder, teasers & dynamic full/partial cashout',
                      'Responsive mobile PWA + native Android betting APK',
                      'Contractual Turnkey or bespoke source-code upgrade path',
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
                  Request Bookmaker Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Full Bookmaker Suite Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Package 3 — Retail Betting Shop & POS Network */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Retail &amp; Multi-Shop
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Retail Betting Shop POS</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Cashier terminals, thermal slips &amp; kiosks</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Purpose-built retail sportsbook and sports betting shop software linking physical counter terminals,
                  self-service kiosks, thermal barcode printers, and central risk control.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Included Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Point-of-sale (POS) cashier terminal web & desktop app',
                      'Encrypted barcode thermal ticket printing & QR redemption',
                      'Self-service betting kiosk (SSBT) touchscreen interface',
                      'Shop drawer shift accounting & multi-branch P&L reports',
                      'Live odds display boards for betting shop TV screens',
                      'Centralized liability monitoring across retail + online',
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
                  Request Retail POS Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Retail Betting Shop POS Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SYSTEM ARCHITECTURE & SPEC TABLE */}
      <section id="system-architecture" className="cs-arch-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Bookmaker Operations &amp; Risk Control Pipeline</h2>
          <p className="cs-section-sub">
            Every ticket—whether placed on mobile, through an agent hierarchy, or printed at a retail betting shop
            counter—flows through unified odds, credit, and risk validation layers.
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
                Bookmaker &amp; PPH Platform Specifications
              </h3>
              <span className="text-xs text-[#a5d8d0]">Production Operations Standard</span>
            </div>
            <div className="overflow-x-auto">
              <table className="cs-spec-table">
                <thead>
                  <tr>
                    <th className="w-1/3">Operational Module</th>
                    <th>Platform Capabilities</th>
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
              &quot;Moving our agent network off rented per-head panels onto KVAORNUX&apos;s bookmaker software paid for
              itself within weeks. Weekly sheet reconciliation across master and sub-agents is instant, and our traders
              finally have live exposure controls plus retail POS shop sync in one system.&quot;
            </div>
            <div className="cs-testimonial-role">
              Operations Director • Licensed Retail &amp; Agent Bookmaker Network
            </div>
          </div>
        </div>
      </section>

      {/* 8. NATIVE SITE FAQ SECTION */}
      <FAQSection customFaqData={BOOKMAKER_SOFTWARE_FAQS} hideBgImage={true} />

      {/* 9. OPPORTUNITIES BANNER + CONTACT FORM SECTION */}
      <OpportunitiesSection />
      <section id="contact-us" className="py-12 bg-[#0b0b0f] relative z-10">
        <ContactForm defaultCategory="Sportsbook" />
      </section>
    </div>
  );
}
