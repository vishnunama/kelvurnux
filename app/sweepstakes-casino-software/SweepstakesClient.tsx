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
  Rocket,
  Code,
  ArrowRight
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';
import { SWEEPSTAKES_FAQS } from './faqData';

export default function SweepstakesClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Dual-Currency Wallet');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Scroll handlers
  const handleScrollToContact = () => {
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
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
      description: 'Operate Gold Coins and Sweeps Coins through independent balances, transaction ledgers and configurable currency rules. Track purchases, promotional allocations, gameplay transactions, adjustments and redemption-related activity while maintaining a clear audit history for each currency.',
      image: '/assets/features/custom-igaming-platform-design-interface.webp'
    },
    {
      id: 'compliance-controls',
      label: 'Compliance & Geolocation',
      icon: 'shield-check' as const,
      title: 'Compliance Controls & Geolocation',
      description: 'Configure player eligibility controls across registration, gameplay and redemption workflows. Integrate age and identity verification, geolocation services, restricted-jurisdiction rules, AMOE processing and operational review controls according to the operator\'s requirements.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp'
    },
    {
      id: 'game-aggregation',
      label: 'Game Integration Layer',
      icon: 'gamepad-2' as const,
      title: 'Casino Game Content Integration',
      description: 'Connect casino content through provider and aggregation APIs while managing game categories, availability and player access from the operator environment. Support slots, table games, instant games, fish games and other compatible content based on provider availability.',
      image: '/assets/features/online-casino-game-aggregation-10000-plus-slots.webp'
    },
    {
      id: 'payments-redemption',
      label: 'Payments & Redemption',
      icon: 'credit-card' as const,
      title: 'Payments, Purchases & Prize Redemption',
      description: 'Manage Gold Coin purchase flows and prize-redemption operations through connected payment and payout integrations. Configure transaction records, redemption thresholds, verification gates, review statuses, risk checks and administrative approval workflows.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp'
    },
    {
      id: 'backoffice-analytics',
      label: 'Back Office & Analytics',
      icon: 'layout-dashboard' as const,
      title: 'Operator Back Office Console',
      description: 'Give operations teams centralized control over player accounts, GC/SC activity, redemption requests, verification reviews, jurisdiction settings, games, payments, promotions, affiliates, risk monitoring and reporting with role-based administrative access.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Wallet,
      title: 'Dual-Currency Wallet Architecture',
      description:
        'Maintain separate Gold Coin and Sweeps Coin balances with independent transaction ledgers, configurable currency rules, promotional allocations, gameplay records, manual adjustments and complete transaction history.'
    },
    {
      id: 2,
      icon: Gamepad2,
      title: 'Game Content Integration Layer',
      description:
        'Connect compatible casino content through provider and aggregation APIs while controlling game availability, categories, currencies and player access from the operator environment.'
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Payments, Coin Purchases & Prize Redemption',
      description:
        'Manage Gold Coin packages, payment transactions and the complete redemption lifecycle — from player request and eligibility checks through verification, risk review, approval status and payout processing.'
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: 'Compliance Controls & Geolocation Engine',
      description:
        'Configure AMOE workflows, age and identity verification, geolocation integrations, restricted-jurisdiction rules and operational access controls across registration, gameplay and redemption. Technology controls can support an operator\'s compliance framework; legal requirements and permitted jurisdictions should be determined with qualified legal counsel.'
    },
    {
      id: 5,
      icon: Sparkles,
      title: 'Player Engagement & Retention Tools',
      description:
        'Configure promotional coin campaigns, daily rewards, loyalty programs, referrals, tournaments, leaderboards and segmented CRM campaigns with rules based on player activity and eligibility.'
    },
    {
      id: 6,
      icon: LayoutDashboard,
      title: 'Operator Back Office Dashboard',
      description:
        'Manage player profiles, currency transactions, redemptions, verification queues, games, payments, promotions, affiliates, risk reviews and staff permissions through a centralized administrative environment.'
    },
    {
      id: 7,
      icon: RefreshCw,
      title: 'Built for Web & Mobile Experiences',
      description:
        'Deliver responsive HTML5 player experiences across desktop and mobile browsers, with support for PWA and platform-specific implementation approaches where required by the project.'
    },
    {
      id: 8,
      icon: Cpu,
      title: 'Sweepstakes Platform Technology Stack',
      description:
        'API-first platform architecture designed around modular integrations, real-time wallet activity, transaction processing and scalable operator services using the existing Kvaornux technology stack.'
    },
    {
      id: 9,
      icon: Layers,
      title: 'Structured Launch Process (Strategy to Support)',
      description:
        'A structured delivery process covering requirements and operating model definition, platform architecture, UI/UX implementation, development, third-party integrations, QA, deployment and post-launch technical support.'
    },
    {
      id: 10,
      icon: Rocket,
      title: 'Turnkey & Custom Launch Options',
      description:
        'Launch from an established Sweepstakes platform architecture or commission a custom implementation around proprietary workflows, integrations, player experience and long-term product requirements.'
    }
  ];

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

  const sweepstakesArchitectureSteps: StepItem[] = [
    {
      id: 1,
      title: 'Registration & Geolocation',
      text: 'Real-time IP and GPS verification enforce jurisdictional rules, block restricted territories, and establish verified player profiles.'
    },
    {
      id: 2,
      title: 'Dual Coin Allocation',
      text: 'Gold Coins are acquired for entertainment gameplay, while promotional Sweeps Coins are distributed complimentary via purchases, login bonuses, or promotions.'
    },
    {
      id: 3,
      title: 'AMOE Entry Processing',
      text: 'Automated entry code generation and operator verification queues support no-purchase participation requests with auditable ledger records.'
    },
    {
      id: 4,
      title: 'Dual-Mode Game Sessions',
      text: (
        <>
          Remote game servers interact with the wallet via real-time callbacks. Read our{' '}
          <Link href="/blog/sweepstakes-casino-api-integration" className="text-[#00ebaa] underline hover:text-[#00d096]">
            API integration guide
          </Link>{' '}
          and explore our{' '}
          <Link href="/casino-aggregator-api-solution" className="text-[#00ebaa] underline hover:text-[#00d096]">
            game aggregator
          </Link>
          .
        </>
      )
    },
    {
      id: 5,
      title: 'Redemption & KYC Review',
      text: 'Prize requests undergo threshold validation, playthrough checks, KYC verification, and back-office review before approved payout dispatch.'
    }
  ];

  const sweepstakesDiscoverItems = [
    {
      id: 1,
      title: 'Turnkey Sweepstakes Platform',
      description: 'Launch your branded sweepstakes casino on an established core architecture with pre-configured dual-currency ledgers, games, and back office.',
      icon: Rocket,
      link: '/turnkey-sweepstakes-casino-software',
      span: 2
    },
    {
      id: 2,
      title: 'Custom Sweepstakes Development',
      description: 'Bespoke platform engineering built around proprietary wallet rules, custom player journeys, specialized workflows, and unique integrations.',
      icon: Code,
      link: '/custom-sweepstakes-casino-development',
      span: 2
    },
    {
      id: 3,
      title: 'Casino Game Aggregator API',
      description: 'Connect slots, table games, live dealer, and crash titles from certified studios through a single unified aggregation layer.',
      icon: Gamepad2,
      link: '/casino-aggregator-api-solution',
      span: 2
    },
    {
      id: 4,
      title: 'Turnkey Casino Solutions',
      description: 'Full-featured online casino software platform with comprehensive player account management, payment channels, and back-office tools.',
      icon: Layers,
      link: '/turnkey-casino-software-solutions',
      span: 3
    },
    {
      id: 5,
      title: 'White Label Casino Platform',
      description: 'Rapid-launch branded casino infrastructure with managed technical operations and core licensing support.',
      icon: ShieldCheck,
      link: '/white-label-casino-solutions',
      span: 3
    },
    {
      id: 6,
      title: 'Sportsbook Platform Software',
      description: 'Comprehensive sports betting technology with live odds feeds, risk management, and multi-market coverage.',
      icon: RefreshCw,
      link: '/sportsbook-platform-software',
      span: 2
    },
    {
      id: 7,
      title: 'iGaming Platform Case Studies',
      description: 'Explore verified architecture and platform delivery case studies across high-concurrency gaming systems.',
      icon: LayoutDashboard,
      link: '/igaming-case-studies',
      span: 2
    },
    {
      id: 8,
      title: 'Sweepstakes Technical Guide',
      description: 'In-depth operator guide exploring Gold Coins, Sweeps Coins, AMOE processing, and regulatory compliance considerations.',
      icon: Sparkles,
      link: '/blog/what-is-sweepstakes-casino-software',
      span: 2
    }
  ];

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
        className="relative pt-28 sm:pt-32 pb-2 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

          {/* Accessible Visual Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 flex items-center justify-center text-xs sm:text-sm text-gray-400">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-[#00ebaa] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-600">/</li>
              <li className="text-white font-medium" aria-current="page">
                Sweepstakes Casino Software
              </li>
            </ol>
          </nav>

          {/* Main Title - SEO Optimized H1 */}
          <div className="text-center mb-3">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Sweepstakes Casino Software for Operators
            </h1>
          </div>

          {/* Subtitle/Description */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-6">
            <p
              className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light"
              ref={(el) => { elementsRef.current[1] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              Build and operate a sweepstakes casino through a connected technology stack covering dual-currency wallets, promotional entry workflows, game integrations, payments, player verification, prize redemption and operator back-office controls.
            </p>
          </div>

        </div>
      </section>

      {/* Tab Features Section */}
      <section id="platform-capabilities" className="relative pb-12 md:pb-16 from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Accessible Heading for SEO & Screen Readers */}
          <h2 className="sr-only">Core Platform Capabilities for Sweepstakes Operators</h2>

          {/* Tab Buttons */}
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto py-2 pb-3 mb-8 sm:mb-10 md:mb-12 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
            role="tablist"
            aria-label="Sweepstakes Platform Capabilities"
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap py-1.5 px-1">
              {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];
                const isActive = activeTab === tab.label;
                return (
                  <button
                    key={tab.id}
                    id={`tab-btn-${tab.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tab-panel-${tab.id}`}
                    ref={isActive ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${isActive
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

          {/* All 5 Tab Panels rendered in DOM for 100% crawlability */}
          <div className="relative">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.label;
              return (
                <div
                  key={tab.id}
                  id={`tab-panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-btn-${tab.id}`}
                  className={isActive ? 'block animate-in' : 'hidden'}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-7 lg:gap-8 items-stretch">

                    {/* Image Card */}
                    <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
                      <div className="relative w-full aspect-video lg:aspect-auto lg:h-full rounded-xl sm:rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00ebaa]/20 to-[#00ebaa]/5 rounded-xl sm:rounded-2xl blur-3xl animate-pulse"></div>
                        <img
                          src={tab.image}
                          alt={getImageAlt(tab.id)}
                          width={960}
                          height={540}
                          className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                          style={{ animation: isActive ? 'imageSlideIn 0.6s ease-out' : 'none' }}
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI5MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUsIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                          }}
                        />
                      </div>
                    </div>

                    {/* Info Card */}
                    <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-auto min-h-[280px]">
                      <div
                        className="w-full h-full rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                        style={{
                          background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
                        }}
                      >
                        <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-left">
                          {tab.title}
                        </h3>
                        <p className="text-base text-[#a5a5a5] leading-relaxed font-light text-left">
                          {tab.description}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* All-in-One Solutions Section */}
      <section id="solutions" className="relative bg-[#0b0b0f] py-12 md:py-16">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)'
          }}
        />

        {/* Grid Overlay */}
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

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-[1310px] relative z-10">

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10">

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
                A connected operational stack for managing virtual currencies, player activity, game content, payments, promotional participation, prize redemption and day-to-day platform administration.
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
                    className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 p-6 sm:p-8 md:p-10 rounded-[1.6rem] h-max transition-all group"
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

      {/* Turnkey vs Custom Comparison Section */}
      <section id="turnkey-vs-custom" className="relative py-16 md:py-24 bg-[#080b0f] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Turnkey vs Custom Sweepstakes Casino Software
            </h2>
            <p className="text-[#a5a5a5] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Evaluate the right delivery model for your business based on speed-to-market, custom workflow requirements, and long-term technical control.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Turnkey Card */}
            <div
              className="rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00ebaa]/50 hover:shadow-[0_0_25px_rgba(0,235,170,0.15)] relative"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a',
                border: '1px solid rgba(0, 235, 170, 0.22)',
                boxShadow: '0 -2px 4.7px 0 rgba(0, 235, 170, 0.15) inset',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  <Link href="/turnkey-sweepstakes-casino-software" className="hover:text-[#00ebaa] transition-colors">
                    Turnkey Sweepstakes Platform
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Launch on an established, pre-configured sweepstakes architecture. Ideal for operators who want a proven dual-currency framework, standard compliance workflows, and ready-to-deploy game catalogs under their brand identity.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Faster rollout using established platform modules
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Branded HTML5 responsive player experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Pre-configured Gold Coin & Sweeps Coin balances
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Unified aggregation for slots, live casino & payments
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Centralized console for PAM, verification & redemptions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <Link
                  href="/turnkey-sweepstakes-casino-software"
                  className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                >
                  <span>Explore Turnkey Platform</span>
                </Link>
                <Link
                  href="/turnkey-sweepstakes-casino-software"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                  aria-label="Explore Turnkey Sweepstakes Platform"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Custom Card */}
            <div
              className="rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00ebaa]/50 hover:shadow-[0_0_25px_rgba(0,235,170,0.15)] relative"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a',
                border: '1px solid rgba(0, 235, 170, 0.22)',
                boxShadow: '0 -2px 4.7px 0 rgba(0, 235, 170, 0.15) inset',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  <Link href="/custom-sweepstakes-casino-development" className="hover:text-[#00ebaa] transition-colors">
                    Custom Sweepstakes Development
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Bespoke software engineering designed around proprietary business logic, custom player journeys, specialized payment gateways, and tailored operational workflows for enterprise operators.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Structured milestone delivery based on technical scope
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      100% custom UI/UX design system & tailored animations
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Proprietary wallet rules, custom playthrough & promotions
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Custom connectors for preferred studios, PAMs & payout channels
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Tailored administrative workflows, custom RBAC & analytics
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <Link
                  href="/custom-sweepstakes-casino-development"
                  className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                >
                  <span>Explore Custom Development</span>
                </Link>
                <Link
                  href="/custom-sweepstakes-casino-development"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                  aria-label="Explore Custom Sweepstakes Development"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture & Operational Lifecycle Section */}
      <StepsSection
        sectionId="architecture"
        customTitle="Sweepstakes Platform Architecture & Operational Lifecycle"
        customSubtitle="How player accounts, dual-currency balances, game servers, and prize redemptions interact across the platform services."
        customSteps={sweepstakesArchitectureSteps}
        customCtaText="Discuss Your Project"
        ctaHref="#contact-form-section"
        onCtaClick={(e) => {
          e.preventDefault();
          handleScrollToContact();
        }}
      />

      {/* Discover More Section */}
      <DiscoverMore
        customItems={sweepstakesDiscoverItems}
        customTitle="Explore the Sweepstakes Platform Ecosystem"
        customSubtitle="Core technology and operational capabilities built around the complete sweepstakes casino lifecycle."
      />

      {/* FAQ Section */}
      <FAQSection customFaqData={SWEEPSTAKES_FAQS} hideBgImage={true} />

      {/* Opportunities Section */}
      <OpportunitiesSection />

      {/* Contact Form with Preselected Sweepstakes Category */}
      <ContactForm defaultCategory="Sweepstakes Casino Software" />

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
