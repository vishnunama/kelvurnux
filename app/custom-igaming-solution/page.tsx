'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Wrench,
  Lightbulb,
  Settings,
  ShieldCheck,
  LayoutDashboard,
  Palette,
  Zap,
  Wallet,
  Users,
  BarChart3,
  TrendingUp,
  HandshakeIcon,
  Rocket
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';

export default function CustomiGamingSolution() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Your Custom Requirements');
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
    wrench: Wrench,
    lightbulb: Lightbulb,
    settings: Settings,
    'shield-check': ShieldCheck,
    'layout-dashboard': LayoutDashboard,
    rocket: Rocket,
  };

  const tabs = [
    {
      id: 'custom-requirements',
      label: 'Your Custom Requirements',
      icon: 'wrench',
      title: 'Your Custom Requirements',
      description: 'We build iGaming solutions tailored to your exact business needs. Whether you need custom workflows, unique game mechanics, specific feature sets, or proprietary integrations, our experienced development team creates a platform that matches your vision perfectly. Every component is built according to your specifications with no compromises.',
      image: '/assets/features/tab-casino-platform-2.webp'
    },
    {
      id: 'wide-range-of-features',
      label: 'Flexible Feature Architecture',
      icon: 'lightbulb',
      title: 'Flexible Feature Architecture',
      description: 'Choose exactly which features matter for your business. Custom game selection and filtering, unique bonus mechanics, specialized tournament systems, branded user experiences, and tailored reporting tools. Build your platform with only the features you need, optimized for your player base and revenue model.',
      image: '/assets/features/tab-casino-platform-3.webp'
    },
    {
      id: 'custom-design',
      label: 'Custom Design & Branding',
      icon: 'settings',
      title: 'Custom Design & Branding',
      description: 'Complete UI/UX customization to create a unique brand experience. Custom design system, branded player interface, personalized user journeys, and market-specific localization. Your platform reflects your brand identity and resonates with your target audience.',
      image: '/assets/features/branded-platform.webp'
    },
    {
      id: 'payment-solutions',
      label: 'Payment Integration',
      icon: 'shield-check',
      title: 'Payment Integration',
      description: 'Custom payment infrastructure supporting your target markets. Connect with your preferred payment providers, support multiple currencies and payment methods, implement custom KYC/AML workflows, and deploy fraud prevention tailored to your user base. Every transaction is secured and optimized for your operations.',
      image: '/assets/features/tab-turnkey-4.webp'
    },
    {
      id: 'fast-launch',
      label: 'Fast Deployment',
      icon: 'rocket',
      title: 'Fast Deployment',
      description: 'Launch your custom platform quickly using our robust infrastructure and development framework. Accelerated development cycles, continuous integration/deployment, and testing automation ensure you go live fast without compromising quality or security.',
      image: '/assets/features/tab-white-label-2.webp'
    },
  ];

  const solutions = [
    {
      id: 1,
      icon: Palette,
      title: 'Custom Brand & UI/UX Design',
      description: 'Complete design customization from concept to deployment. Design your interface exactly as you envision it with custom branding, unique visual identity, personalized user experience flows, and market-specific UI adaptations that engage your target players.'
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Specialized Feature Development',
      description: 'Build unique features tailored to your business model and market. Custom game mechanics, proprietary bonus systems, specialized tournament structures, unique VIP programs, and market-specific features that give you competitive advantage.'
    },
    {
      id: 3,
      icon: Wallet,
      title: 'Multi-Payment Gateway Integration',
      description: 'Connect with payment providers of your choice across regions. Support multiple currencies, payment methods, deposit/withdrawal options, and local payment solutions. Custom payment flows with fraud detection and compliance built-in for every transaction.'
    },
    {
      id: 4,
      icon: Users,
      title: 'Custom User Management System',
      description: 'Implement user workflows exactly as your business requires. Custom registration processes, flexible verification systems, user segmentation and personalization, custom user roles, loyalty programs, and player lifecycle management tailored to your strategy.'
    },
    {
      id: 5,
      icon: BarChart3,
      title: 'Custom Analytics & Reporting',
      description: 'Build dashboards and reports that drive your business decisions. Track your specific KPIs and metrics, custom business intelligence, real-time performance data, player behavior analytics, and actionable insights that matter to your organization.'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Scalable & Resilient Architecture',
      description: 'Cloud-native infrastructure designed for your growth. Auto-scaling systems, load balancing, high availability, disaster recovery, and security hardening. Handle millions of concurrent players with reliable performance and zero downtime.'
    },
    {
      id: 7,
      icon: ShieldCheck,
      title: 'Compliance & Regulatory Framework',
      description: 'Build compliance into your platform from day one. Custom compliance frameworks for your jurisdictions, KYC/AML implementation, fraud prevention and risk management, security audit trails, and regulatory reporting tailored to your market requirements.'
    },
    {
      id: 8,
      icon: HandshakeIcon,
      title: 'Dedicated Development Team',
      description: 'Work with experienced developers dedicated to your project. Understand your vision and business goals, provide regular updates and transparent communication, continuous platform optimization, feature additions, and ongoing technical support for your success.'
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
        }}
      >
        
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-3">
            <h1 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Custom iGaming Solution
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
              Build your iGaming platform exactly your way. Custom architecture, tailored features, flexible payment integration, and scalable infrastructure designed specifically for your business model and market. Full control over design, functionality, and operations with dedicated team support and continuous optimization.
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
                Complete Custom Solution Toolkit
              </h2>

              <p 
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Every tool and service you need to build your custom iGaming solution. Full flexibility, complete control over features and design, scalable infrastructure, and dedicated expert support to bring your vision to life.
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
                  <span className="relative z-10 text-sm sm:text-base">Start Building</span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{
                      background: 'radial-gradient(67.03% 100% at 49.76% 99.23%, #ff8b2e 0, #dbd646 36.72%, #00c3b3 100%)',
                      boxShadow: '0 2px 10.1px 0 rgba(62, 250, 184, 0.5), 0 -3px 2.5px 0 rgba(255, 228, 132, 0.58) inset, 0 1px 1.8px 0 rgba(255, 244, 230, 0.93) inset',
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