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
  Activity,
  Code,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import { SPORTSBOOK_API_FAQS } from './faqData';

const resultIcons = [Zap, Layers, Server, Wallet, ShieldCheck, Globe];
const tagIcons = [Zap, Layers, Wallet, Code, ShieldCheck];

export default function SportsbookApiClient() {
  const [activeModuleId, setActiveModuleId] = useState('odds-normalizer');

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
      id: 'odds-normalizer',
      label: 'Odds Normalization Pipeline',
      title: 'Multi-Source Sportsbook Odds API Normalization',
      summary:
        'Unify incompatible XML, AMQP, and REST schemas from tier-1 sports data feeds into one clean, developer-friendly API with automated multi-provider failover.',
      image: '/assets/sportsbook-developer/fiverr-api-slide.jpg',
      bullets: [
        'Canonical event, team, market, and outcome mapping across Betradar (Sportradar), Genius Sports, Pinnacle, and Kambi',
        'Supports 80+ sports, 1,000+ betting markets, football odds APIs, horse racing odds APIs, and virtual sports feeds',
        'Multi-provider external odds feed failover ensures zero dead markets if an upstream vendor lags',
        'Redis snapshot caching minimizes database read pressure during high-traffic tournament surges',
      ],
    },
    {
      id: 'websocket-inplay',
      label: 'WebSocket In-Play Feed',
      title: 'Sub-140ms WebSocket Odds Delivery & Auto-Grading',
      summary:
        'Replace sluggish HTTP polling with topic-scoped WebSocket telemetry delivering real-time in-play price updates, market suspensions, and official settlement hooks.',
      image: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
      bullets: [
        'Compressed delta updates streamed strictly to subscribed event rooms via Socket.io + Redis Pub/Sub',
        'Dynamic bet acceptance delay checks protecting bookmakers against pitch-side latency arbitrage',
        'Automated match result webhooks trigger instant ticket grading, cashout updates, and void rollbacks',
        'Live match tracker, play-by-play stats, and esports map telemetry streamed alongside odds ticks',
      ],
    },
    {
      id: 'wallet-pam',
      label: 'Seamless Wallet & Payments',
      title: 'Single-Wallet PAM, Payment Gateways & CRM Integration',
      summary:
        'Connect our betting API directly into your existing casino Player Account Management (PAM), cashier processors, and promotional retention engines.',
      image: '/assets/features/igaming-financial-reconciliation-auto-invoices.webp',
      bullets: [
        'Idempotent debit, credit, win, and rollback wallet endpoints preventing duplicate balance transactions',
        'Sportsbook payment gateway integration services supporting fiat cards, local e-wallets, and BTC/USDT crypto rails',
        'Sportsbook CRM and bonus integration webhooks powering free bets, parlay boosts, and automated cashback',
        'HMAC-SHA256 request signing, mTLS/IP allowlisting, and rotating API key vault security',
      ],
    },
    {
      id: 'iframe-module',
      label: 'Sportsbook iFrame & UX',
      title: 'Embeddable Sportsbook iFrame Integration Tools',
      summary:
        'Add full sports betting to your online casino website in record time using our responsive sportsbook iframe integration with synchronized SSO and theming.',
      image: '/assets/features/sportsbook-integration-banner.webp',
      bullets: [
        'Drop-in responsive sportsbook iframe matching your casino color palette, typography, and dark/light theme',
        'Single-sign-on (SSO) session handshake shares player authentication and real-time wallet balance',
        'Mobile-first responsive layout supporting Bet Builder, full/partial cashout, and live match trackers',
        'Optional API-only headless mode if your in-house frontend team wants custom React/native rendering',
      ],
    },
  ];

  const activeModule = moduleTabs.find((m) => m.id === activeModuleId) || moduleTabs[0];

  const architectureNodes = [
    {
      step: 'Layer 01',
      title: 'Upstream Feed Adapters',
      subtitle: 'Betradar, Genius, Pinnacle + Failover',
      details:
        'Dedicated worker adapters ingest contracted sports data feeds, horse racing APIs, and esports odds streams concurrently with automatic health checks.',
    },
    {
      step: 'Layer 02',
      title: 'Canonical Normalizer & Redis',
      subtitle: 'Unified Market Schema + Caching',
      details:
        'Normalizes odds formats, market IDs, and margin overrounds into a consistent real-time betting lines API cached in clustered Redis.',
    },
    {
      step: 'Layer 03',
      title: 'WebSocket & REST Gateway',
      subtitle: 'Sub-140ms Live Odds + HMAC Auth',
      details:
        'Broadcasts delta odds ticks over WebSockets and validates authenticated REST bet placement requests secured with HMAC signatures and API key controls.',
    },
    {
      step: 'Layer 04',
      title: 'Wallet, Settlement & CRM Hooks',
      subtitle: 'Idempotent Ledger + Auto-Payouts',
      details:
        'Executes atomic single-wallet debits, processes official result grading webhooks, settles payouts, and fires bonus/CRM events.',
    },
  ];

  const specTable = [
    { parameter: 'Integration Architectures', specification: 'Headless REST + WebSocket APIs, modular sportsbook iframe integration tools, or white label betting software integration' },
    { parameter: 'Supported Upstream Feeds', specification: 'Betradar (Sportradar), Genius Sports data feeds, Pinnacle Solution, Kambi, Sporting Solutions, and custom external odds feeds' },
    { parameter: 'Sports, Racing & Esports', specification: '80+ sports (football betting odds API, NBA, NFL, cricket, tennis), horse racing odds API, and esports betting odds API' },
    { parameter: 'Real-Time Stream Latency', specification: '< 140ms WebSocket delta distribution via topic-scoped Redis Pub/Sub (zero heavy polling bottlenecks)' },
    { parameter: 'Wallet & PAM Synchronization', specification: 'Seamless single-wallet REST webhooks (balance, debit, credit, settle, rollback) with strict idempotency keys' },
    { parameter: 'Payments & Bonus Webhooks', specification: 'Sportsbook payment gateway integration services (fiat + BTC/USDT crypto) + sportsbook CRM and bonus integration' },
    { parameter: 'API Security Controls', specification: 'Securing API keys for sportsbook data integration via HMAC-SHA256 signing, mTLS, IP allowlisting, and rate caps' },
    { parameter: 'Sandbox & Documentation', specification: 'Complete Swagger/OpenAPI endpoints, WebSocket test harnesses, and Python/Node.js/Go integration reference SDKs' },
  ];

  const metrics = [
    { value: '< 140ms', label: 'WebSocket Odds Latency', note: 'Real-time in-play delta streaming across subscribed rooms' },
    { value: '150+', label: 'Third-Party APIs Integrated', note: 'Odds providers, casino aggregators & payment gateways' },
    { value: '80+', label: 'Sports, Racing & Esports', note: '1,000+ betting markets normalized into one schema' },
    { value: '99.99%', label: 'API Gateway Uptime SLA', note: 'Multi-feed redundancy & automatic upstream failover' },
    { value: '100%', label: 'Idempotent Wallet Ledger', note: 'Atomic settlement webhooks preventing duplicate payouts' },
    { value: '50+', label: 'Global Platforms Powered', note: 'Regulated sportsbooks, crypto sites & casino operators' },
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
              Sportsbook API Integration
            </span>
          </nav>

          <div className="cs-hero-banner">
            <Image
              src="/assets/features/sportsbook-integration-banner.webp"
              alt="Sportsbook API Integration and Real-Time Sports Betting Odds Feeds"
              width={1440}
              height={810}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay" />
            <div className="cs-hero-banner-content">
              <div className="cs-hero-eyebrow">
                <Sparkles className="w-4 h-4 text-[#00ebaa]" />
                <span>Odds Telemetry &amp; Wallet Middleware • B2B API Engineering</span>
              </div>

              <h1 className="cs-hero-title">
                Sportsbook API Integration &amp; Real-Time Odds Feed Provider
              </h1>

              <div className="cs-hero-description">
                <p>
                  Connect your casino or betting platform to unified sportsbook APIs, sub-140ms live WebSocket odds
                  feeds, automated settlement webhooks, payment gateways, or responsive iframe modules built for scale.
                </p>
              </div>

              <div className="cs-hero-tags">
                {[
                  '< 140ms WebSocket Odds API',
                  'Betradar, Genius & Pinnacle Feeds',
                  'Seamless Single-Wallet Sync',
                  'Modular Sportsbook iFrame',
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
                  <span className="relative z-10">Request API Integration Quote</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base text-white hover:text-[#00ebaa] border border-white/20 hover:border-[#00ebaa]/50 hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  <span>Book Technical Architecture Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* FACTS CARDS */}
          <dl className="cs-facts">
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Integration Models</dt>
              <dd className="cs-facts-value">REST/WebSocket API &amp; iFrame</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Data &amp; Odds Coverage</dt>
              <dd className="cs-facts-value">80+ Sports, Racing &amp; Esports</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Stream Protocol</dt>
              <dd className="cs-facts-value">&lt; 140ms WebSockets + Redis</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Reliability &amp; Security</dt>
              <dd className="cs-facts-value">Multi-Feed Failover &amp; HMAC</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. TWO COLUMN STORY GRIDS */}
      <section className="cs-two-col-section">
        <div className="cs-container">
          {/* GRID 1: Unified Sportsbook API & Betting Data Integration */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Unified Sportsbook API &amp; Real-Time Odds Feed Aggregation</h2>
              <div className="cs-two-col-content">
                <p>
                  Integrating raw bookmaker feeds directly from multiple sports data vendors creates brittle parsing
                  pipelines, mismatched market IDs, and severe settlement bugs. As a specialized sportsbook API provider
                  and odds feed provider, KVAORNUX replaces fragmented endpoints with one clean, battle-tested betting API
                  for sportsbook business growth.
                </p>
                <p>
                  Whether you are searching for the best sportsbook API, a scalable sportsbook odds API, or complete
                  betting data integration services, our ingestion layer normalizes pre-match schedules, real-time odds API
                  lines, live scores, and official match settlements into a single unified REST and WebSocket contract.
                </p>
                <ul>
                  <li>Ensures low-latency APIs for live odds delivery via topic-scoped WebSocket channels (&lt; 140ms)</li>
                  <li>Eliminates heavy polling limits and brittle Python web scraping betting odds workarounds</li>
                  <li>Provides automated provider failover across primary and backup external odds feeds</li>
                  <li>Full OpenAPI/Swagger documentation, webhook payloads, and developer sandbox environments</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/sportsbook-developer/fiverr-api-slide.jpg"
                alt="Unified Sportsbook API Integration and Live Odds Telemetry"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 2: Official Sports, Racing & Esports Feeds */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/sportsbook-platform/hero-showcase.webp"
                alt="Official Sports Data Feeds, Football, Horse Racing and Esports Odds API"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Official Data Feeds: Football, Horse Racing &amp; Esports APIs</h2>
              <div className="cs-two-col-content">
                <p>
                  Top-performing operators rely on verified, low-latency sportsbook feeds rather than unstable scraping
                  tools or risky free sports betting API workarounds. KVAORNUX integrates contracted tier-1 sports data
                  providers including Betradar (Sportradar sports data provider odds feeds), Genius Sports data feeds,
                  Pinnacle Solution, Kambi, and virtual odds feeds into your platform.
                </p>
                <p>
                  Beyond football betting odds APIs and major US/EU leagues, our API integration in betting covers
                  high-retention verticals including horse racing odds API feeds, live cricket ball-by-ball telemetry,
                  and specialized esports betting odds APIs with instant ticket grading and esports payouts.
                </p>
                <ul>
                  <li>
                    <strong className="text-white">Betradar, Genius Sports &amp; Pinnacle:</strong> Official pre-match, in-play, Bet Builder, and cashout pricing lines.
                  </li>
                  <li>
                    <strong className="text-white">Horse Racing &amp; Greyhounds:</strong> Dedicated horse racing odds API covering fixed odds, starting prices (SP), and racecards.
                  </li>
                  <li>
                    <strong className="text-white">Esports API &amp; Odds Feeds:</strong> Real-time esports data feeds and payouts APIs for CS2, Dota 2, LoL, and Valorant.
                  </li>
                  <li>
                    <strong className="text-white">Trading &amp; Fantasy Compatibility:</strong> Data and odds APIs built for multi-sport bookmakers, trading desks, and fantasy statistics platforms.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 3: Seamless Casino Wallet, iFrame, Payments & CRM */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Casino iFrame, Seamless Wallet, Payment &amp; CRM Integrations</h2>
              <div className="cs-two-col-content">
                <p>
                  Already operating an online casino and want to add sports betting without rebuilding your player
                  database? Our sportsbook integration connects cleanly with existing PAM systems through two flexible
                  paths: drop-in sportsbook iframe integration tools or headless seamless-wallet APIs.
                </p>
                <p>
                  We also handle complex backend integrations end-to-end—including sportsbook payment gateway integration
                  services (fiat processors + Bitcoin/USDT crypto rails) and sportsbook CRM and bonus integration webhooks
                  so players earn unified loyalty rewards across casino and sports. Read our architectural breakdown on{' '}
                  <Link href="/blog/sportsbook-integration" className="text-[#00ebaa] hover:underline font-medium">
                    adding sportsbook integration to existing casinos
                  </Link>
                  .
                </p>
                <ul>
                  <li>Single-wallet ledger syncing debits, bet settlements, cashouts, and void rollbacks atomically</li>
                  <li>Idempotency protection guaranteeing zero double charges during network retries</li>
                  <li>Multi-currency FX normalization across fiat currencies and cryptocurrencies</li>
                  <li>Real-time webhook events feeding bonus engines, affiliate trackers, and GGR tax reporting</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/features/sportsbook-integration-banner.webp"
                alt="Sportsbook iFrame Integration and Single-Wallet Casino Sync"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 4: API Security, Key Vault & Failover (4 Glass Cards) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Enterprise Security, API Key Protection &amp; Risk Hooks</h2>
              <div className="cs-two-col-content">
                <p>
                  Securing API keys for sportsbook data integration and protecting wallet webhooks against replay attacks
                  is critical for regulated betting businesses. Every KVAORNUX integration enforces bank-grade API
                  cryptography, strict rate caps, and automated liability validation before any bet ticket commits.
                </p>
                <p>
                  Explore our{' '}
                  <Link href="/sportsbook-software" className="text-[#00ebaa] hover:underline font-medium">
                    complete sportsbook software platform
                  </Link>{' '}
                  or pair your sportsbook API with our{' '}
                  <Link href="/casino-aggregator-api-solution" className="text-[#00ebaa] hover:underline font-medium">
                    casino game aggregator API
                  </Link>{' '}
                  for full-stack omnichannel betting.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { title: 'HMAC-SHA256 Signing', desc: 'Cryptographic payload signatures, mTLS, and IP allowlisting protect every wallet and bet endpoint.' },
                { title: 'Idempotent Transactions', desc: 'Unique transaction UUIDs ensure network timeouts never create duplicate bet debits or payouts.' },
                { title: 'Multi-Feed Redundancy', desc: 'Automated health checks switch traffic seamlessly across backup external odds feeds with zero downtime.' },
                { title: 'Automated Risk Guardrails', desc: 'Pre-commit exposure caps, dynamic live delays, and margin overrides evaluate every incoming bet request.' },
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

      {/* 3. CORE INTEGRATION MODULES TABS */}
      <section className="cs-modules-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Core Sportsbook API &amp; Feed Integration Modules</h2>
          <p className="cs-section-sub">
            Inspect how our engineering team connects upstream sports data feeds, live WebSocket odds gateways,
            seamless PAM wallets, and modular casino iframe layers.
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

      {/* 4. THREE INTEGRATION PACKAGES COMPARISON */}
      <section id="packages" className="py-16 md:py-20 bg-[#0b0b0f] border-t border-white/10">
        <div className="cs-container">
          <h2 className="cs-section-heading">Sportsbook API Integration Delivery Models</h2>
          <p className="cs-section-sub">
            Choose the right integration architecture for your engineering team—from drop-in casino iframe embedding to
            headless WebSocket odds feeds and custom multi-provider aggregation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Package 1 — Casino iFrame Integration */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Fast Casino Add-On
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Sportsbook iFrame Integration</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Drop-in betting lobby for existing casino sites</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Embed our responsive sportsbook directly into your existing online casino or PAM with single-sign-on
                  authentication, matched brand styling, and real-time wallet balance sync.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Integration Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Responsive sportsbook iframe matching casino brand theme',
                      'Single-sign-on (SSO) & seamless wallet webhook bridge',
                      '80+ sports, live match trackers & dynamic cashout included',
                      'Automated ticket grading & void rollback webhooks',
                      'Multi-currency fiat & crypto balance synchronization',
                      'Dedicated integration testing & sandbox validation',
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
                  Request iFrame Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Sportsbook iFrame Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Package 2 — Unified Odds & Settlement API (Most Popular) */}
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
                <h3 className="text-2xl font-bold text-white mb-1.5">Unified Odds &amp; Settlement API</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Headless WebSocket &amp; REST betting integration</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Full headless integration connecting contracted official feeds (Betradar, Pinnacle, Genius Sports) into
                  your custom frontend and PAM with sub-140ms WebSocket distribution.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Integration Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Normalized REST + < 140ms WebSocket live odds API',
                      'Pre-match, live in-play, Bet Builder & cashout endpoints',
                      'Football, basketball, horse racing & esports odds feeds',
                      'Automated result settlement & void reconciliation hooks',
                      'Idempotent single-wallet PAM & payment gateway adapters',
                      'HMAC-SHA256 signing, mTLS & API key vault protection',
                      'OpenAPI specs, webhook simulators & staging sandbox',
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
                  Request API Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Unified Odds API Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Package 3 — Custom Multi-Feed, CRM & Risk Architecture */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Enterprise Architecture
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Multi-Feed Failover &amp; CRM Suite</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Bespoke ingestion, payment rails &amp; trading feeds</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Built for high-volume operators and trading platforms aggregating multiple external odds feeds with
                  automated failover, custom payment processors, and CRM bonus pipelines.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Integration Deliverables:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Multi-provider odds aggregation with automatic failover',
                      'Proprietary margin rules & external trading feed ingestion',
                      'Fiat + crypto payment gateway & KYC webhook integrations',
                      'Sportsbook CRM, affiliate & free-bet bonus API triggers',
                      'Dedicated Node.js / Go ingestion workers & Redis cluster',
                      'Contractual repository & IP access per client agreement',
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
                  Request Enterprise Quote
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Enterprise API Quote"
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
          <h2 className="cs-section-heading">Event-Driven Odds Feed &amp; Betting API Pipeline</h2>
          <p className="cs-section-sub">
            Decoupling upstream feed ingestion from client WebSocket distribution and atomic wallet validation keeps your
            sportsbook responsive even during major global finals.
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
                Technical API Specification Summary
              </h3>
              <span className="text-xs text-[#a5d8d0]">Production Integration Standard</span>
            </div>
            <div className="overflow-x-auto">
              <table className="cs-spec-table">
                <thead>
                  <tr>
                    <th className="w-1/3">Integration Layer</th>
                    <th>Technical Implementation</th>
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
              &quot;Integrating KVAORNUX&apos;s normalized sportsbook API into our existing casino PAM eliminated all
              the headaches of juggling separate odds vendor schemas. Live WebSocket prices stay sub-second even on
              peak weekend fixtures, and wallet settlement webhooks are 100% consistent.&quot;
            </div>
            <div className="cs-testimonial-role">
              VP of Platform Engineering • Multi-Brand Casino &amp; Sportsbook Operator
            </div>
          </div>
        </div>
      </section>

      {/* 8. NATIVE SITE FAQ SECTION */}
      <FAQSection customFaqData={SPORTSBOOK_API_FAQS} hideBgImage={true} />

      {/* 9. OPPORTUNITIES BANNER + CONTACT FORM SECTION */}
      <OpportunitiesSection />
      <section id="contact-us" className="py-12 bg-[#0b0b0f] relative z-10">
        <ContactForm defaultCategory="Sportsbook" />
      </section>
    </div>
  );
}
