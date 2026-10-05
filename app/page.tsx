import type { Metadata } from "next";
import BrandValuesSection from "@/src/components/brandvaluessection/Brandvaluessection";
import ContactForm from "@/src/components/contactform/ContactForm";
import FAQSection from "@/src/components/FAQSection/FAQSection";
import FeaturesSection from "@/src/components/features/FeaturesSection";
import HeroSection from "@/src/components/hero/HeroSection";
import ProvidersSection from "@/src/components/providerssection/ProvidersSection";
import SolutionsSection from "@/src/components/solutionssection/Solutionssection";
import StepsSection from "@/src/components/stepssection/StepsSection";

export const metadata: Metadata = {
  title: {
    absolute: "iGaming Technology, Casino & Sportsbook Platform | Kvaornux",
  },
  description:
    "Kvaornux provides B2B iGaming technology for casino, sportsbook, game aggregation, payments, player management and custom platform development.",
  alternates: {
    canonical: "/",
  },
};


export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kvaornux',
    url: 'https://kvaornux.com',
    logo: 'https://kvaornux.com/assets/logo.webp',
    description:
      'Kvaornux is an iGaming technology company providing casino platforms, sportsbook technology, game aggregation, PAM and wallet systems, back-office tools, payment integrations and bespoke iGaming development.',
    email: 'info@kvaornux.com',
    telephone: '+917240328393',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+917240328393',
      email: 'info@kvaornux.com',
      contactType: 'sales',
    },
    sameAs: ['https://www.linkedin.com/company/kvaornux/'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kvaornux',
    url: 'https://kvaornux.com',
  };

  return (
    <div className="bg-[#0b0b0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HeroSection />
      <FeaturesSection />
      <BrandValuesSection />
      <ProvidersSection />
      <SolutionsSection />
      <StepsSection />
      <FAQSection />
      <section id="contact-form-section">
        <ContactForm />
      </section>
    </div>
  );
}