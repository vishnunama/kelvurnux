import type { Metadata } from 'next';
import WalletModelsBlogClient from './WalletModelsBlogClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Seamless Wallet vs Transfer Wallet in iGaming | Kvaornux',
  },
  description:
    'Compare seamless wallet and transfer wallet models in iGaming, including balance management, bet and win transactions, fund transfers, reconciliation and integration architecture.',
  alternates: {
    canonical: '/blog/seamless-wallet-vs-transfer-wallet-igaming',
  },
  openGraph: {
    title: 'Seamless Wallet vs Transfer Wallet in iGaming | Kvaornux',
    description:
      'Compare seamless wallet and transfer wallet models in iGaming, including balance management, bet and win transactions, fund transfers, reconciliation and integration architecture.',
    url: 'https://kvaornux.com/blog/seamless-wallet-vs-transfer-wallet-igaming',
    siteName: 'Kvaornux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seamless Wallet vs Transfer Wallet in iGaming | Kvaornux',
    description:
      'Compare seamless wallet and transfer wallet models in iGaming, including balance management, bet and win transactions, fund transfers, reconciliation and integration architecture.',
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Seamless Wallet vs Transfer Wallet in iGaming',
    description:
      'Compare seamless wallet and transfer wallet models in iGaming, including balance management, bet and win transactions, fund transfers, reconciliation and integration architecture.',
    image: 'https://kvaornux.com/assets/features/igaming-financial-reconciliation-auto-invoices.webp',
    url: 'https://kvaornux.com/blog/seamless-wallet-vs-transfer-wallet-igaming',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/seamless-wallet-vs-transfer-wallet-igaming',
    },
    datePublished: '2026-09-28',
    dateModified: '2026-09-28',
    author: {
      '@type': 'Organization',
      name: 'Kvaornux Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.png',
      },
    },
  };

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
        name: 'Blog',
        item: 'https://kvaornux.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Seamless Wallet vs Transfer Wallet in iGaming',
        item: 'https://kvaornux.com/blog/seamless-wallet-vs-transfer-wallet-igaming',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WalletModelsBlogClient />
    </>
  );
}
