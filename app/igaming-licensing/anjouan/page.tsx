import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { anjouanData } from './data';

export const metadata: Metadata = {
  title: 'Anjouan Gaming License | iGaming Licensing & Regulations | Kvaornux',
  description:
    'Operational and regulatory reference guide for the Anjouan offshore gaming license, covering statutory frameworks, application requirements, and technical casino platform planning.',
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
};

export default function AnjouanLicensingPage() {
  return <JurisdictionDetailClient data={anjouanData} />;
}

