import type { Metadata } from 'next';
import MarketAccessClient from './MarketAccessClient';

export const metadata: Metadata = {
  title: 'iGaming Market Access Guide for Operators',
  description:
    'Learn what to check before offering online casino or sports betting in a new market, from local licensing and advertising to payments and player controls.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/market-access',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: 'iGaming Market Access Guide for Operators | Kvaornux',
    description:
      'Learn what to check before offering online casino or sports betting in a new market, from local licensing and advertising to payments and player controls.',
    url: 'https://kvaornux.com/igaming-licensing/market-access',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGaming Market Access Guide for Operators | Kvaornux',
    description:
      'Learn what to check before offering online casino or sports betting in a new market, from local licensing and advertising to payments and player controls.',
  },
};

export default function MarketAccessPage() {
  return <MarketAccessClient />;
}

