import type { Metadata } from 'next';
import TurnkeyIgamingPlatform from "./Client";

export const metadata: Metadata = {
  title: {
    absolute: "Turnkey iGaming Solution | Casino & Sportsbook Platform | Kvaornux",
  },
  description:
    "Launch your turnkey iGaming platform with casino & sportsbook integration, 20,000+ games, secure payments, KYC system, and full admin control.",
  alternates: {
    canonical: "/turnkey-casino-software-solutions",
  },
  openGraph: {
    title: "Turnkey iGaming Solution | Casino & Sportsbook Platform | Kvaornux",
    description:
      "Launch your turnkey iGaming platform with casino & sportsbook integration, 20,000+ games, secure payments, KYC system, and full admin control.",
    url: "https://kvaornux.com/turnkey-casino-software-solutions",
    siteName: "Kvaornux",
    type: "website",
    images: [
      {
        url: "https://kvaornux.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Turnkey iGaming Solution | Casino & Sportsbook Platform | Kvaornux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey iGaming Solution | Casino & Sportsbook Platform | Kvaornux",
    description:
      "Launch your turnkey iGaming platform with casino & sportsbook integration, 20,000+ games, secure payments, KYC system, and full admin control.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TurnkeyIgamingPlatform />
    </>
  );
}