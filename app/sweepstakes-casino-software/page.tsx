import type { Metadata } from 'next';
import SweepstakesClient from './SweepstakesClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Sweepstakes Casino Software & Platform Solutions | Kvaornux',
  },
  description:
    'Build and launch a custom sweepstakes casino platform with Gold Coins, Sweeps Coins, AMOE workflows, KYC, geolocation, game integrations, payments, prize redemption and back-office technology.',
  alternates: {
    canonical: 'https://kvaornux.com/sweepstakes-casino-software/',
  },
  openGraph: {
    title: 'Sweepstakes Casino Software & Platform Solutions | Kvaornux',
    description:
      'Build and launch a custom sweepstakes casino platform with Gold Coins, Sweeps Coins, AMOE workflows, KYC, geolocation, game integrations, payments, prize redemption and back-office technology.',
    url: 'https://kvaornux.com/sweepstakes-casino-software/',
    siteName: 'Kvaornux',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweepstakes Casino Software & Platform Solutions | Kvaornux',
    description:
      'Build and launch a custom sweepstakes casino platform with Gold Coins, Sweeps Coins, AMOE workflows, KYC, geolocation, game integrations, payments, prize redemption and back-office technology.',
  },
};

export default function SweepstakesPage() {
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
        name: 'Sweepstakes Casino Software',
        item: 'https://kvaornux.com/sweepstakes-casino-software/',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sweepstakes Casino Software & Platform Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    description:
      'Build and launch a custom sweepstakes casino platform with Gold Coins, Sweeps Coins, AMOE workflows, KYC, geolocation, game integrations, payments, prize redemption and back-office technology.',
    areaServed: 'Global',
    serviceType: 'iGaming Platform Development',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is sweepstakes casino software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sweepstakes casino software is a specialized iGaming platform configured with dual-currency wallets (Gold Coins and Sweeps Coins), promotional distribution rules, AMOE (Alternative Method of Entry) processing, player management, and compliance controls to support sweepstakes-style gaming operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do Gold Coins and Sweeps Coins work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Gold Coins are virtual currencies used strictly for entertainment gameplay and can be purchased in coin packages. Sweeps Coins are promotional virtual currencies obtained for free through promotions, coin purchases, or AMOE requests, and can be used to participate in sweepstakes games for prize redemption eligibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is AMOE in a sweepstakes casino?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Alternative Method of Entry (AMOE) is a mechanism that allows players to request promotional Sweeps Coins for free without making a purchase, typically via digital forms or mail-in requests. The software automates the processing, verification, and allocation of AMOE entry credits.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a sweepstakes casino and a real-money casino?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A real-money casino processes direct cash wagers and payouts. A sweepstakes casino operates using a dual virtual currency system where gameplay occurs using virtual coins, and promotional coins can be accumulated and reviewed for prize redemptions under specific promotional rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Kvaornux build a custom sweepstakes casino platform?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Kvaornux develops custom sweepstakes technology tailored to an operator’s proprietary workflows, branded player interfaces, specific payment gateways, and custom backend administration requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in turnkey sweepstakes casino software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A turnkey sweepstakes software solution includes pre-configured dual-currency wallet ledgers, game aggregation, payment processing, KYC/geolocation integrations, bonus engines, player account management, and a complete admin back office.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can multiple casino game providers be integrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Through Kvaornux’s game aggregation layer, operators can integrate slots, live dealer, table games, crash games, and fish games from multiple content studios into a single sweepstakes platform environment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does sweepstakes prize redemption work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Players submit a redemption request for eligible Sweeps Coins balance. The platform routes the request through automated identity verification (KYC), location checks, and administrative risk review before processing payouts via bank transfer, gift cards, or approved payout gateways.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can KYC and geolocation providers be integrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The platform includes modular API integrations for leading identity verification (KYC) and state-level geolocation providers to enforce age, identity, and jurisdictional rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does sweepstakes casino software development take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Development timelines depend on the project scope, level of custom UI/UX design, required third-party integrations, and operating configurations. Turnkey setups launch faster, while custom bespoke development follows a structured multi-phase roadmap.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SweepstakesClient />
    </>
  );
}
