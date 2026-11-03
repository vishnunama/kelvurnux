import type { Metadata } from 'next';
import { faqList } from './faqData';
import WhiteLabelVsTurnkeyCasinoClient from './WhiteLabelVsTurnkeyCasinoClient';

export const metadata: Metadata = {
  title: {
    absolute: 'White Label vs Turnkey Casino: Which Should You Choose? | KVAORNUX',
  },
  description:
    'Compare white label and turnkey casino packages by launch time, upfront cost, sportsbook inclusion, source code rights and ongoing support.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/blog/white-label-vs-turnkey-casino',
  },
  openGraph: {
    title: 'White Label vs Turnkey Casino: Which Should You Choose? | KVAORNUX',
    description:
      'Compare white label and turnkey casino packages by launch time, upfront cost, sportsbook inclusion, source code rights and ongoing support.',
    url: 'https://kvaornux.com/blog/white-label-vs-turnkey-casino',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/white-label-vs-turnkey-casino-banner.webp',
        width: 1200,
        height: 630,
        alt: 'White Label vs Turnkey Casino: Which Should You Choose? | KVAORNUX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Label vs Turnkey Casino: Which Should You Choose? | KVAORNUX',
    description:
      'Compare white label and turnkey casino packages by launch time, upfront cost, sportsbook inclusion, source code rights and ongoing support.',
    images: ['https://kvaornux.com/assets/features/white-label-vs-turnkey-casino-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'White Label vs Turnkey Casino: Which Should You Choose?',
    description:
      'Compare white label and turnkey casino packages by launch time, upfront cost, sportsbook inclusion, source code rights and ongoing support.',
    image: 'https://kvaornux.com/assets/features/white-label-vs-turnkey-casino-banner.webp',
    url: 'https://kvaornux.com/blog/white-label-vs-turnkey-casino',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/white-label-vs-turnkey-casino',
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
        name: 'White Label vs Turnkey Casino',
        item: 'https://kvaornux.com/blog/white-label-vs-turnkey-casino',
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
      <WhiteLabelVsTurnkeyCasinoClient />
    </>
  );
}

