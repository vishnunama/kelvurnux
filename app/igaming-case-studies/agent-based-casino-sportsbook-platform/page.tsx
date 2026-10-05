import type { Metadata } from 'next';
import AgentBasedCasinoSportsbookCaseStudyClient from './Client';

export const metadata: Metadata = {
  title: 'Agent-Based Casino & Sportsbook Platform Case Study | Kvaornux',
  description:
    'See how Kvaornux developed a PKR-based casino and sportsbook platform with multi-tier agent management, exchange-style betting, casino games, real-time wallet operations and multi-layer back-office controls.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-case-studies/agent-based-casino-sportsbook-platform/',
  },
  openGraph: {
    title: 'Agent-Based Casino & Sportsbook Platform Case Study | Kvaornux',
    description:
      'See how Kvaornux developed a PKR-based casino and sportsbook platform with multi-tier agent management, exchange-style betting, casino games, real-time wallet operations and multi-layer back-office controls.',
    url: 'https://kvaornux.com/igaming-case-studies/agent-based-casino-sportsbook-platform/',
    siteName: 'Kvaornux',
    type: 'article',
    images: [
      {
        url: 'https://kvaornux.com/assets/case-studies/jeestfast24/jeetfast24-agent-based-casino-sportsbook-platform.webp',
        width: 1200,
        height: 630,
        alt: 'Jeetfast24 Agent-Based Casino & Sportsbook Platform Case Study by Kvaornux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent-Based Casino & Sportsbook Platform Case Study | Kvaornux',
    description:
      'See how Kvaornux developed a PKR-based casino and sportsbook platform with multi-tier agent management, exchange-style betting, casino games, real-time wallet operations and multi-layer back-office controls.',
    images: ['https://kvaornux.com/assets/case-studies/jeestfast24/jeetfast24-agent-based-casino-sportsbook-platform.webp'],
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
        name: 'Agent-Based Casino & Sportsbook Platform',
        item: 'https://kvaornux.com/igaming-case-studies/agent-based-casino-sportsbook-platform/',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/igaming-case-studies/agent-based-casino-sportsbook-platform/',
    },
    headline: 'Building a Multi-Tier Agent-Based Casino & Sportsbook Platform',
    description:
      'See how Kvaornux developed a PKR-based casino and sportsbook platform with multi-tier agent management, exchange-style betting, casino games, real-time wallet operations and multi-layer back-office controls.',
    image: 'https://kvaornux.com/assets/case-studies/jeestfast24/jeetfast24-agent-based-casino-sportsbook-platform.webp',
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
      <AgentBasedCasinoSportsbookCaseStudyClient />
    </>
  );
}
