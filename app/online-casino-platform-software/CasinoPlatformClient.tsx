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
  CreditCard
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import FAQSection from '@/src/components/FAQSection/FAQSection';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';

export default function CasinoPlatformClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Player Account Management');
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
    users: Users,
    wallet: Wallet,
    'gamepad-2': Gamepad2,
    sparkles: Sparkles,
    'layout-dashboard': LayoutDashboard,
  };

  const tabs = [
    {
      id: 'pam-engine',
      label: 'Player Account Management',
      icon: 'users' as const,
      title: 'Scalable Player Account Management (PAM) Engine',
      description:
        'A resilient, multi-jurisdiction player engine that centralizes player lifecycle management. Handles frictionless registration, multi-factor authentication (2FA/biometrics), player segmentation, KYC/AML verification workflows, and responsible gaming limits with complete real-time auditability.',
      image: '/assets/features/tab-casino-platform-2.webp',
    },
    {
      id: 'wallet-engine',
      label: 'Multi-Currency Wallet Engine',
      icon: 'wallet' as const,
      title: 'High-Throughput Multi-Currency Wallet (Seamless & Transfer API)',
      description:
        'Engineered to handle millions of transactions per day with sub-50ms latency. The Kvaornux wallet engine supports dual operating modes: Seamless Single-Wallet for operators with existing ledgers and Transfer Wallet with real-time balance sync across fiat and cryptocurrencies.',
      image: '/assets/features/igaming-financial-reconciliation-auto-invoices.webp',
    },
    {
      id: 'game-aggregation',
      label: '20,000+ Game Aggregation',
      icon: 'gamepad-2' as const,
      title: 'Unified Content Gateway with 20,000+ Certified Casino Titles',
      description:
        'A single normalized API that integrates over 20,000 games from 150+ world-class studios. Operators can deploy slots, live casino streams, roulette, blackjack, crash games, and fast games with centralized RTP control and automatic catalog updates.',
      image: '/assets/features/casino-game-providers-api-aggregator.webp',
    },
    {
      id: 'bonus-studio',
      label: 'Dynamic Bonus & Gamification',
      icon: 'sparkles' as const,
      title: 'Rule-Based Bonus Engine, Tournaments & Loyalty Studio',
      description:
        'Drive retention and lifetime player value with an automated promotion studio. Configure deposit matches, free spins, cashback multipliers, network tournaments, and gamified multi-tier VIP loyalty clubs with automated wagering requirements calculation.',
      image: '/assets/features/casino-promotions-jackpots-tournaments-free-spins.webp',
    },
    {
      id: 'backoffice-analytics',
      label: 'Back Office & Risk Controls',
      icon: 'layout-dashboard' as const,
      title: 'Real-Time Back Office, Analytics & Risk Control Center',
      description:
        'Complete command and control over every platform dimension. Multi-tenant admin dashboard with granular Role-Based Access Control (RBAC), live GGR/NGR reporting, player risk scoring, flagged round resolution, and automated regulatory reporting.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
    },
  ];

  const solutions = [
    {
      id: 1,
      icon: Users,
      title: 'Modular Player Account Management (PAM)',
      description:
        'Unified 360-degree player profiles with sub-second session tracking, tiered KYC verification hooks, responsible gaming deposit caps, and real-time transactional audit histories.',
    },
    {
      id: 2,
      icon: Wallet,
      title: 'High-Throughput Wallet Architecture (Seamless & Transfer)',
      description:
        'Sub-50ms transaction processing for high-volume game rounds. Simultaneous support for fiat and cryptocurrency balances, idempotent transaction handling, and automated ledger reconciliation.',
    },
    {
      id: 3,
      icon: Gamepad2,
      title: '20,000+ Game Aggregation Gateway',
      description:
        'One API connection grants immediate access to 150+ top game providers with tokenized game launches, normalized metadata, RTP controls, and zero-downtime game catalog synchronization.',
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'Dynamic Bonus Studio & Gamification Engine',
      description:
        'Real-time wagering calculation engine across all active game types, automated free spin distributions, dynamic tournaments with live leaderboards, and tier-based VIP loyalty progression.',
    },
    {
      id: 5,
      icon: ShieldCheck,
      title: 'Enterprise Risk & Anti-Fraud Suite',
      description:
        'Machine learning algorithms continuously inspect transaction patterns, detecting bonus abuse, arbitrage, multi-accounting, VPN spoofing, and automated bot networks in real time.',
    },
    {
      id: 6,
      icon: LayoutDashboard,
      title: 'Real-Time Operator Back Office Command Center',
      description:
        'Multi-tenant architecture with customizable operator roles and permissions (RBAC), problem-round resolvers, live GGR/NGR margin analytics, and jurisdiction-based game toggling.',
    },
    {
      id: 7,
      icon: RefreshCw,
      title: 'Decoupled Microservices & Headless APIs',
      description:
        'Expose all platform capabilities via REST and WebSocket endpoints. Build bespoke web and mobile frontends (React, Next.js, Flutter, iOS/Android) or leverage our pre-built high-converting UI.',
    },
    {
      id: 8,
      icon: Cpu,
      title: 'High-Availability Infrastructure & 99.99% SLA',
      description:
        'Cloud-native containerized architecture (Docker/Kubernetes) deployable on AWS, GCP, or private clouds with multi-region failover, automated backups, and guaranteed platform uptime.',
    },
    {
      id: 9,
      icon: Rocket,
      title: 'Case Study: Lakebets Mobile-First Casino Platform',
      description:
        'See how Kvaornux engineered a scalable mobile-first casino platform with 15,000+ daily players, multi-provider aggregation, NGN wallet infrastructure, and sub-second bet settlement.',
      link: '/igaming-case-studies/casino-platform-development',
      linkText: 'Read Lakebets Case Study →',
    },
    {
      id: 10,
      icon: Layers,
      title: 'Platform Software vs. Turnkey Casino Launch',
      description:
        'While this page covers our standalone Casino Platform Software for licensed operators, we also offer an all-in-one Turnkey Casino Solution with complete setup, hosting, and launch delivery.',
      link: '/turnkey-casino-software-solutions',
      linkText: 'Explore Turnkey Casino Solutions →',
    },
    {
      id: 11,
      icon: CreditCard,
      title: 'Promotional Sweepstakes & Dual-Currency Models',
      description:
        'Evaluating promotional social gaming? Understand how dual-currency Gold Coin and Sweeps Coin ledgers, AMOE compliance, and prize redemption workflows differ from real-money platforms in our operator guide.',
      link: '/blog/what-is-sweepstakes-casino-software',
      linkText: 'Read Sweepstakes Software Guide →',
    },
  ];

  const casinoDiscoverItems = [
    {
      id: 1,
      title: 'Player Account Management',
      description:
        'Centralized player engine handling registrations, 2FA authentication, KYC/AML verification, responsible gaming limits, and player session lifecycle.',
      icon: Users,
      span: 2,
    },
    {
      id: 2,
      title: 'Multi-Currency Wallet',
      description:
        'Real-time transactional ledger supporting simultaneous fiat and cryptocurrency balances with Seamless REST callbacks and Transfer Wallet modes.',
      icon: Wallet,
      span: 2,
    },
    {
      id: 3,
      title: '20,000+ Games Aggregation',
      description:
        'Single API gateway providing instant access to 150+ world-class studios, spanning slots, live dealer tables, crash games, and fast games.',
      icon: Gamepad2,
      link: '/casino-aggregator-api-solution',
      span: 2,
    },
    {
      id: 4,
      title: 'Bonus & Gamification Studio',
      description:
        'Configure deposit bonuses, free spins, cashback, wagering multipliers, network tournaments, and gamified multi-tier VIP progression.',
      icon: Sparkles,
      span: 3,
    },
    {
      id: 5,
      title: 'Risk & Anti-Fraud Engine',
      description:
        'Real-time behavioral monitoring detecting multi-accounting, bonus abuse, syndicate activity, and device spoofing with automated review queues.',
      icon: ShieldCheck,
      span: 3,
    },
    {
      id: 6,
      title: 'Real-Time Back Office',
      description:
        'Complete command and control over player activity, live GGR/NGR reporting, problem round resolvers, and granular staff role permissions.',
      icon: LayoutDashboard,
      span: 2,
    },
    {
      id: 7,
      title: 'Lakebets Case Study',
      description:
        'How Kvaornux engineered a high-concurrency mobile casino platform with custom PAM, multi-provider aggregation, and sub-40ms settlement.',
      icon: Rocket,
      link: '/igaming-case-studies/casino-platform-development',
      span: 2,
    },
    {
      id: 8,
      title: 'Turnkey Casino Solutions',
      description:
        'Looking for full turnkey operational launch packaging with setup, hosting, and licensing support? Explore our Turnkey Casino Solution.',
      icon: RefreshCw,
      link: '/turnkey-casino-software-solutions',
      span: 2,
    },
  ];

  const faqs = [
    {
      question: 'What is Online Casino Platform Software?',
      answer:
        'Online Casino Platform Software is the underlying software engine, Player Account Management (PAM), multi-currency wallet APIs, game aggregation gateway, bonus studio, and operator back-office suite that powers an iGaming brand.',
    },
    {
      question: 'What wallet integration models does the Kvaornux casino platform software support?',
      answer:
        'We support two core architectures: (1) Seamless Single-Wallet, where our casino engine communicates directly with your existing core banking/PAM ledger via sub-50ms REST or WebSocket callbacks for debits, credits, and rollbacks; and (2) Transfer Wallet mode, where players transfer funds into an integrated gaming wallet with automated reconciliation back to the core ledger.',
    },
    {
      question: 'Can we build a custom frontend on top of your casino platform software?',
      answer:
        'Yes. Kvaornux is strictly API-first and headless. All gaming lobbies, game launch endpoints, player authentication, wallets, bonuses, and account features are available through clean REST and WebSocket APIs. You can build your own proprietary frontend in Next.js, React, React Native, or Flutter, or use our customizable white-label frontend templates.',
    },
    {
      question: 'How does the platform handle peak concurrency and high transaction volume?',
      answer:
        'Our platform relies on a distributed microservices architecture decoupled by asynchronous message brokers and in-memory Redis clustering. Even during mega jackpots or synchronized tournament drops, the platform handles tens of thousands of concurrent spins per second without latency degradation.',
    },
    {
      question: 'What game content is integrated into the casino platform software?',
      answer:
        'The platform connects with over 20,000 certified casino titles from 150+ world-class studios, spanning online slots, live dealer tables, roulette, blackjack, baccarat, crash games, fishing, and fast games via a single normalized aggregator gateway.',
    },
    {
      question: 'What is the difference between Casino Platform Software and the Turnkey Casino Solution?',
      answer:
        'Online Casino Platform Software is the underlying software engine, PAM, wallet APIs, and back-office software licensed to operators who manage their own infrastructure, corporate entity, or licensing. The Turnkey Casino Solution, by contrast, is a complete business delivery model that packages the platform software with turnkey setup, hosting, payment configurations, and launch services.',
    },
    {
      question: 'How are game provider integrations and catalog updates handled?',
      answer:
        'Through our unified aggregator gateway, you connect once and gain access to over 20,000 certified titles from 150+ providers. New game releases, RTP updates, and provider engine maintenance occur automatically upstream without requiring any software patches or downtime on your production environment.',
    },
    {
      question: 'What security and anti-fraud protections are built into the back office?',
      answer:
        'The platform includes machine learning fraud detection that monitors transaction velocity, duplicate account clusters, device fingerprints, and suspicious betting patterns. Staff permissions are strictly controlled via Role-Based Access Control (RBAC) with detailed audit logging.',
    },
    {
      question: 'Can we configure multi-currency and crypto payments?',
      answer:
        'Yes. The platform supports native multi-currency operations allowing players to maintain balances in local fiat currencies as well as major cryptocurrencies (USDT, BTC, ETH) with real-time exchange rate calculation and segregated ledgers.',
    },
    {
      question: 'How long does platform software integration take?',
      answer:
        'Integration timelines depend on whether you are connecting via our headless REST APIs to an existing frontend or deploying our complete ready-to-run platform. Typically, API sandboxes are provisioned within days, allowing integration within 2 to 4 weeks.',
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
              Online Casino Platform Software for iGaming Operators
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
              Scale your iGaming business with an enterprise online casino platform software engine. Modular Player Account Management (PAM), high-speed multi-currency wallet APIs, 20,000+ certified games aggregation, automated bonus mechanics, and real-time operator back-office administration.
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
                Everything Operators Need in a Modern Casino Platform
              </h2>

              <p
                ref={(el) => {
                  solutionsElementsRef.current[1] = el;
                }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                A complete modular software architecture designed for scalable iGaming operations — covering player lifecycle management, high-throughput wallet connectivity, multi-provider game aggregation, automated promotional mechanics, and real-time back-office controls.
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
                    Discuss Platform Specs
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
        customItems={casinoDiscoverItems}
        customTitle="Explore Casino Platform Capabilities"
        customSubtitle="Core technology modules, integration APIs, and operational capabilities built for high-scale online casino operators."
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
    'pam-engine': 'Player Account Management PAM Engine Dashboard and Player Identity Management',
    'wallet-engine': 'Multi-Currency Wallet Architecture Seamless and Transfer API Ledger System',
    'game-aggregation': 'Online Casino Game Aggregator Single API Gateway with 20,000+ Games',
    'bonus-studio': 'Dynamic Casino Bonus Engine, Wagering Requirements, Tournaments and Free Spins',
    'backoffice-analytics': 'Turnkey Casino Back Office Admin Dashboard and Real-Time Risk Analytics',
  };
  return altMap[tabId] || 'online casino platform software solution';
}
