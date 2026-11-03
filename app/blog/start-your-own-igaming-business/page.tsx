import type { Metadata } from 'next';
import { faqList } from './faqData';
import StartYourOwnIgamingBusinessClient from './StartYourOwnIgamingBusinessClient';

export const metadata: Metadata = {
  title: {
    absolute: 'How to Start Your Own iGaming Business | KVAORNUX',
  },
  description:
    'Start your own iGaming business with a practical operator checklist. Compare quotes, test games and payments, and decide when you’re ready to launch.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/blog/start-your-own-igaming-business',
  },
  openGraph: {
    title: 'How to Start Your Own iGaming Business | KVAORNUX',
    description:
      'Start your own iGaming business with a practical operator checklist. Compare quotes, test games and payments, and decide when you’re ready to launch.',
    url: 'https://kvaornux.com/blog/start-your-own-igaming-business',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/start-your-own-igaming-business-banner.webp',
        width: 1200,
        height: 630,
        alt: 'How to Start Your Own iGaming Business | KVAORNUX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Start Your Own iGaming Business | KVAORNUX',
    description:
      'Start your own iGaming business with a practical operator checklist. Compare quotes, test games and payments, and decide when you’re ready to launch.',
    images: ['https://kvaornux.com/assets/features/start-your-own-igaming-business-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How to Start Your Own iGaming Business: A Launch Checklist for Operators',
    description:
      'Start your own iGaming business with a practical operator checklist. Compare quotes, test games and payments, and decide when you’re ready to launch.',
    image: 'https://kvaornux.com/assets/features/start-your-own-igaming-business-banner.webp',
    url: 'https://kvaornux.com/blog/start-your-own-igaming-business',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/start-your-own-igaming-business',
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
        name: 'Start Your Own iGaming Business',
        item: 'https://kvaornux.com/blog/start-your-own-igaming-business',
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
      <StartYourOwnIgamingBusinessClient />
    </>
  );
}

