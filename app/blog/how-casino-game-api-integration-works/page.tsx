import type { Metadata } from 'next';
import CasinoGameApiIntegrationBlogClient from './CasinoGameApiIntegrationBlogClient';

export const metadata: Metadata = {
  title: {
    absolute: 'How Casino Game API Integration Works | Kvaornux',
  },
  description:
    'Learn how casino game API integration works, from authentication and game launch to wallet transactions, bet and win callbacks, refunds, logging and testing.',
  alternates: {
    canonical: '/blog/how-casino-game-api-integration-works',
  },
  openGraph: {
    title: 'How Casino Game API Integration Works | Kvaornux',
    description:
      'Learn how casino game API integration works, from authentication and game launch to wallet transactions, bet and win callbacks, refunds, logging and testing.',
    url: 'https://kvaornux.com/blog/how-casino-game-api-integration-works',
    siteName: 'Kvaornux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Casino Game API Integration Works | Kvaornux',
    description:
      'Learn how casino game API integration works, from authentication and game launch to wallet transactions, bet and win callbacks, refunds, logging and testing.',
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How Casino Game API Integration Works',
    description:
      'Learn how casino game API integration works, from authentication and game launch to wallet transactions, bet and win callbacks, refunds, logging and testing.',
    image: 'https://kvaornux.com/assets/og-image.png',
    url: 'https://kvaornux.com/blog/how-casino-game-api-integration-works',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/how-casino-game-api-integration-works',
    },
    datePublished: '2026-09-25',
    dateModified: '2026-09-25',
    author: {
      '@type': 'Organization',
      name: 'Kvaornux Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.png',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kvaornux.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://kvaornux.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'How Casino Game API Integration Works',
        item: 'https://kvaornux.com/blog/how-casino-game-api-integration-works',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CasinoGameApiIntegrationBlogClient />
    </>
  );
}
