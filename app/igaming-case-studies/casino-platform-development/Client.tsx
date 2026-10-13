'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users,
  Handshake,
  Gamepad2,
  Wallet,
  RotateCcw,
  TrendingUp,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';

export default function CasinoPlatformCaseStudyClient() {
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

        /* RESULTS IN 6 MONTHS MATCHING EXACT SPEC */
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
            <Link href="/" className="breadcrumbs-item">Home</Link>
            <span className="breadcrumbs-sep">›</span>
            <Link href="/igaming-case-studies" className="breadcrumbs-item">Portfolio</Link>
            <span className="breadcrumbs-sep">›</span>
            <span className="breadcrumbs-item breadcrumbs-current">Casino Platform Development</span>
          </nav>

          <div className="cs-hero-banner">
            <Image
              src="/assets/case-studies/lakebets/lakebets-casino-platform-development.webp"
              alt="Lakebets mobile-first casino platform development"
              width={1600}
              height={520}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay"></div>
            <div className="cs-hero-banner-content">
              <h1 className="cs-hero-title">
                Building a Scalable Mobile-First Casino Platform
              </h1>

              <div className="cs-hero-description">
                <p>
                  Kvaornux developed Lakebets as a mobile-first casino platform for the Nigerian market, bringing game aggregation, NGN wallet operations, payments, affiliate management and back-office controls into one connected platform.
                </p>
              </div>

              <div className="cs-hero-tags">
                <span className="cs-hero-tag">
                  <Gamepad2 className="w-5 h-5" />
                  <span>10 Game Aggregator Integrations</span>
                </span>
                <span className="cs-hero-tag">
                  <Users className="w-5 h-5" />
                  <span>6-Level Affiliate System</span>
                </span>
                <span className="cs-hero-tag">
                  <Wallet className="w-5 h-5" />
                  <span>NGN Wallet & Payments</span>
                </span>
              </div>
            </div>
          </div>

          {/* FACTS CARDS */}
          <div className="cs-facts">
            <div className="cs-facts-item">
              <span className="cs-facts-label">Project name</span>
              <span className="cs-facts-value">Lakebets</span>
            </div>
            <div className="cs-facts-item">
              <span className="cs-facts-label">Solution</span>
              <span className="cs-facts-value">Custom Casino Platform</span>
            </div>
            <div className="cs-facts-item">
              <span className="cs-facts-label">Market</span>
              <span className="cs-facts-value">Nigeria</span>
            </div>
            <div className="cs-facts-item">
              <span className="cs-facts-label">Platform</span>
              <span className="cs-facts-value">Mobile-First H5 Web</span>
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
                  Lakebets needed a casino platform built around the requirements of the Nigerian market rather than a generic casino template. The platform had to connect multiple game APIs, keep player balances synchronized across gameplay and payments, support NGN transactions, provide a mobile-first experience and give the operations team centralized control over players, transactions, promotions and affiliate activity.
                </p>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/lakebets/lakebets-mobile-casino-platform.webp"
                alt="Lakebets mobile-first casino platform development"
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
                src="/assets/case-studies/lakebets/lakebets-platform-overview.webp"
                alt="Lakebets casino platform with game lobby, affiliate and wallet interfaces"
                width={640}
                height={430}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">The Solution</h2>
              <div className="cs-two-col-content">
                <p>
                  Kvaornux developed a custom H5 casino platform connecting the player frontend, centralized wallet, game aggregation layer, payment workflows, affiliate system and back office. Ten game aggregator/API integrations were connected with game catalogue retrieval, launch flows, wallet callbacks, bet and win processing, transaction validation and bet history. The platform was built with React, Node.js, PostgreSQL, Redis and Socket.io.
                </p>
              </div>
            </div>
          </div>

          {/* GRID 3: Game Integration & Wallet Infrastructure */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Game Integration & Wallet Infrastructure</h2>
              <div className="cs-two-col-content">
                <p>
                  The game layer connects multiple aggregator APIs through a unified platform workflow while the centralized NGN wallet keeps player balances aligned across deposits, withdrawals and gameplay. Real-time balance updates are delivered through Socket.io, with transaction validation and duplicate-transaction protection supporting wallet accuracy.
                </p>
                <ul>
                  <li>10 game aggregator/API integrations</li>
                  <li>Game catalogue and launch integration</li>
                  <li>Bet, win and rollback handling where supported</li>
                  <li>Real-time NGN wallet synchronization</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/lakebets/lakebets-development-process.webp"
                alt="Lakebets mobile-first casino platform development process"
                width={640}
                height={430}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* GRID 4: Affiliate & Back-Office Operations (Image Left, Text Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/lakebets/lakebets-platform-style-guide.webp"
                alt="Lakebets casino platform UI and brand style guide"
                width={640}
                height={430}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Affiliate & Back-Office Operations</h2>
              <div className="cs-two-col-content">
                <p>
                  Lakebets includes a six-level referral architecture designed to support structured affiliate operations. Referral relationships, qualification criteria, player activity and commissions can be tracked through the platform. The back office gives the operations team centralized control over users, balances, deposits, withdrawals, game activity, promotions, reporting and administrative permissions.
                </p>
                <ul>
                  <li>6-level affiliate architecture</li>
                  <li>Referral and commission tracking</li>
                  <li>Player and wallet management</li>
                  <li>Deposit and withdrawal workflows</li>
                  <li>Promotions and gift-code controls</li>
                  <li>Role-based administrative access</li>
                </ul>
              </div>
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
              <p className="cs-results-value">10</p>
              <p className="cs-results-label">Game Aggregator Integrations</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Users className="w-6 h-6" />
              </div>
              <p className="cs-results-value">6</p>
              <p className="cs-results-label">Affiliate Levels</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Wallet className="w-6 h-6" />
              </div>
              <p className="cs-results-value">NGN</p>
              <p className="cs-results-label">Local Wallet Infrastructure</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <RotateCcw className="w-6 h-6" />
              </div>
              <p className="cs-results-value">Real-Time</p>
              <p className="cs-results-label">Balance Synchronization</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Handshake className="w-6 h-6" />
              </div>
              <p className="cs-results-value">Mobile-First</p>
              <p className="cs-results-label">H5 Player Experience</p>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <TrendingUp className="w-6 h-6" />
              </div>
              <p className="cs-results-value">Live</p>
              <p className="cs-results-label">Production Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLIENT TESTIMONIAL */}
      <section className="cs-testimonial">
        <div className="cs-container">
          <h2 className="cs-testimonial-heading">Client testimonials</h2>
          <div className="cs-testimonial-card">
            <div className="cs-testimonial-quote-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="34" viewBox="0 0 44 34" fill="none">
                <path d="M10.3158 34C8.5614 34 6.87719 33.5424 5.26316 32.6273C3.7193 31.6418 2.45614 30.2691 1.47368 28.5093C0.491228 26.7495 0 24.7081 0 22.3851C0 19.9917 0.526316 17.4928 1.57895 14.8882C2.70175 12.2836 4.35088 9.71428 6.52632 7.18013C8.77193 4.64596 11.6491 2.25259 15.1579 0L20.1053 5.2795C17.8596 7.67288 16.1754 10.0311 15.0526 12.354C13.9298 14.6066 13.3684 16.7184 13.3684 18.6894C13.3684 20.8716 13.9298 22.5963 15.0526 23.8634C16.1754 25.1304 17.7193 26.3623 19.6842 27.559C19.0526 29.53 17.8246 31.1139 16 32.3106C14.2456 33.4369 12.3509 34 10.3158 34ZM34.2105 34C32.4561 34 30.7719 33.5424 29.1579 32.6273C27.614 31.6418 26.3509 30.2691 25.3684 28.5093C24.386 26.7495 23.8947 24.7081 23.8947 22.3851C23.8947 19.9917 24.4211 17.4928 25.4737 14.8882C26.5965 12.2836 28.2456 9.71428 30.4211 7.18013C32.6667 4.64596 35.5439 2.25259 39.0526 0L44 5.2795C41.7544 7.67288 40.0702 10.0311 38.9474 12.354C37.8246 14.6066 37.2632 16.7184 37.2632 18.6894C37.2632 20.8716 37.8246 22.5963 38.9474 23.8634C40.0702 25.1304 41.614 26.3623 43.5789 27.559C42.9474 29.53 41.7193 31.1139 39.8947 32.3106C38.1404 33.4369 36.2456 34 34.2105 34Z" fill="#ffffff" fillOpacity="0.2"></path>
              </svg>
            </div>
            <div className="cs-testimonial-quote">
              The flexibility of Kvaornux’s modular setup is a significant plus. It lets us swap tools or tweak parts of the project without interrupting operations, which is a huge win when you’re live 24/7. Working with their team feels more like having an in-house department of experts than a standard vendor. They focus on technical execution and keep things moving.
            </div>
            <div className="cs-testimonial-role">
              Lakebets Client
            </div>
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
