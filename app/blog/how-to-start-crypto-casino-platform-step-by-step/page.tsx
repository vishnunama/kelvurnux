import type { Metadata } from 'next';
import CryptoCasinoBlogClient from "./CryptoCasinoBlogClient";

export const metadata: Metadata = {
  title: {
    absolute: "How to Start Crypto Casino Platform Step by Step (2026 Guide) | Kvaornux",
  },
  description:
    "Learn how to start a crypto casino platform step by step including crypto casino development, software, APIs, cost, and launch strategy. Complete guide.",
  alternates: {
    canonical: "/blog/how-to-start-crypto-casino-platform-step-by-step",
  },
  openGraph: {
    title: "How to Start Crypto Casino Platform Step by Step (2026 Guide) | Kvaornux",
    description:
      "Learn how to start a crypto casino platform step by step including crypto casino development, software, APIs, cost, and launch strategy.",
    url: "https://kvaornux.com/blog/how-to-start-crypto-casino-platform-step-by-step",
    siteName: "Kvaornux",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Start Crypto Casino Platform Step by Step (2026 Guide) | Kvaornux",
    description:
      "Learn how to start a crypto casino platform step by step including crypto casino development, software, APIs, cost, and launch strategy.",
  },
};

export default function Page() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'How to Start a Crypto Casino Platform Step by Step in 2026',
    description:
      'Learn how to start a crypto casino platform step by step including crypto casino development, software, APIs, cost, and launch strategy.',
    url: 'https://kvaornux.com/blog/how-to-start-crypto-casino-platform-step-by-step',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://kvaornux.com/blog/how-to-start-crypto-casino-platform-step-by-step',
    },
    datePublished: '2026-09-01',
    dateModified: '2026-09-22',
    author: {
      '@type': 'Organization',
      name: 'Kvaornux Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kvaornux',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kvaornux.com/assets/logo.png',
      },
    },
  };

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
        name: 'Blog',
        item: 'https://kvaornux.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'How to Start Crypto Casino Platform Step by Step',
        item: 'https://kvaornux.com/blog/how-to-start-crypto-casino-platform-step-by-step',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CryptoCasinoBlogClient />
    </>
  );
}