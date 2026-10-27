import type { Metadata } from 'next';
import ProviderChecklistClient from './ProviderChecklistClient';
import { articleTitle, articleSeoTitle, articleDescription, articleImage, faqList } from './articleData';

const url = 'https://kvaornux.com/blog/choosing-sweepstakes-casino-software-provider';

// Local editorial preview: remove draft restrictions only during a human-led release.
export const metadata: Metadata = {
  title: { absolute: articleSeoTitle },
  description: articleDescription,
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    url,
    siteName: 'Kvaornux',
    type: 'article',
    images: [{ url: articleImage, alt: articleTitle }],
  },
  twitter: { card: 'summary_large_image', title: articleTitle, description: articleDescription, images: [articleImage] },
};

export default function Page() {
  const article = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: articleTitle, description: articleDescription, url,
    image: 'https://kvaornux.com' + articleImage,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: 'Kvaornux Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Kvaornux', url: 'https://kvaornux.com/' },
  };
  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kvaornux.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://kvaornux.com/blog' },
      { '@type': 'ListItem', position: 3, name: articleTitle, item: url },
    ],
  };
  const faq = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqList.map(({ question, answer }) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  return <>
    {[article, breadcrumb, faq].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />)}
    <ProviderChecklistClient />
  </>;
}
