import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { anjouanData } from './data';

export const metadata: Metadata = {
  title: 'Anjouan Gaming License: Costs & Requirements | Kvaornux',
  description:
    'Explore Anjouan gaming licence fees, requirements, application steps and verification checks. Understand what to confirm before planning your casino platform.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/anjouan',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: 'Anjouan Gaming License: Costs & Requirements | Kvaornux',
    description:
      'Explore Anjouan gaming licence fees, requirements, application steps and verification checks. Understand what to confirm before planning your casino platform.',
    url: 'https://kvaornux.com/igaming-licensing/anjouan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anjouan Gaming License: Costs & Requirements | Kvaornux',
    description:
      'Explore Anjouan gaming licence fees, requirements, application steps and verification checks. Understand what to confirm before planning your casino platform.',
  },
};

export default function AnjouanLicensingPage() {
  return <JurisdictionDetailClient data={anjouanData} />;
}

