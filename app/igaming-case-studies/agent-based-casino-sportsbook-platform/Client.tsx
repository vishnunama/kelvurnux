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

export default function AgentBasedCasinoSportsbookCaseStudyClient() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        /* EXACT CASE STUDY STYLES MATCHING THE CASINO-PLATFORM-DEVELOPMENT PAGE 100% */
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
          aspect-ratio: 16 / 10;
          max-width: 520px;
          width: 100%;
          margin: 0 auto;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          background: #0e1418;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* PLATFORM DELIVERED MATCHING EXACT SPEC (3 COLUMNS X 2 ROWS) */
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
            <Link href="/igaming-case-studies/" className="breadcrumbs-item">Portfolio</Link>
            <span className="breadcrumbs-sep">›</span>
            <span className="breadcrumbs-item breadcrumbs-current">Agent-Based Casino & Sportsbook Platform</span>
          </nav>

          <div className="cs-hero-banner">
            <Image
              src="/assets/case-studies/jeestfast24/jeetfast24-agent-based-casino-sportsbook-platform.webp"
              alt="Jeetfast24 agent-based casino and sportsbook platform development"
              width={1600}
              height={520}
              priority
              className="cs-hero-banner-bg"
            />
            <div className="cs-hero-banner-overlay"></div>
            <div className="cs-hero-banner-content">
              <h1 className="cs-hero-title">
                Building a Multi-Tier Agent-Based Casino & Sportsbook Platform
              </h1>

              <div className="cs-hero-description">
                <p>
                  Kvaornux developed Jeetfast24 as a PKR-based iGaming platform combining casino games, exchange-style sportsbook functionality, multi-tier agent operations, wallet management and role-based back-office controls within one connected system.
                </p>
              </div>

              <div className="cs-hero-tags">
                <span className="cs-hero-tag">
                  <Wallet className="w-5 h-5" />
                  <span>PKR Wallet Infrastructure</span>
                </span>
                <span className="cs-hero-tag">
                  <Users className="w-5 h-5" />
                  <span>Multi-Tier Agent System</span>
                </span>
                <span className="cs-hero-tag">
                  <Gamepad2 className="w-5 h-5" />
                  <span>Casino & Sportsbook</span>
                </span>
                <span className="cs-hero-tag">
                  <TrendingUp className="w-5 h-5" />
                  <span>Real-Time Betting Operations</span>
                </span>
              </div>
            </div>
          </div>

          {/* FACTS CARDS */}
          <div className="cs-facts">
            <div className="cs-facts-item">
              <span className="cs-facts-label">Project name</span>
              <span className="cs-facts-value">Jeetfast24</span>
            </div>
            <div className="cs-facts-item">
              <span className="cs-facts-label">Solution</span>
              <span className="cs-facts-value">Casino & Sportsbook Platform</span>
            </div>
            <div className="cs-facts-item">
              <span className="cs-facts-label">Market</span>
              <span className="cs-facts-value">Pakistan</span>
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
                  Jeetfast24 required more than a standard player-facing gaming website. The platform needed to support a structured agent-led operating model while combining casino content and sportsbook functionality within a single PKR-based environment.
                </p>
                <p>
                  The architecture also needed clear operational separation between platform administrators, back-office teams, agents and players, with controlled credit distribution and reporting visibility across each level.
                </p>
                <p>
                  The player experience had to remain mobile-first while supporting real-time sports markets, casino games and account operations without exposing the complexity of the underlying hierarchy.
                </p>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/jeestfast24/jeetfast24-mobile-casino-sportsbook.webp"
                alt="Jeetfast24 agent-based platform challenge and multi-tier operational architecture"
                width={640}
                height={430}
                className="w-full h-full object-contain p-1"
              />
            </div>
          </div>

          {/* GRID 2: The Solution (Image Left, Text Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/jeestfast24/jeetfast24-app-experience-showcase.webp"
                alt="Jeetfast24 platform overview with sportsbook, casino, and agent management"
                width={640}
                height={430}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">The Solution</h2>
              <div className="cs-two-col-content">
                <p>
                  Kvaornux developed a connected iGaming platform built around a multi-tier operational structure.
                </p>
                <p>
                  The system combines a mobile-first H5 player interface with casino and sportsbook functionality, PKR wallet operations and dedicated administrative views for different operational roles.
                </p>
                <p>
                  The hierarchy supports Super Admin, permission-based Sub-Admin access, Backoffice/Master Agent operations, Agent accounts and end players.
                </p>
                <p>
                  Back-office and agent users receive access according to their operational scope, allowing platform-level administration while keeping downstream player and financial activity organized by hierarchy.
                </p>
                <ul>
                  <li>Multi-tier agent and back-office architecture</li>
                  <li>PKR-based wallet operations</li>
                  <li>Casino and sportsbook within one player platform</li>
                  <li>Role-based administrative access</li>
                  <li>Agent-to-player credit management</li>
                  <li>Mobile-first H5 player experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GRID 3: Sportsbook & Casino Infrastructure */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Sportsbook & Casino Infrastructure</h2>
              <div className="cs-two-col-content">
                <p>
                  Jeetfast24 combines exchange-style sportsbook functionality with casino and slot content through integrated gaming infrastructure.
                </p>
                <p>
                  The sportsbook supports cricket-focused markets including Match Odds, Bookmaker and Fancy/Session markets alongside additional sports and racing categories.
                </p>
                <p>
                  Back and Lay betting is supported together with real-time liability and exposure calculations before bet acceptance.
                </p>
                <p>
                  Casino and slot content is delivered through the platform's active game aggregation infrastructure, while wallet synchronization connects gaming activity with the player's PKR balance.
                </p>
                <ul>
                  <li>Cricket Match Odds</li>
                  <li>Cricket Fancy / Session markets</li>
                  <li>Back & Lay betting</li>
                  <li>Soccer and Tennis markets</li>
                  <li>Horse and Greyhound Racing</li>
                  <li>Real-time exposure and liability calculations</li>
                  <li>Casino and slot aggregation</li>
                  <li>Connected PKR wallet operations</li>
                </ul>
              </div>
            </div>
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/jeestfast24/jeetfast24-home-dashboard-process-slide.webp"
                alt="Jeetfast24 exchange sportsbook and casino infrastructure"
                width={640}
                height={430}
                className="w-full h-full object-contain p-1"
              />
            </div>
          </div>

          {/* GRID 4: Agent & Back-Office Operations (Image Left, Text Right) */}
          <div className="cs-two-col-grid">
            <div className="cs-two-col-image">
              <Image
                src="/assets/case-studies/jeestfast24/jeetfast-neon-gaming-style-guide.webp"
                alt="Jeetfast24 agent hierarchy and back-office management system"
                width={640}
                height={430}
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="cs-two-col-text">
              <h2 className="cs-two-col-title">Agent & Back-Office Operations</h2>
              <div className="cs-two-col-content">
                <p>
                  A major part of the Jeetfast24 architecture is its agent-based operational model.
                </p>
                <p>
                  The system separates platform administration, delegated administrative access, master-agent operations and direct player management into controlled layers.
                </p>
                <p>
                  Super Admin users retain platform-level visibility and configuration access. Permission-based Sub-Admins can be assigned selected operational modules.
                </p>
                <p>
                  Backoffice/Master Agent accounts manage downstream agents and credit allocation, while Agents can manage their assigned players, distribute PKR credit and review player-level activity within their permitted scope.
                </p>
                <p>
                  This creates a structured operating environment without giving every role unrestricted platform access.
                </p>
                <ul>
                  <li>Super Admin controls</li>
                  <li>Permission-based Sub-Admin access</li>
                  <li>Backoffice / Master Agent layer</li>
                  <li>Agent account management</li>
                  <li>Agent-to-player PKR credit distribution</li>
                  <li>Hierarchical reporting visibility</li>
                  <li>Player and transaction management</li>
                  <li>Role-based operational controls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLATFORM DELIVERED MATCHING EXACT SPEC (3 COLUMNS X 2 ROWS) */}
      <section className="cs-results">
        <div className="cs-container">
          <h2 className="cs-results-heading">Platform Delivered</h2>
          <div className="cs-results-list">
            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Wallet className="w-5 h-5" />
              </div>
              <div className="cs-results-value">PKR</div>
              <div className="cs-results-label">Wallet Infrastructure</div>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Users className="w-5 h-5" />
              </div>
              <div className="cs-results-value">Multi-Tier</div>
              <div className="cs-results-label">Agent Architecture</div>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="cs-results-value">Back & Lay</div>
              <div className="cs-results-label">Exchange-Style Sportsbook</div>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div className="cs-results-value">Real-Time</div>
              <div className="cs-results-label">Odds & Betting Operations</div>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <Handshake className="w-5 h-5" />
              </div>
              <div className="cs-results-value">Mobile-First</div>
              <div className="cs-results-label">H5 Player Experience</div>
            </div>

            <div className="cs-results-item">
              <div className="cs-results-icon">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="cs-results-value">Multi-Role</div>
              <div className="cs-results-label">Back-Office Controls</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT OUTCOME EDITORIAL SUMMARY */}
      <section className="cs-testimonial">
        <div className="cs-container">
          <h2 className="cs-testimonial-heading">Project Outcome</h2>
          <div className="cs-testimonial-card">
            <div className="cs-testimonial-quote">
              The platform brings casino, sportsbook and agent operations into one connected system. The multi-tier architecture provides structured control across agents, players and operational activity, while the mobile-first H5 interface keeps the player experience straightforward.
            </div>
            <div className="cs-testimonial-role">
              Jeetfast24 Project
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