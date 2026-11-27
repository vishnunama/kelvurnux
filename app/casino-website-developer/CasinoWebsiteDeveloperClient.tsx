'use client';

import React from 'react';
import SolutionDetailLayout, {
  SolutionTabItem,
  SolutionFeatureCard,
  SolutionComparisonCard,
  SolutionDiscoverConfigItem,
} from '@/src/components/solutions/SolutionDetailLayout';
import { StepItem } from '@/src/components/stepssection/StepsSection';
import { CASINO_DEVELOPER_FAQS } from './faqData';

const TABS: SolutionTabItem[] = [
  {
    id: 'custom-lobby',
    label: 'Custom Casino UI & App',
    icon: 'code',
    title: 'Bespoke React / Next.js Casino Lobby & Mobile App',
    description:
      'Stand out from generic casino templates with high-converting, dark-luxury UI/UX engineered for sub-second page speed, Core Web Vitals SEO, instant game search, VIP rakeback bars, and mobile PWA or Android APK.',
    image: '/assets/features/custom-igaming-platform-design-interface.webp',
    alt: 'Bespoke React, Next.js Casino Lobby and Mobile App',
  },
  {
    id: 'game-aggregator',
    label: '10,000+ Game Aggregator',
    icon: 'gamepad',
    title: 'Single-Wallet Game Aggregation & Originals',
    description:
      'Connect 10,000+ slots, live dealer blackjack, roulette, baccarat, and custom provably fair Crash, Mines, Plinko, and Dice originals through one idempotent integration with fixed-point FX accounting.',
    image: '/assets/features/online-casino-game-aggregation-10000-plus-slots.webp',
    alt: 'Single-Wallet Game Aggregation and Provably Fair Originals',
  },
  {
    id: 'payments-crypto',
    label: 'Fiat & Crypto Cashiers',
    icon: 'wallet',
    title: 'Payment Processors, Web3 & Dual-Currency Ledgers',
    description:
      'Support global player deposits and fast payouts with redundant fiat gateways (cards, SEPA, Apple Pay, PIX, UPI), automated BTC/ETH/USDT/SOL crypto cashiers, Web3 logins, and sweepstakes dual wallets.',
    image: '/assets/features/crypto-casino-white-label-banner.webp',
    alt: 'Payment Processors, Web3 Wallets and Dual-Currency Ledgers',
  },
  {
    id: 'crm-compliance',
    label: 'CRM, ERP & Compliance',
    icon: 'dashboard',
    title: 'Gambling CRM, Bonus Engine & Anti-Fraud Back Office',
    description:
      'Protect margins and boost player lifetime value with automated wagering-requirement tracking, VIP loyalty tiers, multi-account/VPN fraud alerts, KYC/AML document queues, and GGR/NGR reporting.',
    image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
    alt: 'Gambling CRM, Bonus Engine and Anti-Fraud Back Office',
  },
];

const FEATURE_ITEMS: SolutionFeatureCard[] = [
  {
    id: 1,
    icon: 'code',
    title: 'Bespoke React, Next.js & TypeScript Lobbies',
    description:
      'Custom casino websites and mobile apps engineered for sub-second loading, Core Web Vitals SEO, and thumb-first mobile gameplay.',
  },
  {
    id: 2,
    icon: 'gamepad',
    title: '10,000+ Certified Slots & Live Dealer Games',
    description:
      'Unified single-wallet casino game aggregator API connecting top slot studios, live roulette, blackjack, baccarat, and game shows.',
  },
  {
    id: 3,
    icon: 'sparkles',
    title: 'Custom Provably Fair Crash & Arcade Originals',
    description:
      'Exclusive branded Crash, Mines, Plinko, Dice, Keno, and Limbo mini-games with verifiable cryptographic seed fairness.',
  },
  {
    id: 4,
    icon: 'wallet',
    title: 'Double-Entry Single-Wallet PAM Ledger',
    description:
      'Atomic bet debits, studio win credits, bonus locks, and multi-currency FX snapshots engineered with zero balance drift.',
  },
  {
    id: 5,
    icon: 'globe',
    title: 'Fiat Payment Gateways & Web3 Crypto Rails',
    description:
      'Cards, SEPA/open banking, Apple Pay, PIX, UPI, and automated BTC, ETH, USDT, SOL deposits with MetaMask/WalletConnect logins.',
  },
  {
    id: 6,
    icon: 'crown',
    title: 'US Social & Sweepstakes Dual-Wallet Engine',
    description:
      'Separated Gold Coin and Sweeps Coin ledgers, AMOE entry portals, prize redemption queues, and state-level geofencing.',
  },
  {
    id: 7,
    icon: 'gift',
    title: 'Gambling CRM, VIP Tiers & Retention Loops',
    description:
      'Automated deposit match bonuses, free spins triggers, instant rakeback, prize wheels, and tournament leaderboards.',
  },
  {
    id: 8,
    icon: 'shield',
    title: 'Back-Office ERP, KYC/AML & Fraud Defense',
    description:
      'Multi-account fingerprint checks, VPN flagging, round-level fraud alerts, KYC queues, and affiliate RevShare/CPA reconciliation.',
  },
];

const ARCHITECTURE_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Custom Front-End Lobby',
    text: 'Delivers fast, SEO-friendly game discovery, smooth category filtering, VIP trackers, and responsive mobile casino app navigation.',
  },
  {
    id: 2,
    title: 'Single-Wallet PAM Ledger',
    text: 'Processes atomic bet debits, studio win credits, bonus locks, and multi-currency FX snapshots with fixed-point Node.js/Go math.',
  },
  {
    id: 3,
    title: 'Game Aggregator & RNG Layer',
    text: 'Connects 10,000+ live dealer and slot studios plus custom provably fair mini-games through idempotent session webhooks.',
  },
  {
    id: 4,
    title: 'CRM, Payments & Compliance',
    text: 'Unifies global payment gateways, crypto nodes, VIP email/retention triggers, and automated KYC/AML review pipelines.',
  },
  {
    id: 5,
    title: 'Production Launch & IP Handover',
    text: 'Deploy on auto-scaling cloud clusters with full Git repository and contractual intellectual property ownership.',
  },
];

const COMPARISON_CARDS: SolutionComparisonCard[] = [
  {
    title: 'Branded Casino Website',
    description:
      'Responsive online casino website styled around your brand identity with integrated slot/live studios, fiat/crypto cashier, and admin reporting.',
    bullets: [
      'Custom branded responsive casino web UI & PWA',
      '5,000+ slots & live casino aggregator connection',
      'Single-wallet PAM & standard bonus promo rules',
      'Fiat + cryptocurrency deposit & payout rails',
      'Source code access subject to signed agreement',
    ],
    ctaText: 'Request Starter Quote',
    ariaLabel: 'Request Starter Casino Quote',
  },
  {
    title: 'Full Casino & App Platform',
    description:
      'Complete online casino development package with custom UI design, 10,000+ aggregated games, native Android app, VIP CRM, and contractual ownership.',
    bullets: [
      '100% bespoke Next.js UI/UX + native Android APK app',
      'Full 10,000+ slots, crash & live dealer aggregator API',
      'Multi-currency fiat & BTC/ETH/USDT Web3 crypto cashier',
      'VIP loyalty tiers, rakeback, tournaments & CRM hooks',
      'Source code ownership granted according to contract',
    ],
    ctaText: 'Request Business Quote',
    ariaLabel: 'Request Business Casino Quote',
    featured: true,
  },
  {
    title: 'Bespoke Casino & Originals',
    href: '/custom-igaming-solution',
    description:
      'Dedicated casino game & web developers building custom provably fair Originals, US sweepstakes dual-wallet systems, and custom ERP/CRM architecture.',
    bullets: [
      'Dedicated team of senior frontend & backend developers',
      'Custom provably fair Originals (Crash, Mines, Plinko, Dice)',
      'Bespoke sweepstakes dual-wallet or Web3 smart contracts',
      'Custom gambling ERP, affiliate & CRM integrations',
      'Full repository & IP ownership per contract',
    ],
    ctaText: 'Request Custom Quote',
    ariaLabel: 'Request Custom Casino Quote',
  },
];

const DISCOVER_ITEMS: SolutionDiscoverConfigItem[] = [
  {
    id: 1,
    title: '10,000+ Casino Games Supported',
    description:
      'Slots, live dealers, table games, crash titles, and custom provably fair originals in one wallet.',
    icon: 'gamepad',
    span: 2,
  },
  {
    id: 2,
    title: 'Casino Game Aggregator API',
    description:
      'Connect 10,000+ certified titles through one idempotent single-wallet aggregation layer.',
    icon: 'layers',
    link: '/casino-aggregator-api-solution',
    span: 2,
  },
  {
    id: 3,
    title: 'Crypto & Web3 Casino Software',
    description:
      'Instant Bitcoin, ETH, USDT, and Solana casino operations with Web3 logins and provably fair games.',
    icon: 'wallet',
    link: '/crypto-casino-software',
    span: 2,
  },
  {
    id: 4,
    title: '150+ Studio & Payment APIs • 99.99% Uptime',
    description:
      'Pre-built adapters and idempotent double-entry accounting engineered for zero balance drift.',
    icon: 'shield',
    span: 3,
  },
  {
    id: 5,
    title: 'Turnkey & White Label Casino',
    description:
      'Compare our custom casino development with ready-to-launch Turnkey and White Label platforms.',
    icon: 'crown',
    link: '/turnkey-casino-software-solutions',
    span: 3,
  },
  {
    id: 6,
    title: 'Online Casino Platform Software',
    description:
      'Explore our modular PAM core, VIP bonus engines, and multi-currency cashiers.',
    icon: 'dashboard',
    link: '/online-casino-platform-software',
    span: 2,
  },
  {
    id: 7,
    title: 'Sweepstakes Casino Software',
    description:
      'US social & sweepstakes platform with Gold Coin / Sweeps Coin ledgers and state geofencing.',
    icon: 'sparkles',
    link: '/sweepstakes-casino-software',
    span: 2,
  },
  {
    id: 8,
    title: '100% Contractual IP Ownership',
    description:
      'Full Git repository and intellectual property handover available on custom builds.',
    icon: 'lock',
    span: 2,
  },
];

export default function CasinoWebsiteDeveloperClient() {
  return (
    <SolutionDetailLayout
      breadcrumbLabel="Casino Website Developer"
      heroTitle="Casino Website Developer for Custom Online Casino Platforms"
      heroDescription="Build or customize your online casino website with experienced casino software developers. We engineer fast React/Next.js lobbies, 10,000+ game aggregator APIs, single-wallet PAM, crypto & fiat cashiers, and custom mobile casino apps."
      tabsAriaLabel="Core Casino Website Engineering Modules"
      tabs={TABS}
      featuresSection={{
        title: 'Custom Online Casino Engineering Capabilities',
        subtitle:
          'Everything you need to create a high-converting casino website — from bespoke React/Next.js lobbies and 10,000+ games to crypto cashiers, CRM, and anti-fraud ERP.',
        ctaText: 'Discuss Your Casino Build',
        items: FEATURE_ITEMS,
      }}
      stepsSection={{
        sectionId: 'system-architecture',
        title: 'High-Load Online Casino Website Architecture',
        subtitle:
          'Engineered with decoupled microservices, fixed-point ledger accounting, and edge-cached game lobbies so heavy bonus drops and live tournaments run smoothly.',
        ctaText: 'Request Casino Architecture Demo',
        steps: ARCHITECTURE_STEPS,
      }}
      comparisonSection={{
        sectionId: 'packages',
        title: 'Casino Website Development Packages',
        subtitle:
          'Compare our custom front-end launch, turnkey online casino + app build, and bespoke enterprise software engineering packages with source-code options.',
        cards: COMPARISON_CARDS,
      }}
      discoverSection={{
        title: 'Explore Casino Capabilities & Related Solutions',
        subtitle:
          'Review our game aggregation benchmarks, crypto/sweepstakes platforms, and turnkey casino offerings.',
        items: DISCOVER_ITEMS,
      }}
      faqData={CASINO_DEVELOPER_FAQS}
      contactCategory="Casino Platform"
    />
  );
}
