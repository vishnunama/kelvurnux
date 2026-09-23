'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Wallet, 
  Coins, 
  Cpu, 
  Zap, 
  LayoutDashboard,
  ShieldCheck, 
  Gamepad2, 
  BarChart3, 
  Globe, 
  HandshakeIcon 
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';

export default function CryptoIgamingClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Multi-Currency Crypto Wallets');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const solutionsElementsRef = useRef<(HTMLElement | null)[]>([]);

  // Contact form scroll handler
  const handleScrollToContact = () => {
    const section = document.getElementById('contact-form-section');
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

  const iconMap = {
    wallet: Wallet,
    coins: Coins,
    cpu: Cpu,
    zap: Zap,
    'layout-dashboard': LayoutDashboard,
  };

  const tabs = [
    {
      id: 'crypto-wallets',
      label: 'Multi-Currency Crypto Wallets',
      icon: 'wallet' as const,
      title: 'Multi-Currency Crypto Wallets',
      description:
        'Support native deposits and withdrawals across major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, USDC, Solana (SOL), and TRON (TRX). Non-custodial and API wallet gateway integrations with automated transaction confirmations.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp',
      alt: 'Crypto iGaming Wallet Integration & Security'
    },
    {
      id: 'web3-integration',
      label: 'Web3 & Decentralized Payments',
      icon: 'coins' as const,
      title: 'Web3 & Decentralized Payments',
      description:
        'Enable instant wallet connections via MetaMask, WalletConnect, and Phantom. Facilitate direct Web3 gaming payments with low latency, automated gas management, and seamless player onboarding.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp',
      alt: 'Web3 Gaming & Decentralized Wallet Payments'
    },
    {
      id: 'provably-fair',
      label: 'Provably Fair Gaming Content',
      icon: 'cpu' as const,
      title: 'Provably Fair Gaming Content',
      description:
        'Offer cryptographic provably fair games where players can independently verify game outcomes. Integrated crash games, dice, plinko, and custom crypto-native titles alongside 20,000+ traditional casino games.',
      image: '/assets/features/casino-game-providers-api-aggregator.webp',
      alt: 'Provably Fair Gaming Content & Crypto Slots'
    },
    {
      id: 'fast-payouts',
      label: 'Instant Automated Withdrawals',
      icon: 'zap' as const,
      title: 'Instant Automated Withdrawals',
      description:
        'Accelerate player payouts with automated crypto processing rules, threshold alerts, multi-sig hot wallet security, and zero manual delay for verified players.',
      image: '/assets/features/turnkey-igaming-platform-infrastructure-services.webp',
      alt: 'Instant Automated Crypto Withdrawals & Infrastructure'
    },
    {
      id: 'crypto-backoffice',
      label: 'Crypto Back Office & Analytics',
      icon: 'layout-dashboard' as const,
      title: 'Crypto Back Office & Analytics',
      description:
        'Real-time administrative control of deposits, withdrawals, exchange rate conversions, player wallet activity, and comprehensive crypto financial reporting.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      alt: 'Crypto iGaming Back Office Dashboard & Real-Time Analytics'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Coins,
      title: 'Bitcoin & Altcoin Support',
      description:
        'Accept major cryptocurrencies and stablecoins (BTC, ETH, USDT, USDC, SOL, TRX, LTC) with automated rate conversion and balance tracking.'
    },
    {
      id: 2,
      icon: Wallet,
      title: 'Direct Web3 Wallet Connect',
      description:
        'One-click player login and payment authorization using Web3 wallets like MetaMask, Trust Wallet, Phantom, and Coinbase Wallet.'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Crypto Security & Anti-Fraud',
      description:
        'Multi-layer security architecture featuring hot/cold wallet isolation, automated transaction limits, address screening, and AML transaction monitoring.'
    },
    {
      id: 4,
      icon: Gamepad2,
      title: 'Crypto Game Aggregator API',
      description:
        'Unified integration providing access to crypto-native crash games, slots, live casino tables, and sportsbook markets in a single API.'
    },
    {
      id: 5,
      icon: BarChart3,
      title: 'Real-Time Financial Back Office',
      description:
        'Comprehensive administrative dashboard to monitor deposits, withdrawals, player wallet balances, conversion rates, and profit reporting.'
    },
    {
      id: 6,
      icon: Globe,
      title: 'Global Market Scalability',
      description:
        'Deploy borderless crypto gaming platforms with multi-language support, regional geo-routing, and high-throughput blockchain node infrastructure.'
    },
    {
      id: 7,
      icon: HandshakeIcon,
      title: 'Full Technical Support',
      description:
        'Dedicated onboarding, 24/7 technical monitoring, infrastructure support, and continuous protocol updates for your crypto platform.'
    }
  ];

  const activeTabData = tabs.find(tab => tab.label === activeTab);

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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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
          
          {/* Main Title */}
          <div className="text-center mb-3">
            <h1 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Crypto iGaming Solutions
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
              Launch scalable crypto casino and sportsbook platforms with multi-currency Web3 wallets, instant deposits, provably fair games, API integrations, and complete back-office operational control.
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
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUsIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg=='
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

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16 pb-16 ">

            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2 
                ref={(el) => { solutionsElementsRef.current[0] = el; }}
                data-anim="from-top"
                className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Complete Crypto iGaming Package
              </h2>

              <p 
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Everything required to launch, manage, and scale a high-performance crypto casino and sports betting platform — integrated and ready to deploy.
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
                    Choose this solution
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

      {/* Opportunities Section */}
      <OpportunitiesSection />
      <ContactForm />
    </>
  );
}
