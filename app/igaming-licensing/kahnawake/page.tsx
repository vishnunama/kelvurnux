import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { kahnawakeData } from './data';

export const metadata: Metadata = {
  title: 'Kahnawake Gaming License: Costs & Requirements',
  description:
    'See Kahnawake gaming licence fees, the January 2027 changes, application requirements and how to check a permit with the Gaming Commission.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/kahnawake',
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
    title: 'Kahnawake Gaming License: Costs & Requirements | Kvaornux',
    description:
      'See Kahnawake gaming licence fees, the January 2027 changes, application requirements and how to check a permit with the Gaming Commission.',
    url: 'https://kvaornux.com/igaming-licensing/kahnawake',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kahnawake Gaming License: Costs & Requirements | Kvaornux',
    description:
      'See Kahnawake gaming licence fees, the January 2027 changes, application requirements and how to check a permit with the Gaming Commission.',
  },
};

export default function KahnawakeLicensingPage() {
  return <JurisdictionDetailClient data={kahnawakeData} />;
}
