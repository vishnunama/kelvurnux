'use client';

import React from 'react';
import SolutionDetailLayout, {
  SolutionTabItem,
  SolutionFeatureCard,
  SolutionComparisonCard,
  SolutionDiscoverConfigItem,
} from '@/src/components/solutions/SolutionDetailLayout';
import { StepItem } from '@/src/components/stepssection/StepsSection';
import { SPORTSBOOK_SOFTWARE_FAQS } from './faqData';

const TABS: SolutionTabItem[] = [
  {
    id: 'inplay-engine',
    label: 'In-Play Betting Engine',
    icon: 'zap',
    title: 'High-Throughput In-Play Engine & Bet Slip Execution',
    description:
      'Engineered for maximum player engagement and peak matchday concurrency, delivering sub-second live odds shifts, Same-Game Bet Builder, dynamic full/partial cashout, and live match tracker visualizations.',
    image: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
    alt: 'High-Throughput In-Play Engine and Bet Slip Execution',
  },
  {
    id: 'trading-desk',
    label: 'Risk & Trading Desk',
    icon: 'shield',
    title: 'Real-Time Book Liability Desk & Sharp Player Defense',
    description:
      'Complete central sportsbook management software giving trading teams real-time exposure heatmaps, automated stake limitation for sharp bettors, per-league margin controls across 80+ sports, and instant market suspensions.',
    image: '/assets/case-studies/sportsbook-platform/risk-dashboard.webp',
    alt: 'Real-Time Book Liability Desk and Sharp Player Defense',
  },
  {
    id: 'odds-feeds',
    label: 'Odds Feeds & APIs',
    icon: 'globe',
    title: 'Multi-Source Odds Feed Normalization & Redundancy',
    description:
      'Unified sports betting software data pipeline integrating official Betradar, Pinnacle Solution, Kambi, and Genius Sports feeds with sub-140ms WebSocket delivery, automated grading, and multi-provider failover.',
    image: '/assets/sportsbook-developer/fiverr-api-slide.jpg',
    alt: 'Multi-Source Odds Feed Normalization and Redundancy',
  },
  {
    id: 'pam-backoffice',
    label: 'PAM & Back Office',
    icon: 'dashboard',
    title: 'Enterprise Player Account Management & Bookie Hierarchy',
    description:
      'Full-scale player management with an immutable double-entry single-wallet ledger, 10,000+ casino game integrations, multi-tier agent/cashier hierarchies, and retail betting shop POS software.',
    image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
    alt: 'Enterprise Player Account Management and Bookie Hierarchy',
  },
];

const FEATURE_ITEMS: SolutionFeatureCard[] = [
  {
    id: 1,
    icon: 'zap',
    title: 'Sub-140ms Live In-Play Betting Engine',
    description:
      'Topic-scoped WebSockets backed by Redis Pub/Sub stream live odds deltas with automated bet-delay throttles to defend against pitch-side latency arbitrage.',
  },
  {
    id: 2,
    icon: 'layers',
    title: 'Same-Game Bet Builder & Dynamic Cashout',
    description:
      'Supports singles, accumulators, round robins, system bets, correlated Same-Game Parlays, and algorithmic full, partial, and auto-cashout.',
  },
  {
    id: 3,
    icon: 'shield',
    title: 'Automated Trading Desk & Liability Control',
    description:
      'Real-time exposure heatmaps per selection and fixture, sharp-bettor stake caps, per-league overround overrides, and emergency market suspensions.',
  },
  {
    id: 4,
    icon: 'globe',
    title: 'Official Odds Feeds (80+ Sports, 1,000+ Markets)',
    description:
      'Pre-integrated Betradar (Sportradar), Pinnacle Solution, Kambi, and Genius Sports feeds with automatic backup failover and instant ticket grading.',
  },
  {
    id: 5,
    icon: 'wallet',
    title: 'Single-Wallet PAM & Casino Integration',
    description:
      'Unified double-entry wallet connecting sportsbook, 10,000+ slots and live dealer games, poker, and virtuals with zero manual balance transfers.',
  },
  {
    id: 6,
    icon: 'users',
    title: 'Multi-Tier Bookie Agent & PPH Hierarchy',
    description:
      'Super Admin, Master Agent, Sub-Agent, and Cashier roles with automated weekly sheet accounting, credit limits, and commission splits.',
  },
  {
    id: 7,
    icon: 'server',
    title: 'Retail Betting Shop POS & Thermal Ticketing',
    description:
      'Point-of-sale shop terminal software with encrypted barcode thermal ticket printing, over-the-counter redemption, and self-service kiosks.',
  },
  {
    id: 8,
    icon: 'code',
    title: 'Turnkey, White Label & Source Code Options',
    description:
      'Choose rapid white label deployment, standalone turnkey autonomy, or bespoke React/Next.js + Node.js/Go builds with contractual IP ownership.',
  },
];

const PIPELINE_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Odds Feed Ingestion & Failover',
    text: 'Consumes contracted sports data feeds, normalizes market schemas across 80+ sports, and caches active pricing snapshots in Redis with instant fallback.',
  },
  {
    id: 2,
    title: 'WebSocket Delta Gateway',
    text: 'Pushes sub-140ms live odds updates, match visualization telemetry, and suspension states strictly to subscribed event rooms via Socket.io + Redis Pub/Sub.',
  },
  {
    id: 3,
    title: 'High-Throughput Bet Validator',
    text: 'Validates odds tolerances, market liability limits, and player risk profiles before committing atomic single-wallet ledger transactions.',
  },
  {
    id: 4,
    title: 'Trading Desk & Auto-Settlement',
    text: 'Computes real-time book liability heatmaps, enforces sharp-player stake limits, and triggers automated ticket grading from official results.',
  },
  {
    id: 5,
    title: 'Omnichannel Reporting & Compliance',
    text: 'Delivers audit-ready GGR, NGR, affiliate RevShare/CPA payouts, KYC/AML queues, and multi-jurisdiction regulatory exports.',
  },
];

const COMPARISON_CARDS: SolutionComparisonCard[] = [
  {
    title: 'White Label Sportsbook',
    href: '/white-label-sportsbook',
    description:
      'Pre-configured online sportsbook software customized with your brand identity, standard payment rails, and live odds feeds across 40+ top sports.',
    bullets: [
      'Battle-tested sportsbook platform software',
      'Custom branded responsive web UI and mobile PWA',
      'Integrated sportsbook odds feeds (40+ sports)',
      'Standard fiat and crypto payment gateways',
      'Dedicated hosting and 24/7 technical monitoring',
    ],
    ctaText: 'Request White Label Quote',
    ariaLabel: 'Request White Label Quote',
  },
  {
    title: 'Turnkey Sportsbook Platform',
    description:
      'Complete turnkey sports betting software with integrated casino aggregator, automated trading risk desk, single-wallet PAM, and source-code ownership per contract.',
    bullets: [
      'Standalone sportsbook platform with full backend control',
      'Comprehensive odds feeds (80+ sports, 1,000+ markets)',
      'Casino game aggregator (10,000+ slots & live dealers)',
      'Automated liability trading desk & sharp bettor defense',
      'Source code ownership granted according to contract',
    ],
    ctaText: 'Request Turnkey Quote',
    ariaLabel: 'Request Turnkey Quote',
    featured: true,
  },
  {
    title: 'Bespoke Custom Engineering',
    href: '/custom-igaming-solution',
    description:
      'Custom-engineered sportsbook software built for tier-1 operators and innovative models (sweepstakes or Web3) with dedicated microservices and IP ownership.',
    bullets: [
      '100% bespoke UI/UX design & custom interaction flows',
      'Decoupled microservice architecture (React, Node.js, Go)',
      'Direct contracts with official feeds (Betradar, Pinnacle)',
      'Custom sweepstakes dual-wallet or Web3 crypto logic',
      'Complete source code & IP ownership per contract',
    ],
    ctaText: 'Request Custom Quote',
    ariaLabel: 'Request Custom Quote',
  },
];

const DISCOVER_ITEMS: SolutionDiscoverConfigItem[] = [
  {
    id: 1,
    title: '< 140ms Live Odds Latency',
    description:
      'Topic-scoped WebSockets with delta compression engineered for zero bet slip lag during peak matchdays.',
    icon: 'zap',
    span: 2,
  },
  {
    id: 2,
    title: 'Sportsbook API Integration',
    description:
      'Connect Betradar, Pinnacle, and Genius Sports feeds via normalized REST/WebSocket APIs or casino iFrame.',
    icon: 'globe',
    link: '/sportsbook-api-integration',
    span: 2,
  },
  {
    id: 3,
    title: 'Bookmaker & PPH Software',
    description:
      'Multi-tier agent hierarchies, automated weekly credit sheets, and retail betting shop POS terminals.',
    icon: 'users',
    link: '/bookmaker-software',
    span: 2,
  },
  {
    id: 4,
    title: '80+ Sports, 1,000+ Markets & 99.99% SLA',
    description:
      'Decoupled microservices covering global football, NBA, NFL, cricket, horse racing, and esports with zero-downtime scaling.',
    icon: 'activity',
    span: 3,
  },
  {
    id: 5,
    title: 'Turnkey Sportsbook Solutions',
    description:
      'Operate a standalone sportsbook and casino under your own license with full back-office autonomy.',
    icon: 'crown',
    link: '/turnkey-sportsbook-solutions',
    span: 3,
  },
  {
    id: 6,
    title: 'High-Load Sportsbook Case Study',
    description:
      'See how KVAORNUX engineered a sub-140ms live betting platform with automated risk management.',
    icon: 'rocket',
    link: '/igaming-case-studies/high-load-sportsbook-platform-development',
    span: 2,
  },
  {
    id: 7,
    title: 'Sportsbook Developer Services',
    description:
      'Hire dedicated sportsbook engineers for custom betting websites, Bet Builders, and trading desks.',
    icon: 'code',
    link: '/sportsbook-developer',
    span: 2,
  },
  {
    id: 8,
    title: '50+ Global Platforms Delivered',
    description:
      'Trusted by licensed sportsbooks, sweepstakes platforms, and bookmaker operations across US, EU, LATAM & India.',
    icon: 'shield',
    span: 2,
  },
];

export default function SportsbookSoftwareClient() {
  return (
    <SolutionDetailLayout
      breadcrumbLabel="Sportsbook Software"
      heroTitle="Sportsbook Software & Sports Betting Platform for Operators"
      heroDescription="Launch your betting business with enterprise sportsbook software. Engineered with sub-second in-play odds feeds across 80+ sports, automated trading liability risk controls, single-wallet PAM, and complete turnkey operational architecture."
      tabsAriaLabel="Core Sportsbook Software Modules"
      tabs={TABS}
      featuresSection={{
        title: 'Enterprise Sportsbook Software Capabilities',
        subtitle:
          'Everything you need to operate a high-concurrency sportsbook — from sub-140ms live odds and Same-Game Bet Builders to automated risk desks, PAM, and retail POS.',
        ctaText: 'Discuss Your Sportsbook Project',
        items: FEATURE_ITEMS,
      }}
      stepsSection={{
        sectionId: 'system-architecture',
        title: 'Event-Driven Sportsbook Architecture Pipeline',
        subtitle:
          'Decoupling odds ingestion, ticket validation, and settlement ensures massive viewer browsing during peak sporting finals never slows down ticket execution.',
        ctaText: 'Request Architecture Demo',
        steps: PIPELINE_STEPS,
      }}
      comparisonSection={{
        sectionId: 'packages',
        title: 'Sportsbook Software Deployment Packages',
        subtitle:
          'Choose the delivery model that fits your operational scale—from rapid white label launches to full turnkey sports betting platforms and bespoke source code ownership.',
        cards: COMPARISON_CARDS,
      }}
      discoverSection={{
        title: 'Explore Sportsbook Capabilities & Benchmarks',
        subtitle:
          'Explore our production performance metrics, API integration services, and related sportsbook solutions.',
        items: DISCOVER_ITEMS,
      }}
      faqData={SPORTSBOOK_SOFTWARE_FAQS}
      contactCategory="Sportsbook"
    />
  );
}
