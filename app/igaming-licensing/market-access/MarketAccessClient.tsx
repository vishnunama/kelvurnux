'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CreditCard,
  ExternalLink,
  FileCheck2,
  Globe,
  Megaphone,
  Settings2,
  UserCheck,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore, { DiscoverItem } from '@/src/components/Discovermore/Discovermore';
import FAQSection from '@/src/components/FAQSection/FAQSection';

const marketCheckItems: DiscoverItem[] = [
  {
    id: 1,
    title: '1. Product and location',
    description:
      'List the country, state or province where players will be. Check online casino, fixed-odds betting and any other planned products separately.',
    icon: Globe,
    span: 2,
  },
  {
    id: 2,
    title: '2. Local permissions',
    description:
      'Confirm which entity will operate the site and what licence, registration or other approval it needs. Ask your legal adviser to verify the route.',
    icon: FileCheck2,
    span: 2,
  },
  {
    id: 3,
    title: '3. Player eligibility',
    description:
      'Confirm the applicable age, identity and location checks. Write down when the platform must check eligibility and what happens when a player fails a check.',
    icon: UserCheck,
    span: 2,
  },
  {
    id: 4,
    title: '4. Games and payments',
    description:
      'Ask your game and payment providers whether they support the market, product and operator entity. Record any approval or onboarding requirements.',
    icon: CreditCard,
    span: 3,
  },
  {
    id: 5,
    title: '5. Advertising and promotions',
    description:
      'Check the rules for bonuses, affiliate campaigns and paid advertising before creating a marketing plan.',
    icon: Megaphone,
    span: 3,
  },
  {
    id: 6,
    title: '6. Platform settings and records',
    description:
      'Document the controls your team needs for access, safer gambling, payments and reporting. Assign someone to review these settings whenever you add a market.',
    icon: Settings2,
    span: 6,
  },
];

const localExamples = [
  {
    title: 'Great Britain',
    description:
      'The UK Gambling Commission says businesses need its licence if they provide remote gambling facilities to consumers in Great Britain.',
    bullets: [
      'Applies when providing remote gambling facilities to consumers in Great Britain',
      'Check product scope separately for online casino and betting',
      'Verify official UKGC licence and fee requirements before launch',
    ],
    linkLabel: 'UK Gambling Commission: Remote licences',
    href: 'https://www.gamblingcommission.gov.uk/licensees-and-businesses/licences-and-fees/sector/remote',
  },
  {
    title: 'Ontario',
    description:
      'iGaming Ontario says online gaming operators must complete steps with both iGaming Ontario and the Alcohol and Gaming Commission of Ontario before offering services to players in Ontario.',
    bullets: [
      'Requires completing steps with both iGaming Ontario and the AGCO',
      'Confirm entity, product and technical requirements before accepting Ontario players',
      'Review official onboarding steps directly on iGaming Ontario',
    ],
    linkLabel: 'iGaming Ontario: Steps to join',
    href: 'https://igamingontario.ca/en/operator/steps-join-ontario-market',
  },
];

const faqs = [
  {
    question: 'Can I use one gaming licence in every country?',
    answer:
      'Check the licence conditions and the rules in each market. Some markets require their own permissions before you can accept players.',
  },
  {
    question: 'Should I check casino and sports betting separately?',
    answer:
      'Yes. Check the rules for each product you plan to offer in each country, state or province.',
  },
  {
    question: 'What should I share with my software provider?',
    answer:
      'Share the target markets, planned products, selected games and payments, and the controls your adviser has confirmed.',
  },
  {
    question: 'Can Kvaornux confirm where I can legally operate?',
    answer:
      'Kvaornux scopes and develops software. Confirm market permissions with your legal adviser and the relevant authorities.',
  },
];

export default function MarketAccessClient() {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const section =
      document.getElementById('contact-us') ||
      document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
    }
  };

  return (
    <div className="market-access-page min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        .market-access-page .steps-title,
        .market-access-page h2 {
          font-size: clamp(28px, 3vw, 42px) !important;
          line-height: 1.2 !important;
        }
      `}</style>

      {/* Hero Section (Full-width radial style matching site pages) */}
      <section
        className="relative pt-28 sm:pt-32 md:pt-36 pb-12 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.16) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <nav
            className="flex items-center justify-center gap-2 text-sm text-[#a5d8d0] mb-6 flex-wrap"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#00ebaa] transition-colors">
              Home
            </Link>
            <span className="text-[#4a6863]" aria-hidden="true">
              ›
            </span>
            <Link
              href="/igaming-licensing"
              className="hover:text-[#00ebaa] transition-colors"
            >
              Licensing &amp; Regulations
            </Link>
            <span className="text-[#4a6863]" aria-hidden="true">
              ›
            </span>
            <span className="text-white font-medium" aria-current="page">
              iGaming Market Access
            </span>
          </nav>

          <div className="text-center mb-4">
            <h1
              className="font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(36px, 4.2vw, 56px)' }}
            >
              iGaming Market Access: What to Check Before Launch
            </h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light">
              Start with where your players will be. For each target market, check whether you can offer your product, what local permissions you need and which rules your software must support.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Licence Coverage Split Showcase */}
      <section className="py-12 bg-[#0b0b0f] relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
              <div className="relative w-full aspect-video lg:aspect-auto lg:h-full min-h-[280px] rounded-2xl overflow-hidden">
                <img
                  src="/assets/features/igaming-security-risk-management-aml-kyc.webp"
                  alt="iGaming market access and compliance risk management"
                  className="w-full h-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-auto min-h-[280px]">
              <div
                className="w-full h-full rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                style={{
                  background:
                    'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
                }}
              >
                <h2 className="font-bold text-white mb-4 leading-tight">
                  Does My Gaming Licence Cover My Target Market?
                </h2>
                <p className="text-sm sm:text-base text-[#a5a5a5] leading-relaxed font-light mb-5">
                  A gaming licence authorizes activities under the issuing jurisdiction’s rules and the conditions on that licence. Whether you can accept players elsewhere also depends on the rules in the market you want to serve. Check both before launch.
                </p>
                <div>
                  <Link
                    href="/igaming-licensing"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ebaa] hover:underline"
                  >
                    <span>Compare licensing options</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Six Market Checks (Native DiscoverMore Bento Grid) */}
      <DiscoverMore
        customTitle="What Should Operators Check in Each Market?"
        customSubtitle="Review product rules, local approvals, player eligibility, providers, marketing and operational controls for each target market."
        customItems={marketCheckItems}
      />

      {/* Section 3: Two Examples of Local Requirements (Matching CustomIgamingClient card design) */}
      <section className="py-16 bg-[#0b0b0f] relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="font-bold text-white mb-3">
              Two Examples of Local Requirements
            </h2>
            <p className="text-[#b3b3c4] text-base sm:text-lg max-w-2xl mx-auto font-light m-0">
              Check the rules of each target country, state or province before accepting players.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localExamples.map((example) => (
              <div
                key={example.title}
                className="rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00ebaa]/50 hover:shadow-[0_0_25px_rgba(0,235,170,0.15)] relative h-full"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a',
                  border: '1px solid rgba(0, 235, 170, 0.22)',
                  boxShadow: '0 -2px 4.7px 0 rgba(0, 235, 170, 0.15) inset',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    {example.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                    {example.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {example.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <svg
                          className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 12l10 10 10-10L12 2z" />
                        </svg>
                        <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between gap-4 mt-auto pt-6 border-t border-white/5">
                  <a
                    href={example.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-sm sm:text-base hover:underline"
                  >
                    <span>{example.linkLabel}</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={example.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[#04160f] transition-all duration-300 hover:brightness-92 shrink-0 overflow-hidden"
                    style={{
                      background:
                        'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                      boxShadow:
                        '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
                      color: '#04160f',
                    }}
                    aria-label={example.linkLabel}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection
        id="frequently-asked-questions"
        customFaqData={faqs}
        hideBgImage={false}
      />

      {/* Contact Section */}
      <section
        id="contact-us"
        className="py-16 bg-[#0b0b0f] relative z-10"
      >
        <ContactForm />
      </section>
    </div>
  );
}
