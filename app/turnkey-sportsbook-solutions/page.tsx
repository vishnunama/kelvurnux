import type { Metadata } from 'next';
import TurnkeySportsbookSolutions from "./Client";

export const metadata: Metadata = {
  title: {
    absolute: "Turnkey Sportsbook Solutions | Sports Betting Software | Kvaornux",
  },
  description:
    "Launch your turnkey sportsbook platform with sports betting software, sportsbook API integration, live betting features, KYC verification, payment solutions, and white label sportsbook support.",
  alternates: {
    canonical: "/turnkey-sportsbook-solutions",
  },
  openGraph: {
    title: "Turnkey Sportsbook Solutions | Sports Betting Software | Kvaornux",
    description:
      "Launch your turnkey sportsbook platform with sports betting software, sportsbook API integration, live betting features, KYC verification, payment solutions, and white label sportsbook support.",
    url: "https://kvaornux.com/turnkey-sportsbook-solutions",
    siteName: "Kvaornux",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey Sportsbook Solutions | Sports Betting Software | Kvaornux",
    description:
      "Launch your turnkey sportsbook platform with sports betting software, sportsbook API integration, live betting features, KYC verification, payment solutions, and white label sportsbook support.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TurnkeySportsbookSolutions />
    </>
  );
}