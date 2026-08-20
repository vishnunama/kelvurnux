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

export default function SolutionsSection() {
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
    title: 'Scalable platform engines',
    description:
      'High-performance backend systems with smooth user experience, mobile-first design, and optimized conversion flows for digital platforms.'
  },
  {
    id: 2,
    icon: Palette,
    title: 'Branding & Content Management',
    description:
      'Full control over design system including UI, layouts, content, and SEO with a flexible CMS for managing pages and updates.'
  },
  {
    id: 3,
    icon: Zap,
    title: 'Content & API Integration',
    description:
      'Connect with multiple third-party providers and manage large content libraries through a centralized integration system.'
  },
  {
    id: 4,
    icon: Wallet,
    title: 'Payments, Verification & Security',
    description:
      'Secure payment infrastructure with global support, identity verification workflows, fraud prevention, and compliance tools.'
  },
  {
    id: 5,
    icon: Gift,
    title: 'Engagement & Reward Systems',
    description:
      'Built-in engagement tools like rewards, promotions, events, and loyalty systems to improve user retention.'
  },
  
  {
    id: 7,
    icon: TrendingUp,
    title: 'Analytics & Reporting',
    description:
      'Real-time analytics dashboard for tracking users, performance, engagement, and business growth metrics.'
  },
  {
    id: 8,
    icon: HandshakeIcon,
    title: 'Dedicated Support',
    description:
      '24/7 technical support, onboarding assistance, and continuous system updates for long-term stability.'
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
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
  >
    All-in-one resources to accelerate your development projects
  </h2>

  <p 
    ref={(el) => { elementsRef.current[1] = el; }}
    data-anim="from-bottom"
    data-anim-delay="1"
    className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-300/90 leading-relaxed font-light"
  >
    A complete suite of development tools, APIs, and infrastructure designed to help you build, deploy, and scale modern digital applications with speed and efficiency.
  </p>
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
                    className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 md:p-7 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg sm:rounded-2xl hover:border-cyan-500/40 transition-all group"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-cyan-500/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-gray-300/90 font-light">
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