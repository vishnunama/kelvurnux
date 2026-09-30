import type { Metadata } from 'next';
import CustomIgamingClient from './CustomIgamingClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Bespoke iGaming Solutions & Custom Development | Kvaornux',
  },
  description:
    'Build a bespoke iGaming platform around your business model with custom development, API integrations, platform modules and scalable infrastructure.',
  alternates: {
    canonical: '/custom-igaming-solution',
  },
  openGraph: {
    title: 'Bespoke iGaming Solutions & Custom Development | Kvaornux',
    description:
      'Build a bespoke iGaming platform around your business model with custom development, API integrations, platform modules and scalable infrastructure.',
    url: 'https://kvaornux.com/custom-igaming-solution',
    siteName: 'Kvaornux',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bespoke iGaming Solutions & Custom Development | Kvaornux',
    description:
      'Build a bespoke iGaming platform around your business model with custom development, API integrations, platform modules and scalable infrastructure.',
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
        name: 'Bespoke iGaming Solutions',
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