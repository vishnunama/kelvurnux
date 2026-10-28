'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Wrench,
  Lightbulb,
  Settings,
  ShieldCheck,
  LayoutDashboard,
  Palette,
  Zap,
  Wallet,
  Users,
  BarChart3,
  TrendingUp,
  HandshakeIcon,
  Rocket
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import { BESPOKE_FAQS } from './faqData';

export default function CustomiGamingSolution() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Your Custom Requirements');
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
    wrench: Wrench,
    lightbulb: Lightbulb,
    settings: Settings,
    'shield-check': ShieldCheck,
    'layout-dashboard': LayoutDashboard,
    rocket: Rocket,
  };

  const tabs = [
    {
      id: 'custom-requirements',
      label: 'Your Custom Requirements',
      icon: 'wrench' as const,
      title: 'Your Custom Requirements',
      description: 'We develop bespoke iGaming platforms planned and engineered entirely around your business model, operational workflows, and target markets. Whether you are launching an online casino, a sportsbook, or a combined gaming platform, every component is developed from scratch according to your exact specifications.',
      image: '/assets/features/end-to-end-igaming-business-support-stages.webp',
      alt: 'End-to-End iGaming Business Support and Custom Requirements Development'
    },
    {
      id: 'flexible-features',
      label: 'Flexible Feature Architecture',
      icon: 'lightbulb' as const,
      title: 'Flexible Feature Architecture',
      description: 'Build only the features and systems your business requires. We engineer custom casino game lobbies, sportsbook betting engines, player account management (PAM), agent networks, bonus systems, and centralized admin tools tailored to your operational roadmap.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp',
      alt: 'Comprehensive Casino Platform Features including Slots, Roulette, and Dice Architecture'
    },
    {
      id: 'custom-design',
      label: 'Custom Design & Branding',
      icon: 'settings' as const,
      title: 'Custom Design & Branding',
      description: 'Create a distinctive player experience with bespoke UI/UX design. We design custom player interfaces, tailored navigation, branded visual assets, and responsive layouts that deliver seamless performance across mobile, tablet, and desktop devices.',
      image: '/assets/features/custom-white-label-igaming-platform-branding.webp',
      alt: 'Custom White Label iGaming Platform Branding and UI UX Design'
    },
    {
      id: 'payment-solutions',
      label: 'Payment Integration',
      icon: 'shield-check' as const,
      title: 'Payment Integration',
      description: 'Connect multi-currency fiat payment gateways, credit cards, localized e-wallets, and cryptocurrency processing rails based on your approved merchant accounts, target jurisdictions, and integration requirements. Custom transaction workflows are configured to support your compliance needs.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp',
      alt: 'iGaming Payment Integration, Security Risk Management, and AML/KYC Protocols'
    },
    {
      id: 'custom-development-launch',
      label: 'Custom Development & Launch',
      icon: 'rocket' as const,
      title: 'Custom Development & Launch',
      description: 'Bring your custom iGaming platform to life through a structured development lifecycle—including architecture planning, custom development, third-party integrations, comprehensive quality assurance testing, and live launch preparation with full source code delivered under agreed terms.',
      image: '/assets/features/turnkey-igaming-platform-infrastructure-services.webp',
      alt: 'Turnkey iGaming Platform Fast Deployment Infrastructure'
    },
  ];

  const solutions = [
    {
      id: 1,
      icon: Palette,
      title: 'Custom Brand & UI/UX Design',
      description: 'Create a distinctive player experience with bespoke frontend design. We build tailored casino and sportsbook interfaces with custom visual branding, intuitive betting navigation, and responsive layouts optimized for all devices.'
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Specialized Feature Development',
      description: 'Build proprietary capabilities tailored to your operational model. We develop custom casino mechanics, specialized sportsbook betting markets, bespoke bonus systems, and connect to existing integration infrastructure supporting 150+ game providers based on project scope and commercial agreements.'
    },
    {
      id: 3,
      icon: Wallet,
      title: 'Multi-Payment Gateway Integration',
      description: 'Connect fiat payment processors, credit and debit cards, localized digital wallets, and cryptocurrency rails based on your approved merchant accounts and operating jurisdictions.'
    },
    {
      id: 4,
      icon: Users,
      title: 'Custom User Management System',
      description: 'Implement tailored Player Account Management (PAM) workflows. Configure custom registration steps, player verification protocols, flexible user roles, loyalty tier rules, and transaction history tracking.'
    },
    {
      id: 5,
      icon: BarChart3,
      title: 'Custom Analytics & Reporting',
      description: 'Monitor your gaming operations with custom business intelligence dashboards. Track gross gaming revenue (GGR), player acquisition, turnover, and betting activity with exportable reports to support business decisions.'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Scalable & Resilient Architecture',
      description: 'Build your custom iGaming platform with scalable infrastructure, load balancing, and performance monitoring designed to support business growth and high-traffic gaming activity.'
    },
    {
      id: 7,
      icon: ShieldCheck,
      title: 'Compliance & Regulatory Framework',
      description: 'Incorporate jurisdictional compliance tools into your platform architecture. We implement configurable Know Your Customer (KYC), Anti-Money Laundering (AML), and fraud prevention workflows tailored to your operational requirements.'
    },
    {
      id: 8,
      icon: HandshakeIcon,
      title: 'Dedicated Development Team',
      description: 'Collaborate with experienced iGaming software developers dedicated to your custom build. Full source code is included with your custom-developed iGaming platform. Delivery scope, ownership, and intellectual property rights are defined in your project agreement.'
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

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
    setTimeout(() => {
      if (activeTabRef.current && tabsContainerRef.current) {
        const container = tabsContainerRef.current as HTMLElement;
        const button = activeTabRef.current as HTMLElement;
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

  const bespokeDevelopmentSteps: StepItem[] = [
    {
      id: 1,
      title: 'Requirements & Planning',
      text: (
        <>
          Understand the client&apos;s business model, casino or sportsbook requirements, target markets, and custom features.
        </>
      ),
    },
    {
      id: 2,
      title: 'UI/UX & Architecture',
      text: (
        <>
          Design the player experience, admin workflows, platform architecture, and technical requirements.
        </>
      ),
    },
    {
      id: 3,
      title: 'Custom Development',
      text: (
        <>
          Develop the casino, sportsbook, player management, payment integrations, and other agreed features from scratch.
        </>
      ),
    },
    {
      id: 4,
      title: 'Testing & Optimization',
      text: (
        <>
          Test platform functionality, integrations, security controls, and performance before launch.
        </>
      ),
    },
    {
      id: 5,
      title: 'Launch & Handover',
      text: (
        <>
          Prepare deployment and deliver the custom-developed source code according to the project agreement.
        </>
      ),
    },
  ];

  const customDiscoverItems = [
    {
      id: 1,
      title: 'Proprietary Platform Engineering',
      description: 'Custom backend architecture built to your exact specifications, transactional volume thresholds, custom rule engines, and business logic.',
      icon: Wrench,
      span: 2,
    },
    {
      id: 2,
      title: 'Bespoke Game Development',
      description: 'Exclusive slot games, custom crash games, live dealer environments, and unique fast games designed specifically for your brand ecosystem.',
      icon: Palette,
      span: 2,
    },
    {
      id: 3,
      title: 'Dedicated Microservices & APIs',
      description: 'High-speed event streams, custom wallet webhooks, and private API adapters integrating seamlessly with legacy banking or core PAM systems.',
      icon: Zap,
      span: 2,
    },
    {
      id: 4,
      title: 'Bespoke Loyalty & Gamification Logic',
      description: 'Tailored player progression mechanics, multi-tier VIP clubs, tournament brackets, and achievement systems engineered from the ground up.',
      icon: Lightbulb,
      span: 3,
    },
    {
      id: 5,
      title: 'Custom Risk & Regulatory Engines',
      description: 'Specialized AML, KYC, and geolocation workflows adapted for emerging or unique jurisdictions with custom automated audit exports.',
      icon: ShieldCheck,
      span: 3,
    },
    {
      id: 6,
      title: 'Casino Platform Software',
      description: 'Looking for our production-ready modular casino engine and PAM instead of custom development from scratch? Explore our Casino Platform.',
      icon: LayoutDashboard,
      link: '/online-casino-platform-software',
      span: 2,
    },
    {
      id: 7,
      title: 'Turnkey Casino Solutions',
      description: 'Prefer an established turnkey package with rapid time-to-market over custom software development? Explore our Turnkey Casino Solution.',
      icon: Rocket,
      link: '/turnkey-casino-software-solutions',
      span: 2,
    },
    {
      id: 8,
      title: 'Pori444 Bangladesh Case Study',
      description: 'Discover how KVAORNUX engineered a localized iGaming platform with custom mobile banking integrations and fast bet settlement in South Asia.',
      icon: HandshakeIcon,
      link: '/igaming-case-studies/building-a-localized-igaming-platform-for-bangladesh',
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
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ebaa]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-[#00ebaa]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

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
                Bespoke iGaming Solutions
              </li>
            </ol>
          </nav>

          {/* Main Title */}
          <div className="text-center mb-3">
            <h1 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Bespoke iGaming Solutions
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
              Build your casino, sportsbook, or complete iGaming platform from scratch with KVAORNUX. Our custom iGaming software development services are tailored to your business requirements, including unique features, payment integrations, player management, and full source code.
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
              Discuss Your Custom Project
            </button>
          </div>

        </div>
      </section>

      {/* Tab Features Section */}
      <section id="solutions" className="relative pb-12 md:pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">

          {/* Tab Buttons */}
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto pb-3 mb-8 sm:mb-10 md:mb-12 lg:mb-14 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
            role="tablist"
            aria-label="Custom Platform Categories"
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap py-1.5 px-1">
              {tabs.map((tab, index) => {
                const IconComponent = iconMap[tab.icon as keyof typeof iconMap];
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
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${
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

                {/* Image Card — first on mobile, right on desktop */}
                <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
                  <div className="relative w-full aspect-video lg:aspect-auto lg:h-full rounded-xl sm:rounded-2xl md:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ebaa]/20 to-[#00ebaa]/5 rounded-xl sm:rounded-2xl blur-3xl animate-pulse"></div>
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.alt || activeTabData.title}
                      className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                      style={{ animation: 'imageSlideIn 0.6s ease-out' }}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUsIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg=='
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
                Custom iGaming Software Development Services
              </h2>

              <p 
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Every module, integration, and tool needed to build your bespoke casino and sportsbook platform from scratch. Full technical autonomy, tailored feature development, and source code included.
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
                  <span className="relative z-10 text-sm sm:text-base font-bold text-black">Start Building</span>
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

      {/* Development Process Steps Slider */}
      <StepsSection
        sectionId="development-process"
        className="my-8 md:my-16"
        scrollSticky={true}
        customTitle="How We Build Your Custom iGaming Platform"
        customSubtitle="Follow our structured engineering path from initial discovery and platform architecture to custom development, testing, and production handover."
        customSteps={bespokeDevelopmentSteps}
        customCtaText="Discuss Your Custom Project"
        ctaHref="#contact-form-section"
        onCtaClick={(e) => {
          e.preventDefault();
          handleScrollToContact();
        }}
      />

      {/* Three-Solution Comparison Section: White Label vs Turnkey vs Bespoke */}
      <section id="solution-comparison" className="relative py-16 md:py-24 bg-[#080b0f] border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              White Label vs Turnkey vs Bespoke iGaming Development
            </h2>
            <p className="text-[#a5a5a5] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Compare our software delivery models to choose the right platform architecture, time to market, and source code ownership for your business.
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
                      Existing platform with custom branding
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
                      Custom branding and responsive player UI
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
                      Source code available separately at additional cost
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

            {/* Card 2: Turnkey Casino Software */}
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
                  <Link href="/turnkey-casino-software-solutions" className="hover:text-[#00ebaa] transition-colors">
                    Turnkey Casino Software
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  Complete casino and sportsbook platform with source code included at no extra charge. Pre-configured for swift setup with extensive operational tools.
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
                      Source code included at no extra charge
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
                      Fast deployment for established configurations
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <Link
                  href="/turnkey-casino-software-solutions"
                  className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                >
                  <span>Explore Turnkey Solution</span>
                </Link>
                <Link
                  href="/turnkey-casino-software-solutions"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                  aria-label="Explore Turnkey Solution"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3: Bespoke iGaming Development (Current Solution - Highlighted) */}
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
                  Bespoke iGaming Development
                </h3>
                <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                  A fully custom platform developed from scratch around the client&apos;s business requirements. Engineered for complete operational autonomy and proprietary features.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      100% custom platform engineered from scratch
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Bespoke UI/UX, player journeys, and branding
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Custom casino mechanics and specialized sportsbook
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Tailored payment gateways and third-party APIs
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Source code included, with ownership and IP rights defined in the project agreement
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
                  <span>Discuss Your Custom Project</span>
                </button>
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0 cursor-pointer"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                  aria-label="Discuss Your Custom Project"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover More Section */}
      <DiscoverMore
        customItems={customDiscoverItems}
        customTitle="Explore Custom iGaming Capabilities"
        customSubtitle="Tailored engineering, proprietary game development, and custom integration services for unique operator roadmaps."
      />

      {/* 13 Operator-Focused FAQs */}
      <FAQSection customFaqData={BESPOKE_FAQS} hideBgImage={true} />

      {/* Opportunities Section */}
      <OpportunitiesSection/>
      <ContactForm defaultCategory="Bespoke iGaming Solutions" />
    
    </>
  );
}
