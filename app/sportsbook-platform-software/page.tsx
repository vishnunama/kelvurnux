import type { Metadata } from 'next';
import SportsbookPlatformClient from './SportsbookPlatformClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Sportsbook Platform Software for Betting Operators | Kvaornux',
  },
  description:
    'Enterprise sportsbook platform software for betting operators. Real-time odds feeds, live in-play betting engine, automated liability & risk controls, bet builder, and agent cashier back office.',
  alternates: {
    canonical: 'https://kvaornux.com/sportsbook-platform-software',
  },
  openGraph: {
    title: 'Sportsbook Platform Software for Betting Operators | Kvaornux',
    description:
      'Enterprise sportsbook platform software for betting operators. Real-time odds feeds, live in-play betting engine, automated liability & risk controls, bet builder, and agent cashier back office.',
    url: 'https://kvaornux.com/sportsbook-platform-software',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Sportsbook Platform Software for Betting Operators | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sportsbook Platform Software for Betting Operators | Kvaornux',
    description:
      'Enterprise sportsbook platform software for betting operators. Real-time odds feeds, live in-play betting engine, automated liability & risk controls, bet builder, and agent cashier back office.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function SportsbookPlatformSoftwarePage() {
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
        name: 'Products',
        item: 'https://kvaornux.com/sportsbook-platform-software',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sportsbook Platform Software',
        item: 'https://kvaornux.com/sportsbook-platform-software',
      },
    ],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kvaornux Sportsbook Platform Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud-Native, Linux, Web, iOS, Android',
    description:
      'High-throughput sportsbook betting engine, real-time odds feed management, dynamic risk controls, live in-play wagering, and multi-tier agent network management software.',
    url: 'https://kvaornux.com/sportsbook-platform-software',
    provider: {
      '@type': 'Organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    offers: {
      '@type': 'Offer',
      price: 'Contact for Quote',
      priceCurrency: 'USD',
    },
    featureList: [
      'High-Throughput In-Play & Pre-Match Betting Engine',
      'Real-Time Multi-Source Odds Feeds & Margin Automation',
      'Dynamic Risk Management & Liability Exposure Desk',
      'Dynamic Cash-Out & Bet Builder (Same-Game Parlay) Engine',
      'Multi-Tier Agent & Retail Shop Cashier Network',
      'Seamless PAM & Multi-Currency Sportsbook Wallet',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What sports data feeds and odds providers are integrated into the sportsbook software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kvaornux integrates with industry-leading sports data feeds and odds aggregators, providing official real-time coverage for 80+ sports, 1,000+ betting markets, esports, and virtual sports with multi-provider failover and automatic margin calculation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the automated risk management and trading desk protect bookmaker margins?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our risk engine continuously calculates real-time liability exposure per event, market, and selection. It features automated max-stake throttling for sharp bettors, dynamic bet acceptance delays, arbitrage protection, and automated margin adjustments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the sportsbook platform software support retail betting shops and agent networks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The platform includes a comprehensive hierarchical agent module (Master Agent, Agent, Cashier) with physical slip barcode printing, POS cashier terminal interfaces, credit allocation, and automated multi-tier commission distribution.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast is live bet validation during high-intensity in-play sporting events?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In-play bet validation executes in under 100 milliseconds with configurable integrity delays, ensuring bookmakers are shielded from pitch-side latency exploitation while delivering a frictionless player experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Sportsbook Platform Software and the Turnkey Sportsbook Solution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sportsbook Platform Software provides the core betting engine, odds feeds, risk controls, and trading tools for operators who manage their own operation. The Turnkey Sportsbook Solution includes the software alongside full turnkey setup, delivery packaging, and operational launch assistance.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SportsbookPlatformClient />
    </>
  );
}
