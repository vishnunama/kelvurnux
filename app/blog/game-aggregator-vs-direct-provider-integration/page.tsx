import type { Metadata } from 'next';
import GameAggregatorVsDirectBlogClient from './GameAggregatorVsDirectBlogClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Game Aggregator vs Direct Provider Integration | Kvaornux',
  },
  description:
    'Compare casino game aggregation with direct provider integration, including API architecture, maintenance, commercial control, scalability and operational differences.',
  alternates: {
    canonical: '/blog/game-aggregator-vs-direct-provider-integration',
  },
  openGraph: {
    title: 'Game Aggregator vs Direct Provider Integration | Kvaornux',
    description:
      'Compare casino game aggregation with direct provider integration, including API architecture, maintenance, commercial control, scalability and operational differences.',
    url: 'https://kvaornux.com/blog/game-aggregator-vs-direct-provider-integration',
    siteName: 'Kvaornux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Aggregator vs Direct Provider Integration | Kvaornux',
    description:
      'Compare casino game aggregation with direct provider integration, including API architecture, maintenance, commercial control, scalability and operational differences.',
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Game Aggregator vs Direct Game Provider Integration',
    description:
      'Compare casino game aggregation with direct provider integration, including API architecture, maintenance, commercial control, scalability and operational differences.',
    image: 'https://kvaornux.com/assets/og-image.png',
    url: 'https://kvaornux.com/blog/game-aggregator-vs-direct-provider-integration',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/game-aggregator-vs-direct-provider-integration',
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
        name: 'Game Aggregator vs Direct Game Provider Integration',
        item: 'https://kvaornux.com/blog/game-aggregator-vs-direct-provider-integration',
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
      <GameAggregatorVsDirectBlogClient />
    </>
  );
}
