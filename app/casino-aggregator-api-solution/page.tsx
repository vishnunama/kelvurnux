import type { Metadata } from 'next';
import CasinoAggregatorClient from './CasinoAggregatorClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Casino Aggregator API Solution | Game Integration API | Kvaornux',
  },
  description:
    'Access thousands of casino games through a single unified aggregator API with top game providers, seamless wallet integration, and real-time reporting.',
  alternates: {
    canonical: '/casino-aggregator-api-solution',
  },
  openGraph: {
    title: 'Casino Aggregator API Solution | Game Integration API | Kvaornux',
    description:
      'Access thousands of casino games through a single unified aggregator API with top game providers, seamless wallet integration, and real-time reporting.',
    url: 'https://kvaornux.com/casino-aggregator-api-solution',
    siteName: 'Kvaornux',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casino Aggregator API Solution | Game Integration API | Kvaornux',
    description:
      'Access thousands of casino games through a single unified aggregator API with top game providers, seamless wallet integration, and real-time reporting.',
  },
};

export default function CasinoAggregatorPage() {
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
        name: 'Casino Aggregator API Solution',
        item: 'https://kvaornux.com/casino-aggregator-api-solution',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CasinoAggregatorClient />
    </>
  );
}