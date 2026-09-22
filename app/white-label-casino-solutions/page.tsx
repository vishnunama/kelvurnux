import type { Metadata } from 'next';
import WhiteLabelCasinoPlatform from "./Client";

export const metadata: Metadata = {
  title: {
    absolute: "White Label Casino Solution | Crypto Casino Software | Kvaornux",
  },
  description:
    "Launch your own white label crypto casino solution with 150+ APIs, sportsbook, slots, crypto payments, and full admin & affiliate system.",
  alternates: {
    canonical: "/white-label-casino-solutions",
  },
  openGraph: {
    title: "White Label Casino Solution | Crypto Casino Software | Kvaornux",
    description:
      "Launch your own white label crypto casino solution with 150+ APIs, sportsbook, slots, crypto payments, and full admin & affiliate system.",
    url: "https://kvaornux.com/white-label-casino-solutions",
    siteName: "Kvaornux",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Label Casino Solution | Crypto Casino Software | Kvaornux",
    description:
      "Launch your own white label crypto casino solution with 150+ APIs, sportsbook, slots, crypto payments, and full admin & affiliate system.",
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
        name: 'White Label Casino Solutions',
        item: 'https://kvaornux.com/white-label-casino-solutions',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WhiteLabelCasinoPlatform />
    </>
  );
}