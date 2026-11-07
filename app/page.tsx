import type { Metadata } from "next";
import BrandValuesSection from "@/src/components/brandvaluessection/Brandvaluessection";
import ContactForm from "@/src/components/contactform/ContactForm";
import FAQSection from "@/src/components/FAQSection/FAQSection";
import FeaturesSection from "@/src/components/features/FeaturesSection";
import HeroSection from "@/src/components/hero/HeroSection";
import ProvidersSection from "@/src/components/providerssection/ProvidersSection";
import PaymentGatewaysSection from "@/src/components/paymentgateways/PaymentGatewaysSection";
import SolutionsSection from "@/src/components/solutionssection/Solutionssection";
import StepsSection from "@/src/components/stepssection/StepsSection";
import TestimonialsSection from "@/src/components/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: {
    absolute: "iGaming Software: White Label, Turnkey & Custom | Kvaornux",
  },
  description:
    "White-label casino, turnkey casino and sportsbook, and sweepstakes software. Kvaornux customizes your platform and connects games, payments and player management.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Kvaornux",
    title: "iGaming Software: White Label, Turnkey & Custom | Kvaornux",
    description:
      "White-label casino, turnkey casino and sportsbook, and sweepstakes software. Kvaornux customizes your platform and connects games, payments and player management.",
    url: "https://kvaornux.com/",
    images: [
      {
        url: "https://kvaornux.com/assets/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Kvaornux iGaming Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iGaming Software: White Label, Turnkey & Custom | Kvaornux",
    description:
      "White-label casino, turnkey casino and sportsbook, and sweepstakes software. Kvaornux customizes your platform and connects games, payments and player management.",
    images: ["https://kvaornux.com/assets/og-image.webp"],
  },
};

const homepageFaqs = [
  {
    question: 'What iGaming technology does Kvaornux provide?',
    answer:
      'Kvaornux develops casino, sportsbook and sweepstakes platforms. We also provide game aggregation, player and wallet management, back-office tools, payment integrations and custom software development.',
  },
  {
    question: 'Can Kvaornux provide both casino and sportsbook technology?',
    answer:
      'Yes. Casino and sportsbook can be delivered as part of the same platform or integrated separately, depending on the operator’s existing setup and requirements.',
  },
  {
    question:
      'What is the difference between a turnkey platform and a white label solution?',
    answer:
      'Our turnkey package includes casino, sportsbook and platform source code, with ownership and transfer terms defined in the project agreement. Our white label casino uses a ready-made platform customized for your brand, with a lower upfront development cost. Source code is available for an additional fee.',
  },
  {
    question: 'How does Kvaornux game aggregation work?',
    answer:
      'Our game aggregation setup connects multiple game providers through a unified integration layer. This gives operators access to a broad game portfolio without having to build and maintain a separate integration for every provider.',
  },
  {
    question:
      'Can you integrate third-party game providers, payment systems and APIs?',
    answer:
      'Yes. We can integrate third-party game providers, payment services and other APIs based on the technical requirements of the project and the availability of documentation and access from the provider.',
  },
  {
    question: 'Can the platform support multiple currencies and markets?',
    answer:
      'Yes. Multi-currency and market-specific configurations can be implemented based on the project requirements, including payment methods, language support and other regional settings.',
  },
  {
    question: 'How long does it take to launch an iGaming platform?',
    answer:
      'The timeline depends on the scope of the project, required integrations and level of customization. Once the requirements are defined, we provide a project plan with the expected development, integration, testing and launch stages.',
  },
  {
    question: 'Do you provide technical support after launch?',
    answer:
      'Yes. We provide post-launch technical support for platform maintenance, integrations, issue resolution and agreed updates. The exact support scope is defined for each project.',
  },
];

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
      <PaymentGatewaysSection />
      <SolutionsSection />
      <StepsSection />
      <TestimonialsSection />
      <FAQSection customFaqData={homepageFaqs} />
      <section id="contact-form-section">
        <ContactForm />
      </section>
    </div>
  );
}