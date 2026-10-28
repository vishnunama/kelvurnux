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
  Code
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import { WHITE_LABEL_FAQS } from './faqData';

export default function WhiteLabelCasinoPlatform() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Branded platform');
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
    'gamepad-2': Gamepad2,
    rocket: Rocket,
    'shield-check': ShieldCheck,
    'layout-dashboard': LayoutDashboard,
    headphones: Headphones,
  };

  const tabs = [
    {
      id: 'branded-platform',
      label: 'Branded platform',
      icon: 'crown' as const,
      title: 'Branded platform',
      description:
        'Launch an online casino that reflects your brand identity. Customize your lobby design, color themes, player interface, and promotions on our flexible white label gaming platform.',
      image: '/assets/features/custom-white-label-igaming-platform-branding.webp',
      alt: 'Custom White Label iGaming Platform Branding and UI Interface'
    },
    {
      id: 'fast-launch',
      label: 'Fast deployment',
      icon: 'rocket' as const,
      title: 'Fast deployment',
      description:
        'Eligible pre-configured projects can launch in as little as 2–3 days. Projects requiring custom integrations or additional features may take 7 days or longer, depending on scope, approvals, and testing.',
      image: '/assets/features/turnkey-igaming-platform-infrastructure-services.webp',
      alt: 'Turnkey iGaming Platform Infrastructure and Fast Deployment Services'
    },
    {
      id: 'security-tools',
      label: 'Security & compliance',
      icon: 'shield-check' as const,
      title: 'Security & compliance',
      description:
        'Protect your players and your business with secure authentication, identity verification (KYC) tools, and built-in player account controls designed for compliant casino operations.',
      image: '/assets/features/all-in-one-igaming-platform-solutions.webp',
      alt: 'Enterprise iGaming Security, Compliance, and Risk Management Protocols'
    },
    {
      id: 'back-office',
      label: 'Back Office',
      icon: 'layout-dashboard' as const,
      title: 'Back Office',
      description:
        'Manage players, payments, bonuses, and casino activity from one central dashboard with clear reporting and role-based staff access.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      alt: 'Turnkey Back-Office Admin Dashboard with Real-Time Analytics and Player Controls'
    },
    {
      id: 'ongoing-support',
      label: 'Ongoing support',
      icon: 'headphones' as const,
      title: 'Ongoing Technical Support',
      description:
        'Ongoing technical support, platform maintenance, and system updates depend on the agreed support package from an experienced white label casino provider.',
      image: '/assets/features/24-7-igaming-technical-support-maintenance.webp',
      alt: 'Ongoing Technical Support and Infrastructure Maintenance for iGaming Operations'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Users,
      title: 'Player Account Management (PAM)',
      description:
        'Manage player registrations, balances, verification statuses, and gameplay history in one place. Your support team can review player activity and transaction records to resolve questions quickly.'
    },
    {
      id: 2,
      icon: Gamepad2,
      title: 'Casino Game Integrations',
      description:
        'Connect to an extensive game catalog through our existing infrastructure for 150+ providers. Offer popular slots, table games, live dealer titles, and crash games configured to match your commercial agreements.'
    },
    {
      id: 3,
      icon: Gift,
      title: 'Branding & UI Customization',
      description:
        'Make the casino your own. Easily add your logo, brand colors, custom banners, and unique lobby navigation across desktop and mobile screens.'
    },
    {
      id: 4,
      icon: Wallet,
      title: 'Payment Gateway Connectivity',
      description:
        'Provide smooth deposits and withdrawals for your players. Connect credit cards, regional e-wallets, bank transfers, or crypto payment gateways based on your approved merchant processing accounts.'
    },
    {
      id: 5,
      icon: LayoutDashboard,
      title: 'Centralized Admin Dashboard',
      description:
        'Control your entire casino operation from a single back office. Enable or disable games, set up promotional bonuses, monitor real-time revenue, and manage staff permissions with ease.'
    },
    {
      id: 6,
      icon: HandshakeIcon,
      title: 'Affiliate Management & Marketing',
      description:
        'Grow your player base with built-in affiliate tracking. Generate referral links, set custom commission tiers, and monitor partner performance right inside your platform.'
    },
    {
      id: 7,
      icon: ShieldCheck,
      title: 'Security & Player Verification',
      description:
        'Protect your platform with secure session management, player verification tools (KYC/AML), withdrawal limits, and administrative controls to support safe, compliant operations.'
    },
    {
      id: 8,
      icon: BarChart3,
      title: 'Reporting & Real-Time Analytics',
      description:
        'Track gross gaming revenue (GGR), deposits, player retention, and game performance with clear, exportable reports that help you make informed business decisions.'
    },
    {
      id: 9,
      icon: RefreshCw,
      title: 'Mobile-Responsive Platform Engine',
      description:
        'Give players a smooth, fast-loading casino experience on smartphones, tablets, and desktop browsers without requiring app store downloads or installations.'
    },
    {
      id: 10,
      icon: Rocket,
      title: 'Source Code Purchase Option',
      description:
        'Operators have the option to purchase the platform source code separately for an additional fee. Full ownership rights, licensing scope, and delivery terms are outlined in your project agreement.'
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

  const whiteLabelLaunchSteps: StepItem[] = [
    {
      id: 1,
      title: 'Choose Your Casino Package',
      text: (
        <>
          Select the software package that fits your business model, target markets, and budget. We help you choose the right platform modules and game provider integrations for your launch.
        </>
      ),
    },
    {
      id: 2,
      title: 'Customize Your Branding',
      text: (
        <>
          Personalize the casino with your own brand. Add your logo, select your color palette, set up your custom domain, and style the player lobby for mobile and desktop.
        </>
      ),
    },
    {
      id: 3,
      title: 'Configure Games & Payments',
      text: (
        <>
          Select games from our 150+ provider network and connect your preferred payment processors, cards, e-wallets, or crypto gateways based on your commercial agreements.
        </>
      ),
    },
    {
      id: 4,
      title: 'Test & Prepare for Launch',
      text: (
        <>
          Review your casino before opening to players. Test deposits and withdrawals, verify game loading, train your team on the admin dashboard, and confirm all settings are ready.
        </>
      ),
    },
    {
      id: 5,
      title: 'Launch & Ongoing Support',
      text: (
        <>
          Take your casino live for players. Continue to receive technical support, platform maintenance, and system updates according to your support agreement as your business grows.
        </>
      ),
    },
  ];

  const whiteLabelDiscoverItems = [
    {
      id: 1,
      title: 'Jurisdictional & Regulatory Readiness',
      description: 'Launch on platform architecture designed to support compliance in your target markets, with configurable KYC verification, player limits, and audit logs.',
      icon: Crown,
      span: 2,
    },
    {
      id: 2,
      title: 'Branded Frontend Customization',
      description: 'Personalize the player lobby with your custom logo, color scheme, typography, and responsive mobile-first design.',
      icon: Gift,
      span: 2,
    },
    {
      id: 3,
      title: 'Payment Gateway Connectivity',
      description: 'Connect merchant processing accounts, credit cards, regional e-wallets, and cryptocurrency gateways based on your commercial agreements.',
      icon: Wallet,
      span: 2,
    },
    {
      id: 4,
      title: '150+ Game Provider Infrastructure',
      description: 'Access existing integration infrastructure for slots, table games, and live dealers from 150+ providers, activated according to your agreements.',
      icon: Gamepad2,
      link: '/casino-aggregator-api-solution',
      span: 3,
    },
    {
      id: 5,
      title: 'Technical Support & Platform Maintenance',
      description: 'Receive ongoing technical support, system maintenance, and software updates to keep your casino running reliably as your business grows.',
      icon: Headphones,
      span: 3,
    },
    {
      id: 6,
      title: 'Source Code & Platform Ownership',
      description: 'Operators can purchase the platform source code separately for an additional fee. Ownership rights, licensing scope, and transfer terms are defined in your agreement.',
      icon: Rocket,
      link: '/turnkey-casino-software-solutions',
      span: 2,
    },
    {
      id: 7,
      title: 'Casino Platform Software',
      description: 'Looking for standalone software licensing, modular PAM, and wallet APIs? Discover our enterprise Casino Platform Software.',
      icon: LayoutDashboard,
      link: '/online-casino-platform-software',
      span: 2,
    },
    {
      id: 8,
      title: 'Lakebets Case Study',
      description: 'See how KVAORNUX developed a mobile-first casino platform with multi-provider game aggregation and fast bet settlement.',
      icon: HandshakeIcon,
      link: '/igaming-case-studies/casino-platform-development',
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
                White Label Casino Software
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
              White Label Casino Solutions
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
              Launch your white label online casino without building from scratch. KVAORNUX provides ready-made white label casino software with customizable branding, fast deployment workflows, and integration infrastructure for 150+ game providers.
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
            className="overflow-x-auto pb-3 mb-8 sm:mb-10 md:mb-12 lg:mb-14 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
            role="tablist"
            aria-label="Platform Feature Categories"
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap py-1.5 px-1">
              {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];
                return (
                  <button
                    key={tab.id}
                    ref={activeTab === tab.label ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.label
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
                Complete White Label Solution Package
              </h2>

              <p 
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Everything you need to launch and scale your white label gaming platform — from core back-office infrastructure to unified player management, all configured and ready to deploy.
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
        customTitle="How to Launch a White Label Casino"
        customSubtitle="Explore the steps from selecting your ready-made casino platform to configuring your brand, integrating services, testing and launching."
        customSteps={whiteLabelLaunchSteps}
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
              Compare our three casino solutions and choose the right platform for your business.
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
                  White Label Casino Software
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
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0 cursor-pointer"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                  aria-label="Request White Label Demo"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2: Turnkey Casino */}
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
                  Get a complete casino software package configured for your business, with integrated gaming tools, payment options, and operational controls.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Configured casino platform and back office
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    </svg>
                    <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                      Game and payment integrations based on package
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
                      Tailored branding and operational customization
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
                <Link
                  href="/turnkey-casino-software-solutions"
                  className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                >
                  <span>Explore Turnkey Casino</span>
                </Link>
                <Link
                  href="/turnkey-casino-software-solutions"
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[#121314] transition-all duration-300 hover:scale-105 shrink-0"
                  style={{
                    background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%)',
                    boxShadow: '0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                  aria-label="Explore Turnkey Casino"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
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
        customItems={whiteLabelDiscoverItems}
        customTitle="Explore White Label Platform Capabilities"
        customSubtitle="Complete brand customization, managed infrastructure, and pre-integrated solutions for rapid casino launches."
      />

      {/* FAQ Section */}
      <FAQSection customFaqData={WHITE_LABEL_FAQS} hideBgImage={true} />

      {/* Opportunities Section */}
      <OpportunitiesSection />

      {/* Contact Form */}
      <ContactForm defaultCategory="White Label Casino" />
    
    </>
  );
}