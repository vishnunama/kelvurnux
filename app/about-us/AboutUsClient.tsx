'use client';

import FAQSection from '@/src/components/FAQSection/FAQSection';
import OurMissionSection from '@/src/components/Ourmissionsection/Ourmissionsection';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AboutUsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden pt-12"
      style={{
        background: `
          radial-gradient(167.61% 100% at 50% 100%, rgba(0, 235, 170, 0.22) 0%, rgba(11, 11, 15, 0) 25%),
          radial-gradient(129.09% 100% at 50% 100%, rgba(0, 235, 170, 0.10) 0%, rgba(11, 11, 15, 0) 45%),
          radial-gradient(64.91% 100% at 50% 100%, rgba(0, 235, 170, 0.04) 0%, rgba(11, 11, 15, 0) 88%),
          #0b0b0f
        `,
      }}
    >
      {/* Border Line Top */}
      <div
        className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 md:w-4/5"
        style={{
          background: 'linear-gradient(to right, rgba(0, 235, 170, 0) 0%, rgba(0, 235, 170, 0.8) 50%, rgba(0, 235, 170, 0) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Label */}
          <div className="mb-4 inline-flex items-center rounded-full bg-[#00ebaa]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00ebaa] border border-[#00ebaa]/20">
            Global B2B iGaming Technology
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
            Technology Built for iGaming
          </h1>

          {/* Subheading / Description Paragraphs */}
          <div className="mt-6 max-w-3xl space-y-4 text-base text-gray-300 sm:text-lg lg:text-xl leading-relaxed">
            <p>
              Kvaornux builds B2B technology for casino, sportsbook and digital gaming operations. Our platform ecosystem brings together gaming content, player management, wallets, payments, back-office tools and third-party integrations.
            </p>
            <p>
              We provide the core software foundation that powers modern gaming operations—enabling operators to launch efficiently, scale seamlessly across global markets, and maintain complete operational control over their business.
            </p>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20 flex justify-center">
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl">
            <Image
              src="/assets/solutions-bg.webp"
              alt="Kvaornux B2B iGaming Technology Ecosystem"
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <OurMissionSection />
      <FAQSection />
    </section>
  );
}
