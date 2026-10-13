import type { Metadata } from 'next';
import CasinoPlatformClient from './CasinoPlatformClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Online Casino Platform Software for iGaming Operators | Kvaornux',
  },
  description:
    'Scalable online casino platform software for iGaming operators. Modular microservices architecture, PAM engine, unified wallet API, 20,000+ games aggregator, and real-time back office.',
  alternates: {
    canonical: 'https://kvaornux.com/online-casino-platform-software',
  },
  openGraph: {
    title: 'Online Casino Platform Software for iGaming Operators | Kvaornux',
    description:
      'Scalable online casino platform software for iGaming operators. Modular microservices architecture, PAM engine, unified wallet API, 20,000+ games aggregator, and real-time back office.',
    url: 'https://kvaornux.com/online-casino-platform-software',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Online Casino Platform Software for iGaming Operators | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Casino Platform Software for iGaming Operators | Kvaornux',
    description:
      'Scalable online casino platform software for iGaming operators. Modular microservices architecture, PAM engine, unified wallet API, 20,000+ games aggregator, and real-time back office.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function OnlineCasinoPlatformSoftwarePage() {
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
        item: 'https://kvaornux.com/online-casino-platform-software',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Online Casino Platform Software',
        item: 'https://kvaornux.com/online-casino-platform-software',
      },
    ],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Kvaornux Online Casino Platform Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud-Native, Linux, Web, iOS, Android',
    description:
      'Enterprise online casino platform software featuring modular PAM architecture, unified wallet gateway, 20,000+ game aggregation, bonus studio, and operator back office.',
    url: 'https://kvaornux.com/online-casino-platform-software',
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
      'Player Account Management (PAM)',
      'Multi-Currency Unified Wallet Engine (Seamless & Transfer API)',
      '20,000+ Certified Casino Games from 150+ Providers',
      'Dynamic Bonus Studio & Wagering Requirement Engine',
      'Real-Time Back Office with Role-Based Access Control',
      'Anti-Fraud & Anomaly Detection Modules',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What wallet integration models does the Kvaornux casino platform software support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kvaornux supports both Seamless Single-Wallet (where the platform requests debit/credit authorizations directly from your existing core ledger via sub-50ms REST/WebSocket callbacks) and Transfer Wallet modes with automated ledger reconciliation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we build a custom frontend on top of your casino platform software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Kvaornux features an API-first, headless architecture. You can connect your proprietary web and mobile frontends (React, Next.js, Vue, Flutter, iOS/Android) directly to our platform REST and WebSocket APIs, or deploy our customizable responsive web frontend.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the platform handle high-concurrency game rounds during peak hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our architecture leverages distributed microservices, Redis caching layers, and decoupled event-driven message brokers capable of processing tens of thousands of simultaneous spins and bets per second with sub-50ms response latency.',
        },
      },
      {
        '@type': 'Question',
        name: 'What game content is integrated into the casino platform software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The platform connects with over 20,000 certified casino titles from 150+ world-class studios, spanning online slots, live dealer tables, roulette, blackjack, baccarat, crash games, fishing, and fast games via a single normalized aggregator gateway.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Casino Platform Software and the Turnkey Casino Solution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Online Casino Platform Software is focused on the software engine, modular architecture, PAM, wallet APIs, and back office for operators who manage their own operation or licensing. The Turnkey Casino Solution is an all-inclusive delivery model that packages the software with complete setup, hosting, and launch assistance.',
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
      <CasinoPlatformClient />
    </>
  );
}
