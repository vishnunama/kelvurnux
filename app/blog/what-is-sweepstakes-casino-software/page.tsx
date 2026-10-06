import type { Metadata } from 'next';
import SweepstakesSoftwareBlogClient from './SweepstakesSoftwareBlogClient';

const faqList = [
  {
    question: 'What is sweepstakes casino software?',
    answer:
      'Sweepstakes casino software is the core technology platform that manages dual-currency balances (Gold Coins and Sweeps Coins), player accounts, game API integrations, AMOE entry processing, KYC verification, geolocation controls, and prize redemption approval queues.',
  },
  {
    question: 'How do Gold Coins and Sweeps Coins work?',
    answer:
      'Gold Coins are virtual social tokens used strictly for fun gameplay with zero cash value. Sweeps Coins are promotional tokens given complimentary via bonuses, AMOE, or GC package gifts; eligible SC winnings can be redeemed for prizes after meeting playthrough and verification requirements.',
  },
  {
    question: 'What is AMOE in a sweepstakes casino?',
    answer:
      'Alternative Method of Entry (AMOE) is a promotional requirement allowing players to request free Sweeps Coins without making a purchase, typically processed via mail-in requests or digital code generation tools managed in the back office.',
  },
  {
    question: 'Is sweepstakes casino software the same as real-money casino software?',
    answer:
      'No. While both integrate casino games and player account management, sweepstakes software operates on a dual-currency ledger with promotional rules, AMOE processing, and prize redemption workflows instead of direct real-money wagering.',
  },
  {
    question: 'Can sweepstakes casino software integrate multiple game providers?',
    answer:
      'Yes. Modern sweepstakes software connects to multiple game studios and game aggregation APIs to deliver video slots, table games, crash games, and live dealer streams adapted for dual-currency play.',
  },
  {
    question: 'How does prize redemption work?',
    answer:
      'Players submit a redemption request for eligible Sweeps Coins. The platform verifies minimum balance thresholds, playthrough history, and KYC identity verification before sending the request to the back-office queue for approval and payout.',
  },
  {
    question: 'Why are KYC and geolocation controls used?',
    answer:
      'KYC (Know Your Customer) verifies player identity, age, and address before prize redemptions. Geolocation controls check player location in real time to restrict access in non-permitted jurisdictions based on operator configuration.',
  },
  {
    question: 'What is the difference between turnkey and custom sweepstakes software?',
    answer:
      'Turnkey software provides a pre-configured platform with ready-to-launch templates, game catalogs, and payment channels for fast deployment. Custom development builds tailored UI/UX, bespoke feature logic, and proprietary API integrations.',
  },
  {
    question: 'Can a sweepstakes platform support web and mobile users?',
    answer:
      'Yes. Modern sweepstakes casino platforms are built using responsive web frameworks (like React or Next.js) and Progressive Web Apps (PWAs) that run seamlessly on desktop, tablet, and smartphone browsers.',
  },
  {
    question: 'How long does it take to build a sweepstakes casino platform?',
    answer:
      'A turnkey sweepstakes casino platform can typically be configured and launched within 2 to 4 weeks, whereas a fully custom platform build generally takes 3 to 6 months depending on feature requirements.',
  },
];

export const metadata: Metadata = {
  title: {
    absolute: 'What Is Sweepstakes Casino Software? Operator Guide | Kvaornux',
  },
  description:
    'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
  alternates: {
    canonical: '/blog/what-is-sweepstakes-casino-software',
  },
  openGraph: {
    title: 'What Is Sweepstakes Casino Software? Operator Guide | Kvaornux',
    description:
      'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
    url: 'https://kvaornux.com/blog/what-is-sweepstakes-casino-software',
    siteName: 'Kvaornux',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Sweepstakes Casino Software? Operator Guide | Kvaornux',
    description:
      'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'What Is Sweepstakes Casino Software? A Complete Guide for Operators',
    description:
      'Learn how sweepstakes casino software works, including Gold Coins, Sweeps Coins, AMOE, dual-currency wallets, KYC, geolocation, game integrations, prize redemption and back-office technology.',
    image: 'https://kvaornux.com/assets/og-image.webp',
    url: 'https://kvaornux.com/blog/what-is-sweepstakes-casino-software',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/what-is-sweepstakes-casino-software',
    },
    datePublished: '2026-10-06',
    dateModified: '2026-10-06',
    author: {
      '@type': 'Organization',
      name: 'Kvaornux Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.webp',
      },
    },
  };

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
        name: 'Blog',
        item: 'https://kvaornux.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'What Is Sweepstakes Casino Software?',
        item: 'https://kvaornux.com/blog/what-is-sweepstakes-casino-software',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SweepstakesSoftwareBlogClient />
    </>
  );
}
