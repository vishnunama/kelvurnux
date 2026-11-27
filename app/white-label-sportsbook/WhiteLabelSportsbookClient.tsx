'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Crown,
  Gamepad2,
  Rocket,
  ShieldCheck,
  LayoutDashboard,
  Headphones,
  Gift,
  BarChart3,
  Wallet,
  HandshakeIcon,
  Users,
  RefreshCw,
  Zap,
  Globe,
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import { WHITE_LABEL_SPORTSBOOK_FAQS } from './faqData';

export default function WhiteLabelSportsbookClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Branded Sportsbook');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

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
    crown: Crown,
    'gamepad-2': Gamepad2,
    rocket: Rocket,
    'shield-check': ShieldCheck,
    'layout-dashboard': LayoutDashboard,
    headphones: Headphones,
  };

  const tabs = [
    {
      id: 'branded-sportsbook',
      label: 'Branded Sportsbook',
      icon: 'crown' as const,
      title: 'Branded Sportsbook & Betting App',
      description:
        'Launch a modern, thumb-first white label sports betting website and native Android betting app customized with your logo, domain, typography, and color identity. Includes Same-Game Bet Builder, dynamic cashout, and localized multi-odds formats.',
      image: '/assets/features/wl-sportsbook-app-banner.webp',
      alt: 'Custom Branded White Label Sportsbook and Mobile Betting App Interface',
    },
    {
      id: 'risk-trading',
      label: 'Managed Risk & Odds',
      icon: 'shield-check' as const,
      title: 'Pre-Integrated Feeds & Automated Risk Controls',
      description:
        'Go live without negotiating months of separate data vendor contracts—backed by official Betradar, Pinnacle, Kambi, and Genius Sports feeds across 80+ sports and 1,000+ markets with automated sharp-bettor stake capping and margin overrides.',
      image: '/assets/features/wl-sportsbook-risk-feeds-banner.webp',
      alt: 'White Label Sportsbook Risk Management Dashboard and Live Odds Controls',
    },
    {
      id: 'casino-crypto',
      label: 'Casino & Crypto Cashier',
      icon: 'rocket' as const,
      title: 'Single-Wallet Casino, Fiat & Crypto Integration',
      description:
        'Maximize player LTV with a combined white label online casino and sportsbook software solution powered by one seamless wallet. Connect 10,000+ slots and live dealer tables alongside Bitcoin, USDT, ETH, Solana, and regional fiat rails.',
      image: '/assets/features/wl-sportsbook-single-wallet-banner.webp',
      alt: 'White Label Crypto Sportsbook and Single-Wallet Casino Integration',
    },
    {
      id: 'back-office',
      label: 'Back Office & Affiliates',
      icon: 'layout-dashboard' as const,
      title: 'Bookmaker Control Panel & Agent Network',
      description:
        'Manage players, live bet tickers, retention promos, free bets, and multi-tier affiliate or agent commissions from one central dashboard with audit-ready GGR, NGR, and turnover reporting.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      alt: 'White Label Sportsbook Back Office Admin Dashboard and Analytics',
    },
    {
      id: 'ongoing-support',
      label: 'Ongoing Support',
      icon: 'headphones' as const,
      title: 'Hosted Infrastructure & Ongoing Support',
      description:
        'Operate on auto-scaling cloud infrastructure with sub-140ms WebSocket odds streaming, 99.99% uptime SLA, and ongoing technical support, platform maintenance, and system updates tailored to your agreement.',
      image: '/assets/features/24-7-igaming-technical-support-maintenance.webp',
      alt: '24/7 Technical Support and Cloud Infrastructure for White Label Sportsbooks',
    },
  ];

  const solutions = [
    {
      id: 1,
      icon: Zap,
      title: 'Official Odds Feeds & 80+ Sports Coverage',
      description:
        'Access pre-integrated pre-match and live in-play odds from Betradar, Pinnacle, Kambi, and Genius Sports across football, cricket, NBA, NFL, UFC, tennis, and tier-1 esports with sub-140ms WebSocket streaming.',
    },
    {
      id: 2,
      icon: Gift,
      title: 'Branded Website, PWA & Native Android App',
      description:
        'Make the sportsbook your own with custom logos, brand colors, domain setup, responsive HTML5/PWA lobbies, and a branded native Android APK featuring biometric login and live match push alerts.',
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Automated Risk & Liability Management',
      description:
        'Protect your GGR with automated sharp-bettor stake capping, arbitrage monitoring, dynamic in-play acceptance delays, event exposure heatmaps, and granular margin overrides per league or market.',
    },
    {
      id: 4,
      icon: Gamepad2,
      title: 'Single-Wallet Casino & Live Dealer Combo',
      description:
        'Combine sports betting with 10,000+ slots, crash games, and live dealer tables inside one unified player wallet—eliminating double sign-ons and boosting cross-vertical player retention.',
    },
    {
      id: 5,
      icon: Wallet,
      title: 'Crypto & Regional Fiat Payment Rails',
      description:
        'Support Bitcoin, USDT, ETH, Solana, and Web3 wallet flows alongside localized fiat processors for UK, Europe, LATAM, Africa, India, and Sri Lanka with automated KYC/AML onboarding queues.',
    },
    {
      id: 6,
      icon: LayoutDashboard,
      title: 'Centralized Bookmaker Back Office',
      description:
        'Control your entire betting operation from a single admin panel. Monitor real-time bet tickers, configure free bets and risk-free wager promos, manage player segments, and set role-based staff permissions.',
    },
    {
      id: 7,
      icon: HandshakeIcon,
      title: 'Affiliate & Multi-Tier Agent Portals',
      description:
        'Scale player acquisition with built-in affiliate tracking and multi-tier agent/bookie hierarchy dashboards supporting RevShare, CPA, and hybrid commission models.',
    },
    {
      id: 8,
      icon: Globe,
      title: 'Betting Exchange, DFS & Esports Verticals',
      description:
        'Expand beyond fixed-odds betting with modular support for white label sports betting exchanges (back/lay matching), daily fantasy sports (DFS), esports hubs, and Same-Game Bet Builder.',
    },
    {
      id: 9,
      icon: BarChart3,
      title: 'Real-Time Analytics & Audit Reporting',
      description:
        'Track turnover, gross gaming revenue (GGR), NGR, hold percentages, and player retention across online, mobile, and retail channels with clear, exportable financial reports.',
    },
    {
      id: 10,
      icon: Rocket,
      title: 'Smooth Upgrade Path to Turnkey Ownership',
      description:
        'Start fast with White Label deployment without locking your business in. Upgrade smoothly to standalone Turnkey sportsbook ownership or contractual IP access as your betting volume scales.',
    },
  ];

  const activeTabData = tabs.find((tab) => tab.label === activeTab);
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

  const whiteLabelLaunchSteps: StepItem[] = [
    {
      id: 1,
      title: 'Choose Your Sportsbook Package',
      text: (
        <>
          Select the white label sportsbook configuration that matches your target regions, betting verticals, and budget—whether sports-only, omnichannel sportsbook + casino, or crypto-first.
        </>
      ),
    },
    {
      id: 2,
      title: 'Customize Brand & Mobile UI',
      text: (
        <>
          Configure your logo, domain, color tokens, localized languages, odds formats, and sports lobby priorities across responsive web, PWA, and branded Android APK.
        </>
      ),
    },
    {
      id: 3,
      title: 'Activate Odds Feeds & Payments',
      text: (
        <>
          Enable pre-integrated Betradar, Pinnacle, and esports data feeds alongside optional 10,000+ casino games, regional fiat gateways, and Bitcoin/USDT crypto rails.
        </>
      ),
    },
    {
      id: 4,
      title: 'Configure Risk & Test Launch',
      text: (
        <>
          Set league margins, sharp-bettor limits, and KYC/AML workflows. Test live bet placement, cashout, deposits, and withdrawals while training your team on the back office.
        </>
      ),
    },
    {
      id: 5,
      title: 'Go Live & Scale Operations',
      text: (
        <>
          Launch on high-availability cloud infrastructure with sub-140ms WebSocket odds streaming, 24/7 monitoring, and an open upgrade path to standalone Turnkey ownership.
        </>
      ),
    },
  ];

  const whiteLabelDiscoverItems = [
    {
      id: 1,
      title: '80+ Sports & 1,000+ Live Markets',
      description: 'Pre-integrated official odds feeds covering football, cricket, basketball, tennis, and esports with Bet Builder and dynamic cashout.',
      icon: Zap,
      span: 2,
    },
    {
      id: 2,
      title: 'Branded Web, PWA & Android App',
      description: 'Thumb-first white label sports betting interface tailored with your logo, domain, color theme, and multi-language odds display.',
      icon: Gift,
      span: 2,
    },
    {
      id: 3,
      title: 'Crypto & Regional Fiat Cashier',
      description: 'Accept Bitcoin, USDT, ETH, and Solana alongside localized fiat payment corridors for UK, EU, LATAM, India, and global markets.',
      icon: Wallet,
      span: 2,
    },
    {
      id: 4,
      title: 'Sportsbook Platform Software',
      description: 'Explore our core enterprise sportsbook engine, modular risk desk, and high-frequency WebSocket architecture.',
      icon: LayoutDashboard,
      link: '/sportsbook-software',
      span: 3,
    },
    {
      id: 5,
      title: 'Sportsbook API & Odds Integration',
      description: 'Need modular REST/WebSocket odds feeds or iframe integration for an existing gaming site? View our Sportsbook API solutions.',
      icon: RefreshCw,
      link: '/sportsbook-api-integration',
      span: 3,
    },
    {
      id: 6,
      title: 'Turnkey Sportsbook Upgrade',
      description: 'Ready for full source code ownership and independent hosting? Transition smoothly to our Turnkey Sportsbook solution.',
      icon: Rocket,
      link: '/turnkey-sportsbook-solutions',
      span: 2,
    },
    {
      id: 7,
      title: '10,000+ Casino Game Aggregator',
      description: 'Add slots, crash games, and live dealer tables to your sportsbook inside one unified single-wallet PAM.',
      icon: Gamepad2,
      link: '/casino-aggregator-api-solution',
      span: 2,
    },
    {
      id: 8,
      title: 'Bookmaker & Agent Software',
      description: 'Manage multi-tier agent networks, retail betting shops, and automated risk exposure from a single back office.',
      icon: Users,
      link: '/bookmaker-software',
      span: 2,
    },
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative pt-24 sm:pt-28 md:pt-32 pb-2 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f',
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
                White Label Sportsbook
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
              White Label Sportsbook Solutions
            </h1>
          </div>

          {/* Subtitle/Description */}
          <div className="max-w-4xl mx-auto mb-5 sm:mb-7 md:mb-8">
            <p
              className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light"
              ref={(el) => { elementsRef.current[1] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              Launch your white label sportsbook platform without building from scratch. KVAORNUX provides ready-made white label sports betting software with customizable branding, pre-integrated official odds feeds across 80+ sports, mobile betting app, and crypto &amp; fiat payments.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Features Section */}
      <section id="solutions" className="relative pb-12 md:pb-16 from-black via-gray-900 to-black">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          {/* Tab Buttons */}
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto pt-0 pb-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12 scrollbar-hide scroll-smooth px-2 sm:px-0"
            role="tablist"
            aria-label="Platform Feature Categories"
          >
            <div className="flex gap-1.5 md:gap-2 flex-nowrap py-1.5 px-1 w-max mx-auto">
              {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];
                return (
                  <button
                    key={tab.id}
                    ref={activeTab === tab.label ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 md:px-4 xl:px-5 py-2 sm:py-2.5 md:py-3 rounded-full font-medium text-sm xl:text-[15px] transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === tab.label
                      ? 'bg-white text-black border-2 border-white'
                      : 'bg-gray-800/70 text-white/70 border-2 border-transparent hover:bg-gray-700 hover:text-white'
                      }`}
                  >
                    {IconComponent && <IconComponent size={16} className="hidden sm:block shrink-0" />}
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
                {/* Image Card */}
                <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
                  <div className="relative w-full aspect-video lg:aspect-auto lg:h-full rounded-xl sm:rounded-2xl md:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ebaa]/20 to-[#00ebaa]/5 rounded-xl sm:rounded-2xl blur-3xl animate-pulse"></div>
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.alt || activeTabData.title}
                      className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                      style={{ animation: 'imageSlideIn 0.6s ease-out' }}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src =
                          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUsIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                </div>

                {/* Info Card */}
                <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-auto min-h-[280px]">
                  <div
                    className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                    style={{
                      background:
                        'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
                    }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-left">
                      {activeTabData.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-[#a5a5a5] leading-relaxed font-light text-left">
                      {activeTabData.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Platform Features / Solutions Section */}
      <section id="platform-features" className="relative bg-[#0b0b0f] pb-8 sm:pb-12 md:pb-16">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)',
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
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-8 sm:pt-12 max-w-[1310px] relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16">
            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2
                ref={(el) => { solutionsElementsRef.current[0] = el; }}
                data-anim="from-top"
                className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Complete White Label Sportsbook Package
              </h2>

              <p
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Everything you need to launch and scale your white label betting platform — from sub-140ms live odds feeds and automated risk management to mobile apps and unified player accounts, all configured and ready to deploy.
              </p>

              <div
                ref={(el) => { solutionsElementsRef.current[20] = el; }}
                className="mt-6 flex justify-center lg:justify-start"
              >
                <button
                  onClick={handleScrollToContact}
                  className="btn-main overflow-hidden"
                  style={{
                    padding: '0.6rem 2.2rem',
                    minHeight: '2.8rem',
                  }}
                >
                  <span className="relative z-10 text-sm sm:text-base font-bold">
                    Discuss Your White Label Project
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
                      border: '1px solid rgba(0, 235, 170, 0.3)',
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

      {/* Launch Process Steps Section */}
      <StepsSection
        sectionId="launch-process"
        scrollSticky={false}
        hideBgImage={true}
        className="w-full rounded-t-[36px] md:rounded-t-[64px]"
        sectionStyle={{
          background:
            'linear-gradient(180deg, rgba(14, 46, 41, 0.82) 0%, rgba(10, 34, 31, 0.72) 78%, rgba(9, 25, 24, 0.55) 92%, #0b0b0f 100%)',
        }}
        customTitle="How to Launch a White Label Sportsbook"
        customSubtitle="Explore the steps from selecting your ready-made sportsbook package to configuring your brand, activating odds feeds, testing and launching."
        customSteps={whiteLabelLaunchSteps}
        customCtaText="Discuss Your Project"
        ctaHref="#contact-form-section"
        onCtaClick={(e) => {
          e.preventDefault();
          handleScrollToContact();
        }}
      />

      {/* Three-Solution Comparison Section: White Label vs Turnkey vs Custom */}
      <section id="turnkey-vs-custom" className="relative py-16 md:py-24 bg-[#080b0f]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2
              ref={(el) => { solutionsElementsRef.current[30] = el; }}
              data-anim="from-bottom"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              White Label vs Turnkey vs Custom Sportsbook Software
            </h2>
            <p
              ref={(el) => { solutionsElementsRef.current[31] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
              className="text-[#a5a5a5] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed"
            >
              Compare our three sportsbook solutions and choose the right platform for your business.
            </p>
          </div>

          {/* Comparison Cards */}
          <div
            ref={(el) => { solutionsElementsRef.current[32] = el; }}
            data-anim="fade-in"
            data-anim-delay="2"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {/* Card 1: White Label Sportsbook */}
            <div
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
                  White Label Sportsbook Software
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Launch your branded sportsbook using our pre-integrated platform. Ideal for operators who want a fast market launch without building odds feeds and risk tooling from scratch.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Pre-integrated official odds feeds across 80+ sports
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Custom branding, responsive PWA &amp; Android APK
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Automated risk desk &amp; sharp-bettor stake caps
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Optional 10,000+ casino games in a single wallet
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Smooth upgrade path to Turnkey ownership
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline text-left cursor-pointer"
                >
                  <span>Request White Label Demo</span>
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#04160f] transition-all duration-300 hover:brightness-92 shrink-0 cursor-pointer overflow-hidden"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                    boxShadow:
                      '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
                    color: '#04160f',
                  }}
                  aria-label="Request White Label Demo"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2: Turnkey Sportsbook */}
            <div
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
                  <Link href="/turnkey-sportsbook-solutions" className="hover:text-[#00ebaa] transition-colors">
                    Turnkey Sportsbook Software
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Get a complete standalone sportsbook and casino platform with full operational autonomy, custom provider contracts, and independent hosting.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Full sportsbook and casino platform included
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Source code &amp; IP rights defined in project agreement
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Direct commercial control over odds &amp; payment vendors
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Customizable front-end, trading rules &amp; bonus engine
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Dedicated infrastructure deployment &amp; SLA
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <Link
                  href="/turnkey-sportsbook-solutions"
                  className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                >
                  <span>Explore Turnkey Sportsbook</span>
                </Link>
                <Link
                  href="/turnkey-sportsbook-solutions"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#04160f] transition-all duration-300 hover:brightness-92 shrink-0 overflow-hidden"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                    boxShadow:
                      '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
                    color: '#04160f',
                  }}
                  aria-label="Explore Turnkey Sportsbook"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3: Custom Sportsbook Development */}
            <div
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
                  <Link href="/custom-igaming-solution" className="hover:text-[#00ebaa] transition-colors">
                    Custom Sportsbook Development
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Build a bespoke betting platform around your unique product vision—whether peer-to-peer exchanges, daily fantasy sports (DFS), or custom Web3 wagering mechanics.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Custom betting engine &amp; matching architecture
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Bespoke UI/UX, native iOS/Android &amp; PWA apps
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Specialized DFS, exchange, esports &amp; Web3 modules
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Project-specific third-party feed &amp; PSP integrations
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Source code rights defined in project agreement
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <Link
                  href="/custom-igaming-solution"
                  className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                >
                  <span>Explore Custom Development</span>
                </Link>
                <Link
                  href="/custom-igaming-solution"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#04160f] transition-all duration-300 hover:brightness-92 shrink-0 overflow-hidden"
                  style={{
                    background:
                      'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                    boxShadow:
                      '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
                    color: '#04160f',
                  }}
                  aria-label="Explore Custom Development"
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

      {/* Discover More Section */}
      <DiscoverMore
        customItems={whiteLabelDiscoverItems}
        customTitle="Explore White Label Sportsbook Capabilities"
        customSubtitle="Complete brand customization, pre-integrated official odds feeds, and omnichannel solutions for rapid sportsbook launches."
      />

      {/* FAQ Section */}
      <FAQSection customFaqData={WHITE_LABEL_SPORTSBOOK_FAQS} hideBgImage={true} />

      {/* Opportunities Section */}
      <OpportunitiesSection />

      {/* Contact Form */}
      <ContactForm defaultCategory="Sportsbook" />
    </>
  );
}
