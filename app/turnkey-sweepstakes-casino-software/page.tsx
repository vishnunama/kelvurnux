import type { Metadata } from 'next';
import TurnkeySweepstakesClient from './TurnkeySweepstakesClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Turnkey Sweepstakes Casino Software & Platform | Kvaornux',
  },
  description:
    'Launch a branded turnkey sweepstakes casino platform with Gold Coins, Sweeps Coins, AMOE workflows, game integrations, payments, KYC, geolocation, prize redemption and operator back office.',
  alternates: {
    canonical: 'https://kvaornux.com/turnkey-sweepstakes-casino-software/',
  },
  openGraph: {
    title: 'Turnkey Sweepstakes Casino Software & Platform | Kvaornux',
    description:
      'Launch a branded turnkey sweepstakes casino platform with Gold Coins, Sweeps Coins, AMOE workflows, game integrations, payments, KYC, geolocation, prize redemption and operator back office.',
    url: 'https://kvaornux.com/turnkey-sweepstakes-casino-software/',
    siteName: 'Kvaornux',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turnkey Sweepstakes Casino Software & Platform | Kvaornux',
    description:
      'Launch a branded turnkey sweepstakes casino platform with Gold Coins, Sweeps Coins, AMOE workflows, game integrations, payments, KYC, geolocation, prize redemption and operator back office.',
  },
};

export default function Page() {
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
        name: 'Turnkey Sweepstakes Casino Software',
        item: 'https://kvaornux.com/turnkey-sweepstakes-casino-software/',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Turnkey Sweepstakes Casino Software & Platform',
    provider: {
      '@type': 'Organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    description:
      'Turnkey sweepstakes casino platform technology covering Gold Coins, Sweeps Coins, AMOE workflows, game aggregation, payment processing, KYC verification, geolocation controls, prize redemption and operator back-office administration.',
    url: 'https://kvaornux.com/turnkey-sweepstakes-casino-software/',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is turnkey sweepstakes casino software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnkey sweepstakes casino software provides an established platform architecture that can be configured around an operator\'s brand, virtual currency model, games, payments, player verification, redemption workflows and back-office requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is turnkey sweepstakes software different from custom development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A turnkey project begins with an established core architecture and focuses on configuration, branding and required integrations. Custom development is better suited to projects requiring proprietary architecture, highly specialized workflows or deeper product-level customization.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the platform support Gold Coins and Sweeps Coins?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The platform can maintain separate Gold Coin and Sweeps Coin balances with independent transaction histories and configurable rules for purchases, promotional allocations, gameplay activity and redemption-related workflows.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AMOE workflows be configured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Alternative Method of Entry workflows can support no-purchase participation requests, verification, status tracking and promotional currency allocation according to the operator\'s defined rules and legal framework.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can KYC and geolocation providers be integrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Third-party identity, age-verification and geolocation services can be connected to registration, player access and redemption workflows based on project requirements and technical compatibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I choose the game providers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Compatible game providers and aggregation APIs can be integrated according to the project\'s commercial arrangements and technical requirements. Sweepstakes compatibility should be confirmed for each content provider.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can payment and payout providers be integrated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Compatible payment services can support Gold Coin purchase flows, while payout or prize-processing integrations can be connected to approved redemption workflows.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the frontend be branded for my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The player-facing experience can be configured around the operator\'s brand identity, visual assets, content, navigation and promotional requirements within the agreed turnkey scope.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does turnkey mean every Sweepstakes Casino looks the same?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The underlying core architecture can remain established while the player-facing brand experience, content, selected integrations and operating configuration are adapted for the project.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a turnkey Sweepstakes Casino take to launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The timeline depends on branding, platform configuration, game integrations, payment services, verification providers and other project requirements. Kvaornux defines the delivery schedule after the technical scope and required integrations are confirmed.',
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
      <TurnkeySweepstakesClient />
    </>
  );
}
