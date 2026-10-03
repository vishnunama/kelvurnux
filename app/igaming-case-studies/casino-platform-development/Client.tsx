'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink,
  ShieldCheck,
  Gamepad2,
  Wallet,
  Smartphone,
  Layers,
  Users,
  Gift,
  Server,
  Zap,
  CheckCircle2,
  Lock,
  RefreshCw,
  Sliders,
  TrendingUp,
  BarChart3,
  Cpu,
  Database,
  Globe,
  ArrowRight,
  Maximize2,
  X,
  CreditCard,
  Building2,
  ChevronRight,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';

export default function CasinoPlatformCaseStudyClient() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'backoffice'>('architecture');
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const handleScrollToContact = () => {
    const section = document.getElementById('contact-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryImages = [
    {
      src: '/assets/case-studies/lakebets/game-lobby.jpg',
      alt: 'Lakebets casino provider and game catalogue interface',
      caption: 'Main Game Lobby & Multi-Provider Filtering Interface',
      category: 'Desktop Platform',
    },
    {
      src: '/assets/case-studies/lakebets/hero-desktop.jpg',
      alt: 'Lakebets mobile-first casino platform game lobby',
      caption: 'Lakebets Player Dashboard & Account Overview',
      category: 'Desktop Platform',
    },
    {
      src: '/assets/case-studies/lakebets/mobile-home.png',
      alt: 'Lakebets mobile casino interface',
      caption: 'Mobile-First H5 Home Screen & Responsive Navigation',
      category: 'Mobile H5',
    },
    {
      src: '/assets/case-studies/lakebets/mobile-lobby.png',
      alt: 'Lakebets NGN wallet and payment interface',
      caption: 'Mobile Game Catalogue & Instant Category Search',
      category: 'Mobile H5',
    },
    {
      src: '/assets/case-studies/lakebets/mobile-login.jpg',
      alt: 'Lakebets mobile account interface',
      caption: 'Mobile Account Registration & NGN Deposit Flow',
      category: 'Mobile H5',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen selection:bg-[#00ebaa] selection:text-black">
      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#111] border border-[#00ebaa]/30 rounded-2xl overflow-hidden p-2 md:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 text-white hover:text-[#00ebaa] p-2 rounded-full transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[65vh] md:h-[75vh] flex items-center justify-center bg-black/40 rounded-xl overflow-hidden">
              <Image
                src={activeLightboxImage.src}
                alt={activeLightboxImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-sm text-gray-300 border-t border-white/10 mt-2">
              <p className="font-semibold text-white">{activeLightboxImage.caption}</p>
              <span className="text-xs text-[#00ebaa] bg-[#00ebaa]/10 px-3 py-1 rounded-full border border-[#00ebaa]/20 font-mono">
                {activeLightboxImage.alt}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/10 bg-gradient-to-b from-black via-[#0d0f12] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#00ebaa]/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00ebaa]/10 border border-[#00ebaa]/30 text-[#00ebaa] text-xs sm:text-sm font-mono font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,235,170,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#00ebaa] animate-pulse" />
              CASINO PLATFORM DEVELOPMENT
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Building a Scalable <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#00ebaa]">
                Mobile-First Casino Platform
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-normal max-w-3xl mb-10">
              Lakebets is a mobile-first casino platform developed for the Nigerian market, bringing
              game aggregation, NGN wallet infrastructure, payments, affiliate operations, player
              engagement and back-office management into one connected technology stack.
            </p>

            {/* Project Facts Compact Layout */}
            <div className="w-full bg-[#111419]/90 border border-[#00ebaa]/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 text-left">
                <div className="border-l-2 border-[#00ebaa]/40 pl-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Client
                  </span>
                  <span className="font-bold text-white text-base">Lakebets</span>
                </div>
                <div className="border-l-2 border-[#00ebaa]/40 pl-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Market
                  </span>
                  <span className="font-bold text-white text-base">Nigeria</span>
                </div>
                <div className="border-l-2 border-[#00ebaa]/40 pl-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Solution
                  </span>
                  <span className="font-bold text-white text-base">Custom Platform</span>
                </div>
                <div className="border-l-2 border-[#00ebaa]/40 pl-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Platform
                  </span>
                  <span className="font-bold text-white text-base">Mobile H5 Web</span>
                </div>
                <div className="border-l-2 border-[#00ebaa]/40 pl-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Currency
                  </span>
                  <span className="font-bold text-[#00ebaa] text-base">NGN</span>
                </div>
                <div className="border-l-2 border-[#00ebaa]/40 pl-3">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Started
                  </span>
                  <span className="font-bold text-white text-base">Jan 2026</span>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3 col-span-2 sm:col-span-1">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
                    Status
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-400 text-base">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>
              </div>
            </div>

            {/* Tasteful External CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://lakebets.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-[#00ebaa]/20 text-white hover:text-[#00ebaa] font-semibold text-sm border border-white/15 hover:border-[#00ebaa]/50 transition-all duration-200 group"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#00ebaa] transition-colors" />
              </a>

              <button
                onClick={handleScrollToContact}
                className="btn-main inline-flex items-center gap-2 text-sm font-bold"
              >
                <span>Build Similar Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* HERO VISUAL - Premium Browser Framing */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-[#00ebaa]/30 bg-[#121418] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,235,170,0.15)] group">
              {/* Browser Bar */}
              <div className="bg-[#1a1d24] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="bg-black/50 text-gray-400 text-xs px-4 py-1.5 rounded-md font-mono flex items-center gap-2 border border-white/5 max-w-md w-full justify-center">
                  <Lock className="w-3 h-3 text-[#00ebaa]" />
                  <span>https://lakebets.com</span>
                </div>
                <div className="text-xs text-gray-500 font-mono hidden sm:block">H5 Web App</div>
              </div>

              {/* LCP Main Desktop Image */}
              <div className="relative w-full aspect-[16/10] bg-black/40">
                <Image
                  src="/assets/case-studies/lakebets/hero-desktop.jpg"
                  alt="Lakebets mobile-first casino platform game lobby"
                  width={1440}
                  height={900}
                  priority
                  className="w-full h-full object-cover object-top"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>

              {/* Hover overlay hint */}
              <button
                onClick={() =>
                  setActiveLightboxImage({
                    src: '/assets/case-studies/lakebets/hero-desktop.jpg',
                    alt: 'Lakebets mobile-first casino platform game lobby',
                    caption: 'Lakebets Mobile-First Casino Platform Desktop Interface',
                  })
                }
                className="absolute bottom-4 right-4 bg-black/80 hover:bg-[#00ebaa] hover:text-black text-white text-xs px-3.5 py-2 rounded-lg border border-white/20 flex items-center gap-1.5 transition-all shadow-lg font-medium"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Expand Image</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 — PROJECT OVERVIEW
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0c0e12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
                PROJECT OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                A Casino Platform Built for Mobile-First Operations
              </h2>
              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  The project required more than a player-facing casino interface. Lakebets needed a
                  connected platform capable of handling game content, player accounts, real-time
                  balances, deposits and withdrawals, affiliate operations, promotions and day-to-day
                  administrative control from a unified technology environment.
                </p>
                <p>
                  The platform was developed around a decoupled architecture with a dedicated
                  player frontend, separate administrative back office and a Node.js backend
                  responsible for wallet operations, game integrations, payments, real-time events and
                  operational workflows.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#14171f] border border-[#00ebaa]/25 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-4">
                  <Layers className="w-5 h-5 text-[#00ebaa]" />
                  <span>Platform Scope at a Glance</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    'Decoupled H5 Mobile-First Frontend',
                    'Node.js Multi-Core Clustering API Backend',
                    'PostgreSQL Transactional Relational Storage',
                    'Redis Query Caching & Session Store',
                    'Socket.io Real-Time Balance Synchronization',
                    '5 Active Game Aggregator Integrations',
                    'Multi-Level 6-Tier Affiliate Engine',
                    'Dedicated React Administrative Back Office',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#00ebaa] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — THE CHALLENGE
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              THE CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Connecting Games, Money and Operations in One Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                title: 'Multi-Provider Game Integration',
                desc: 'Connect different game APIs and callback structures while maintaining one consistent player experience.',
                icon: Gamepad2,
              },
              {
                num: '02',
                title: 'Transaction Integrity',
                desc: 'Keep player balances synchronized across deposits, withdrawals, bets, wins and provider callbacks.',
                icon: Wallet,
              },
              {
                num: '03',
                title: 'Mobile-First Experience',
                desc: 'Deliver game discovery, payments and account functionality through a responsive H5 experience optimized for smartphones.',
                icon: Smartphone,
              },
              {
                num: '04',
                title: 'Operational Control',
                desc: 'Give the operating team centralized control over players, payments, games, promotions, affiliate activity and reporting.',
                icon: Sliders,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#11141a] border border-white/10 hover:border-[#00ebaa]/40 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between group hover:translate-y-[-4px] shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-[#00ebaa] bg-[#00ebaa]/10 px-2.5 py-1 rounded-md border border-[#00ebaa]/20">
                      {card.num}
                    </span>
                    <card.icon className="w-6 h-6 text-gray-400 group-hover:text-[#00ebaa] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00ebaa] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — THE SOLUTION (ARCHITECTURE DIAGRAM)
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0c0f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              THE SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              A Connected Casino Technology Stack
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Kvaornux engineered a decoupled multi-tier platform architecture designed for maximum
              responsiveness, real-time balance accuracy, and administrative control.
            </p>
          </div>

          {/* Interactive HTML/CSS Architecture Diagram Component */}
          <div className="bg-[#12151c] border border-[#00ebaa]/30 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <Cpu className="w-6 h-6 text-[#00ebaa]" />
                <span className="font-bold text-white text-lg">System Architecture Topology</span>
              </div>
              <span className="text-xs font-mono text-[#00ebaa] bg-[#00ebaa]/10 px-3 py-1 rounded-full border border-[#00ebaa]/20 hidden sm:inline-block">
                Decoupled Multi-Tier Platform
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1: Presentation Tier */}
              <div className="bg-[#191d26] border border-white/10 rounded-xl p-5 space-y-4 hover:border-[#00ebaa]/50 transition-colors">
                <div className="flex items-center gap-2 text-[#00ebaa] font-bold text-sm">
                  <Smartphone className="w-4 h-4" />
                  <span>Frontend Presentation Tier</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/60 p-3 rounded-lg border border-white/5">
                    <span className="block text-xs font-mono text-gray-400">Player Platform</span>
                    <span className="font-bold text-white text-sm">React 19 + Vite + Tailwind</span>
                  </div>
                  <div className="bg-black/60 p-3 rounded-lg border border-white/5">
                    <span className="block text-xs font-mono text-gray-400">Back Office</span>
                    <span className="font-bold text-white text-sm">Dedicated React Admin App</span>
                  </div>
                </div>
              </div>

              {/* Tier 2: Application Tier */}
              <div className="bg-[#191d26] border border-[#00ebaa]/40 rounded-xl p-5 space-y-4 hover:border-[#00ebaa] transition-colors relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00ebaa] text-black font-mono text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  Core Engine
                </div>
                <div className="flex items-center gap-2 text-[#00ebaa] font-bold text-sm">
                  <Server className="w-4 h-4" />
                  <span>Backend Services Tier</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/60 p-3 rounded-lg border border-[#00ebaa]/20">
                    <span className="block text-xs font-mono text-gray-400">Application Logic</span>
                    <span className="font-bold text-white text-sm">Node.js + Express (Multi-Core)</span>
                  </div>
                  <div className="bg-black/60 p-3 rounded-lg border border-[#00ebaa]/20">
                    <span className="block text-xs font-mono text-gray-400">Real-Time Event Engine</span>
                    <span className="font-bold text-white text-sm">Socket.io Event Bus</span>
                  </div>
                </div>
              </div>

              {/* Tier 3: Data Tier */}
              <div className="bg-[#191d26] border border-white/10 rounded-xl p-5 space-y-4 hover:border-[#00ebaa]/50 transition-colors">
                <div className="flex items-center gap-2 text-[#00ebaa] font-bold text-sm">
                  <Database className="w-4 h-4" />
                  <span>Data & Storage Tier</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/60 p-3 rounded-lg border border-white/5">
                    <span className="block text-xs font-mono text-gray-400">Relational Database</span>
                    <span className="font-bold text-white text-sm">PostgreSQL DB</span>
                  </div>
                  <div className="bg-black/60 p-3 rounded-lg border border-white/5">
                    <span className="block text-xs font-mono text-gray-400">High-Speed Cache</span>
                    <span className="font-bold text-white text-sm">Redis Memory Store</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Integration Layer */}
            <div className="bg-[#161a22] border border-white/10 rounded-xl p-5">
              <span className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                Unified Integration Mesh & External Connectors
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="bg-black/40 p-3 rounded-lg border border-white/5 text-xs text-gray-300">
                  <span className="font-bold text-white block mb-1">5 Game Aggregators</span>
                  Single-Wallet Callbacks & Bet Validations
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5 text-xs text-gray-300">
                  <span className="font-bold text-[#00ebaa] block mb-1">NGN Payment Gateway</span>
                  Automated Deposits & Withdrawal Queues
                </div>
                <div className="bg-black/40 p-3 rounded-lg border border-white/5 text-xs text-gray-300">
                  <span className="font-bold text-white block mb-1">6-Tier Affiliate Engine</span>
                  Commission Tracking & Milestone Rewards
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — MULTI-PROVIDER GAME INTEGRATION
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block">
                GAME ENGINE INTEGRATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Multi-Provider Game Integration Through a Unified Platform
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Lakebets connects multiple third-party game aggregation and API systems through a unified
                platform layer. Rather than managing fragmented game endpoints, Kvaornux standardizes all provider API communication into a single unified wallet workflow.
              </p>

              <div className="bg-[#12151c] border border-white/10 rounded-xl p-6 space-y-3">
                <h3 className="font-bold text-white text-base">Key Implementation Capabilities:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                  {[
                    'Provider game catalogue retrieval',
                    'Game and provider filtering',
                    'Fullscreen game launch workflows',
                    'Seamless single-wallet callbacks',
                    'Balance requests & bet processing',
                    'Win processing & instant updates',
                    'Cancellation & rollback handling',
                    'Bet history & transaction logging',
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#161a24] to-[#101218] border border-[#00ebaa]/30 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
                <div className="inline-flex p-4 rounded-full bg-[#00ebaa]/10 text-[#00ebaa] border border-[#00ebaa]/30">
                  <Gamepad2 className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-6xl font-extrabold text-white tracking-tight block mb-2">
                    5
                  </span>
                  <span className="text-lg font-bold text-[#00ebaa] uppercase tracking-wider block">
                    Integrated Game Aggregators
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
                  The audited codebase confirms 5 active aggregator/API integrations exposing dozens of
                  underlying game studios through a unified single-wallet callback structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — PROVIDER-LEVEL RTP MANAGEMENT
          ========================================================================= */}
      <section className="py-16 border-b border-white/10 bg-[#0d1016]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono uppercase mb-4">
            <Sliders className="w-3.5 h-3.5 text-[#00ebaa]" />
            <span>OPERATOR CONTROLS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Provider-Level RTP Management
          </h2>
          <p className="text-gray-300 text-base leading-relaxed bg-[#141822] border border-white/10 rounded-2xl p-6 sm:p-8 text-left sm:text-center shadow-lg">
            For supported game integrations, authorized RTP configurations can be managed through the
            game API provider's operator environment, while game outcomes and RNG execution remain strictly on the upstream provider infrastructure.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — WALLET & PAYMENTS
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              FINANCIAL INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              NGN Wallet and Transaction Infrastructure
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Centralized player wallet management built specifically for the Nigerian market,
              combining real-time balance synchronization with fraud protection and withdrawal PIN validation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Callout 1: Real-Time Synchronization */}
            <div className="bg-[#12151d] border border-[#00ebaa]/30 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#00ebaa] transition-colors shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#00ebaa]/10 text-[#00ebaa] flex items-center justify-center border border-[#00ebaa]/20">
                <RefreshCw className="w-6 h-6 animate-spin-slow" />
              </div>
              <h3 className="text-xl font-bold text-white">Real-Time Balance Synchronization</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Socket.io pushes instant wallet balance updates directly to connected player interfaces across bet placements, game wins, deposits, and withdrawal approvals without relying on repeated polling requests.
              </p>
            </div>

            {/* Callout 2: Transaction Integrity */}
            <div className="bg-[#12151d] border border-[#00ebaa]/30 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#00ebaa] transition-colors shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#00ebaa]/10 text-[#00ebaa] flex items-center justify-center border border-[#00ebaa]/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Transaction Integrity</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Duplicate transaction validation guards against double processing, while separate 6-digit withdrawal PIN authorization ensures player funds remain secure throughout administrative approval workflows.
              </p>
            </div>
          </div>

          {/* Verified Feature Checklist */}
          <div className="bg-[#161a24] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-white text-base mb-6 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#00ebaa]" />
              <span>Verified Payment & Wallet Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
              {[
                'Centralized player wallet engine',
                'Nigerian Naira (NGN) settlement',
                'Real-time Socket.io balance updates',
                'Automated payment gateway workflows',
                'Manual bank deposit processing',
                'Deposit & transaction logs',
                'Separate 6-digit withdrawal PIN',
                'Duplicate transaction validation',
                'Administrative approval queues',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ebaa] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — MOBILE-FIRST PLAYER EXPERIENCE
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0c0e13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block">
                PLAYER INTERFACE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Designed Around the Mobile Player Journey
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Recognizing that over 90% of Nigerian iGaming activity occurs on mobile devices, Lakebets was built from the ground up as a responsive H5 web platform optimized for fast loading and touch interactions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                {[
                  'Responsive H5 web application',
                  'Persistent mobile bottom navigation',
                  'Touch-friendly game search & filters',
                  'Responsive game category grid',
                  'Fullscreen mobile game launcher',
                  'Optimized mobile payment checkout',
                  'Mobile account & wallet controls',
                  'Responsive promotional banners',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#141822] p-2.5 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Composition Visual */}
            <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6">
              {/* Mobile Phone Mockup 1 */}
              <div className="relative w-44 sm:w-56 aspect-[9/19] rounded-[2.5rem] p-2 bg-[#1a1d24] border-4 border-gray-700 shadow-2xl overflow-hidden group">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-black">
                  <Image
                    src="/assets/case-studies/lakebets/mobile-home.png"
                    alt="Lakebets mobile casino interface"
                    fill
                    className="object-cover object-top"
                    sizes="250px"
                  />
                </div>
              </div>

              {/* Mobile Phone Mockup 2 */}
              <div className="relative w-48 sm:w-60 aspect-[9/19] rounded-[2.5rem] p-2 bg-[#1a1d24] border-4 border-[#00ebaa]/40 shadow-[0_0_30px_rgba(0,235,170,0.2)] overflow-hidden group translate-y-4">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-black">
                  <Image
                    src="/assets/case-studies/lakebets/mobile-lobby.png"
                    alt="Lakebets NGN wallet and payment interface"
                    fill
                    className="object-cover object-top"
                    sizes="250px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — BACK OFFICE
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              ADMINISTRATIVE CONTROL
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Centralized Back-Office Control
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              A dedicated React administrative web app equips operational staff with real-time visibility and centralized management over every aspect of the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Player Management',
                desc: 'Search users, review account activity, balances and account status.',
                icon: Users,
              },
              {
                title: 'Payments',
                desc: 'Review deposits and withdrawals and manage approval workflows.',
                icon: Wallet,
              },
              {
                title: 'Game Activity',
                desc: 'Inspect cross-provider betting activity and transaction records.',
                icon: Gamepad2,
              },
              {
                title: 'Financial Reporting',
                desc: 'Monitor deposits, withdrawals and platform-level gaming metrics.',
                icon: BarChart3,
              },
              {
                title: 'Promotions',
                desc: 'Manage bonuses, gift codes and promotional rewards.',
                icon: Gift,
              },
              {
                title: 'Affiliate Management',
                desc: 'Configure referral and commission operations.',
                icon: TrendingUp,
              },
              {
                title: 'Access Control',
                desc: 'Support administrative and sub-admin roles with permission controls.',
                icon: Lock,
              },
              {
                title: 'Geo Controls',
                desc: 'Platform-level country/state restriction configuration.',
                icon: Globe,
              },
            ].map((capability, idx) => (
              <div
                key={idx}
                className="bg-[#12151c] border border-white/10 hover:border-[#00ebaa]/40 p-6 rounded-2xl transition-all duration-200 group hover:bg-[#161a24]"
              >
                <capability.icon className="w-8 h-8 text-[#00ebaa] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — AFFILIATE SYSTEM
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0d1017]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#161a26] to-[#0e111a] border border-[#00ebaa]/30 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
                <div className="inline-flex p-4 rounded-full bg-[#00ebaa]/10 text-[#00ebaa] border border-[#00ebaa]/30">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <div>
                  <span className="text-6xl font-extrabold text-white tracking-tight block mb-2">
                    6
                  </span>
                  <span className="text-lg font-bold text-[#00ebaa] uppercase tracking-wider block">
                    Referral Levels
                  </span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed max-w-xs mx-auto">
                  Multi-tier affiliate tree structure tracking deposit and turnover qualifications across parent and subordinate relationships.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block">
                VIRAL GROWTH ENGINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                A Multi-Level Affiliate and Referral Engine
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                To drive player acquisition in competitive emerging markets, Lakebets incorporates a verified 6-level affiliate architecture allowing players and partners to generate recurring commissions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
                {[
                  'Automatic referral code generation',
                  'Unique shareable referral links',
                  'Parent & subordinate hierarchy',
                  'Up to 6 tracked commission levels',
                  'Deposit & betting qualification filters',
                  'Subordinate player statistics',
                  'Turnover & commission tracking',
                  'Instant reward claiming & milestones',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg.black/40 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#00ebaa] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — PLAYER ENGAGEMENT
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              RETENTION & GAMIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Built-In Player Engagement Tools
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Automated bonus mechanics integrated directly with player accounts and wallet transaction flows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Welcome Bonuses', desc: 'Automated signup incentives credited upon registration.' },
              { title: 'First-Time Deposit Bonuses', desc: 'Match bonuses applied to initial account funding.' },
              { title: 'Daily Deposit Rewards', desc: 'Recurring deposit incentives for active players.' },
              { title: 'Gift Codes / Red Envelopes', desc: 'Promotional gift code redemption for instant balances.' },
              { title: 'Referral Milestones', desc: 'Bonus rewards unlocked as invited players reach targets.' },
              { title: 'Spin Wheel', desc: 'Interactive daily wheel spin mechanics for bonus rewards.' },
              { title: 'Treasure Rewards', desc: 'Milestone chest unlocks tied to wagering activity.' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#12151c] border border-white/10 p-6 rounded-2xl hover:border-[#00ebaa]/40 transition-colors"
              >
                <Gift className="w-7 h-7 text-[#00ebaa] mb-3" />
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — ARCHITECTURE & SCALABILITY
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0c0f15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              RELIABILITY & PERFORMANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Engineering for Growth and Operational Reliability
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Verified backend optimization mechanisms built into the platform architecture to ensure data integrity and server efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Node.js Multi-Core Clustering',
                desc: 'Backend worker processes utilize available CPU cores to distribute incoming requests efficiently.',
                icon: Cpu,
              },
              {
                title: 'Redis Query Caching',
                desc: 'Frequently requested database queries and session data are served instantly from memory.',
                icon: Zap,
              },
              {
                title: 'PostgreSQL Relational Storage',
                desc: 'ACID-compliant storage for core player accounts, financial ledger, and transaction logs.',
                icon: Database,
              },
              {
                title: 'Socket.io Event Bus',
                desc: 'Event-driven real-time updates push balance modifications to connected player interfaces.',
                icon: RefreshCw,
              },
              {
                title: 'DB Connection Resilience',
                desc: 'Automated retry handling prevents database connection dropouts from disrupting operations.',
                icon: Server,
              },
              {
                title: 'Transaction Validation',
                desc: 'Strict idempotency safeguards prevent duplicate financial processing during callback surges.',
                icon: Lock,
              },
            ].map((mech, idx) => (
              <div key={idx} className="bg-[#141822] border border-white/10 p-6 rounded-2xl hover:border-[#00ebaa]/40 transition-colors">
                <mech.icon className="w-8 h-8 text-[#00ebaa] mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{mech.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{mech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — SCREENSHOT SHOWCASE
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              SCREENSHOT SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              The Platform in Action
            </h2>
            <p className="text-gray-300 text-base">
              Explore actual platform interface screenshots from the live Lakebets deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(img)}
                className="group relative bg-[#12151c] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#00ebaa]/50 transition-all duration-300 shadow-xl"
              >
                <div className="relative w-full aspect-[16/10] bg-black">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-bold text-[#00ebaa] flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5" /> Click to enlarge
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t border-white/5 bg-[#141720]">
                  <span className="text-[10px] font-mono text-[#00ebaa] uppercase block mb-1">
                    {img.category}
                  </span>
                  <h3 className="text-sm font-bold text-white line-clamp-1">{img.caption}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13 — DELIVERED PLATFORM (FACTUAL METRICS)
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0c0e14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              DELIVERED PLATFORM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              From Casino Frontend to Complete Operating Platform
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              The result is a live casino platform that connects player experience, game integrations,
              wallet operations, payments, affiliate infrastructure and back-office control within one operating environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { stat: '5', label: 'Game Aggregator Integrations' },
              { stat: '6', label: 'Affiliate Levels' },
              { stat: 'NGN', label: 'Primary Settlement Currency' },
              { stat: 'Real-Time', label: 'Wallet Synchronization' },
              { stat: 'Mobile-First', label: 'H5 Player Experience' },
              { stat: 'Live', label: 'Production Platform' },
            ].map((proof, idx) => (
              <div
                key={idx}
                className="bg-[#131620] border border-[#00ebaa]/20 rounded-2xl p-5 text-center space-y-2 hover:border-[#00ebaa]/50 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-[#00ebaa] block tracking-tight">
                  {proof.stat}
                </span>
                <span className="text-xs font-medium text-gray-300 block leading-snug">
                  {proof.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14 — TECHNOLOGY STACK
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              TECHNOLOGY STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Technology Behind the Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#12151c] border border-white/10 p-6 rounded-2xl">
              <span className="text-xs font-mono text-[#00ebaa] uppercase block mb-3">Frontend</span>
              <ul className="space-y-2 text-sm font-bold text-white">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" /> React 19
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" /> Vite
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" /> Tailwind CSS
                </li>
              </ul>
            </div>

            <div className="bg-[#12151c] border border-white/10 p-6 rounded-2xl">
              <span className="text-xs font-mono text-[#00ebaa] uppercase block mb-3">Backend</span>
              <ul className="space-y-2 text-sm font-bold text-white">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" /> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" /> Express Framework
                </li>
              </ul>
            </div>

            <div className="bg-[#12151c] border border-white/10 p-6 rounded-2xl">
              <span className="text-xs font-mono text-[#00ebaa] uppercase block mb-3">Data & Cache</span>
              <ul className="space-y-2 text-sm font-bold text-white">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" /> PostgreSQL DB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" /> Redis Cache
                </li>
              </ul>
            </div>

            <div className="bg-[#12151c] border border-white/10 p-6 rounded-2xl">
              <span className="text-xs font-mono text-[#00ebaa] uppercase block mb-3">Real-Time</span>
              <ul className="space-y-2 text-sm font-bold text-white">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" /> Socket.io Engine
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15 — LIVE PROJECT
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-gradient-to-r from-[#0c0f16] via-[#10141f] to-[#0c0f16]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block">
            PRODUCTION DEPLOYMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Lakebets Live Casino Platform
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Explore the live player-facing platform and see the mobile-first casino experience in production.
          </p>
          <div>
            <a
              href="https://lakebets.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-main inline-flex items-center gap-2 text-base font-bold"
            >
              <span>Visit Lakebets</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 16 — RELATED KVAORNUX SOLUTIONS
          ========================================================================= */}
      <section className="py-20 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              EXPLORE OUR TECH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Related Kvaornux iGaming Solutions
            </h2>
            <p className="text-gray-300 text-base">
              Learn how Kvaornux powers custom iGaming platforms, aggregator APIs, and turnkey software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/turnkey-casino-software-solutions"
              className="bg-[#12151c] border border-white/10 hover:border-[#00ebaa]/50 p-6 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ebaa] transition-colors">
                  Turnkey Casino Software Solutions
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Complete turnkey casino platform software with game aggregation, payments, and admin controls.
                </p>
              </div>
              <div className="flex items-center text-[#00ebaa] font-bold text-sm gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Solution</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/custom-igaming-solution"
              className="bg-[#12151c] border border-white/10 hover:border-[#00ebaa]/50 p-6 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ebaa] transition-colors">
                  Bespoke iGaming Solutions
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Tailor-made casino and sportsbook platforms built from scratch around your exact specifications.
                </p>
              </div>
              <div className="flex items-center text-[#00ebaa] font-bold text-sm gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Solution</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/casino-aggregator-api-solution"
              className="bg-[#12151c] border border-white/10 hover:border-[#00ebaa]/50 p-6 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ebaa] transition-colors">
                  Casino Aggregator API Solution
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Unified game aggregation API offering seamless single-wallet access to thousands of titles.
                </p>
              </div>
              <div className="flex items-center text-[#00ebaa] font-bold text-sm gap-1 group-hover:translate-x-1 transition-transform">
                <span>Explore Solution</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              Looking for developer insights? Read our guide on{' '}
              <Link
                href="/blog/igaming-software-development"
                className="text-[#00ebaa] font-bold underline hover:text-white transition-colors"
              >
                iGaming Software Development
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA & CONTACT FORM
          ========================================================================= */}
      <section id="contact-us" className="py-20 bg-[#08090c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              START YOUR PROJECT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Planning Your Own Casino Platform?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Whether you're launching a new casino business or expanding an existing iGaming operation, Kvaornux can build the platform, integrations and operational infrastructure around your requirements.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
