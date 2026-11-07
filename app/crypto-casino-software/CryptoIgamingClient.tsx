'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Wallet, 
  Coins, 
  Cpu, 
  Zap, 
  LayoutDashboard,
  ShieldCheck, 
  Gamepad2, 
  BarChart3, 
  Globe, 
  HandshakeIcon 
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore from '@/src/components/Discovermore/Discovermore';
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';
import FAQSection from '@/src/components/FAQSection/FAQSection';

export default function CryptoIgamingClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Crypto Payments');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const solutionsElementsRef = useRef<(HTMLElement | null)[]>([]);

  // Contact form scroll handler
  const handleScrollToContact = () => {
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
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

  const iconMap = {
    wallet: Wallet,
    coins: Coins,
    cpu: Cpu,
    zap: Zap,
    'layout-dashboard': LayoutDashboard,
  };

  const tabs = [
    {
      id: 'crypto-payments',
      label: 'Crypto Payments',
      icon: 'wallet' as const,
      title: 'Crypto Deposits and Withdrawals',
      description:
        'Connect crypto payment services to your casino or sportsbook. Bring player deposits, withdrawals and payment records into your platform’s back office.',
      image: '/assets/features/igaming-security-risk-management-aml-kyc.webp',
      alt: 'Crypto Deposits and Withdrawals'
    },
    {
      id: 'games-providers',
      label: 'Games and Providers',
      icon: 'cpu' as const,
      title: 'Casino Games for Your Crypto Platform',
      description:
        'Connect slots, live casino, crash and table games from selected providers. Organize your game lobby around the content you want to offer your players.',
      image: '/assets/features/comprehensive-casino-platform-features-roulette-dice.webp',
      alt: 'Casino Games for Your Crypto Platform'
    },
    {
      id: 'branding-features',
      label: 'Branding and Features',
      icon: 'coins' as const,
      title: 'Your Brand, Your Player Experience',
      description:
        'Customize the design, navigation and player-facing pages. Add the features your business needs through our crypto casino software development services.',
      image: '/assets/features/casino-game-providers-api-aggregator.webp',
      alt: 'Your Brand, Your Player Experience'
    },
    {
      id: 'casino-sportsbook',
      label: 'Casino and Sportsbook',
      icon: 'zap' as const,
      title: 'Crypto Casino and Sportsbook Software',
      description:
        'Offer casino games and sports betting through a combined platform. Our turnkey package includes casino and sportsbook, with a back office for managing daily operations.',
      image: '/assets/features/turnkey-igaming-platform-infrastructure-services.webp',
      alt: 'Crypto Casino and Sportsbook Software'
    },
    {
      id: 'back-office',
      label: 'Back Office',
      icon: 'layout-dashboard' as const,
      title: 'Manage Your Platform in One Place',
      description:
        'Manage player accounts, balances, bonuses and transaction records. Give your team a clear view of the information they need for daily casino and sportsbook operations.',
      image: '/assets/features/turnkey-back-office-admin-dashboard-analytics.webp',
      alt: 'Manage Your Platform in One Place'
    }
  ];

  const solutions = [
    {
      id: 1,
      icon: Coins,
      title: 'White Label Crypto Casino',
      description:
        'Launch using a ready-made casino platform customized for your brand, with a lower upfront development cost. Platform source code is available for an additional fee.'
    },
    {
      id: 2,
      icon: Wallet,
      title: 'Turnkey Crypto Casino and Sportsbook',
      description:
        'Get casino, sportsbook and platform source code in one package. Ownership and transfer terms are defined in your project agreement.'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Custom Crypto Casino Development',
      description:
        'Build a platform around your own design, features and operating requirements. We agree on the development scope before work begins.'
    },
    {
      id: 4,
      icon: Gamepad2,
      title: 'Game Provider Integration',
      description:
        'Connect the selected casino game providers and organize their content within your platform.'
    },
    {
      id: 5,
      icon: BarChart3,
      title: 'Crypto Payment Integration',
      description:
        'Connect your chosen payment services and bring deposit and withdrawal records into the back office.'
    },
    {
      id: 6,
      icon: Globe,
      title: 'Player and Back-Office Tools',
      description:
        'Manage player accounts, balances, bonuses and daily operations through your platform’s administrative tools.'
    },
    {
      id: 7,
      icon: HandshakeIcon,
      title: 'Launch and Technical Support',
      description:
        'Get help with platform setup, integration and launch preparation. Post-launch maintenance and support follow your agreed package.'
    }
  ];

  const activeTabData = tabs.find(tab => tab.label === activeTab);

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

  const cryptoDiscoverItems = [
    {
      id: 1,
      title: 'Bitcoin and Crypto Payments',
      description: 'Accept Bitcoin and other selected cryptocurrencies through your chosen payment provider, with payment records connected to your back office.',
      icon: Wallet,
      span: 2,
    },
    {
      id: 2,
      title: 'Deposits and Withdrawals',
      description: 'Connect payment activity with player balances and transaction records so your team can review deposits and payouts.',
      icon: Zap,
      span: 2,
    },
    {
      id: 3,
      title: 'Casino Game Integration',
      description: 'Bring selected slots, live casino, crash and table games into your branded casino lobby.',
      icon: Gamepad2,
      span: 2,
    },
    {
      id: 4,
      title: 'Player and Bonus Management',
      description: 'Manage player accounts, balances, bonuses and promotions from your platform’s back office.',
      icon: Coins,
      span: 3,
    },
    {
      id: 5,
      title: 'Custom Design and Integrations',
      description: 'Adapt the player experience to your brand and connect the third-party services included in your project.',
      icon: Cpu,
      span: 3,
    },
    {
      id: 6,
      title: 'Casino Platform Software',
      description: 'Explore our casino software for managing games, players, bonuses and daily operations.',
      icon: LayoutDashboard,
      link: '/online-casino-platform-software',
      span: 2,
    },
    {
      id: 7,
      title: 'Turnkey Casino Solutions',
      description: 'Explore our casino and sportsbook package, including platform source code under the agreed contract terms.',
      icon: ShieldCheck,
      link: '/turnkey-casino-software-solutions',
      span: 2,
    },
    {
      id: 8,
      title: 'Agent-Based Sportsbook Case Study',
      description: 'See an example of our work on sportsbook and agent-management features.',
      icon: HandshakeIcon,
      link: '/igaming-case-studies/agent-based-casino-sportsbook-platform',
      span: 2,
    },
  ];

  const cryptoLaunchSteps: StepItem[] = [
    {
      id: 1,
      title: 'Plan Your Platform',
      text: 'Tell us whether you need a casino, sportsbook or both. We review your preferred currencies, features, budget and target markets.',
    },
    {
      id: 2,
      title: 'Customize Your Brand',
      text: 'Adapt the platform’s design, navigation and player-facing pages to your brand.',
    },
    {
      id: 3,
      title: 'Connect Games and Services',
      text: 'Integrate the selected game providers and other services included in your project.',
    },
    {
      id: 4,
      title: 'Set Up Crypto Payments',
      text: 'Connect your selected crypto payment provider and configure deposit and withdrawal settings for the agreed currencies and networks.',
    },
    {
      id: 5,
      title: 'Test and Prepare for Launch',
      text: 'Check game loading, deposits, withdrawals and back-office settings. Resolve issues found during testing before launch.',
    },
    {
      id: 6,
      title: 'Launch and Ongoing Support',
      text: 'Launch the platform and continue with maintenance and technical support according to your agreed support package.',
    },
  ];

  const cryptoFaqs = [
    {
      question: 'What is crypto casino software?',
      answer:
        'Crypto casino software lets a business manage an online casino with cryptocurrency payment options. It connects games, player accounts, balances, payment records and back-office tools.',
    },
    {
      question: 'Can you build both a crypto casino and sportsbook?',
      answer:
        'Yes. We can deliver a casino, sportsbook or combined platform. Our turnkey package includes both casino and sportsbook.',
    },
    {
      question: 'Do you offer white label crypto casino software?',
      answer:
        'Yes. Our white-label option uses a ready-made platform customized for your brand, with selected game and payment integrations. Source code is available for an additional fee.',
    },
    {
      question: 'Is platform source code included?',
      answer:
        'Platform source code is included in our turnkey package and is available for an additional fee with white label. Custom development ownership and delivery terms are defined in the project agreement. Third-party games and services remain subject to their own terms.',
    },
    {
      question: 'Which cryptocurrencies can the platform support?',
      answer:
        'We confirm the currencies and networks with you before development. Options such as Bitcoin, Ethereum, USDT and USDC depend on the selected payment provider and integration.',
    },
    {
      question: 'Can you add crypto payments to an existing casino?',
      answer:
        'Yes. We review your current platform and the selected payment provider to define the integration work required.',
    },
    {
      question: 'How much does crypto casino software cost?',
      answer:
        'The cost depends on your platform model, design changes, features and integrations. Tell us what you need, and we will prepare a quote showing the development scope and applicable third-party costs.',
    },
    {
      question: 'How long does it take to launch?',
      answer:
        'A ready-made setup generally requires less development than a custom build. We confirm the delivery schedule after reviewing customization, integrations, testing and launch requirements.',
    },
    {
      question: 'Which casino games can I offer?',
      answer:
        'We integrate selected game providers. Game availability depends on provider agreements, target markets and required approvals.',
    },
    {
      question: 'How long do crypto deposits and withdrawals take?',
      answer:
        'Timing varies by cryptocurrency, network confirmations and the payment provider. Withdrawals may also require checks under the operator’s payout rules.',
    },
    {
      question: 'Do you provide support after launch?',
      answer:
        'Yes. Maintenance, technical support and updates are provided according to your agreed support package.',
    },
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
        className="relative pt-24 sm:pt-28 md:pt-32 pb-2 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-3">
            <h1 
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              ref={(el) => { elementsRef.current[0] = el; }}
              data-anim="from-top"
            >
              Crypto Casino Software Built for Your Business
            </h1>
          </div>

          {/* Subtitle/Description */}
          <div className="max-w-4xl mx-auto mb-5 sm:mb-7 md:mb-8">
            <p 
              className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light"
              ref={(el) => { elementsRef.current[1] = el; }}
              data-anim="from-bottom"
              data-anim-delay="1"
            >
              Launch a branded crypto casino or casino and sportsbook platform. Choose a white-label setup, a turnkey package or custom development. We connect games and crypto payments and customize the platform for your business.
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
            className="overflow-x-auto pt-0 pb-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap py-1.5 px-1">
              {tabs.map((tab) => {
                const IconComponent = iconMap[tab.icon];
                return (
                  <button
                    key={tab.id}
                    ref={activeTab === tab.label ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ebaa]/20 to-[#00ebaa]/5 rounded-xl sm:rounded-2xl blur-3xl animate-pulse"></div>
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.alt || activeTabData.title}
                      className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                      style={{ animation: 'imageSlideIn 0.6s ease-out' }}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUsIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg=='
                      }}
                    />
                  </div>
                </div>

                {/* Info Card — second on mobile, left on desktop */}
                <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-auto min-h-[280px]">
                  <div
                    className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                    style={{
                      background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
                    }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight text-left">
                      {activeTabData.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-lg text-[#a5a5a5] leading-relaxed font-light text-left">
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
                className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Choose Your Crypto Casino Setup
              </h2>

              <p 
                ref={(el) => { solutionsElementsRef.current[1] = el; }}
                data-anim="from-bottom"
                data-anim-delay="1"
                className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed"
              >
                Start with a ready-made platform or choose custom development. We help you define the features, integrations and ownership options that fit your project.
              </p>

              <div
                ref={(el) => { solutionsElementsRef.current[10] = el; }}
                className="mt-6 flex justify-center lg:justify-start"
              >
                <button
                  onClick={handleScrollToContact}
                  className="btn-main overflow-hidden"
                  style={{
                    padding: '0.6rem 2.2rem',
                    minHeight: '2.8rem',
                  }}
                >
                  <span className="relative z-10 text-sm sm:text-base font-bold">
                    Discuss Your Crypto Platform
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

      {/* Discover More Section */}
      <DiscoverMore
        customItems={cryptoDiscoverItems}
        customTitle="Crypto Casino Features for Daily Operations"
        customSubtitle="Connect games, payments and player management in a platform customized for your business."
      />

      {/* Launch Process Steps Section */}
      <StepsSection
        sectionId="launch-process"
        scrollSticky={false}
        customTitle="How to Launch Your Crypto Casino Platform"
        customSubtitle="From choosing your platform to connecting crypto payments, testing and preparing for launch."
        customSteps={cryptoLaunchSteps}
        customCtaText="Discuss Your Project"
        ctaHref="#contact-form-section"
        onCtaClick={(e) => {
          e.preventDefault();
          handleScrollToContact();
        }}
      />

      {/* Opportunities Section */}
      <OpportunitiesSection />

      {/* FAQ Section */}
      <FAQSection customFaqData={cryptoFaqs} hideBgImage={true} />

      <ContactForm />
    </>
  );
}
