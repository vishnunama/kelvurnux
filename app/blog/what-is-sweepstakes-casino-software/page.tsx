import type { Metadata } from 'next';
import { faqList } from './faqData';
import SweepstakesSoftwareBlogClient from './SweepstakesSoftwareBlogClient';



export const metadata: Metadata = {
  title: {
    absolute: 'What Is Sweepstakes Casino Software? Operator Guide | Kvaornux',
  },
  description:
    'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
  alternates: {
    canonical: '/blog/what-is-sweepstakes-casino-software',
  },
  openGraph: {
    title: 'What Is Sweepstakes Casino Software? Operator Guide | Kvaornux',
    description:
      'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
    url: 'https://kvaornux.com/blog/what-is-sweepstakes-casino-software',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'What Is Sweepstakes Casino Software? Operator Guide | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Sweepstakes Casino Software? Operator Guide | Kvaornux',
    description:
      'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'What Is Sweepstakes Casino Software? A Complete Guide for Operators',
    description:
      'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
    image: 'https://kvaornux.com/assets/og-image.webp',
    url: 'https://kvaornux.com/blog/what-is-sweepstakes-casino-software',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/what-is-sweepstakes-casino-software',
    },
    datePublished: '2026-10-06',
    dateModified: '2026-10-14',
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
        name: 'What Is Sweepstakes Casino Software?',
        item: 'https://kvaornux.com/blog/what-is-sweepstakes-casino-software',
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
      <SweepstakesSoftwareBlogClient />
    </>
  );
}
