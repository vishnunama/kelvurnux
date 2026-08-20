'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    id: 1,
    title: 'White Label iGaming Solutions',
    description: 'A ready-to-launch iGaming platform with your branding, fully managed infrastructure, and minimal operational overhead.',
    items: [
      'Fast time-to-market',
      'API game integration (100+ providers)',
      'No initial licensing required (client-side optional)',
      'Built-in bonus and promotion tools',
      'Custom front-end branding',
      'Full support and maintenance'
    ],
  },
  {
    id: 2,
    title: 'Turnkey iGaming Platform',
    description: 'A full-access, modular iGaming platform designed for complete business control, scalability, and long-term growth.',
    items: [
      'Dedicated backend and admin panel',
      'Integrated games, payments, and core features',
      'Support with licensing and certification (client-managed)',
      'Multi-vertical support (Casino + Sportsbook)',
      'Fully customizable modules',
      'Advanced scaling and automation tools'
    ],
  },
  {
    id: 3,
    title: 'Turnkey Sportsbook Solutions',
    description: 'A fully featured turnkey sportsbook platform designed for competitive performance in fast-paced betting markets with live odds, sportsbook API integration, and advanced betting management tools.',
    items: [
      'Wide range of sports, events, and betting markets',
      'Sports API integration system',
      'Live and pre-match odds management',
      'In-play visualization and statistics',
      'Risk and margin management tools',
      'Integration with leading sports data providers'
    ],
    link: '/turnkey-sportsbook-solutions'
  },
  {
    id: 4,
    title: 'Back Office & Admin Panel',
    description: 'A powerful back office system to manage users, payments, bonuses, affiliates, and reporting from a single dashboard.',
    items: [
      'Deposit and withdrawal management',
      'User account management and controls',
      'Bonus and promotion system',
      'Affiliate management system',
      'Real-time user monitoring',
      'Advanced reporting and analytics'
    ],
  },
  {
    id: 5,
    title: 'Game Aggregator System',
    description: 'A complete game aggregation platform with access to thousands of games and seamless provider integrations.',
    items: [
      '20,000+ games integration',
      'Detailed reporting and analytics',
      'Integration with trusted providers',
      'Multi-currency and multi-language support',
      'Global GEO coverage',
      'Seamless API integration'
    ],
  },
];

const styles = `
  @keyframes from-bottom {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes from-top {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes from-left {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes from-right {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  [data-anim] { opacity: 0; }
  [data-anim="from-bottom"].visible { animation: from-bottom 0.5s ease-out forwards; }
  [data-anim="from-top"].visible { animation: from-top 0.5s ease-out forwards; }
  [data-anim="from-left"].visible { animation: from-left 0.5s ease-out forwards; }
  [data-anim="from-right"].visible { animation: from-right 0.5s ease-out forwards; }
  [data-anim="fade-in"].visible { animation: fade-in 0.5s ease-out forwards; }

  [data-anim-delay="1"].visible { animation-delay: 0.05s; }
  [data-anim-delay="2"].visible { animation-delay: 0.1s; }
  [data-anim-delay="3"].visible { animation-delay: 0.15s; }
  [data-anim-delay="4"].visible { animation-delay: 0.2s; }
  [data-anim-delay="5"].visible { animation-delay: 0.25s; }
  [data-anim-delay="6"].visible { animation-delay: 0.3s; }

  .nav-button {
    transition: all 0.3s cubic-bezier(0.32, 0.72, 0.3, 1);
  }
  .nav-button:hover {
    transform: scale(1.08);
    background: rgba(255, 255, 255, 0.12) !important;
  }
  .nav-button:active {
    transform: scale(0.95);
  }
  .dot-button {
    transition: all 0.4s cubic-bezier(0.32, 0.72, 0.3, 1);
  }
  .dot-button:hover {
    background: rgba(0, 235, 170, 0.8) !important;
  }
`;

export default function FeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

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

  const changeSlide = (index: number) => {
    if (index !== currentSlide) setCurrentSlide(index);
  };

  const nextSlide = () => changeSlide((currentSlide + 1) % features.length);
  const prevSlide = () => changeSlide((currentSlide - 1 + features.length) % features.length);

  const current = features[currentSlide];

  return (
    <>
      <style>{styles}</style>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#0b0b0f]"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 md:px-8">

          {/* Title */}
          <div
            className="text-center mb-0 md:mb-20"
            ref={(el) => { elementsRef.current[0] = el; }}
            data-anim="from-top"
          >
            <h2
              className="text-4xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto"
              style={{
                background: 'linear-gradient(147deg, rgba(255,255,255,0.33) 10%, rgba(61,75,71,0.33) 90%), #fff',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
A solid base for your business
            </h2>
            <p className="text-base sm:text-base md:text-lg text-[#a5a5a5] max-w-2xl mx-auto">
Modular and comprehensive, time-tested casino, sportsbook, and iGaming solutions tailored to your business vision            </p>
          </div>

          {/* LAPTOP VIEW */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_1fr_auto] lg:items-center lg:gap-8">

            {/* Image */}
            <div
              className="flex justify-center items-center h-[650px] w-[70vw] -mx-[calc(38vw-50%)] overflow-hidden"
              ref={(el) => { elementsRef.current[1] = el; }}
              data-anim="from-left"
            >
              <Image
                src="/assets/features-img.webp"
                alt={current.title}
                width={900}
                height={650}
                className="w-[80%] h-auto object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div
              className="min-w-0"
              ref={(el) => { elementsRef.current[2] = el; }}
              data-anim="from-right"
            >
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {current.title}
                </h3>
                <p className="text-base md:text-lg text-[#a5a5a5]">
                  {current.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {current.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    ref={(el) => { elementsRef.current[3 + index] = el; }}
                    data-anim="from-bottom"
                    data-anim-delay={String(index + 1)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ebaa" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-base text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={prevSlide}
                  className="nav-button"
                  style={{
                    width: '3.6rem', minWidth: '3.6rem', height: '3.6rem',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 -3px 4px 0 rgba(6,10,13,0.26) inset, 0 2px 2.8px 0 rgba(255,255,255,0.13) inset',
                    border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="nav-button"
                  style={{
                    width: '3.6rem', minWidth: '3.6rem', height: '3.6rem',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 -3px 4px 0 rgba(6,10,13,0.26) inset, 0 2px 2.8px 0 rgba(255,255,255,0.13) inset',
                    border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dots */}
            <div
              className="flex flex-col items-center gap-[0.4rem]"
              ref={(el) => { elementsRef.current[9] = el; }}
              data-anim="fade-in"
            >
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className="dot-button"
                  style={{
                    width: '6px',
                    height: index === currentSlide ? '28px' : '6px',
                    borderRadius: '9.9rem',
                    background: index === currentSlide ? '#00ebaa' : 'rgba(255,255,255,0.22)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
              <div className="text-xs font-medium mt-2">
                <span style={{ color: '#00ebaa' }}>{currentSlide + 1}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)' }}> / {features.length}</span>
              </div>
            </div>

          </div>

          {/* MOBILE/TABLET VIEW */}
          <div className="lg:hidden w-full flex flex-col gap-0 pb-8">

            {/* Image */}
            <div
              className="w-screen overflow-visible h-[500px] flex items-center justify-center relative z-10 mb-[-250px] -mx-[calc(50vw-50%)]"
              ref={(el) => { elementsRef.current[10] = el; }}
              data-anim="from-top"
            >
              <Image
                src="/assets/features-img.webp"
                alt={current.title}
                width={1200}
                height={500}
                className="w-screen h-auto object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div
              className="w-full rounded-3xl backdrop-blur-md p-8 relative z-20"
              style={{
                background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
                border: '1px solid rgba(0, 235, 170, 0.3)',
              }}
              ref={(el) => { elementsRef.current[11] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              <h3 className="text-3xl font-bold text-white mb-4">{current.title}</h3>
              <p className="text-base text-[#a5a5a5] mb-6 leading-relaxed">{current.description}</p>
              <div className="flex flex-col gap-4">
                {current.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                    ref={(el) => { elementsRef.current[12 + index] = el; }}
                    data-anim="from-bottom"
                    data-anim-delay={String(index + 2)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ebaa" strokeWidth="2.5" className="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-base text-gray-200 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div
              className="w-full flex flex-col items-center gap-4 mt-8"
              ref={(el) => { elementsRef.current[18] = el; }}
              data-anim="from-bottom"
              data-anim-delay="3"
            >
              <div className="flex items-center justify-center gap-1.5">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className="dot-button"
                    style={{
                      width: index === currentSlide ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '9.9rem',
                      background: index === currentSlide ? '#00ebaa' : 'rgba(255,255,255,0.25)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
              <div className="text-xs font-medium">
                <span style={{ color: '#00ebaa' }}>{currentSlide + 1}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)' }}> / {features.length}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={prevSlide}
                  className="nav-button"
                  style={{
                    width: '2.8rem', minWidth: '2.8rem', height: '2.8rem',
                    borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 -3px 4px 0 rgba(6,10,13,0.26) inset, 0 2px 2.8px 0 rgba(255,255,255,0.13) inset',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="nav-button"
                  style={{
                    width: '2.8rem', minWidth: '2.8rem', height: '2.8rem',
                    borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 -3px 4px 0 rgba(6,10,13,0.26) inset, 0 2px 2.8px 0 rgba(255,255,255,0.13) inset',
                    border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}