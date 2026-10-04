import type { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'iGaming Case Studies & Development Portfolio | Kvaornux',
  description:
    'Explore Kvaornux iGaming case studies covering casino platform development, game integrations, payments, wallets, affiliate systems and back-office technology.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-case-studies/',
  },
  openGraph: {
    title: 'iGaming Case Studies & Development Portfolio | Kvaornux',
    description:
      'Explore Kvaornux iGaming case studies covering casino platform development, game integrations, payments, wallets, affiliate systems and back-office technology.',
    url: 'https://kvaornux.com/igaming-case-studies/',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/case-studies/lakebets/lakebets-casino-platform-development.webp',
        width: 1200,
        height: 630,
        alt: 'Kvaornux iGaming Case Studies & Development Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGaming Case Studies & Development Portfolio | Kvaornux',
    description:
      'Explore Kvaornux iGaming case studies covering casino platform development, game integrations, payments, wallets, affiliate systems and back-office technology.',
    images: ['https://kvaornux.com/assets/case-studies/lakebets/lakebets-casino-platform-development.webp'],
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
        item: 'https://kvaornux.com/igaming-case-studies/',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kvaornux.com/igaming-case-studies/',
    url: 'https://kvaornux.com/igaming-case-studies/',
    name: 'iGaming Development Case Studies',
    description:
      'Explore Kvaornux iGaming case studies covering casino platform development, game integrations, payments, wallets, affiliate systems and back-office technology.',
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://kvaornux.com/igaming-case-studies/casino-platform-development/',
          name: 'Building a Scalable Mobile-First Casino Platform',
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://kvaornux.com/igaming-case-studies/agent-based-casino-sportsbook-platform/',
          name: 'Building a Multi-Tier Agent-Based Casino & Sportsbook Platform',
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
