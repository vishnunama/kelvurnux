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
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'About Kvaornux | B2B iGaming Technology & Platform Provider',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kvaornux | B2B iGaming Technology & Platform Provider',
    description:
      'Learn about Kvaornux, a global B2B iGaming technology provider building platform ecosystems, casino software, sportsbook tech, and game API integrations.',
    images: ['https://kvaornux.com/assets/og-image.webp'],
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