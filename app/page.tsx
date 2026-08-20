import BrandValuesSection from "@/src/components/brandvaluessection/Brandvaluessection";
import ContactForm from "@/src/components/contactform/ContactForm";
import FAQSection from "@/src/components/FAQSection/FAQSection";
import FeaturesSection from "@/src/components/features/FeaturesSection";
import HeroSection from "@/src/components/hero/HeroSection";
import OpportunitiesSection from "@/src/components/opportunitiessection/Opportunitiessection";
import SolutionsSection from "@/src/components/solutionssection/Solutionssection";
import StepsSection from "@/src/components/stepssection/StepsSection";


export default function Home() {
  return (
    <main className="bg-[#0b0b0f]">
      <HeroSection />
      <FeaturesSection />
      <BrandValuesSection />
      <SolutionsSection />
      <StepsSection />
      <OpportunitiesSection/>
      <FAQSection/>
<section id="contact-form-section">
  <ContactForm/>
</section>
    </main>
  );
}