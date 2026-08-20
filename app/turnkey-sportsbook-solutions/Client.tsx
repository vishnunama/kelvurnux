'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Crown, 
  Gamepad2, 
  Rocket, 
  ShieldCheck, 
  LayoutDashboard,
  HandshakeIcon,
  TrendingUp,
  Palette,
  Settings
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';

export default function TurnkeySportsbookSolutions() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Full platform ownership');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  // Contact form scroll handler
  const handleScrollToContact = () => {
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const iconMap = {
    crown: Crown,
    'gamepad-2': Gamepad2,
    rocket: Rocket,
    'shield-check': ShieldCheck,
    'layout-dashboard': LayoutDashboard,
  };

  const tabs = [
    {
      id: 'full-platform',
      label: 'Full platform ownership',
      icon: 'crown' as const,
      title: 'Full Sportsbook Platform Ownership',
      description: 'Take full control of your turnkey sportsbook with your own brand. Manage players, betting markets, payments, risk settings, and platform operations through a flexible sports betting software solution.',
      image: '/assets/features/tab-turnkey-1.webp'
    },
    {
      id: 'game-apis',
      label: 'Sportsbook API Integration',
      icon: 'gamepad-2' as const,
      title: 'Sportsbook API Integration',
      description: 'Connect your sportsbook platform with sports data feeds, odds providers, live betting APIs, and betting market sources to deliver real-time sports betting experiences.',
      image: '/assets/features/tab-turnkey-2.webp'
    },
    {
      id: 'compliance',
      label: 'Security & User Protection Tools',
      icon: 'shield-check' as const,
      title: 'Security & User Protection Tools',
      description: 'Keep your sportsbook software secure with KYC verification, fraud prevention, user protection tools, responsible gaming controls, and performance monitoring systems.',
      image: '/assets/features/tab-turnkey-4.webp'
    },
    {
      id: 'backoffice',
      label: 'Back Office',
      icon: 'layout-dashboard' as const,
      title: 'Sportsbook Back Office Dashboard',
      description: 'Manage users, bets, transactions, odds settings, reports, risk controls, and sportsbook operations from one advanced back-office dashboard.',
      image: '/assets/features/tab-turnkey-5.webp'
    }
  ];

  const solutions = [
  {
    id: 1,
    icon: HandshakeIcon,
    title: 'End-to-End Sportsbook Platform Setup',
    description:
      'Complete turnkey sportsbook software setup including frontend, backend, admin panel, sportsbook API integration, payment setup, and full system configuration for your betting business.'
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Scalable Sportsbook Infrastructure',
    description:
      'High-performance sportsbook infrastructure built to handle growing users, live betting activity, odds updates, transactions, and online betting platform traffic.'
  },
  {
    id: 3,
    icon: Palette,
    title: 'Branding & Customization',
    description:
      'Customize your white label sportsbook with your own logo, colors, layouts, user interface, betting features, and brand identity for a professional betting platform.'
  },
  {
    id: 4,
    icon: Settings,
    title: 'Sportsbook Back Office & Control Panel',
    description:
      'Control users, bets, payments, reports, odds management, risk settings, and sportsbook software operations with a powerful admin dashboard.'
  }
];

  const activeTabData = tabs.find(tab => tab.label === activeTab);
  const solutionsElementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const elements = solutionsElementsRef.current.filter((el): el is HTMLElement => el !== null);

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

  const handleTabClick = (tabLabel: string): void => {
    setActiveTab(tabLabel);
    setTimeout(() => {
      if (activeTabRef.current && tabsContainerRef.current) {
        const container = tabsContainerRef.current;
        const button = activeTabRef.current;
        const containerCenter = container.clientWidth / 2;
        const buttonCenter = button.offsetLeft + button.clientWidth / 2;
        const scrollLeft = buttonCenter - containerCenter;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }, 0);
  };

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

        @keyframes imageSlideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes contentSlideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
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

        .animate-in {
          animation: contentSlideIn 0.6s ease-out;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Hero Section */}
      <section 
        ref={sectionRef}
        className="relative pt-32 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(8,89,106,0.2) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          {/* Main Title - SEO Optimized */}
          <div className="text-center mb-3">
            <h1 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Turnkey Sportsbook Solutions
            </h1>
          </div>

          {/* Subtitle/Description - SEO Keywords Added */}
          <div className="max-w-4xl mx-auto mb-9">
            <p 
              className="text-base sm:text-lg text-gray-300/90 leading-relaxed text-center font-light"
              ref={(el) => { elementsRef.current[1] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              Launch your turnkey sportsbook platform with sports betting software, sportsbook API integration, live betting features, secure payment solutions, KYC verification, risk management tools, advanced back-office control, and white label sportsbook support for online betting operators.
            </p>
          </div>

        </div>
      </section>

      {/* Tab Features Section */}
      <section id="solutions" className="relative from-black via-gray-900 to-black">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">

          {/* Tab Buttons */}
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto pb-3 mb-8 sm:mb-10 md:mb-12 lg:mb-14 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap">
              {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];
                return (
                  <button
                    key={tab.id}
                    ref={activeTab === tab.label ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab.label
                        ? 'bg-white text-black border-2 border-white'
                        : 'bg-gray-800/70 text-white/70 border-2 border-transparent hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {IconComponent && <IconComponent size={16} className="hidden sm:block" />}
                    <span className="leading-none">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          {activeTabData && (
            <div key={activeTabData.id} className="animate-in">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-7 lg:gap-8 items-stretch">

                {/* Image Card — first on mobile, right on desktop */}
                <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
                  <div className="relative w-full aspect-video lg:aspect-auto lg:h-full rounded-xl sm:rounded-2xl md:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-xl sm:rounded-2xl blur-3xl animate-pulse"></div>
                    <img
                      src={activeTabData.image}
                      alt={getImageAlt(activeTabData.id)}
                      className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                      style={{ animation: 'imageSlideIn 0.6s ease-out' }}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg=='
                      }}
                    />
                  </div>
                </div>

                {/* Info Card — second on mobile, left on desktop */}
                <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-[280px] lg:h-auto">
                  <div
                    className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center"
                    style={{
                      background: 'radial-gradient(187.98% 100% at 48.7% 0, #0f4552 0, #0a2a32 16.35%, #0c1921 70.3%)',
                    }}
                  >
                    <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-left">
                      {activeTabData.title}
                    </h3>
                    <p className="text-base sm:text-base md:text-base lg:text-lg text-gray-300/90 leading-relaxed font-light text-left">
                      {activeTabData.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>

      {/* All-in-One Solutions Section */}
      <section id="solutions" className="relative bg-[#0b0b0f]">
        {/* 🔵 Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)'
          }}
        />

        {/* 🟣 Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: 'url(/assets/grid-bg.svg)',
            backgroundRepeat: 'repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: '8rem 6.3rem',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            maskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        />

        {/* 🔥 Main Content */}
        <div className="container mx-auto px-4 pt-8 sm:pt-12 max-w-[1310px] relative z-10">

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16 pb-16 ">

            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2 
                ref={(el) => { solutionsElementsRef.current[0] = el; }}
                data-anim="from-top"
                className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Turnkey Sportsbook Solutions
              </h2>

              <p 
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Everything you need to launch and scale your sportsbook business — from backend infrastructure to player management, sportsbook API integration, payment systems, risk management, and white label sportsbook software.
              </p>

              <div
                ref={(el) => { solutionsElementsRef.current[10] = el; }}
                className="mt-6 flex justify-center lg:justify-start"
              >
                <button
                  onClick={handleScrollToContact}
                  className="relative group font-bold rounded-full overflow-hidden text-black px-8 py-3 sm:px-10 sm:py-3.5 hover:shadow-lg transition-all duration-300"
                  style={{
                    background: 'radial-gradient(67.03% 100% at 49.76% 99.23%, #ff8b2e 0%, #dbd646 36.72%, #00c3b3 100%)',
                    boxShadow: '0 -3px 2.5px 0 rgba(255, 228, 132, 0.58) inset, 0 1px 1.8px 0 rgba(255, 244, 230, 0.93) inset',
                  }}
                >
                  <span className="relative z-10 text-sm sm:text-base">
                    Learn more
                  </span>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{
                      background: 'radial-gradient(67.03% 100% at 49.76% 99.23%, #ff8b2e 0, #dbd646 36.72%, #00c3b3 100%)'
                    }}
                  />
                </button>
              </div>

            </div>

            {/* RIGHT CARDS */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={solution.id}
                    ref={(el) => { solutionsElementsRef.current[2 + index] = el; }}
                    data-anim="fade-in"
                    data-anim-delay={String((index % 5) + 1)}
                    className="flex flex-col sm:flex-row items-start sm:items-start gap-3 sm:gap-6 p-8 md:p-[3.2rem] rounded-[1.6rem] h-max transition-all group"
                    style={{
                      background:
                        'radial-gradient(61.37% 128.95% at 16.83% 106.91%, #0f4552 0%, #0a2a32 28.69%, #0c1921 100%)',
                      border: '1px solid rgba(24,116,139,0.57)'
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-cyan-500/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-cyan-400" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                        {solution.title}
                      </h3>
                      <p className="md:text-base text-gray-400">
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

      {/* Opportunities Section */}
      <OpportunitiesSection/>
      <ContactForm/>
    
    </>
  );
}

// Helper function for SEO-optimized alt tags

function getImageAlt(tabId: string): string {
  const altMap: { [key: string]: string } = {
    'full-platform': 'turnkey sportsbook solutions platform dashboard',
    'game-apis': 'sportsbook API integration with live odds feeds',
    'compliance': 'white label sportsbook software with KYC verification',
    'backoffice': 'sportsbook back office dashboard for bet and player management',
  };
  return altMap[tabId] || 'turnkey sportsbook software solution';
}