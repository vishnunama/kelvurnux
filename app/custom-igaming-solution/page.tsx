import type { Metadata } from 'next';
import CustomIgamingClient from './CustomIgamingClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Custom iGaming Solution | Bespoke Casino & Sportsbook Development | Kvaornux',
  },
  description:
    'Build a custom iGaming platform tailored to your business model with bespoke features, multi-payment gateways, game API integrations, and scalable infrastructure.',
  alternates: {
    canonical: '/custom-igaming-solution',
  },
  openGraph: {
    title: 'Custom iGaming Solution | Bespoke Casino & Sportsbook Development | Kvaornux',
    description:
      'Build a custom iGaming platform tailored to your business model with bespoke features, multi-payment gateways, game API integrations, and scalable infrastructure.',
    url: 'https://kvaornux.com/custom-igaming-solution',
    siteName: 'Kvaornux',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom iGaming Solution | Bespoke Casino & Sportsbook Development | Kvaornux',
    description:
      'Build a custom iGaming platform tailored to your business model with bespoke features, multi-payment gateways, game API integrations, and scalable infrastructure.',
  },
};

export default function CustomIgamingPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kvaornux.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Custom iGaming Solution',
        item: 'https://kvaornux.com/custom-igaming-solution',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CustomIgamingClient />
    </>
  );
}