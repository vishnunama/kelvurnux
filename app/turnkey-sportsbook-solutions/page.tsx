import type { Metadata } from 'next';
import TurnkeySportsbookSolutions from "./Client";
import { TURNKEY_SPORTSBOOK_FAQS } from './faqData';

export const metadata: Metadata = {
  title: {
    absolute: "Turnkey Sportsbook Solutions | Sports Betting Software | Kvaornux",
  },
  description:
    "Launch your turnkey sportsbook platform with enterprise turnkey sportsbook software and turnkey sports betting solutions. Full bookmaking autonomy, official odds feeds, live streaming, casino integration, KYC verification, and B2B betting provider support.",
  alternates: {
    canonical: "/turnkey-sportsbook-solutions",
  },
  openGraph: {
    title: "Turnkey Sportsbook Solutions | Sports Betting Software | Kvaornux",
    description:
      "Launch your turnkey sportsbook platform with enterprise turnkey sportsbook software and turnkey sports betting solutions. Full bookmaking autonomy, official odds feeds, live streaming, casino integration, KYC verification, and B2B betting provider support.",
    url: "https://kvaornux.com/turnkey-sportsbook-solutions",
    siteName: "Kvaornux",
    type: "website",
    images: [
      {
        url: "https://kvaornux.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Turnkey Sportsbook Solutions | Sports Betting Software | Kvaornux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey Sportsbook Solutions | Sports Betting Software | Kvaornux",
    description:
      "Launch your turnkey sportsbook platform with enterprise turnkey sportsbook software and turnkey sports betting solutions. Full bookmaking autonomy, official odds feeds, live streaming, casino integration, KYC verification, and B2B betting provider support.",
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
        name: 'Turnkey Sportsbook Solutions',
        item: 'https://kvaornux.com/turnkey-sportsbook-solutions',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/turnkey-sportsbook-solutions#service',
    name: 'Turnkey Sportsbook Solutions and Sports Betting Platform',
    serviceType: 'Turnkey Sportsbook Software & B2B Betting Platform Solutions',
    description:
      'Complete turnkey online casino and sportsbook software solution for licensed operators. Includes sub-second odds feeds, automated liability trading desk, single-wallet PAM, payment gateways, KYC/AML compliance, and mobile betting apps.',
    url: 'https://kvaornux.com/turnkey-sportsbook-solutions',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    areaServed: 'Global',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TURNKEY_SPORTSBOOK_FAQS.map((faq) => ({
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
      <TurnkeySportsbookSolutions />
    </>
  );
}
