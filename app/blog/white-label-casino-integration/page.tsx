import type { Metadata } from 'next';
import { faqList } from './faqData';
import WhiteLabelCasinoIntegrationClient from './WhiteLabelCasinoIntegrationClient';

export const metadata: Metadata = {
  title: {
    absolute: 'White Label Casino Integration: Games, Payments & Wallets | KVAORNUX',
  },
  description:
    'Learn how white label casino integration connects games, payments and wallets. See what to confirm in your quote and test before launch.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/blog/white-label-casino-integration',
  },
  openGraph: {
    title: 'White Label Casino Integration: Games, Payments & Wallets | KVAORNUX',
    description:
      'Learn how white label casino integration connects games, payments and wallets. See what to confirm in your quote and test before launch.',
    url: 'https://kvaornux.com/blog/white-label-casino-integration',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/white-label-casino-integration-banner.webp',
        width: 1200,
        height: 630,
        alt: 'White Label Casino Integration: Games, Payments & Wallets | KVAORNUX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Label Casino Integration: Games, Payments & Wallets | KVAORNUX',
    description:
      'Learn how white label casino integration connects games, payments and wallets. See what to confirm in your quote and test before launch.',
    images: ['https://kvaornux.com/assets/features/white-label-casino-integration-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'White Label Casino Integration: How Games, Payments and Wallets Work Together',
    description:
      'Learn how white label casino integration connects games, payments and wallets. See what to confirm in your quote and test before launch.',
    image: 'https://kvaornux.com/assets/features/white-label-casino-integration-banner.webp',
    url: 'https://kvaornux.com/blog/white-label-casino-integration',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/white-label-casino-integration',
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
        name: 'White Label Casino Integration',
        item: 'https://kvaornux.com/blog/white-label-casino-integration',
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
      <WhiteLabelCasinoIntegrationClient />
    </>
  );
}

