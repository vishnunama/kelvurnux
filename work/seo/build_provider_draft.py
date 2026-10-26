"""One-time construction of a local editorial preview using the existing blog UI."""
from pathlib import Path
import html
import json
import re

root = Path(__file__).resolve().parents[2]
base = root / 'app/blog/sweepstakes-casino-api-integration'
slug = 'choosing-sweepstakes-casino-software-provider'
target = root / 'app/blog' / slug
assert not target.exists(), 'Do not overwrite an existing article'
draft = (root / 'work/seo/sweepstakes-provider-checklist-draft.md').read_text()
title = draft.splitlines()[0][2:]
description = 'Compare sweepstakes casino software providers on scope, integrations, costs, testing and handover. A practical checklist for platform buyers.'
image = '/assets/features/what-is-sweepstakes-casino-software-banner.webp'

def inline(text):
    parts = []
    last = 0
    for m in re.finditer(r'\[([^\]]+)\]\(([^)]+)\)', text):
        parts.append(html.escape(text[last:m.start()]))
        label, url = map(html.escape, m.groups())
        if url.startswith('/'):
            parts.append(f'<Link href="{url}" className="text-cyan-400 underline hover:text-cyan-300">{label}</Link>')
        else:
            parts.append(f'<a href="{url}" className="text-cyan-400 underline hover:text-cyan-300" target="_blank" rel="noopener noreferrer">{label}</a>')
        last = m.end()
    parts.append(html.escape(text[last:]))
    return ''.join(parts)

faqs = []
faq_text = draft.split('## Questions to bring to the proposal review\n', 1)[1].split('\n## Discuss a defined scope', 1)[0]
for question, answer in re.findall(r'### ([^\n]+)\n\n([\s\S]*?)(?=\n### |\Z)', faq_text):
    faqs.append({'question': question.strip(), 'answer': answer.strip()})
assert len(faqs) == 5
sections = []
for heading, body in re.findall(r'^## ([^\n]+)\n\n([\s\S]*?)(?=^## |\Z)', draft, re.M):
    if heading.startswith(('Editorial research', 'Questions to bring')):
        continue
    section_id = re.sub(r'[^a-z0-9]+', '-', heading.lower()).strip('-')
    paragraphs = '\n'.join('<p>'+inline(p.strip())+'</p>' for p in body.strip().split('\n\n'))
    sections.append('  { id: '+json.dumps(section_id)+', title: '+json.dumps(heading)+', content: (<>\n'+paragraphs+'\n</>) },')
assert len(sections) == 8

client = (base / 'SweepstakesApiBlogClient.tsx').read_text()
start = client.index('const blogSections: BlogSection[] = [')
end = client.index('export default function SweepstakesApiBlogClient()', start)
client = client[:start]+'const blogSections: BlogSection[] = [\n'+'\n'.join(sections)+'\n];\n\n'+client[end:]
client = client.replace('SweepstakesApiBlogClient', 'ProviderChecklistClient')
client = client.replace('import { faqList } from \'./faqData\';', 'import { faqList } from \'./articleData\';')
client = client.replace('title="Sweepstakes Casino API Integration: How Games Connect to Dual-Currency Wallets"', 'title='+json.dumps(title))
client = client.replace('date="06.10.2026"', 'date="Local draft · 26.10.2026"')
client = client.replace('readTime="15 min read"', 'readTime="7 min read"')
client = client.replace("tags={['Sweepstakes', 'API Integration', 'Dual Currency', 'Game Aggregator']}", "tags={['Sweepstakes', 'Buyer Guide', 'Platform Selection']}")
client = client.replace('bannerImage="/assets/features/sweepstakes-casino-api-integration-banner.webp"', 'bannerImage='+json.dumps(image)+'\n        authorRole="Editorial"\n        factCheckerName=""')
client = client.replace('breadcrumbCurrent="Sweepstakes Casino API Integration"', 'breadcrumbCurrent="Software Provider Checklist"')
client = client.replace('currentSlug="sweepstakes-casino-api-integration"', 'currentSlug='+json.dumps(slug))
# Retain the existing CTA appearance while using Next.js navigation in this new route.
client = client.replace('<a\n                          href="/#contact-form-section"', '<Link\n                          href="/#contact-form-section"').replace("{section.ctaText || 'Get Demo'}\n                        </a>", "{section.ctaText || 'Discuss Your Project'}\n                        </Link>")

target.mkdir()
(target / 'ProviderChecklistClient.tsx').write_text(client)
(target / 'articleData.ts').write_text('export const articleTitle = '+json.dumps(title)+';\nexport const articleDescription = '+json.dumps(description)+';\nexport const articleImage = '+json.dumps(image)+';\nexport const faqList = '+json.dumps(faqs, ensure_ascii=False, indent=2)+';\n')
(target / 'page.tsx').write_text('''import type { Metadata } from 'next';
import ProviderChecklistClient from './ProviderChecklistClient';
import { articleTitle, articleDescription, articleImage, faqList } from './articleData';

const url = 'https://kvaornux.com/blog/choosing-sweepstakes-casino-software-provider';

// Local editorial preview: remove draft restrictions only during a human-led release.
export const metadata: Metadata = {
  title: { absolute: 'Choosing a Sweepstakes Casino Software Provider | Kvaornux' },
  description: articleDescription,
  robots: { index: false, follow: true },
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
    {[article, breadcrumb, faq].map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\\\u003c') }} />)}
    <ProviderChecklistClient />
  </>;
}
''')
print(f'Created local preview with {len(sections)} sections and {len(faqs)} shared FAQs: {target}')
