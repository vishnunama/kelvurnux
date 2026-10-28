import type { Metadata } from 'next';
import WhiteLabelCasinoPlatform from "./Client";
import { WHITE_LABEL_FAQS } from "./faqData";

export const metadata: Metadata = {
  title: {
    absolute: "White Label Casino Software & Solutions | KVAORNUX",
  },
  description:
    "Launch your branded casino with KVAORNUX's ready-made white label casino software. Fast deployment, 150+ game provider integrations and flexible branding.",
  alternates: {
    canonical: "/white-label-casino-solutions",
  },
  openGraph: {
    title: "White Label Casino Software & Solutions | KVAORNUX",
    description:
      "Launch your branded casino with KVAORNUX's ready-made white label casino software. Fast deployment, 150+ game provider integrations and flexible branding.",
    url: "https://kvaornux.com/white-label-casino-solutions",
    siteName: "Kvaornux",
    type: "website",
    images: [
      {
        url: "https://kvaornux.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "White Label Casino Software & Solutions | KVAORNUX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "White Label Casino Software & Solutions | KVAORNUX",
    description:
      "Launch your branded casino with KVAORNUX's ready-made white label casino software. Fast deployment, 150+ game provider integrations and flexible branding.",
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
        name: 'White Label Casino Software',
        item: 'https://kvaornux.com/white-label-casino-solutions',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://kvaornux.com/white-label-casino-solutions#service',
    name: 'White Label Casino Software & Solutions',
    url: 'https://kvaornux.com/white-label-casino-solutions',
    provider: {
      '@type': 'Organization',
      '@id': 'https://kvaornux.com/#organization',
      name: 'Kvaornux',
      url: 'https://kvaornux.com/',
    },
    description:
      "Launch your branded casino with KVAORNUX's ready-made white label casino software. Fast deployment, 150+ game provider integrations and flexible branding.",
    areaServed: 'Global',
    serviceType: 'iGaming Platform Development',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: WHITE_LABEL_FAQS.map((faq) => ({
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
      <WhiteLabelCasinoPlatform />
    </>
  );
}