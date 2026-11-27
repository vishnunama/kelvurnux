import type { Metadata } from 'next';
import ChecklistClient from './ChecklistClient';

export const metadata: Metadata = {
  title: 'Online Casino Licensing Checklist for Operators',
  description:
    'Prepare for an online casino licence application. Organize your target markets, company documents, budget, games, payments and software requirements.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/checklist',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Online Casino Licensing Checklist for Operators | Kvaornux',
    description:
      'Prepare for an online casino licence application. Organize your target markets, company documents, budget, games, payments and software requirements.',
    url: 'https://kvaornux.com/igaming-licensing/checklist',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Casino Licensing Checklist for Operators | Kvaornux',
    description:
      'Prepare for an online casino licence application. Organize your target markets, company documents, budget, games, payments and software requirements.',
  },
};

export default function LicensingChecklistPage() {
  return <ChecklistClient />;
}

