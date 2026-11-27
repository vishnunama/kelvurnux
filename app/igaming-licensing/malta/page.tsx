import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { maltaData } from './data';

export const metadata: Metadata = {
  title: 'Malta Gaming License: Costs & Requirements',
  description:
    'See Malta gaming licence costs, MGA requirements and application steps for online casino and sportsbook operators. Learn how to verify a licence.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/malta',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Malta Gaming License: Costs & Requirements | Kvaornux',
    description:
      'See Malta gaming licence costs, MGA requirements and application steps for online casino and sportsbook operators. Learn how to verify a licence.',
    url: 'https://kvaornux.com/igaming-licensing/malta',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malta Gaming License: Costs & Requirements | Kvaornux',
    description:
      'See Malta gaming licence costs, MGA requirements and application steps for online casino and sportsbook operators. Learn how to verify a licence.',
  },
};

export default function MaltaLicensingPage() {
  return <JurisdictionDetailClient data={maltaData} />;
}
