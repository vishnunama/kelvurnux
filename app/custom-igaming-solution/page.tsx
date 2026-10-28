import type { Metadata } from 'next';
import CustomIgamingClient from './CustomIgamingClient';
import { BESPOKE_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Custom iGaming Software Development Services | KVAORNUX',
  },
  description:
    'KVAORNUX provides custom iGaming software development from scratch. Build bespoke casino and sportsbook platforms with tailored features and source code included.',
  alternates: {
    canonical: 'https://kvaornux.com/custom-igaming-solution',
  },
  openGraph: {
    title: 'Custom iGaming Software Development Services | KVAORNUX',
    description:
      'KVAORNUX provides custom iGaming software development from scratch. Build bespoke casino and sportsbook platforms with tailored features and source code included.',
    url: 'https://kvaornux.com/custom-igaming-solution',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Custom iGaming Software Development Services | KVAORNUX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom iGaming Software Development Services | KVAORNUX',
    description:
      'KVAORNUX provides custom iGaming software development from scratch. Build bespoke casino and sportsbook platforms with tailored features and source code included.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
  },
};

export default function CustomIgamingPage() {
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
        name: 'Bespoke iGaming Solutions',
        item: 'https://kvaornux.com/custom-igaming-solution',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/custom-igaming-solution#service',
    name: 'Custom iGaming Software Development Services',
    url: 'https://kvaornux.com/custom-igaming-solution',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    description:
      'KVAORNUX provides custom iGaming software development from scratch. Build bespoke casino and sportsbook platforms with tailored features and source code included.',
    areaServed: 'Global',
    serviceType: 'Custom iGaming Software Development',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BESPOKE_FAQS.map((faq) => ({
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
      <CustomIgamingClient />
    </>
  );
}