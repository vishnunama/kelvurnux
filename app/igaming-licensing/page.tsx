import type { Metadata } from 'next';
import LicensingHubClient from './LicensingHubClient';

export const metadata: Metadata = {
  title: 'iGaming Licensing & Regulations | Kvaornux',
  description:
    'Explore gaming licence requirements, costs, application steps and official resources. Plan the software for your casino or sportsbook with Kvaornux.',
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

