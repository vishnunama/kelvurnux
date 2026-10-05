'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Gamepad2,
  Wallet,
  RotateCcw,
  Globe,
  Smartphone,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';

export default function Pori444CaseStudyClient() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        /* EXACT CASE STUDY STYLES MATCHING THE REFERENCE HTML & CSS 100% */
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
          padding: clamp(32px, 5vw, 44px) clamp(24px, 4vw, 32px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          margin-bottom: 44px;
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
          background: linear-gradient(180deg, rgba(10, 22, 25, 0.4) 0%, rgba(10, 22, 25, 0.75) 100%);
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
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #00ebaa;
          margin-bottom: 12px;
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
          gap: 16px;
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
          font-size: 16px;
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
          font-size: 18px;
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
          gap: 40px;
          align-items: center;
          margin-bottom: 40px;
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
          line-height: 1.6;
          color: #b4d5da;
          font-weight: 400;
          margin-bottom: 16px;
        }

        .cs-two-col-content a {
          color: #00ebaa;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }

        .cs-two-col-content a:hover {
          color: #ffffff;
        }

        .cs-two-col-content ul {
          margin-top: 14px;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          list-style-type: disc;
        }

        .cs-two-col-content li {
          font-size: 15px;
          color: #b4d5da;
          font-weight: 400;
          line-height: 1.5;
        }

        .cs-two-col-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 640 / 430;
          max-width: 480px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }

        /* PLATFORM DELIVERED CARDS MATCHING EXACT SPEC */
        .cs-results {
          padding: 48px 0;
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
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .cs-results-label {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.4;
          color: #d1e5e8;
        }

        /* PROJECT OUTCOME MATCHING EXACT SPEC (NO FAKE TESTIMONIAL) */
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
          .cs-two-col-grid {
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
            padding: 80px 0 16px;
          }
          .cs-hero-banner {
            padding: 20px 16px;
            margin-bottom: 16px;
            border-radius: 20px;
          }
          .cs-hero-title {
            font-size: 22px;
            margin-bottom: 12px;
          }
          .cs-hero-description {
            font-size: 14px;
            margin-bottom: 16px;
          }
          .cs-hero-tags {
            gap: 8px;
          }
          .cs-hero-tag {
            padding: 5px 12px;
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
          .cs-two-col-section {
            padding: 32px 0;
          }
          .cs-two-col-grid {
            gap: 20px;
          }
          .cs-results {
            padding: 32px 0;
          }
          .cs-results-heading {
            font-size: 24px;
            margin-bottom: 20px;
          }
          .cs-results-list {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .cs-results-item {
            width: 100%;
            padding: 18px 16px;
            border-radius: 18px;
          }
          .cs-results-icon {
            width: 40px;
            height: 40px;
            padding: 8px;
            margin-bottom: 12px;
          }
          .cs-results-value {
            font-size: 26px;
          }
          .cs-results-label {
            font-size: 14px;
          }
          .cs-testimonial {
            padding: 32px 0;
          }
          .cs-testimonial-heading {
            font-size: 24px;
            margin-bottom: 20px;
          }
          .cs-testimonial-card {
            padding: 20px 16px;
            border-radius: 18px;
          }
          .cs-testimonial-quote {
            font-size: 15px;
            margin-bottom: 14px;
          }
          .cs-testimonial-role {
            font-size: 14px;
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
            <Link href="/igaming-case-studies/" className="breadcrumbs-item">
              Portfolio
            </Link>
            <span className="breadcrumbs-sep">›</span>
            <span className="breadcrumbs-item breadcrumbs-current">
              Bangladesh iGaming Platform Case Study
            </span>
          </nav>

          <div className="cs-hero-banner">
            <div className="cs-hero-banner-content">
              <span className="cs-hero-eyebrow">iGaming Case Study</span>
              <h1 className="cs-hero-title">
                Building a Localized iGaming Platform for the Bangladesh Market
              </h1>

              <div className="cs-hero-description">
                <p>
                  Kvaornux developed Pori444 as a mobile-first iGaming platform built around the Bangladesh market, combining multi-provider game content, BDT wallet operations, local payment channels, player engagement tools, affiliate management and back-office controls within one connected system.
                </p>
              </div>

              <div className="cs-hero-tags">
                <span className="cs-hero-tag">
                  <Wallet className="w-5 h-5" />
                  <span>BDT Wallet & Payments</span>
                </span>
                <span className="cs-hero-tag">
                  <Gamepad2 className="w-5 h-5" />
                  <span>Multi-Provider Game Integration</span>
                </span>
                <span className="cs-hero-tag">
                  <Users className="w-5 h-5" />
                  <span>7-Level Affiliate System</span>
                </span>
                <span className="cs-hero-tag">
                  <Globe className="w-5 h-5" />
                  <span>Localized for Bangladesh</span>
                </span>
              </div>
            </div>
          </div>

          {/* FACTS CARDS */}
          <div className="cs-facts">
            <div className="cs-facts-item">
              <span className="cs-facts-label">Project name</span>
              <span className="cs-facts-value">Pori444</span>
            </div>
            <div className="cs-facts-item">
              <span className="cs-facts-label">Solution</span>
              <span className="cs-facts-value">Localized iGaming Platform</span>
            </div>
            <div className="cs-facts-item">
              <span className="cs-facts-label">Market</span>
              <span className="cs-facts-value">Bangladesh</span>
            </div>
            <div className="cs-facts-item">
              <span className="cs-facts-label">Platform</span>
              <span className="cs-facts-value">Mobile-First H5 + Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO COLUMN DETAILS SECTION */}
      <section className="cs-two-col-section">
        <div className="cs-container">
          {/* GRID 1: The Challenge */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">The Challenge</h2>
              <div className="cs-two-col-content">
                <p>
                  The project required an iGaming platform designed around the operational needs of the Bangladesh market rather than a generic international setup. The platform needed to support BDT transactions, local payment behaviour, localized player journeys and a broad range of game categories while keeping the mobile experience straightforward.
                </p>
                <p>
                  Beyond the player-facing platform, the operation also required flexible tools for deposits and withdrawals, affiliate commissions, promotional rewards, player activity monitoring and day-to-day back-office management.
                </p>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/pori444/Pori444 Mobile Casino Showcase (1).webp"
                alt="Pori444 mobile casino platform showcase"
                width={640}
                height={430}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* GRID 2: The Solution (Image Left, Text Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/pori444/Pori444 Mobile Casino Gaming Platform.webp"
                alt="Pori444 mobile iGaming platform interface"
                width={640}
                height={430}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">The Solution</h2>
              <div className="cs-two-col-content">
                <p>
                  Kvaornux developed Pori444 as a connected mobile-first platform combining the player interface, game integrations, wallet infrastructure, payment workflows, affiliate tools and operational back office through our <Link href="/custom-igaming-solution">custom iGaming solutions</Link>.
                </p>
                <p>
                  The platform was localized for Bangladesh with BDT wallet operations, Bangla language support and integrations for bKash, Nagad and Rocket. Its modular architecture also supports multiple game categories, configurable promotional systems and real-time operational controls.
                </p>
              </div>
            </div>
          </div>

          {/* GRID 3: Game & Payment Infrastructure */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Game & Payment Infrastructure</h2>
              <div className="cs-two-col-content">
                <p>
                  Pori444 integrates multiple game aggregation services via our <Link href="/casino-aggregator-api-solution">game aggregator API infrastructure</Link> through structured launch, wallet and transaction workflows. The platform supports game categories including slots, fast and crash games, fishing games, lottery and mini games.
                </p>
                <p>
                  For local financial operations, the platform supports BDT payments through bKash, Nagad and Rocket, with both automated and manual transaction workflows. USDT processing is also supported through a separate crypto payment integration.
                </p>
                <ul>
                  <li>15 verified provider key integrations</li>
                  <li>BDT wallet infrastructure with bKash, Nagad & Rocket support</li>
                  <li>Automated & manual local payment workflows plus USDT crypto processing</li>
                  <li>Slots, fast/crash, fishing, lottery, and mini game categories</li>
                  <li>6 supported languages: Bangla, English, Hindi, Nepali, Tamil, Urdu</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/pori444/Pori444 Mobile Gaming App Process.webp"
                alt="Pori444 iGaming platform development process"
                width={640}
                height={430}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* GRID 4: Affiliate & Player Engagement (Image Left, Text Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/pori444/PORI444 Neon Casino Style Guide.webp"
                alt="Pori444 casino platform UI style guide"
                width={640}
                height={430}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Affiliate & Player Engagement</h2>
              <div className="cs-two-col-content">
                <p>
                  A seven-level affiliate structure enables the platform to manage direct and indirect referral networks from F1 through F7. Deposit commission and betting-turnover commission can be configured independently across the different levels.
                </p>
                <p>
                  Player engagement tools include first-deposit and daily-deposit bonuses, net-loss cashback, seven-day sign-in rewards, gift codes, referral milestones and a spin-wheel experience. These systems are connected to administrative controls so operational teams can configure campaign rules without changing the player-facing application.
                </p>
                <ul>
                  <li>7-level affiliate referral architecture (F1 through F7)</li>
                  <li>Independent deposit & betting-turnover commission configurations</li>
                  <li>First-deposit, daily-deposit, and net-loss cashback bonuses</li>
                  <li>7-day sign-in rewards, gift codes, and interactive spin-wheel experience</li>
                  <li>Centralized promotional rule configuration without frontend updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 5: Back-Office Operations */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Back-Office Operations</h2>
              <div className="cs-two-col-content">
                <p>
                  The Pori444 back office centralizes player, financial and platform operations within our <Link href="/turnkey-casino-software-solutions">turnkey platform system</Link>. Administrators can monitor deposits, withdrawals, player activity, game transactions, affiliate performance and financial reporting from one operational environment.
                </p>
                <p>
                  The system also provides configurable payment methods, bonus settings, cashback rules, daily sign-in rewards, gift codes, user controls, collaborator management, site settings and support-ticket workflows.
                </p>
                <ul>
                  <li>21 operational back-office modules</li>
                  <li>React 18 & TypeScript admin with Material UI and ApexCharts</li>
                  <li>Node.js, Express, PostgreSQL, Redis, Socket.io & Node Cron backend</li>
                  <li>Device fingerprinting, login rate controls & CAPTCHA fallback</li>
                  <li>Account blocking, withdrawal security PIN & regional restriction controls</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/pori444/Pori444 Mobile Casino Showcase (1).webp"
                alt="Pori444 mobile casino platform showcase"
                width={640}
                height={430}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM DELIVERED */}
      <section className="cs-results">
        <div className="cs-container">
          <h2 className="cs-results-heading">Platform Delivered</h2>
          <div className="cs-results-list">
            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <p className="cs-results-value">15</p>
              <p className="cs-results-label">Verified Provider Keys</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Users className="w-6 h-6" />
              </div>
              <p className="cs-results-value">7-Level</p>
              <p className="cs-results-label">Affiliate Architecture</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Wallet className="w-6 h-6" />
              </div>
              <p className="cs-results-value">BDT</p>
              <p className="cs-results-label">Localized Wallet Infrastructure</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <RotateCcw className="w-6 h-6" />
              </div>
              <p className="cs-results-value">21</p>
              <p className="cs-results-label">Back-Office Modules</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Globe className="w-6 h-6" />
              </div>
              <p className="cs-results-value">6</p>
              <p className="cs-results-label">Supported Languages</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Smartphone className="w-6 h-6" />
              </div>
              <p className="cs-results-value">Android</p>
              <p className="cs-results-label">APK Distribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT OUTCOME */}
      <section className="cs-testimonial">
        <div className="cs-container">
          <h2 className="cs-testimonial-heading">Project Outcome</h2>
          <div className="cs-testimonial-card">
            <div className="cs-testimonial-quote">
              Pori444 brings localized payments, game content, affiliate operations, player engagement and back-office management into one connected platform. The result is an operational system designed around the payment behaviour, language requirements and mobile-first player experience of the Bangladesh market.
            </div>
            <div className="cs-testimonial-role">Pori444 Project</div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM SECTION */}
      <section id="contact-us" className="py-16 bg-[#0b0b0f] relative z-10">
        <ContactForm />
      </section>
    </div>
  );
}
