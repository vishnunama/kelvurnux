import type { Metadata } from 'next';
import Pori444CaseStudyClient from './Client';

export const metadata: Metadata = {
  title: 'Bangladesh iGaming Platform Case Study | Kvaornux',
  description:
    'See how Kvaornux built a localized iGaming platform for Bangladesh with BDT payments, multi-provider game integration, a 7-level affiliate system, player rewards and advanced back-office operations.',
  alternates: {
    canonical:
      'https://kvaornux.com/igaming-case-studies/building-a-localized-igaming-platform-for-bangladesh/',
  },
  openGraph: {
    title: 'Bangladesh iGaming Platform Case Study | Kvaornux',
    description:
      'See how Kvaornux built a localized iGaming platform for Bangladesh with BDT payments, multi-provider game integration, a 7-level affiliate system, player rewards and advanced back-office operations.',
    url: 'https://kvaornux.com/igaming-case-studies/building-a-localized-igaming-platform-for-bangladesh/',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/case-studies/pori444/Pori444 Mobile Casino Gaming Platform.png',
        width: 1200,
        height: 630,
        alt: 'Pori444 Mobile-First Localized iGaming Platform Case Study for Bangladesh by Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bangladesh iGaming Platform Case Study | Kvaornux',
    description:
      'See how Kvaornux built a localized iGaming platform for Bangladesh with BDT payments, multi-provider game integration, a 7-level affiliate system, player rewards and advanced back-office operations.',
    images: [
      'https://kvaornux.com/assets/case-studies/pori444/Pori444 Mobile Casino Gaming Platform.png',
    ],
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
        name: 'Bangladesh iGaming Platform Case Study',
        item: 'https://kvaornux.com/igaming-case-studies/building-a-localized-igaming-platform-for-bangladesh/',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/igaming-case-studies/building-a-localized-igaming-platform-for-bangladesh/',
    },
    headline: 'Building a Localized iGaming Platform for the Bangladesh Market',
    description:
      'See how Kvaornux built a localized iGaming platform for Bangladesh with BDT payments, multi-provider game integration, a 7-level affiliate system, player rewards and advanced back-office operations.',
    image:
      'https://kvaornux.com/assets/case-studies/pori444/Pori444 Mobile Casino Gaming Platform.png',
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
        url: 'https://kvaornux.com/assets/logo.png',
      },
    },
    datePublished: '2026-10-05T00:00:00Z',
    dateModified: '2026-10-05T00:00:00Z',
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
      <Pori444CaseStudyClient />
    </>
  );
}
