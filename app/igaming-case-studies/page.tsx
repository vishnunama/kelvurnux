import type { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'iGaming Case Studies & Development Portfolio | Kvaornux',
  description:
    'Explore Kvaornux iGaming case studies covering casino platform development, game integrations, payments, wallets, affiliate systems and back-office technology.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-case-studies',
  },
  openGraph: {
    title: 'iGaming Case Studies & Development Portfolio | Kvaornux',
    description:
      'Explore Kvaornux iGaming case studies covering casino platform development, game integrations, payments, wallets, affiliate systems and back-office technology.',
    url: 'https://kvaornux.com/igaming-case-studies',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/case-studies/sweepstakes-platform/hero-showcase.webp',
        width: 1440,
        height: 810,
        alt: 'Kvaornux iGaming Case Studies & Development Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGaming Case Studies & Development Portfolio | Kvaornux',
    description:
      'Explore Kvaornux iGaming case studies covering casino platform development, game integrations, payments, wallets, affiliate systems and back-office technology.',
    images: ['https://kvaornux.com/assets/case-studies/sweepstakes-platform/hero-showcase.webp'],
  },
};

export default function Page() {
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
        name: 'iGaming Case Studies',
        item: 'https://kvaornux.com/igaming-case-studies',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kvaornux.com/igaming-case-studies',
    url: 'https://kvaornux.com/igaming-case-studies',
    name: 'iGaming Development Case Studies',
    description:
      'Explore Kvaornux iGaming case studies covering casino platform development, game integrations, payments, wallets, affiliate systems and back-office technology.',
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.webp',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://kvaornux.com/igaming-case-studies/us-sweepstakes-casino-platform-development',
          name: 'Dual-Currency Sweepstakes & Social Casino Platform Engineering',
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://kvaornux.com/igaming-case-studies/high-load-sportsbook-platform-development',
          name: 'High-Load Sportsbook & Live Betting Platform Engineering',
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: 'https://kvaornux.com/igaming-case-studies/multi-currency-crypto-casino-platform',
          name: 'Multi-Currency Crypto & Fiat Casino Platform Architecture',
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: 'https://kvaornux.com/igaming-case-studies/casino-game-aggregator-api-architecture',
          name: 'Unified Casino Game Aggregator API & Back-Office Reconciliation Engine',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <CaseStudiesClient />
    </>
  );
}
