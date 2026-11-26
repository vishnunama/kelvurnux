import type { Metadata } from 'next';
import SportsbookApiClient from './SportsbookApiClient';
import { SPORTSBOOK_API_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Sportsbook API Integration and Live Odds Feed Provider',
  },
  description:
    'Enterprise sportsbook API integration for operators and casinos. Connect Betradar, Pinnacle, Genius Sports, horse racing and esports odds feeds via sub-140ms WebSockets, single-wallet PAM, or modular iframe.',
  alternates: {
    canonical: 'https://kvaornux.com/sportsbook-api-integration',
  },
  openGraph: {
    title: 'Sportsbook API Integration and Live Odds Feed Provider',
    description:
      'Enterprise sportsbook API integration for operators and casinos. Connect Betradar, Pinnacle, Genius Sports, horse racing and esports odds feeds via sub-140ms WebSockets, single-wallet PAM, or modular iframe.',
    url: 'https://kvaornux.com/sportsbook-api-integration',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/sportsbook-integration-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Sportsbook API Integration and Live Odds Feed Architecture | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sportsbook API Integration and Live Odds Feed Provider',
    description:
      'Enterprise sportsbook API integration for operators and casinos. Connect Betradar, Pinnacle, Genius Sports, horse racing and esports odds feeds via sub-140ms WebSockets, single-wallet PAM, or modular iframe.',
    images: ['https://kvaornux.com/assets/features/sportsbook-integration-banner.webp'],
  },
};

export default function SportsbookApiIntegrationPage() {
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
        name: 'Sportsbook API Integration',
        item: 'https://kvaornux.com/sportsbook-api-integration',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/sportsbook-api-integration#service',
    name: 'Sportsbook API Integration and Real-Time Odds Feed Services',
    serviceType: 'Sportsbook API Integration & Betting Data Feed Engineering',
    description:
      'End-to-end sportsbook API integration connecting Betradar (Sportradar), Genius Sports, Pinnacle, horse racing, and esports odds feeds with sub-140ms WebSocket distribution, seamless single-wallet PAM, payment gateways, and sportsbook iframe solutions.',
    url: 'https://kvaornux.com/sportsbook-api-integration',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sportsbook API Integration Models',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Modular Sportsbook iFrame Integration',
            description:
              'Fast embeddable sportsbook iframe integration for existing online casinos with single-sign-on session and unified wallet balance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Unified Odds Feed & Settlement API',
            description:
              'Normalized REST and WebSocket odds API connecting official sports data feeds, automated result grading webhooks, and risk controls.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Multi-Feed & Payment Gateway Integration',
            description:
              'Custom multi-provider failover architecture linking external odds feeds, seamless PAM wallets, fiat/crypto payment gateways, and CRM bonus webhooks.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SPORTSBOOK_API_FAQS.map((faq) => ({
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
      <SportsbookApiClient />
    </>
  );
}
