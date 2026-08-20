'use client';

import { useRef, useEffect } from 'react';
import {
  Gamepad2,
  Palette,
  Zap,
  Wallet,
  Gift,
  BarChart3,
  TrendingUp,
  HandshakeIcon
} from 'lucide-react';

export default function TurnkeySolutionsSection() {
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

const solutions = [
  {
    id: 1,
    icon: Gamepad2,
    title: 'Platform & System Engines',
    description: 'Robust and scalable backend systems with seamless user experience, mobile-first design, and optimized workflows for high performance.'
  },
  {
    id: 2,
    icon: Palette,
    title: 'Branding & CMS',
    description: 'Complete design flexibility — logos, colors, layouts, and content — powered by a powerful CMS to manage pages, content, and SEO easily.'
  },
  {
    id: 3,
    icon: Zap,
    title: 'API & Content Integration',
    description: 'Easily integrate third-party APIs and dynamic content into your platform with a flexible and scalable architecture.'
  },
  {
    id: 4,
    icon: Wallet,
    title: 'Payments & Security Systems',
    description: 'Secure payment integrations with global coverage, user verification systems, fraud protection, and transaction monitoring tools.'
  },
  {
    id: 5,
    icon: Gift,
    title: 'User Engagement Tools',
    description: 'Built-in engagement features like rewards, campaigns, loyalty systems, and interactive tools to improve user retention.'
  },
  {
    id: 6,
    icon: BarChart3,
    title: 'Marketing & CRM',
    description: 'Advanced user segmentation, automated workflows, and multi-channel communication tools to manage and grow your user base.'
  },
  {
    id: 7,
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards with insights on user activity, performance metrics, and platform growth analytics.'
  },
  {
    id: 8,
    icon: HandshakeIcon,
    title: 'Technical Support',
    description: 'Dedicated onboarding, continuous updates, and 24/7 technical support to ensure smooth and long-term platform growth.'
  }
];

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

        [data-anim-delay="1"].visible { animation-delay: 0.1s; }
        [data-anim-delay="2"].visible { animation-delay: 0.2s; }
        [data-anim-delay="3"].visible { animation-delay: 0.3s; }
        [data-anim-delay="4"].visible { animation-delay: 0.4s; }
        [data-anim-delay="5"].visible { animation-delay: 0.5s; }
      `}</style>

      <section id="solutions" className="relative bg-black">
        <div className="container mx-auto px-4 pt-8 sm:pt-12 lg:px-5 max-w-[1310px]">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 items-start">
            
            {/* Left Sticky Section */}
            <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
              <h2 
                ref={(el) => { elementsRef.current[0] = el; }}
                data-anim="from-top"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
All-in-one resources to launch your software development platform fast              </h2>
              <p 
                ref={(el) => { elementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed"
              >
Complete suite of tools and services designed to accelerate your digital platform development with scalable, secure, and high-performance solutions.              </p>

              <div
                ref={(el) => { elementsRef.current[10] = el; }}
                data-anim="from-bottom"
                data-anim-delay="2"
              >
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    outline: '0',
                    width: 'fit-content',
                    borderRadius: '1.6rem',
                    padding: '0.4rem 3rem',
                    minHeight: '4rem',
                    backgroundColor: '#00ebaa',
                    cursor: 'pointer',
                    color: '#000',
                    fontWeight: '700',
                  }}
                >
                  <span className="relative z-10 text-sm sm:text-base font-bold text-black">Choose this solution</span>
                </button>
              </div>
            </div>

            {/* Right Solutions Grid */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={solution.id}
                    ref={(el) => { elementsRef.current[2 + index] = el; }}
                    data-anim="fade-in"
                    data-anim-delay={String(index)}
                    className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 md:p-7 bg-gradient-to-br from-gray-900 to-black border border-[#00ebaa]/40 rounded-lg sm:rounded-2xl transition-all group"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-[#00ebaa]/15 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-[#00ebaa]" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-400">
                        {solution.description}
                      </p>
                    </div>
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