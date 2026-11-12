import type { Metadata } from 'next';
import JurisdictionDetailClient from '../JurisdictionDetailClient';
import { kahnawakeData } from './data';

export const metadata: Metadata = {
  title: 'Kahnawake Gaming Commission License | iGaming Licensing & Regulations | Kvaornux',
  description:
    'Operational guide for the Kahnawake Gaming Commission regulatory framework, Client Provider Authorizations, and hosting architecture requirements.',
  alternates: {
    canonical: 'https://kvaornux.com/igaming-licensing/kahnawake',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function KahnawakeLicensingPage() {
  return <JurisdictionDetailClient data={kahnawakeData} />;
}

