import type { Metadata } from 'next';
import CryptoIgamingClient from './CryptoIgamingClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Crypto Casino Software & Development | Kvaornux',
  },
  description:
    'Launch a crypto casino with white-label, turnkey or custom software. Kvaornux connects games, crypto payments and back-office tools for your business.',
  alternates: {
    canonical: '/crypto-casino-software',
  },
  openGraph: {
    title: 'Crypto Casino Software & Development | Kvaornux',
    description:
      'Launch a crypto casino with white-label, turnkey or custom software. Kvaornux connects games, crypto payments and back-office tools for your business.',
    url: 'https://kvaornux.com/crypto-casino-software',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Crypto Casino Software | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Casino Software & Development | Kvaornux',
    description:
      'Launch a crypto casino with white-label, turnkey or custom software. Kvaornux connects games, crypto payments and back-office tools for your business.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function CryptoIgamingPage() {
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
        name: 'Crypto Casino Software',
        item: 'https://kvaornux.com/crypto-casino-software',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CryptoIgamingClient />
    </>
  );
}
