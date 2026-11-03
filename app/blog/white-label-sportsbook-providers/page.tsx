import type { Metadata } from 'next';
import { faqList } from './faqData';
import WhiteLabelSportsbookProvidersClient from './WhiteLabelSportsbookProvidersClient';

export const metadata: Metadata = {
  title: {
    absolute: 'White Label Sportsbook Providers: How to Compare | KVAORNUX',
  },
  description:
    'Compare white label sportsbook providers by sports coverage, trading controls, fees, match-day support and player data access before signing.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/blog/white-label-sportsbook-providers',
  },
  openGraph: {
    title: 'White Label Sportsbook Providers: How to Compare | KVAORNUX',
    description:
      'Compare white label sportsbook providers by sports coverage, trading controls, fees, match-day support and player data access before signing.',
    url: 'https://kvaornux.com/blog/white-label-sportsbook-providers',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/white-label-sportsbook-providers-banner.webp',
        width: 1200,
        height: 630,
        alt: 'White Label Sportsbook Providers: How to Compare | KVAORNUX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Label Sportsbook Providers: How to Compare | KVAORNUX',
    description:
      'Compare white label sportsbook providers by sports coverage, trading controls, fees, match-day support and player data access before signing.',
    images: ['https://kvaornux.com/assets/features/white-label-sportsbook-providers-banner.webp'],
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'White Label Sportsbook Providers: How to Compare Before You Sign',
    description:
      'Compare white label sportsbook providers by sports coverage, trading controls, fees, match-day support and player data access before signing.',
    image: 'https://kvaornux.com/assets/features/white-label-sportsbook-providers-banner.webp',
    url: 'https://kvaornux.com/blog/white-label-sportsbook-providers',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/white-label-sportsbook-providers',
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
        name: 'White Label Sportsbook Providers',
        item: 'https://kvaornux.com/blog/white-label-sportsbook-providers',
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
      <WhiteLabelSportsbookProvidersClient />
    </>
  );
}

