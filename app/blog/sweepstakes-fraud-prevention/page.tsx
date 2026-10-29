import type { Metadata } from 'next';
import { faqList } from './faqData';
import SweepstakesFraudPreventionClient from './SweepstakesFraudPreventionClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Sweepstakes Fraud Prevention: 2026 Operator Guide | Kvaornux',
  },
  description:
    'Learn how sweepstakes operators prevent fraud in 2026. Explore multi-accounting defense, payment chargeback mitigation, KYC workflows, and wallet protection.',
  alternates: {
    canonical: '/blog/sweepstakes-fraud-prevention',
  },
  openGraph: {
    title: 'Sweepstakes Fraud Prevention: 2026 Operator Guide | Kvaornux',
    description:
      'Learn how sweepstakes operators prevent fraud in 2026. Explore multi-accounting defense, payment chargeback mitigation, KYC workflows, and wallet protection.',
    url: 'https://kvaornux.com/blog/sweepstakes-fraud-prevention',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/sweepstakes-fraud-prevention-banner.webp',
        width: 1376,
        height: 768,
        alt: 'Sweepstakes Fraud Prevention: 2026 Operator Guide | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweepstakes Fraud Prevention: 2026 Operator Guide | Kvaornux',
    description:
      'Learn how sweepstakes operators prevent fraud in 2026. Explore multi-accounting defense, payment chargeback mitigation, KYC workflows, and wallet protection.',
    images: ['https://kvaornux.com/assets/features/sweepstakes-fraud-prevention-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Sweepstakes Fraud Prevention in 2026: An Operator's Guide",
    description:
      'Learn how sweepstakes operators prevent fraud in 2026. Explore multi-accounting defense, payment chargeback mitigation, KYC workflows, and wallet protection.',
    image: 'https://kvaornux.com/assets/features/sweepstakes-fraud-prevention-banner.webp',
    url: 'https://kvaornux.com/blog/sweepstakes-fraud-prevention',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/sweepstakes-fraud-prevention',
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
        name: 'Sweepstakes Fraud Prevention',
        item: 'https://kvaornux.com/blog/sweepstakes-fraud-prevention',
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
      <SweepstakesFraudPreventionClient />
    </>
  );
}
