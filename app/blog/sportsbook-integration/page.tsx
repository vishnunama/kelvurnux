import type { Metadata } from 'next';
import { faqList } from './faqData';
import SportsbookIntegrationClient from './SportsbookIntegrationClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Sportsbook Integration for Existing Casinos | KVAORNUX',
  },
  description:
    'Adding sports betting to your casino? Compare sportsbook integration options and test player login, wallets, bet settlement and reporting before launch.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/blog/sportsbook-integration',
  },
  openGraph: {
    title: 'Sportsbook Integration for Existing Casinos | KVAORNUX',
    description:
      'Adding sports betting to your casino? Compare sportsbook integration options and test player login, wallets, bet settlement and reporting before launch.',
    url: 'https://kvaornux.com/blog/sportsbook-integration',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/sportsbook-integration-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Sportsbook Integration for Existing Casinos | KVAORNUX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sportsbook Integration for Existing Casinos | KVAORNUX',
    description:
      'Adding sports betting to your casino? Compare sportsbook integration options and test player login, wallets, bet settlement and reporting before launch.',
    images: ['https://kvaornux.com/assets/features/sportsbook-integration-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Sportsbook Integration: How to Add Sports Betting to an Existing Casino',
    description:
      'Adding sports betting to your casino? Compare sportsbook integration options and test player login, wallets, bet settlement and reporting before launch.',
    image: 'https://kvaornux.com/assets/features/sportsbook-integration-banner.webp',
    url: 'https://kvaornux.com/blog/sportsbook-integration',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/sportsbook-integration',
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
        name: 'Sportsbook Integration',
        item: 'https://kvaornux.com/blog/sportsbook-integration',
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
      <SportsbookIntegrationClient />
    </>
  );
}

