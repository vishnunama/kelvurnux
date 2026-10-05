import type { Metadata } from 'next';
import CasinoPlatformCaseStudyClient from './Client';

export const metadata: Metadata = {
  title: 'Casino Platform Development Case Study | Kvaornux',
  description:
    'See how Kvaornux built a scalable mobile-first casino platform with game aggregator integrations, NGN wallet infrastructure, payments, affiliate tools and back-office operations.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-case-studies/casino-platform-development/',
  },
  openGraph: {
    title: 'Casino Platform Development Case Study | Kvaornux',
    description:
      'See how Kvaornux built a scalable mobile-first casino platform with game aggregator integrations, NGN wallet infrastructure, payments, affiliate tools and back-office operations.',
    url: 'https://kvaornux.com/igaming-case-studies/casino-platform-development/',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/case-studies/lakebets/lakebets-casino-platform-development.webp',
        width: 1200,
        height: 630,
        alt: 'Lakebets Mobile-First Casino Platform Development Case Study by Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casino Platform Development Case Study | Kvaornux',
    description:
      'See how Kvaornux built a scalable mobile-first casino platform with game aggregator integrations, NGN wallet infrastructure, payments, affiliate tools and back-office operations.',
    images: ['https://kvaornux.com/assets/case-studies/lakebets/lakebets-casino-platform-development.webp'],
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
        name: 'Portfolio',
        item: 'https://kvaornux.com/igaming-case-studies/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Casino Platform Development',
        item: 'https://kvaornux.com/igaming-case-studies/casino-platform-development/',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/igaming-case-studies/casino-platform-development/',
    },
    headline: 'Building a Scalable Mobile-First Casino Platform',
    description:
      'See how Kvaornux built a scalable mobile-first casino platform with game aggregator integrations, NGN wallet infrastructure, payments, affiliate tools and back-office operations.',
    image: 'https://kvaornux.com/assets/case-studies/lakebets/lakebets-casino-platform-development.webp',
    author: {
      '@type': 'Organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.webp',
      },
    },
    datePublished: '2026-10-04T00:00:00Z',
    dateModified: '2026-10-04T00:00:00Z',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <CasinoPlatformCaseStudyClient />
    </>
  );
}
