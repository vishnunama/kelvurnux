import type { Metadata } from 'next';
import SportsbookDeveloperClient from './SportsbookDeveloperClient';
import { SPORTSBOOK_DEVELOPER_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Sportsbook Developer for Custom Sports Betting Websites',
  },
  description:
    'Hire a dedicated sportsbook developer or sportsbook development company for custom sports betting websites, sportsbook API integration, live betting engines, and turnkey solutions.',
  alternates: {
    canonical: 'https://kvaornux.com/sportsbook-developer',
  },
  openGraph: {
    title: 'Sportsbook Developer for Custom Sports Betting Websites',
    description:
      'Hire a dedicated sportsbook developer or sportsbook development company for custom sports betting websites, sportsbook API integration, live betting engines, and turnkey solutions.',
    url: 'https://kvaornux.com/sportsbook-developer',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/products-and-portfolio-of-white-label-sportsbook-platform.webp',
        width: 1200,
        height: 630,
        alt: 'Sportsbook Developer for Custom Sports Betting Websites | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sportsbook Developer for Custom Sports Betting Websites',
    description:
      'Hire a dedicated sportsbook developer or sportsbook development company for custom sports betting websites, sportsbook API integration, live betting engines, and turnkey solutions.',
    images: ['https://kvaornux.com/assets/features/products-and-portfolio-of-white-label-sportsbook-platform.webp'],
  },
};

export default function SportsbookDeveloperPage() {
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
        name: 'Sportsbook Developer',
        item: 'https://kvaornux.com/sportsbook-developer',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/sportsbook-developer#service',
    name: 'Sportsbook Software Development Services',
    serviceType: 'Sportsbook Software Development & Custom Sports Betting Engineering',
    description:
      'Professional sportsbook developer and development company engineering custom sports betting websites, live in-play wagering engines, odds API integrations, PAM systems, and turnkey sportsbook software.',
    url: 'https://kvaornux.com/sportsbook-developer',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sportsbook Development Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'White Label Sportsbook Software Development',
            description:
              'Rapid-deployment branded sportsbook platform with essential odds feed integration, responsive frontend UI, and back-office management.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Turnkey Sportsbook Platform Development',
            description:
              'Complete turnkey sports betting platform with casino aggregator connectivity, omnichannel player wallet, risk desk, and multi-tier agent network.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bespoke Custom Sportsbook Software Development',
            description:
              'Tailored sports betting architecture engineered by dedicated sportsbook developers, featuring custom microservices, proprietary algorithms, and full source code ownership per agreement.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SPORTSBOOK_DEVELOPER_FAQS.map((faq) => ({
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
      <SportsbookDeveloperClient />
    </>
  );
}
