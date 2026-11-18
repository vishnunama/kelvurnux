import type { Metadata } from 'next';
import EnterpriseCaseStudyTemplate from '@/src/components/casestudies/EnterpriseCaseStudyTemplate';
import { ENTERPRISE_CASE_STUDIES } from '@/src/data/caseStudiesData';

const data = ENTERPRISE_CASE_STUDIES['high-load-sportsbook-platform-development'];
const pageUrl = `https://kvaornux.com/igaming-case-studies/${data.slug}`;
const ogImage = `https://kvaornux.com${data.heroImage}`;

export const metadata: Metadata = {
  title: 'High-Load Sportsbook Platform Development Case Study | Kvaornux',
  description:
    'See how Kvaornux engineered a low-latency live sportsbook platform for a regulated LATAM operator with WebSocket odds streaming, dynamic cashout, single-wallet PAM, and real-time risk controls.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'High-Load Sportsbook Platform Development Case Study | Kvaornux',
    description:
      'Event-driven live sportsbook architecture with sub-140ms bet validation, multi-feed odds normalization, Bet Builder, and live liability trading desk.',
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
    title: 'High-Load Sportsbook Platform Development Case Study | Kvaornux',
    description:
      'Low-latency live sportsbook platform architecture with WebSocket odds feeds, dynamic cashout, and real-time risk management.',
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
    about: ['Sportsbook Platform Software', 'Live Betting Architecture', 'Risk & Liability Trading Desk', 'Single-Wallet PAM'],
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

