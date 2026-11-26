import type { Metadata } from 'next';
import BookmakerSoftwareClient from './BookmakerSoftwareClient';
import { BOOKMAKER_SOFTWARE_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Bookmaker Software, Bookie Agent System and PPH Platform',
  },
  description:
    'Enterprise bookmaker software, sports bookie software, and PPH platform alternative. Multi-tier agent hierarchies, credit sheet management, retail betting shop POS, official odds feeds, and real-time risk controls.',
  alternates: {
    canonical: 'https://kvaornux.com/bookmaker-software',
  },
  openGraph: {
    title: 'Bookmaker Software, Bookie Agent System and PPH Platform',
    description:
      'Enterprise bookmaker software, sports bookie software, and PPH platform alternative. Multi-tier agent hierarchies, credit sheet management, retail betting shop POS, official odds feeds, and real-time risk controls.',
    url: 'https://kvaornux.com/bookmaker-software',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/case-studies/sportsbook-platform/risk-dashboard.webp',
        width: 1200,
        height: 630,
        alt: 'Bookmaker Software, Agent Hierarchy and Retail Sportsbook POS | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bookmaker Software, Bookie Agent System and PPH Platform',
    description:
      'Enterprise bookmaker software, sports bookie software, and PPH platform alternative. Multi-tier agent hierarchies, credit sheet management, retail betting shop POS, official odds feeds, and real-time risk controls.',
    images: ['https://kvaornux.com/assets/case-studies/sportsbook-platform/risk-dashboard.webp'],
  },
};

export default function BookmakerSoftwarePage() {
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
        name: 'Bookmaker Software',
        item: 'https://kvaornux.com/bookmaker-software',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/bookmaker-software#service',
    name: 'Bookmaker Software, Bookie Agent System and Retail POS Platform',
    serviceType: 'Bookmaker Management Software & PPH Agent Systems',
    description:
      'Comprehensive bookmaker software and sports bookie software featuring multi-tier agent credit systems, pay-per-head (PPH) alternatives, automated weekly sheets, retail betting shop POS terminals, official odds feeds, and liability risk controls.',
    url: 'https://kvaornux.com/bookmaker-software',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bookmaker & Bookie Software Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Private Bookie Agent & Credit Sheet System',
            description:
              'Complete bookie website software with multi-tier agent hierarchy, weekly settle figures, player limits, and mobile-first bet slip.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Omnichannel Bookmaker & Casino Agent Suite',
            description:
              'Full sports bookie software combined with casino agent software (10,000+ slots and live dealers), real-time bet ticker, and sharp-bettor protection.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Retail Betting Shop POS & Self-Service Kiosks',
            description:
              'Land-based retail sportsbook software featuring barcode thermal slip printing, over-the-counter ticket scanners, and cashier shift accounting.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BOOKMAKER_SOFTWARE_FAQS.map((faq) => ({
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
      <BookmakerSoftwareClient />
    </>
  );
}
