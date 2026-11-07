import type { Metadata } from 'next';
import LicensingHubClient from './LicensingHubClient';

export const metadata: Metadata = {
  title: 'iGaming Licensing & Regulations | Kvaornux',
  description:
    'Explore licensing requirements, application steps and official resources to help you plan your casino or sportsbook project.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing',
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

export default function LicensingHubPage() {
  return <LicensingHubClient />;
}

