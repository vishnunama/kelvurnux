'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Crown,
  Gamepad2,
  Rocket,
  ShieldCheck,
  LayoutDashboard,
  Headphones,
  Gift,
  Wallet,
  Users,
  Code,
  Sparkles,
  Zap,
  Globe,
  Layers,
  Server,
  Activity,
  Lock,
  BarChart3,
} from 'lucide-react';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import ContactForm from '@/src/components/contactform/ContactForm';
import DiscoverMore, { DiscoverItem } from '@/src/components/Discovermore/Discovermore';
import StepsSection, { StepItem } from '@/src/components/stepssection/StepsSection';
import FAQSection from '@/src/components/FAQSection/FAQSection';

export type SolutionIconName =
  | 'crown'
  | 'code'
  | 'gamepad'
  | 'dashboard'
  | 'shield'
  | 'wallet'
  | 'users'
  | 'gift'
  | 'sparkles'
  | 'rocket'
  | 'headphones'
  | 'zap'
  | 'globe'
  | 'layers'
  | 'server'
  | 'activity'
  | 'lock'
  | 'chart';

const ICON_MAP: Record<
  SolutionIconName,
  React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
> = {
  crown: Crown,
  code: Code,
  gamepad: Gamepad2,
  dashboard: LayoutDashboard,
  shield: ShieldCheck,
  wallet: Wallet,
  users: Users,
  gift: Gift,
  sparkles: Sparkles,
  rocket: Rocket,
  headphones: Headphones,
  zap: Zap,
  globe: Globe,
  layers: Layers,
  server: Server,
  activity: Activity,
  lock: Lock,
  chart: BarChart3,
};

export interface SolutionTabItem {
  id: string;
  label: string;
  icon: SolutionIconName;
  title: string;
  description: string;
  image: string;
  alt?: string;
}

export interface SolutionFeatureCard {
  id: number;
  icon: SolutionIconName;
  title: string;
  description: string;
}

export interface SolutionComparisonCard {
  title: string;
  href?: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref?: string;
  ariaLabel: string;
  featured?: boolean;
}

export interface SolutionDiscoverConfigItem {
  id: number;
  title: string;
  description: string;
  icon: SolutionIconName;
  link?: string;
  span?: number;
}

export interface SolutionFAQItem {
  id?: string | number;
  question: string;
  answer: string;
}

export interface SolutionDetailLayoutProps {
  breadcrumbLabel: string;
  heroTitle: string;
  heroDescription: string;
  tabsAriaLabel: string;
  tabs: SolutionTabItem[];
  featuresSection: {
    title: string;
    subtitle: string;
    ctaText: string;
    items: SolutionFeatureCard[];
  };
  stepsSection: {
    sectionId?: string;
    title: string;
    subtitle: string;
    ctaText: string;
    steps: StepItem[];
  };
  comparisonSection: {
    sectionId?: string;
    title: string;
    subtitle: string;
    cards: SolutionComparisonCard[];
  };
  discoverSection: {
    title: string;
    subtitle: string;
    items: SolutionDiscoverConfigItem[];
  };
  faqData: SolutionFAQItem[];
  contactCategory: string;
}

export default function SolutionDetailLayout({
  breadcrumbLabel,
  heroTitle,
  heroDescription,
  tabsAriaLabel,
  tabs,
  featuresSection,
  stepsSection,
  comparisonSection,
  discoverSection,
  faqData,
  contactCategory,
}: SolutionDetailLayoutProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label ?? '');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const activeTabData = tabs.find((tab) => tab.label === activeTab) || tabs[0];

  const handleScrollToContact = () => {
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
    }
  };

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

  const handleTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = tabs.length - 1;
    } else {
      return;
    }
    const targetTab = tabs[nextIndex];
    handleTabClick(targetTab.label);
    const targetBtn = document.getElementById(`tab-${targetTab.id}`);
    if (targetBtn) {
      targetBtn.focus();
    }
  };

  const discoverItems: DiscoverItem[] = discoverSection.items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    icon: ICON_MAP[item.icon] || Rocket,
    link: item.link,
    span: item.span,
  }));

  return (
    <>
      <style jsx>{`
        @keyframes imageSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes contentSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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
        className="relative pt-24 sm:pt-28 md:pt-32 pb-2 overflow-hidden"
        style={{
          background:
            'radial-gradient(71.13% 100% at 50% 0, rgba(0,235,170,0.15) 0%, rgba(13,11,16,0.2) 65.41%), #0b0b0f',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          {/* Accessible Visual Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 sm:mb-6 flex items-center justify-center text-xs sm:text-sm text-gray-400"
          >
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-[#00ebaa] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-gray-600">
                /
              </li>
              <li className="text-white font-medium" aria-current="page">
                {breadcrumbLabel}
              </li>
            </ol>
          </nav>

          {/* Main Title - SEO Optimized H1 */}
          <div className="text-center mb-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              {heroTitle}
            </h1>
          </div>

          {/* Subtitle/Description */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10">
            <p className="text-base sm:text-lg text-[#a5a5a5] leading-relaxed text-center font-light">
              {heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Tab Features Section */}
      <section
        id="solutions"
        className="relative pb-12 md:pb-16 from-black via-gray-900 to-black"
      >
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          {/* Tab Buttons */}
          <div
            ref={tabsContainerRef}
            className="overflow-x-auto pt-0 pb-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12 scrollbar-hide scroll-smooth flex justify-start sm:justify-center px-2 sm:px-0"
            role="tablist"
            aria-label={tabsAriaLabel}
          >
            <div className="flex gap-1 sm:gap-1.5 md:gap-2 flex-nowrap py-1.5 px-1">
              {tabs.map((tab, index) => {
                const IconComponent = ICON_MAP[tab.icon];
                const isSelected = activeTab === tab.label;
                return (
                  <button
                    key={tab.id}
                    id={`tab-${tab.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isSelected}
                    aria-controls={`tabpanel-${tab.id}`}
                    tabIndex={isSelected ? 0 : -1}
                    ref={isSelected ? activeTabRef : null}
                    onClick={() => handleTabClick(tab.label)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                    className={`flex items-center gap-1 sm:gap-2 md:gap-2.5 px-2.5 sm:px-3 md:px-6 py-1.5 sm:py-2.5 md:py-3 rounded-full font-medium text-base transition-all duration-300 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-white text-black border-2 border-white'
                        : 'bg-gray-800/70 text-white/70 border-2 border-transparent hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent size={16} className="hidden sm:block" />
                    )}
                    <span className="leading-none">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          {activeTabData && (
            <div
              key={activeTabData.id}
              id={`tabpanel-${activeTabData.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTabData.id}`}
              tabIndex={0}
              className="animate-in focus:outline-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6 md:gap-7 lg:gap-8 items-stretch">
                {/* Image Card */}
                <div className="col-span-1 lg:col-span-3 order-1 lg:order-2">
                  <div className="relative w-full aspect-video lg:aspect-auto lg:h-full rounded-xl sm:rounded-2xl md:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00ebaa]/20 to-[#00ebaa]/5 rounded-xl sm:rounded-2xl blur-3xl animate-pulse" />
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.alt || activeTabData.title}
                      className="relative w-full h-full rounded-xl sm:rounded-2xl shadow-2xl object-cover"
                      style={{ animation: 'imageSlideIn 0.6s ease-out' }}
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src =
                          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1MzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTMwIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAwIiB5PSIyNjUsIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBOb3QgQXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                  </div>
                </div>

                {/* Info Card */}
                <div className="col-span-1 lg:col-span-2 order-2 lg:order-1 h-auto min-h-[280px]">
                  <div
                    className="w-full h-full rounded-xl sm:rounded-2xl md:rounded-2xl p-6 sm:p-7 md:p-10 lg:p-12 backdrop-blur-sm flex flex-col justify-center border border-[#00ebaa]/30"
                    style={{
                      background:
                        'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a',
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

      {/* Platform Features / Solutions Section (Sticky Left + Right Cards) */}
      <section
        id="platform-features"
        className="relative bg-[#0b0b0f] pb-16 md:pb-24"
      >
        {/* Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)',
          }}
        />

        {/* Grid Overlay */}
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
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-8 sm:pt-12 max-w-[1310px] relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 sm:gap-8 md:gap-10 md:pt-16">
            {/* LEFT STICKY */}
            <div className="relative lg:sticky lg:top-28 self-start space-y-4 sm:space-y-6 z-10">
              <h2 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {featuresSection.title}
              </h2>

              <p className="hidden md:block text-base lg:text-lg text-gray-400 leading-relaxed">
                {featuresSection.subtitle}
              </p>

              <div className="mt-6 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="btn-main overflow-hidden"
                  style={{
                    padding: '0.6rem 2.2rem',
                    minHeight: '2.8rem',
                  }}
                >
                  <span className="relative z-10 text-sm sm:text-base font-bold">
                    {featuresSection.ctaText}
                  </span>
                </button>
              </div>
            </div>

            {/* RIGHT CARDS */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {featuresSection.items.map((item) => {
                const IconComponent = ICON_MAP[item.icon] || ShieldCheck;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-start gap-3 sm:gap-6 p-8 md:p-[3.2rem] rounded-[1.6rem] h-max transition-all group"
                    style={{
                      background:
                        'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10.25%, rgba(0, 235, 170, 0.03) 99.99%), #0a141a',
                      border: '1px solid rgba(0, 235, 170, 0.3)',
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-[#00ebaa]/15 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <IconComponent
                        className="w-5 sm:w-6 h-5 sm:h-6 text-[#00ebaa]"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="md:text-base text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Launch Process Steps Section */}
      <StepsSection
        sectionId={stepsSection.sectionId || 'launch-process'}
        scrollSticky={false}
        customTitle={stepsSection.title}
        customSubtitle={stepsSection.subtitle}
        customSteps={stepsSection.steps}
        customCtaText={stepsSection.ctaText}
        ctaHref="#contact-form-section"
        onCtaClick={(e) => {
          e.preventDefault();
          handleScrollToContact();
        }}
      />

      {/* Three-Solution Comparison Section */}
      <section
        id={comparisonSection.sectionId || 'packages'}
        className="relative py-16 md:py-24 bg-[#080b0f]"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {comparisonSection.title}
            </h2>
            <p className="text-[#a5a5a5] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
              {comparisonSection.subtitle}
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {comparisonSection.cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00ebaa]/50 hover:shadow-[0_0_25px_rgba(0,235,170,0.15)] relative h-full"
                style={
                  card.featured
                    ? {
                        background:
                          'linear-gradient(180deg, rgba(0, 235, 170, 0.16) 0%, rgba(0, 235, 170, 0.08) 40%, rgba(0, 235, 170, 0.03) 100%), #10161a',
                        border: '1.5px solid rgba(0, 235, 170, 0.45)',
                        boxShadow: '0 -2px 6px 0 rgba(0, 235, 170, 0.25) inset',
                        backdropFilter: 'blur(10px)',
                      }
                    : {
                        background:
                          'linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a',
                        border: '1px solid rgba(0, 235, 170, 0.22)',
                        boxShadow:
                          '0 -2px 4.7px 0 rgba(0, 235, 170, 0.15) inset',
                        backdropFilter: 'blur(10px)',
                      }
                }
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    {card.href ? (
                      <Link
                        href={card.href}
                        className="hover:text-[#00ebaa] transition-colors"
                      >
                        {card.title}
                      </Link>
                    ) : (
                      card.title
                    )}
                  </h3>
                  <p className="text-sm sm:text-base text-[#a5d8d0] mb-6 leading-relaxed font-normal">
                    {card.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {card.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <svg
                          className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[6px]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2L2 12l10 10 10-10L12 2z" />
                        </svg>
                        <span className="text-sm sm:text-[0.95rem] text-[#e2e8f0] font-medium leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  {card.ctaHref ? (
                    <>
                      <Link
                        href={card.ctaHref}
                        className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline"
                      >
                        <span>{card.ctaText}</span>
                      </Link>
                      <Link
                        href={card.ctaHref}
                        className="w-12 h-12 rounded-full flex items-center justify-center text-[#04160f] transition-all duration-300 hover:brightness-92 shrink-0 overflow-hidden"
                        style={{
                          background:
                            'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                          boxShadow:
                            '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
                          color: '#04160f',
                        }}
                        aria-label={card.ariaLabel}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={handleScrollToContact}
                        className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline text-left cursor-pointer"
                      >
                        <span>{card.ctaText}</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleScrollToContact}
                        className="w-12 h-12 rounded-full flex items-center justify-center text-[#04160f] transition-all duration-300 hover:brightness-92 shrink-0 cursor-pointer overflow-hidden"
                        style={{
                          background:
                            'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
                          boxShadow:
                            '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
                          color: '#04160f',
                        }}
                        aria-label={card.ariaLabel}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover More Section */}
      <DiscoverMore
        customItems={discoverItems}
        customTitle={discoverSection.title}
        customSubtitle={discoverSection.subtitle}
      />

      {/* FAQ Section */}
      <FAQSection customFaqData={faqData as never} hideBgImage={true} />

      {/* Opportunities Section */}
      <OpportunitiesSection />

      {/* Contact Form */}
      <ContactForm defaultCategory={contactCategory} />
    </>
  );
}
