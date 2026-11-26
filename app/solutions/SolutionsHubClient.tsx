'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';

interface SolutionCard {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  category: 'Platforms' | 'Sportsbook & Bookie' | 'Casino & Sweepstakes' | 'APIs & Engineering';
}

const ALL_SOLUTIONS: SolutionCard[] = [
  {
    id: 'turnkey-casino',
    title: 'Turnkey Casino Platform',
    description:
      'Launch a complete online casino under your own license with single-wallet PAM, 10,000+ certified games, fiat/crypto payments, KYC queues, and full back-office ownership.',
    href: '/turnkey-casino-software-solutions',
    image: '/assets/solutions/sol-01.webp',
    category: 'Platforms',
  },
  {
    id: 'white-label-casino',
    title: 'White Label Casino Solution',
    description:
      'Go to market faster with a customized branded online casino powered by Kvaornux infrastructure, pre-integrated game studios, payment rails, and turnkey admin controls.',
    href: '/white-label-casino-solutions',
    image: '/assets/solutions/sol-02.webp',
    category: 'Platforms',
  },
  {
    id: 'white-label-sportsbook',
    title: 'White Label Sportsbook Platform',
    description:
      'Launch a ready-to-operate branded sportsbook covering 80+ sports, 1,000+ markets, mobile betting apps, crypto deposits, fantasy/esports verticals, and automated risk limits.',
    href: '/white-label-sportsbook',
    image: '/assets/solutions/sol-03.webp',
    category: 'Sportsbook & Bookie',
  },
  {
    id: 'turnkey-sportsbook',
    title: 'Turnkey Sportsbook Solution',
    description:
      'Operate a standalone sportsbook and casino under your own gaming license with official odds feeds, live streaming, multi-tier agent networks, and full back-office autonomy.',
    href: '/turnkey-sportsbook-solutions',
    image: '/assets/solutions/sol-04.webp',
    category: 'Sportsbook & Bookie',
  },
  {
    id: 'sportsbook-software',
    title: 'Sportsbook Software & Platform',
    description:
      'High-concurrency sports betting software engineered with sub-140ms WebSocket live odds, Bet Builder, dynamic cashout, automated liability desk, and omnichannel PAM.',
    href: '/sportsbook-software',
    image: '/assets/solutions/sol-05.webp',
    category: 'Sportsbook & Bookie',
  },
  {
    id: 'sportsbook-api',
    title: 'Sportsbook API Integration',
    description:
      'Unify Betradar, Pinnacle, Genius Sports, horse racing, and esports feeds via normalized REST/WebSocket APIs, seamless single-wallet webhooks, or modular casino iFrame.',
    href: '/sportsbook-api-integration',
    image: '/assets/solutions/sol-06.webp',
    category: 'APIs & Engineering',
  },
  {
    id: 'bookmaker-software',
    title: 'Bookmaker & PPH Software',
    description:
      'Multi-tier bookie agent systems, automated weekly credit sheets, combined sports and casino agent panels, sharp-bettor protection, and retail shop POS thermal ticketing.',
    href: '/bookmaker-software',
    image: '/assets/solutions/sol-07.webp',
    category: 'Sportsbook & Bookie',
  },
  {
    id: 'casino-aggregator',
    title: 'Casino Game Aggregator API',
    description:
      'Connect 10,000+ slots, live dealer tables, crash games, and virtuals through one idempotent single-wallet aggregation layer with fixed-point FX accounting.',
    href: '/casino-aggregator-api-solution',
    image: '/assets/solutions/sol-08.webp',
    category: 'APIs & Engineering',
  },
  {
    id: 'online-casino-platform',
    title: 'Online Casino Platform Software',
    description:
      'Modular casino core uniting high-conversion React lobbies, VIP bonus engines, anti-fraud round alerts, multi-currency cashiers, and regulatory audit reporting.',
    href: '/online-casino-platform-software',
    image: '/assets/solutions/sol-09.webp',
    category: 'Casino & Sweepstakes',
  },
  {
    id: 'crypto-casino',
    title: 'Crypto & Web3 Casino Software',
    description:
      'Instant Bitcoin, ETH, USDT, and Solana casino operations featuring Web3 wallet logins, provably fair crash/arcade originals, and automated blockchain payouts.',
    href: '/crypto-casino-software',
    image: '/assets/solutions/sol-10.webp',
    category: 'Casino & Sweepstakes',
  },
  {
    id: 'sweepstakes-casino',
    title: 'Sweepstakes Casino Software',
    description:
      'US social and sweepstakes gaming platform with separated Gold Coin / Sweeps Coin ledgers, AMOE entry verification, prize redemption queues, and state geofencing.',
    href: '/sweepstakes-casino-software',
    image: '/assets/solutions/sol-11.webp',
    category: 'Casino & Sweepstakes',
  },
  {
    id: 'turnkey-sweepstakes',
    title: 'Turnkey Sweepstakes Casino',
    description:
      'Complete ready-to-launch turnkey sweepstakes ecosystem with pre-integrated promotional slots, card/bank prize redemptions, KYC queues, and custom branding.',
    href: '/turnkey-sweepstakes-casino-software',
    image: '/assets/solutions/sol-12.webp',
    category: 'Casino & Sweepstakes',
  },
  {
    id: 'custom-sweepstakes',
    title: 'Custom Sweepstakes Development',
    description:
      'Bespoke social casino and promotional sweepstakes architecture tailored to proprietary coin economies, viral referral mechanics, and custom UI/UX requirements.',
    href: '/custom-sweepstakes-casino-development',
    image: '/assets/solutions/sol-13.webp',
    category: 'Casino & Sweepstakes',
  },
  {
    id: 'bespoke-igaming',
    title: 'Bespoke iGaming Solutions',
    description:
      'Custom casino and sportsbook engineering built from the ground up for unique workflows, high-volume operator groups, and contractual IP/source-code ownership.',
    href: '/custom-igaming-solution',
    image: '/assets/solutions/sol-14.webp',
    category: 'Platforms',
  },
  {
    id: 'sportsbook-developer',
    title: 'Sportsbook Developer Services',
    description:
      'Build custom betting websites, WebSocket odds engines, Same-Game Bet Builders, and risk trading desks with dedicated full-stack sportsbook software developers.',
    href: '/sportsbook-developer',
    image: '/assets/solutions/sol-15.webp',
    category: 'APIs & Engineering',
  },
  {
    id: 'casino-website-developer',
    title: 'Casino Website Developer',
    description:
      'Create fast React/Next.js casino websites and mobile apps backed by 10,000+ aggregated games, custom provably fair originals, CRM/ERP tools, and fiat/crypto rails.',
    href: '/casino-website-developer',
    image: '/assets/solutions/sol-16.webp',
    category: 'APIs & Engineering',
  },
  {
    id: 'hire-igaming-developer',
    title: 'Hire iGaming Developer',
    description:
      'Scale faster by embedding senior React, Node.js, Go, API integration, and DevOps iGaming engineers directly into your codebase under strict NDA.',
    href: '/hire-igaming-developer',
    image: '/assets/solutions/sol-17.webp',
    category: 'APIs & Engineering',
  },
  {
    id: 'igaming-licensing',
    title: 'iGaming Licensing & Market Access',
    description:
      'Technical readiness and regulatory advisory across Malta (MGA), Curacao, Anjouan, Isle of Man, and Kahnawake licensing frameworks for operators.',
    href: '/igaming-licensing',
    image: '/assets/solutions/sol-18.webp',
    category: 'Platforms',
  },
];

const CATEGORIES = [
  'All',
  'Platforms',
  'Sportsbook & Bookie',
  'Casino & Sweepstakes',
  'APIs & Engineering',
] as const;

export default function SolutionsHubClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const pageRef = useRef<HTMLDivElement>(null);

  const filteredSolutions =
    selectedCategory === 'All'
      ? ALL_SOLUTIONS
      : ALL_SOLUTIONS.filter((s) => s.category === selectedCategory);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;
    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-anim]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectedCategory]);

  return (
    <div ref={pageRef} className="sol-hub-page min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        .sol-hub-hero {
          position: relative;
          padding: clamp(118px, 10vw, 150px) 0 54px;
          background: radial-gradient(71.13% 100% at 50% 0, rgba(0, 235, 170, 0.15) 0%, rgba(13, 11, 16, 0.2) 65.41%), #0b0b0f;
          text-align: center;
          overflow: hidden;
        }

        .sol-hub-heading {
          font-size: clamp(32px, 4.5vw, 56px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .sol-hub-panel {
          position: relative;
          width: 100%;
          padding: 56px 28px 92px;
          border-radius: 64px 64px 0 0;
          border: none;
          background: linear-gradient(180deg, rgba(14, 46, 41, 0.82) 0%, rgba(10, 34, 31, 0.72) 78%, rgba(9, 25, 24, 0.55) 92%, #0b0b0f 100%);
        }

        .sol-hub-container {
          max-width: 1320px;
          margin: 0 auto;
        }

        .solution-card {
          color: #ffffff;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          border: none;
          outline: none;
          height: 100%;
        }

        .solution-card-img {
          height: 196px;
          padding: 0 28px;
          z-index: 2;
          margin-bottom: -162px;
          position: relative;
          overflow: visible;
          pointer-events: none;
        }

        .solution-card-img img {
          object-fit: contain;
          width: 100%;
          height: 100%;
          display: block;
        }

        .solution-card-inner {
          flex-direction: column;
          flex-grow: 1;
          padding: 102px 18px 18px;
          display: flex;
          position: relative;
        }

        .solution-card-inner::before {
          content: "";
          z-index: 1;
          background: linear-gradient(143deg, rgba(4, 16, 17, 0.88) 52.5%, rgba(11, 52, 46, 0.72) 93.02%);
          border: none;
          border-radius: 24px;
          width: 100%;
          height: 100%;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }

        .solution-card-content {
          -webkit-backdrop-filter: blur(44px);
          backdrop-filter: blur(44px);
          z-index: 3;
          background: rgba(255, 255, 255, 0.08);
          border: none;
          box-shadow: none;
          border-radius: 20px;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding: 22px;
          display: flex;
          position: relative;
        }

        .solution-card-title {
          color: #ffffff;
          font-size: clamp(21px, 1.75vw, 26px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.015em;
          margin: 0;
        }

        .solution-card-text {
          color: rgba(255, 255, 255, 0.72);
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .sol-filter-pill {
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 13.5px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: rgba(255, 255, 255, 0.08);
          color: #c5e3df;
        }

        .sol-filter-pill.active {
          background: radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%);
          color: #04160f;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .sol-hub-panel {
            padding: 32px 16px 56px;
            border-radius: 36px 36px 0 0;
          }

          .solution-card-img {
            height: 176px;
            padding: 0 20px;
            margin-bottom: -144px;
          }

          .solution-card-inner {
            padding: 90px 14px 14px;
          }
        }

        @keyframes sol-from-bottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sol-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .sol-hub-page [data-anim] { opacity: 0; }
        .sol-hub-page [data-anim="from-bottom"].visible { animation: sol-from-bottom 0.6s ease-out forwards; }
        .sol-hub-page [data-anim="fade-in"].visible { animation: sol-fade-in 0.6s ease-out forwards; }
        .sol-hub-page [data-anim-delay="1"].visible { animation-delay: 0.08s; }
        .sol-hub-page [data-anim-delay="2"].visible { animation-delay: 0.16s; }
        .sol-hub-page [data-anim-delay="3"].visible { animation-delay: 0.24s; }
      `}</style>

      {/* Top Hero Header */}
      <section className="sol-hub-hero px-4">
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
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 data-anim="from-bottom" className="sol-hub-heading">Kvaornux Solutions</h1>
          <p data-anim="from-bottom" data-anim-delay="1" className="text-sm sm:text-base md:text-lg text-[#a5a5a5] max-w-2xl mx-auto leading-relaxed font-light">
            Explore our complete suite of turnkey iGaming platforms, white-label launches, sportsbook &amp; bookmaker
            software, game aggregator APIs, crypto &amp; sweepstakes ecosystems, and dedicated engineering teams.
          </p>
        </div>
      </section>

      {/* All Solutions Showcase Panel */}
      <section className="w-full pb-8">
        <div className="sol-hub-panel">
          <div className="sol-hub-container">
            <div data-anim="from-bottom" className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                All solutions
              </h2>

              {/* Borderless Category Filter */}
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`sol-filter-pill ${selectedCategory === category ? 'active' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* 3-Column Layered Cards Grid (zero borders, zero hover effects) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
              {filteredSolutions.map((solution, index) => (
                <Link
                  key={solution.id}
                  href={solution.href}
                  data-anim="fade-in"
                  data-anim-delay={String((index % 3) + 1)}
                  className="solution-card"
                >
                  <div className="solution-card-img" aria-hidden="true">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      width={730}
                      height={492}
                      loading="lazy"
                    />
                  </div>

                  <div className="solution-card-inner">
                    <div className="solution-card-content">
                      <h3 className="solution-card-title">{solution.title}</h3>
                      <p className="solution-card-text">{solution.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unlock New Opportunities + Contact Form */}
      <OpportunitiesSection />
      <section id="contact-us" className="py-12 bg-[#0b0b0f] relative z-10">
        <ContactForm />
      </section>
    </div>
  );
}
