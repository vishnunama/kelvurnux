import type { Metadata } from 'next';
import LicensingHubClient from './LicensingHubClient';

export const metadata: Metadata = {
  title: 'iGaming Licensing & Regulations',
  description:
    'Explore gaming licence requirements, costs, application steps and official resources. Plan the software for your casino or sportsbook with Kvaornux.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing',
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
    title: 'iGaming Licensing & Regulations | Kvaornux',
    description:
      'Explore gaming licence requirements, costs, application steps and official resources. Plan the software for your casino or sportsbook with Kvaornux.',
    url: 'https://kvaornux.com/igaming-licensing',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'iGaming Licensing & Regulations | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGaming Licensing & Regulations | Kvaornux',
    description:
      'Explore gaming licence requirements, costs, application steps and official resources. Plan the software for your casino or sportsbook with Kvaornux.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function LicensingHubPage() {
  return <LicensingHubClient />;
}

