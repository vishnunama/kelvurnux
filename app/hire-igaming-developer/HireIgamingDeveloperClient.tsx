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
  Users,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import { HIRE_IGAMING_DEVELOPER_FAQS } from './faqData';

const resultIcons = [Users, Code, Layers, ShieldCheck, Server, Zap];
const tagIcons = [Code, Users, ShieldCheck, Layers, Globe];

export default function HireIgamingDeveloperClient() {
  const [activeModuleId, setActiveModuleId] = useState('fullstack-squad');

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
      id: 'fullstack-squad',
      label: 'Frontend & Backend Devs',
      title: 'Senior React / Next.js & Node.js / Go iGaming Engineers',
      summary:
        'Hire specialist engineers experienced in high-concurrency casino lobbies, sub-140ms WebSocket sportsbooks, mobile betting apps, and double-entry wallet ledgers.',
      image: '/assets/features/igaming-software-development-banner.webp',
      bullets: [
        'Bespoke React.js, Next.js, TypeScript & Tailwind CSS interfaces built for mobile play and Core Web Vitals',
        'High-load Node.js & Go backend microservices designed for zero downtime during major sporting finals',
        'Fixed-point multi-currency accounting preventing rounding drift across fiat and crypto wallets',
        'Clean Git workflows, automated test suites, and documented API contracts under strict NDA',
      ],
    },
    {
      id: 'integrations-api',
      label: 'API & Payment Integrations',
      title: 'Game Aggregators, Odds Feeds & Payment Gateway Integrators',
      summary:
        'Accelerate your roadmap with dedicated iGaming integration services connecting slot studios, live dealers, sportsbook feeds, and regional payment processors.',
      image: '/assets/features/casino-game-providers-api-aggregator.webp',
      bullets: [
        'Idempotent single-wallet casino game aggregator integration supporting 10,000+ certified titles',
        'Betradar, Genius Sports, Pinnacle, and Kambi sportsbook odds feed normalization',
        'iGaming payment gateway integration services: cards, SEPA, PIX, UPI, e-wallets, and BTC/USDT crypto rails',
        'CRM services for iGaming bonus rules, free spins webhooks, and affiliate RevShare/CPA trackers',
      ],
    },
    {
      id: 'originals-crypto',
      label: 'Crash Games & Web3',
      title: 'Provably Fair Originals, Crypto & Sweepstakes Engineering',
      summary:
        'Stand apart with custom crash game development, provably fair RNG mini-games, Web3 wallet infrastructure, and dual-currency social casino architecture.',
      image: '/assets/features/crypto-casino-white-label-banner.webp',
      bullets: [
        'Custom crash, mines, plinko, dice, keno, and wheel originals engineered for instant multiplayer sync',
        'Client/server cryptographic seed verification for provably fair crypto casino transparency',
        'MetaMask, WalletConnect, Solana, and multi-chain instant deposit/withdrawal automation',
        'Compliant Gold Coin / Sweeps Coin dual wallets, AMOE portals, and US state geolocation rules',
      ],
    },
    {
      id: 'devops-compliance',
      label: 'DevOps, Hosting & Compliance',
      title: 'Managed Cloud Hosting, Security Audits & Licensing Readiness',
      summary:
        'Ensure uninterrupted 24/7 global operations with hardened iGaming hosting services, automated KYC/AML review pipelines, and ongoing managed support.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp',
      bullets: [
        'High-availability AWS / GCP / multi-region Kubernetes clusters with Cloudflare DDoS shielding',
        'Automated KYC/AML document verification queues, velocity alerts, and responsible gaming limits',
        'Technical readiness & audit logging aligned with Malta (MGA), Curacao, Anjouan, Isle of Man & Kahnawake',
        '24/7 iGaming managed services, database optimization, and legacy monolith rescue sprints',
      ],
    },
  ];

  const activeModule = moduleTabs.find((m) => m.id === activeModuleId) || moduleTabs[0];

  const architectureNodes = [
    {
      step: 'Step 01',
      title: 'Technical Discovery',
      subtitle: 'Architecture + NDA Alignment',
      details:
        'Review your existing repositories, product goals, target licensing jurisdiction, and bottleneck priorities under mutual NDA.',
    },
    {
      step: 'Step 02',
      title: 'Squad & Stack Match',
      subtitle: 'Senior Specialists Assigned',
      details:
        'Pair directly with vetted React, Node.js/Go, API integration, and UI/UX iGaming engineers matching your exact codebase needs.',
    },
    {
      step: 'Step 03',
      title: 'Agile Sprint Delivery',
      subtitle: 'Weekly PRs + Staging Demos',
      details:
        'Ship audited code into staging every sprint with Git transparency, automated checks, and direct Slack/Telegram engineering sync.',
    },
    {
      step: 'Step 04',
      title: 'Production Launch & Ops',
      subtitle: 'Monitoring + Managed Support',
      details:
        'Smooth production cutover, load testing, 24/7 uptime monitoring, and flexible ongoing maintenance or contractual IP handover.',
    },
  ];

  const specTable = [
    { parameter: 'Core Engineering Roles', specification: 'Full-stack React/Next.js, Node.js/Go backend, API integration architects, Crash game devs, UI/UX & DevOps' },
    { parameter: 'Platform Domains Covered', specification: 'Online casinos, live sportsbooks, bookmaker PPH systems, crypto/Web3 gaming & US sweepstakes casinos' },
    { parameter: 'Integration Capabilities', specification: '10,000+ casino studio APIs, Betradar/Pinnacle odds feeds, fiat/crypto payment gateways, KYC & CRM webhooks' },
    { parameter: 'Security & Compliance Stack', specification: 'HMAC-SHA256 webhook verification, fixed-point ledgers, KYC/AML audit logs, bonus abuse & fraud flags' },
    { parameter: 'Design & Mobile Delivery', specification: 'Bespoke iGaming design services, responsive HTML5 web lobbies, progressive web apps (PWA) & native Android APK' },
    { parameter: 'Hosting & Managed Services', specification: 'Hardened cloud iGaming hosting services, DDoS mitigation, Redis/PostgreSQL tuning & 24/7 live ops support' },
    { parameter: 'Engagement Flexibility', specification: 'Dedicated monthly developer retainer, cross-functional Agile sprint pod, or fixed-scope bespoke delivery' },
    { parameter: 'Code & IP Ownership', specification: 'Full Git repository access and intellectual property ownership granted to client per signed agreement' },
  ];

  const metrics = [
    { value: '50+', label: 'iGaming Platforms Delivered', note: 'Production casinos, sportsbooks & sweepstakes brands' },
    { value: '150+', label: 'Third-Party APIs Integrated', note: 'Game aggregators, odds vendors & payment processors' },
    { value: '99.99%', label: 'Production Uptime Track', note: 'High-concurrency infrastructure under real traffic' },
    { value: '< 140ms', label: 'Live WebSocket Latency', note: 'Optimized real-time betting and game telemetry' },
    { value: '10,000+', label: 'Games Aggregated', note: 'Unified single-wallet connectors across top studios' },
    { value: '100%', label: 'Contractual IP Ownership', note: 'Clean repositories handed over per agreement' },
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
              Hire iGaming Developer
            </span>
          </nav>

          <div className="cs-hero-banner">
            <Image
              src="/assets/features/igaming-software-development-banner.webp"
              alt="Hire Dedicated iGaming Software Developers and Full-Cycle Platform Engineers"
              width={1440}
              height={810}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay" />
            <div className="cs-hero-banner-content">
              <div className="cs-hero-eyebrow">
                <Sparkles className="w-4 h-4 text-[#00ebaa]" />
                <span>Dedicated Engineering Pods • Full-Cycle iGaming Development</span>
              </div>

              <h1 className="cs-hero-title">
                Hire iGaming Developer &amp; Dedicated Casino / Sportsbook Team
              </h1>

              <div className="cs-hero-description">
                <p>
                  Scale your gaming product faster with senior iGaming software developers. From custom React/Next.js
                  frontends and Node.js/Go wallet ledgers to odds feed APIs, crash games, and managed hosting.
                </p>
              </div>

              <div className="cs-hero-tags">
                {[
                  'Senior React, Node.js & Go Devs',
                  'Odds, Casino & Payment APIs',
                  'Custom Crash & Web3 Originals',
                  'Strict NDA & Contractual IP',
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
                  <span className="relative z-10">Request Engineering Quote</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base text-white hover:text-[#00ebaa] border border-white/20 hover:border-[#00ebaa]/50 hover:bg-white/[0.04] transition-all cursor-pointer"
                >
                  <span>Book Technical Discovery Call</span>
                </button>
              </div>
            </div>
          </div>

          {/* FACTS CARDS */}
          <dl className="cs-facts">
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Engagement Model</dt>
              <dd className="cs-facts-value">Dedicated Dev, Pod or Bespoke</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Domain Specialization</dt>
              <dd className="cs-facts-value">Casino, Sportsbook, Crypto, DFS</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Core Engineering Stack</dt>
              <dd className="cs-facts-value">React, Next.js, Node.js, Go, Redis</dd>
            </div>
            <div className="cs-facts-item">
              <dt className="cs-facts-label">Confidentiality &amp; Ownership</dt>
              <dd className="cs-facts-value">Mutual NDA &amp; Contractual IP</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 2. TWO COLUMN STORY GRIDS */}
      <section className="cs-two-col-section">
        <div className="cs-container">
          {/* GRID 1: Full-Cycle iGaming Software Development Engineers */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Full-Cycle iGaming Software Development From Concept to Live Ops</h2>
              <div className="cs-two-col-content">
                <p>
                  Generic outsourcing firms often underestimate the engineering nuance behind regulated gambling systems—
                  leading to race conditions in wallet balances, slow live odds polling, and rejected payment gateway
                  audits. As a specialized iGaming software development company and provider of top iGaming developers,
                  KVAORNUX embeds domain-tested engineering talent directly into your roadmap.
                </p>
                <p>
                  Whether you need full-cycle iGaming platform development from concept to live ops, dedicated UI/UX
                  iGaming design services, or senior backend refactoring, our iGaming solutions developers build
                  high-concurrency architecture spanning{' '}
                  <Link href="/casino-website-developer" className="text-[#00ebaa] hover:underline font-medium">
                    custom casino websites
                  </Link>{' '}
                  and{' '}
                  <Link href="/sportsbook-developer" className="text-[#00ebaa] hover:underline font-medium">
                    high-load sportsbook platforms
                  </Link>
                  .
                </p>
                <ul>
                  <li>Senior React, Next.js &amp; TypeScript frontend engineers for custom lobbies and iGaming apps</li>
                  <li>High-concurrency Node.js &amp; Go backend architects building atomic double-entry PAM ledgers</li>
                  <li>Bespoke iGaming software development tailored to custom bonus rules, VIP loops, and tournaments</li>
                  <li>Refactors legacy polling monoliths into sub-140ms WebSocket microservices</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/features/igaming-software-development-banner.webp"
                alt="Full-Cycle iGaming Software Development Services"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 2: iGaming Integration, Payment, CRM & Crash Game Studios */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/features/casino-game-providers-api-aggregator.webp"
                alt="iGaming API, Payment Gateway and Crash Game Studio Integration"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">API Integrations, Payment Services, CRM &amp; Crash Originals</h2>
              <div className="cs-two-col-content">
                <p>
                  Save months of trial-and-error with our specialized iGaming integration services. Our developers have
                  pre-built production patterns for 150+ third-party APIs—from certified game aggregators and external
                  sportsbook odds feeds to high-risk payment gateways and CRM automation engines.
                </p>
                <p>
                  Looking for distinctive in-house titles or automated retention? We provide dedicated crash game
                  development studios for iGaming platforms, custom affiliate apps, and retention CRM workflows built to
                  maximize player LTV.
                </p>
                <ul>
                  <li>
                    <strong className="text-white">iGaming Payment Services:</strong> Payment gateway integration services for cards, open banking, PIX, UPI, and BTC/USDT crypto rails.
                  </li>
                  <li>
                    <strong className="text-white">CRM Services for iGaming:</strong> Automated CRM managed webhooks powering free spins, cashback, odds boosts, and VIP alerts.
                  </li>
                  <li>
                    <strong className="text-white">Crash Game &amp; Originals Studios:</strong> Custom multiplayer Crash, Mines, Plinko, Dice, and provably fair Web3 mini-games.
                  </li>
                  <li>
                    <strong className="text-white">Sportsbook &amp; Casino APIs:</strong> End-to-end single-wallet integration connecting slots, live dealers, and live sports.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 3: Hosting, Managed Services & Licensing Consulting */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Hardened iGaming Hosting, Compliance &amp; Managed Services</h2>
              <div className="cs-two-col-content">
                <p>
                  Launching and operating an international betting site demands more than clean application code. Our
                  DevOps and compliance engineers deliver resilient iGaming hosting services, DDoS defense, real-time
                  monitoring, and technical readiness aligned with global{' '}
                  <Link href="/igaming-licensing" className="text-[#00ebaa] hover:underline font-medium">
                    iGaming licensing frameworks
                  </Link>
                  .
                </p>
                <p>
                  From initial business development scoping and jurisdiction checklists (Malta, Curacao, Anjouan, Isle of
                  Man, Kahnawake) to post-launch iGaming managed services, your platform runs with 99.99% stability
                  during peak matchday traffic.
                </p>
                <ul>
                  <li>Multi-region cloud infrastructure, Cloudflare security rules &amp; zero-downtime deployments</li>
                  <li>iGaming compliance consulting services covering KYC/AML queues, geolocation &amp; responsible gaming</li>
                  <li>Affiliate app tracking, exposure monitoring, and automated regulatory audit log exports</li>
                  <li>Continuous 24/7 SRE support, database query optimization, and studio onboarding sprints</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/features/24-7-igaming-technical-support-maintenance.webp"
                alt="24/7 iGaming Managed Services, Hosting and Compliance Readiness"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />
            </div>
          </div>

          {/* GRID 4: Engagement Advantages (4 Glass Cards) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Why Operators &amp; Startups Hire KVAORNUX Developers</h2>
              <div className="cs-two-col-content">
                <p>
                  Instead of spending 6 months recruiting, vetting, and onboarding unspecialized engineers, partner
                  directly with an experienced iGaming software development provider. Need a turnkey base first or
                  custom product roadmap? Explore our{' '}
                  <Link href="/custom-igaming-solution" className="text-[#00ebaa] hover:underline font-medium">
                    custom iGaming solutions
                  </Link>{' '}
                  or book a sprint pod tailored strictly to your priorities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {[
                { title: 'Zero Learning Curve', desc: 'Our engineers already know wallet locks, GGR math, seamless studio callbacks, and risk delays.' },
                { title: 'Direct Git & Code Sync', desc: 'Work inside your own Git repositories with transparent PR reviews, tests, and staging demos.' },
                { title: 'Flexible Team Scaling', desc: 'Start with one senior specialist or deploy a full-cycle pod of frontend, backend & QA engineers.' },
                { title: 'Strict NDA & IP Terms', desc: 'Every line of custom code and UI/UX asset belongs to your company per signed contract.' },
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

      {/* 3. CORE ENGINEERING CAPABILITIES TABS */}
      <section className="cs-modules-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">Dedicated iGaming Engineering Capabilities</h2>
          <p className="cs-section-sub">
            Review the exact technical disciplines you unlock when hiring KVAORNUX iGaming software developers, API
            integrators, crash game engineers, and cloud DevOps teams.
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

      {/* 4. THREE HIRING & ENGAGEMENT MODELS */}
      <section id="packages" className="py-16 md:py-20 bg-[#0b0b0f] border-t border-white/10">
        <div className="cs-container">
          <h2 className="cs-section-heading">Flexible iGaming Developer Hiring Models</h2>
          <p className="cs-section-sub">
            Choose how you work with our engineering team—from augmenting an internal squad with one specialist developer
            to deploying a full-cycle bespoke product team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Model 1 — Single Specialist */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Staff Augmentation
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Dedicated Specialist Dev</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Single senior frontend, backend or API engineer</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Embed a dedicated React/Next.js frontend developer, Node.js/Go wallet engineer, or studio/payment API
                  integrator directly into your existing Slack, Jira, and Git workflow.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Model Includes:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Dedicated senior iGaming specialist under NDA',
                      'Direct integration into your GitHub / GitLab & Jira',
                      'Game studio, odds feed, or payment gateway connectors',
                      'Front-end UI/UX upgrades, PWA & SEO Core Web Vitals',
                      'Daily async updates & weekly sprint walkthroughs',
                      '100% repository code ownership per contract',
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
                  Hire Specialist Developer
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Hire Specialist iGaming Developer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Model 2 — Full-Cycle Pod (Most Popular) */}
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
                <h3 className="text-2xl font-bold text-white mb-1.5">Full-Cycle iGaming Pod</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">UI/UX, Frontend, Backend PAM, APIs &amp; QA</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Cross-functional iGaming development team engineered to build and scale complete casino, sportsbook,
                  sweepstakes, or Web3 betting platforms from concept to live operations.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Model Includes:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Bespoke UI/UX design + Next.js & mobile APK delivery',
                      'Double-entry PAM wallet + Node.js / Go microservices',
                      'Multi-provider game aggregator & Betradar/Pinnacle odds',
                      'Fiat + crypto payment processors, CRM & bonus engine',
                      'Dedicated technical QA, load testing & staging pipeline',
                      'iGaming cloud hosting, DDoS defense & live ops setup',
                      'Complete source code & IP ownership per contract',
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
                  Request Dedicated Pod
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#04160f] transition-all hover:brightness-105 shrink-0 cursor-pointer"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                  }}
                  aria-label="Request Full-Cycle iGaming Pod"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Model 3 — Enterprise Squad & Originals */}
            <div className="cs-glass-card p-6 sm:p-7 flex flex-col justify-between text-left">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#00ebaa] bg-[#00ebaa]/15 mb-3 uppercase tracking-wider">
                  Enterprise &amp; Managed Ops
                </span>
                <h3 className="text-2xl font-bold text-white mb-1.5">Custom Platform &amp; Studio Squad</h3>
                <p className="text-xs text-[#a5d8d0] mb-4">Multi-brand scaling, crash games &amp; 24/7 SRE</p>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  Built for multi-brand operator groups building proprietary crash/mini-game studios, custom trading
                  desks, multi-jurisdiction compliance tooling, and 24/7 managed cloud operations.
                </p>

                <div className="pt-4 border-t border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase text-white/70 block mb-3">Model Includes:</span>
                  <ul className="space-y-2.5">
                    {[
                      'Senior Solution Architect + multi-pod engineering squad',
                      'Custom crash games & provably fair RNG studio builds',
                      'Multi-brand PAM tenant isolation & regulatory reporting',
                      'Custom liability risk algorithms & external trading feeds',
                      '24/7 iGaming managed services & infrastructure SRE',
                      'Complete contractual IP & source code handover',
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
                  aria-label="Request Enterprise iGaming Squad Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ENGAGEMENT PIPELINE & SPEC TABLE */}
      <section id="system-architecture" className="cs-arch-section">
        <div className="cs-container">
          <h2 className="cs-section-heading">4-Step Engineering Onboarding &amp; Delivery Workflow</h2>
          <p className="cs-section-sub">
            Transparent sprint execution from day-one NDA discovery through staging reviews, security testing, and
            zero-downtime production deployment.
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
                Engineering Team Capabilities Summary
              </h3>
              <span className="text-xs text-[#a5d8d0]">Dedicated B2B Development Standard</span>
            </div>
            <div className="overflow-x-auto">
              <table className="cs-spec-table">
                <thead>
                  <tr>
                    <th className="w-1/3">Engineering Area</th>
                    <th>Team Capabilities</th>
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
          <h2 className="cs-results-heading">Engineering Track Record</h2>
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
              &quot;Hiring KVAORNUX&apos;s dedicated iGaming pod saved us two quarters of recruiting delays. They
              stabilized our wallet ledger, shipped three studio integrations cleanly, and rebuilt our mobile lobby into
              the fastest-converting site in our operator group.&quot;
            </div>
            <div className="cs-testimonial-role">
              CTO • Multi-Brand Casino &amp; Sportsbook Group
            </div>
          </div>
        </div>
      </section>

      {/* 8. NATIVE SITE FAQ SECTION */}
      <FAQSection customFaqData={HIRE_IGAMING_DEVELOPER_FAQS} hideBgImage={true} />

      {/* 9. OPPORTUNITIES BANNER + CONTACT FORM SECTION */}
      <OpportunitiesSection />
      <section id="contact-us" className="py-12 bg-[#0b0b0f] relative z-10">
        <ContactForm defaultCategory="Bespoke iGaming Solutions" />
      </section>
    </div>
  );
}
