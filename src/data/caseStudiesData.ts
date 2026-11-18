import type { EnterpriseCaseStudyData } from '@/src/components/casestudies/EnterpriseCaseStudyTemplate';

export const ENTERPRISE_CASE_STUDIES: Record<string, EnterpriseCaseStudyData> = {
  'us-sweepstakes-casino-platform-development': {
    slug: 'us-sweepstakes-casino-platform-development',
    eyebrow: 'Sweepstakes Casino Platform',
    regionBadge: 'North America • Regulated Social Model',
    title: 'Dual-Currency Sweepstakes & Social Casino Platform Engineering',
    subtitle:
      'How Kvaornux engineered a mobile-first North American sweepstakes platform with strict Gold Coin / Sweeps Coin ledger separation, AMOE compliance workflows, state-level geo-fencing, and third-party game API connectivity.',
    tags: [
      'Dual-Currency GC / SC Ledger',
      'State-Level Geo-Fencing',
      'AMOE Workflow Engine',
      'Mobile-First H5 + Web',
    ],
    facts: {
      clientProfile: 'North American Social Gaming Startup (Confidential / NDA)',
      targetMarket: 'United States (Permitted States Only)',
      solutionModel: 'Custom Sweepstakes Platform + Third-Party API Integration',
      timeline: '10 Weeks (Architecture to Production Launch)',
      techStack: 'Next.js, TypeScript, Node.js, PostgreSQL, Redis, AWS',
      complianceScope: 'Dual-Ledger Isolation, KYC/IDV Webhooks, State Geo-Blocking, AMOE',
    },
    heroImage: '/assets/case-studies/sweepstakes-platform/hero-showcase.webp',
    heroImageAlt:
      'Dual-Currency US Sweepstakes Casino Platform UI Showcase engineered by Kvaornux',
    dashboardImage: '/assets/case-studies/sweepstakes-platform/backoffice-ui.webp',
    dashboardImageAlt:
      'Sweepstakes Back-Office Compliance, Dual-Currency Ledger and Geo-Fencing Admin Dashboard',
    challengeTitle: 'Separating Promotional Sweeps Logic from Standard Casino Code',
    challengeParagraphs: [
      'The client initially evaluated off-the-shelf casino templates before realizing most standard casino backends treat every spin as a single real-money wallet. Under a US sweepstakes promotional model, mixing Gold Coins (entertainment play) and Sweeps Coins (promotional entries) inside one ledger breaks accounting clarity, complicates prize redemption audits, and creates compliance friction with payment processors.',
      'They also needed instant state-level access enforcement—blocking restricted US states at the edge before registration or coin package checkout—plus an automated way to reconcile Alternative Method of Entry (AMOE) credits without manual spreadsheet work.',
    ],
    challengePoints: [
      'Strict ledger isolation required between Gold Coins (GC) and promotional Sweeps Coins (SC)',
      'Playthrough eligibility tracking before any Sweeps Coin redemption request could be approved',
      'State-by-state geo-fencing and VPN/proxy detection at both signup and redemption stages',
      'Mobile-first lobby performance under 1.5 seconds on 4G connections across iOS and Android browsers',
    ],
    solutionTitle: 'Double-Entry Dual-Wallet Architecture & Automated Compliance Hooks',
    solutionParagraphs: [
      'Kvaornux designed the platform from the ground up around an immutable double-entry PostgreSQL ledger with completely isolated sub-wallets for Gold Coins and Sweeps Coins. Every game launch passes an explicit currency-mode token to the client’s contracted game aggregator API so gameplay sessions never cross between free-play and promotional modes.',
      'In the back office, we built a dedicated redemption review queue linked directly to third-party identity verification (KYC) and geolocation APIs. Operators can inspect playthrough ratios, verify identity status, reconcile AMOE mail-in credits, and export clean financial audit logs from a single workspace.',
    ],
    solutionPoints: [
      'Isolated GC and SC wallet ledgers with atomic PostgreSQL transactions and Redis idempotency locks',
      'Configurable mode switcher in the player lobby with per-game eligibility rules',
      'Automated AMOE credit issuance portal with unique code tracking and audit history',
      'Pluggable webhooks for client-selected KYC/IDV, geolocation, and card/ACH payment processors',
    ],
    architectureHeading: 'End-to-End Dual-Currency Platform Architecture',
    architectureIntro:
      'Every player action passes through strict territory checks and isolated ledger services before hitting external game studios or redemption queues.',
    architectureNodes: [
      {
        step: 'Layer 01',
        title: 'Edge & Mobile H5 Client',
        subtitle: 'Next.js PWA + Edge Geo-Fence',
        details:
          'Responsive lobby with instant GC/SC toggle, pre-rendered game thumbnails, and edge IP/location screening before signup or checkout.',
      },
      {
        step: 'Layer 02',
        title: 'PAM & Dual-Ledger Core',
        subtitle: 'Node.js + PostgreSQL + Redis',
        details:
          'Double-entry accounting tables separating GC balances, bonus SC, and redeemable SC with distributed row locking against duplicate callbacks.',
      },
      {
        step: 'Layer 03',
        title: 'Integration Adapter Layer',
        subtitle: 'Game APIs + Payments + KYC',
        details:
          'Normalized webhooks connecting the operator’s licensed game aggregator keys, card/wallet purchase flows, and identity verification APIs.',
      },
      {
        step: 'Layer 04',
        title: 'Compliance & Ops Back Office',
        subtitle: 'Role-Based Admin + Audit Logs',
        details:
          'Redemption review desk, AMOE batch manager, bonus rules engine, risk flags, and immutable event logs for operator compliance teams.',
      },
    ],
    specTable: [
      {
        parameter: 'Wallet Architecture',
        specification:
          'Isolated double-entry PostgreSQL ledgers for Gold Coins (GC) and Sweeps Coins (SC) with playthrough tracking',
      },
      {
        parameter: 'Game Integration Pattern',
        specification:
          'Seamless wallet callback adapter with currency-mode tagging and automated rollback reconciliation',
      },
      {
        parameter: 'Geo-Fencing & Access Control',
        specification:
          'State-level allow/deny ruleset integrated with third-party geolocation and VPN/proxy risk scoring',
      },
      {
        parameter: 'Redemption & KYC Flow',
        specification:
          'Mandatory identity verification gate before prize redemption approval, with multi-step admin review',
      },
      {
        parameter: 'AMOE Compliance Module',
        specification:
          'Dedicated back-office workflow for logging, validating, and crediting postal/alternative entry requests',
      },
      {
        parameter: 'Deployment & Infrastructure',
        specification:
          'Containerized Node.js services behind CDN edge caching with automated database backups and telemetry',
      },
    ],
    moduleTabs: [
      {
        id: 'player-lobby',
        label: 'Player Lobby',
        title: 'Mobile-First Dual-Mode Player Experience',
        summary:
          'Players switch cleanly between Gold Coins and Sweeps Coins without reloading the app, with clear balance indicators and fast category filtering.',
        bullets: [
          'One-tap GC / SC mode switch with distinct visual themes per currency mode',
          'Smart game filtering by volatility, studio, jackpots, and recent plays',
          'Daily login reward calendar, streak milestones, and Gold Coin bundle store',
          'Self-service transaction history showing purchases, bonuses, and redemptions',
        ],
      },
      {
        id: 'wallet-ledger',
        label: 'Dual-Currency Ledger',
        title: 'Zero-Drift Double-Entry Wallet Engine',
        summary:
          'Built like a fintech ledger so every single coin mint, spin debit, win credit, and redemption is traceable down to the millisecond.',
        bullets: [
          'Separate ledger partitions for purchased GC, promotional SC, and redeemable SC',
          'Automated wagering/playthrough meter updated in real time per spin',
          'Idempotency keys prevent double debits during provider network retries',
          'Automated nightly balance-integrity checks with alerting',
        ],
      },
      {
        id: 'compliance-kyc',
        label: 'Compliance & AMOE',
        title: 'Operator-Ready Verification & Geo-Blocking',
        summary:
          'Technical guardrails engineered to support the operator’s legal framework across permitted US states.',
        bullets: [
          'Configurable state-level geo-fencing with instant block screens for restricted territories',
          'Pluggable KYC/IDV webhook flow triggered prior to first redemption',
          'AMOE request logging, duplicate check, and batch SC crediting tools',
          'Built-in player purchase limits, cooling-off periods, and self-exclusion controls',
        ],
      },
      {
        id: 'back-office',
        label: 'Back Office',
        title: 'Centralized Operations & Promotion Studio',
        summary:
          'Non-technical operator teams can configure coin bundles, promo campaigns, and redemption queues without developer intervention.',
        bullets: [
          'Role-based permissions for Support, Compliance, Marketing, and Finance teams',
          'Visual coin-package builder with bonus SC attachment rules and promo codes',
          'Redemption approval queue showing KYC status, IP history, and playthrough ratio',
          'Exportable CSV/JSON accounting reports for payment and tax reconciliation',
        ],
      },
    ],
    complianceHeading: 'Built Around Operator Compliance & Auditability',
    complianceIntro:
      'Kvaornux delivers the technical software safeguards that licensed social gaming operators need to run transparent, auditable platforms in permitted jurisdictions.',
    complianceItems: [
      {
        title: 'Jurisdiction & State Geo-Fencing',
        description:
          'Configurable territory blocklists enforced at login, store checkout, and redemption endpoints, paired with third-party location intelligence APIs.',
      },
      {
        title: 'KYC & Age Verification Gates',
        description:
          'Native webhook integration with third-party identity verification providers so operators can enforce age and ID checks before any prize redemption.',
      },
      {
        title: 'Immutable Double-Entry Audit Logs',
        description:
          'Every balance adjustment, AMOE credit, admin override, and redemption approval is timestamped with operator user ID for full audit traceability.',
      },
      {
        title: 'Responsible Play Controls',
        description:
          'Built-in daily/weekly purchase caps, session reminders, temporary cool-off timers, and permanent self-exclusion flags enforced across all devices.',
      },
    ],
    metrics: [
      {
        value: '10 Weeks',
        label: 'Architecture to Launch',
        note: 'Full custom dual-currency platform delivered from specification to production.',
      },
      {
        value: '< 115ms',
        label: 'Median Wallet Callback',
        note: 'Measured across game debit/credit webhook endpoints under load testing.',
      },
      {
        value: '0%',
        label: 'Ledger Drift Rate',
        note: 'Atomic double-entry transactions with idempotency keys eliminated duplicate debits.',
      },
      {
        value: '< 1.4s',
        label: 'Mobile Lobby LCP',
        note: 'Optimized Next.js assets and CDN caching on standard 4G mobile devices.',
      },
      {
        value: '99.95%',
        label: 'Target Infrastructure Uptime',
        note: 'Auto-scaling containerized backend with health checks and failover queues.',
      },
      {
        value: '100%',
        label: 'Client-Owned Code Scope',
        note: 'Delivered under NDA with full source code ownership per contract terms.',
      },
    ],
    engineeringQuote: {
      quote:
        'Having a genuinely separated Gold Coin and Sweeps Coin ledger—plus built-in AMOE and KYC review queues—saved us months of compliance rework before onboarding our payment processors.',
      attribution: 'Founder & Product Lead — North American Social Gaming Client (NDA)',
    },
    faqs: [
      {
        question: 'How does a dual-currency sweepstakes casino platform work?',
        answer:
          'A sweepstakes casino uses two separate virtual currencies: Gold Coins for free entertainment play and Sweeps Coins for promotional sweepstakes entries. Kvaornux builds separate wallets and dashboards for each currency so operators can manage bundles, promotions, and redemptions cleanly.',
      },
      {
        question: 'How long does it take to launch a sweepstakes casino platform?',
        answer:
          'A turnkey-configured sweepstakes platform typically launches in 4 to 6 weeks. A fully custom platform with bespoke UI design, unique reward mechanics, and custom third-party integrations generally takes 8 to 12 weeks depending on project scope.',
      },
      {
        question: 'How much does it cost to build a sweepstakes casino platform?',
        answer:
          'Development cost depends on whether you choose a turnkey base or custom build, your UI/UX scope, and how many game and payment providers you integrate. Kvaornux provides a fixed, transparent milestone quote after reviewing your exact feature list and target markets.',
      },
      {
        question: 'Can I customize the branding, design, and game lobby?',
        answer:
          'Yes. Every platform can be fully branded with your logo, color theme, domain, custom banners, lobby categories, and mobile-first layout so your site looks unique rather than like a generic template.',
      },
      {
        question: 'Will I own the source code of my sweepstakes platform?',
        answer:
          'Yes, full source code ownership is available depending on the package you choose. Source code rights, licensing scope, and handover deliverables are clearly defined in your written project agreement before development starts.',
      },
      {
        question: 'How are games and payment gateways added to the platform?',
        answer:
          'Your company opens direct commercial accounts with your preferred game providers, aggregators, and payment processors. Kvaornux handles the complete technical API integration so games, coin package purchases, and redemption workflows run smoothly inside one back office.',
      },
      {
        question: 'Does the platform include state blocking and player verification (KYC)?',
        answer:
          'Yes. We build configurable state-level geo-blocking controls and integrate third-party identity verification (KYC) providers so operators can verify player age and identity before approving any prize redemption.',
      },
      {
        question: 'Does the back office support AMOE (Alternative Method of Entry) management?',
        answer:
          'Yes. Our sweepstakes back office includes a dedicated workflow for logging, validating, and issuing AMOE credits with full audit history, helping operator teams stay organized without manual spreadsheets.',
      },
      {
        question: 'Does Kvaornux provide legal approval or operate the sweepstakes site?',
        answer:
          'No. Kvaornux is strictly a B2B software development and integration company. Clients work with their own legal counsel to confirm state eligibility, official sweepstakes rules, and compliance for their business.',
      },
      {
        question: 'Do you provide ongoing technical support and updates after launch?',
        answer:
          'Yes. We offer post-launch maintenance, server monitoring, bug fixes, new game or payment integrations, and feature upgrades based on your agreed support plan.',
      },
    ],
    relatedLinks: [
      {
        title: 'Sweepstakes Casino Software',
        description:
          'Explore our full dual-currency sweepstakes platform capabilities, AMOE tooling, and technical architecture.',
        href: '/sweepstakes-casino-software',
      },
      {
        title: 'Custom Sweepstakes Development',
        description:
          'Need bespoke mechanics, unique UI/UX, and full source-code ownership tailored to your brand?',
        href: '/custom-sweepstakes-casino-development',
      },
      {
        title: 'Unified Game Aggregator Case Study',
        description:
          'See how we engineered a single normalized API gateway for 100+ third-party game studios.',
        href: '/igaming-case-studies/casino-game-aggregator-api-architecture',
      },
    ],
    contactCategory: 'Sweepstakes Casino',
  },

  'high-load-sportsbook-platform-development': {
    slug: 'high-load-sportsbook-platform-development',
    eyebrow: 'High-Load Sportsbook Platform',
    regionBadge: 'Regulated LATAM • High-Concurrency Betting',
    title: 'High-Load Sportsbook & Live Betting Platform Engineering',
    subtitle:
      'How Kvaornux engineered a sub-second live sportsbook platform for a regulated Latin American operator—featuring multi-feed odds normalization, dynamic cashout, single-wallet PAM integration, and real-time liability monitoring.',
    tags: [
      'Real-Time Live Odds Engine',
      'Dynamic Cashout & Bet Builder',
      'Single-Wallet PAM Sync',
      'Risk & Liability Trading Desk',
    ],
    facts: {
      clientProfile: 'Regulated LATAM Sportsbook Operator (Confidential / NDA)',
      targetMarket: 'Regulated Latin American Jurisdictions',
      solutionModel: 'Custom Sportsbook Platform + Odds Feed & Payment Integration',
      timeline: '12 Weeks (Core Engine + Live Trading Desk)',
      techStack: 'Next.js, Node.js, Go Workers, PostgreSQL, Redis Pub/Sub, Socket.io',
      complianceScope: 'Geo-Fencing, Responsible Gaming Caps, Audit Trails, KYC Webhooks',
    },
    heroImage: '/assets/case-studies/sportsbook-platform/hero-showcase.webp',
    heroImageAlt:
      'High-Load Live Sportsbook and Dynamic Betting Platform UI engineered by Kvaornux',
    dashboardImage: '/assets/case-studies/sportsbook-platform/risk-dashboard.webp',
    dashboardImageAlt:
      'Sportsbook Real-Time Liability Exposure and Risk Trading Desk Dashboard UI',
    challengeTitle: 'Eliminating Bet-Slip Lag During Peak Football & Tournament Spikes',
    challengeParagraphs: [
      'During major football derbies and international tournaments, concurrent in-play betting traffic surges 10x within seconds. The client’s legacy monolith suffered from stale odds locking, delayed bet-slip confirmations, and manual settlement backlogs whenever odds feeds updated rapidly.',
      'They needed a decoupled sportsbook engine capable of pushing real-time WebSocket odds ticks to thousands of mobile bettors simultaneously, validating live stake limits against exposure caps in milliseconds, and sharing a unified single wallet with their existing casino vertical.',
    ],
    challengePoints: [
      'Sub-second odds distribution needed across mobile H5 clients without excessive bandwidth drain',
      'Configurable in-play bet acceptance delays to defend against pitch-side latency arbitrage',
      'Automated liability calculation per selection, market, and event with instant trader alerts',
      'Seamless single-wallet architecture linking pre-match, live sports, and casino play',
    ],
    solutionTitle: 'Event-Driven Odds Ingestion, Redis State & Real-Time Risk Desk',
    solutionParagraphs: [
      'Kvaornux replaced the monolithic polling architecture with an event-driven ingestion pipeline. Incoming odds streams from the operator’s contracted sports data providers are normalized into a canonical schema, cached in Redis, and broadcast to active clients over topic-scoped WebSocket channels so users only receive deltas for matches currently on screen.',
      'On the trading side, we built a live Risk & Liability Desk that recalculates book exposure on every accepted ticket. Traders can adjust margin templates per league, apply dynamic max-stake multipliers for sharp profiles, and trigger instant market suspension with one click.',
    ],
    solutionPoints: [
      'Delta-compressed WebSocket odds broadcast cutting mobile client payload size by over 70%',
      'Bet slip validator supporting singles, accumulators, system bets, and same-game Bet Builder',
      'Dynamic full, partial, and auto-cashout engine powered by live probability recalculation',
      'Automated grading and settlement pipeline triggered by verified official feed results',
    ],
    architectureHeading: 'Low-Latency Event-Driven Sportsbook Pipeline',
    architectureIntro:
      'Decoupling odds ingestion from bet validation ensures heavy spectator browsing never slows down ticket placement or wallet settlement.',
    architectureNodes: [
      {
        step: 'Layer 01',
        title: 'Odds Feed Normalizer',
        subtitle: 'Multi-Feed Ingestion + Failover',
        details:
          'Consumes contracted sports data feeds, normalizes market IDs across 80+ sports, and caches active pricing snapshots in Redis.',
      },
      {
        step: 'Layer 02',
        title: 'Delta WebSocket Gateway',
        subtitle: 'Socket.io + Redis Pub/Sub',
        details:
          'Pushes sub-second odds updates, live match trackers, and suspension states only to subscribed event rooms.',
      },
      {
        step: 'Layer 03',
        title: 'Bet Validator & Cashout',
        subtitle: 'Risk Rules + Single-Wallet Lock',
        details:
          'Verifies current odds tolerance, event liability caps, and player limits before committing atomic wallet debits.',
      },
      {
        step: 'Layer 04',
        title: 'Trading & Settlement Desk',
        subtitle: 'Live Exposure + Auto-Grading',
        details:
          'Real-time book exposure charts, margin controls, sharp-player limits, automated ticket settlement, and full audit logs.',
      },
    ],
    specTable: [
      {
        parameter: 'Supported Bet Types',
        specification:
          'Singles, multi-leg accumulators, system bets, Bet Builder (same-game parlays), and live in-play markets',
      },
      {
        parameter: 'Live Odds Distribution',
        specification:
          'Topic-based WebSocket delta streaming backed by Redis Pub/Sub for horizontal scaling',
      },
      {
        parameter: 'Risk & Liability Engine',
        specification:
          'Real-time exposure calculation per selection/market, configurable in-play acceptance delay, and automated stake caps',
      },
      {
        parameter: 'Cashout Capabilities',
        specification:
          'Dynamic full cashout, partial cashout, and threshold-based auto-cashout rules',
      },
      {
        parameter: 'Wallet & PAM Integration',
        specification:
          'Unified single-wallet ledger shared across sportsbook and casino with zero manual fund transfers',
      },
      {
        parameter: 'Localization & Compliance',
        specification:
          'Multi-language (Spanish, Portuguese, English), multi-currency display, geo-blocking, and responsible gaming limits',
      },
    ],
    moduleTabs: [
      {
        id: 'live-betting',
        label: 'In-Play & Bet Slip',
        title: 'Fast Mobile-First Betting & Bet Builder UX',
        summary:
          'Designed for thumb-first mobile play during live matches, keeping odds changes clear and bet placement effortless.',
        bullets: [
          'Instant odds-change highlighting (green/red pulse) with accept-higher-odds preference',
          'Same-game Bet Builder combining match result, goals, corners, and player props',
          'Live pitch visualization and match statistics widget integrated directly above markets',
          'Real-time cashout button with live value updates inside the active tickets drawer',
        ],
      },
      {
        id: 'risk-desk',
        label: 'Risk & Trading Desk',
        title: 'Real-Time Book Liability & Margin Control',
        summary:
          'Gives the operator’s trading team complete visibility over exposure before high-variance outcomes hit the balance sheet.',
        bullets: [
          'Live heatmaps of net liability by sport, tournament, match, and individual selection',
          'Tiered player risk profiling with automatic stake factor limits for sharp accounts',
          'Per-league overround/margin overrides without waiting for provider reconfiguration',
          'One-click market suspension and manual settlement override with dual-approval logging',
        ],
      },
      {
        id: 'single-wallet',
        label: 'Single Wallet & Settlement',
        title: 'Atomic Ledger & Automated Result Grading',
        summary:
          'Connects directly to the core PAM wallet so balances update accurately across bet placement, cashouts, voided legs, and resettlements.',
        bullets: [
          'Transactional debit/credit ledger with rollback support for voided or rescheduled fixtures',
          'Automated grading within seconds of official feed result confirmation',
          'Resettlement workflow that cleanly adjusts balances and flags discrepancies',
          'Seamless cross-vertical wallet compatibility with casino and virtual sports',
        ],
      },
      {
        id: 'back-office-compliance',
        label: 'Back Office & Compliance',
        title: 'Role-Based Permissions & Regulatory Reporting',
        summary:
          'Structured operational governance for licensed sportsbook teams managing multi-department workflows.',
        bullets: [
          'Granular role permissions across Traders, Risk Analysts, Customer Support, and Finance',
          'Automated deposit, loss, and wager limits supporting responsible gaming requirements',
          'Complete bet-lifecycle audit trails (timestamp, IP, odds version, acceptance delay)',
          'Scheduled GGR, turnover, and tax-ready financial exports per licensed jurisdiction',
        ],
      },
    ],
    complianceHeading: 'Engineered for Regulated Sportsbook Operations',
    complianceIntro:
      'Every ticket, odds snapshot, and administrative adjustment is logged so licensed operators can meet strict technical audit and responsible gaming standards.',
    complianceItems: [
      {
        title: 'Bet-Lifecycle Auditability',
        description:
          'Immutable logs recording exact odds version, client IP, acceptance delay, and settlement timestamp for every single wager.',
      },
      {
        title: 'Responsible Wagering Safeguards',
        description:
          'Player-configurable stake caps, deposit limits, session timers, and instant self-exclusion enforced before bet-slip validation.',
      },
      {
        title: 'Territory Geo-Fencing',
        description:
          'Strict regional access rules ensuring only players physically located within the operator’s licensed jurisdiction can place bets.',
      },
      {
        title: 'Anti-Fraud & Integrity Alerts',
        description:
          'Automated detection flags for correlated syndicate betting, multi-account device overlap, and unusual stake surges on niche leagues.',
      },
    ],
    metrics: [
      {
        value: '< 140ms',
        label: 'Live Bet Validation',
        note: 'Core engine processing time excluding configurable in-play integrity delay.',
      },
      {
        value: '70%+',
        label: 'Lower Client Bandwidth',
        note: 'Delta-compressed WebSocket updates kept mobile lobbies responsive on 4G.',
      },
      {
        value: '80+',
        label: 'Sports Supported',
        note: 'Canonical market adapter compatible with leading licensed sports data feeds.',
      },
      {
        value: '12 Weeks',
        label: 'Engine + Risk Desk Delivery',
        note: 'Delivered in phased milestones with load-tested production handover.',
      },
      {
        value: '99.95%',
        label: 'Peak-Match Availability',
        note: 'Horizontally scaled WebSocket workers tested against tournament traffic spikes.',
      },
      {
        value: '100%',
        label: 'Automated Grading Coverage',
        note: 'Direct webhook settlement tied to verified official sports data feeds.',
      },
    ],
    engineeringQuote: {
      quote:
        'Moving from polling to Kvaornux’s WebSocket delta pipeline and live liability desk completely eliminated our match-day bottlenecks while giving our traders real-time control over margins.',
      attribution: 'Head of Sportsbook Technology — Regulated LATAM Operator (NDA)',
    },
    faqs: [
      {
        question: 'What is included in a custom sportsbook platform built by Kvaornux?',
        answer:
          'A complete sportsbook build includes a mobile-first player interface, pre-match and live betting engine, bet slip and cashout features, odds feed integration, risk and margin controls, player management (PAM), and an operator back office.',
      },
      {
        question: 'How long does it take to build and launch a sportsbook platform?',
        answer:
          'Launching on our turnkey sportsbook foundation typically takes 4 to 8 weeks. A fully custom sportsbook with bespoke UI design, custom risk dashboards, and multiple regional payment integrations generally takes 10 to 14 weeks.',
      },
      {
        question: 'Can I combine sportsbook and online casino in one website with a single wallet?',
        answer:
          'Yes. Players can bet on live sports, play casino slots, and join live dealer tables using one shared account and one wallet balance—no manual balance transfers needed.',
      },
      {
        question: 'How do live odds and sports data feeds work?',
        answer:
          'Your company contracts directly with a licensed sports data or odds feed provider covering your target sports and leagues. Kvaornux integrates that live feed into your platform so odds update in real time and winning bets settle automatically.',
      },
      {
        question: 'Does the sportsbook support Bet Builder and live Cash-Out?',
        answer:
          'Yes. Players can combine multiple selections from the same match using Bet Builder and use full, partial, or automatic Cash-Out on eligible live and pre-match tickets.',
      },
      {
        question: 'How does the platform protect operators from high payouts or betting risks?',
        answer:
          'The back-office trading desk lets your team set custom profit margins per league, cap maximum stakes, monitor live event exposure in real time, and apply bet-acceptance delays during fast live matches.',
      },
      {
        question: 'Can the sportsbook support multiple languages, currencies, and local payments?',
        answer:
          'Yes. We build multi-language storefronts (such as English, Spanish, and Portuguese), support decimal, fractional, and American odds formats, and integrate the licensed local payment gateways approved for your business.',
      },
      {
        question: 'Will my platform stay fast during big matches like World Cup or Champions League finals?',
        answer:
          'Yes. We design the live odds display and bet placement engine separately so thousands of fans browsing scores simultaneously never slow down bet slips or balance updates.',
      },
      {
        question: 'Do I need a gaming license before launching a real-money sportsbook?',
        answer:
          'Yes. Operators are responsible for holding valid gaming licenses and approvals for their target countries. Kvaornux provides B2B software development only and does not issue licenses or operate betting platforms.',
      },
      {
        question: 'Do you provide source code ownership and post-launch support?',
        answer:
          'Yes. Source code ownership terms are clearly outlined in your project agreement, and our team provides ongoing maintenance, updates, and technical support after launch.',
      },
    ],
    relatedLinks: [
      {
        title: 'Sportsbook Platform Software',
        description:
          'Explore our standalone betting engine, odds feed adapters, and trading desk features.',
        href: '/sportsbook-platform-software',
      },
      {
        title: 'Turnkey Sportsbook Solutions',
        description:
          'Launch a combined casino and sportsbook platform with full back-office infrastructure.',
        href: '/turnkey-sportsbook-solutions',
      },
      {
        title: 'Multi-Currency Crypto Casino Case Study',
        description:
          'See how we architected a hybrid crypto and fiat casino platform with automated AML triggers.',
        href: '/igaming-case-studies/multi-currency-crypto-casino-platform',
      },
    ],
    contactCategory: 'Sportsbook Platform',
  },

  'multi-currency-crypto-casino-platform': {
    slug: 'multi-currency-crypto-casino-platform',
    eyebrow: 'Crypto & Fiat Casino Platform',
    regionBadge: 'Licensed European / International Market',
    title: 'Multi-Currency Crypto & Fiat Casino Platform Architecture',
    subtitle:
      'How Kvaornux engineered a modular multi-currency casino platform supporting fiat and digital-asset payment gateways, tiered VIP gamification, real-time AML/KYC monitoring webhooks, and high-precision wallet accounting.',
    tags: [
      'Multi-Currency Precision Ledger',
      'Crypto & Fiat Gateway Webhooks',
      'VIP Loyalty & Bonus Engine',
      'AML / KYC Risk Triggers',
    ],
    facts: {
      clientProfile: 'Licensed International iGaming Operator (Confidential / NDA)',
      targetMarket: 'Permitted European & International Markets',
      solutionModel: 'Turnkey + Custom Hybrid Casino Platform Development',
      timeline: '8 Weeks (Core Platform + Multi-Currency Wallet)',
      techStack: 'Next.js, TypeScript, Node.js, PostgreSQL (Decimal Precision), Redis',
      complianceScope: 'KYC Threshold Triggers, AML Velocity Alerts, Geo-Blocking, RG Tools',
    },
    heroImage: '/assets/case-studies/crypto-casino/hero-showcase.webp',
    heroImageAlt:
      'Multi-Currency Crypto and Fiat Casino Platform UI Showcase by Kvaornux',
    dashboardImage: '/assets/case-studies/crypto-casino/wallet-admin.webp',
    dashboardImageAlt:
      'Multi-Currency Wallet Ledger and AML KYC Compliance Back-Office Dashboard UI',
    challengeTitle: 'Handling Sub-Cent Crypto Precision & Automated AML Thresholds',
    challengeParagraphs: [
      'Operators running hybrid fiat and digital-asset casinos face two engineering traps: floating-point rounding drift when converting high-precision crypto denominations into fiat-denominated game sessions, and slow manual compliance checks that frustrate legitimate VIP players while missing high-velocity risk patterns.',
      'The client needed a single platform where players could hold multiple currency sub-wallets, connect cleanly to their licensed third-party crypto and fiat payment gateways, progress through automated VIP rakeback tiers, and automatically trigger KYC/AML reviews when configurable jurisdiction thresholds were crossed.',
    ],
    challengePoints: [
      '8-decimal numeric precision required across wallet ledgers without rounding discrepancies',
      'Real-time FX conversion layer to launch fiat-only game studios from crypto balances cleanly',
      'Automated AML velocity alerts and tiered KYC escalation rules inside the back office',
      'Flexible bonus and VIP rakeback engine controllable without engineering deployments',
    ],
    solutionTitle: 'High-Precision Multi-Wallet Core & Event-Driven Bonus/Compliance Engine',
    solutionParagraphs: [
      'Kvaornux built a multi-currency PAM core using fixed-point numeric types in PostgreSQL, keeping every currency balance isolated in its native precision. When a player launches a studio game denominated in EUR or USD, our session adapter locks an auditable FX snapshot via the operator’s configured rate feed and reconciles wins back cleanly.',
      'Alongside the wallet core, we delivered a rules-based VIP & Loyalty engine (XP tiers, instant rakeback, cashback, and missions) and a real-time Compliance Rules Engine that hooks into the client’s third-party KYC and blockchain analytics providers.',
    ],
    solutionPoints: [
      'Fixed-point multi-currency ledger supporting both major fiat currencies and digital assets',
      'Webhook-driven integration layer for client-contracted crypto and fiat payment processors',
      'No-code VIP loyalty, cashback, free-spins, and wager-race campaign builder',
      'Automated AML/KYC threshold triggers with withdrawal hold queues and audit trails',
    ],
    architectureHeading: 'Hybrid Fiat & Digital-Asset Casino Architecture',
    architectureIntro:
      'Built to keep financial accounting exact, third-party payment webhooks idempotent, and compliance teams in full control of withdrawal approvals.',
    architectureNodes: [
      {
        step: 'Layer 01',
        title: 'Multi-Currency Lobby UI',
        subtitle: 'Next.js + Real-Time Wallet Bar',
        details:
          'Instant currency switcher, live VIP progress indicators, localized UI, and zero-flicker mobile game launching.',
      },
      {
        step: 'Layer 02',
        title: 'Precision Wallet & FX Core',
        subtitle: 'Fixed-Point Ledger + FX Adapter',
        details:
          'Isolated per-currency sub-wallets with auditable session FX conversion and strict idempotent webhook handling.',
      },
      {
        step: 'Layer 03',
        title: 'Gateway & Game Connectors',
        subtitle: 'Client-Contracted APIs',
        details:
          'Modular connectors integrating the operator’s licensed payment gateways, crypto processors, and game aggregator keys.',
      },
      {
        step: 'Layer 04',
        title: 'Compliance & VIP Engine',
        subtitle: 'AML Rules + Loyalty Studio',
        details:
          'Automated deposit/withdrawal risk scoring, KYC verification gates, VIP rakeback automation, and executive reporting.',
      },
    ],
    specTable: [
      {
        parameter: 'Numeric Precision',
        specification:
          'Fixed-point DECIMAL(24,8) PostgreSQL ledger preventing floating-point rounding errors across all currencies',
      },
      {
        parameter: 'Payment Connectivity',
        specification:
          'Signed webhook adapter layer for client-contracted fiat PSPs and licensed crypto payment gateways',
      },
      {
        parameter: 'Bonus & VIP Engine',
        specification:
          'Configurable wagering requirements, game-contribution weights, instant rakeback, cashback, and VIP tiers',
      },
      {
        parameter: 'AML / KYC Automation',
        specification:
          'Configurable cumulative deposit/withdrawal triggers linked to third-party KYC & transaction-screening APIs',
      },
      {
        parameter: 'Security Hardening',
        specification:
          '2FA enforcement, withdrawal velocity limits, device fingerprinting, and encrypted credential vaults',
      },
      {
        parameter: 'Geo-Blocking & RG',
        specification:
          'Country-level restriction ruleset, deposit/loss limits, cooling-off timers, and self-exclusion controls',
      },
    ],
    moduleTabs: [
      {
        id: 'multi-wallet',
        label: 'Multi-Currency Wallet',
        title: 'Native Fiat & Digital-Asset Sub-Wallets',
        summary:
          'Players manage multiple currencies cleanly under one account while operators retain exact accounting per asset.',
        bullets: [
          'Instant balance switching across active fiat and crypto sub-wallets',
          'Auditable FX rate snapshot logging when launching fiat-denominated studio titles',
          'Signed deposit/withdrawal webhook verification with replay-attack protection',
          'Real-time pending confirmation status tracking in the player cashier',
        ],
      },
      {
        id: 'vip-bonus',
        label: 'VIP & Gamification',
        title: 'Retention Engine Built for High-LTV Operators',
        summary:
          'Automated loyalty mechanics that reward verified player activity without constant developer changes.',
        bullets: [
          'Multi-tier VIP progression with customizable XP formulas by game category',
          'Automated instant rakeback, weekly cashback, and level-up milestone rewards',
          'Strict bonus-abuse guards (max-bet caps, excluded games, wagering weight matrix)',
          'Promo code generator with redemption limits and segmented user targeting',
        ],
      },
      {
        id: 'aml-kyc',
        label: 'AML & KYC Controls',
        title: 'Automated Risk Escalation & Withdrawal Queue',
        summary:
          'Technical compliance tools engineered to help licensed operators enforce verification and financial-crime policies.',
        bullets: [
          'Tiered KYC verification prompts triggered automatically at configurable thresholds',
          'Webhook support for third-party ID verification and blockchain risk-scoring tools',
          'Withdrawal review queue flagging velocity spikes, multi-account links, or bonus anomalies',
          'Full compliance case notes and immutable approval logs for regulatory audits',
        ],
      },
      {
        id: 'operator-analytics',
        label: 'Analytics & Reporting',
        title: 'Executive Finance & Cohort Dashboards',
        summary:
          'Clear financial visibility across currencies, studios, bonus cost, and player cohorts in real time.',
        bullets: [
          'Normalized base-currency GGR and NGR reporting across all active wallets',
          'Bonus liability tracking showing active locked balances vs. released rewards',
          'Provider-level turnover and margin breakdowns for monthly reconciliation',
          'Exportable financial ledgers structured for operator accounting teams',
        ],
      },
    ],
    complianceHeading: 'Compliance-First Crypto & Fiat Engineering',
    complianceIntro:
      'Modern licensed crypto casinos require the same audit rigor as traditional regulated operators. Our architecture builds verification and risk checks directly into the transaction path.',
    complianceItems: [
      {
        title: 'Automated KYC Threshold Escalation',
        description:
          'Configurable cumulative deposit or withdrawal rules automatically pause payouts and prompt identity verification via the operator’s KYC provider.',
      },
      {
        title: 'Third-Party Transaction Screening Hooks',
        description:
          'Clean webhook integration points allow operators to connect licensed crypto analytics and sanctions-screening services before crediting or releasing funds.',
      },
      {
        title: 'Strict Jurisdiction Blocking',
        description:
          'Enforced IP/country blocklists prevent access from prohibited or unlicensed territories, including India and other restricted jurisdictions.',
      },
      {
        title: 'Zero-Custody Software Architecture',
        description:
          'Kvaornux delivers the platform software only—all merchant accounts, liquidity wallets, and payment contracts remain 100% under the licensed operator’s direct control.',
      },
    ],
    metrics: [
      {
        value: '8 Weeks',
        label: 'Core Platform Delivery',
        note: 'Rapid turnkey-plus-custom engineering from architecture sign-off to launch.',
      },
      {
        value: '8-Decimal',
        label: 'Fixed-Point Ledger Accuracy',
        note: 'Zero rounding drift across hybrid fiat and digital-asset wallet transactions.',
      },
      {
        value: '< 120ms',
        label: 'Cashier & Wallet API',
        note: 'Fast sub-wallet switching, bonus evaluation, and transaction logging.',
      },
      {
        value: '100%',
        label: 'Webhook Idempotency',
        note: 'Cryptographic signature validation and replay protection on all payment callbacks.',
      },
      {
        value: '24/7',
        label: 'Automated Risk Screening',
        note: 'Real-time velocity rules and threshold flags protecting operator cashflow.',
      },
      {
        value: '99.95%',
        label: 'Production Uptime Target',
        note: 'Redundant cloud deployment with automated health checks and failover.',
      },
    ],
    engineeringQuote: {
      quote:
        'Kvaornux nailed the hard parts most vendors gloss over—fixed-point multi-currency accounting, clean FX snapshots for studio games, and automated KYC triggers built directly into the cashier.',
      attribution: 'CTO — Licensed International Casino Operator (NDA)',
    },
    faqs: [
      {
        question: 'Can one casino platform accept both crypto and traditional fiat payments?',
        answer:
          'Yes. Kvaornux builds hybrid casino platforms where players can switch between fiat currencies (like EUR or USD) and supported digital assets inside one account, using the payment gateways contracted by your company.',
      },
      {
        question: 'How long does it take to launch a crypto and fiat online casino?',
        answer:
          'A turnkey crypto casino setup can launch in 3 to 6 weeks once branding and provider accounts are ready. A fully custom platform with unique UI design and bespoke VIP loyalty features typically takes 8 to 10 weeks.',
      },
      {
        question: 'Can players with crypto balances play regular slots and live casino games?',
        answer:
          'Yes. Even when a game studio only operates in EUR or USD, our built-in currency converter displays and settles gameplay smoothly so crypto players can access the full game lobby without friction.',
      },
      {
        question: 'Does Kvaornux hold player funds or process crypto transactions?',
        answer:
          'No. Kvaornux provides software development and API integration only. Your licensed business opens and controls its own merchant accounts and crypto payment gateway contracts directly.',
      },
      {
        question: 'What player retention and VIP features are included?',
        answer:
          'The platform includes customizable VIP levels, instant rakeback, weekly cashback, deposit bonuses, free spins, promo codes, and tournament leaderboards—all manageable directly from your admin dashboard.',
      },
      {
        question: 'How does the platform handle KYC and AML compliance?',
        answer:
          'Operators can set automatic deposit or withdrawal limits that trigger identity verification (KYC) prompts and place payouts in a compliance review queue. We also integrate third-party KYC and transaction-screening APIs.',
      },
      {
        question: 'Can we block restricted countries automatically?',
        answer:
          'Yes. Built-in geo-blocking lets operators restrict access from prohibited or unlicensed jurisdictions—including India and other restricted markets—right at registration and login.',
      },
      {
        question: 'Can I start with a white-label or turnkey package and customize later?',
        answer:
          'Yes. Because the platform is built with a modular architecture, you can launch quickly with core casino features and add sportsbook, custom games, or new payment methods as your brand grows.',
      },
      {
        question: 'Will I have full control over player data, reports, and back-office settings?',
        answer:
          'Yes. Your team gets full access to a centralized admin dashboard with real-time financial reports, player history, bonus controls, affiliate tracking, and staff permission levels.',
      },
      {
        question: 'Does Kvaornux provide a gambling license with crypto casino software?',
        answer:
          'No. Kvaornux is a B2B software provider and does not issue gaming licenses. Operators obtain their own valid gaming license for their permitted target jurisdictions before launching real-money operations.',
      },
    ],
    relatedLinks: [
      {
        title: 'Crypto Casino Software',
        description:
          'Explore our hybrid crypto and fiat casino platform features, wallet modules, and integrations.',
        href: '/crypto-casino-software',
      },
      {
        title: 'Turnkey Casino Solutions',
        description:
          'Compare turnkey casino & sportsbook packages with customizable branding and source code options.',
        href: '/turnkey-casino-software-solutions',
      },
      {
        title: 'US Sweepstakes Platform Case Study',
        description:
          'See how we engineered a dual-currency Gold Coin & Sweeps Coin platform for North America.',
        href: '/igaming-case-studies/us-sweepstakes-casino-platform-development',
      },
    ],
    contactCategory: 'Crypto Casino',
  },

  'casino-game-aggregator-api-architecture': {
    slug: 'casino-game-aggregator-api-architecture',
    eyebrow: 'Casino Game Aggregator API',
    regionBadge: 'International B2B Operator Group',
    title: 'Unified Casino Game Aggregator API & Back-Office Reconciliation Engine',
    subtitle:
      'How Kvaornux engineered a single normalized game-integration gateway and round-reconciliation back office—allowing a multi-brand operator group to connect client-licensed studios through one resilient Seamless Wallet API.',
    tags: [
      'Single Normalized Game API',
      'Idempotent Seamless Wallet',
      'Automated Round Rollback',
      'Real-Time GGR Reconciliation',
    ],
    facts: {
      clientProfile: 'Multi-Brand Licensed Operator Group (Confidential / NDA)',
      targetMarket: 'Multi-Jurisdiction Regulated Markets',
      solutionModel: 'Custom Game Aggregation Middleware & Back-Office Suite',
      timeline: '9 Weeks (Middleware Core + Reconciliation Portal)',
      techStack: 'Node.js, TypeScript, PostgreSQL, Redis, RabbitMQ, Docker',
      complianceScope: 'Per-Market Studio Geo-Rules, Round Audit Logs, Certified Feed Hooks',
    },
    heroImage: '/assets/case-studies/game-aggregator/hero-showcase.webp',
    heroImageAlt:
      'Unified Casino Game Aggregator API Gateway Architecture engineered by Kvaornux',
    dashboardImage: '/assets/case-studies/game-aggregator/telemetry-ui.webp',
    dashboardImageAlt:
      'Game Aggregator API Telemetry, Webhook Latency and GGR Reconciliation Dashboard',
    challengeTitle: 'Ending Fragmented Studio Integrations & Unreconciled Game Rounds',
    challengeParagraphs: [
      'Managing separate direct APIs across dozens of slot, crash, and live-dealer studios creates massive engineering drag: every studio uses different signature schemes, payload formats, timeout policies, and rollback rules. Whenever a provider changed an endpoint or timed out mid-spin, the operator’s team had to dig through raw server logs to resolve stuck player rounds.',
      'The client needed one clean internal aggregation middleware that normalized all of their contracted game feeds behind a single Seamless Wallet protocol, enforced per-country studio availability rules, and automated end-of-month GGR reconciliation across brands.',
    ],
    challengePoints: [
      'Maintaining 15+ incompatible third-party studio API formats slowed down every new brand launch',
      'Network timeouts caused occasional orphaned rounds and manual customer support escalations',
      'No unified way to restrict specific studios or RTP profiles by player jurisdiction',
      'Finance team spent days manually matching operator GGR logs against studio invoices',
    ],
    solutionTitle: 'Canonical Adapter Gateway, Dead-Letter Rollbacks & Live Telemetry',
    solutionParagraphs: [
      'Kvaornux engineered a modular adapter middleware where each contracted studio or aggregator plugs into a thin connector translating into one canonical internal schema (`authenticate`, `balance`, `debit`, `credit`, `rollback`). Brand frontends integrate only once with the unified gateway.',
      'To eliminate stuck rounds, we added a strict Redis idempotency cache paired with an asynchronous rollback/reconciliation worker queue. The back office surfaces real-time API latency heatmaps, problem-round alerts, and one-click GGR reconciliation statements per brand and studio.',
    ],
    solutionPoints: [
      'Single unified API gateway abstracting 100+ studio integration patterns behind one contract',
      'Sub-100ms idempotent debit/credit/rollback handler preventing duplicate balance mutations',
      'Per-brand and per-jurisdiction game catalog visibility and denomination controls',
      'Automated daily & monthly GGR audit statements for third-party studio invoice checks',
    ],
    architectureHeading: 'Normalized Single-API Aggregation Middleware',
    architectureIntro:
      'One resilient integration layer sits between all operator brands and their licensed game providers, standardizing wallet callbacks, error recovery, and reporting.',
    architectureNodes: [
      {
        step: 'Layer 01',
        title: 'Unified Operator API',
        subtitle: 'Single Auth & Launch Contract',
        details:
          'Operator brands integrate once to fetch normalized catalogs, launch URLs, and session tokens across desktop and mobile.',
      },
      {
        step: 'Layer 02',
        title: 'Studio Connector Pool',
        subtitle: 'Isolated Provider Adapters',
        details:
          'Translates provider-specific HMAC signatures, currencies, and error codes into one canonical internal transaction format.',
      },
      {
        step: 'Layer 03',
        title: 'Idempotent Wallet Bridge',
        subtitle: 'Redis Lock + Rollback Queue',
        details:
          'Guarantees exactly-once debit/credit execution with automatic timeout recovery and problem-round resolution tracking.',
      },
      {
        step: 'Layer 04',
        title: 'Telemetry & GGR Back Office',
        subtitle: 'Latency Monitor + Audit Exports',
        details:
          'Tracks provider response times, open rounds, game RTP analytics, and automated GGR reconciliation reports per brand.',
      },
    ],
    specTable: [
      {
        parameter: 'Integration Pattern',
        specification:
          'Canonical Seamless Wallet API (`balance`, `debit`, `credit`, `rollback`) with pluggable studio adapters',
      },
      {
        parameter: 'Idempotency & Safety',
        specification:
          'Transaction-ID deduplication in Redis + PostgreSQL unique constraints preventing double-spend or double-credit',
      },
      {
        parameter: 'Catalog & Geo Governance',
        specification:
          'Centralized toggle for studio availability, jurisdiction allowlists, and currency restrictions per brand',
      },
      {
        parameter: 'Promo & Free Spins',
        specification:
          'Normalized free-rounds API bridge supporting studio-native promotional campaigns from one dashboard',
      },
      {
        parameter: 'Observability & Alerts',
        specification:
          'Real-time P95 latency tracking per studio, error-rate alerting, and open-round resolver dashboard',
      },
      {
        parameter: 'Financial Reconciliation',
        specification:
          'Automated per-studio GGR, bet turnover, win volume, and discrepancy reports exportable by date range',
      },
    ],
    moduleTabs: [
      {
        id: 'normalized-api',
        label: 'Single API Gateway',
        title: 'Integrate Once, Connect Across Brands',
        summary:
          'New casino brands onboard in days instead of months by connecting to one clean, well-documented internal aggregation layer.',
        bullets: [
          'Unified catalog sync pulling game metadata, categories, thumbnails, and mobile flags',
          'Standardized session launch flow with automatic currency and language mapping',
          'Isolated adapter microservices so one studio’s outage never affects other providers',
          'Interactive sandbox simulator for QA teams to test debits, wins, and rollbacks before go-live',
        ],
      },
      {
        id: 'wallet-safety',
        label: 'Wallet & Rollbacks',
        title: 'Bulletproof Transaction & Round Integrity',
        summary:
          'Engineered specifically to handle flaky networks, duplicate provider retries, and out-of-order win callbacks without corrupting balances.',
        bullets: [
          'Strictly idempotent debit/credit endpoints returning cached responses on retries',
          'Automated rollback handling when a game round fails mid-flight',
          'Dead-letter queue and Problem Round Resolver UI for rapid support resolution',
          'Full round-level transaction tree linking initial stake, bonus spins, and final payout',
        ],
      },
      {
        id: 'catalog-controls',
        label: 'Catalog & Geo Rules',
        title: 'Per-Market Studio Visibility & Compliance Controls',
        summary:
          'Ensures players only see games that the operator is commercially and legally permitted to offer in their jurisdiction.',
        bullets: [
          'Country-level studio allowlists and blocklists enforced before game launch',
          'Brand-level lobby curation, featured tags, and instant maintenance-mode toggles',
          'Currency compatibility matrix preventing unsupported denomination launches',
          'Centralized versioned configuration with full admin change history',
        ],
      },
      {
        id: 'ggr-telemetry',
        label: 'Telemetry & GGR Audit',
        title: 'Real-Time Latency Monitoring & Invoice Reconciliation',
        summary:
          'Turns raw game-round logs into actionable engineering telemetry and finance-ready reconciliation reports.',
        bullets: [
          'Live P50/P95 response-time and error-rate charts broken down by individual studio',
          'Automated daily and monthly GGR summaries grouped by brand, currency, and provider',
          'Instant anomaly flags for open rounds exceeding configurable time thresholds',
          'CSV/API exports designed to match third-party aggregator and studio billing statements',
        ],
      },
    ],
    complianceHeading: 'Built for Clean Licensing & Commercial Governance',
    complianceIntro:
      'Kvaornux builds the technical integration middleware—giving licensed operators full transparency and control over their direct studio and aggregator contracts.',
    complianceItems: [
      {
        title: 'Direct Operator Licensing Boundary',
        description:
          'Each studio connector runs exclusively on the operator’s own commercial credentials and direct agreements, maintaining clear legal and contractual separation.',
      },
      {
        title: 'Jurisdiction-Aware Game Gating',
        description:
          'Server-side territory rules block restricted game titles or studios automatically based on verified player location.',
      },
      {
        title: 'Complete Game-Round Audit Trail',
        description:
          'Every spin ID, bet amount, win payout, and rollback event is stored immutably for player dispute resolution and regulatory inspection.',
      },
      {
        title: 'Encrypted Key & Credential Isolation',
        description:
          'Studio API keys, signing secrets, and brand credentials are stored in isolated encrypted vaults with strict role-based access.',
      },
    ],
    metrics: [
      {
        value: '< 95ms',
        label: 'Gateway Overhead (P95)',
        note: 'Lightweight Node.js/Redis adapter layer keeping spin round-trips snappy.',
      },
      {
        value: '9 Weeks',
        label: 'Middleware + Back Office',
        note: 'Delivered with sandbox test harness and production observability dashboards.',
      },
      {
        value: '100%',
        label: 'Idempotent Callbacks',
        note: 'Duplicate provider retries handled cleanly without double-debiting players.',
      },
      {
        value: '5x Faster',
        label: 'New Brand Onboarding',
        note: 'New operator storefronts connect via one unified API instead of 15+ studio specs.',
      },
      {
        value: 'Minutes',
        label: 'Monthly GGR Reconciliation',
        note: 'Automated provider-by-provider statements replaced multi-day manual spreadsheets.',
      },
      {
        value: '99.98%',
        label: 'Gateway Uptime Target',
        note: 'Fault-isolated provider adapters prevent single-studio incidents from cascading.',
      },
    ],
    engineeringQuote: {
      quote:
        'Standardizing all our game studio integrations behind one idempotent middleware layer cut new-brand launch time dramatically and gave our finance team clean GGR reports on day one.',
      attribution: 'VP of Engineering — International Multi-Brand Operator Group (NDA)',
    },
    faqs: [
      {
        question: 'What is a casino game aggregator API and why do operators use it?',
        answer:
          'A casino game aggregator API connects multiple game studios—such as slots, live casino, crash, and table games—through one unified integration. Instead of building a separate connection for every studio, your platform integrates once and manages all games from one back office.',
      },
      {
        question: 'How does a single game aggregator API save launch time and cost?',
        answer:
          'Integrating game studios one by one can take months of engineering and ongoing maintenance. A unified aggregation layer lets operators onboard new brands and add newly contracted studios much faster with less developer overhead.',
      },
      {
        question: 'Does Kvaornux sell game licenses or build the integration technology?',
        answer:
          'Kvaornux builds the custom aggregation middleware, seamless wallet integration, and back-office reporting software. Operators hold their own direct commercial agreements and API credentials with their licensed game studios or aggregators.',
      },
      {
        question: 'Can this aggregator API connect to my existing casino platform?',
        answer:
          'Yes. Whether you already run a custom casino website or are building a new platform with Kvaornux, the unified API connects cleanly to your existing player wallet and account system.',
      },
      {
        question: 'What happens if a player loses internet connection mid-spin?',
        answer:
          'The wallet bridge protects every round automatically. If a provider times out or retries a request, duplicate charges are blocked and unfinished rounds are either completed cleanly or rolled back so player balances stay accurate.',
      },
      {
        question: 'Can I control which games appear in different countries?',
        answer:
          'Yes. From the back office, operators can enable or hide specific game studios, titles, or currencies by country and brand so players only see content permitted in their region.',
      },
      {
        question: 'Does the system support free spins and cross-provider bonuses?',
        answer:
          'Yes. Where supported by your contracted studios, operators can launch free-spin campaigns, tournaments, and promotional bonuses across multiple games directly from one dashboard.',
      },
      {
        question: 'How does GGR reporting and provider billing reconciliation work?',
        answer:
          'Every bet, win, and rollback is logged automatically and grouped by brand, currency, and game studio. Your finance team can export clean daily or monthly GGR statements in minutes instead of manually checking spreadsheets.',
      },
      {
        question: 'How long does it take to build or integrate a game aggregator layer?',
        answer:
          'Connecting a licensed third-party aggregator to an existing platform typically takes 2 to 4 weeks. Building a custom multi-brand aggregation middleware with full telemetry and GGR reconciliation generally takes 8 to 10 weeks.',
      },
      {
        question: 'Do you provide testing support and post-launch maintenance?',
        answer:
          'Yes. We include a testing sandbox to verify game launches, wins, and rollbacks before going live, along with ongoing monitoring and maintenance after launch.',
      },
    ],
    relatedLinks: [
      {
        title: 'Casino Aggregator API Solution',
        description:
          'Learn how our unified integration layer connects game content, seamless wallets, and reporting.',
        href: '/casino-aggregator-api-solution',
      },
      {
        title: 'How Casino Game API Integration Works',
        description:
          'Read our deep-dive engineering guide on round debits, win credits, and webhook rollbacks.',
        href: '/blog/how-casino-game-api-integration-works',
      },
      {
        title: 'High-Load Sportsbook Case Study',
        description:
          'See how we engineered a low-latency live sportsbook and trading desk for regulated LATAM.',
        href: '/igaming-case-studies/high-load-sportsbook-platform-development',
      },
    ],
    contactCategory: 'Casino Game Aggregator',
  },
};

export const ENTERPRISE_CASE_STUDY_LIST = Object.values(ENTERPRISE_CASE_STUDIES);

