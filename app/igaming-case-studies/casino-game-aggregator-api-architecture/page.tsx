import type { Metadata } from 'next';
import EnterpriseCaseStudyTemplate from '@/src/components/casestudies/EnterpriseCaseStudyTemplate';
import { ENTERPRISE_CASE_STUDIES } from '@/src/data/caseStudiesData';

const data = ENTERPRISE_CASE_STUDIES['casino-game-aggregator-api-architecture'];
const pageUrl = `https://kvaornux.com/igaming-case-studies/${data.slug}`;
const ogImage = `https://kvaornux.com${data.heroImage}`;

export const metadata: Metadata = {
  title: 'Casino Game Aggregator API Architecture Case Study | Kvaornux',
  description:
    'See how Kvaornux built a unified casino game aggregator API middleware with idempotent Seamless Wallet callbacks, automated round rollback recovery, and real-time GGR reconciliation.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Casino Game Aggregator API Architecture Case Study | Kvaornux',
    description:
      'Single normalized game integration gateway abstracting 100+ studio adapters behind an idempotent Seamless Wallet API with live telemetry and GGR audit reports.',
    url: pageUrl,
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: ogImage,
        width: 1440,
        height: 810,
        alt: data.heroImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casino Game Aggregator API Architecture Case Study | Kvaornux',
    description:
      'Unified casino game aggregator API middleware with sub-95ms gateway overhead, idempotent callbacks, and automated GGR reconciliation.',
    images: [ogImage],
  },
};

export default function Page() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kvaornux.com/' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://kvaornux.com/igaming-case-studies' },
      { '@type': 'ListItem', position: 3, name: data.eyebrow, item: pageUrl },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    headline: data.title,
    description: data.subtitle,
    image: [ogImage, `https://kvaornux.com${data.dashboardImage}`],
    author: { '@type': 'Organization', name: 'Kvaornux', url: 'https://kvaornux.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com',
      logo: { '@type': 'ImageObject', url: 'https://kvaornux.com/assets/logo.webp' },
    },
    about: ['Casino Game Aggregator API', 'Seamless Wallet Architecture', 'iGaming Middleware', 'GGR Reconciliation'],
    datePublished: '2026-11-18T00:00:00Z',
    dateModified: '2026-11-18T00:00:00Z',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <EnterpriseCaseStudyTemplate data={data} />
    </>
  );
}

