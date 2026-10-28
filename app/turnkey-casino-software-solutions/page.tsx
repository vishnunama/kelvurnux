import type { Metadata } from 'next';
import TurnkeyCasinoPlatform from "./Client";
import { TURNKEY_FAQS } from "./faqData";

export const metadata: Metadata = {
  title: {
    absolute: "Turnkey Casino Software & Solutions | KVAORNUX",
  },
  description:
    "Launch your casino and sportsbook with KVAORNUX turnkey casino software. Get a complete gaming platform with source code, game integrations, and admin tools.",
  alternates: {
    canonical: "/turnkey-casino-software-solutions",
  },
  openGraph: {
    title: "Turnkey Casino Software & Solutions | KVAORNUX",
    description:
      "Launch your casino and sportsbook with KVAORNUX turnkey casino software. Get a complete gaming platform with source code, game integrations, and admin tools.",
    url: "https://kvaornux.com/turnkey-casino-software-solutions",
    siteName: "Kvaornux",
    type: "website",
    images: [
      {
        url: "https://kvaornux.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Turnkey Casino Software & Solutions | KVAORNUX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey Casino Software & Solutions | KVAORNUX",
    description:
      "Launch your casino and sportsbook with KVAORNUX turnkey casino software. Get a complete gaming platform with source code, game integrations, and admin tools.",
    images: ["https://kvaornux.com/assets/og-image.webp"],
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
        name: 'Turnkey Casino Software Solutions',
        item: 'https://kvaornux.com/turnkey-casino-software-solutions',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/turnkey-casino-software-solutions#service',
    name: 'Turnkey Casino Software & Solutions',
    url: 'https://kvaornux.com/turnkey-casino-software-solutions',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    description:
      "Launch your casino and sportsbook with KVAORNUX turnkey casino software. Get a complete gaming platform with source code, game integrations, and admin tools.",
    areaServed: 'Global',
    serviceType: 'iGaming Platform Development',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TURNKEY_FAQS.map((faq) => ({
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
      <TurnkeyCasinoPlatform />
    </>
  );
}