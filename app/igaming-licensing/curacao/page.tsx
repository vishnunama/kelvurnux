import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { curacaoData } from './data';

export const metadata: Metadata = {
  title: 'Curaçao Gaming License: Costs & Requirements',
  description:
    'Explore Curaçao gaming licence costs, requirements, application steps and official CGA resources. Plan your casino or sportsbook software with Kvaornux.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/curacao',
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
    title: 'Curaçao Gaming License: Costs & Requirements | Kvaornux',
    description:
      'Explore Curaçao gaming licence costs, requirements, application steps and official CGA resources. Plan your casino or sportsbook software with Kvaornux.',
    url: 'https://kvaornux.com/igaming-licensing/curacao',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curaçao Gaming License: Costs & Requirements | Kvaornux',
    description:
      'Explore Curaçao gaming licence costs, requirements, application steps and official CGA resources. Plan your casino or sportsbook software with Kvaornux.',
  },
};

export default function CuracaoLicensingPage() {
  return <JurisdictionDetailClient data={curacaoData} />;
}

