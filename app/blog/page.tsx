import type { Metadata } from 'next';
import BlogPage from "./BlogClient";

export const metadata: Metadata = {
  title: {
    absolute: "Casino Software & iGaming Development Blog | Kvaornux",
  },
  description:
    "Explore guides on casino software, white label solutions, sportsbook development, crypto casino, APIs and iGaming platform setup.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Casino Software & iGaming Development Blog | Kvaornux",
    description:
      "Explore guides on casino software, white label solutions, sportsbook development, crypto casino, APIs and iGaming platform setup.",
    url: "https://kvaornux.com/blog",
    siteName: "Kvaornux",
    type: "website",
    images: [
      {
        url: "https://kvaornux.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Casino Software & iGaming Development Blog | Kvaornux",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casino Software & iGaming Development Blog | Kvaornux",
    description:
      "Explore guides on casino software, white label solutions, sportsbook development, crypto casino, APIs and iGaming platform setup.",
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
        name: 'Blog',
        item: 'https://kvaornux.com/blog',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPage />
    </>
  );
}