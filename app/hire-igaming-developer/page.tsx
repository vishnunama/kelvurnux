import type { Metadata } from 'next';
import HireIgamingDeveloperClient from './HireIgamingDeveloperClient';
import { HIRE_IGAMING_DEVELOPER_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: 'Hire iGaming Developer and Dedicated Casino & Sportsbook Team',
  },
  description:
    'Hire iGaming software developers and full-stack casino/sportsbook engineers. React/Next.js frontends, Node.js/Go wallet ledgers, API integrations, crash games, and managed iGaming hosting.',
  alternates: {
    canonical: 'https://kvaornux.com/hire-igaming-developer',
  },
  openGraph: {
    title: 'Hire iGaming Developer and Dedicated Casino & Sportsbook Team',
    description:
      'Hire iGaming software developers and full-stack casino/sportsbook engineers. React/Next.js frontends, Node.js/Go wallet ledgers, API integrations, crash games, and managed iGaming hosting.',
    url: 'https://kvaornux.com/hire-igaming-developer',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/features/igaming-software-development-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Hire iGaming Developer and Dedicated Engineering Team | Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire iGaming Developer and Dedicated Casino & Sportsbook Team',
    description:
      'Hire iGaming software developers and full-stack casino/sportsbook engineers. React/Next.js frontends, Node.js/Go wallet ledgers, API integrations, crash games, and managed iGaming hosting.',
    images: ['https://kvaornux.com/assets/features/igaming-software-development-banner.webp'],
  },
};

export default function HireIgamingDeveloperPage() {
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
        name: 'Hire iGaming Developer',
        item: 'https://kvaornux.com/hire-igaming-developer',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/hire-igaming-developer#service',
    name: 'Hire Dedicated iGaming Software Developers and Engineering Teams',
    serviceType: 'Dedicated iGaming Software Development & Engineering Staffing',
    description:
      'Hire experienced iGaming developers, casino software engineers, sportsbook API architects, crash game studios, and DevOps teams for full-cycle iGaming platform development under NDA.',
    url: 'https://kvaornux.com/hire-igaming-developer',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    areaServed: 'Global',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'iGaming Engineering Engagement Models',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dedicated Specialist iGaming Developer',
            description:
              'Single senior frontend (React/Next.js), backend (Node.js/Go), or API integration engineer embedded directly into your codebase.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full-Cycle iGaming Engineering Pod',
            description:
              'Cross-functional team combining UI/UX design, frontend, backend wallet architecture, studio/payment integrations, and QA.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Bespoke Platform Squad',
            description:
              'Complete custom iGaming development team with dedicated PM, multi-region DevOps hosting, crash originals, and contractual IP handover.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HIRE_IGAMING_DEVELOPER_FAQS.map((faq) => ({
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
      <HireIgamingDeveloperClient />
    </>
  );
}
