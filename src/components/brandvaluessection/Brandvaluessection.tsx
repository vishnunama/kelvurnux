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
    label: 'API Integrations & Providers',
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
    label: 'Games Integrated',
  },
  {
    id: 5,
    count: 24,
    suffix: '/7',
    label: 'Support & Maintenance',
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

  .brand-value {
    transition: background 0.3s ease-in-out;
  }

  .brand-value:hover {
    background: radial-gradient(114.85% 105.23% at 87.17% -18.95%, rgba(0, 235, 170, 0.25) 0, rgba(10, 20, 26, 0) 69.85%), radial-gradient(84.91% 94.78% at 69.5% 94.35%, #0a1c20 0, #0a141a 82.26%);
  }

  .brand-values-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
  }

  .brand-value {
    width: calc(50% - 0.25rem);
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .brand-values-grid {
      gap: 1rem;
      padding: 0 2rem;
    }

    .brand-value {
      width: calc(33.333% - 0.67rem);
      flex-basis: calc(33.333% - 0.67rem);
    }

    .brand-value:nth-child(4),
    .brand-value:nth-child(5) {
      width: calc(33.333% - 0.67rem);
      flex-basis: calc(33.333% - 0.67rem);
    }
  }

  @media (min-width: 1024px) {
    .brand-values-grid {
      gap: 1.2rem;
      max-width: 1200px;
      padding: 0 2rem;
    }

    .brand-value {
      width: calc(33.333% - 0.8rem);
      flex-basis: calc(33.333% - 0.8rem);
    }

    .brand-value:nth-child(4),
    .brand-value:nth-child(5) {
      width: calc(33.333% - 0.8rem);
      flex-basis: calc(33.333% - 0.8rem);
    }
  }
`;

export default function BrandValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [displayCounts, setDisplayCounts] = useState<number[]>(brandValues.map(() => 0));

  useEffect(() => {
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
        className="relative overflow-hidden py-9 md:py-12 lg:py-20 bg-[#0b0b0f]"
      >
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

        <div className="relative z-10 max-w-7xl mx-auto px-3 md:px-12">
          {/* Title */}
          <div
            ref={(el) => {
              if (el) elementsRef.current[0] = el;
            }}
            data-anim="from-bottom"
            className="text-center mb-3 md:mb-8"
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
              What's behind the Kelvurnux brand?
            </h2>
          </div>

       

          {/* Description */}
          <div
            ref={(el) => {
              if (el) elementsRef.current[1] = el;
            }}
            data-anim="from-bottom"
            className="text-center mb-8 md:mb-16 lg:mb-20"
          >
            <p
              className="text-base sm:text-base md:text-lg max-w-2xl mx-auto"
              style={{
                color: '#a5a5a5',
              }}
            >
              Keeping pace with the times while honoring time-tested solutions.
            </p>
          </div>

          {/* Brand Values Grid */}
          <div className="brand-values-grid max-w-6xl mx-auto">
            {brandValues.map((value, index) => (
              <div
                key={value.id}
                ref={(el) => {
                  if (el) elementsRef.current[2 + index] = el;
                }}
                data-anim="from-bottom"
                data-anim-delay={index + 1}
                className="brand-value"
                style={{
                  borderRadius: 'clamp(1rem, 2vw, 2.4rem)',
                  paddingTop: 'clamp(1.2rem, 3vw, 2rem)',
                  paddingBottom: 'clamp(1.2rem, 3vw, 2rem)',
                  paddingLeft: 'clamp(1rem, 2vw, 1.8rem)',
                  paddingRight: 'clamp(1rem, 2vw, 1.8rem)',
                  border: '1px solid rgba(0, 235, 170, 0.3)',
                  background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.25) 10.25%, rgba(0, 235, 170, 0.05) 99.99%), #0a141a',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: 'clamp(90px, 20vw, 160px)',
                }}
              >
                {/* Count */}
                <div
                  className="mb-1"
                  style={{
                    marginBottom: 'clamp(0.5rem, 2vw, 0.8rem)',
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    color: '#fff',
                  }}
                >
                  <span className="sr-only">{value.count}{value.suffix}</span>
                  <span>{displayCounts[index].toFixed(value.count === 99.9 ? 1 : 0)}</span>
                  <span>{value.suffix}</span>
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: 'clamp(0.85rem, 2.2vw, 1.1rem)',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    color: '#a5a5a5',
                  }}
                >
                  {value.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}