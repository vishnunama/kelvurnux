import type { Metadata } from 'next';
import CryptoIgamingClient from './CryptoIgamingClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Crypto iGaming Solutions | Bitcoin & Crypto Casino Software | Kvaornux',
  },
  description:
    'Launch scalable crypto casino and sportsbook platforms with multi-currency Web3 wallets, instant deposits, game APIs, and full back-office control.',
  alternates: {
    canonical: '/crypto-igaming-solutions',
  },
  openGraph: {
    title: 'Crypto iGaming Solutions | Bitcoin & Crypto Casino Software | Kvaornux',
    description:
      'Launch scalable crypto casino and sportsbook platforms with multi-currency Web3 wallets, instant deposits, game APIs, and full back-office control.',
    url: 'https://kvaornux.com/crypto-igaming-solutions',
    siteName: 'Kvaornux',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto iGaming Solutions | Bitcoin & Crypto Casino Software | Kvaornux',
    description:
      'Launch scalable crypto casino and sportsbook platforms with multi-currency Web3 wallets, instant deposits, game APIs, and full back-office control.',
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
        name: 'Crypto iGaming Solutions',
        item: 'https://kvaornux.com/crypto-igaming-solutions',
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
