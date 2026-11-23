import type { Metadata } from 'next';
import SportsbookSoftwareClient from './SportsbookSoftwareClient';
import { SPORTSBOOK_SOFTWARE_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Sportsbook Software and Sports Betting Platform for Operators',
  },
  description:
    'Buy enterprise sportsbook software and sports betting platforms. Real-time odds feeds across 80+ sports, live in-play betting, automated liability risk desk, and turnkey solutions.',
  alternates: {
    canonical: 'https://kvaornux.com/sportsbook-software',
  },
  openGraph: {
    title: 'Sportsbook Software and Sports Betting Platform for Operators',
    description:
      'Buy enterprise sportsbook software and sports betting platforms. Real-time odds feeds across 80+ sports, live in-play betting, automated liability risk desk, and turnkey solutions.',
    url: 'https://kvaornux.com/sportsbook-software',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/products-and-portfolio-of-white-label-sportsbook-platform.webp',
        width: 1200,
        height: 630,
        alt: 'Sportsbook Software and Sports Betting Platform Solutions | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sportsbook Software and Sports Betting Platform for Operators',
    description:
      'Buy enterprise sportsbook software and sports betting platforms. Real-time odds feeds across 80+ sports, live in-play betting, automated liability risk desk, and turnkey solutions.',
    images: ['https://kvaornux.com/assets/features/products-and-portfolio-of-white-label-sportsbook-platform.webp'],
  },
};

export default function SportsbookSoftwarePage() {
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
        name: 'Sportsbook Software',
        item: 'https://kvaornux.com/sportsbook-software',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/sportsbook-software#service',
    name: 'Sportsbook Software and Sports Betting Platform Solutions',
    serviceType: 'Sportsbook Software Platform & Sports Betting Engineering',
    description:
      'Enterprise sportsbook software provider engineering modern sports betting platforms, sub-second live odds feeds, automated trading desks, player account management (PAM), and turnkey solutions.',
    url: 'https://kvaornux.com/sportsbook-software',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sportsbook Software Delivery Models',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'White Label Sportsbook Software',
            description:
              'Rapid-deployment branded online sportsbook software with official odds feeds, responsive mobile UI, and turnkey back-office management.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Turnkey Sportsbook Software Platform',
            description:
              'Complete turnkey sports betting software with casino aggregator connectivity, omnichannel player wallet, automated trading desk, and multi-tier agent network.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bespoke Custom Sportsbook Platform Development',
            description:
              'Custom sports betting software architecture built specifically for tier-1 operators, featuring dedicated microservices, proprietary risk algorithms, and source code ownership per agreement.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SPORTSBOOK_SOFTWARE_FAQS.map((faq) => ({
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
      <SportsbookSoftwareClient />
    </>
  );
}
