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

export default function CustomSweepstakesClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Custom Platform Architecture');
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
      id: 'custom-architecture',
      label: 'Custom Platform Architecture',
      icon: 'wallet' as const,
      title: 'Architecture Designed Around Your Product',
      description: 'Define the platform around your required player journeys, wallet behavior, operational model and third-party ecosystem rather than adapting the business to a fixed template. Structure services and integrations around the requirements established during technical discovery.',
      image: '/assets/features/custom-igaming-platform-design-interface.webp'
    },
    {
      id: 'custom-gc-sc',
      label: 'Custom GC / SC Logic',
      icon: 'shield-check' as const,
      title: 'Gold Coin & Sweeps Coin Logic Built Around Your Model',
      description: 'Configure independent Gold Coin and Sweeps Coin balances, transaction ledgers, promotional allocation rules, administrative adjustments, eligibility logic and redemption-related currency workflows around the approved product requirements.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp'
    },
    {
      id: 'player-workflows',
      label: 'Player & Entry Workflows',
      icon: 'gamepad-2' as const,
      title: 'Custom Player, AMOE & Eligibility Workflows',
      description: 'Design registration, player eligibility, AMOE request processing, verification, geolocation and account-control workflows around the operator\'s defined operating framework and required third-party services.',
      image: '/assets/features/online-casino-game-aggregation-10000-plus-slots.webp'
    },
    {
      id: 'payments-redemption',
      label: 'Payments & Redemption',
      icon: 'credit-card' as const,
      title: 'Custom Purchase & Prize Redemption Operations',
      description: 'Build payment and redemption workflows around the required Gold Coin packages, payment services, transaction controls, redemption thresholds, verification gates, risk review processes, approval queues and prize-processing integrations.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp'
    },
    {
      id: 'custom-backoffice',
      label: 'Custom Back Office',
      icon: 'layout-dashboard' as const,
      title: 'Back Office Built Around Your Operations Team',
      description: 'Give operations teams the controls required by the product rather than forcing them into a generic admin panel. Manage players, GC/SC activity, redemptions, verification, games, promotions, affiliates, risk reviews, reports and staff permissions through role-based workflows.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Wallet,
      title: 'Product-Specific Platform Architecture',
      description:
        'Structure frontend, backend and integration layers around the project\'s player journeys, operational requirements and long-term technology roadmap instead of relying on a fixed product template.'
    },
    {
      id: 2,
      icon: Gamepad2,
      title: 'Custom Dual-Currency Wallet Logic',
      description:
        'Define Gold Coin and Sweeps Coin balances, transaction ledgers, promotional allocation rules, administrative adjustments and currency-specific workflows around the approved product model.'
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'AMOE & Eligibility Workflows',
      description:
        'Implement Alternative Method of Entry processing with configurable submission, review, status tracking, eligibility checks, promotional currency allocation and auditable records.'
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: 'Custom Player Account Management',
      description:
        'Build player registration, authentication, verification status, account controls, GC/SC history and player lifecycle workflows around the operational requirements of the platform.'
    },
    {
      id: 5,
      icon: Sparkles,
      title: 'Game & Content Integration Layer',
      description:
        'Connect compatible providers and aggregation APIs while defining game categories, availability rules, currency behavior and player access through a unified integration layer.'
    },
    {
      id: 6,
      icon: LayoutDashboard,
      title: 'Payments & Transaction Infrastructure',
      description:
        'Integrate compatible payment services for Gold Coin purchases while maintaining transaction histories, payment statuses, operational review controls and reconciliation-ready records.'
    },
    {
      id: 7,
      icon: RefreshCw,
      title: 'Prize Redemption & Risk Workflows',
      description:
        'Configure redemption thresholds, eligibility checks, verification gates, suspicious-activity review, duplicate-account checks, approval queues and connected prize-processing workflows.'
    },
    {
      id: 8,
      icon: Cpu,
      title: 'CRM, Promotions & Affiliate Operations',
      description:
        'Create configurable promotional campaigns, player segments, rewards, referrals, loyalty mechanics and affiliate workflows around the acquisition and retention strategy of the product.'
    },
    {
      id: 9,
      icon: Layers,
      title: 'Custom Operator Back Office',
      description:
        'Give teams role-based control over players, currencies, games, payments, redemptions, verification, promotions, affiliates, risk reviews, reports and administrative actions.'
    },
    {
      id: 10,
      icon: Rocket,
      title: 'Modular Integrations & Future Development',
      description:
        'Keep platform services and third-party connections modular so new integrations, workflows and product capabilities can be introduced as the operator\'s roadmap evolves, subject to technical compatibility and project scope.'
    }
  ];

  const customDiscoverItems = [
    {
      id: 1,
      title: 'Custom Wallet Architecture',
      description: 'Independent GC/SC balances, configurable currency rules, transaction ledgers and product-specific wallet workflows.',
      icon: Wallet,
      span: 2
    },
    {
      id: 2,
      title: 'AMOE & Eligibility Engine',
      description: 'Configurable entry processing, eligibility checks, request status workflows and promotional currency allocation.',
      icon: ShieldCheck,
      span: 2
    },
    {
      id: 3,
      title: 'Player Account Management',
      description: 'Custom registration, verification, account controls, player history and lifecycle management.',
      icon: Sparkles,
      span: 2
    },
    {
      id: 4,
      title: 'Payment Integrations',
      description: 'Connect compatible payment services around purchase flows, transaction controls and operational requirements.',
      icon: CreditCard,
      span: 3
    },
    {
      id: 5,
      title: 'Redemption & Risk',
      description: 'Configure eligibility, verification, review queues, suspicious-activity checks and prize-processing workflows.',
      icon: RefreshCw,
      span: 3
    },
    {
      id: 6,
      title: 'Game Integration Layer',
      description: 'Connect compatible provider and aggregation APIs through a platform-specific content integration architecture.',
      icon: Gamepad2,
      span: 2
    },
    {
      id: 7,
      title: 'CRM & Growth Tools',
      description: 'Build segmentation, promotions, rewards, referrals, loyalty and affiliate workflows around the product strategy.',
      icon: HandshakeIcon,
      span: 2
    },
    {
      id: 8,
      title: 'Back Office & Reporting',
      description: 'Create role-based operational controls, reporting and administrative audit records around the team\'s workflows.',
      icon: LayoutDashboard,
      span: 2
    }
  ];

  const faqs = [
    {
      question: 'What is custom sweepstakes casino software?',
      answer:
        'Custom Sweepstakes Casino software is developed around an operator\'s specific product requirements rather than being limited to a predefined platform configuration. Architecture, wallet logic, player workflows, integrations and operator tools can be designed around the agreed technical scope.'
    },
    {
      question: 'How is custom Sweepstakes development different from turnkey software?',
      answer:
        'Turnkey development begins with an established platform core that is configured for the project. Custom development is better suited to businesses requiring deeper architectural changes, proprietary workflows, specialized integrations or product-specific platform logic.'
    },
    {
      question: 'Can Gold Coin and Sweeps Coin logic be customized?',
      answer:
        'Yes. GC and SC balances, transaction rules, promotional allocations, administrative adjustments, eligibility logic and redemption-related workflows can be configured or developed according to the approved product requirements.'
    },
    {
      question: 'Can custom AMOE workflows be developed?',
      answer:
        'Yes. AMOE workflows can support request submission, verification and eligibility checks, status tracking, promotional currency allocation and auditable records according to the operator\'s defined operating framework.'
    },
    {
      question: 'Can KYC and geolocation services be integrated?',
      answer:
        'Yes. Compatible identity, age-verification and geolocation providers can be integrated into registration, account-access and redemption workflows according to technical and project requirements.'
    },
    {
      question: 'Can Kvaornux integrate my preferred game providers?',
      answer:
        'Compatible provider and aggregation APIs can be integrated according to technical availability and the operator\'s commercial arrangements. Sweepstakes compatibility should be confirmed for each content provider.'
    },
    {
      question: 'Can payment and redemption workflows be customized?',
      answer:
        'Yes. Gold Coin purchase flows, payment integrations, redemption thresholds, verification gates, risk reviews, approval statuses and prize-processing integrations can be structured around the project\'s requirements.'
    },
    {
      question: 'Can the operator back office be customized?',
      answer:
        'Yes. Back-office workflows can be designed around player management, virtual currency operations, redemptions, verification, games, payments, promotions, affiliates, risk controls, reporting and staff permissions.'
    },
    {
      question: 'Will I receive the source code?',
      answer:
        'Source-code access, ownership, handover and licensing depend on the agreed project scope and commercial model. These terms should be documented before development begins.'
    },
    {
      question: 'How long does custom Sweepstakes casino development take?',
      answer:
        'The timeline depends on platform architecture, UI/UX requirements, custom workflows, wallet logic, game integrations, payments, verification services and overall project scope. The delivery schedule is defined after technical discovery and scope confirmation.'
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
              Custom Sweepstakes Casino Software Built Around Your Operating Model
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
              Build a Sweepstakes platform around your own product requirements, player journeys and operational workflows — from custom Gold Coin and Sweeps Coin logic to integrations, redemption systems, back-office controls and scalable platform architecture.
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
                Build the Sweepstakes Platform Your Business Actually Requires
              </h2>

              <p
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Custom development gives operators deeper control over platform logic, player experiences, integrations and operational workflows while keeping the technology structured around long-term product requirements.
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
                    Discuss Custom Requirements
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
        customItems={customDiscoverItems}
        customTitle="Explore Custom Sweepstakes Capabilities"
        customSubtitle="Technology components that can be shaped around your platform architecture, operational model and long-term product roadmap."
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
    'custom-architecture': 'Custom Sweepstakes Platform Architecture and Engineering Design',
    'custom-gc-sc': 'Custom Gold Coin and Sweeps Coin Virtual Currency Logic Architecture',
    'player-workflows': 'Custom Sweepstakes Player Onboarding, AMOE and Geolocation Workflows',
    'payments-redemption': 'Custom Payment Gateways and Prize Redemption Operations Architecture',
    'custom-backoffice': 'Custom Operator Back-Office Dashboard and Player Management System',
  };
  return altMap[tabId] || 'custom sweepstakes casino software development solution';
}
