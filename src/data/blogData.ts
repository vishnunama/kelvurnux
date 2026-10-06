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
    image: '/assets/features/sweepstakes-casino-api-integration-banner.jpg',
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
    image: '/assets/features/what-is-sweepstakes-casino-software-banner.jpg',
    tags: ['Sweepstakes', 'Casino Platform', 'Dual Currency'],
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
