import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { maltaData } from './data';

export const metadata: Metadata = {
  title: 'Malta Gaming Authority (MGA) License | iGaming Licensing & Regulations | Kvaornux',
  description:
    'Operational guide for the Malta Gaming Authority (MGA) Tier-1 framework, B2B/B2C licensing requirements, and platform technical planning.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/malta',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function MaltaLicensingPage() {
  return <JurisdictionDetailClient data={maltaData} />;
}

