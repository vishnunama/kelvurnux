import type { Metadata } from 'next';
import CasinoWebsiteDeveloperClient from './CasinoWebsiteDeveloperClient';
import { CASINO_DEVELOPER_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Casino Website Developer for Custom Online Casino Platforms',
  },
  description:
    'Hire a dedicated casino website developer and online casino engineering team. Custom React/Next.js lobbies, 10,000+ game aggregator APIs, single-wallet PAM, crypto payments, and custom gambling apps.',
  alternates: {
    canonical: 'https://kvaornux.com/casino-website-developer',
  },
  openGraph: {
    title: 'Casino Website Developer for Custom Online Casino Platforms',
    description:
      'Hire a dedicated casino website developer and online casino engineering team. Custom React/Next.js lobbies, 10,000+ game aggregator APIs, single-wallet PAM, crypto payments, and custom gambling apps.',
    url: 'https://kvaornux.com/casino-website-developer',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/custom-igaming-platform-design-interface.webp',
        width: 1200,
        height: 630,
        alt: 'Casino Website Developer and Custom Online Casino Engineering | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casino Website Developer for Custom Online Casino Platforms',
    description:
      'Hire a dedicated casino website developer and online casino engineering team. Custom React/Next.js lobbies, 10,000+ game aggregator APIs, single-wallet PAM, crypto payments, and custom gambling apps.',
    images: ['https://kvaornux.com/assets/features/custom-igaming-platform-design-interface.webp'],
  },
};

export default function CasinoWebsiteDeveloperPage() {
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
        name: 'Casino Website Developer',
        item: 'https://kvaornux.com/casino-website-developer',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/casino-website-developer#service',
    name: 'Casino Website Developer and Custom Online Casino Engineering',
    serviceType: 'Casino Website Development & Online Gambling Software Engineering',
    description:
      'Full-stack casino website developer team building custom online casino platforms, mobile casino apps, 10,000+ game aggregator integrations, provably fair crash originals, crypto wallets, and gambling CRM systems.',
    url: 'https://kvaornux.com/casino-website-developer',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Casino Website Development Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Branded Casino Website & Game Aggregator Setup',
            description:
              'Launch-ready online casino website with custom front-end branding, responsive mobile UI, 5,000+ slots and live dealers, and fiat/crypto cashier.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Turnkey Online Casino & Mobile App Engineering',
            description:
              'Full casino software development featuring 10,000+ games, single-wallet PAM, native Android app, bonus/VIP CRM engine, and automated KYC.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bespoke Custom Casino, Crypto & Originals Development',
            description:
              'Custom-engineered casino website, provably fair crash/mini-games, Web3 crypto rails, or dual-wallet sweepstakes software with contractual IP ownership.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CASINO_DEVELOPER_FAQS.map((faq) => ({
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
      <CasinoWebsiteDeveloperClient />
    </>
  );
}
