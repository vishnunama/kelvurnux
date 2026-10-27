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
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';

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
    } else {
      window.location.href = '/#contact-form-section';
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
      description: 'Built on a pre-configured platform core, the dual-currency engine maintains separate, real-time ledgers for Gold Coins (entertainment play) and Sweeps Coins (promotional participation). The core ledger handles atomic transaction commits, gameplay deductions, unredeemable vs. redeemable partitioning, and complete audit histories. Operators configure package pricing, bonus coin ratios, and 1x playthrough rules, while live balance calls connect seamlessly to external game server APIs.',
      image: '/assets/features/custom-igaming-platform-design-interface.webp'
    },
    {
      id: 'compliance-controls',
      label: 'Compliance & Geolocation',
      icon: 'shield-check' as const,
      title: 'Compliance Controls, Geolocation & AMOE',
      description: 'Pre-built administrative modules provide end-to-end Alternative Method of Entry (AMOE) processing, unique request code tracking, automated promotional Sweeps Coin crediting, and responsible-play controls. Third-party identity verification (KYC) and geolocation services connect via API to enforce operator-configured jurisdictional blocklists (such as Washington, Idaho, Michigan, or Nevada), ensuring compliant player onboarding before gameplay or prize redemption.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp'
    },
    {
      id: 'game-aggregation',
      label: 'Game Integration Layer',
      icon: 'gamepad-2' as const,
      title: 'Casino Game Content Integration',
      description: 'Connect compatible casino content through standardized aggregation APIs while managing game categories, active studios, and player lobby display rules from the back office. The platform core provides game launch URL generation, session token management, and bet/win webhook settlement. Game availability and content distribution rights depend on the operator’s direct commercial agreements with certified game studios.',
      image: '/assets/features/online-casino-game-aggregation-10000-plus-slots.webp'
    },
    {
      id: 'payments-redemption',
      label: 'Payments & Redemption',
      icon: 'credit-card' as const,
      title: 'Payments, Purchases & Prize Redemption',
      description: 'Manage Gold Coin package purchases and prize redemptions through a controlled operational pipeline. The platform core includes purchase checkout session handlers, redemption request intake, and a multi-stage administrative review queue (Pending, In Review, Approved, Disbursed). Operators set minimum/maximum redemption thresholds and integrate external payment gateways and payout rails subject to merchant underwriting approval.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp'
    },
    {
      id: 'backoffice-analytics',
      label: 'Back Office & Analytics',
      icon: 'layout-dashboard' as const,
      title: 'Operator Back Office Console',
      description: 'A centralized administrative command center providing role-based staff permissions (Super Admin, Support, Compliance, Risk) across Player Account Management (PAM), real-time GGR/NGR reporting, transaction audit trails, and player verification status. Operators retain complete access to exportable raw data and ledgers, with configurable fraud alert thresholds for suspicious account velocity and duplicate profiles.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Wallet,
      title: 'Dual-Currency Wallet Engine (Platform Core)',
      description:
        'Maintain separate Gold Coin and Sweeps Coin balances with independent real-time transaction ledgers, atomic wager debit/credit locking, configurable promotional rules, and immutable audit trails built directly into the platform core for clean financial reconciliation.'
    },
    {
      id: 2,
      icon: Gamepad2,
      title: 'Game Content Integration Layer (Third-Party APIs)',
      description:
        'Connect certified slot, table, and live-dealer content via standardized aggregation APIs. Operators configure lobby categorization and jurisdictional game visibility, while commercial distribution agreements remain directly between the operator and game providers.'
    },
    {
      id: 3,
      icon: CreditCard,
      title: 'Payments, Coin Purchases & Prize Redemption (Configurable Rails)',
      description:
        'Configure Gold Coin bundle price points and multi-stage Sweeps Coin redemption workflows (Pending, In Review, Approved, Disbursed). External payment gateways and payout disbursement rails connect via third-party merchant accounts based on underwriter approval.'
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: 'AMOE & Regulatory Compliance Controls (Core Tools & Geolocation)',
      description:
        'Native administrative tools support Alternative Method of Entry (AMOE) code verification, mail-in queue management, and responsible-play limits. Third-party KYC and geolocation APIs integrate to enforce state-level boundary exclusions determined with qualified legal counsel.'
    },
    {
      id: 5,
      icon: Sparkles,
      title: 'Player Engagement & Retention Tools (Platform Core)',
      description:
        'Operational marketing teams can configure daily login bonus streaks, tiered VIP loyalty programs, referral rewards, and leaderboard tournaments directly through the back-office console without requiring recurring engineering modifications.'
    },
    {
      id: 6,
      icon: LayoutDashboard,
      title: 'Player Account Management (PAM) & Governance (Platform Core)',
      description:
        'Centralize player lifecycle management with role-based staff permissions separating cashier, support, compliance, and administrator access. Features comprehensive player audit timelines, session logs, and manual balance adjustment tracking.'
    },
    {
      id: 7,
      icon: RefreshCw,
      title: 'Branded Web & Mobile Browser Experience (Frontend Customization)',
      description:
        'Deliver a responsive HTML5 player experience tailored to your brand identity, color palette, custom logos, and lobby navigation. Engineered for optimal performance across mobile and desktop browsers without native app store friction.'
    },
    {
      id: 8,
      icon: Cpu,
      title: 'Modular Platform Architecture & Audit Records (Platform Core)',
      description:
        'API-first architecture designed with modular microservices, idempotent webhook handling, and real-time database replication. Ensures high availability, data integrity under peak concurrent traffic, and full operator data exportability.'
    },
    {
      id: 9,
      icon: Layers,
      title: 'Structured Launch Delivery Process (Phased Delivery)',
      description:
        'A structured onboarding roadmap covering scope definition, platform configuration, brand styling, third-party API integration, sandbox testing, back-office staff training, and production handover with clear milestone deliverables.'
    },
    {
      id: 10,
      icon: Rocket,
      title: 'Turnkey Platform vs. Custom Engineering (Scope Pathways)',
      description:
        'Deploy turnkey sweepstakes systems when an established, tested platform core accelerates market entry and lowers initial capital requirements. Scope custom engineering separately for proprietary game math engines or non-standard architectures.'
    }
  ];

  const turnkeyLaunchSteps: StepItem[] = [
    {
      id: 1,
      title: 'Requirements & Platform Configuration',
      text: (
        <>
          Define commercial operating parameters, Gold Coin and Sweeps Coin virtual
          currency rules, prize redemption thresholds, AMOE processing procedures, and
          administrative staff role permissions on the established Kvaornux core architecture.
        </>
      ),
    },
    {
      id: 2,
      title: 'Branding & Interface Customization',
      text: (
        <>
          Tailor the responsive HTML5 player interface to your brand identity,
          incorporating your visual assets, color palette, custom logo, game
          lobby navigation, and promotional campaign banners.
        </>
      ),
    },
    {
      id: 3,
      title: 'Game, Payment & Verification Integrations',
      text: (
        <>
          Connect external service providers based on your commercial
          agreements—including compatible game studio feeds, payment gateways
          for coin package sales, payout rails for prize redemptions, and
          third-party KYC or geolocation verification APIs.
        </>
      ),
    },
    {
      id: 4,
      title: 'Testing & Operator Acceptance',
      text: (
        <>
          Conduct rigorous sandbox and end-to-end acceptance testing across
          player registration, coin purchasing, game server callbacks, wallet
          ledger balancing, AMOE request handling, and administrative prize
          redemption approval workflows.
        </>
      ),
    },
    {
      id: 5,
      title: 'Production Launch Preparation',
      text: (
        <>
          Deploy the configured turnkey system to live production infrastructure,
          perform final connectivity and security checks, train operational staff
          on back-office PAM and risk management consoles, and prepare for live
          player onboarding.
        </>
      ),
    },
  ];

  const turnkeyDiscoverItems = [
    {
      id: 1,
      title: 'Dual-Currency Economy',
      description: 'Pre-configured GC/SC balance engine with independent ledgers, automated wager deduction, and separate promotional allocation channels.',
      icon: Wallet,
      span: 2
    },
    {
      id: 2,
      title: 'AMOE & Entry Management',
      description: 'Administrative queue for processing mail-in requests, verifying unique participant codes, and crediting promotional Sweeps Coins.',
      icon: ShieldCheck,
      span: 2
    },
    {
      id: 3,
      title: 'Prize Redemption Engine',
      description: 'Multi-stage redemption approval pipeline with configurable thresholds, identity verification checks, and automated payout disbursement hooks.',
      icon: RefreshCw,
      span: 2
    },
    {
      id: 4,
      title: 'KYC, Geolocation & Access Controls',
      description: 'Integration-ready modules for connecting identity verification and boundary detection to enforce state-level compliance rules.',
      icon: Layers,
      span: 3
    },
    {
      id: 5,
      title: 'Fraud & Risk Management',
      description: 'Operational monitoring tools covering velocity limits, multiple account detection, suspicious redemption alerts, and risk review flags.',
      icon: Cpu,
      span: 3
    },
    {
      id: 6,
      title: 'Player Account Management & CRM',
      description: 'Centralized PAM console for managing user profiles, tracking lifetime player activity, setting promotional rules, and segmenting users.',
      icon: Sparkles,
      span: 2
    },
    {
      id: 7,
      title: 'Promotions, Loyalty & Affiliates',
      description: 'Turnkey promotional engine supporting daily login streaks, spin-the-wheel rewards, leaderboard tournaments, and affiliate tracking.',
      icon: HandshakeIcon,
      span: 2
    },
    {
      id: 8,
      title: 'Reporting & Audit Controls',
      description: 'Real-time GGR, purchase volume, and redemption reporting with immutable administrative action logs for operator financial accounting.',
      icon: LayoutDashboard,
      span: 2
    }
  ];

  const faqs = [
    {
      question: 'What is included in turnkey sweepstakes systems?',
      answer:
        'A turnkey sweepstakes system includes an established software platform core: a dual-currency (Gold Coins and Sweeps Coins) wallet engine, Player Account Management (PAM), an Alternative Method of Entry (AMOE) processing queue, a multi-stage prize redemption approval workflow, and a back-office administration console. It also includes integration adapters for game aggregators, payment gateways, KYC identity verification, and geolocation boundary detection, paired with a customized HTML5 player frontend.'
    },
    {
      question: 'Which parts of the turnkey platform can be customized?',
      answer:
        'Operators can fully customize the player-facing interface (branding, color palettes, logos, promotional banners, and navigation layouts), virtual currency packages and pricing, promotional bonuses (sign-up gifts, daily login streaks), prize redemption thresholds, jurisdictional restricted-state rules, game catalog categories, and administrative staff permission roles.'
    },
    {
      question: 'How is turnkey sweepstakes software different from custom development?',
      answer:
        'Turnkey sweepstakes systems build upon a pre-existing, tested core architecture, dramatically reducing time-to-market and initial capital investment. Custom development involves engineering proprietary architecture from scratch, which is best suited for operators requiring bespoke game math engines, patented mechanics, or highly unusual backend configurations.'
    },
    {
      question: 'Who handles game provider and payment processing approvals?',
      answer:
        'The operator contracts directly with game studios and payment merchant processors. Kvaornux provides the technical API integration adapters, sandbox testing, and webhook listeners, while commercial agreements, merchant underwriting, fee negotiations, and account approvals remain between the operator and the third-party providers.'
    },
    {
      question: 'Does the platform maintain separate Gold Coin and Sweeps Coin ledgers?',
      answer:
        'Yes. The platform core maintains two completely distinct virtual currency ledgers. Gold Coins (used for recreational entertainment) and Sweeps Coins (used for promotional sweepstakes participation) are tracked separately with immutable real-time transaction records, dedicated playthrough multipliers, and segregated redemption eligibility.'
    },
    {
      question: 'Can Alternative Method of Entry (AMOE) workflows be configured?',
      answer:
        'Yes. The platform includes a dedicated administrative AMOE portal. Players generate a unique entry request code through their player account, mail in their physical request card, and operational staff verify and enter the code in the back office. The system validates code authenticity, enforces submission limits, and credits promotional Sweeps Coins with auditable logs.'
    },
    {
      question: 'What third-party services must an operator integrate before launching?',
      answer:
        'A fully operational sweepstakes casino typically requires four categories of third-party integrations: payment processing gateways (credit/debit cards, ACH, or instant bank transfer), prize payout disbursement rails, identity and age verification (KYC/AML) services, and geolocation boundary detection APIs to enforce state-level access rules.'
    },
    {
      question: 'What factors affect the turnkey platform launch timeline?',
      answer:
        'While Kvaornux configures the core software in a structured delivery timeline, overall launch timing largely depends on external factors: brand design approvals, game provider commercial agreements, merchant payment processor underwriting (which often takes 2 to 6 weeks), and the operator completing independent legal review of their sweepstakes rules.'
    },
    {
      question: 'Can the platform restrict access in specific US states?',
      answer:
        'Yes. The platform provides a configurable jurisdictional rules engine that works with geolocation and IP verification APIs. Operators can block player registration, purchases, or gameplay in restricted jurisdictions (such as Washington, Idaho, Nevada, Michigan, or other states determined with qualified gaming counsel).'
    },
    {
      question: 'What should an operator evaluate in a turnkey software proposal?',
      answer:
        'Before executing a contract, operators should clarify: (1) what setup deliverables are covered vs. billable customizations, (2) monthly recurring licensing or revenue-share fee structures, (3) direct third-party API transaction costs, (4) cloud hosting responsibilities and costs, (5) guaranteed technical support response times (SLAs), and (6) full data portability and player database ownership.'
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
                Turnkey Sweepstakes Casino Software
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
              Turnkey Sweepstakes Casino Software
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
              Launch your online sweepstakes casino on established turnkey sweepstakes systems built around a proven platform core. Essential modules—including dual-currency wallets, AMOE entry tracking, and operator back-office administration—are ready to deploy, while Kvaornux configures your brand identity, compatible game integrations, and payment workflows around agreed project requirements.
            </p>
          </div>

        </div>
      </section>

      {/* Tab Features Section */}
      <section id="platform-capabilities" className="relative pb-12 md:pb-16 from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Accessible Heading for SEO & Screen Readers */}
          <h2 className="sr-only">Core Turnkey Sweepstakes Platform Capabilities</h2>

          {/* Tab Buttons */}
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto py-2 pb-3 mb-8 sm:mb-10 md:mb-12 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
            role="tablist"
            aria-label="Turnkey Sweepstakes Platform Capabilities"
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
      <section id="solutions" className="relative bg-[#0b0b0f]">
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
        <div className="container mx-auto px-4 pt-8 sm:pt-12 max-w-[1310px] relative z-10">

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16 pb-16">

            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2
                ref={(el) => { solutionsElementsRef.current[0] = el; }}
                data-anim="from-top"
                className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Core Capabilities of Our Turnkey Sweepstakes System
              </h2>

              <p
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                A connected operational stack for launching your sweepstakes brand on an established platform architecture — covering virtual currencies, player activity, game content, payments, compliance controls and back-office administration. To review the overarching platform architecture and lifecycle, visit our comprehensive{' '}
                <Link href="/sweepstakes-casino-software" className="text-[#00ebaa] hover:underline">
                  sweepstakes casino software
                </Link>{' '}
                overview, or explore our detailed technical guide on{' '}
                <Link href="/blog/what-is-sweepstakes-casino-software" className="text-[#00ebaa] hover:underline">
                  sweepstakes casino software fundamentals
                </Link>.
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

      {/* Turnkey Launch Process Section (Horizontal Sticky Scroll Slider) */}
      <StepsSection
        sectionId="launch-process"
        scrollSticky={true}
        customTitle="Turnkey Sweepstakes Platform Launch Process"
        customSubtitle="Launch your turnkey sweepstakes systems through a structured process, from platform configuration and integrations to testing and deployment."
        customSteps={turnkeyLaunchSteps}
        customCtaText="Discuss Your Turnkey Platform"
        ctaHref="#contact-form-section"
        onCtaClick={(e) => {
          e.preventDefault();
          handleScrollToContact();
        }}
      />

      {/* Discover More Section */}
      <DiscoverMore
        customItems={turnkeyDiscoverItems}
        customTitle="Explore Turnkey Platform Capabilities"
        customSubtitle="Core technology and operational capabilities built around turnkey sweepstakes casino operations."
      />

      {/* FAQ Section */}
      <FAQSection customFaqData={faqs} hideBgImage={true} />

      {/* Opportunities Section */}
      <OpportunitiesSection />
      <ContactForm defaultCategory="Sweepstakes Casino Software" />

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
