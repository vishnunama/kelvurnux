export interface BlogPost {
  slug: string;
  href: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  authorName: string;
  authorAvatar: string;
}

export const ALL_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-casino-game-aggregator-api',
    href: '/blog/what-is-casino-game-aggregator-api',
    title: 'What Is a Casino Game Aggregator API?',
    description:
      'Learn how casino game aggregation connects an iGaming platform with multiple game providers through a single technical integration.',
    date: '25.09.2026',
    readTime: '12 min read',
    image: '/assets/features/casino-game-providers-api-aggregator.webp',
    tags: ['Game Aggregation', 'API Integration'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'game-aggregator-vs-direct-provider-integration',
    href: '/blog/game-aggregator-vs-direct-provider-integration',
    title: 'Game Aggregator vs Direct Game Provider Integration',
    description:
      'Compare game aggregation and direct provider integrations across architecture, maintenance, commercial control and platform operations.',
    date: '25.09.2026',
    readTime: '14 min read',
    image: '/assets/features/online-casino-game-aggregation-10000-plus-slots.webp',
    tags: ['Game Aggregation', 'Casino'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'how-casino-game-api-integration-works',
    href: '/blog/how-casino-game-api-integration-works',
    title: 'How Casino Game API Integration Works',
    description:
      'Understand the technical flow behind casino game APIs, including authentication, game launch, wallet communication, bets, wins, refunds and testing.',
    date: '25.09.2026',
    readTime: '15 min read',
    image: '/assets/features/turnkey-igaming-platform-infrastructure-services.webp',
    tags: ['API Integration', 'Guides'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'seamless-wallet-vs-transfer-wallet-igaming',
    href: '/blog/seamless-wallet-vs-transfer-wallet-igaming',
    title: 'Seamless Wallet vs Transfer Wallet in iGaming',
    description:
      'Understand how seamless and transfer wallet models handle player balances, gameplay transactions, fund movement and reconciliation.',
    date: '28.09.2026',
    readTime: '14 min read',
    image: '/assets/features/igaming-financial-reconciliation-auto-invoices.webp',
    tags: ['Wallet Architecture', 'Game Aggregation'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'igaming-software-development',
    href: '/blog/igaming-software-development',
    title: 'iGaming Software Development: A Complete Guide to Building an iGaming Platform',
    description:
      'Learn how iGaming software development works, from platform architecture, PAM and wallets to casino, sportsbook, game aggregation, payments, security and integrations.',
    date: '01.10.2026',
    readTime: '18 min read',
    image: '/assets/features/igaming-software-development-banner.webp',
    tags: ['iGaming Development', 'Platform Architecture'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'sweepstakes-casino-api-integration',
    href: '/blog/sweepstakes-casino-api-integration',
    title: 'Sweepstakes Casino API Integration: How Games Connect to Dual-Currency Wallets',
    description:
      'Learn how sweepstakes casino API integration connects games, aggregators and dual-currency wallets, including Gold Coin and Sweeps Coin sessions, wallet callbacks, bet/win transactions, rollbacks and reconciliation.',
    date: '06.10.2026',
    readTime: '15 min read',
    image: '/assets/features/sweepstakes-casino-api-integration-banner.webp',
    tags: ['Sweepstakes', 'API Integration', 'Dual Currency'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'what-is-sweepstakes-casino-software',
    href: '/blog/what-is-sweepstakes-casino-software',
    title: 'What Is Sweepstakes Casino Software? A Complete Guide for Operators',
    description:
      'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
    date: '06.10.2026',
    readTime: '16 min read',
    image: '/assets/features/what-is-sweepstakes-casino-software-banner.webp',
    tags: ['Sweepstakes', 'Casino Platform', 'Dual Currency'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'choosing-sweepstakes-casino-software-provider',
    href: '/blog/choosing-sweepstakes-casino-software-provider',
    title: 'How to Choose a Sweepstakes Casino Software Provider',
    description:
      'Compare sweepstakes software providers on features, AMOE support, game integrations, development costs, contracts, and source code ownership.',
    date: '27.10.2026',
    readTime: '14 min read',
    image: '/assets/features/choosing-sweepstakes-casino-software-provider-banner.webp',
    tags: ['Sweepstakes', 'Buyer Guide', 'Turnkey vs Custom'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'sweepstakes-casino-payments',
    href: '/blog/sweepstakes-casino-payments',
    title: 'Sweepstakes Casino Payments in 2026: Methods, Gateways & Redemptions',
    description:
      'Explore sweepstakes casino payment processing in 2026. Learn how operators handle Gold Coin purchases, Sweeps Coin prize redemptions, merchant gateways, and KYC verification.',
    date: '29.10.2026',
    readTime: '16 min read',
    image: '/assets/features/sweepstakes-casino-payments-banner.webp',
    tags: ['Sweepstakes', 'Payments & Banking', 'Prize Redemptions'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'sweepstakes-game-aggregation',
    href: '/blog/sweepstakes-game-aggregation',
    title: 'Game Aggregation for Sweepstakes Operators: A Complete Guide for 2026',
    description:
      'Learn how game aggregation works for sweepstakes operators in 2026. Explore game catalog sourcing, Gold Coin and Sweeps Coin availability, commercial pricing models, and studio licensing.',
    date: '29.10.2026',
    readTime: '15 min read',
    image: '/assets/features/sweepstakes-game-aggregation-banner.webp',
    tags: ['Sweepstakes', 'Game Aggregation', 'API Integration'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'sweepstakes-fraud-prevention',
    href: '/blog/sweepstakes-fraud-prevention',
    title: "Sweepstakes Fraud Prevention in 2026: An Operator's Guide",
    description:
      'Learn how sweepstakes operators prevent fraud in 2026. Explore multi-accounting defense, payment chargeback mitigation, KYC workflows, and wallet protection.',
    date: '29.10.2026',
    readTime: '16 min read',
    image: '/assets/features/sweepstakes-fraud-prevention-banner.webp',
    tags: ['Sweepstakes', 'Fraud Prevention', 'Risk Management', 'Security'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'crypto-casino-white-label',
    href: '/blog/crypto-casino-white-label',
    title: 'Crypto Casino White Label: 7 Checks Before You Sign',
    description:
      'Choosing a crypto casino white label provider? Use these seven demo and contract checks to compare wallets, games, fees, withdrawals and ownership.',
    date: '03.11.2026',
    readTime: '8 min read',
    image: '/assets/features/crypto-casino-white-label-banner.webp',
    tags: ['Crypto Casino', 'White Label', 'Operator Checklist'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'start-your-own-igaming-business',
    href: '/blog/start-your-own-igaming-business',
    title: 'How to Start Your Own iGaming Business: A Launch Checklist for Operators',
    description:
      'Start your own iGaming business with a practical operator checklist. Compare quotes, test games and payments, and decide when you’re ready to launch.',
    date: '03.11.2026',
    readTime: '7 min read',
    image: '/assets/features/start-your-own-igaming-business-banner.webp',
    tags: ['iGaming Launch', 'Operator Checklist', 'Platform Demo'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'sportsbook-integration',
    href: '/blog/sportsbook-integration',
    title: 'Sportsbook Integration: How to Add Sports Betting to an Existing Casino',
    description:
      'Adding sports betting to your casino? Compare sportsbook integration options and test player login, wallets, bet settlement and reporting before launch.',
    date: '03.11.2026',
    readTime: '6 min read',
    image: '/assets/features/sportsbook-integration-banner.webp',
    tags: ['Sportsbook Integration', 'Sports Betting API', 'Turnkey', 'Shared Wallet'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'gambling-software-for-sale',
    href: '/blog/gambling-software-for-sale',
    title: 'Gambling Software for Sale: What to Check Before Buying a Casino Platform',
    description:
      'Buying gambling software? Compare casino platform quotes, source code rights, game API fees and support before you sign.',
    date: '03.11.2026',
    readTime: '6 min read',
    image: '/assets/features/gambling-software-for-sale-banner.webp',
    tags: ['Gambling Software for Sale', 'Casino Source Code', 'Casino Game API', 'White Label', 'Turnkey'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'white-label-vs-turnkey-casino',
    href: '/blog/white-label-vs-turnkey-casino',
    title: 'White Label vs Turnkey Casino: Which Should You Choose?',
    description:
      'Compare white label and turnkey casino packages by launch time, upfront cost, sportsbook inclusion, source code rights and ongoing support.',
    date: '03.11.2026',
    readTime: '5 min read',
    image: '/assets/features/white-label-vs-turnkey-casino-banner.webp',
    tags: ['White Label', 'Turnkey Casino', 'Platform Comparison', 'Casino Source Code'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'white-label-casino-integration',
    href: '/blog/white-label-casino-integration',
    title: 'White Label Casino Integration: Games, Payments & Wallets',
    description:
      'Learn how white label casino integration connects games, payments and wallets. See what to confirm in your quote and test before launch.',
    date: '03.11.2026',
    readTime: '6 min read',
    image: '/assets/features/white-label-casino-integration-banner.webp',
    tags: ['White Label', 'Game API', 'Payment Integration', 'Casino Wallet'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
  {
    slug: 'white-label-sportsbook-providers',
    href: '/blog/white-label-sportsbook-providers',
    title: 'White Label Sportsbook Providers: How to Compare',
    description:
      'Compare white label sportsbook providers by sports coverage, trading controls, fees, match-day support and player data access before signing.',
    date: '03.11.2026',
    readTime: '7 min read',
    image: '/assets/features/white-label-sportsbook-providers-banner.webp',
    tags: ['Sportsbook', 'White Label', 'Sports Betting', 'Trading & Risk'],
    authorName: 'Kvaornux Editorial Team',
    authorAvatar: '/assets/favicon.webp',
  },
];

export function getPreviousBlogPost(currentSlug: string): BlogPost {
  const index = ALL_BLOG_POSTS.findIndex((post) => post.slug === currentSlug);
  if (index === -1 || index === 0) {
    return ALL_BLOG_POSTS[ALL_BLOG_POSTS.length - 1];
  }
  return ALL_BLOG_POSTS[index - 1];
}

export function getRecommendedBlogPosts(currentSlug: string, count = 3): BlogPost[] {
  const filtered = ALL_BLOG_POSTS.filter((post) => post.slug !== currentSlug);
  if (filtered.length >= count) {
    return filtered.slice(0, count);
  }
  return ALL_BLOG_POSTS.slice(0, count);
}
