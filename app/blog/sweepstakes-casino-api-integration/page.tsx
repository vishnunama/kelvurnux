import type { Metadata } from 'next';
import { faqList } from './faqData';
import SweepstakesApiBlogClient from './SweepstakesApiBlogClient';



export const metadata: Metadata = {
  title: {
    absolute: 'Sweepstakes Casino API Integration & Dual-Currency Wallets | Kvaornux',
  },
  description:
    'Learn how sweepstakes casino API integration connects games, aggregators and dual-currency wallets, including Gold Coin and Sweeps Coin sessions, wallet callbacks, bet/win transactions, rollbacks and reconciliation.',
  alternates: {
    canonical: '/blog/sweepstakes-casino-api-integration',
  },
  openGraph: {
    title: 'Sweepstakes Casino API Integration & Dual-Currency Wallets | Kvaornux',
    description:
      'Learn how sweepstakes casino API integration connects games, aggregators and dual-currency wallets, including Gold Coin and Sweeps Coin sessions, wallet callbacks, bet/win transactions, rollbacks and reconciliation.',
    url: 'https://kvaornux.com/blog/sweepstakes-casino-api-integration',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Sweepstakes Casino API Integration & Dual-Currency Wallets | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweepstakes Casino API Integration & Dual-Currency Wallets | Kvaornux',
    description:
      'Learn how sweepstakes casino API integration connects games, aggregators and dual-currency wallets, including Gold Coin and Sweeps Coin sessions, wallet callbacks, bet/win transactions, rollbacks and reconciliation.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Sweepstakes Casino API Integration: How Games Connect to Dual-Currency Wallets',
    description:
      'Learn how sweepstakes casino API integration connects games, aggregators and dual-currency wallets, including Gold Coin and Sweeps Coin sessions, wallet callbacks, bet/win transactions, rollbacks and reconciliation.',
    image: 'https://kvaornux.com/assets/features/sweepstakes-casino-api-integration-banner.jpg',
    url: 'https://kvaornux.com/blog/sweepstakes-casino-api-integration',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/sweepstakes-casino-api-integration',
    },
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    author: {
      '@type': 'Organization',
      name: 'Kvaornux Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.webp',
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
        name: 'Sweepstakes Casino API Integration',
        item: 'https://kvaornux.com/blog/sweepstakes-casino-api-integration',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SweepstakesApiBlogClient />
    </>
  );
}
