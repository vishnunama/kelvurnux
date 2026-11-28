'use client';

import { useState, useRef, useEffect } from 'react';

const brandValues = [
  {
    id: 1,
    count: 50,
    suffix: '+',
    label: 'iGaming Projects Delivered',
  },
  {
    id: 2,
    count: 150,
    suffix: '+',
    label: 'Provider & API Integrations',
  },
  {
    id: 3,
    count: 99.9,
    suffix: '%',
    label: 'Platform Uptime',
  },
  {
    id: 4,
    count: 20,
    suffix: 'K+',
    label: 'Games Available',
  },
  {
    id: 5,
    count: 50,
    suffix: '+',
    label: 'Payment Gateways',
  },
  {
    id: 6,
    count: 24,
    suffix: '/7',
    label: 'Technical Support',
  },
];

const styles = `
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

  @keyframes count-up {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  [data-anim] {
    opacity: 0;
  }

  [data-anim="from-bottom"].visible {
    animation: from-bottom 0.5s ease-out forwards;
  }

  [data-anim="count-up"].visible {
    animation: count-up 0.5s ease-out forwards;
  }

  [data-anim-delay="1"].visible { animation-delay: 0.05s; }
  [data-anim-delay="2"].visible { animation-delay: 0.1s; }
  [data-anim-delay="3"].visible { animation-delay: 0.15s; }
  [data-anim-delay="4"].visible { animation-delay: 0.2s; }
  [data-anim-delay="5"].visible { animation-delay: 0.25s; }
  [data-anim-delay="6"].visible { animation-delay: 0.3s; }

  .brand-values-card {
    overflow: hidden;
    width: 100%;
    border: none;
    border-radius: 36px 36px 0 0;
    background: linear-gradient(180deg, rgba(14, 46, 41, 0.48) 0%, rgba(10, 34, 31, 0.58) 45%, rgba(10, 34, 31, 0.68) 65%, rgba(9, 25, 24, 0.35) 82%, #0b0b0f 92%, #0b0b0f 100%);
    position: relative;
  }

  @media (min-width: 768px) {
    .brand-values-card {
      border-radius: 64px 64px 0 0;
    }
  }

  .numbers-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .numbers-grid-cell {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    gap: 0.5rem;
    padding: 3.5rem 2.5rem;
    transition: background 0.3s ease;
  }

  .numbers-grid-cell:hover {
    background: radial-gradient(circle at center, rgba(0, 235, 170, 0.06) 0%, transparent 75%);
  }

  .numbers-grid-value {
    letter-spacing: -0.02em;
    text-align: center;
    width: 100%;
    font-size: clamp(2.5rem, 4.5vw, 4.2rem);
    font-weight: 700;
    line-height: 1;
    isolation: isolate;
    display: inline-block;
    position: relative;
  }

  .numbers-grid-value::before {
    content: attr(data-text);
    text-align: inherit;
    z-index: -1;
    -webkit-text-fill-color: transparent;
    color: transparent;
    position: absolute;
    -webkit-text-stroke: 1.5px rgba(0, 235, 170, 0.45);
    inset: 0;
    pointer-events: none;
  }

  .numbers-grid-value > span {
    background: linear-gradient(96deg, rgba(0, 235, 170, 0.92) 2.34%, rgba(0, 168, 120, 0.72) 98.88%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .numbers-grid-name {
    text-align: right;
    letter-spacing: -0.02em;
    color: #e2e8f0;
    font-size: clamp(0.95rem, 1.35vw, 1.2rem);
    font-weight: 400;
    line-height: 1.25;
  }

  /* Desktop 3-column borders & cross markers */
  @media (min-width: 841px) {
    .numbers-grid-cell:nth-child(3n) {
      border-right: none;
    }

    .numbers-grid-cell:nth-last-child(-n+3) {
      border-bottom: none;
    }

    .numbers-grid-cell:not(:nth-child(3n)):not(:nth-last-child(-n+3))::after {
      content: "+";
      position: absolute;
      bottom: -0.65rem;
      right: -0.45rem;
      z-index: 2;
      color: rgba(0, 235, 170, 0.65);
      font-size: 1.15rem;
      font-weight: 300;
      line-height: 1;
      pointer-events: none;
    }
  }

  /* Mobile / Tablet 2-column borders & cross markers */
  @media (max-width: 840px) {
    .numbers-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .numbers-grid-cell {
      padding: 2.25rem 1.25rem;
      min-height: 10.5rem;
      gap: 0.85rem;
    }

    .numbers-grid-cell:nth-child(2n) {
      border-right: none;
    }

    .numbers-grid-cell:nth-last-child(-n+2) {
      border-bottom: none;
    }

    .numbers-grid-cell:nth-child(odd):not(:nth-last-child(-n+2))::after {
      content: "+";
      position: absolute;
      bottom: -0.65rem;
      right: -0.45rem;
      z-index: 2;
      color: rgba(0, 235, 170, 0.65);
      font-size: 1.15rem;
      font-weight: 300;
      line-height: 1;
      pointer-events: none;
    }
  }

  @media (max-width: 600px) {
    .numbers-grid-cell {
      padding: 2rem 1rem;
      min-height: 9.5rem;
    }

    .numbers-grid-value {
      font-size: 2.65rem;
      line-height: 0.9;
    }

    .numbers-grid-name {
      font-size: 0.9rem;
      line-height: 1.2;
    }
  }
`;

export default function BrandValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [displayCounts, setDisplayCounts] = useState<number[]>(brandValues.map(() => 0));
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const elements = elementsRef.current.filter((el): el is HTMLElement => el !== null);
    let animationStarted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('visible');

            if (!animationStarted) {
              animationStarted = true;

              // Start counter animation (throttled to 25 FPS)
              const duration = 1200;
              const startTime = Date.now();
              let lastUpdate = 0;

              const animateCounter = () => {
                const now = Date.now();
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);

                if (now - lastUpdate >= 40 || progress >= 1) {
                  lastUpdate = now;
                  const newCounts = brandValues.map((value) => {
                    return Math.floor(value.count * progress * 100) / 100;
                  });
                  setDisplayCounts(newCounts);
                }

                if (progress < 1) {
                  requestAnimationFrame(animateCounter);
                }
              };

              animateCounter();
            }
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
      <section
        ref={sectionRef}
        className="relative overflow-hidden py-14 sm:py-18 md:py-24 bg-[#0b0b0f]"
      >
        {/* Background Image */}
        <div className="section-bg absolute top-0 inset-x-0 h-[450px] sm:h-[550px] md:h-[650px] pointer-events-none z-0 overflow-hidden">
          <img
            width="1440"
            loading="lazy"
            alt=""
            src="/assets/brand-values-bg.webp"
            className="image-cover is-live-casino w-full h-full object-cover object-top"
          />
          {/* Gradient: Top fades from #0b0b0f to match upper section, middle stays clear, bottom fades into #0b0b0f */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, #0b0b0f 0%, rgba(11,11,15,0) 18%, rgba(11,11,15,0) 45%, rgba(11,11,15,0.85) 75%, #0b0b0f 100%)',
            }}
          />
        </div>

        {/* Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="134.4" height="106"%3E%3Crect width="134.4" height="106" fill="%23ffffff" opacity="0"/%3E%3Cpath d="M 0 0 L 134.4 0 M 0 53 L 134.4 53 M 0 106 L 134.4 106" stroke="%23ffffff" stroke-width="1" opacity="0.1"/%3E%3Cpath d="M 0 0 L 0 106 M 67.2 0 L 67.2 106 M 134.4 0 L 134.4 106" stroke="%23ffffff" stroke-width="1" opacity="0.1"/%3E%3C/svg%3E)',
            backgroundSize: '134.4px 106px',
            backgroundRepeat: 'repeat',
            backgroundPosition: '50% 50%',
            maskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskSize: 'cover',
            WebkitMaskSize: 'cover',
          }}
        />

        <div className="brand-values-card relative z-10 w-full mt-44 sm:mt-52 md:mt-60 lg:mt-64 pt-10 sm:pt-14 md:pt-16 pb-4 sm:pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            {/* Title */}
          <div
            ref={(el) => {
              if (el) elementsRef.current[0] = el;
            }}
            data-anim="from-bottom"
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto text-center"
              style={{
                background: 'linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Built on Real iGaming Experience
            </h2>
          </div>

          {/* Numbers Grid */}
          <div className="numbers-grid">
            {brandValues.map((value, index) => {
              const formattedValue = isMounted
                ? `${displayCounts[index].toFixed(value.count === 99.9 ? 1 : 0)}${value.suffix}`
                : `${value.count}${value.suffix}`;
              const fullText = `${value.count}${value.suffix}`;

              return (
                <div
                  key={value.id}
                  ref={(el) => {
                    if (el) elementsRef.current[2 + index] = el;
                  }}
                  data-anim="from-bottom"
                  data-anim-delay={index + 1}
                  className="numbers-grid-cell"
                >
                  <span
                    className="numbers-grid-value"
                    data-text={formattedValue}
                  >
                    <span className={isMounted ? 'sr-only' : ''}>
                      {fullText}
                    </span>
                    {isMounted && (
                      <span aria-hidden="true">
                        {formattedValue}
                      </span>
                    )}
                  </span>

                  <span className="numbers-grid-name">
                    {value.label}
                  </span>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </section>
    </>
  );
}