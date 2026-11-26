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
  Gamepad2,
  Globe,
  Zap,
  Sparkles,
  Server,
  Check,
  Code,
  Rocket,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import { CASINO_DEVELOPER_FAQS } from './faqData';

const resultIcons = [Gamepad2, Layers, Wallet, Zap, ShieldCheck, Rocket];
const tagIcons = [Code, Gamepad2, Wallet, ShieldCheck, Globe];

export default function CasinoWebsiteDeveloperClient() {
  const [activeModuleId, setActiveModuleId] = useState('custom-lobby');

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
      id: 'custom-lobby',
      label: 'Custom Casino UI & App',
      title: 'Bespoke React / Next.js Casino Lobby & Mobile App',
      summary:
        'Stand out from generic casino templates with high-converting, dark-luxury UI/UX engineered for sub-second page speed, Core Web Vitals SEO, and thumb-first mobile play.',
      image: '/assets/features/custom-igaming-platform-design-interface.webp',
      bullets: [
        'Custom React.js, Next.js & TypeScript front-end engineered for rapid mobile loading and casino website SEO',
        'Instant game search, volatility/RTP filters, recently played history, and live big-win winner tickers',
        'Progressive Web App (PWA) plus optional native Android APK to build your own casino app',
        'Dynamic promotional banners, VIP rakeback progress bars, and gamified tournament leaderboards',
      ],
    },
    {
      id: 'game-aggregator',
      label: '10,000+ Game Aggregator',
      title: 'Single-Wallet Game Aggregation & Provably Fair Originals',
      summary:
        'Buy casino games for your website cleanly through one idempotent integration connecting tier-1 slot studios, live dealers, and custom crash originals.',
      image: '/assets/features/online-casino-game-aggregation-10000-plus-slots.webp',
      bullets: [
        'Unified API integration unlocking 10,000+ slots, blackjack, roulette, baccarat, and game shows',
        'Custom crash, dice, mines, plinko, and limbo provably fair originals built by our casino game developers',
        'Fixed-point multi-currency wallet synchronization with clean FX conversion and rollback safety',
        'Real-time free spins, bonus buy compatibility, and studio tournament prize drops',
      ],
    },
    {
      id: 'payments-crypto',
      label: 'Fiat & Crypto Cashiers',
      title: 'Payment Processors, Web3 Wallets & Dual-Currency Ledgers',
      summary:
        'Support global player deposits and fast payouts with redundant payment processors for gambling websites alongside automated blockchain settlements.',
      image: '/assets/features/crypto-casino-white-label-banner.webp',
      bullets: [
        'Payment gateway integration for gambling sites: cards, SEPA/open banking, Apple Pay, PIX, UPI & e-wallets',
        'Automated crypto casino cashier supporting BTC, ETH, USDT, SOL, TRX, and MetaMask/WalletConnect logins',
        'Separated Gold Coin & Sweeps Coin dual-wallet engine for US social and sweepstakes casino sites',
        'Double-entry financial accounting with automated invoice reconciliation and withdrawal velocity checks',
      ],
    },
    {
      id: 'crm-compliance',
      label: 'CRM, ERP & Compliance',
      title: 'Gambling CRM, Bonus Engine & Anti-Fraud Back Office',
      summary:
        'Protect margins and boost player lifetime value with enterprise gambling CRM development, KYC review queues, and real-time bonus abuse protection.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      bullets: [
        'Automated wagering-requirement tracking, deposit match bonuses, cashback tiers, and VIP concierge alerts',
        'Multi-account fingerprint checks, VPN/proxy flagging, and suspicious round-level gameplay alerts',
        'Integrated KYC/AML document queues and responsible gaming deposit/self-exclusion controls',
        'Audit-ready GGR, NGR, affiliate RevShare/CPA payouts, and regional compliance reporting',
      ],
    },
  ];

  const activeModule = moduleTabs.find((m) => m.id === activeModuleId) || moduleTabs[0];

  const architectureNodes = [
    {
      step: 'Layer 01',
      title: 'Custom Front-End Lobby',
      subtitle: 'React, Next.js + Mobile PWA',
      details:
        'Delivers fast, SEO-friendly game discovery, smooth category filtering, VIP trackers, and responsive mobile casino app navigation.',
    },
    {
      step: 'Layer 02',
      title: 'Single-Wallet PAM Ledger',
      subtitle: 'Node.js / Go + Fixed-Point Math',
      details:
        'Processes atomic bet debits, studio win credits, bonus locks, and multi-currency FX snapshots with zero balance drift.',
    },
    {
      step: 'Layer 03',
      title: 'Game Aggregator & RNG Layer',
      subtitle: '10,000+ Slots + Originals',
      details:
        'Connects major live dealer and slot studios plus custom provably fair mini-games through idempotent session webhooks.',
    },
    {
      step: 'Layer 04',
      title: 'CRM, Payments & Compliance',
      subtitle: 'Fiat/Crypto + KYC + Fraud Defense',
      details:
        'Unifies global payment gateways, crypto nodes, VIP email/retention triggers, and automated KYC/AML review pipelines.',
    },
  ];

  const specTable = [
    { parameter: 'Front-End Tech Stack', specification: 'React.js, Next.js, TypeScript, Tailwind CSS — engineered for fast mobile UX and clean casino website SEO' },
    { parameter: 'Back-End & Database', specification: 'Node.js & Go microservices, PostgreSQL double-entry ledger, Redis session/cache cluster, WebSocket events' },
    { parameter: 'Casino Game Catalog', specification: '10,000+ certified slots, live casino dealers, table games, crash/arcade titles & custom provably fair originals' },
    { parameter: 'Supported Business Models', specification: 'Real-money online casinos, crypto/Web3 casinos, US social & sweepstakes casinos, and hybrid casino + sportsbooks' },
    { parameter: 'Payments & Banking', specification: 'Multi-currency fiat payment gateways (cards, open banking, e-wallets) + automated Bitcoin/ETH/USDT crypto rails' },
    { parameter: 'Gambling CRM & Retention', specification: 'VIP loyalty tiers, automated bonus wagering locks, free spins triggers, email/SMS hooks & affiliate portals' },
    { parameter: 'Security & Compliance', specification: 'Automated KYC/AML queues, AML transaction alerts, geolocation blocking, bonus abuse detection & audit logs' },
    { parameter: 'Source Code & IP Terms', specification: 'Turnkey licensing or full bespoke custom casino development with source-code ownership per client contract' },
  ];

  const metrics = [
    { value: '10,000+', label: 'Casino Games Supported', note: 'Slots, live dealers, crash & provably fair originals' },
    { value: '150+', label: 'Studio & Payment APIs', note: 'Pre-built adapters cutting integration time dramatically' },
    { value: '50+', label: 'iGaming Platforms Shipped', note: 'Crypto, sweepstakes, real-money & hybrid brands' },
    { value: '99.99%', label: 'Wallet Ledger Reliability', note: 'Idempotent double-entry accounting with zero drift' },
    { value: '< 1s', label: 'Lobby Route Transitions', note: 'Optimized Next.js rendering & CDN edge delivery' },
    { value: '100%', label: 'Contractual IP Options', note: 'Full repository ownership available on custom builds' },
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
              Casino Website Developer
            </span>
          </nav>

          <div className="cs-hero-banner">
            <Image
              src="/assets/features/custom-igaming-platform-design-interface.webp"
              alt="Casino Website Developer and Custom Online Casino Software Engineering"
              width={1440}
              height={810}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay" />
            <div className="cs-hero-banner-content">
              <div className="cs-hero-eyebrow">
                <Sparkles className="w-4 h-4 text-[#00ebaa]" />
                <span>Dedicated Casino Engineering • Custom B2B Web &amp; App Builds</span>
              </div>

              <h1 className="cs-hero-title">
                Casino Website Developer for Custom Online Casino Platforms
              </h1>

              <div className="cs-hero-description">
                <p>
                  Build or customize your online casino website with experienced casino software developers. We engineer
                  fast React/Next.js lobbies, 10,000+ game aggregator APIs, single-wallet PAM, crypto &amp; fiat cashiers,
                  and custom mobile casino apps.
                </p>
              </div>

              <div className="cs-hero-tags">
                {[
                  'Custom React / Next.js UI',
                  '10,000+ Slots & Live Games',
                  'Crypto, Fiat & Sweepstakes PAM',
                  'Provably Fair Crash Originals',
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
                  <span className="relative z-10">Request Casino Build Quote</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base text-white hover:text-[#00ebaa] border border-white/20 hover:border-[#00ebaa]/50 hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  <span>Book Live Casino Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* FACTS CARDS */}
          <dl className="cs-facts">
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Engagement Scope</dt>
              <dd className="cs-facts-value">Custom Casino Web &amp; App Dev</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Game Integration</dt>
              <dd className="cs-facts-value">10,000+ Slots, Live &amp; Crash</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Platform Models</dt>
              <dd className="cs-facts-value">Real-Money, Crypto &amp; Sweepstakes</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Engineering Stack</dt>
              <dd className="cs-facts-value">React, Next.js, Node.js, Go</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. TWO COLUMN STORY GRIDS */}
      <section className="cs-two-col-section">
        <div className="cs-container">
          {/* GRID 1: Custom Casino Website & App Development */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Create an Online Casino Website Built for Conversion &amp; Speed</h2>
              <div className="cs-two-col-content">
                <p>
                  Operators looking how to create a casino website or create an online gambling website often get stuck
                  with sluggish cloned scripts that break under concurrent player traffic. As an experienced casino
                  development group and team of online casino software developers, KVAORNUX builds high-load casino
                  platforms tailored from the ground up for conversion, speed, and casino website SEO.
                </p>
                <p>
                  Whether you want to build a casino from scratch, build your own casino app (mobile PWA + Android APK),
                  or hire casino game developers to upgrade an existing lobby, our engineers pair bespoke UX design with
                  scalable{' '}
                  <Link href="/online-casino-platform-software" className="text-[#00ebaa] hover:underline font-medium">
                    online casino platform software
                  </Link>{' '}
                  architecture.
                </p>
                <ul>
                  <li>Bespoke React, Next.js &amp; TypeScript lobbies optimized for sub-second loading and mobile play</li>
                  <li>Double-entry single-wallet PAM handling atomic debits, bonus balances, and FX conversions</li>
                  <li>Gamification mechanics: VIP levels, instant rakeback, prize wheels, and live win tickers</li>
                  <li>Technical casino website SEO schema, clean URL architecture, and rapid page transitions</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/features/custom-igaming-platform-design-interface.webp"
                alt="Custom Casino Website Design and Online Casino Platform Engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 2: Game Aggregator, Custom Originals & Crypto / Sweepstakes */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/features/online-casino-game-aggregation-10000-plus-slots.webp"
                alt="Casino Game Development and 10,000+ Game Aggregator API"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">10,000+ Casino Games, Crypto Rails &amp; Custom Originals</h2>
              <div className="cs-two-col-content">
                <p>
                  To buy casino games for a website efficiently, operators need unified aggregation rather than dozens of
                  fragile studio integrations. Through our{' '}
                  <Link href="/casino-aggregator-api-solution" className="text-[#00ebaa] hover:underline font-medium">
                    casino game aggregator API
                  </Link>
                  , our online casino game developers connect 10,000+ slots, live roulette, blackjack, baccarat, and
                  crash titles into one shared player wallet.
                </p>
                <p>
                  Beyond third-party studios, our custom casino game development studio also builds exclusive provably
                  fair Originals (Crash, Mines, Plinko, Dice, Keno, Limbo),{' '}
                  <Link href="/crypto-casino-software" className="text-[#00ebaa] hover:underline font-medium">
                    crypto casino software
                  </Link>
                  , and compliant{' '}
                  <Link href="/sweepstakes-casino-software" className="text-[#00ebaa] hover:underline font-medium">
                    social &amp; sweepstakes casino
                  </Link>{' '}
                  platforms.
                </p>
                <ul>
                  <li>
                    <strong className="text-white">Crypto Casino Developers:</strong> Instant BTC, ETH, USDT, SOL processing, Web3 wallet logins, and provably fair hashes.
                  </li>
                  <li>
                    <strong className="text-white">Custom Casino Game Development:</strong> Exclusive branded crash, mines, plinko, card, and arcade mini-games.
                  </li>
                  <li>
                    <strong className="text-white">Social &amp; Sweepstakes Casinos:</strong> Dual Gold Coin &amp; Sweeps Coin wallets, AMOE portals, and state geofencing.
                  </li>
                  <li>
                    <strong className="text-white">Casino + Sportsbook Combo:</strong> Optional single-wallet sports betting integration powered by{' '}
                    <Link href="/sportsbook-api-integration" className="text-[#00ebaa] hover:underline font-medium">
                      sportsbook APIs
                    </Link>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 3: Payment Processors, Gambling CRM & ERP Back Office */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Gambling Payment Processors, CRM &amp; Back-Office ERP</h2>
              <div className="cs-two-col-content">
                <p>
                  High-performing casinos rely on frictionless cashiers and automated retention engines. Our gambling
                  software developers configure redundant payment gateways for gambling sites—supporting cards, local
                  e-wallets, open banking, and crypto—alongside custom gambling CRM development and gambling ERP
                  development tailored to your finance team.
                </p>
                <p>
                  Every deposit, bonus wager requirement, KYC document review, and withdrawal approval runs through an
                  immutable audit ledger, protecting house margins from bonus abuse and chargeback fraud.
                </p>
                <ul>
                  <li>Automated payment routing across multiple fiat and crypto payment processors</li>
                  <li>Gambling CRM triggers for deposit bonuses, free spins, VIP cashback, and churn win-back</li>
                  <li>Real-time round-level fraud alerts flagging suspicious betting patterns and multi-accounting</li>
                  <li>Clean GGR, NGR, studio royalty, and affiliate RevShare/CPA reconciliation dashboards</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/features/comprehensive-casino-platform-features-roulette-dice.webp"
                alt="Casino CRM, Payment Processors and Back Office ERP"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 4: Why Partner With KVAORNUX Developers (4 Glass Cards) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Transparent Build Cost &amp; Full Engineering Ownership</h2>
              <div className="cs-two-col-content">
                <p>
                  Understanding how much it costs to build a casino starts with choosing the right delivery model. For
                  rapid launch with lower capital, explore our{' '}
                  <Link href="/turnkey-casino-software-solutions" className="text-[#00ebaa] hover:underline font-medium">
                    Turnkey Casino
                  </Link>{' '}
                  or{' '}
                  <Link href="/white-label-casino-solutions" className="text-[#00ebaa] hover:underline font-medium">
                    White Label Casino
                  </Link>{' '}
                  models. When your brand requires proprietary game mechanics or custom workflows, our bespoke casino
                  engineering team delivers milestone-based development with clear contractual IP terms.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { title: 'Zero Monolithic Bloat', desc: 'Clean Node.js/Go microservices and React frontends built for peak weekend traffic spikes.' },
                { title: 'Contractual IP Access', desc: 'Custom builds include full repository handover and intellectual property ownership per contract.' },
                { title: 'Pre-Built iGaming Adapters', desc: 'Save months of dev time using our tested adapters for studios, payments, and KYC providers.' },
                { title: 'Dedicated Post-Launch SLA', desc: 'Continuous security patches, studio onboarding, and feature sprints after your casino goes live.' },
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

      {/* 3. CORE ENGINEERING MODULES TABS */}
      <section className="cs-modules-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Core Casino Website Engineering Modules</h2>
          <p className="cs-section-sub">
            Explore the custom frontend interfaces, game aggregator integrations, crypto cashiers, and CRM/ERP control
            panels delivered by our casino software developers.
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

      {/* 4. THREE CASINO DEVELOPMENT PACKAGES */}
      <section id="packages" className="py-16 md:py-20 bg-[#0b0b0f] border-t border-white/10">
        <div className="cs-container">
          <h2 className="cs-section-heading">Casino Website Development Packages</h2>
          <p className="cs-section-sub">
            Compare our custom front-end launch, turnkey online casino + app build, and bespoke enterprise software
            engineering packages with source-code options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Starter */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Starter Build
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Branded Casino Website</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Fast launch with proven casino core</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Responsive online casino website styled around your brand identity with integrated slot/live studios,
                  fiat/crypto cashier, and admin reporting.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Included Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Custom branded responsive casino web UI & PWA',
                      '5,000+ slots & live casino aggregator connection',
                      'Single-wallet PAM & standard bonus promo rules',
                      'Fiat + cryptocurrency deposit & payout rails',
                      'Back-office player, GGR & KYC management dashboard',
                      'Source code access subject to signed agreement',
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
                  Request Starter Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Starter Casino Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Business — Most Popular */}
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
                <h3 className="text-2xl font-bold text-white mb-1.5">Full Casino &amp; App Platform</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Turnkey web + Android app + 10,000+ games</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Complete online casino development package with custom UI design, 10,000+ aggregated games, native
                  Android app, VIP CRM automation, and contractual ownership options.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Included Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      '100% bespoke Next.js UI/UX + native Android APK app',
                      'Full 10,000+ slots, crash & live dealer aggregator API',
                      'Multi-currency fiat & BTC/ETH/USDT Web3 crypto cashier',
                      'VIP loyalty tiers, rakeback, tournaments & CRM hooks',
                      'Automated KYC/AML compliance & bonus-abuse alerts',
                      'Optional single-wallet sportsbook module ready',
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
                  Request Business Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Business Casino Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Enterprise — Bespoke + Originals */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Enterprise Custom
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Bespoke Casino &amp; Originals</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Custom games, sweepstakes &amp; full IP handover</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Dedicated casino game &amp; web developers building custom provably fair Originals, US sweepstakes
                  dual-wallet systems, and custom ERP/CRM architecture from scratch.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Included Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Dedicated team of senior frontend & backend developers',
                      'Custom provably fair Originals (Crash, Mines, Plinko, Dice)',
                      'Bespoke sweepstakes dual-wallet or Web3 smart contracts',
                      'Custom gambling ERP, affiliate & CRM integrations',
                      'Multi-brand & multi-region scalable cloud cluster',
                      'Full repository & intellectual property ownership per contract',
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
                  aria-label="Request Custom Casino Quote"
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
          <h2 className="cs-section-heading">High-Load Online Casino Website Architecture</h2>
          <p className="cs-section-sub">
            Engineered with decoupled microservices, fixed-point ledger accounting, and edge-cached game lobbies so
            heavy bonus drops and live tournaments run smoothly.
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
                Technical Casino Specification Summary
              </h3>
              <span className="text-xs text-[#a5d8d0]">Production Engineering Standard</span>
            </div>
            <div className="overflow-x-auto">
              <table className="cs-spec-table">
                <thead>
                  <tr>
                    <th className="w-1/3">Architecture Layer</th>
                    <th>Engineering Details</th>
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
              &quot;KVAORNUX&apos;s casino developers rebuilt our player lobby in Next.js, integrated 10,000+ games with
              zero wallet reconciliation errors, and added custom crash originals that quickly became our top revenue
              vertical.&quot;
            </div>
            <div className="cs-testimonial-role">
              Head of Product • International Online &amp; Crypto Casino Brand
            </div>
          </div>
        </div>
      </section>

      {/* 8. NATIVE SITE FAQ SECTION */}
      <FAQSection customFaqData={CASINO_DEVELOPER_FAQS} hideBgImage={true} />

      {/* 9. OPPORTUNITIES BANNER + CONTACT FORM SECTION */}
      <OpportunitiesSection />
      <section id="contact-us" className="py-12 bg-[#0b0b0f] relative z-10">
        <ContactForm defaultCategory="Casino Platform" />
      </section>
    </div>
  );
}
