import type { Metadata } from 'next';
import TurnkeySweepstakesClient from './TurnkeySweepstakesClient';

export const metadata: Metadata = {
  title: {
    absolute: 'Turnkey Sweepstakes Casino Software & Systems | Kvaornux',
  },
  description:
    'Turnkey sweepstakes casino software with dual-currency wallets, game integrations and back-office tools. Discuss configuration and launch requirements with Kvaornux.',
  alternates: {
    canonical: 'https://kvaornux.com/turnkey-sweepstakes-casino-software',
  },
  openGraph: {
    title: 'Turnkey Sweepstakes Casino Software & Systems | Kvaornux',
    description:
      'Turnkey sweepstakes casino software with dual-currency wallets, game integrations and back-office tools. Discuss configuration and launch requirements with Kvaornux.',
    url: 'https://kvaornux.com/turnkey-sweepstakes-casino-software',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Turnkey Sweepstakes Casino Software & Systems | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turnkey Sweepstakes Casino Software & Systems | Kvaornux',
    description:
      'Turnkey sweepstakes casino software with dual-currency wallets, game integrations and back-office tools. Discuss configuration and launch requirements with Kvaornux.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
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
        item: 'https://kvaornux.com/turnkey-sweepstakes-casino-software',
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
    url: 'https://kvaornux.com/turnkey-sweepstakes-casino-software',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is included in turnkey sweepstakes systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A turnkey sweepstakes system includes an established software platform core: a dual-currency (Gold Coins and Sweeps Coins) wallet engine, Player Account Management (PAM), an Alternative Method of Entry (AMOE) processing queue, a multi-stage prize redemption approval workflow, and a back-office administration console. It also includes integration adapters for game aggregators, payment gateways, KYC identity verification, and geolocation boundary detection, paired with a customized HTML5 player frontend.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which parts of the turnkey platform can be customized?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Operators can fully customize the player-facing interface (branding, color palettes, logos, promotional banners, and navigation layouts), virtual currency packages and pricing, promotional bonuses (sign-up gifts, daily login streaks), prize redemption thresholds, jurisdictional restricted-state rules, game catalog categories, and administrative staff permission roles.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is turnkey sweepstakes software different from custom development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Turnkey sweepstakes systems build upon a pre-existing, tested core architecture, dramatically reducing time-to-market and initial capital investment. Custom development involves engineering proprietary architecture from scratch, which is best suited for operators requiring bespoke game math engines, patented mechanics, or highly unusual backend configurations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who handles game provider and payment processing approvals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The operator contracts directly with game studios and payment merchant processors. Kvaornux provides the technical API integration adapters, sandbox testing, and webhook listeners, while commercial agreements, merchant underwriting, fee negotiations, and account approvals remain between the operator and the third-party providers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the platform maintain separate Gold Coin and Sweeps Coin ledgers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The platform core maintains two completely distinct virtual currency ledgers. Gold Coins (used for recreational entertainment) and Sweeps Coins (used for promotional sweepstakes participation) are tracked separately with immutable real-time transaction records, dedicated playthrough multipliers, and segregated redemption eligibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Alternative Method of Entry (AMOE) workflows be configured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The platform includes a dedicated administrative AMOE portal. Players generate a unique entry request code through their player account, mail in their physical request card, and operational staff verify and enter the code in the back office. The system validates code authenticity, enforces submission limits, and credits promotional Sweeps Coins with auditable logs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What third-party services must an operator integrate before launching?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fully operational sweepstakes casino typically requires four categories of third-party integrations: payment processing gateways (credit/debit cards, ACH, or instant bank transfer), prize payout disbursement rails, identity and age verification (KYC/AML) services, and geolocation boundary detection APIs to enforce state-level access rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'What factors affect the turnkey platform launch timeline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While Kvaornux configures the core software in a structured delivery timeline, overall launch timing largely depends on external factors: brand design approvals, game provider commercial agreements, merchant payment processor underwriting (which often takes 2 to 6 weeks), and the operator completing independent legal review of their sweepstakes rules.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can the platform restrict access in specific US states?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The platform provides a configurable jurisdictional rules engine that works with geolocation and IP verification APIs. Operators can block player registration, purchases, or gameplay in restricted jurisdictions (such as Washington, Idaho, Nevada, Michigan, or other states determined with qualified gaming counsel).',
        },
      },
      {
        '@type': 'Question',
        name: 'What should an operator evaluate in a turnkey software proposal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Before executing a contract, operators should clarify: (1) what setup deliverables are covered vs. billable customizations, (2) monthly recurring licensing or revenue-share fee structures, (3) direct third-party API transaction costs, (4) cloud hosting responsibilities and costs, (5) guaranteed technical support response times (SLAs), and (6) full data portability and player database ownership.',
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
