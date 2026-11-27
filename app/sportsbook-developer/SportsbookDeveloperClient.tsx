'use client';

import React from 'react';
import SolutionDetailLayout, {
  SolutionTabItem,
  SolutionFeatureCard,
  SolutionComparisonCard,
  SolutionDiscoverConfigItem,
} from '@/src/components/solutions/SolutionDetailLayout';
import { StepItem } from '@/src/components/stepssection/StepsSection';
import { SPORTSBOOK_DEVELOPER_FAQS } from './faqData';

const TABS: SolutionTabItem[] = [
  {
    id: 'live-betting',
    label: 'In-Play & Bet Slip',
    icon: 'zap',
    title: 'Fast Mobile-First Betting & Bet Builder UX',
    description:
      'Engineered for thumb-first mobile play during live matches, with instant green/red odds-change highlights, Same-Game Bet Builder, live pitch visualizations, and full, partial, or automated cashout.',
    image: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
    alt: 'Fast Mobile-First Betting and Bet Builder UX',
  },
  {
    id: 'risk-desk',
    label: 'Risk & Trading Desk',
    icon: 'shield',
    title: 'Real-Time Book Liability & Margin Control',
    description:
      'Gives your trading team complete visibility over live event exposure heatmaps, automated stake limitation for syndicated sharp bettors, per-league margin overrides across 80+ sports, and one-click market suspensions.',
    image: '/assets/case-studies/sportsbook-platform/risk-dashboard.webp',
    alt: 'Real-Time Book Liability and Margin Control',
  },
  {
    id: 'api-aggregation',
    label: 'Odds Feeds & APIs',
    icon: 'globe',
    title: 'Multi-Source Odds Feed Normalization',
    description:
      'Unified odds aggregation pipeline connecting official Betradar, Genius Sports, and Pinnacle feeds with sub-second WebSocket channels, automated result settlement, and multi-provider failover redundancy.',
    image: '/assets/sportsbook-developer/fiverr-api-slide.jpg',
    alt: 'Multi-Source Odds Feed Normalization',
  },
  {
    id: 'pam-cashier',
    label: 'PAM & Agent Cashier',
    icon: 'dashboard',
    title: 'Omnichannel Single-Wallet & Back Office',
    description:
      'Centralized Player Account Management (PAM) supporting unified sports and casino balances, multi-currency fiat and crypto gateways, retail betting shop POS terminals, and multi-tier agent networks.',
    image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
    alt: 'Omnichannel Single-Wallet and Back Office',
  },
];

const FEATURE_ITEMS: SolutionFeatureCard[] = [
  {
    id: 1,
    icon: 'code',
    title: 'Custom React.js, Next.js & Node.js/Go Engineering',
    description:
      'Decoupled, high-load sports betting platforms engineered for lightning-fast bet validation and zero downtime during peak tournament spikes.',
  },
  {
    id: 2,
    icon: 'zap',
    title: 'Sub-140ms WebSocket Live Odds Engine',
    description:
      'Topic-scoped WebSockets backed by Redis Pub/Sub deliver real-time price updates and configurable in-play acceptance delays.',
  },
  {
    id: 3,
    icon: 'shield',
    title: 'Automated Trading Desk & Sharp Defense',
    description:
      'Live exposure heatmaps recalculated on every ticket, automated stake factor throttling, arbitrage alerts, and dynamic cashout.',
  },
  {
    id: 4,
    icon: 'globe',
    title: 'Official Sportsbook API Integrations',
    description:
      'Direct connectivity to Betradar, Pinnacle, Kambi, Genius Sports, and Sporting Solutions covering 80+ sports and 1,000+ markets.',
  },
  {
    id: 5,
    icon: 'wallet',
    title: 'Single-Wallet PAM & Multi-Currency Cashiers',
    description:
      'Unified ledger connecting sportsbook, live casino, and virtuals with fiat payment gateways and automated crypto processing.',
  },
  {
    id: 6,
    icon: 'layers',
    title: 'Embeddable Sportsbook iFrame Development',
    description:
      'Lightweight responsive sportsbook iframe for existing casino platforms with single-sign-on and live wallet balance synchronization.',
  },
  {
    id: 7,
    icon: 'sparkles',
    title: 'Sweepstakes & Blockchain Betting Models',
    description:
      'Dual-wallet Gold Coin / Sweeps Coin social sportsbook architecture with AMOE & geofencing, or Web3 blockchain crypto betting.',
  },
  {
    id: 8,
    icon: 'server',
    title: 'Retail POS Terminals & Mobile APK',
    description:
      'Point-of-sale shop cashier terminals with barcode thermal ticket printing alongside responsive PWA and native Android APK apps.',
  },
];

const PIPELINE_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Odds Feed Ingestion',
    text: 'Consumes contracted sports data feeds, normalizes market schemas across 80+ sports, and caches active pricing snapshots in Redis.',
  },
  {
    id: 2,
    title: 'WebSocket Delta Gateway',
    text: 'Pushes sub-140ms live odds ticks, match visualizations, and suspension states only to subscribed event rooms via Socket.io + Redis Pub/Sub.',
  },
  {
    id: 3,
    title: 'High-Throughput Validator',
    text: 'Validates odds tolerance, event liability limits, and player profiles before committing atomic single-wallet transactions.',
  },
  {
    id: 4,
    title: 'Trading & Settlement Desk',
    text: 'Real-time book exposure heatmaps, sharp-player stake limits, automated ticket grading, and regulatory audit logging.',
  },
  {
    id: 5,
    title: 'Production Launch & IP Handover',
    text: 'Deploy on hardened cloud infrastructure with full source-code and repository handover per signed agreement.',
  },
];

const COMPARISON_CARDS: SolutionComparisonCard[] = [
  {
    title: 'White Label Sportsbook',
    href: '/white-label-sportsbook',
    description:
      'Existing battle-tested sportsbook platform customized with your brand identity and essential odds feeds for faster time to market.',
    bullets: [
      'Existing battle-tested sportsbook platform',
      'Custom branding & configuration',
      'Responsive mobile & web interface',
      'Essential sportsbook API integration (40+ sports)',
      'Source code subject to agreement',
    ],
    ctaText: 'Request White Label Quote',
    ariaLabel: 'Request White Label Quote',
  },
  {
    title: 'Turnkey Sportsbook',
    href: '/turnkey-sportsbook-solutions',
    description:
      'Complete casino and sportsbook solution with backend, database, integrated casino aggregator, risk management desk, and source-code ownership.',
    bullets: [
      'Complete standalone sportsbook platform',
      'Casino game aggregator integration (slots & live)',
      'Payment gateway integration (fiat & crypto)',
      'Omnichannel player wallet & PAM ledger',
      'Source code ownership according to contract',
    ],
    ctaText: 'Request Turnkey Quote',
    ariaLabel: 'Request Turnkey Quote',
    featured: true,
  },
  {
    title: 'Custom Development',
    href: '/custom-igaming-solution',
    description:
      'Fully customized platform engineered from scratch around client requirements, with dedicated developers, custom microservices, and contractual IP ownership.',
    bullets: [
      '100% custom UI/UX design & front-end workflows',
      'Custom sportsbook microservices (Node.js/Go)',
      'Selected sports data & odds API integrations',
      'Custom workflows (sweepstakes or crypto betting)',
      'Source code & IP ownership defined in contract',
    ],
    ctaText: 'Request Custom Quote',
    ariaLabel: 'Request Custom Quote',
  },
];

const DISCOVER_ITEMS: SolutionDiscoverConfigItem[] = [
  {
    id: 1,
    title: '50+ Platforms Delivered',
    description:
      'Global sportsbooks, online casinos, and sweepstakes platforms engineered for high-concurrency traffic.',
    icon: 'rocket',
    span: 2,
  },
  {
    id: 2,
    title: 'Sportsbook Software Platform',
    description:
      'Explore our complete enterprise sportsbook software with Bet Builder, dynamic cashout, and PAM.',
    icon: 'crown',
    link: '/sportsbook-software',
    span: 2,
  },
  {
    id: 3,
    title: 'Sportsbook API Integration',
    description:
      'Connect Betradar, Pinnacle, and Genius Sports odds feeds via normalized REST/WebSocket APIs.',
    icon: 'globe',
    link: '/sportsbook-api-integration',
    span: 2,
  },
  {
    id: 4,
    title: '150+ APIs & < 140ms Live Odds',
    description:
      'Official sports odds feeds, casino game aggregators, and fiat/crypto payment gateways with 99.99% uptime SLA.',
    icon: 'zap',
    span: 3,
  },
  {
    id: 5,
    title: 'Hire Dedicated iGaming Developers',
    description:
      'Scale faster by embedding senior React, Node.js, Go, and API engineers directly into your team.',
    icon: 'users',
    link: '/hire-igaming-developer',
    span: 3,
  },
  {
    id: 6,
    title: 'Bookmaker & PPH Software',
    description:
      'Multi-tier agent hierarchies, automated weekly credit sheets, and retail betting shop POS terminals.',
    icon: 'dashboard',
    link: '/bookmaker-software',
    span: 2,
  },
  {
    id: 7,
    title: 'High-Load Sportsbook Case Study',
    description:
      'Read how KVAORNUX engineered a sub-140ms live betting platform with automated risk management.',
    icon: 'activity',
    link: '/igaming-case-studies/high-load-sportsbook-platform-development',
    span: 2,
  },
  {
    id: 8,
    title: '100% Contractual IP Ownership',
    description:
      'Full source code and Git repository handover available per your signed agreement.',
    icon: 'lock',
    span: 2,
  },
];

export default function SportsbookDeveloperClient() {
  return (
    <SolutionDetailLayout
      breadcrumbLabel="Sportsbook Developer"
      heroTitle="Professional Sportsbook Developer for Custom Betting Websites"
      heroDescription="Build your sportsbook platform with sub-second in-play odds, multi-source API integration, single-wallet PAM, and automated trading risk controls engineered for high-concurrency operators."
      tabsAriaLabel="Core Engineering Modules Delivered"
      tabs={TABS}
      featuresSection={{
        title: 'Custom Sportsbook Platform Engineering',
        subtitle:
          'Everything you need to build a custom sports betting website — from React/Next.js frontends and WebSocket odds engines to automated risk desks and retail POS.',
        ctaText: 'Discuss Your Sportsbook Build',
        items: FEATURE_ITEMS,
      }}
      stepsSection={{
        sectionId: 'system-architecture',
        title: 'Low-Latency Event-Driven Sportsbook Pipeline',
        subtitle:
          'Decoupling odds feed ingestion from bet validation ensures heavy spectator browsing never slows down ticket placement, risk monitoring, or wallet settlement.',
        ctaText: 'Request Technical Walkthrough',
        steps: PIPELINE_STEPS,
      }}
      comparisonSection={{
        sectionId: 'packages',
        title: 'Sportsbook Development Delivery Packages',
        subtitle:
          'Compare our white label, turnkey, and custom bespoke development models to select the right platform scope and ownership terms for your business.',
        cards: COMPARISON_CARDS,
      }}
      discoverSection={{
        title: 'Explore Sportsbook Engineering & Capabilities',
        subtitle:
          'Review our production benchmarks, related sportsbook platforms, and dedicated engineering services.',
        items: DISCOVER_ITEMS,
      }}
      faqData={SPORTSBOOK_DEVELOPER_FAQS}
      contactCategory="Sportsbook"
    />
  );
}
