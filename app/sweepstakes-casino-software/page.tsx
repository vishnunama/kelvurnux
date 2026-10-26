import type { Metadata } from 'next';
import SweepstakesClient from './SweepstakesClient';
import { SWEEPSTAKES_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Sweepstakes Casino Software & Platform Solutions | Kvaornux',
  },
  description:
    'Launch your sweepstakes casino platform with dual-currency wallets, game integrations, AMOE support, and back-office management. Explore turnkey and custom software solutions.',
  alternates: {
    canonical: 'https://kvaornux.com/sweepstakes-casino-software',
  },
  openGraph: {
    title: 'Sweepstakes Casino Software & Platform Solutions | Kvaornux',
    description:
      'Launch your sweepstakes casino platform with dual-currency wallets, game integrations, AMOE support, and back-office management. Explore turnkey and custom software solutions.',
    url: 'https://kvaornux.com/sweepstakes-casino-software',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Sweepstakes Casino Software & Platform Solutions | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sweepstakes Casino Software & Platform Solutions | Kvaornux',
    description:
      'Launch your sweepstakes casino platform with dual-currency wallets, game integrations, AMOE support, and back-office management. Explore turnkey and custom software solutions.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
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
        item: 'https://kvaornux.com/sweepstakes-casino-software',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/sweepstakes-casino-software#service',
    name: 'Sweepstakes Casino Software & Platform Solutions',
    url: 'https://kvaornux.com/sweepstakes-casino-software',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    description:
      'Launch your sweepstakes casino platform with dual-currency wallets, game integrations, AMOE support, and back-office management. Explore turnkey and custom software solutions.',
    areaServed: 'Global',
    serviceType: 'iGaming Platform Development',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SWEEPSTAKES_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <SweepstakesClient />
    </>
  );
}
