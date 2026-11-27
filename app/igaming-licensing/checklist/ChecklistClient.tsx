'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  FileText,
  Gamepad2,
  Key,
  Layout,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore, { DiscoverItem } from '@/src/components/Discovermore/Discovermore';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';

const tabs = [
  {
    id: 'scope-and-route',
    label: '1–2. Scope & Route',
    icon: ShieldCheck,
    title: 'Define What You Offer & Choose a Route',
    description:
      'Write down whether you plan to run a casino, a sportsbook or both, and list the countries you want to serve. Confirm whether you are applying as an operator or a software supplier and compare published fees and hosting conditions.',
    image: '/assets/licensing/checklist-hero.jpg',
    link: {
      text: 'Compare Licensing Options',
      href: '/igaming-licensing',
    },
  },
  {
    id: 'docs-and-budget',
    label: '3–4. Docs & Budget',
    icon: Wallet,
    title: 'Organize Documents & Launch Budget',
    description:
      'Start with the regulator’s official forms, company records, ownership details and funding information. List application or issuance fees, annual charges, legal advice, company setup, hosting, software, games and payments.',
    image: '/assets/features/igaming-financial-reconciliation-auto-invoices.webp',
  },
  {
    id: 'games-and-brief',
    label: '5–6. Games & Brief',
    icon: Gamepad2,
    title: 'Confirm Providers & Software Brief',
    description:
      'List your planned games, providers, currencies and payment methods and confirm market approvals before integration. Document your brand, back-office needs, verification, safer gambling, reporting and hosting requirements.',
    image: '/assets/licensing/checklist-games-brief.jpg',
  },
  {
    id: 'final-review',
    label: '7. Review & Submit',
    icon: FileText,
    title: 'Review Against the Official Checklist',
    description:
      'Compare your documents against the regulator’s current checklist. Confirm the submission channel, fees and any outstanding approvals, then review your launch plan once you know which requirements are still open.',
    image: '/assets/licensing/checklist-review-submit.jpg',
  },
];

const checklistSteps: StepItem[] = [
  {
    id: 1,
    title: '1. Define What You Plan to Offer',
    text: 'Write down whether you plan to run a casino, a sportsbook or both. List the countries you want to serve. Ask your legal adviser which permissions you need for each activity and market.',
  },
  {
    id: 2,
    title: '2. Choose a Licence Route',
    text: (
      <>
        Confirm whether you are applying as an operator or a software supplier. Compare the published fees, company requirements and hosting conditions for the routes you are considering.{' '}
        <Link
          href="/igaming-licensing"
          className="text-[#00ebaa] hover:underline font-medium"
        >
          Compare Licensing Options
        </Link>
      </>
    ),
  },
  {
    id: 3,
    title: '3. Organize Your Company Documents',
    text: 'Start with the regulator’s official forms and document list. Gather the company records, ownership details and funding information requested for your route. Note who is responsible for supplying each document.',
  },
  {
    id: 4,
    title: '4. Build Your Launch Budget',
    text: 'List application or issuance fees, annual charges and any applicable assessments. Add separate estimates for legal advice, company setup, hosting, software, games and payments. Record when each payment is due.',
  },
  {
    id: 5,
    title: '5. Confirm Games and Payments',
    text: 'List the games, providers, currencies and payment methods you want to offer. Ask providers what they support for your target markets. Confirm which approvals, contracts or checks they require before integration.',
  },
  {
    id: 6,
    title: '6. Prepare Your Software Brief',
    text: 'Write down your brand, planned markets, game providers, payment methods and back-office needs. Ask your adviser which player verification, safer gambling, reporting and hosting requirements the platform needs to support. Confirm who will own each part of the setup.',
  },
  {
    id: 7,
    title: '7. Review Before You Submit',
    text: 'Compare your documents against the regulator’s current checklist. Confirm the submission channel, fees and any outstanding approvals. Review the launch plan once you know which requirements are still open.',
  },
];

const faqs = [
  {
    question: 'What should I prepare first?',
    answer:
      'Start with your target markets, planned games and licence route. Then use the regulator’s checklist to confirm which documents and platform details you need.',
  },
  {
    question: 'Should I choose my software before applying?',
    answer:
      'You can plan the software early. Confirm the licence route, hosting requirements and provider approvals before committing to a platform.',
  },
  {
    question: 'What costs should I budget for?',
    answer:
      'Budget for regulator fees, company setup, legal advice, hosting, software, games and payments. Check which costs are upfront and which recur.',
  },
  {
    question: 'Does this checklist replace the official application checklist?',
    answer:
      'Use it to plan your project. Follow the regulator’s current forms and instructions for your actual application.',
  },
];

export default function ChecklistClient() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const activeTabData = tabs.find((tab) => tab.label === activeTab) || tabs[0];

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
    setTimeout(() => {
      if (activeTabRef.current && tabsContainerRef.current) {
        const container = tabsContainerRef.current;
        const button = activeTabRef.current;
        const containerCenter = container.clientWidth / 2;
        const buttonCenter = button.offsetLeft + button.clientWidth / 2;
        container.scrollTo({ left: buttonCenter - containerCenter, behavior: 'smooth' });
      }
    }, 0);
  };

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

  const platformItems: DiscoverItem[] = [
    {
      id: 1,
      title: 'White Label Casino',
      description:
        'Explore a ready-to-launch casino software setup customized for your brand and target markets.',
      icon: Layout,
      link: '/white-label-casino-solutions',
      span: 3,
    },
    {
      id: 2,
      title: 'Turnkey Casino Software',
      description:
        'Review a turnkey casino software architecture built for operators managing their own licence.',
      icon: Key,
      link: '/turnkey-casino-software-solutions',
      span: 3,
    },
  ];

  return (
    <div className="checklist-page min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        .checklist-page .steps-title,
        .checklist-page h2 {
          font-size: clamp(28px, 3vw, 42px) !important;
          line-height: 1.2 !important;
        }
      `}</style>
      {/* Hero Section (Matching CustomSweepstakesClient full-width radial style) */}
      <section
        className="relative pt-28 sm:pt-32 md:pt-36 pb-10 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f',
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
              Online Casino Licensing Checklist
            </span>
          </nav>

          <div className="text-center mb-4">
            <h1
              className="font-bold text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(36px, 4.2vw, 56px)' }}
            >
              Online Casino Licensing Checklist
            </h1>
          </div>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light">
              Planning an online casino or sportsbook? Use this checklist to organize your documents, budget and software requirements before applying. Your regulator’s current checklist defines what you need to submit.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tab Showcase (Matching CustomSweepstakesClient tabs) */}
      <section className="relative pb-16 bg-[#0b0b0f]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto pt-0 pb-3 mb-8 scrollbar-hide scroll-smooth"
          >
            <div className="flex gap-2 flex-nowrap py-1.5 px-1 w-max mx-auto">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    ref={activeTab === tab.label ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    className={`flex items-center gap-2 px-3.5 md:px-4 xl:px-5 py-2.5 rounded-full font-medium text-sm xl:text-[15px] transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === tab.label
                        ? 'bg-white text-black border-2 border-white'
                        : 'bg-gray-800/70 text-white/70 border-2 border-transparent hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <IconComponent size={16} className="hidden sm:block shrink-0" />
                    <span className="leading-none">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
              <div className="relative w-full aspect-video lg:aspect-auto lg:h-full min-h-[280px] rounded-2xl overflow-hidden">
                <img
                  src={activeTabData.image}
                  alt={activeTabData.title}
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                  {activeTabData.title}
                </h2>
                <p className="text-sm sm:text-base text-[#a5a5a5] leading-relaxed font-light mb-5">
                  {activeTabData.description}
                </p>
                {activeTabData.link && (
                  <div>
                    <Link
                      href={activeTabData.link.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#00ebaa] hover:underline"
                    >
                      <span>{activeTabData.link.text}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Native StepsSection Carousel for the 7 Checklist Steps */}
      <StepsSection
        customSteps={checklistSteps}
        customTitle="7-Step Licensing Preparation Checklist"
        customSubtitle="Organize your planned offer, licence route, company documents, launch budget, providers and software brief."
        customCtaText="Discuss Your Platform"
        onCtaClick={handleScrollToContact}
        sectionId="checklist-steps"
        hideBgImage={true}
        startFromFirst={true}
      />

      {/* Platform Planning Section (Native DiscoverMore Grid) */}
      <DiscoverMore
        customTitle="Discuss Your Casino or Sportsbook Platform"
        customSubtitle="Share your planned markets, games, payment providers and software requirements. Kvaornux can help you scope a white-label, turnkey or custom platform."
        customItems={platformItems}
      />

      <section className="pb-12 bg-[#0b0b0f] text-center">
        <a
          href="#contact-us"
          onClick={handleScrollToContact}
          className="btn btn-fill events-hero-btn"
        >
          <span>Discuss Your Platform</span>
        </a>
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
