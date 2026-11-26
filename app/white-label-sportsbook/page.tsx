import type { Metadata } from 'next';
import WhiteLabelSportsbookClient from './WhiteLabelSportsbookClient';
import { WHITE_LABEL_SPORTSBOOK_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'White Label Sportsbook and Betting Platform Provider',
  },
  description:
    'Launch your branded white label sportsbook platform fast. Pre-integrated official odds feeds across 80+ sports, mobile betting app, crypto & fiat payments, risk desk, and casino aggregator.',
  alternates: {
    canonical: 'https://kvaornux.com/white-label-sportsbook',
  },
  openGraph: {
    title: 'White Label Sportsbook and Betting Platform Provider',
    description:
      'Launch your branded white label sportsbook platform fast. Pre-integrated official odds feeds across 80+ sports, mobile betting app, crypto & fiat payments, risk desk, and casino aggregator.',
    url: 'https://kvaornux.com/white-label-sportsbook',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/white-label-sportsbook-providers-banner.webp',
        width: 1200,
        height: 630,
        alt: 'White Label Sportsbook Software and Betting Platform | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White Label Sportsbook and Betting Platform Provider',
    description:
      'Launch your branded white label sportsbook platform fast. Pre-integrated official odds feeds across 80+ sports, mobile betting app, crypto & fiat payments, risk desk, and casino aggregator.',
    images: ['https://kvaornux.com/assets/features/white-label-sportsbook-providers-banner.webp'],
  },
};

export default function WhiteLabelSportsbookPage() {
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
        name: 'White Label Sportsbook',
        item: 'https://kvaornux.com/white-label-sportsbook',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/white-label-sportsbook#service',
    name: 'White Label Sportsbook Software and Betting Platform',
    serviceType: 'White Label Sportsbook Provider & Sports Betting Software',
    description:
      'Enterprise white label sportsbook provider delivering ready-to-launch branded sports betting websites, mobile betting apps, crypto sportsbooks, fantasy sports, and betting exchange platforms.',
    url: 'https://kvaornux.com/white-label-sportsbook',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'White Label Sportsbook Launch Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Starter White Label Sportsbook Website',
            description:
              'Branded online white label sports betting site with official odds feeds, responsive mobile PWA UI, fiat/crypto cashier, and admin back office.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Omnichannel White Label Sportsbook & Casino Suite',
            description:
              'Complete white label online casino and sportsbook software solution with 80+ sports, 10,000+ casino games, native Android app, and automated risk desk.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hybrid Turnkey & Crypto Exchange Upgrade',
            description:
              'Tailored white label crypto sportsbook platform, betting exchange, or daily fantasy sports setup with contractual upgrade paths to standalone Turnkey ownership.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: WHITE_LABEL_SPORTSBOOK_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WhiteLabelSportsbookClient />
    </>
  );
}
