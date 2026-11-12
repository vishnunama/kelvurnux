import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { isleOfManData } from './data';

export const metadata: Metadata = {
  title: 'Isle of Man Gaming License | iGaming Licensing & Regulations | Kvaornux',
  description:
    'Operational guide for the Isle of Man Gambling Supervision Commission (GSC) Tier-1 framework, OGRA licensing standards, and platform technical readiness.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/isle-of-man',
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

export default function IsleOfManLicensingPage() {
  return <JurisdictionDetailClient data={isleOfManData} />;
}

