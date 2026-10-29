import type { Metadata } from 'next';
import { faqList } from './faqData';
import SweepstakesGameAggregationClient from './SweepstakesGameAggregationClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Game Aggregation for Sweepstakes Operators: 2026 Guide | Kvaornux',
  },
  description:
    'Learn how game aggregation works for sweepstakes operators in 2026. Explore game catalog sourcing, Gold Coin and Sweeps Coin availability, commercial pricing models, and studio licensing.',
  alternates: {
    canonical: '/blog/sweepstakes-game-aggregation',
  },
  openGraph: {
    title: 'Game Aggregation for Sweepstakes Operators: 2026 Guide | Kvaornux',
    description:
      'Learn how game aggregation works for sweepstakes operators in 2026. Explore game catalog sourcing, Gold Coin and Sweeps Coin availability, commercial pricing models, and studio licensing.',
    url: 'https://kvaornux.com/blog/sweepstakes-game-aggregation',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/sweepstakes-game-aggregation-banner.webp',
        width: 1376,
        height: 768,
        alt: 'Game Aggregation for Sweepstakes Operators: 2026 Guide | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Game Aggregation for Sweepstakes Operators: 2026 Guide | Kvaornux',
    description:
      'Learn how game aggregation works for sweepstakes operators in 2026. Explore game catalog sourcing, Gold Coin and Sweeps Coin availability, commercial pricing models, and studio licensing.',
    images: ['https://kvaornux.com/assets/features/sweepstakes-game-aggregation-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Game Aggregation for Sweepstakes Operators: A Complete Guide for 2026',
    description:
      'Learn how game aggregation works for sweepstakes operators in 2026. Explore game catalog sourcing, Gold Coin and Sweeps Coin availability, commercial pricing models, and studio licensing.',
    image: 'https://kvaornux.com/assets/features/sweepstakes-game-aggregation-banner.webp',
    url: 'https://kvaornux.com/blog/sweepstakes-game-aggregation',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/sweepstakes-game-aggregation',
    },
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    author: {
      '@type': 'Organization',
      name: 'Kvaornux Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.webp',
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
        name: 'Game Aggregation for Sweepstakes Operators',
        item: 'https://kvaornux.com/blog/sweepstakes-game-aggregation',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <SweepstakesGameAggregationClient />
    </>
  );
}
