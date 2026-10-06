'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Wallet,
  ShieldCheck,
  Gamepad2,
  CreditCard,
  LayoutDashboard,
  Sparkles,
  RefreshCw,
  Cpu,
  Layers,
  HandshakeIcon,
  TrendingUp,
  Settings,
  Rocket,
  Code
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';

export default function TurnkeySweepstakesClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Dual-Currency Wallet');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Contact form scroll handler
  const handleScrollToContact = () => {
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSolutions = () => {
    const section = document.getElementById('solutions');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const elements = elementsRef.current.filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const iconMap = {
    wallet: Wallet,
    'shield-check': ShieldCheck,
    'gamepad-2': Gamepad2,
    'credit-card': CreditCard,
    'layout-dashboard': LayoutDashboard,
  };

  const tabs = [
    {
      id: 'dual-currency-wallet',
      label: 'Dual-Currency Wallet',
      icon: 'wallet' as const,
      title: 'Dual-Currency Virtual Currency Architecture',
      description: 'Maintain Gold Coins and Sweeps Coins as separate virtual currencies with independent balances, real-time transaction ledgers and configurable currency logic. Track purchases, promotional allocations, gameplay transactions, manual administrative adjustments and redemption eligibility while preserving a complete audit history for each currency.',
      image: '/assets/features/custom-igaming-platform-design-interface.webp'
    },
    {
      id: 'compliance-controls',
      label: 'Compliance & Geolocation',
      icon: 'shield-check' as const,
      title: 'Compliance Controls & Geolocation',
      description: 'Configure player eligibility, age and identity verification (KYC), state-level geolocation boundary rules, restricted-jurisdiction blocking, responsible-play options (such as self-exclusion or account limits) and Alternative Method of Entry (AMOE) processing. Manage entry request verification, status tracking and promotional coin allocations from the operator environment.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp'
    },
    {
      id: 'game-aggregation',
      label: 'Game Integration Layer',
      icon: 'gamepad-2' as const,
      title: 'Casino Game Content Integration',
      description: 'Connect compatible casino content through provider and aggregation APIs while managing game categories, availability, virtual currency rules and player access from the operator environment. Deliver responsive player-facing experiences configured around your brand identity without altering the established core platform architecture.',
      image: '/assets/features/online-casino-game-aggregation-10000-plus-slots.webp'
    },
    {
      id: 'payments-redemption',
      label: 'Payments & Redemption',
      icon: 'credit-card' as const,
      title: 'Payments, Purchases & Prize Redemption',
      description: 'Manage Gold Coin purchase flows and prize-redemption operations through connected payment and payout integrations. Track purchase transaction records, set redemption thresholds, enforce KYC verification gates, manage manual review queues, review payment risk or chargeback alerts, and process approved prize payouts.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp'
    },
    {
      id: 'backoffice-analytics',
      label: 'Back Office & Analytics',
      icon: 'layout-dashboard' as const,
      title: 'Operator Back Office Console',
      description: 'Provide operations teams with centralized administrative control over Player Account Management (PAM), GC/SC currency ledgers, redemption approval queues, identity verification checks, game availability, promotions, affiliate tracking, risk monitoring, operational reporting and administrative audit records with role-based staff permissions.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Wallet,
      title: 'Dual-Currency Wallet Architecture',
      description:
        'Maintain separate Gold Coin and Sweeps Coin balances with independent real-time transaction ledgers, configurable currency rules, promotional allocations, gameplay logging, manual administrative adjustments and comprehensive transaction history.'
    },
    {
      id: 2,
      icon: Gamepad2,
      title: 'Game Content Integration Layer',
      description:
        'Connect compatible casino content through provider and aggregation APIs while controlling game availability, categories, currencies, player access and branded frontend display rules from the operator environment.'
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Payments, Coin Purchases & Prize Redemption',
      description:
        'Manage Gold Coin packages, payment transaction records and the complete prize redemption lifecycle — from player request and eligibility checks through identity verification, review status queues, payment risk monitoring and approved payout processing.'
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: 'Compliance Controls & Geolocation Engine',
      description:
        'Configure AMOE request processing, age and identity verification, geolocation services, restricted-jurisdiction rules, responsible-play options and operational access controls. Technology controls can support an operator\'s compliance framework; legal requirements and permitted jurisdictions should be determined with qualified legal counsel.'
    },
    {
      id: 5,
      icon: Sparkles,
      title: 'Player Engagement & Retention Tools',
      description:
        'Configure promotional coin campaigns, daily rewards, loyalty levels, referral incentives, tournaments, leaderboards and segmented CRM player communication based on activity and eligibility.'
    },
    {
      id: 6,
      icon: LayoutDashboard,
      title: 'Operator Back Office Dashboard',
      description:
        'Manage player account profiles, virtual currency ledgers, redemption queues, KYC reviews, geolocation settings, game catalogs, payment options, promotions, affiliates, risk reviews and staff role permissions through a centralized administrative environment.'
    },
    {
      id: 7,
      icon: RefreshCw,
      title: 'Built for Web & Mobile Experiences',
      description:
        'Deliver responsive HTML5 player experiences across desktop and mobile browsers. The player-facing frontend can be configured around your brand identity, logo, navigation and content strategy on an established platform architecture.'
    },
    {
      id: 8,
      icon: Cpu,
      title: 'Sweepstakes Platform Technology Stack',
      description:
        'API-first platform architecture designed around modular integrations, real-time wallet activity, transaction processing, administrative audit logs and scalable operator services using the existing Kvaornux technology stack.'
    },
    {
      id: 9,
      icon: Layers,
      title: 'Structured Launch Process (Strategy to Support)',
      description:
        'A structured delivery process covering project scope definition, core platform configuration, UI/UX brand alignment, third-party API integrations, functional testing, production deployment and post-launch technical support.'
    },
    {
      id: 10,
      icon: Rocket,
      title: 'Turnkey & Custom Launch Options',
      description:
        'Launch from an established Turnkey Sweepstakes platform architecture configured around your brand and required integrations, or commission a custom development roadmap for proprietary product requirements.'
    }
  ];

  const turnkeyDiscoverItems = [
    {
      id: 1,
      title: 'Dual-Currency Economy',
      description: 'Gold Coins and Sweeps Coins operate through separate balances, ledger logic and transaction records, supporting entertainment play, promotional distribution and prize-eligible participation workflows.',
      icon: Wallet,
      span: 2
    },
    {
      id: 2,
      title: 'AMOE & Entry Management',
      description: 'Process Alternative Method of Entry requests through verification, status tracking, promotional Sweeps Coin allocation and auditable entry records from the operator environment.',
      icon: ShieldCheck,
      span: 2
    },
    {
      id: 3,
      title: 'Prize Redemption Engine',
      description: 'Configure redemption eligibility, thresholds, player verification, review queues, request statuses, risk checks and payout processing through a controlled redemption workflow.',
      icon: RefreshCw,
      span: 2
    },
    {
      id: 4,
      title: 'KYC, Geolocation & Access Controls',
      description: 'Connect identity and age verification, jurisdiction-level geolocation, restricted-location controls and player access rules to registration, gameplay and redemption workflows.',
      icon: Layers,
      span: 3
    },
    {
      id: 5,
      title: 'Fraud & Risk Management',
      description: 'Monitor suspicious account activity, duplicate-account indicators, unusual redemption requests, payment risk and chargeback alerts with manual review queues and operational controls.',
      icon: Cpu,
      span: 3
    },
    {
      id: 6,
      title: 'Player Account Management & CRM',
      description: 'Manage player profiles, verification status, GC/SC activity, segments, communications, promotions and the complete player lifecycle from one operational environment.',
      icon: Sparkles,
      span: 2
    },
    {
      id: 7,
      title: 'Promotions, Loyalty & Affiliates',
      description: 'Run daily rewards, promotional coin campaigns, referrals, loyalty programs, tournaments, leaderboards and affiliate acquisition workflows with configurable campaign rules.',
      icon: HandshakeIcon,
      span: 2
    },
    {
      id: 8,
      title: 'Reporting & Audit Controls',
      description: 'Track registrations, Gold Coin purchases, Sweeps Coin movements, game activity, redemptions, payments, promotions and administrative actions through operational reporting and audit records.',
      icon: LayoutDashboard,
      span: 2
    }
  ];

  const faqs = [
    {
      question: 'What is turnkey sweepstakes casino software?',
      answer:
        'Turnkey sweepstakes casino software provides an established platform architecture that can be configured around an operator\'s brand, virtual currency model, games, payments, player verification, redemption workflows and back-office requirements.'
    },
    {
      question: 'How is turnkey sweepstakes software different from custom development?',
      answer:
        'A turnkey project begins with an established core architecture and focuses on configuration, branding and required integrations. Custom development is better suited to projects requiring proprietary architecture, highly specialized workflows or deeper product-level customization.'
    },
    {
      question: 'Does the platform support Gold Coins and Sweeps Coins?',
      answer:
        'Yes. The platform can maintain separate Gold Coin and Sweeps Coin balances with independent transaction histories and configurable rules for purchases, promotional allocations, gameplay activity and redemption-related workflows.'
    },
    {
      question: 'Can AMOE workflows be configured?',
      answer:
        'Yes. Alternative Method of Entry workflows can support no-purchase participation requests, verification, status tracking and promotional currency allocation according to the operator\'s defined rules and legal framework.'
    },
    {
      question: 'Can KYC and geolocation providers be integrated?',
      answer:
        'Yes. Third-party identity, age-verification and geolocation services can be connected to registration, player access and redemption workflows based on project requirements and technical compatibility.'
    },
    {
      question: 'Can I choose the game providers?',
      answer:
        'Compatible game providers and aggregation APIs can be integrated according to the project\'s commercial arrangements and technical requirements. Sweepstakes compatibility should be confirmed for each content provider.'
    },
    {
      question: 'Can payment and payout providers be integrated?',
      answer:
        'Yes. Compatible payment services can support Gold Coin purchase flows, while payout or prize-processing integrations can be connected to approved redemption workflows.'
    },
    {
      question: 'Can the frontend be branded for my business?',
      answer:
        'Yes. The player-facing experience can be configured around the operator\'s brand identity, visual assets, content, navigation and promotional requirements within the agreed turnkey scope.'
    },
    {
      question: 'Does turnkey mean every Sweepstakes Casino looks the same?',
      answer:
        'No. The underlying core architecture can remain established while the player-facing brand experience, content, selected integrations and operating configuration are adapted for the project.'
    },
    {
      question: 'How long does a turnkey Sweepstakes Casino take to launch?',
      answer:
        'The timeline depends on branding, platform configuration, game integrations, payment services, verification providers and other project requirements. Kvaornux defines the delivery schedule after the technical scope and required integrations are confirmed.'
    }
  ];

  const activeTabData = tabs.find(tab => tab.label === activeTab);
  const solutionsElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const elements = solutionsElementsRef.current.filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleTabClick = (tabLabel: string): void => {
    setActiveTab(tabLabel);
    setTimeout(() => {
      if (activeTabRef.current && tabsContainerRef.current) {
        const container = tabsContainerRef.current;
        const button = activeTabRef.current;
        const containerCenter = container.clientWidth / 2;
        const buttonCenter = button.offsetLeft + button.clientWidth / 2;
        const scrollLeft = buttonCenter - containerCenter;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <>
      <style jsx>{`
        @keyframes from-bottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes from-top {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes imageSlideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes contentSlideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        [data-anim] { opacity: 0; }
        [data-anim="from-bottom"].visible { animation: from-bottom 0.6s ease-out forwards; }
        [data-anim="from-top"].visible { animation: from-top 0.6s ease-out forwards; }
        [data-anim="fade-in"].visible { animation: fade-in 0.6s ease-out forwards; }

        [data-anim-delay="1"].visible { animation-delay: 0.1s; }
        [data-anim-delay="2"].visible { animation-delay: 0.2s; }
        [data-anim-delay="3"].visible { animation-delay: 0.3s; }
        [data-anim-delay="4"].visible { animation-delay: 0.4s; }
        [data-anim-delay="5"].visible { animation-delay: 0.5s; }

        .animate-in {
          animation: contentSlideIn 0.6s ease-out;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative pt-32 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

          {/* Main Title - SEO Optimized H1 */}
          <div className="text-center mb-3">
            <h1
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Turnkey Sweepstakes Casino Software Built for Faster Market Entry
            </h1>
          </div>

          {/* Subtitle/Description */}
          <div className="max-w-4xl mx-auto mb-9">
            <p
              className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light"
              ref={(el) => { elementsRef.current[1] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              Launch your Sweepstakes brand on an established platform architecture configured around your identity, operating model and required integrations — from Gold Coins and Sweeps Coins to games, payments, verification, redemption and back-office operations.
            </p>
          </div>

        </div>
      </section>

      {/* Tab Features Section */}
      <section id="solutions" className="relative from-black via-gray-900 to-black">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">

          {/* Tab Buttons */}
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto py-2 pb-3 mb-8 sm:mb-10 md:mb-12 lg:mb-14 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap py-1.5 px-1">
              {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];
                return (
                  <button
                    key={tab.id}
                    ref={activeTab === tab.label ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === tab.label
                      ? 'bg-white text-black border-2 border-white'
                      : 'bg-gray-800/70 text-white/70 border-2 border-transparent hover:bg-gray-700 hover:text-white'
                      }`}
                  >
                    {IconComponent && <IconComponent size={16} className="hidden sm:block" />}
                    <span className="leading-none">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          {activeTabData && (
            <div key={activeTabData.id} className="animate-in">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-7 lg:gap-8 items-stretch">

                {/* Image Card — first on mobile, right on desktop */}
                <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
                  <div className="relative w-full aspect-video lg:aspect-auto lg:h-full rounded-xl sm:rounded-2xl md:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ebaa]/20 to-[#00ebaa]/5 rounded-xl sm:rounded-2xl blur-3xl animate-pulse"></div>
                    <img
                      src={activeTabData.image}
                      alt={getImageAlt(activeTabData.id)}
                      className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                      style={{ animation: 'imageSlideIn 0.6s ease-out' }}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI5MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUsIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                </div>

                {/* Info Card — second on mobile, left on desktop */}
                <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-[280px] lg:h-auto">
                  <div
                    className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                    style={{
                      background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
                    }}
                  >
                    <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-left">
                      {activeTabData.title}
                    </h3>
                    <p className="text-base sm:text-base md:text-base lg:text-lg text-[#a5a5a5] leading-relaxed font-light text-left">
                      {activeTabData.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* All-in-One Solutions Section */}
      <section id="solutions" className="relative bg-[#0b0b0f]">
        {/* 🔵 Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)'
          }}
        />

        {/* 🟣 Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: 'url(/assets/grid-bg.svg)',
            backgroundRepeat: 'repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: '8rem 6.3rem',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            maskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        />

        {/* 🔥 Main Content */}
        <div className="container mx-auto px-4 pt-8 sm:pt-12 max-w-[1310px] relative z-10">

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16 pb-16">

            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2
                ref={(el) => { solutionsElementsRef.current[0] = el; }}
                data-anim="from-top"
                className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Everything Operators Need in a Turnkey Sweepstakes Platform
              </h2>

              <p
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                A connected operational stack for launching your sweepstakes brand on an established platform architecture — covering virtual currencies, player activity, game content, payments, compliance controls and back-office administration.
              </p>

              <div
                ref={(el) => { solutionsElementsRef.current[10] = el; }}
                className="mt-6 flex justify-center lg:justify-start"
              >
                <button
                  onClick={handleScrollToContact}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    outline: '0',
                    width: 'fit-content',
                    borderRadius: '9999px',
                    padding: '0.6rem 2.2rem',
                    minHeight: '2.8rem',
                    backgroundColor: '#00ebaa',
                    cursor: 'pointer',
                    color: '#000',
                    fontWeight: '700',
                  }}
                >
                  <span className="relative z-10 text-sm sm:text-base font-bold text-black">
                    Discuss Turnkey Scope
                  </span>
                </button>
              </div>

            </div>

            {/* RIGHT CARDS */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={solution.id}
                    ref={(el) => { solutionsElementsRef.current[2 + index] = el; }}
                    data-anim="fade-in"
                    data-anim-delay={String((index % 5) + 1)}
                    className="flex flex-col sm:flex-row items-start sm:items-start gap-3 sm:gap-6 p-8 md:p-[3.2rem] rounded-[1.6rem] h-max transition-all group"
                    style={{
                      background:
                        'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10.25%, rgba(0, 235, 170, 0.03) 99.99%), #0a141a',
                      border: '1px solid rgba(0, 235, 170, 0.3)'
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-[#00ebaa]/15 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-[#00ebaa]" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                        {solution.title}
                      </h3>
                      <p className="md:text-base text-gray-400">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Discover More Section */}
      <DiscoverMore
        customItems={turnkeyDiscoverItems}
        customTitle="Explore Turnkey Platform Capabilities"
        customSubtitle="Core technology and operational capabilities built around turnkey sweepstakes casino operations."
      />

      {/* Partnership Banner */}
      {/* <PartnershipBanner /> */}

      {/* FAQ Section */}
      <FAQSection customFaqData={faqs} hideBgImage={true} />

      {/* Opportunities Section */}
      <OpportunitiesSection />
      <ContactForm />

    </>
  );
}

// Helper function for SEO-optimized alt tags
function getImageAlt(tabId: string): string {
  const altMap: { [key: string]: string } = {
    'dual-currency-wallet': 'Turnkey Dual-Currency Virtual Currency Architecture Gold Coins and Sweeps Coins',
    'compliance-controls': 'Turnkey Sweepstakes Compliance Controls, AMOE Processing, KYC Verification and Geolocation',
    'game-aggregation': 'Turnkey Sweepstakes Casino Game Integration Layer with Slots, Live Casino and Table Games',
    'payments-redemption': 'Turnkey Payments, Coin Purchases and Prize Redemption Workflows for Sweepstakes Platform',
    'backoffice-analytics': 'Turnkey Sweepstakes Casino Operator Back Office Console and Real-Time Analytics Dashboard',
  };
  return altMap[tabId] || 'turnkey sweepstakes casino software platform solution';
}
