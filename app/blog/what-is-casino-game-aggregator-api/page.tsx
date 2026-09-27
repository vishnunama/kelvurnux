import type { Metadata } from 'next';
import AggregatorApiBlogClient from './AggregatorApiBlogClient';

export const metadata: Metadata = {
  title: {
    absolute: 'What Is a Casino Game Aggregator API? | Kvaornux',
  },
  description:
    'Learn how a casino game aggregator API works, how it connects operators with multiple game providers, and what to evaluate before integration.',
  alternates: {
    canonical: '/blog/what-is-casino-game-aggregator-api',
  },
  openGraph: {
    title: 'What Is a Casino Game Aggregator API? | Kvaornux',
    description:
      'Learn how a casino game aggregator API works, how it connects operators with multiple game providers, and what to evaluate before integration.',
    url: 'https://kvaornux.com/blog/what-is-casino-game-aggregator-api',
    siteName: 'Kvaornux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Casino Game Aggregator API? | Kvaornux',
    description:
      'Learn how a casino game aggregator API works, how it connects operators with multiple game providers, and what to evaluate before integration.',
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'What Is a Casino Game Aggregator API?',
    description:
      'Learn how a casino game aggregator API works, how it connects operators with multiple game providers, and what to evaluate before integration.',
    image: 'https://kvaornux.com/assets/og-image.png',
    url: 'https://kvaornux.com/blog/what-is-casino-game-aggregator-api',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/what-is-casino-game-aggregator-api',
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
        name: 'What Is a Casino Game Aggregator API?',
        item: 'https://kvaornux.com/blog/what-is-casino-game-aggregator-api',
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
      <AggregatorApiBlogClient />
    </>
  );
}
