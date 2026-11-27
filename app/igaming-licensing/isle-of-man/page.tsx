import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { isleOfManData } from './data';

export const metadata: Metadata = {
  title: 'Isle of Man Gaming License: Costs & Requirements',
  description:
    'See Isle of Man gaming licence fees, Full Licence and Sub-Licence options, application requirements and the official GSC register.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/isle-of-man',
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
    title: 'Isle of Man Gaming License: Costs & Requirements | Kvaornux',
    description:
      'See Isle of Man gaming licence fees, Full Licence and Sub-Licence options, application requirements and the official GSC register.',
    url: 'https://kvaornux.com/igaming-licensing/isle-of-man',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isle of Man Gaming License: Costs & Requirements | Kvaornux',
    description:
      'See Isle of Man gaming licence fees, Full Licence and Sub-Licence options, application requirements and the official GSC register.',
  },
};

export default function IsleOfManLicensingPage() {
  return <JurisdictionDetailClient data={isleOfManData} />;
}
