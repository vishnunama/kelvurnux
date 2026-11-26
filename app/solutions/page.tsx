import type { Metadata } from 'next';
import SolutionsHubClient from './SolutionsHubClient';

export const metadata: Metadata = {
  title: {
    absolute: 'All iGaming, Casino and Sportsbook Solutions | Kvaornux',
  },
  description:
    'Explore all Kvaornux iGaming solutions: turnkey casino & sportsbook platforms, white label solutions, sportsbook API integrations, bookmaker PPH software, crypto & sweepstakes casinos, and dedicated developers.',
  alternates: {
    canonical: 'https://kvaornux.com/solutions',
  },
  openGraph: {
    title: 'All iGaming, Casino and Sportsbook Solutions | Kvaornux',
    description:
      'Explore all Kvaornux iGaming solutions: turnkey casino & sportsbook platforms, white label solutions, sportsbook API integrations, bookmaker PPH software, crypto & sweepstakes casinos, and dedicated developers.',
    url: 'https://kvaornux.com/solutions',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'All Kvaornux iGaming Solutions Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All iGaming, Casino and Sportsbook Solutions | Kvaornux',
    description:
      'Explore all Kvaornux iGaming solutions: turnkey casino & sportsbook platforms, white label solutions, sportsbook API integrations, bookmaker PPH software, crypto & sweepstakes casinos, and dedicated developers.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function SolutionsPage() {
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
        name: 'Solutions',
        item: 'https://kvaornux.com/solutions',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kvaornux.com/solutions',
    url: 'https://kvaornux.com/solutions',
    name: 'Kvaornux iGaming Solutions Directory',
    description:
      'Complete directory of Kvaornux turnkey, white-label, API aggregation, sportsbook, bookmaker, crypto, sweepstakes, and custom iGaming engineering solutions.',
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
      <SolutionsHubClient />
    </>
  );
}
