'use client';

import React from 'react';
import SolutionDetailLayout, {
  SolutionTabItem,
  SolutionFeatureCard,
  SolutionComparisonCard,
  SolutionDiscoverConfigItem,
} from '@/src/components/solutions/SolutionDetailLayout';
import { StepItem } from '@/src/components/stepssection/StepsSection';
import { SPORTSBOOK_API_FAQS } from './faqData';

const TABS: SolutionTabItem[] = [
  {
    id: 'odds-normalizer',
    label: 'Odds Normalization Pipeline',
    icon: 'layers',
    title: 'Multi-Source Sportsbook Odds API Normalization',
    description:
      'Unify incompatible XML, AMQP, and REST schemas from Betradar, Genius Sports, Pinnacle, and Kambi across 80+ sports, 1,000+ markets, horse racing, and esports into one clean API with automated failover.',
    image: '/assets/sportsbook-developer/fiverr-api-slide.jpg',
    alt: 'Multi-Source Sportsbook Odds API Normalization',
  },
  {
    id: 'websocket-inplay',
    label: 'WebSocket In-Play Feed',
    icon: 'zap',
    title: 'Sub-140ms WebSocket Odds Delivery & Auto-Grading',
    description:
      'Replace sluggish HTTP polling with topic-scoped Socket.io + Redis Pub/Sub telemetry delivering real-time in-play price deltas, pitch-side delay checks, market suspensions, and official settlement hooks.',
    image: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
    alt: 'Sub-140ms WebSocket Odds Delivery and Auto-Grading',
  },
  {
    id: 'wallet-pam',
    label: 'Seamless Wallet & Payments',
    icon: 'wallet',
    title: 'Single-Wallet PAM, Payment Gateways & CRM',
    description:
      'Connect our betting API directly into your existing casino PAM with idempotent debit, credit, win, and rollback endpoints, fiat/crypto payment gateways, CRM bonus webhooks, and HMAC-SHA256 security.',
    image: '/assets/features/igaming-financial-reconciliation-auto-invoices.webp',
    alt: 'Single-Wallet PAM, Payment Gateways and CRM Integration',
  },
  {
    id: 'iframe-module',
    label: 'Sportsbook iFrame & UX',
    icon: 'code',
    title: 'Embeddable Sportsbook iFrame Integration Tools',
    description:
      'Add full sports betting to your online casino website in record time using our responsive sportsbook iframe matching your brand theme, with SSO session handshake, Bet Builder, and dynamic cashout.',
    image: '/assets/features/sportsbook-integration-banner.webp',
    alt: 'Embeddable Sportsbook iFrame Integration Tools',
  },
];

const FEATURE_ITEMS: SolutionFeatureCard[] = [
  {
    id: 1,
    icon: 'layers',
    title: 'Unified Multi-Feed Odds Normalization',
    description:
      'Canonical event, team, market, and outcome mapping across Betradar (Sportradar), Genius Sports, Pinnacle Solution, and Kambi.',
  },
  {
    id: 2,
    icon: 'zap',
    title: 'Sub-140ms WebSocket In-Play Telemetry',
    description:
      'Topic-scoped WebSockets backed by Redis Pub/Sub eliminate heavy polling bottlenecks and deliver compressed live price deltas.',
  },
  {
    id: 3,
    icon: 'globe',
    title: 'Football, Horse Racing & Esports Odds APIs',
    description:
      '80+ sports and 1,000+ markets including football, NBA/NFL, cricket ball-by-ball, horse racing SP/racecards, and CS2/Dota 2/LoL esports.',
  },
  {
    id: 4,
    icon: 'wallet',
    title: 'Idempotent Seamless Single-Wallet Webhooks',
    description:
      'Atomic balance, debit, credit, settle, and rollback endpoints with unique transaction UUIDs preventing duplicate charges.',
  },
  {
    id: 5,
    icon: 'code',
    title: 'Drop-In Responsive Sportsbook iFrame',
    description:
      'Embed a full sportsbook into your existing casino website with SSO authentication, matched styling, and real-time balance sync.',
  },
  {
    id: 6,
    icon: 'server',
    title: 'Multi-Provider Failover & Redundancy',
    description:
      'Automated health checks switch traffic seamlessly across primary and backup external odds feeds with 99.99% uptime SLA.',
  },
  {
    id: 7,
    icon: 'gift',
    title: 'Payment Gateways, CRM & Bonus Webhooks',
    description:
      'Fiat cards, e-wallets, and BTC/USDT crypto adapters alongside free-bet, parlay boost, and affiliate tracking webhooks.',
  },
  {
    id: 8,
    icon: 'lock',
    title: 'HMAC-SHA256, mTLS & API Key Vault Security',
    description:
      'Bank-grade payload signing, IP allowlisting, rate caps, and pre-commit liability validation protect every bet and wallet call.',
  },
];

const PIPELINE_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Upstream Feed Adapters',
    text: 'Dedicated worker adapters ingest contracted Betradar, Genius Sports, Pinnacle, horse racing, and esports streams concurrently.',
  },
  {
    id: 2,
    title: 'Canonical Normalizer & Redis Cache',
    text: 'Normalizes odds formats, market IDs, and margin overrounds into a consistent real-time betting lines API cached in clustered Redis.',
  },
  {
    id: 3,
    title: 'WebSocket & REST Gateway',
    text: 'Broadcasts sub-140ms delta odds ticks over WebSockets and validates authenticated REST bet requests secured with HMAC signatures.',
  },
  {
    id: 4,
    title: 'Wallet, Settlement & CRM Hooks',
    text: 'Executes atomic single-wallet debits, processes official result grading webhooks, settles payouts, and fires bonus/CRM events.',
  },
  {
    id: 5,
    title: 'Sandbox Validation & Live Cutover',
    text: 'Complete OpenAPI/Swagger specs, webhook simulators, and Node.js/Go/Python SDKs for smooth staging tests and production launch.',
  },
];

const COMPARISON_CARDS: SolutionComparisonCard[] = [
  {
    title: 'Sportsbook iFrame Integration',
    description:
      'Embed our responsive sportsbook directly into your existing online casino or PAM with single-sign-on authentication and real-time wallet balance sync.',
    bullets: [
      'Responsive sportsbook iframe matching casino brand theme',
      'Single-sign-on (SSO) & seamless wallet webhook bridge',
      '80+ sports, live match trackers & dynamic cashout included',
      'Automated ticket grading & void rollback webhooks',
      'Dedicated integration testing & sandbox validation',
    ],
    ctaText: 'Request iFrame Quote',
    ariaLabel: 'Request Sportsbook iFrame Quote',
  },
  {
    title: 'Unified Odds & Settlement API',
    description:
      'Full headless integration connecting contracted official feeds (Betradar, Pinnacle, Genius Sports) into your custom frontend and PAM with sub-140ms WebSockets.',
    bullets: [
      'Normalized REST + < 140ms WebSocket live odds API',
      'Pre-match, live in-play, Bet Builder & cashout endpoints',
      'Football, basketball, horse racing & esports odds feeds',
      'Automated result settlement & void reconciliation hooks',
      'HMAC-SHA256 signing, mTLS & API key vault protection',
    ],
    ctaText: 'Request API Quote',
    ariaLabel: 'Request Unified Odds API Quote',
    featured: true,
  },
  {
    title: 'Multi-Feed Failover & CRM Suite',
    description:
      'Built for high-volume operators and trading platforms aggregating multiple external odds feeds with automated failover, payment rails, and CRM pipelines.',
    bullets: [
      'Multi-provider odds aggregation with automatic failover',
      'Proprietary margin rules & external trading feed ingestion',
      'Fiat + crypto payment gateway & KYC webhook integrations',
      'Sportsbook CRM, affiliate & free-bet bonus API triggers',
      'Contractual repository & IP access per agreement',
    ],
    ctaText: 'Request Enterprise Quote',
    ariaLabel: 'Request Enterprise API Quote',
  },
];

const DISCOVER_ITEMS: SolutionDiscoverConfigItem[] = [
  {
    id: 1,
    title: '< 140ms WebSocket Odds Latency',
    description:
      'Real-time in-play delta streaming across subscribed event rooms with 99.99% API gateway uptime.',
    icon: 'zap',
    span: 2,
  },
  {
    id: 2,
    title: 'Complete Sportsbook Software',
    description:
      'Explore our end-to-end sportsbook platform with Bet Builder, risk trading desk, and PAM.',
    icon: 'crown',
    link: '/sportsbook-software',
    span: 2,
  },
  {
    id: 3,
    title: 'Casino Game Aggregator API',
    description:
      'Pair your sportsbook API with 10,000+ slots, live dealer tables, and crash games in one wallet.',
    icon: 'gamepad',
    link: '/casino-aggregator-api-solution',
    span: 2,
  },
  {
    id: 4,
    title: '150+ APIs & 100% Idempotent Wallet Ledger',
    description:
      'Odds providers, casino aggregators, and payment gateways with atomic settlement webhooks preventing duplicate payouts.',
    icon: 'layers',
    span: 3,
  },
  {
    id: 5,
    title: 'Sportsbook Integration Guide',
    description:
      'Read our architectural breakdown on adding sportsbook integration to existing online casinos.',
    icon: 'code',
    link: '/blog/sportsbook-integration',
    span: 3,
  },
  {
    id: 6,
    title: 'Sportsbook Developer Services',
    description:
      'Hire dedicated sportsbook engineers for custom betting UIs, odds pipelines, and risk desks.',
    icon: 'users',
    link: '/sportsbook-developer',
    span: 2,
  },
  {
    id: 7,
    title: 'Bookmaker & PPH Software',
    description:
      'Multi-tier agent hierarchies, automated weekly credit sheets, and retail betting shop POS.',
    icon: 'dashboard',
    link: '/bookmaker-software',
    span: 2,
  },
  {
    id: 8,
    title: '80+ Sports, Racing & Esports',
    description:
      '1,000+ betting markets normalized into one clean REST and WebSocket developer contract.',
    icon: 'globe',
    span: 2,
  },
];

export default function SportsbookApiClient() {
  return (
    <SolutionDetailLayout
      breadcrumbLabel="Sportsbook API Integration"
      heroTitle="Sportsbook API Integration & Real-Time Odds Feed Provider"
      heroDescription="Connect your casino or betting platform to unified sportsbook APIs, sub-140ms live WebSocket odds feeds, automated settlement webhooks, payment gateways, or responsive iframe modules built for scale."
      tabsAriaLabel="Core Sportsbook API & Feed Integration Modules"
      tabs={TABS}
      featuresSection={{
        title: 'Sportsbook API & Odds Feed Capabilities',
        subtitle:
          'Everything your engineering team needs to integrate official sports data feeds, single-wallet PAM webhooks, and responsive sportsbook iFrames.',
        ctaText: 'Discuss Your API Integration',
        items: FEATURE_ITEMS,
      }}
      stepsSection={{
        sectionId: 'system-architecture',
        title: 'Event-Driven Odds Feed & Betting API Pipeline',
        subtitle:
          'Decoupling upstream feed ingestion from client WebSocket distribution and atomic wallet validation keeps your sportsbook responsive during major global finals.',
        ctaText: 'Request Sandbox Access',
        steps: PIPELINE_STEPS,
      }}
      comparisonSection={{
        sectionId: 'packages',
        title: 'Sportsbook API Integration Delivery Models',
        subtitle:
          'Choose the right integration architecture for your engineering team—from drop-in casino iframe embedding to headless WebSocket odds feeds and multi-provider aggregation.',
        cards: COMPARISON_CARDS,
      }}
      discoverSection={{
        title: 'Explore API Benchmarks & Related Solutions',
        subtitle:
          'Review our latency and reliability standards, sportsbook platforms, and casino aggregator APIs.',
        items: DISCOVER_ITEMS,
      }}
      faqData={SPORTSBOOK_API_FAQS}
      contactCategory="Sportsbook"
    />
  );
}
