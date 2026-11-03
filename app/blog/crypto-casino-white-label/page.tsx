import type { Metadata } from 'next';
import { faqList } from './faqData';
import CryptoCasinoWhiteLabelClient from './CryptoCasinoWhiteLabelClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Crypto Casino White Label: 7 Checks Before You Sign | Kvaornux',
  },
  description:
    'Choosing a crypto casino white label provider? Use these seven demo and contract checks to compare wallets, games, fees, withdrawals and ownership.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/blog/crypto-casino-white-label',
  },
  openGraph: {
    title: 'Crypto Casino White Label: 7 Checks Before You Sign | Kvaornux',
    description:
      'Choosing a crypto casino white label provider? Use these seven demo and contract checks to compare wallets, games, fees, withdrawals and ownership.',
    url: 'https://kvaornux.com/blog/crypto-casino-white-label',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Crypto Casino White Label: 7 Checks Before You Sign | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Casino White Label: 7 Checks Before You Sign | Kvaornux',
    description:
      'Choosing a crypto casino white label provider? Use these seven demo and contract checks to compare wallets, games, fees, withdrawals and ownership.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Crypto Casino White Label: 7 Checks Before You Sign',
    description:
      'Choosing a crypto casino white label provider? Use these seven demo and contract checks to compare wallets, games, fees, withdrawals and ownership.',
    image: 'https://kvaornux.com/assets/features/crypto-casino-white-label-banner.webp',
    url: 'https://kvaornux.com/blog/crypto-casino-white-label',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/crypto-casino-white-label',
    },
    datePublished: '2026-11-03',
    dateModified: '2026-11-03',
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
        name: 'Crypto Casino White Label',
        item: 'https://kvaornux.com/blog/crypto-casino-white-label',
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <CryptoCasinoWhiteLabelClient />
    </>
  );
}

