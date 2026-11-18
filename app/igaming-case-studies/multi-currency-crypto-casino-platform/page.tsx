import type { Metadata } from 'next';
import EnterpriseCaseStudyTemplate from '@/src/components/casestudies/EnterpriseCaseStudyTemplate';
import { ENTERPRISE_CASE_STUDIES } from '@/src/data/caseStudiesData';

const data = ENTERPRISE_CASE_STUDIES['multi-currency-crypto-casino-platform'];
const pageUrl = `https://kvaornux.com/igaming-case-studies/${data.slug}`;
const ogImage = `https://kvaornux.com${data.heroImage}`;

export const metadata: Metadata = {
  title: 'Multi-Currency Crypto & Fiat Casino Platform Case Study | Kvaornux',
  description:
    'See how Kvaornux engineered a hybrid crypto and fiat casino platform with 8-decimal precision ledgers, automated AML/KYC triggers, VIP rakeback gamification, and licensed payment webhooks.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Multi-Currency Crypto & Fiat Casino Platform Case Study | Kvaornux',
    description:
      'Fixed-point multi-currency wallet core, automated KYC/AML threshold escalation, VIP loyalty engine, and third-party payment gateway integration.',
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
    title: 'Multi-Currency Crypto & Fiat Casino Platform Case Study | Kvaornux',
    description:
      'Hybrid crypto & fiat online casino architecture featuring fixed-point ledgers, automated AML/KYC workflows, and VIP retention mechanics.',
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
    about: ['Crypto Casino Software', 'Multi-Currency Wallet Ledger', 'AML & KYC Compliance Tools', 'VIP Loyalty Engine'],
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

