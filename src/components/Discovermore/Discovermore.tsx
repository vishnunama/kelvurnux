'use client';

import { 
  Layout, 
  Key, 
  Gamepad2, 
  Trophy, 
  Handshake, 
  Sparkles, 
  BarChart3, 
  Zap
} from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function DiscoverMore() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const swiperRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const discoverItems = [
    {
      id: 1,
      title: 'White Label',
      description: 'A ready-to-launch iGaming solution with your branding, fully managed infrastructure, and minimal operational load.',
      icon: Layout,
      link: 'https://kanggiten.com/white-label-casino-platform/'
    },
    {
      id: 2,
      title: 'Turnkey',
      description: 'A full-access modular iGaming platform designed for total business control, scalability, and long-term growth.',
      icon: Key,
      link: 'https://kanggiten.com/turnkey-igaming-platform/'
    },
    {
      id: 3,
      title: 'Casino Platform',
      description: 'Quick access to the casino world through a powerful modular platform.',
      icon: Gamepad2,
      link: 'https://kanggiten.com/online-casino-platform/'
    },
    {
      id: 4,
      title: 'Sports Betting Platform',
      description: 'A fully equipped, competitive sportsbook tailored for dynamic betting experiences in a fast-paced market.',
      icon: Trophy,
      link: 'https://kanggiten.com/best-sports-betting-platform/'
    },
    {
      id: 5,
      title: 'Affiliate Platform',
      description: 'A premium white-label affiliate platform offering a wide range of tools to easily manage promo campaigns, track performance, and analyze results in detail.',
      icon: Handshake,
      link: 'https://kanggiten.com/igaming-affiliate-platform/'
    },
    {
      id: 6,
      title: 'CRM and Marketing System',
      description: 'A complete solution with a strong emphasis on behavior-based marketing for online casinos and betting operators.',
      icon: Sparkles,
      link: 'https://kanggiten.com/igaming-crm/'
    },
    {
      id: 7,
      title: 'Analytics',
      description: 'Advanced analytics tools for understanding player activity, traffic sources, campaign performance, and more.',
      icon: BarChart3,
      link: 'https://kanggiten.com/igaming-analytics/'
    },
    {
      id: 8,
      title: 'Game Aggregator',
      description: 'The game aggregator offers a full suite of tools and features that guarantees for successfully operating and maintaining an online casino website.',
      icon: Zap,
      link: 'https://kanggiten.com/casino-games-aggregator/'
    }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes from-bottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        [data-anim] { opacity: 0; }
        [data-anim="from-bottom"].visible { 
          animation: from-bottom 0.6s ease-out forwards; 
        }

        [data-anim-delay="1"].visible { animation-delay: 0.1s; }
        [data-anim-delay="2"].visible { animation-delay: 0.2s; }
        [data-anim-delay="3"].visible { animation-delay: 0.3s; }
        [data-anim-delay="4"].visible { animation-delay: 0.4s; }
        [data-anim-delay="5"].visible { animation-delay: 0.5s; }
        [data-anim-delay="6"].visible { animation-delay: 0.6s; }
        [data-anim-delay="7"].visible { animation-delay: 0.7s; }
        [data-anim-delay="8"].visible { animation-delay: 0.8s; }

        .discover-section {
          position: relative;
          padding: 6.4rem 2rem 10rem;
          background: radial-gradient(
            100% 70% at 48.33% 99.05%, 
            rgba(12, 124, 149, 0.2) 0%, 
            rgba(0, 69, 85, 0.2) 25.39%, 
            rgba(11, 11, 15, 0.2) 73.2%
          );
        }

        .discover-container {
          max-width: 124rem;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

      

        .section-title {
          font-size: clamp(2rem, 5vw, 3.6rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4.8rem;
          text-align: center;
          line-height: 1.2;
        }

        .more-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.2rem;
          width: 100%;
        }

        .more-item:nth-child(1),
        .more-item:nth-child(2),
        .more-item:nth-child(3) {
          grid-column: span 2;
        }

        .more-item:nth-child(4),
        .more-item:nth-child(5) {
          grid-column: span 3;
        }

        .more-item:nth-child(6),
        .more-item:nth-child(7),
        .more-item:nth-child(8) {
          grid-column: span 2;
        }

        .more-item {
          margin: 0;
          padding: 2rem;
          border-radius: 2rem;
          color: #ffffff;
          text-decoration: none;
          position: relative;
          background: linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10.25%, rgba(0, 235, 170, 0.03) 99.99%), #0a141a;
          border: 1px solid rgba(0, 235, 170, 0.3);
          display: flex;
          flex-direction: column;
          height: auto;
          overflow: hidden;
          cursor: pointer;
        }

        .more-item:hover {
          border-color: #00ebaa;
        }

        .more-item-icon {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: rgba(0, 235, 170, 0.15);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.2rem;
          transition: all 0.3s ease-in-out;
          border: 1px solid rgba(0, 235, 170, 0.4);
          flex-shrink: 0;
        }

        .more-item:hover .more-item-icon {
          background: rgba(0, 235, 170, 0.25);
          border-color: #00ebaa;
        }

        .more-item-icon svg {
          width: 1.8rem;
          height: 1.8rem;
          color: #00ebaa;
        }

        .more-item-title {
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.8rem;
          color: #ffffff;
        }

        .more-item-text {
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.5;
          color: #b3b3c4;
          transition: color 0.3s ease-in-out;
          margin: 0;
        }

        .more-item:hover .more-item-text {
          color: #d1d5e8;
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

        @media (max-width: 840px) {
          .more-grid {
            display: none;
          }

          .discover-section {
            padding: 4.8rem 0 8rem;
          }

          .discover-container {
            padding: 0;
          }

          .section-title {
            margin-bottom: 3.2rem;
            font-size: 2rem;
            padding: 0 1rem;
          }

         

          .swiper {
            overflow: visible;
          }

          .more-item {
            width: calc(100vw - 5rem) !important;
            min-width: calc(100vw - 5rem) !important;
            flex-shrink: 0;
            margin: 0;
            padding: 2rem;
          }

          .more-item-icon {
            width: 3.2rem;
            height: 3.2rem;
            margin-bottom: 1rem;
          }

          .more-item-title {
            font-size: 1.2rem;
          }

          .more-item-text {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .more-item {
            width: calc(100vw - 5rem) !important;
            min-width: calc(100vw - 5rem) !important;
            padding: 2rem;
            min-height: 300px;
          }

          .more-item-icon {
            width: 3.2rem;
            height: 3.2rem;
            margin-bottom: 1rem;
          }

          .more-item-title {
            font-size: 1.2rem;
          }

          .more-item-text {
            font-size: 0.9rem;
          }

          .section-title {
            padding: 0 1rem;
          }
        }

        @media (max-width: 640px) {
          .discover-section {
            padding: 3.2rem 0 6rem;
          }

          .more-item {
            width: calc(100vw - 4rem) !important;
            min-width: calc(100vw - 4rem) !important;
            padding: 1.6rem;
            min-height: 280px;
          }

          .more-item-icon {
            width: 3rem;
            height: 3rem;
            margin-bottom: 0.8rem;
          }

          .more-item-title {
            font-size: 1.1rem;
            margin-bottom: 0.6rem;
          }

          .more-item-text {
            font-size: 0.85rem;
          }

          .section-title {
            font-size: 1.75rem;
            margin-bottom: 2.4rem;
            padding: 0 1rem;
          }

          .nav-button {
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .discover-section {
            padding: 2.8rem 0 5rem;
          }

          .more-item {
            width: calc(100vw - 3.5rem) !important;
            min-width: calc(100vw - 3.5rem) !important;
            padding: 1.4rem;
            min-height: 260px;
          }

          .more-item-icon {
            width: 2.8rem;
            height: 2.8rem;
            margin-bottom: 0.7rem;
          }

          .more-item-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .more-item-text {
            font-size: 0.8rem;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .nav-button {
            width: 2.2rem;
            height: 2.2rem;
          }
        }
      `}</style>

      <section className="discover-section">

        <div className="discover-container">
          <h2 
            className="section-title"
            ref={(el) => { elementsRef.current[0] = el; }}
            data-anim="from-bottom"
          >
            Discover more
          </h2>

          {/* Desktop Grid */}
          <div className="more-grid">
            {discoverItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more-item"
                  ref={(el) => { elementsRef.current[index + 1] = el; }}
                  data-anim="from-bottom"
                  data-anim-delay={String((index % 8) + 1)}
                >
                  <div className="more-item-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="more-item-title">{item.title}</div>
                  <div className="more-item-text">{item.description}</div>
                </a>
              );
            })}
          </div>

          {/* Mobile Slider */}
          {isMobile && (
            <div className="mb-0 w-full overflow-hidden relative">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={20}
                slidesPerView="auto"
                centeredSlides={true}
                grabCursor={true}
                loop={false}
                style={{ overflow: 'visible', padding: '0' }}
              >
                {discoverItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <SwiperSlide key={item.id} style={{ width: 'auto', overflow: 'visible' }}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="more-item rounded-2xl py-5 px-6 relative flex flex-col gap-4 min-h-[280px] overflow-visible block"
                        style={{ width: 'calc(100vw - 5rem)', minWidth: 'calc(100vw - 5rem)' }}
                      >
                        <div className="more-item-icon">
                          <IconComponent size={24} />
                        </div>
                        <div className="more-item-title">{item.title}</div>
                        <div className="more-item-text">{item.description}</div>
                      </a>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Left Arrow */}
              <button
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.slidePrev();
                }}
                className="nav-button absolute left-4 top-1/2 -translate-y-1/2 z-20"
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
                className="nav-button absolute right-4 top-1/2 -translate-y-1/2 z-20"
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
          )}
        </div>
      </section>
    </>
  );
}