'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Wallet,
  ShieldCheck,
  Gamepad2,
  LayoutDashboard,
  Sparkles,
  RefreshCw,
  Cpu,
  Layers,
  HandshakeIcon,
  TrendingUp,
  Settings,
  Rocket,
  Code,
  Users,
  Trophy,
  Activity,
  Zap,
  Store,
  Sliders
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';

export default function SportsbookPlatformClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('High-Throughput Betting Engine');
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
    zap: Zap,
    'trending-up': TrendingUp,
    'shield-check': ShieldCheck,
    activity: Activity,
    'store': Store,
  };

  const tabs = [
    {
      id: 'betting-engine',
      label: 'High-Throughput Betting Engine',
      icon: 'zap' as const,
      title: 'High-Throughput Bet Slip & Execution Architecture',
      description:
        'Engineered to handle massive wager spikes during global sports finals and derby matches. Validates thousands of bets per second with sub-100ms processing. Supports single bets, accumulators, system wagers, and bet builders with instant ticket settlement.',
      image: '/assets/features/products-and-portfolio-of-white-label-sportsbook-platform.webp',
    },
    {
      id: 'odds-feeds',
      label: 'Odds Feeds & 80+ Sports',
      icon: 'trending-up' as const,
      title: 'Real-Time Odds Feeds, 80+ Sports & Market Automation',
      description:
        'Access reliable sports data and odds streams covering over 80 sports, esports disciplines, and virtual events across 1,000+ betting markets. Centralized pricing controls allow operators to adjust profit margins, set automated markups, and toggle regional market visibility.',
      image: '/assets/features/tab-casino-platform-3.webp',
    },
    {
      id: 'risk-desk',
      label: 'Risk & Liability Desk',
      icon: 'shield-check' as const,
      title: 'Real-Time Liability Monitoring & Automated Risk Desk',
      description:
        'Maintain ironclad bookmaker profitability with automated exposure monitoring. The Kvaornux risk desk computes real-time liability across individual selections, games, and player portfolios, enforcing automatic stake throttling and risk limits for sharp syndicates.',
      image: '/assets/features/player-analytics-gameplay-flagged-round-alerts.webp',
    },
    {
      id: 'live-cashout',
      label: 'Live In-Play & Cashout',
      icon: 'activity' as const,
      title: 'Real-Time Live In-Play Betting, Trackers & Dynamic Cashout',
      description:
        'Deliver high player engagement with rich in-play betting features. Includes live match visualization centers, ball-by-ball trackers, and a mathematical dynamic cashout engine supporting full, partial, and auto-cashout configurations.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp',
    },
    {
      id: 'agent-network',
      label: 'Agent & Cashier Module',
      icon: 'store' as const,
      title: 'Multi-Tier Agent Hierarchy & Retail Cashier Module',
      description:
        'Equip online and retail bookmakers with a hierarchical agent and cashier architecture. Manage Master Agents, Super Agents, and Shop Cashiers with credit delegation, thermal ticket barcode printing, and real-time commission reconciliation.',
      image: '/assets/features/turnkey-igaming-platform-infrastructure-services.webp',
    },
  ];

  const solutions = [
    {
      id: 1,
      icon: Zap,
      title: 'Sub-100ms Bet Slip Validation Engine',
      description:
        'Near-instant bet slip execution during peak sports matches. Supports single bets, accumulators, system wagers, chain bets, and same-game parlays with configurable latency guards.',
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Multi-Source Odds Feeds & Market Automation',
      description:
        'Official real-time coverage for 80+ global sports and 1,000+ betting markets. Automated margin and payout percentage controls per sport, league, or market tier with redundant provider failover.',
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Real-Time Liability Desk & Sharp Player Defense',
      description:
        'Live visual book balance and liability exposure charts by event and market. Automated stake limitation for sharp bettors, dynamic bet acceptance delays, and cross-market arbitrage mitigation.',
    },
    {
      id: 4,
      icon: Activity,
      title: 'In-Play Live Betting Trackers & Dynamic Cashout',
      description:
        'Engaging in-play betting experience with real-time match visualization centers, ball trackers, and a mathematical cashout engine offering full, partial, and automated threshold cashouts.',
    },
    {
      id: 5,
      icon: Store,
      title: 'Hierarchical Agent & Retail Cashier Module',
      description:
        'Multi-tier agent network management (Master Agent, Sub-Agent, Cashier) with point-of-sale shop cashier terminals, barcode slip printing, credit delegation, and real-time commission calculations.',
    },
    {
      id: 6,
      icon: Wallet,
      title: 'Omnichannel Single-Wallet & PAM Connectivity',
      description:
        'Connect seamlessly with your core player account management (PAM) ledger. Bettors wager on pre-match sports, in-play fixtures, live casino, and virtuals from a unified balance.',
    },
    {
      id: 7,
      icon: RefreshCw,
      title: 'Automated Event Results & Settlement',
      description:
        'Direct connection to verified sports official data feeds enables automatic event result confirmation, ticket grading, and instant winning payouts within seconds of whistle completion.',
    },
    {
      id: 8,
      icon: Cpu,
      title: 'Decoupled Microservices & Cloud Scalability',
      description:
        'High-concurrency distributed betting engine built on high-throughput message streams, capable of evaluating millions of bet slips per hour with 99.99% platform availability.',
    },
    {
      id: 9,
      icon: Rocket,
      title: 'Case Study: Jeetfast24 Agent-Based Sportsbook',
      description:
        'See how Kvaornux engineered a high-volume PKR-based sportsbook and casino platform with multi-tier agent hierarchy, exchange-style betting, and instant ledger settlement.',
      link: '/igaming-case-studies/agent-based-casino-sportsbook-platform',
      linkText: 'Read Jeetfast24 Case Study →',
    },
    {
      id: 10,
      icon: Layers,
      title: 'Sportsbook Software vs. Turnkey Sportsbook Launch',
      description:
        'While this page covers our standalone Sportsbook Platform Software for operators with existing infrastructure, we also offer complete Turnkey Sportsbook Solutions with managed launch services.',
      link: '/turnkey-sportsbook-solutions',
      linkText: 'Explore Turnkey Sportsbook Solutions →',
    },
  ];

  const sportsbookDiscoverItems = [
    {
      id: 1,
      title: 'High-Throughput Betting Engine',
      description:
        'Sub-100ms bet slip execution supporting singles, accumulators, system wagers, and same-game parlays during peak worldwide sporting fixtures.',
      icon: Zap,
      span: 2,
    },
    {
      id: 2,
      title: 'Multi-Source Odds Feeds',
      description:
        'Live sports coverage spanning 80+ sports and 1,000+ betting markets with automated margin rules and redundant provider failover.',
      icon: TrendingUp,
      span: 2,
    },
    {
      id: 3,
      title: 'Risk & Liability Desk',
      description:
        'Real-time event liability calculation, automated sharp bettor throttling, arbitrage detection, and customized exposure caps per selection.',
      icon: ShieldCheck,
      span: 2,
    },
    {
      id: 4,
      title: 'Live Betting & Dynamic Cashout',
      description:
        'In-play match visualization centers, ball-by-ball tracking, and dynamic cashout algorithms supporting full, partial, and auto-cashout.',
      icon: Activity,
      span: 3,
    },
    {
      id: 5,
      title: 'Agent & Retail Cashier Module',
      description:
        'Hierarchical agent management with POS counter terminal software, thermal slip barcode printing, credit delegation, and commissions.',
      icon: Store,
      span: 3,
    },
    {
      id: 6,
      title: 'Omnichannel Sportsbook Wallet',
      description:
        'Single-wallet architecture allowing players to wager seamlessly across sportsbook, live casino, slots, and virtuals from one shared balance.',
      icon: Wallet,
      span: 2,
    },
    {
      id: 7,
      title: 'Jeetfast24 Case Study',
      description:
        'How Kvaornux engineered an agent-based sportsbook and casino platform managing 100+ agent tiers, high-volume betting, and real-time settlement.',
      icon: Rocket,
      link: '/igaming-case-studies/agent-based-casino-sportsbook-platform',
      span: 2,
    },
    {
      id: 8,
      title: 'Turnkey Sportsbook Solutions',
      description:
        'Looking for full turnkey bookmaker operational packaging with setup, hosting, and managed launch? Explore our Turnkey Sportsbook Solution.',
      icon: RefreshCw,
      link: '/turnkey-sportsbook-solutions',
      span: 2,
    },
  ];

  const faqs = [
    {
      question: 'What is Sportsbook Platform Software?',
      answer:
        'Sportsbook Platform Software is the underlying sports betting technology stack, encompassing high-speed bet slip validation engines, multi-source odds feed management, live in-play wagering, risk and liability controls, and back-office trading software.',
    },
    {
      question: 'What sports data feeds and odds providers are integrated into the sportsbook software?',
      answer:
        'Kvaornux integrates with industry-leading sports data feeds and odds aggregators, providing official real-time coverage for 80+ sports, 1,000+ betting markets, esports, and virtual sports with multi-provider failover and automatic margin calculation.',
    },
    {
      question: 'How does the automated risk management and trading desk protect bookmaker margins?',
      answer:
        'Our risk engine continuously calculates real-time liability exposure per event, market, and selection. It features automated max-stake throttling for sharp bettors, dynamic bet acceptance delays, arbitrage protection, and automated margin adjustments.',
    },
    {
      question: 'Does the sportsbook platform software support retail betting shops and agent networks?',
      answer:
        'Yes. The platform includes a comprehensive hierarchical agent module (Master Agent, Agent, Cashier) with physical slip barcode printing, POS cashier terminal interfaces, credit allocation, and automated multi-tier commission distribution.',
    },
    {
      question: 'How fast is live bet validation during high-intensity in-play sporting events?',
      answer:
        'In-play bet validation executes in under 100 milliseconds with configurable integrity delays, ensuring bookmakers are shielded from pitch-side latency exploitation while delivering a frictionless player experience.',
    },
    {
      question: 'What is the difference between Sportsbook Platform Software and the Turnkey Sportsbook Solution?',
      answer:
        'Sportsbook Platform Software provides the core betting engine, odds feeds, risk controls, and trading tools for operators who manage their own operation. The Turnkey Sportsbook Solution includes the software alongside full turnkey setup, delivery packaging, and operational launch assistance.',
    },
    {
      question: 'Can the sportsbook software integrate with our existing casino PAM and wallet?',
      answer:
        'Yes. Our sportsbook engine is completely modular and connects via Seamless Single-Wallet APIs, enabling players to wager across sports and casino utilizing a single shared balance without manual transfers.',
    },
    {
      question: 'Does the platform support Bet Builder and dynamic Cash-Out?',
      answer:
        'Yes. Bettors can create same-game parlays using our integrated Bet Builder algorithm. In addition, dynamic cash-out is supported across single and accumulator tickets with full, partial, and automated rule options.',
    },
    {
      question: 'How are event results and winning bets settled?',
      answer:
        'Event settlements are executed automatically upon receipt of official verified sports result feeds. Winning bet slips are graded and credited to player accounts within seconds of match conclusion.',
    },
    {
      question: 'What customization options are available for branding and UI/UX?',
      answer:
        'Our sportsbook frontends are fully customizable. Operators can adapt color schemes, layouts, odds formats (Decimal, Fractional, American, Hong Kong, Indo, Malay), default languages, and featured league highlights.',
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

  return (
    <>
      <style jsx>{`
        @keyframes from-bottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes from-top {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes imageSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes contentSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        [data-anim] {
          opacity: 0;
        }
        [data-anim='from-bottom'].visible {
          animation: from-bottom 0.6s ease-out forwards;
        }
        [data-anim='from-top'].visible {
          animation: from-top 0.6s ease-out forwards;
        }
        [data-anim='fade-in'].visible {
          animation: fade-in 0.6s ease-out forwards;
        }

        [data-anim-delay='1'].visible {
          animation-delay: 0.1s;
        }
        [data-anim-delay='2'].visible {
          animation-delay: 0.2s;
        }
        [data-anim-delay='3'].visible {
          animation-delay: 0.3s;
        }
        [data-anim-delay='4'].visible {
          animation-delay: 0.4s;
        }
        [data-anim-delay='5'].visible {
          animation-delay: 0.5s;
        }

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
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Main Title - SEO Optimized H1 */}
          <div className="text-center mb-3">
            <h1
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => {
                elementsRef.current[0] = el;
              }}
              data-anim="from-top"
            >
              Sportsbook Platform Software for Betting Operators
            </h1>
          </div>

          {/* Subtitle/Description */}
          <div className="max-w-4xl mx-auto mb-9">
            <p
              className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light"
              ref={(el) => {
                elementsRef.current[1] = el;
              }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              Empower your betting business with enterprise sportsbook platform software. High-throughput bet slip validation, multi-source live odds feeds, automated margin and liability controls, in-play match trackers, dynamic cashout, and multi-tier agent cashier operations.
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
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${
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
                        target.src =
                          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI5MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                </div>

                {/* Info Card — second on mobile, left on desktop */}
                <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-[280px] lg:h-auto">
                  <div
                    className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                    style={{
                      background:
                        'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
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
      <section id="solutions-section" className="relative bg-[#0b0b0f]">
        {/* 🔵 Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)',
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
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />

        {/* 🔥 Main Content */}
        <div className="container mx-auto px-4 pt-8 sm:pt-12 max-w-[1310px] relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16 pb-16">
            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2
                ref={(el) => {
                  solutionsElementsRef.current[0] = el;
                }}
                data-anim="from-top"
                className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Everything Operators Need in a Sportsbook Engine
              </h2>

              <p
                ref={(el) => {
                  solutionsElementsRef.current[1] = el;
                }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                A high-speed sports betting architecture engineered for volume, pricing accuracy, and risk mitigation — covering live odds feeds, in-play validation, dynamic cashout, agent cashier networks, and real-time back-office operations.
              </p>

              <div
                ref={(el) => {
                  solutionsElementsRef.current[10] = el;
                }}
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
                    Discuss Betting Specs
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
                    ref={(el) => {
                      solutionsElementsRef.current[2 + index] = el;
                    }}
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
                      {solution.link && (
                        <div className="mt-3">
                          <Link
                            href={solution.link}
                            className="text-sm font-semibold text-[#00ebaa] hover:underline inline-flex items-center gap-1"
                          >
                            {solution.linkText || 'Learn More →'}
                          </Link>
                        </div>
                      )}
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
        customItems={sportsbookDiscoverItems}
        customTitle="Explore Sportsbook Platform Capabilities"
        customSubtitle="Core betting technology, trading tools, and operational systems built for competitive sports betting operators."
      />

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
    'betting-engine': 'Sportsbook Platform Software Bet Slip Execution and Event Management Interface',
    'odds-feeds': 'Real-Time Sportsbook Odds Feeds and Margin Management Engine Interface',
    'risk-desk': 'Sportsbook Real-Time Risk Desk, Player Exposure, and Liability Analytics',
    'live-cashout': 'Live Betting In-Play Match Tracker, Bet Builder, and Dynamic Cashout Engine',
    'agent-network': 'Hierarchical Agent Management System and Retail Betting Shop Cashier Interface',
  };
  return altMap[tabId] || 'sportsbook platform software betting solution';
}
