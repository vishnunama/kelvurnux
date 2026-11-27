'use client';

import React from 'react';
import SolutionDetailLayout, {
  SolutionTabItem,
  SolutionFeatureCard,
  SolutionComparisonCard,
  SolutionDiscoverConfigItem,
} from '@/src/components/solutions/SolutionDetailLayout';
import { StepItem } from '@/src/components/stepssection/StepsSection';
import { BOOKMAKER_SOFTWARE_FAQS } from './faqData';

const TABS: SolutionTabItem[] = [
  {
    id: 'agent-hierarchy',
    label: 'Agent & PPH System',
    icon: 'users',
    title: 'Multi-Tier Bookie Agent System & Credit Sheets',
    description:
      'Built for bookmakers running hierarchical Super Admin, Master Agent, Sub-Agent, and Cashier networks—with automated weekly figure sheets, credit/freeplay balances, and zero per-head rental fees.',
    image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
    alt: 'Multi-Tier Bookie Agent System and Credit Sheets',
  },
  {
    id: 'risk-odds',
    label: 'Bookmaker Risk Desk',
    icon: 'shield',
    title: 'Real-Time Liability Heatmaps & Sharp Defense',
    description:
      'Give bookmakers complete control over live wager tickers, exposure heatmaps, automated sharp-bettor profiling, stake throttling, per-league vig/overround overrides, and instant line freezes.',
    image: '/assets/case-studies/sportsbook-platform/risk-dashboard.webp',
    alt: 'Real-Time Liability Heatmaps and Sharp Player Defense',
  },
  {
    id: 'retail-pos',
    label: 'Retail Shop POS & Kiosks',
    icon: 'server',
    title: 'Land-Based Betting Shop Terminals & Thermal Slips',
    description:
      'Power physical retail sportsbooks and betting shops with fast POS cashier software, encrypted barcode thermal ticket printing, QR payout scanning, shift drawer accounting, and self-service kiosks.',
    image: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
    alt: 'Land-Based Betting Shop Terminals and Thermal Ticketing',
  },
  {
    id: 'player-front',
    label: 'Mobile Bookie Front-End',
    icon: 'zap',
    title: 'Fast Mobile Betting UX & Multi-Currency Cashiers',
    description:
      'Give players a sleek mobile betting experience with HTML5 web app + native Android APK, Same-Game Parlays, teasers, dynamic cashout, and dual credit-sheet or online fiat/crypto wallet support.',
    image: '/assets/sportsbook-developer/fiverr-gig-cover.jpg',
    alt: 'Fast Mobile Betting UX and Multi-Currency Cashiers',
  },
];

const FEATURE_ITEMS: SolutionFeatureCard[] = [
  {
    id: 1,
    icon: 'users',
    title: 'Multi-Tier Bookie Agent Hierarchy',
    description:
      'Super Admin, Master Agent, Sub-Agent, Cashier, and Player roles with granular permission locks and automated commission splits.',
  },
  {
    id: 2,
    icon: 'chart',
    title: 'Automated Weekly Credit & Settle Sheets',
    description:
      'Instant Monday settle figures tracking player credit limits, freeplay balances, carryovers, and net balances—without per-head PPH fees.',
  },
  {
    id: 3,
    icon: 'shield',
    title: 'Real-Time Risk Desk & Sharp Defense',
    description:
      'Live wager ticker, exposure heatmaps, parlay payout caps, per-league juice/vig controls, and automated steam-move delay timers.',
  },
  {
    id: 4,
    icon: 'gamepad',
    title: 'Combined Sports & Casino Agent Software',
    description:
      'Unlock 10,000+ slots, crash games, and live dealer tables inside every player account on one unified sports and casino settle statement.',
  },
  {
    id: 5,
    icon: 'server',
    title: 'Retail Betting Shop POS & Self-Service Kiosks',
    description:
      'Over-the-counter POS cashier terminals, thermal barcode ticket printers, QR payout scanners, TV odds boards, and touchscreen SSBTs.',
  },
  {
    id: 6,
    icon: 'globe',
    title: 'Official Odds Feeds Across 80+ Sports',
    description:
      'Access Betradar, Pinnacle, Kambi, and Genius Sports lines covering NFL, NBA, MLB, soccer, cricket, UFC, and esports.',
  },
  {
    id: 7,
    icon: 'wallet',
    title: 'Credit Lines + Fiat & Crypto Cashiers',
    description:
      'Operate private credit-sheet agent models or enable instant online deposits via regional fiat gateways, Bitcoin, Ethereum, and USDT.',
  },
  {
    id: 8,
    icon: 'zap',
    title: 'Mobile-First PWA & Native Android APK',
    description:
      'Localized UI supporting American, decimal, fractional, and Asian odds with quick-bet sliders, Bet Builder, and one-tap cashout.',
  },
];

const PIPELINE_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Official Odds & Lines Engine',
    text: 'Streams official pre-match and live odds across 80+ sports with bookmaker margin rules, teasers, and instant line-freeze protections.',
  },
  {
    id: 2,
    title: 'Agent & Credit Ledger',
    text: 'Tracks agent credit allocations, player balances, freeplay bonuses, win/loss figures, and automated weekly settlement cycles.',
  },
  {
    id: 3,
    title: 'Real-Time Risk & Exposure Desk',
    text: 'Evaluates per-selection liability, player risk tiers, and steam-move delays before every online or retail POS ticket locks.',
  },
  {
    id: 4,
    title: 'Omnichannel Cashier & Retail POS',
    text: 'Unifies physical betting shop thermal ticket redemption with online fiat gateways, Bitcoin/USDT crypto wallets, and audit reports.',
  },
  {
    id: 5,
    title: 'Branded Deployment & Scale',
    text: 'Launch your own private bookie website and agent suite with zero per-head player penalties and contractual source-code options.',
  },
];

const COMPARISON_CARDS: SolutionComparisonCard[] = [
  {
    title: 'Bookie Agent Website',
    description:
      'Branded online bookie software featuring multi-tier agent credit hierarchies, weekly figure sheets, custom wager limits, and mobile-first live sports betting.',
    bullets: [
      'Branded player betting portal + agent control panel',
      'Multi-tier Master Agent & Sub-Agent credit sheets',
      'Official live & pre-match odds feeds (60+ top sports)',
      'Per-player min/max stakes & parlay payout caps',
      'Automated Monday weekly settle & balance figures',
    ],
    ctaText: 'Request Bookie Quote',
    ariaLabel: 'Request Bookie Agent Website Quote',
  },
  {
    title: 'Full Bookmaker & Casino Suite',
    description:
      'Complete bookmakers software combining 80+ sports, 10,000+ casino games inside casino agent software, sharp-bettor defense, and fiat/crypto cashiers.',
    bullets: [
      'Full sports bookie software (80+ sports, 1,000+ markets)',
      'Integrated casino agent software (10,000+ slots & live)',
      'Real-time exposure heatmaps & sharp-player stake caps',
      'Both credit-sheet agents & instant fiat/Bitcoin cashiers',
      'Contractual Turnkey or bespoke source-code path',
    ],
    ctaText: 'Request Bookmaker Quote',
    ariaLabel: 'Request Full Bookmaker Suite Quote',
    featured: true,
  },
  {
    title: 'Retail Betting Shop POS',
    description:
      'Purpose-built retail sportsbook and sports betting shop software linking physical counter terminals, self-service kiosks, thermal printers, and central risk.',
    bullets: [
      'Point-of-sale (POS) cashier terminal web & desktop app',
      'Encrypted barcode thermal ticket printing & QR payout',
      'Self-service betting kiosk (SSBT) touchscreen interface',
      'Shop drawer shift accounting & multi-branch P&L reports',
      'Centralized liability monitoring across retail + online',
    ],
    ctaText: 'Request Retail POS Quote',
    ariaLabel: 'Request Retail Betting Shop POS Quote',
  },
];

const DISCOVER_ITEMS: SolutionDiscoverConfigItem[] = [
  {
    id: 1,
    title: '5+ Tiers Agent Hierarchy',
    description:
      'Super Admin, Master Agent, Sub-Agent, Cashier, and private player accounts with automated weekly sheets.',
    icon: 'users',
    span: 2,
  },
  {
    id: 2,
    title: 'Sportsbook Software Platform',
    description:
      'Explore our full enterprise sportsbook platform with sub-140ms live odds and Bet Builder.',
    icon: 'zap',
    link: '/sportsbook-software',
    span: 2,
  },
  {
    id: 3,
    title: 'Sportsbook API Integration',
    description:
      'Connect official Betradar, Pinnacle, and Genius Sports lines across 80+ sports and 1,000+ markets.',
    icon: 'globe',
    link: '/sportsbook-api-integration',
    span: 2,
  },
  {
    id: 4,
    title: '10,000+ Casino Agent Games & < 140ms Speed',
    description:
      'Unified sportsbook and casino agent balance with real-time WebSocket odds and zero per-head lock-in.',
    icon: 'gamepad',
    span: 3,
  },
  {
    id: 5,
    title: 'Turnkey Sportsbook Solutions',
    description:
      'Operate a standalone sportsbook and casino under your own gaming license with full autonomy.',
    icon: 'crown',
    link: '/turnkey-sportsbook-solutions',
    span: 3,
  },
  {
    id: 6,
    title: 'White Label Sportsbook',
    description:
      'Launch a ready-to-operate branded sportsbook faster with pre-integrated feeds and risk limits.',
    icon: 'rocket',
    link: '/white-label-sportsbook',
    span: 2,
  },
  {
    id: 7,
    title: 'Sportsbook Developer Services',
    description:
      'Build custom betting websites, odds engines, and retail POS terminals with dedicated engineers.',
    icon: 'code',
    link: '/sportsbook-developer',
    span: 2,
  },
  {
    id: 8,
    title: '24/7 POS & Cloud Reliability',
    description:
      'Engineered for both online bookmaker networks and high-volume brick-and-mortar betting shops.',
    icon: 'shield',
    span: 2,
  },
];

export default function BookmakerSoftwareClient() {
  return (
    <SolutionDetailLayout
      breadcrumbLabel="Bookmaker Software"
      heroTitle="Bookmaker Software, Bookie Agent System & PPH Platform"
      heroDescription="Run your online bookmaker network or physical betting shops with enterprise bookie software. Built-in multi-tier agent hierarchies, automated weekly credit sheets, sharp-player risk defense, and retail POS terminals without steep per-head rental fees."
      tabsAriaLabel="Core Bookmaker & Bookie Software Modules"
      tabs={TABS}
      featuresSection={{
        title: 'Enterprise Bookmaker & Agent Capabilities',
        subtitle:
          'Everything you need to run a private bookie network or retail betting shop chain — without paying recurring pay-per-head rental fees.',
        ctaText: 'Discuss Your Bookmaker Setup',
        items: FEATURE_ITEMS,
      }}
      stepsSection={{
        sectionId: 'system-architecture',
        title: 'Bookmaker Operations & Risk Control Pipeline',
        subtitle:
          'Every ticket—whether placed on mobile, through an agent hierarchy, or printed at a retail betting shop counter—flows through unified odds, credit, and risk layers.',
        ctaText: 'Request Bookmaker Demo',
        steps: PIPELINE_STEPS,
      }}
      comparisonSection={{
        sectionId: 'packages',
        title: 'Bookmaker & Bookie Software Packages',
        subtitle:
          'Select the operational package built for your business—from private bookie agent websites to combined sports-and-casino PPH suites and land-based retail shop networks.',
        cards: COMPARISON_CARDS,
      }}
      discoverSection={{
        title: 'Explore Bookmaker Capabilities & Solutions',
        subtitle:
          'Review our agent hierarchy benchmarks, sportsbook APIs, and turnkey sportsbook offerings.',
        items: DISCOVER_ITEMS,
      }}
      faqData={BOOKMAKER_SOFTWARE_FAQS}
      contactCategory="Sportsbook"
    />
  );
}
