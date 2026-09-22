'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Coins,
  ShieldCheck,
  Zap,
  Wallet,
  Globe,
  Lock,
  BarChart3,
  HandshakeIcon,
  Gamepad2,
  Cpu
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';

export default function CryptoIgamingClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Multi-Currency Crypto Wallets');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

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

  const tabs = [
    {
      id: 'crypto-wallets',
      label: 'Multi-Currency Crypto Wallets',
      icon: Wallet,
      title: 'Multi-Currency Crypto Wallets',
      description: 'Support native deposits and withdrawals across major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, USDC, Solana (SOL), and TRON (TRX). Non-custodial and API wallet gateway integrations with automated transaction confirmations.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp',
      alt: 'Crypto iGaming Wallet Integration & Security'
    },
    {
      id: 'web3-integration',
      label: 'Web3 & Decentralized Payments',
      icon: Coins,
      title: 'Web3 & Decentralized Payments',
      description: 'Enable instant wallet connections via MetaMask, WalletConnect, and Phantom. Facilitate direct Web3 gaming payments with low latency, automated gas management, and seamless player onboarding.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp',
      alt: 'Web3 Gaming & Decentralized Wallet Payments'
    },
    {
      id: 'provably-fair',
      label: 'Provably Fair Gaming Content',
      icon: Cpu,
      title: 'Provably Fair Gaming Content',
      description: 'Offer cryptographic provably fair games where players can independently verify game outcomes. Integrated crash games, dice, plinko, and custom crypto-native titles alongside 20,000+ traditional casino games.',
      image: '/assets/features/casino-game-providers-api-aggregator.webp',
      alt: 'Provably Fair Gaming Content & Crypto Slots'
    },
    {
      id: 'fast-payouts',
      label: 'Instant Automated Withdrawals',
      icon: Zap,
      title: 'Instant Automated Withdrawals',
      description: 'Accelerate player payouts with automated crypto processing rules, threshold alerts, multi-sig hot wallet security, and zero manual delay for verified players.',
      image: '/assets/features/turnkey-igaming-platform-infrastructure-services.webp',
      alt: 'Instant Automated Crypto Withdrawals & Infrastructure'
    },
  ];

  const features = [
    {
      id: 1,
      icon: Coins,
      title: 'Bitcoin & Altcoin Support',
      description: 'Accept major cryptocurrencies and stablecoins (BTC, ETH, USDT, USDC, SOL, TRX, LTC) with automated rate conversion and balance tracking.'
    },
    {
      id: 2,
      icon: Wallet,
      title: 'Direct Web3 Wallet Connect',
      description: 'One-click player login and payment authorization using Web3 wallets like MetaMask, Trust Wallet, Phantom, and Coinbase Wallet.'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Crypto Security & Anti-Fraud',
      description: 'Multi-layer security architecture featuring hot/cold wallet isolation, automated transaction limits, address screening, and AML transaction monitoring.'
    },
    {
      id: 4,
      icon: Gamepad2,
      title: 'Crypto Game Aggregator API',
      description: 'Unified integration providing access to crypto-native crash games, slots, live casino tables, and sportsbook markets in a single API.'
    },
    {
      id: 5,
      icon: BarChart3,
      title: 'Real-Time Financial Back Office',
      description: 'Comprehensive administrative dashboard to monitor deposits, withdrawals, player wallet balances, conversion rates, and profit reporting.'
    },
    {
      id: 6,
      icon: Globe,
      title: 'Global Market Scalability',
      description: 'Deploy borderless crypto gaming platforms with multi-language support, regional geo-routing, and high-throughput blockchain node infrastructure.'
    },
  ];

  const activeTabData = tabs.find((t) => t.label === activeTab);

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

        [data-anim] { opacity: 0; }
        [data-anim="from-bottom"].visible { animation: from-bottom 0.6s ease-out forwards; }
        [data-anim="from-top"].visible { animation: from-top 0.6s ease-out forwards; }
        [data-anim="fade-in"].visible { animation: fade-in 0.6s ease-out forwards; }

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
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-[#00ebaa]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00ebaa] border border-[#00ebaa]/20">
            Crypto &amp; Web3 iGaming Software
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4"
            ref={(el) => { elementsRef.current[0] = el; }}
            data-anim="from-top"
          >
            Crypto iGaming Solutions
          </h1>
          <p
            className="max-w-4xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-light"
            ref={(el) => { elementsRef.current[1] = el; }}
            data-anim="from-bottom"
          >
            Launch scalable crypto casino and sportsbook platforms with multi-currency Web3 wallets, instant deposits, provably fair games, API integrations, and complete back-office operational control.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto pb-4 mb-10 scrollbar-hide flex justify-start sm:justify-center"
          >
            <div className="flex gap-2 flex-nowrap">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.label)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.label
                        ? 'bg-[#00ebaa] text-black border-2 border-[#00ebaa]'
                        : 'bg-gray-800/70 text-white/70 border-2 border-transparent hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {activeTabData && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#00ebaa]/20 shadow-2xl">
                  <img
                    src={activeTabData.image}
                    alt={activeTabData.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-2 order-2 lg:order-1 p-8 rounded-2xl bg-[#0a141a] border border-[#00ebaa]/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {activeTabData.title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed font-light">
                  {activeTabData.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Grid Features */}
      <section className="relative bg-[#0b0b0f] py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Crypto iGaming Feature Suite
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything required to launch, manage, and scale a high-performance crypto casino and sports betting platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const IconComp = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="p-6 rounded-2xl bg-[#0a141a] border border-[#00ebaa]/20 hover:border-[#00ebaa]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00ebaa]/15 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 text-[#00ebaa]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center rounded-full bg-[#00ebaa] px-8 py-3.5 text-base font-bold text-black transition-all hover:bg-[#00ebaa]/90"
            >
              Launch Crypto iGaming Platform
            </button>
          </div>
        </div>
      </section>

      <OpportunitiesSection />
      <ContactForm />
    </>
  );
}
