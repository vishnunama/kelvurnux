'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Crown,
  Gamepad2,
  Rocket,
  ShieldCheck,
  LayoutDashboard,
  Palette,
  Zap,
  Wallet,
  Gift,
  BarChart3,
  TrendingUp,
  HandshakeIcon,
  Users,
  CheckCircle,
  Trophy,
  Dice5,
  RotateCw,
  Box
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';

export default function TurnkeyIgamingPlatform() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Full platform ownership');
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
      icon: 'crown',
      title: 'Full platform ownership',
      description: 'Take full control of your Gaming business with your own brand. You can design, manage, and run everything your way. Licensing is optional — if needed, you can get a gaming license through available providers.',
      image: '/assets/features/tab-turnkey-1.webp'
    },
    {
      id: 'game-aggregation',
      label: 'Game aggregation',
      icon: 'gamepad-2',
      title: 'Game aggregation',
      description: 'Get access to 10,000+ games powered by 100+ leading global providers. Seamlessly manage your game portfolio and deliver a diverse, high-quality gaming experience that keeps players engaged and returning for more.',
      image: '/assets/features/tab-turnkey-2.webp'
    },
    {
      id: 'Fast-launch',
      label: 'Fast launch',
      icon: 'rocket',
      title: 'Fast launch',
      description: 'Launch your Gaming platform quickly with our ready-made turnkey solution. No need to build everything from scratch — the system is already developed and tested. We help you go live fast with a fully working platform, so you can start your business without delays.',
      image: '/assets/features/tab-white-label-2.webp'
    },
    {
      id: 'compliance',
      label: 'Compliance & Risk tools',
      icon: 'shield-check',
      title: 'Compliance & Risk tools',
      description: 'Keep your platform safe and secure with advanced protection systems like Cloudflare, along with built-in KYC and AML tools. Prevent fraud, ensure smooth performance, and run your platform without technical issues while meeting market requirements.',
      image: '/assets/features/tab-turnkey-4.webp'
    },
    {
      id: 'backoffice',
      label: 'Back Office',
      icon: 'layout-dashboard',
      title: 'Back Office',
      description: 'Manage everything from one back office — deposits, withdrawals, bonuses, affiliates, and user accounts. You can monitor users, adjust balances, block or suspend accounts, and view reports easily.',
      image: '/assets/features/tab-turnkey-5.webp'
    }
  ];

 const solutions = [
  {
    id: 1,
    icon: Users,
    title: '50+ Projects Successfully Delivered',
    description: 'We successfully delivered 50+ crypto iGaming projects globally with consistent revenue growth and high player engagement across multiple markets and jurisdictions.'
  },
  {
    id: 2,
    icon: Gamepad2,
    title: '20,000+ Game APIs from 150+ Providers',
    description: 'Access 20,000+ games including slots, live casino, table games, and sportsbook APIs from top providers, with easy catalog and content management.'
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Advanced Analytics & Fraud Detection',
    description: 'Real-time player behavior monitoring, illegal IP detection, bot user identification, and Cloudflare DDoS protection. Complete visibility and security to protect your platform integrity.'
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Crypto Wallet Verification',
    description: 'Native Web3 wallet integration with instant connection and verification. Support for 50+ blockchain networks and secure transaction processing with zero friction.'
  },
  {
    id: 5,
    icon: Gift,
    title: 'Flexible Bonus & Rewards Engine',
    description: 'Premium bonus system with deposit bonuses, first deposit packages, spin wheel rewards, and custom structures. Real-time control and customization of all reward mechanics.'
  },
  {
    id: 8,
    icon: RotateCw,
    title: 'Wheel of Fortune',
    description: 'Interactive engagement feature designed to increase session time and boost player retention. Fully customizable mechanics with instant reward distribution and animations.'
  },
  {
    id: 9,
    icon: Box,
    title: 'Loot Boxes',
    description: 'Advanced surprise reward system triggered by player behavior patterns. Strengthens retention loops and extends lifetime value with proven engagement mechanics.'
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
      'radial-gradient(71.13% 100% at 50% 0, rgba(8,89,106,0.2) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f'
  }}      >
        
       

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-3">
            <h1 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Crypto iGaming Solutions
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
We provide a fully-functional, ready-to-launch crypto iGaming platform tailored to your brand and jurisdiction. Our complete solution includes secure payment integration with crypto wallet support, scalable backend infrastructure, and real-time player analytics. Everything is pre-built, tested, and optimized for instant deployment—so you can go live quickly and focus on growing your player base without technical delays.            </p>
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
              const IconComponent = iconMap[tab.icon as keyof typeof iconMap];
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
      backgroundImage: 'url(/assets/grid-bg.svg)', // ⚠️ public/assets/img/ me hona chahiye
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
  <div className="container mx-auto px-4 pt-8 sm:pt-12  max-w-[1310px] relative z-10">

    <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16 pb-16 ">

      {/* LEFT STICKY */}
<div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
        <h2 
          ref={(el) => { solutionsElementsRef.current[0] = el; }}
          data-anim="from-top"
className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"        >
          Go live fast with a full package of Crypto iGaming Project
        </h2>

        <p 
          ref={(el) => { solutionsElementsRef.current[1] = el; }}
          data-anim="from-bottom"
          data-anim-delay="1"
  className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
        >
          Everything you need to launch and scale your gaming platform — from backend infrastructure to player management, all integrated and ready to deploy.
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
              borderRadius: '1.6rem',
              padding: '0.4rem 3rem',
              minHeight: '4rem',
              backgroundColor: '#00ebaa',
              cursor: 'pointer',
              color: '#000',
              fontWeight: '700',
            }}
          >
            <span className="relative z-10 text-sm sm:text-base font-bold text-black">
              Choose this solution
            </span>
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
                  'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10.25%, rgba(0, 235, 170, 0.03) 99.99%), #0a141a',
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
      <OpportunitiesSection/>
      <ContactForm/>
    
    </>
  );
}