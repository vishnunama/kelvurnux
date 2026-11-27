'use client';

import React from 'react';
import SolutionDetailLayout, {
  SolutionTabItem,
  SolutionFeatureCard,
  SolutionComparisonCard,
  SolutionDiscoverConfigItem,
} from '@/src/components/solutions/SolutionDetailLayout';
import { StepItem } from '@/src/components/stepssection/StepsSection';
import { HIRE_IGAMING_DEVELOPER_FAQS } from './faqData';

const TABS: SolutionTabItem[] = [
  {
    id: 'fullstack-squad',
    label: 'Frontend & Backend Devs',
    icon: 'code',
    title: 'Senior React / Next.js & Node.js / Go iGaming Engineers',
    description:
      'Hire specialist engineers experienced in high-concurrency casino lobbies, sub-140ms WebSocket sportsbooks, mobile betting apps, and double-entry wallet ledgers with strict NDA and contractual IP ownership.',
    image: '/assets/features/igaming-software-development-banner.webp',
    alt: 'Senior React, Next.js, Node.js and Go iGaming Engineers',
  },
  {
    id: 'integrations-api',
    label: 'API & Payment Integrations',
    icon: 'layers',
    title: 'Game Aggregators, Odds Feeds & Payment Integrators',
    description:
      'Accelerate your roadmap with dedicated iGaming integration services connecting 10,000+ slot studios, live dealers, Betradar/Pinnacle sportsbook odds feeds, and regional fiat or crypto payment processors.',
    image: '/assets/features/casino-game-providers-api-aggregator.webp',
    alt: 'Game Aggregators, Odds Feeds and Payment Gateway Integrators',
  },
  {
    id: 'originals-crypto',
    label: 'Crash Games & Web3',
    icon: 'sparkles',
    title: 'Provably Fair Originals, Crypto & Sweepstakes Engineering',
    description:
      'Stand apart with custom crash, mines, plinko, and dice game development, cryptographic provably fair RNG mini-games, Web3 wallet infrastructure, and dual-currency social casino architecture.',
    image: '/assets/features/crypto-casino-white-label-banner.webp',
    alt: 'Provably Fair Originals, Crypto and Sweepstakes Engineering',
  },
  {
    id: 'devops-compliance',
    label: 'DevOps & Compliance',
    icon: 'server',
    title: 'Managed Cloud Hosting, Security Audits & Licensing',
    description:
      'Ensure uninterrupted 24/7 global operations with hardened AWS/GCP iGaming hosting, Cloudflare DDoS shielding, automated KYC/AML review pipelines, and technical readiness across MGA, Curacao, and Anjouan.',
    image: '/assets/features/igaming-security-risk-management-aml-kyc.webp',
    alt: 'Managed Cloud Hosting, Security Audits and Licensing Readiness',
  },
];

const FEATURE_ITEMS: SolutionFeatureCard[] = [
  {
    id: 1,
    icon: 'code',
    title: 'Senior React, Next.js & TypeScript Frontends',
    description:
      'Bespoke casino lobbies, mobile betting web apps, and progressive web apps (PWA) engineered for sub-second loading and Core Web Vitals.',
  },
  {
    id: 2,
    icon: 'server',
    title: 'High-Concurrency Node.js & Go Backends',
    description:
      'Decoupled backend microservices and atomic double-entry PAM ledgers designed for zero downtime during major sporting finals and bonus drops.',
  },
  {
    id: 3,
    icon: 'gamepad',
    title: '10,000+ Casino Game Aggregator APIs',
    description:
      'Idempotent single-wallet integrations connecting slots, live dealer tables, crash games, and virtuals across 150+ certified studios.',
  },
  {
    id: 4,
    icon: 'zap',
    title: 'Sportsbook Odds Feeds & Trading Desks',
    description:
      'Normalize Betradar, Genius Sports, Pinnacle, and Kambi feeds over sub-140ms WebSockets with automated liability and sharp-bettor controls.',
  },
  {
    id: 5,
    icon: 'wallet',
    title: 'Fiat & Crypto Payment Gateway Services',
    description:
      'Integrate cards, SEPA, PIX, UPI, e-wallets, and automated BTC/ETH/USDT/Solana blockchain deposits and payouts with fixed-point accounting.',
  },
  {
    id: 6,
    icon: 'sparkles',
    title: 'Custom Crash & Provably Fair Originals',
    description:
      'Build proprietary multiplayer Crash, Mines, Plinko, Dice, Keno, and Wheel games with verifiable client/server cryptographic seeds.',
  },
  {
    id: 7,
    icon: 'users',
    title: 'CRM, Bonus Engine & Affiliate Tracking',
    description:
      'Automated CRM webhooks powering free spins, deposit match bonuses, VIP cashback tiers, and RevShare/CPA affiliate tracking.',
  },
  {
    id: 8,
    icon: 'shield',
    title: 'Hardened Hosting, KYC/AML & Licensing Readiness',
    description:
      'Multi-region cloud infrastructure, DDoS defense, KYC/AML queues, and technical audit logging aligned with Malta, Curacao, Anjouan & Isle of Man.',
  },
];

const ONBOARDING_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Technical Discovery & NDA Alignment',
    text: 'Review your existing repositories, product goals, target licensing jurisdiction, and bottleneck priorities under mutual NDA.',
  },
  {
    id: 2,
    title: 'Squad & Stack Matching',
    text: 'Pair directly with vetted React, Next.js, Node.js/Go, API integration, and UI/UX iGaming engineers matching your exact codebase needs.',
  },
  {
    id: 3,
    title: 'Direct Git & Workflow Integration',
    text: 'Embed into your GitHub/GitLab, Jira, and Slack/Telegram channels with zero learning curve on wallet locks, GGR math, and studio callbacks.',
  },
  {
    id: 4,
    title: 'Agile Sprint Delivery & Staging Demos',
    text: 'Ship audited code into staging every sprint with transparent PR reviews, automated checks, and load testing.',
  },
  {
    id: 5,
    title: 'Production Launch & Managed Support',
    text: 'Smooth production cutover, 24/7 SRE monitoring, and flexible ongoing maintenance or full contractual IP handover.',
  },
];

const COMPARISON_CARDS: SolutionComparisonCard[] = [
  {
    title: 'Dedicated Specialist Dev',
    description:
      'Embed a dedicated React/Next.js frontend developer, Node.js/Go wallet engineer, or studio/payment API integrator directly into your existing workflow.',
    bullets: [
      'Dedicated senior iGaming specialist under NDA',
      'Direct integration into your GitHub / GitLab & Jira',
      'Game studio, odds feed, or payment gateway connectors',
      'Front-end UI/UX upgrades, PWA & Core Web Vitals',
      '100% repository code ownership per contract',
    ],
    ctaText: 'Hire Specialist Developer',
    ariaLabel: 'Hire Specialist iGaming Developer',
  },
  {
    title: 'Full-Cycle iGaming Pod',
    description:
      'Cross-functional iGaming development team engineered to build and scale complete casino, sportsbook, sweepstakes, or Web3 betting platforms from concept to live ops.',
    bullets: [
      'Bespoke UI/UX design + Next.js & mobile APK delivery',
      'Double-entry PAM wallet + Node.js / Go microservices',
      'Multi-provider game aggregator & Betradar/Pinnacle odds',
      'Fiat + crypto payment processors, CRM & bonus engine',
      'Complete source code & IP ownership per contract',
    ],
    ctaText: 'Request Dedicated Pod',
    ariaLabel: 'Request Full-Cycle iGaming Pod',
    featured: true,
  },
  {
    title: 'Custom Platform & Studio Squad',
    description:
      'Built for multi-brand operator groups building proprietary crash/mini-game studios, custom trading desks, compliance tooling, and 24/7 managed cloud ops.',
    bullets: [
      'Senior Solution Architect + multi-pod engineering squad',
      'Custom crash games & provably fair RNG studio builds',
      'Multi-brand PAM tenant isolation & regulatory reporting',
      '24/7 iGaming managed services & infrastructure SRE',
      'Complete contractual IP & source code handover',
    ],
    ctaText: 'Request Enterprise Quote',
    ariaLabel: 'Request Enterprise iGaming Squad Quote',
  },
];

const DISCOVER_ITEMS: SolutionDiscoverConfigItem[] = [
  {
    id: 1,
    title: '50+ iGaming Platforms Delivered',
    description:
      'Production casinos, live sportsbooks, crypto gaming brands, and US sweepstakes platforms built by our engineers.',
    icon: 'rocket',
    span: 2,
  },
  {
    id: 2,
    title: 'Custom Casino Website Developer',
    description:
      'Explore bespoke React/Next.js casino frontends, 10,000+ aggregated games, and mobile casino apps.',
    icon: 'gamepad',
    link: '/casino-website-developer',
    span: 2,
  },
  {
    id: 3,
    title: 'Sportsbook Developer Services',
    description:
      'Build custom betting websites, sub-140ms WebSocket odds engines, Bet Builders, and risk trading desks.',
    icon: 'zap',
    link: '/sportsbook-developer',
    span: 2,
  },
  {
    id: 4,
    title: '150+ Third-Party APIs & < 140ms Latency',
    description:
      'Pre-built production patterns for game aggregators, official odds vendors, fiat/crypto cashiers, and real-time WebSockets.',
    icon: 'layers',
    span: 3,
  },
  {
    id: 5,
    title: 'Custom iGaming Solutions',
    description:
      'Need bespoke architecture, proprietary game development, or full IP ownership? Explore our custom solutions.',
    icon: 'sparkles',
    link: '/custom-igaming-solution',
    span: 3,
  },
  {
    id: 6,
    title: 'iGaming Licensing Readiness',
    description:
      'Technical readiness and audit logging aligned with Malta (MGA), Curacao, Anjouan, Isle of Man & Kahnawake.',
    icon: 'shield',
    link: '/igaming-licensing',
    span: 2,
  },
  {
    id: 7,
    title: 'Turnkey Casino Platform',
    description:
      'Launch faster with our ready-to-configure turnkey casino and sportsbook platform with source code included.',
    icon: 'crown',
    link: '/turnkey-casino-software-solutions',
    span: 2,
  },
  {
    id: 8,
    title: '100% Contractual IP Ownership',
    description:
      'Clean Git repositories, documentation, and full intellectual property handed over per signed agreement.',
    icon: 'lock',
    span: 2,
  },
];

export default function HireIgamingDeveloperClient() {
  return (
    <SolutionDetailLayout
      breadcrumbLabel="Hire iGaming Developer"
      heroTitle="Hire iGaming Developer & Dedicated Casino / Sportsbook Team"
      heroDescription="Scale your gaming product faster with senior iGaming software developers. From custom React/Next.js frontends and Node.js/Go wallet ledgers to odds feed APIs, crash games, and managed hosting."
      tabsAriaLabel="Dedicated iGaming Engineering Capabilities"
      tabs={TABS}
      featuresSection={{
        title: 'Full-Cycle iGaming Engineering Capabilities',
        subtitle:
          'Embed domain-tested React, Node.js/Go, API integration, crash game, and DevOps engineers directly into your roadmap under strict NDA.',
        ctaText: 'Hire Your Engineering Team',
        items: FEATURE_ITEMS,
      }}
      stepsSection={{
        sectionId: 'system-architecture',
        title: 'Engineering Onboarding & Delivery Workflow',
        subtitle:
          'Transparent sprint execution from day-one NDA discovery through staging reviews, security testing, and zero-downtime production deployment.',
        ctaText: 'Start Technical Discovery',
        steps: ONBOARDING_STEPS,
      }}
      comparisonSection={{
        sectionId: 'packages',
        title: 'Flexible iGaming Developer Hiring Models',
        subtitle:
          'Choose how you work with our engineering team—from augmenting an internal squad with one specialist developer to deploying a full-cycle bespoke product team.',
        cards: COMPARISON_CARDS,
      }}
      discoverSection={{
        title: 'Explore iGaming Engineering & Track Record',
        subtitle:
          'Review our production delivery benchmarks, related development services, and licensing readiness capabilities.',
        items: DISCOVER_ITEMS,
      }}
      faqData={HIRE_IGAMING_DEVELOPER_FAQS}
      contactCategory="Bespoke iGaming Solutions"
    />
  );
}
