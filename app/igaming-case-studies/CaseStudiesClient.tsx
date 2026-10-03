'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';

// Global function to initialize or reset animations consistent with Kvaornux Blog
const resetAllAnimations = () => {
  const allAnimElements = document.querySelectorAll('[data-anim]');

  allAnimElements.forEach((el) => {
    el.classList.remove('visible');
  });

  setTimeout(() => {
    allAnimElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    allAnimElements.forEach((el) => {
      observer.observe(el);
    });
  }, 50);
};

export default function CaseStudiesClient() {
  React.useEffect(() => {
    resetAllAnimations();
    const timer = setTimeout(() => {
      resetAllAnimations();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const handlePopState = () => {
      setTimeout(() => {
        resetAllAnimations();
      }, 100);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          resetAllAnimations();
        }, 100);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('contact-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        @keyframes from-bottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes from-top {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        [data-anim] { 
          opacity: 1 !important;
        }
        
        [data-anim="from-bottom"] { 
          animation: from-bottom 0.6s ease-out forwards !important;
          opacity: 1 !important;
        }
        
        [data-anim="from-top"] { 
          animation: from-top 0.6s ease-out forwards !important;
          opacity: 1 !important;
        }

        [data-anim-delay="1"] { animation-delay: 0.1s !important; }
        [data-anim-delay="2"] { animation-delay: 0.2s !important; }
        [data-anim-delay="3"] { animation-delay: 0.3s !important; }

        /* PORTFOLIO HERO STYLES */
        .portfolio-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(6.5rem, 10vw, 11rem) 0 4.5rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0);
          background: radial-gradient(91.56% 100% at 50% 0, rgba(0, 235, 170, 0.3) 0%, rgba(13, 11, 16, 0.4) 65.41%);
        }

        .grid-bg {
          position: absolute;
          pointer-events: none;
          width: 100%;
          height: 100%;
          background: url(/assets/grid-bg.svg) repeat 50% 50%;
          background-size: 6.7rem 5.3rem;
          left: 0;
          top: 0;
          opacity: 0.2;
          -webkit-mask-image: linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent);
          mask-image: linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent);
        }

        .portfolio-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          pointer-events: none;
        }

        .portfolio-hero-el {
          position: absolute;
          pointer-events: none;
        }

        .portfolio-hero-el-main {
          width: 880px;
          max-width: 62vw;
          bottom: -36%;
          left: 72%;
          transform: translateX(-50%);
          filter: brightness(0.8) contrast(1.08) drop-shadow(0 0 35px rgba(0, 235, 170, 0.25));
          opacity: 0.92;
          -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.15) 100%);
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.15) 100%);
        }

        .portfolio-hero-el-left {
          left: 2%;
          top: -12%;
          width: 580px;
          max-width: 42vw;
          transform: translateX(-35%);
          filter: drop-shadow(0 0 25px rgba(0, 235, 170, 0.2));
        }

        .portfolio-hero-el-right {
          left: auto;
          right: 0%;
          top: -4%;
          width: 210px;
          max-width: 15vw;
          filter: drop-shadow(0 0 25px rgba(0, 235, 170, 0.35));
        }

        .portfolio-hero-container {
          max-width: 124rem;
          margin: 0 auto;
          padding: 0 clamp(1.2rem, 4.5rem, 4.5rem);
          position: relative;
          z-index: 10;
        }

        .portfolio-hero-content {
          max-width: 720px;
          margin-bottom: 3.5rem;
          text-align: left;
          position: relative;
          z-index: 10;
        }

        .portfolio-hero-title {
          font-size: clamp(2.3rem, 4.4vw, 4.2rem);
          font-style: normal;
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.04rem;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.4rem;
          text-align: left !important;
        }

        .portfolio-hero-text {
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1.5;
          color: #a5d8d0 !important;
          margin-bottom: 2.5rem;
          max-width: 580px;
        }

        .portfolio-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          outline: 0;
          border: none;
          cursor: pointer;
          font-weight: 700;
          width: 240px;
          max-width: 100%;
          height: 3.75rem;
          padding: 0.9rem 2.5rem;
          font-size: 1.15rem;
          border-radius: 3.2rem;
          position: relative;
          overflow: hidden;
          color: #121314;
          text-decoration: none;
          text-align: center;
          line-height: 1.5;
          background: radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%);
          box-shadow: 0 -5px 3.5px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.8px 0 rgba(255, 244, 230, 0.93) inset;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .portfolio-hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 235, 170, 0.45);
        }

        .portfolio-hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: flex-start;
          margin-top: 2rem;
          position: relative;
          z-index: 10;
        }

        .portfolio-hero-stat {
          position: relative;
          width: 320px;
          max-width: 100%;
          min-height: 7.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 0.4rem;
          padding: 1.6rem 2rem;
          border-radius: 1.8rem;
          border: 1px solid rgba(0, 235, 170, 0.35);
          overflow: hidden;
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.18) 0%, rgba(0, 235, 170, 0.12) 32.21%, rgba(0, 235, 170, 0.07) 68.75%, rgba(0, 235, 170, 0.03) 100%);
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.3) inset;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .portfolio-hero-stat-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
        }

        .portfolio-hero-stat-value span {
          color: #00ebaa;
          font-weight: 800;
          font-size: 1.8rem;
          text-shadow: 0 0 12px rgba(0, 235, 170, 0.3);
        }

        .portfolio-hero-stat-label {
          font-size: 0.9rem;
          color: #a5d8d0 !important;
          line-height: 1.35;
          font-weight: 400;
        }

        .section-title-gradient {
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (min-width: 601px) and (max-width: 1024px) {
          .portfolio-hero {
            padding: 9rem 0 4rem;
          }
          .portfolio-hero-container {
            padding: 0 2.5rem;
          }
          .portfolio-hero-el-main {
            width: 720px;
            max-width: 65vw;
            bottom: -30%;
            left: 68%;
            top: auto;
            transform: translateX(-50%);
            display: block;
            opacity: 0.95;
            filter: brightness(0.85) contrast(1.05) drop-shadow(0 0 35px rgba(0, 235, 170, 0.3));
            mask-image: none;
            -webkit-mask-image: none;
          }
          .portfolio-hero-el-left {
            width: 420px;
            max-width: 40vw;
            left: 2%;
            top: -10%;
            transform: translateX(-30%);
            display: block;
            opacity: 0.9;
            filter: drop-shadow(0 0 25px rgba(0, 235, 170, 0.25));
            mask-image: none;
            -webkit-mask-image: none;
          }
          .portfolio-hero-el-right {
            width: 200px;
            max-width: 18vw;
            right: 0%;
            top: -2%;
            display: block;
            left: auto;
            filter: drop-shadow(0 0 25px rgba(0, 235, 170, 0.35));
          }
          .portfolio-hero-stats {
            display: flex;
            flex-wrap: nowrap;
            gap: 1.2rem;
          }
          .portfolio-hero-stat {
            width: auto;
            min-width: 0;
            flex: 1 1 0%;
            min-height: 9.5rem;
            padding: 1.8rem 1.4rem;
            border-radius: 1.8rem;
          }
          .portfolio-hero-stat:last-child {
            width: auto;
            flex: 1 1 0%;
            min-height: 9.5rem;
          }
          .portfolio-hero-stat-value {
            font-size: 1.35rem;
          }
          .portfolio-hero-stat-value span {
            font-size: 1.75rem;
          }
          .portfolio-hero-stat-label {
            font-size: 0.88rem;
          }
        }

        @media (max-width: 600px) {
          .portfolio-hero {
            padding: 14rem 0 4rem;
          }
          .portfolio-hero-container {
            padding: 0 1.6rem !important;
          }
          .portfolio-hero-el-main {
            width: 350px;
            max-width: 92vw;
            top: 5%;
            left: 68%;
            bottom: auto;
            transform: translateX(-35%);
            opacity: 0.92;
            filter: brightness(0.8) contrast(1.08) drop-shadow(0 0 35px rgba(0, 235, 170, 0.25));
            -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.15) 100%);
            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.15) 100%);
          }
          .portfolio-hero-el-left {
            width: 260px;
            max-width: 65vw;
            left: -25%;
            top: 1%;
            transform: none;
            opacity: 0.88;
            filter: brightness(0.75) contrast(1.1) drop-shadow(0 0 25px rgba(0, 235, 170, 0.35));
            -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.45) 65%, rgba(0, 0, 0, 0.1) 100%);
            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.45) 65%, rgba(0, 0, 0, 0.1) 100%);
          }
          .portfolio-hero-el-right {
            display: none;
          }
          .portfolio-hero-content {
            margin-bottom: 2.5rem;
          }
          .portfolio-hero-title {
            font-size: clamp(2.2rem, 8.2vw, 3rem);
            line-height: 1.1;
            margin-bottom: 1.2rem;
          }
          .portfolio-hero-text {
            font-size: 1.12rem;
            line-height: 1.45;
            margin-bottom: 2.2rem;
          }
          .portfolio-hero-btn {
            width: 240px;
            max-width: 100%;
          }
          .portfolio-hero-stats {
            gap: 1.2rem;
            display: flex;
            flex-wrap: wrap;
          }
          .portfolio-hero-stat {
            width: calc(50% - 0.6rem);
            min-width: 140px;
            flex: 1 1 calc(50% - 0.6rem);
            min-height: 10.5rem;
            padding: 1.8rem 1.4rem;
            border-radius: 2rem;
          }
          .portfolio-hero-stat:last-child {
            width: 100%;
            flex: 1 1 100%;
            min-height: 8.5rem;
            padding: 1.8rem 1.6rem;
          }
          .portfolio-hero-stat-value {
            font-size: 1.35rem;
            line-height: 1.2;
          }
          .portfolio-hero-stat-value span {
            font-size: 1.7rem;
          }
          .portfolio-hero-stat-label {
            font-size: 0.88rem;
            line-height: 1.35;
          }
        }
      `}</style>

      {/* =========================================================================
          HERO SECTION (Matching requested Kvaornux Portfolio hero layout)
          ========================================================================= */}
      <section className="portfolio-hero">
        <div className="grid-bg"></div>

        {/* Hero Background Decor */}
        <div className="portfolio-hero-bg">
          <div className="portfolio-hero-el portfolio-hero-el-main">
            <Image
              src="/assets/case-studies/Glossy Teal Swirl Sphere Emblem.png"
              alt=""
              aria-hidden="true"
              width={880}
              height={870}
              priority
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-hero-el portfolio-hero-el-left">
            <Image
              src="/assets/case-studies/case-studies-el-left.webp"
              alt=""
              aria-hidden="true"
              width={469}
              height={469}
              priority
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-hero-el portfolio-hero-el-right">
            <Image
              src="/assets/case-studies/case-studies-el-right.webp"
              alt=""
              aria-hidden="true"
              width={210}
              height={302}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Hero Container */}
        <div className="portfolio-hero-container">
          <div className="portfolio-hero-content" data-anim="from-bottom" data-anim-delay="1">
            <h1 className="portfolio-hero-title">
              Kvaornux Portfolio: How We Scale Casino and Sportsbook Businesses
            </h1>

            <p className="portfolio-hero-text">
              Casino projects launched in weeks. Retention above industry benchmarks. The Kvaornux portfolio documents real iGaming case studies with metrics, not adjectives.
            </p>

            <a
              className="portfolio-hero-btn"
              href="#contact-us"
              onClick={handleScrollToContact}
            >
              <span>Learn more</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="portfolio-hero-stats" data-anim="from-bottom" data-anim-delay="2">
            <div className="portfolio-hero-stat">
              <p className="portfolio-hero-stat-value">
                Up to <span>70%</span>
              </p>
              <p className="portfolio-hero-stat-label">
                registration-to-deposit conversion rate
              </p>
            </div>

            <div className="portfolio-hero-stat">
              <p className="portfolio-hero-stat-value">
                Up to <span>39%</span>
              </p>
              <p className="portfolio-hero-stat-label">
                retention rate
              </p>
            </div>

            <div className="portfolio-hero-stat">
              <p className="portfolio-hero-stat-value">
                Up to <span>€1,000</span>
              </p>
              <p className="portfolio-hero-stat-label">
                ARPPU per month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SELECTED PROJECTS SECTION
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-white/10 bg-[#0b0b0f]">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.12) 0%, rgba(13,11,16,0) 50%)',
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
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
            <div>
              <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                FEATURED WORK
              </span>
              <h2 className="section-title-gradient text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Selected Projects
              </h2>
            </div>
            <span className="text-xs font-mono text-[#00ebaa] bg-[#00ebaa]/10 px-3.5 py-1.5 rounded-full border border-[#00ebaa]/20 hidden sm:inline-block">
              1 Active Case Study
            </span>
          </div>

          {/* FIRST PROJECT CARD - Premium Large Visual Card */}
          <div
            data-anim="from-bottom"
            data-anim-delay="1"
            className="group relative bg-[#12151d]/90 border border-[#00ebaa]/30 hover:border-[#00ebaa] rounded-3xl overflow-hidden transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_rgba(0,235,170,0.15)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Left Column: Large Real Project Screenshot */}
              <div className="lg:col-span-6 relative bg-black/60 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 p-6 sm:p-8 flex flex-col justify-center">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1a1d26] shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                  {/* Browser Window Framing */}
                  <div className="bg-[#1e222d] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <div className="bg-black/60 text-gray-400 text-[11px] px-3 py-1 rounded font-mono flex items-center gap-1.5 border border-white/5">
                      <Lock className="w-3 h-3 text-[#00ebaa]" />
                      <span>https://lakebets.com</span>
                    </div>
                    <span className="text-[10px] text-[#00ebaa] font-mono font-bold">H5 WEB</span>
                  </div>

                  <div className="relative w-full aspect-[16/10] bg-black">
                    <Image
                      src="/assets/case-studies/lakebets/hero-desktop.jpg"
                      alt="Lakebets mobile-first casino platform game lobby"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Project Details & Facts */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Client Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#00ebaa]/10 border border-[#00ebaa]/30 text-[#00ebaa] text-xs font-mono font-bold tracking-wide">
                      Casino Platform Development
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Lakebets • Live Platform
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00ebaa] transition-colors leading-tight">
                    Building a Scalable Mobile-First Casino Platform
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    A mobile-first casino platform developed for the Nigerian market with multi-provider game integrations, NGN wallet infrastructure, payments, affiliate operations and centralized back-office management.
                  </p>

                  {/* Facts / Tags Grid */}
                  <div className="pt-2">
                    <span className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Key Project Specifications:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Nigeria',
                        'Mobile-First H5',
                        'NGN',
                        '5 Game Aggregators',
                        '6-Level Affiliate System',
                        'Live Platform',
                      ].map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-gray-200 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#00ebaa]/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/igaming-case-studies/casino-platform-development/"
                    className="btn-main inline-flex items-center gap-2 text-sm font-bold w-full sm:w-auto justify-center"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TRUST / INTRO SECTION ("Built Around Real iGaming Projects")
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-white/10 bg-[#0c0e14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00ebaa] text-xs font-mono uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>ENGINEERING PROOF</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Built Around Real iGaming Projects
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our case studies document real platform development work across player experiences, game integrations, wallet infrastructure, payments, back-office operations and other core iGaming technology.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="bg-[#12151f] p-5 rounded-2xl border border-white/10">
              <span className="font-bold text-white text-sm block mb-1">Audited Architecture</span>
              <p className="text-xs text-gray-400">
                Technical write-ups derived directly from audited production source code and systems.
              </p>
            </div>
            <div className="bg-[#12151f] p-5 rounded-2xl border border-white/10">
              <span className="font-bold text-white text-sm block mb-1">Single-Wallet Standards</span>
              <p className="text-xs text-gray-400">
                Standardized multi-aggregator integrations connecting multiple providers to one ledger.
              </p>
            </div>
            <div className="bg-[#12151f] p-5 rounded-2xl border border-white/10">
              <span className="font-bold text-white text-sm block mb-1">Operational Scalability</span>
              <p className="text-xs text-gray-400">
                Designed for high-concurrency player activity, multi-level affiliates, and local settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CTA & CONTACT SECTION ("Planning an iGaming Project?")
          ========================================================================= */}
      <section id="contact-us" className="py-20 bg-[#08090c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00ebaa] font-mono text-xs font-bold uppercase tracking-wider block mb-2">
              START YOUR PROJECT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Planning an iGaming Project?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Whether you're launching a new platform or expanding an existing operation, talk to Kvaornux about the technology, integrations and infrastructure behind your project.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
