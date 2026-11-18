import type { Metadata } from 'next';
import EnterpriseCaseStudyTemplate from '@/src/components/casestudies/EnterpriseCaseStudyTemplate';
import { ENTERPRISE_CASE_STUDIES } from '@/src/data/caseStudiesData';

const data = ENTERPRISE_CASE_STUDIES['us-sweepstakes-casino-platform-development'];
const pageUrl = `https://kvaornux.com/igaming-case-studies/${data.slug}`;
const ogImage = `https://kvaornux.com${data.heroImage}`;

export const metadata: Metadata = {
  title: 'US Sweepstakes Casino Platform Development Case Study | Kvaornux',
  description:
    'See how Kvaornux engineered a North American dual-currency sweepstakes casino platform with isolated Gold Coin & Sweeps Coin ledgers, AMOE compliance workflows, state geo-fencing, and KYC webhooks.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'US Sweepstakes Casino Platform Development Case Study | Kvaornux',
    description:
      'Dual-currency Gold Coin & Sweeps Coin ledger architecture, AMOE workflow engine, state-level geo-fencing, and third-party game API integration engineered by Kvaornux.',
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
    title: 'US Sweepstakes Casino Platform Development Case Study | Kvaornux',
    description:
      'Dual-currency sweepstakes casino platform architecture, isolated GC/SC wallet ledger, AMOE compliance tooling, and mobile-first H5 lobby.',
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
    about: ['Sweepstakes Casino Software', 'Dual-Currency Ledger', 'iGaming Platform Engineering', 'AMOE Compliance Software'],
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

