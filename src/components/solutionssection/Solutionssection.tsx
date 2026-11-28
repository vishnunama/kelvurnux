'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const solutionsData = [
  {
    id: 1,
    image: '/assets/sol-card-1.webp',
    title: 'Turnkey iGaming Platform',
    description: 'Launch a complete casino and sportsbook operation with the platform, back office, integrations and core infrastructure brought together in one solution.',
    alt: 'Turnkey iGaming Platform',
    ctaText: 'Explore Turnkey',
    ctaHref: '/turnkey-casino-software-solutions',
    badges: ['Casino & Sportsbook Core', 'Back Office & PAM', 'API Integrations'],
  },
  {
    id: 2,
    image: '/assets/sol-card-2.webp',
    title: 'White Label Casino',
    description: 'Launch your casino using a ready-made platform customized for your brand, with games, payments and back-office tools.',
    alt: 'White Label Casino',
    ctaText: 'Explore White Label',
    ctaHref: '/white-label-casino-solutions',
    badges: ['Ready-Made Platform', 'Custom Brand UI', 'Games & Payments'],
  },
  {
    id: 3,
    image: '/assets/sol-card-3.webp',
    title: 'Bespoke iGaming Solutions',
    description: 'Build a custom iGaming platform with the design, features and integrations your business needs.',
    alt: 'Bespoke iGaming Solutions',
    ctaText: 'Explore Bespoke Solutions',
    ctaHref: '/custom-igaming-solution',
    badges: ['Custom Architecture', 'Tailored Features', 'Full Ownership'],
  }
];

const styles = `
  .solutions-section {
    background: #0b0b0f;
  }

  .solutions-title {
    background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sol-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.32, 0.72, 0.3, 1);
  }

  .sol-card:hover {
    transform: translateY(-4px);
  }

  .sol-card-img {
    z-index: 2;
    height: 340px;
    margin-bottom: -175px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    pointer-events: none;
  }

  .sol-card-img img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }

  .sol-card-inner {
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 165px 18px 18px;
  }

  .sol-card-inner::before {
    content: "";
    z-index: 1;
    background: linear-gradient(143deg, rgba(14, 62, 53, 0.78) 7%, rgba(4, 16, 17, 0.9) 55%);
    border: none;
    border-radius: 24px;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }

  .sol-card-content {
    position: relative;
    z-index: 3;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: auto;
    padding: 24px;
    border-radius: 20px;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    background: rgba(14, 30, 28, 0.72);
    border: none;
  }

  .sol-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 7px 14px;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.03);
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    font-weight: 500;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    .sol-card-img {
      height: 250px;
      margin-bottom: -120px;
    }

    .sol-card-inner {
      padding: 120px 14px 14px;
    }

    .sol-card-content {
      padding: 20px;
    }
  }

  

  .solutions-button {
    background: #00ebaa;
    color: #000;
  }

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

  [data-anim] {
    opacity: 0;
  }

  [data-anim="from-bottom"].visible {
    animation: from-bottom 0.5s ease-out forwards;
  }

  [data-anim-delay="1"].visible { animation-delay: 0.05s; }
  [data-anim-delay="2"].visible { animation-delay: 0.1s; }
  [data-anim-delay="3"].visible { animation-delay: 0.15s; }

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
`;

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const swiperRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section ref={sectionRef} id="solutions" className="solutions-section py-14 sm:py-18 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Title */}
          <h2
            ref={(el) => { if (el) elementsRef.current[0] = el; }}
            data-anim="from-bottom"
            className="solutions-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center max-w-4xl mx-auto mb-4"
          >
            iGaming Solutions Built Around Your Business
          </h2>

          {/* Subtitle */}
          <p
            ref={(el) => { if (el) elementsRef.current[1] = el; }}
            data-anim="from-bottom"
            className="text-base md:text-lg text-[#a5a5a5] font-normal leading-relaxed text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 px-2"
          >
            Choose a complete launch solution or build on Kvaornux technology with a setup tailored to your product, market and operating model.
          </p>

          {/* Big Cards Horizontal Slider (Desktop + Mobile) */}
          <div className="mb-12 md:mb-16 w-full overflow-visible relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView="auto"
              grabCursor={true}
              loop={false}
              breakpoints={{
                768: {
                  spaceBetween: 28,
                },
              }}
              style={{ overflow: 'visible' }}
            >
              {solutionsData.map((solution, index) => (
                <SwiperSlide
                  key={solution.id}
                  style={{ width: 'auto', height: 'auto', overflow: 'visible' }}
                >
                  <div
                    ref={(el) => { if (el) elementsRef.current[2 + index] = el; }}
                    data-anim="from-bottom"
                    data-anim-delay={index + 1}
                    className="w-[84vw] sm:w-[400px] md:w-[440px] lg:w-[470px] h-full flex flex-col"
                  >
                    <Link href={solution.ctaHref} className="sol-card flex-grow">
                      {/* 3D Crystal Sculpture */}
                      <div className="sol-card-img">
                        <img src={solution.image} alt={solution.alt} width={420} height={420} />
                      </div>

                      {/* Card Body + Frosted Glass Panel */}
                      <div className="sol-card-inner">
                        <div className="sol-card-content">
                          <h3 className="text-white text-2xl lg:text-3xl font-bold leading-snug text-left">
                            {solution.title}
                          </h3>

                          <p className="text-white/75 text-sm md:text-base font-normal leading-relaxed text-left flex-grow">
                            {solution.description}
                          </p>

                          <div className="flex flex-wrap gap-2.5 pt-2">
                            {solution.badges.map((badge) => (
                              <span key={badge} className="sol-pill">
                                <span className="w-4 h-4 rounded-full border border-[#00ebaa] flex items-center justify-center shrink-0">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ebaa]" />
                                </span>
                                <span>{badge}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Left Arrow */}
            <button
              onClick={() => {
                if (swiperRef.current) swiperRef.current.slidePrev();
              }}
              aria-label="Previous solution"
              className="nav-button absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20"
              style={{
                width: '2.8rem',
                minWidth: '2.8rem',
                height: '2.8rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                boxShadow: '0 -3px 4px 0 rgba(6,10,13,0.26) inset, 0 2px 2.8px 0 rgba(255,255,255,0.13) inset',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => {
                if (swiperRef.current) swiperRef.current.slideNext();
              }}
              aria-label="Next solution"
              className="nav-button absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20"
              style={{
                width: '2.8rem',
                minWidth: '2.8rem',
                height: '2.8rem',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                boxShadow: '0 -3px 4px 0 rgba(6,10,13,0.26) inset, 0 2px 2.8px 0 rgba(255,255,255,0.13) inset',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Button */}
          <div
            ref={(el) => { if (el) elementsRef.current[2 + solutionsData.length] = el; }}
            data-anim="from-bottom"
            className="flex justify-center"
          >
            <Link
              href="/solutions"
              className="btn-main overflow-hidden"
              style={{
                background: 'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                boxShadow: '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
                color: '#04160f',
              }}
            >
              <span>Explore All Solutions</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}