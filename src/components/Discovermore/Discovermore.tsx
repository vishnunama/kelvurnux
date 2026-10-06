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
import Link from 'next/link';
import { useRef, useEffect } from 'react';

export interface DiscoverItem {
  id: number;
  title: string;
  description: string;
  icon: any;
  link?: string;
  span?: number;
}

interface DiscoverMoreProps {
  customItems?: DiscoverItem[];
  customTitle?: string;
  customSubtitle?: string;
}

export default function DiscoverMore({ customItems, customTitle, customSubtitle }: DiscoverMoreProps) {
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
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const defaultDiscoverItems: DiscoverItem[] = [
    {
      id: 1,
      title: 'White Label',
      description: 'A ready-to-launch iGaming solution with your branding, fully managed infrastructure, and minimal operational load.',
      icon: Layout,
      link: '/white-label-casino-solutions',
      span: 2
    },
    {
      id: 2,
      title: 'Turnkey',
      description: 'A full-access modular iGaming platform designed for total business control, scalability, and long-term growth.',
      icon: Key,
      link: '/turnkey-casino-software-solutions',
      span: 2
    },
    {
      id: 3,
      title: 'Analytics',
      description: 'Advanced analytics tools for understanding player activity, traffic sources, campaign performance, and more.',
      icon: BarChart3,
      link: '/#contact-form-section',
      span: 2
    },
    {
      id: 4,
      title: 'Game Aggregator',
      description: 'The game aggregator offers a full suite of tools and features that guarantees for successfully operating and maintaining an online casino website.',
      icon: Zap,
      link: '/casino-aggregator-api-solution',
      span: 3
    },
    {
      id: 5,
      title: 'Affiliate Platform',
      description: 'A premium white-label affiliate platform offering a wide range of tools to easily manage promo campaigns, track performance, and analyze results in detail.',
      icon: Handshake,
      link: '/#contact-form-section',
      span: 3
    },
    {
      id: 6,
      title: 'CRM and Marketing system',
      description: 'A complete solution with a strong emphasis on behavior-based marketing for online casinos and betting operators.',
      icon: Sparkles,
      link: '/#contact-form-section',
      span: 2
    },
    {
      id: 7,
      title: 'Sports Betting Platform',
      description: 'A fully equipped, competitive sportsbook tailored for dynamic betting experiences in a fast-paced market.',
      icon: Trophy,
      link: '/turnkey-sportsbook-solutions',
      span: 2
    },
    {
      id: 8,
      title: 'Casino Platform',
      description: 'Quick access to the casino world through a powerful modular platform.',
      icon: Gamepad2,
      link: '/turnkey-casino-software-solutions',
      span: 2
    }
  ];

  const discoverItems = customItems || defaultDiscoverItems;

  return (
    <>
      <style jsx global>{`
        .discover-card-item {
          position: relative !important;
          background: linear-gradient(121deg, rgba(0, 235, 170, 0.08) 10.25%, rgba(0, 235, 170, 0.02) 99.99%), #0a141a !important;
          border-radius: 24px !important;
          border: 1px solid rgba(0, 235, 170, 0.2) !important;
          box-shadow: none !important;
          transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out !important;
        }
        .discover-card-item::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: 24px;
          background: linear-gradient(248.1deg, rgba(255, 157, 77, 0.35) 5.35%, rgba(0, 235, 170, 0) 45.02%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .discover-card-item:hover {
          background: linear-gradient(121deg, rgba(0, 235, 170, 0.16) 10.25%, rgba(0, 235, 170, 0.05) 99.99%), #0d1a22 !important;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 14.8px 0px, rgba(0, 235, 170, 0.25) 0px -2px 4.7px 0px inset !important;
          border-color: rgba(0, 235, 170, 0.45) !important;
        }
        .discover-card-item .icon-box {
          background-color: rgb(117, 146, 150) !important;
          border: none !important;
          box-shadow: none !important;
          transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out !important;
        }
        .discover-card-item .icon-box svg {
          color: #0b0b0f !important;
          transition: color 0.3s ease-in-out !important;
        }
        .discover-card-item:hover .icon-box {
          background-color: #00ebaa !important;
          box-shadow: none !important;
        }
        .discover-card-item:hover .icon-box svg {
          color: #0b0b0f !important;
        }
      `}</style>

      <section 
        className="w-full relative py-16 md:py-24"
        style={{
          background: 'radial-gradient(100% 70% at 48.33% 99.05%, rgba(0, 235, 170, 0.12) 0%, rgba(0, 80, 60, 0.12) 25.39%, rgba(11, 11, 15, 0.2) 73.2%)'
        }}
      >
        <div className="max-w-[1240px] w-full mx-auto px-5 relative z-10 box-border">
          <div className="text-center mb-8 md:mb-12">
            <h2 
              className={`text-center font-bold text-3xl sm:text-4xl md:text-5xl ${customSubtitle ? 'mb-3 md:mb-4' : ''}`}
              style={{
                color: '#ffffff',
                background: 'linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%) text, rgb(255, 255, 255)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              ref={(el) => { elementsRef.current[0] = el; }}
            >
              {customTitle || 'Discover more'}
            </h2>
            {customSubtitle && (
              <p className="text-[#b3b3c4] text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-normal leading-relaxed m-0">
                {customSubtitle}
              </p>
            )}
          </div>
          
          {/* DESKTOP & TABLET GRID */}
          <div className="hidden md:grid grid-cols-6 gap-4 w-full">
            {discoverItems.map((item, index) => {
              const IconComponent = item.icon;
              const cardInner = (
                <>
                  <div className="icon-box w-12 h-12 rounded-full flex items-center justify-center mb-5 flex-shrink-0">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="card-desc text-[15px] leading-relaxed text-[#b3b3c4] m-0 transition-colors">
                    {item.description}
                  </p>
                </>
              );

              return item.link ? (
                <Link
                  key={item.id}
                  href={item.link}
                  className="discover-card-item rounded-[24px] p-8 flex flex-col relative text-decoration-none group cursor-pointer"
                  style={{
                    gridColumn: `span ${item.span}`,
                    minHeight: '220px'
                  }}
                  ref={(el) => { elementsRef.current[index + 1] = el; }}
                >
                  {cardInner}
                </Link>
              ) : (
                <div
                  key={item.id}
                  className="discover-card-item rounded-[24px] p-8 flex flex-col relative text-decoration-none group"
                  style={{
                    gridColumn: `span ${item.span}`,
                    minHeight: '220px'
                  }}
                  ref={(el) => { elementsRef.current[index + 1] = el; }}
                >
                  {cardInner}
                </div>
              );
            })}
          </div>

          {/* MOBILE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-4 w-full">
            {discoverItems.map((item) => {
              const IconComponent = item.icon;
              const mobileInner = (
                <>
                  <div className="icon-box w-11 h-11 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="card-desc text-sm leading-relaxed text-[#b3b3c4] m-0 transition-colors">
                    {item.description}
                  </p>
                </>
              );

              return item.link ? (
                <Link
                  key={`mob-${item.id}`}
                  href={item.link}
                  className="discover-card-item rounded-[20px] p-6 flex flex-col relative text-decoration-none"
                >
                  {mobileInner}
                </Link>
              ) : (
                <div
                  key={`mob-${item.id}`}
                  className="discover-card-item rounded-[20px] p-6 flex flex-col relative text-decoration-none"
                >
                  {mobileInner}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}