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
  Code,
  Sparkles,
  Trophy
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import { TURNKEY_FAQS } from './faqData';

export default function TurnkeyCasinoPlatform() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Casino + Sportsbook');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Contact form scroll handler
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
    code: Code,
    'gamepad-2': Gamepad2,
    'layout-dashboard': LayoutDashboard,
    'shield-check': ShieldCheck,
  };

  const tabs = [
    {
      id: 'casino-sportsbook',
      label: 'Casino + Sportsbook',
      icon: 'crown' as const,
      title: 'Complete Casino & Sportsbook Platform',
      description:
        'Launch a unified gaming platform featuring full casino capabilities and an integrated sportsbook by default. Deliver thousands of slots, live dealer tables, and diverse sports betting markets managed through a single player wallet and back office.',
      image: '/assets/features/custom-igaming-platform-design-interface.webp',
      alt: 'Turnkey Casino and Sportsbook Platform Interface'
    },
    {
      id: 'source-code',
      label: 'Source code included',
      icon: 'code' as const,
      title: 'Platform Source Code Included',
      description:
        'Gain long-term technical autonomy with platform source code included at no additional charge. Software delivery scope, licensing rights, and intellectual property provisions are clearly defined in your project agreement.',
      image: '/assets/features/turnkey-igaming-platform-infrastructure-services.webp',
      alt: 'Turnkey Casino Software Infrastructure with Platform Source Code'
    },
    {
      id: 'games-payments',
      label: 'Games & payments',
      icon: 'gamepad-2' as const,
      title: 'Game & Payment Integrations',
      description:
        'Access existing integration infrastructure for 150+ game providers and connect multiple cashier channels—including multi-currency fiat gateways, credit cards, digital wallets, and cryptocurrency rails tailored to your approved accounts.',
      image: '/assets/features/casino-game-providers-api-aggregator.webp',
      alt: 'Casino Game and Payment Gateway Integration Infrastructure'
    },
    {
      id: 'back-office',
      label: 'Admin dashboard',
      icon: 'layout-dashboard' as const,
      title: 'Admin Dashboard & Player Management',
      description:
        'Oversee daily casino and sportsbook operations from a centralized administration console. Manage player accounts, review gross gaming revenue (GGR), configure operational betting limits, and monitor promotional activity with configurable controls.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      alt: 'Turnkey Back-Office Admin Dashboard for Player and Operational Management'
    },
    {
      id: 'security-verification',
      label: 'Security & verification',
      icon: 'shield-check' as const,
      title: 'Security & Player Verification',
      description:
        'Safeguard your operations with robust authentication, configurable role-based staff permissions, session management, and configurable Know Your Customer (KYC) and Anti-Money Laundering (AML) verification workflows.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp',
      alt: 'Turnkey Casino Security Protocols and Player Verification Controls'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Crown,
      title: 'Complete Casino & Sportsbook Platform',
      description:
        'Launch an online casino with a full sportsbook included by default. Players can enjoy slots, live tables, and sports betting from a single account and wallet.'
    },
    {
      id: 2,
      icon: Code,
      title: 'Source Code Included',
      description:
        'Receive full platform source code with your turnkey solution at no additional cost. Retain technical independence under agreed contractual terms.'
    },
    {
      id: 3,
      icon: Gamepad2,
      title: 'Casino Game Integrations',
      description:
        'Access existing integration infrastructure for 150+ game studios. Offer popular slots, table games, and live dealer rooms based on your commercial agreements.'
    },
    {
      id: 4,
      icon: Wallet,
      title: 'Payment Gateway Connectivity',
      description:
        'Connect multi-currency fiat payment processors, credit cards, digital wallets, and crypto payment rails based on your approved merchant accounts.'
    },
    {
      id: 5,
      icon: Users,
      title: 'Player Account Management (PAM)',
      description:
        'Manage player registrations, account balances, verification statuses, and activity history easily through an integrated Player Account Management (PAM) system.'
    },
    {
      id: 6,
      icon: LayoutDashboard,
      title: 'Centralized Admin Dashboard',
      description:
        'Control your casino and sportsbook from one central back office. Manage game catalogs, monitor gross gaming revenue (GGR), and set staff permissions.'
    },
    {
      id: 7,
      icon: Gift,
      title: 'Branding & UI Customization',
      description:
        'Customize your casino with your own logo, color schemes, typography, and custom domains for a consistent player experience across all devices.'
    },
    {
      id: 8,
      icon: Sparkles,
      title: 'Bonus & Promotion Management',
      description:
        'Engage players with configurable promotional tools, including deposit match bonuses, free spins, promo codes, and customizable loyalty rewards.'
    },
    {
      id: 9,
      icon: HandshakeIcon,
      title: 'Affiliate & Agent Management',
      description:
        'Grow your player base with built-in affiliate and agent management tools. Create tracking links, set commission structures, and review performance reports.'
    },
    {
      id: 10,
      icon: ShieldCheck,
      title: 'Reporting & Player Verification',
      description:
        'Track business performance with clear financial reports, and protect your platform with configurable Know Your Customer (KYC) and AML player verification.'
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

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = tabs.length - 1;
    } else {
      return;
    }
    const targetTab = tabs[nextIndex];
    handleTabClick(targetTab.label);
    const targetBtn = document.getElementById(`tab-${targetTab.id}`);
    if (targetBtn) {
      targetBtn.focus();
    }
  };

  const turnkeyLaunchSteps: StepItem[] = [
    {
      id: 1,
      title: 'Discuss Your Business Requirements',
      text: (
        <>
          Share your target markets, branding ideas, and feature needs. We review your goals and outline the right turnkey setup for your gaming business.
        </>
      ),
    },
    {
      id: 2,
      title: 'Customize Your Casino & Sportsbook',
      text: (
        <>
          Apply your brand logo, color palette, and custom domain. We configure the player interface for smooth performance across mobile and desktop devices.
        </>
      ),
    },
    {
      id: 3,
      title: 'Configure Games & Payments',
      text: (
        <>
          Choose game providers from our 150+ network and connect your approved payment gateways or crypto options to accept player deposits and withdrawals.
        </>
      ),
    },
    {
      id: 4,
      title: 'Test Your Platform',
      text: (
        <>
          Review every part of your platform, including player registration, game loading, cashier transactions, and admin controls, before going live.
        </>
      ),
    },
    {
      id: 5,
      title: 'Launch Your Gaming Business',
      text: (
        <>
          Deploy your branded casino and sportsbook to live operations with platform source code delivered, supported by ongoing technical assistance.
        </>
      ),
    },
  ];

  const turnkeyCasinoDiscoverItems = [
    {
      id: 1,
      title: 'Turnkey Platform Architecture',
      description: 'Explore the frontend, backend, and database technologies powering high-traffic online casino and sportsbook operations.',
      icon: Rocket,
      span: 2,
    },
    {
      id: 2,
      title: 'Game Aggregator API',
      description: 'Connect slots, crash games, and live dealer rooms through a unified game aggregator integration.',
      icon: Gamepad2,
      link: '/casino-aggregator-api-solution',
      span: 2,
    },
    {
      id: 3,
      title: 'Cashier & Payment Connectivity',
      description: 'Understand how multi-currency fiat payment gateways and cryptocurrency rails integrate with the platform wallet.',
      icon: Wallet,
      span: 2,
    },
    {
      id: 4,
      title: 'Technical Support & Maintenance',
      description: 'Learn how our service packages cover technical troubleshooting, core updates, and operational reliability.',
      icon: Headphones,
      span: 3,
    },
    {
      id: 5,
      title: 'White Label Casino Solutions',
      description: 'Compare our turnkey package with ready-made white label casino software for faster initial deployment.',
      icon: Crown,
      link: '/white-label-casino-solutions',
      span: 3,
    },
    {
      id: 6,
      title: 'Casino Platform Software',
      description: 'Looking for modular PAM software licensing and custom wallet APIs? Explore our core casino platform software.',
      icon: LayoutDashboard,
      link: '/online-casino-platform-software',
      span: 2,
    },
    {
      id: 7,
      title: 'Lakebets Case Study',
      description: 'See how KVAORNUX developed a mobile-first casino platform with multi-provider game aggregation and fast bet settlement.',
      icon: HandshakeIcon,
      link: '/igaming-case-studies/casino-platform-development',
      span: 2,
    },
    {
      id: 8,
      title: 'Custom iGaming Solutions',
      description: 'Need bespoke architecture, proprietary game development, or custom modules? Explore our tailored iGaming solutions.',
      icon: Sparkles,
      link: '/custom-igaming-solution',
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
                Turnkey Casino Software Solutions
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
              Turnkey Casino Software Solutions
            </h1>
          </div>

          {/* Subtitle/Description */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <p
              className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light"
              ref={(el) => { elementsRef.current[1] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              Launch your online casino and sportsbook with KVAORNUX turnkey casino software. Get a complete gaming platform with casino games, sports betting, payment integrations, an easy-to-use admin dashboard, and full source code included. Customize the platform to match your brand and business needs.
            </p>
          </div>

          {/* Hero CTA Button */}
          <div
            ref={(el) => { elementsRef.current[2] = el; }}
            data-anim="from-bottom"
            data-anim-delay="2"
            className="flex justify-center mb-8 sm:mb-10"
          >
            <button
              type="button"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center font-bold text-sm sm:text-base text-black transition-all duration-300 hover:scale-105 cursor-pointer rounded-full shadow-[0_0_25px_rgba(0,235,170,0.3)] hover:shadow-[0_0_35px_rgba(0,235,170,0.5)] active:scale-95"
              style={{
                padding: '0.75rem 2.25rem',
                minHeight: '2.9rem',
                background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                border: 'none',
                outline: 'none',
              }}
            >
              Get a Turnkey Casino Quote
            </button>
          </div>

        </div>
      </section>

      {/* Tab Features Section */}
      <section id="solutions" className="relative pb-12 md:pb-16 from-black via-gray-900 to-black">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">

          {/* Tab Buttons */}
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto pb-3 mb-8 sm:mb-10 md:mb-12 lg:mb-14 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
            role="tablist"
            aria-label="Turnkey Platform Categories"
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap py-1.5 px-1">
              {tabs.map((tab, index) => {
                const IconComponent = iconMap[tab.icon];
                const isSelected = activeTab === tab.label;
                return (
                  <button
                    key={tab.id}
                    id={`tab-${tab.id}`}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`tabpanel-${tab.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    ref={isSelected ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      isSelected
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
            <div
              key={activeTabData.id}
              id={`tabpanel-${activeTabData.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTabData.id}`}
              tabIndex={0}
              className="animate-in focus:outline-none"
            >
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
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUsIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg=='
                      }}
                    />
                  </div>
                </div>

                {/* Info Card */}
                <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-[280px] lg:h-auto">
                  <div
                    className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                    style={{
                      background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
                    }}
                  >
                    <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-left">
                      {activeTabData.title}
                    </h2>
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

      {/* Platform Features / Solutions Section */}
      <section id="platform-features" className="relative bg-[#0b0b0f] pb-16 md:pb-24">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
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
        <div className="container mx-auto px-4 pt-8 sm:pt-12 max-w-[1310px] relative z-10">

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16">

            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2
                ref={(el) => { solutionsElementsRef.current[0] = el; }}
                data-anim="from-top"
                className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Complete Turnkey Casino Platform Package
              </h2>

              <p
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Everything you need to launch and scale your turnkey casino and sportsbook — from frontend and backend software to game integrations, admin tools, and source code included.
              </p>

              <div
                ref={(el) => { solutionsElementsRef.current[20] = el; }}
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
                    Discuss Your Turnkey Project
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

      {/* Launch Process Steps Section */}
      <StepsSection
        sectionId="launch-process"
        className="my-8 md:my-16"
        scrollSticky={true}
        customTitle="How to Launch Your Online Casino & Sportsbook"
        customSubtitle="Follow our structured five-step path from initial planning and branding to game configuration, testing, and going live."
        customSteps={turnkeyLaunchSteps}
        customCtaText="Discuss Your Project"
        ctaHref="#contact-form-section"
        onCtaClick={(e) => {
          e.preventDefault();
          handleScrollToContact();
        }}
      />

      {/* Three-Solution Comparison Section: White Label vs Turnkey vs Custom */}
      <section id="turnkey-vs-custom" className="relative py-16 md:py-24 bg-[#080b0f] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              White Label vs Turnkey vs Custom Casino Software
            </h2>
            <p className="text-[#a5a5a5] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Compare our casino software solutions to choose the right platform, source code ownership, and customization level for your business.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Card 1: White Label Casino */}
            <div
              className="rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00ebaa]/50 hover:shadow-[0_0_25px_rgba(0,235,170,0.15)] relative h-full"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a',
                border: '1px solid rgba(0, 235, 170, 0.22)',
                boxShadow: '0 -2px 4.7px 0 rgba(0, 235, 170, 0.15) inset',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  <Link href="/white-label-casino-solutions" className="hover:text-[#00ebaa] transition-colors">
                    White Label Casino Software
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Launch your branded casino using our already-developed platform. Ideal for operators who want a fast market launch without building software from scratch.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Already-developed casino software
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Fast deployment for eligible configurations
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Custom branding and responsive design
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Integration infrastructure for 150+ game providers
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Optional source code purchase at extra cost
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <Link
                  href="/white-label-casino-solutions"
                  className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                >
                  <span>Explore White Label</span>
                </Link>
                <Link
                  href="/white-label-casino-solutions"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                  aria-label="Explore White Label"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2: Turnkey Casino (Current Solution) */}
            <div
              className="rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00ebaa]/50 hover:shadow-[0_0_25px_rgba(0,235,170,0.15)] relative h-full"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 235, 170, 0.16) 0%, rgba(0, 235, 170, 0.08) 40%, rgba(0, 235, 170, 0.03) 100%), #10161a',
                border: '1.5px solid rgba(0, 235, 170, 0.45)',
                boxShadow: '0 -2px 6px 0 rgba(0, 235, 170, 0.25) inset',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  Turnkey Casino Software
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Get a complete casino and sportsbook software platform configured for your business, with frontend, backend, admin dashboard, and source code included.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Complete casino and sportsbook platform
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Platform source code included at no extra charge
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Configurable games and payment integrations
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Player, bonus, and affiliate management tools
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Deployment timeline based on project requirements
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
                  <span>Request Turnkey Proposal</span>
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0 cursor-pointer"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                  aria-label="Request Turnkey Proposal"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 3: Custom Casino */}
            <div
              className="rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00ebaa]/50 hover:shadow-[0_0_25px_rgba(0,235,170,0.15)] relative h-full"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a',
                border: '1px solid rgba(0, 235, 170, 0.22)',
                boxShadow: '0 -2px 4.7px 0 rgba(0, 235, 170, 0.15) inset',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  <Link href="/custom-igaming-solution" className="hover:text-[#00ebaa] transition-colors">
                    Custom Casino Development
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Build a casino platform around your unique business requirements, with bespoke features, workflows, and tailored technical architecture.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Custom platform architecture and workflows
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Bespoke UI/UX and player experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Tailored gaming and promotional features
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Project-specific third-party integrations
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
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
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
        customItems={turnkeyCasinoDiscoverItems}
        customTitle="Explore Turnkey Casino Capabilities"
        customSubtitle="Complete casino and sportsbook software, platform source code, and integration infrastructure for ambitious operators."
      />

      {/* FAQ Section */}
      <FAQSection customFaqData={TURNKEY_FAQS} hideBgImage={true} />

      {/* Opportunities Section */}
      <OpportunitiesSection />

      {/* Contact Form */}
      <ContactForm defaultCategory="Turnkey iGaming Platform" />

    </>
  );
}