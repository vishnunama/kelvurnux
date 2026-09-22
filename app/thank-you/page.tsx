import type { Metadata } from 'next';
import ThankYouClient from './ThankYouClient';

export const metadata: Metadata = {
  title: 'Thank You | Kvaornux',
  description: 'Thank you for contacting Kvaornux.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: '/thank-you',
  },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}