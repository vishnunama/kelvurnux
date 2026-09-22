import type { Metadata } from 'next';
import AboutUsClient from './AboutUsClient';

export const metadata: Metadata = {
  title: {
    absolute: 'About Kvaornux | B2B iGaming Technology & Platform Provider',
  },
  description:
    'Learn about Kvaornux, a global B2B iGaming technology provider building platform ecosystems, casino software, sportsbook tech, and game API integrations.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Kvaornux | B2B iGaming Technology & Platform Provider',
    description:
      'Learn about Kvaornux, a global B2B iGaming technology provider building platform ecosystems, casino software, sportsbook tech, and game API integrations.',
    url: 'https://kvaornux.com/about-us',
    siteName: 'Kvaornux',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kvaornux | B2B iGaming Technology & Platform Provider',
    description:
      'Learn about Kvaornux, a global B2B iGaming technology provider building platform ecosystems, casino software, sportsbook tech, and game API integrations.',
  },
};

export default function AboutUsPage() {
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
        name: 'About Us',
        item: 'https://kvaornux.com/about-us',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutUsClient />
    </>
  );
}