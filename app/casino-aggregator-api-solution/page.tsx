'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Zap,
  Gamepad2,
  Network,
  ShieldCheck,
  LayoutDashboard,
  Palette,
  Activity,
  Wallet,
  BarChart3,
  TrendingUp,
  Code,
  HandshakeIcon,
  Sparkles
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';

export default function CasinoAggregatorAPI() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Always-Fresh Content Hub');
  const tabsContainerRef = useRef(null);
  const activeTabRef = useRef(null);

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
    'gamepad-2': Gamepad2,
    network: Network,
    'shield-check': ShieldCheck,
    'layout-dashboard': LayoutDashboard,
    'sparkles': Sparkles,
  };

 const tabs = [
    {
      id: 'always-fresh-content',
      label: 'Always-Fresh Content Hub',
      icon: 'gamepad-2',
      title: 'Always-Fresh Content Hub',
      description: 'Access 20,000+ gaming titles including slots, live casino, table games, fishing games, fast games, and mini games from 150+ leading providers. Content updates automatically with new releases, ensuring your platform stays fresh and competitive. Complete game metadata with RTP, volatility, and features included.',
      details: [
        {
          subtitle: 'Complete Game Portfolio',
          text: 'Slots, Live Dealer, Table Games, Fishing, Fast Games, Mini Games — 20,000+ titles from 150+ providers. One API integration for everything.'
        }
      ],
      image: '/assets/features/tab-game-aggregator-1.webp'
    },
    {
      id: 'promo-studio',
      label: 'Promo Studio',
      icon: 'sparkles',
      title: 'Promo Studio',
      description: 'Create and manage player promotions directly through the API. Launch free spins, deposit bonuses, tournaments, and seasonal campaigns across all integrated game providers. Full control over eligibility, limits, and automated reward distribution.',
      details: [
        {
          subtitle: 'Campaign Management',
          text: 'Design promotions with free spins, network jackpots, tournaments, and seasonal events. API-driven execution with real-time tracking and player history.'
        },
        {
          subtitle: 'Automated Rewards',
          text: 'Automate reward distribution with customizable rules, budget controls, and eligibility criteria. Export detailed campaign results for analytics.'
        }
      ],
      image: '/assets/features/tab-game-aggregator-2.webp'
    },
    {
      id: 'analytics-alerts',
      label: 'Analytics & Alerts',
      icon: 'network',
      title: 'Analytics & Alerts',
      description: 'Real-time dashboards with complete visibility into platform activity. Monitor all bets, player behavior, and provider health through APIs. Instant alerts for anomalies, technical issues, and performance problems. Problem-round logs for quick issue resolution.',
      details: [
        {
          subtitle: 'Real-time Monitoring',
          text: 'Full API access to player game journals, bet history, and transaction data. System-wide alerts and anomaly detection for platform integrity.'
        }
      ],
      image: '/assets/features/tab-game-aggregator-3.webp'
    },
    {
      id: 'invoices-reconcile',
      label: 'Automated Reconciliation',
      icon: 'shield-check',
      title: 'Automated Reconciliation',
      description: 'Invoices are generated automatically from verified API data with no manual intervention required. Full audit trail and transaction reconciliation built into the platform. Automatic failover systems ensure continuous operations across all provider connections.',
      details: [
        {
          subtitle: 'API-Based Reconciliation',
          text: 'Real-time invoice generation from verified game activity data. Complete transaction audit trail and automatic reconciliation with zero manual work.'
        },
        {
          subtitle: 'High Availability',
          text: 'Automatic failover systems across provider endpoints. 24/7 monitoring with instant alerts if any integration issues arise.'
        }
      ],
      image: '/assets/features/tab-game-aggregator-4.webp'
    }
  ];
 

  const solutions = [
    {
      id: 1,
      icon: Gamepad2,
      title: 'Single API Integration',
      description: 'One API connects all your game aggregation needs. Seamless integration without managing multiple provider connections.'
    },
    {
      id: 2,
      icon: Network,
      title: 'Unified Content Gateway',
      description: '150+ game providers with Live Dealer casino, slots, sportsbook, mini games, poker, lottery, esports, fishing and more game content from popular game studios all through one unified API layer.'
    },
    {
      id: 3,
      icon: Activity,
      title: 'Games Media',
      description: 'All games-related content in one place. Thumbnails, backgrounds, banners – everything you need to extend your portfolio.'
    },
    {
      id: 4,
      icon: BarChart3,
      title: 'Dedicated Back Office',
      description: 'Check game rounds via an integrated Game Aggregator back office. Access complete history and check everything in one dashboard.'
    },
    {
      id: 5,
      icon: Code,
      title: 'Developer-Friendly Integration',
      description: 'Comprehensive API documentation, code examples, and SDKs. Quick implementation with dedicated technical support team.'
    },
    {
      id: 6,
      icon: TrendingUp,
      title: 'Multi-Currency & Multi-Language',
      description: 'Built-in support for 50+ currencies and multiple languages. Regional market adaptation with geo-specific routing and content.'
    },
    {
      id: 7,
      icon: Wallet,
      title: 'Flexible Router Configuration',
      description: 'Smart provider routing by latency, jurisdiction, currency, device, and availability. Automatic endpoint selection for optimal performance.'
    },
    {
      id: 8,
      icon: HandshakeIcon,
      title: 'Dedicated Integration Support',
      description: 'Real engineers, not just support tickets. Proactive monitoring, integration assistance, and dedicated success managers for your project.'
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

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
    setTimeout(() => {
      if (activeTabRef.current && tabsContainerRef.current) {
        const container = tabsContainerRef.current as HTMLElement;
        const button = activeTabRef.current as HTMLElement;
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
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f'
        }}
      >
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ebaa]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-[#00ebaa]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-3">
            <h1 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Casino Aggregator API Solution
            </h1>
          </div>

          {/* Subtitle/Description */}
          <div className="max-w-4xl mx-auto mb-9">
            <p 
              className="text-base sm:text-lg text-gray-300/90 leading-relaxed text-center font-light"
              ref={(el) => { elementsRef.current[1] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              Integrate 150+ gaming providers with 20,000+ games through a single powerful API. Get instant access to slots, live casino, table games, fishing, fast games, and mini games. Complete integration support, real-time analytics, and multi-currency operations included.
            </p>
          </div>

        </div>
      </section>

      {/* Tab Features Section */}
      <section id="solutions" className="relative bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">

         {/* Tab Buttons */}
         <div
          ref={tabsContainerRef}
          className="overflow-x-auto pb-3 mb-8 sm:mb-10 md:mb-12 lg:mb-14 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
        >
          <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap">
            {tabs.map((tab) => {
              const IconComponent = iconMap[tab.icon as keyof typeof iconMap];
              return (
                <button
                  key={tab.id}
                  ref={activeTab === tab.label ? activeTabRef : null}
                  onClick={() => handleTabClick(tab.label)}
                  className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab.label
                      ? 'bg-[#00ebaa] text-black border-2 border-[#00ebaa]'
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
                      alt={activeTabData.title}
                      className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                      style={{ animation: 'imageSlideIn 0.6s ease-out' }}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg=='
                      }}
                    />
                  </div>
                </div>

                {/* Info Card — second on mobile, left on desktop */}
                <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-[280px] lg:h-auto">
                    className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                    style={{
                      background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10.25%, rgba(0, 235, 170, 0.03) 99.99%), #0a141a',
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

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16 pb-16">

            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2 
                ref={(el) => { solutionsElementsRef.current[0] = el; }}
                data-anim="from-top"
                className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Complete Casino API Integration Suite
              </h2>

              <p 
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Expand your casino offering faster with one powerful API. Lower integration overhead, higher player engagement, and complete data visibility through a single connection to 150+ providers.
              </p>

              <div
                ref={(el) => { solutionsElementsRef.current[10] = el; }}
                className="mt-6 flex justify-center lg:justify-start"
              >
                <button
                  onClick={handleScrollToContact}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    outline: '0',
                    width: 'fit-content',
                    borderRadius: '9999px',
                    padding: '0.6rem 2.2rem',
                    minHeight: '2.8rem',
                    backgroundColor: '#00ebaa',
                    cursor: 'pointer',
                    color: '#000',
                    fontWeight: '700',
                  }}
                >
                  <span className="relative z-10 text-black font-bold">Get API Access</span>
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
                      background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10.25%, rgba(0, 235, 170, 0.03) 99.99%), #0a141a',
                      border: '1px solid rgba(0, 235, 170, 0.3)'
                    }}
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
      {/* <DiscoverMore/> */}
      <OpportunitiesSection/>

      <ContactForm/>
    
    </>
  );
}