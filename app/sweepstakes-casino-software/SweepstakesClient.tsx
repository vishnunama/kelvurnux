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
import PartnershipBanner from '@/src/components/partnershipbanner/PartnershipBanner';

export default function SweepstakesClient() {
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
      description: 'Separate wallet balances and ledger logic for Gold Coins (GC) and Sweeps Coins (SC). Gold Coins power entertainment gameplay, while Sweeps Coins support promotional distribution, AMOE entry allocations, eligibility rules, and prize redemption workflows.',
      image: '/assets/features/custom-igaming-platform-design-interface.webp'
    },
    {
      id: 'compliance-controls',
      label: 'Compliance & Geolocation',
      icon: 'shield-check' as const,
      title: 'Compliance Controls & Geolocation',
      description: 'Configurable technical controls for Alternative Method of Entry (AMOE) processing, identity verification (KYC/AML), state-level geolocation boundary rules, restricted jurisdiction blocking, and responsible gaming limits.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp'
    },
    {
      id: 'game-aggregation',
      label: 'Game Integration Layer',
      icon: 'gamepad-2' as const,
      title: 'Casino Game Content Integration',
      description: 'Connect slots, live dealer tables, RNG table games, crash & instant games, fish games, and mini games through a single unified integration layer while managing game availability from the operator environment.',
      image: '/assets/features/online-casino-game-aggregation-10000-plus-slots.webp'
    },
    {
      id: 'payments-redemption',
      label: 'Payments & Redemption',
      icon: 'credit-card' as const,
      title: 'Payments, Purchases & Prize Redemption',
      description: 'Gold Coin package management, credit card & bank payment processing, redemption eligibility checks, identity verification review gates, payout gateway integrations, and financial audit logs.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp'
    },
    {
      id: 'backoffice-analytics',
      label: 'Back Office & Analytics',
      icon: 'layout-dashboard' as const,
      title: 'Operator Back Office Console',
      description: 'Centralized administrative control panel to manage player accounts, GC/SC ledgers, redemption approvals, geo-fencing rules, bonus campaigns, affiliate tracking, and real-time financial reporting.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Wallet,
      title: 'Dual-Currency Wallet Architecture',
      description:
        'Independent ledgers for Gold Coins (entertainment gameplay) and Sweeps Coins (promotional sweepstakes entries) with automated balance tracking, transaction history, and immutable ledger logging.'
    },
    {
      id: 2,
      icon: Gamepad2,
      title: 'Game Content Integration Layer',
      description:
        'Connect multiple game providers through a unified integration layer supporting slots, live casino, table games, crash games, fish games, and mini games with category and availability controls.'
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Payments, Coin Purchases & Prize Redemption',
      description:
        'Gold Coin package purchase flows, payment gateway integrations, purchase history, risk & chargeback controls, redemption thresholds, identity review gates, and payout integrations.'
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: 'Compliance Controls & Geolocation Engine',
      description:
        'Configurable AMOE processing workflows, identity verification gates (KYC/AML), state-level geolocation checks, restricted jurisdiction blocking, and responsible play limits. Kvaornux provides configurable technology controls supporting an operator’s compliance framework.'
    },
    {
      id: 5,
      icon: Sparkles,
      title: 'Player Engagement & Retention Tools',
      description:
        'Promotional engines supporting daily rewards, welcome campaigns, VIP/loyalty levels, spin & win wheels, leaderboards, tournaments, missions, referral systems, and CRM player communication.'
    },
    {
      id: 6,
      icon: LayoutDashboard,
      title: 'Operator Back Office Dashboard',
      description:
        'Comprehensive administrative console to manage players, GC/SC transactions, redemption requests, KYC reviews, geo-fencing rules, game catalogs, payment settings, and role-based staff permissions.'
    },
    {
      id: 7,
      icon: RefreshCw,
      title: 'Built for Web & Mobile Experiences',
      description:
        'Cross-device HTML5 responsive web frontends, Progressive Web App (PWA) support, Android web wrappers, and iOS browser-optimized experiences for seamless mobile player engagement.'
    },
    {
      id: 8,
      icon: Cpu,
      title: 'Sweepstakes Platform Technology Stack',
      description:
        'Enterprise engineering utilizing React / Next.js on the frontend, Node.js / NestJS on the backend, PostgreSQL database, Redis & WebSockets for real-time state, and Docker cloud deployment.'
    },
    {
      id: 9,
      icon: Layers,
      title: 'Structured Launch Process (Strategy to Support)',
      description:
        'Multi-phase project framework: 01 Define requirements, 02 Architecture & ledgers, 03 Design UX/UI, 04 Development & Integration, 05 QA & Validation, 06 Deployment, and 07 Post-Launch Support.'
    },
    {
      id: 10,
      icon: Rocket,
      title: 'Turnkey & Custom Launch Options',
      description:
        'Choose between Turnkey Sweepstakes Platform (rapid launch using established architecture) or Custom Sweepstakes Development (proprietary technology built for long-term product roadmaps).'
    }
  ];

  const faqs = [
    {
      question: 'What is sweepstakes casino software?',
      answer:
        'Sweepstakes casino software is a specialized iGaming platform configured with dual-currency wallets (Gold Coins and Sweeps Coins), promotional distribution rules, AMOE (Alternative Method of Entry) processing, player management, and compliance controls to support sweepstakes-style gaming operations.'
    },
    {
      question: 'How do Gold Coins and Sweeps Coins work?',
      answer:
        'Gold Coins are virtual currencies used strictly for entertainment gameplay and can be purchased in coin packages. Sweeps Coins are promotional virtual currencies obtained for free through promotions, coin purchases, or AMOE requests, and can be used to participate in sweepstakes games for prize redemption eligibility.'
    },
    {
      question: 'What is AMOE in a sweepstakes casino?',
      answer:
        'Alternative Method of Entry (AMOE) is a mechanism that allows players to request promotional Sweeps Coins for free without making a purchase, typically via digital forms or mail-in requests. The software automates the processing, verification, and allocation of AMOE entry credits.'
    },
    {
      question: 'What is the difference between a sweepstakes casino and a real-money casino?',
      answer:
        'A real-money casino processes direct cash wagers and payouts. A sweepstakes casino operates using a dual virtual currency system where gameplay occurs using virtual coins, and promotional coins can be accumulated and reviewed for prize redemptions under specific promotional rules.'
    },
    {
      question: 'Can Kvaornux build a custom sweepstakes casino platform?',
      answer:
        'Yes. Kvaornux develops custom sweepstakes technology tailored to an operator’s proprietary workflows, branded player interfaces, specific payment gateways, and custom backend administration requirements.'
    },
    {
      question: 'What is included in turnkey sweepstakes casino software?',
      answer:
        'A turnkey sweepstakes software solution includes pre-configured dual-currency wallet ledgers, game aggregation, payment processing, KYC/geolocation integrations, bonus engines, player account management, and a complete admin back office.'
    },
    {
      question: 'Can multiple casino game providers be integrated?',
      answer:
        'Yes. Through Kvaornux’s game aggregation layer, operators can integrate slots, live dealer, table games, crash games, and fish games from multiple content studios into a single sweepstakes platform environment.'
    },
    {
      question: 'How does sweepstakes prize redemption work?',
      answer:
        'Players submit a redemption request for eligible Sweeps Coins balance. The platform routes the request through automated identity verification (KYC), location checks, and administrative risk review before processing payouts via bank transfer, gift cards, or approved payout gateways.'
    },
    {
      question: 'Can KYC and geolocation providers be integrated?',
      answer:
        'Yes. The platform includes modular API integrations for leading identity verification (KYC) and state-level geolocation providers to enforce age, identity, and jurisdictional rules.'
    },
    {
      question: 'How long does sweepstakes casino software development take?',
      answer:
        'Development timelines depend on the project scope, level of custom UI/UX design, required third-party integrations, and operating configurations. Turnkey setups launch faster, while custom bespoke development follows a structured multi-phase roadmap.'
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
              Sweepstakes Casino Software Built for Modern Operators
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
              Build, launch and scale a sweepstakes casino around your business model with dual-currency wallets, game integrations, payments, redemption workflows, player management and configurable compliance controls.
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
            className="overflow-x-auto pb-3 mb-8 sm:mb-10 md:mb-12 lg:mb-14 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap">
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
                Everything Operators Need in One Sweepstakes Platform
              </h2>

              <p
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Everything you need to build and scale your sweepstakes casino software — dual-currency wallets, game aggregation, payments, prize redemption, compliance controls, player management, and operator back office.
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
                    Discuss Sweepstakes Scope
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
      <DiscoverMore />

      {/* Partnership Banner */}
      <PartnershipBanner />

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
    'dual-currency-wallet': 'Dual-Currency Virtual Currency Architecture Gold Coins and Sweeps Coins',
    'compliance-controls': 'Sweepstakes Compliance Controls, AMOE Processing, KYC Verification and Geolocation',
    'game-aggregation': 'Sweepstakes Casino Game Integration Layer with Slots, Live Casino and Table Games',
    'payments-redemption': 'Payments, Coin Purchases and Prize Redemption Workflows for Sweepstakes Platform',
    'backoffice-analytics': 'Sweepstakes Casino Operator Back Office Console and Real-Time Analytics Dashboard',
  };
  return altMap[tabId] || 'sweepstakes casino software platform solution';
}
