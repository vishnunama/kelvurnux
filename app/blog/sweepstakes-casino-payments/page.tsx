import type { Metadata } from 'next';
import { faqList } from './faqData';
import SweepstakesPaymentsClient from './SweepstakesPaymentsClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Sweepstakes Casino Payments in 2026: Methods, Gateways & Redemptions | KVAORNUX',
  },
  description:
    'Explore sweepstakes casino payment processing in 2026. Learn how operators handle Gold Coin purchases, Sweeps Coin prize redemptions, merchant gateways, and KYC verification.',
  alternates: {
    canonical: '/blog/sweepstakes-casino-payments',
  },
  openGraph: {
    title: 'Sweepstakes Casino Payments in 2026: Methods, Gateways & Redemptions | KVAORNUX',
    description:
      'Explore sweepstakes casino payment processing in 2026. Learn how operators handle Gold Coin purchases, Sweeps Coin prize redemptions, merchant gateways, and KYC verification.',
    url: 'https://kvaornux.com/blog/sweepstakes-casino-payments',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/sweepstakes-casino-payments-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Sweepstakes Casino Payments in 2026: Methods, Gateways and Redemptions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweepstakes Casino Payments in 2026: Methods, Gateways & Redemptions | KVAORNUX',
    description:
      'Explore sweepstakes casino payment processing in 2026. Learn how operators handle Gold Coin purchases, Sweeps Coin prize redemptions, merchant gateways, and KYC verification.',
    images: ['https://kvaornux.com/assets/features/sweepstakes-casino-payments-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Sweepstakes Casino Payments in 2026: Methods, Gateways & Redemptions',
    description:
      'Explore sweepstakes casino payment processing in 2026. Learn how operators handle Gold Coin purchases, Sweeps Coin prize redemptions, merchant gateways, and KYC verification.',
    image: 'https://kvaornux.com/assets/features/sweepstakes-casino-payments-banner.webp',
    url: 'https://kvaornux.com/blog/sweepstakes-casino-payments',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/sweepstakes-casino-payments',
    },
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
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
        name: 'Sweepstakes Casino Payments in 2026',
        item: 'https://kvaornux.com/blog/sweepstakes-casino-payments',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <SweepstakesPaymentsClient />
    </>
  );
}
