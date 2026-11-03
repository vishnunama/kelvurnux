import type { Metadata } from 'next';
import { faqList } from './faqData';
import GamblingSoftwareForSaleClient from './GamblingSoftwareForSaleClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Gambling Software for Sale: Casino Buyer’s Guide | KVAORNUX',
  },
  description:
    'Buying gambling software? Compare casino platform quotes, source code rights, game API fees and support before you sign.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/blog/gambling-software-for-sale',
  },
  openGraph: {
    title: 'Gambling Software for Sale: Casino Buyer’s Guide | KVAORNUX',
    description:
      'Buying gambling software? Compare casino platform quotes, source code rights, game API fees and support before you sign.',
    url: 'https://kvaornux.com/blog/gambling-software-for-sale',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/gambling-software-for-sale-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Gambling Software for Sale: Casino Buyer’s Guide | KVAORNUX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gambling Software for Sale: Casino Buyer’s Guide | KVAORNUX',
    description:
      'Buying gambling software? Compare casino platform quotes, source code rights, game API fees and support before you sign.',
    images: ['https://kvaornux.com/assets/features/gambling-software-for-sale-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Gambling Software for Sale: What to Check Before Buying a Casino Platform',
    description:
      'Buying gambling software? Compare casino platform quotes, source code rights, game API fees and support before you sign.',
    image: 'https://kvaornux.com/assets/features/gambling-software-for-sale-banner.webp',
    url: 'https://kvaornux.com/blog/gambling-software-for-sale',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/gambling-software-for-sale',
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
        name: 'Gambling Software for Sale',
        item: 'https://kvaornux.com/blog/gambling-software-for-sale',
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
      <GamblingSoftwareForSaleClient />
    </>
  );
}

