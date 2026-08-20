'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ ADD THIS
import { usePathname } from 'next/navigation';
import {
  Rocket,
  Users,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import FAQSection from '@/src/components/FAQSection/FAQSection';

const styles = `
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  @keyframes from-bottom {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes from-top {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  [data-anim] { opacity: 0; }
  [data-anim="from-bottom"].visible { animation: from-bottom 0.6s ease-out forwards; }
  [data-anim="from-top"].visible { animation: from-top 0.6s ease-out forwards; }

  [data-anim-delay="1"].visible { animation-delay: 0.1s; }
  [data-anim-delay="2"].visible { animation-delay: 0.2s; }
  [data-anim-delay="3"].visible { animation-delay: 0.3s; }

  .gradient-text {
    background: linear-gradient(147deg, rgba(255,255,255,0.33) 10%, rgba(61,75,71,0.33) 90%), #fff;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glass-card {
    background: radial-gradient(187.98% 100% at 48.7% 0, #0f4552 0, #0a2a32 16.35%, #0c1921 70.3%);
    border: 1px solid rgba(0, 235, 170, 0.3);
  }

  .gradient-button {
    background: #00ebaa;
    color: #000;
    font-weight: 700;
  }

  /* TOC Sticky Sidebar */
  .toc-sidebar {
    position: sticky;
    top: 2rem;
    height: fit-content;
  }

  /* Blog Article Styles */
  .blog-content h2 {
    font-size: 2rem;
    font-weight: 700;
    // margin-top: 1rem;
    margin-bottom: 1.25rem;
    color: #fff;
    scroll-margin-top: 100px;
  }

  .blog-content p {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: #d1d5db;
    margin-bottom: 1.25rem;
  }

  .blog-content ul, .blog-content ol {
    margin-bottom: 1.25rem;
    margin-left: 2rem;
  }

  .blog-content li {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: #d1d5db;
    margin-bottom: 0.75rem;
  }

  .toc-link {
    transition: all 0.3s ease;
  }

  .toc-link:hover {
    color: #22d3ee;
    padding-left: 0.5rem;
  }

  .toc-link.active {
    color: #22d3ee;
    font-weight: 600;
    border-left: 2px solid #22d3ee;
    padding-left: 0.75rem;
    margin-left: -0.75rem;
  }
`;

interface BlogSection {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: string[];
}

const blogSections: BlogSection[] = [
  {
    id: 'what-is',
    title: 'What is Crypto Casino Development?',
   content: [
  'Crypto casino development is the process of building secure online gaming platforms that accept cryptocurrency payments. These platforms provide transparent transactions, instant withdrawals, and global accessibility without geographic restrictions.',
  'If you want to know how to start crypto casino platform step by step, this guide explains the complete process from business model selection to crypto casino software, API integration, payment setup, crypto casino cost planning, and launch.',
  'A modern crypto casino combines gaming excellence with blockchain security, ensuring fair play through provably fair algorithms and complete transparency in all transactions.',
],
  },
  {
    id: 'step1',
    title: 'Step 1: Choose Your Business Model',
    content: [
      'White Label: Fully branded platform with minimal development. You can start quickly using a white label casino solution for faster market entry. Quick market entry in 2-4 weeks with pre-built features.',
      'Turnkey: Complete ownership with all features built-in. You can build a scalable platform using a turnkey iGaming solution. Full control and customization with 8-12 weeks development timeline.',
      'Both models offer distinct advantages depending on your timeline, budget, and technical requirements.',
    ],
  },
  {
    id: 'step2',
    title: 'Step 2: Select Casino Software',
    content: [
      'Look for platforms with 150+ API integrations and access to 20,000+ games. This ensures your players have unlimited entertainment options.',
      'Multi-currency support, strong security infrastructure, and 24/7 technical support are essential features. Choose a provider with proven track record in the iGaming industry. For unique business requirements, you can build a custom iGaming solution tailored to your specific needs.',
      'Evaluate the software for mobile responsiveness, scalability, and compliance with gaming regulations in your target markets.',
    ],
  },
  {
    id: 'step3',
    title: 'Step 3: Integrate Games & APIs',
    content: [
      'Connect slots, live casino, sports betting, and other gaming verticals through reliable APIs. You can streamline this process using a casino aggregator API solution to access multiple providers easily. Integration should be seamless and transparent to your end users.',
      'Implement easy game catalog management that allows you to add or remove games without technical expertise. Your platform should support dynamic game rotation and seasonal promotions.',
      'Ensure all games are independently tested for fairness and security through certified gaming labs.',
    ],
  },
  {
    id: 'step4',
    title: 'Step 4: Setup Crypto Payments',
    content: [
      'Support major cryptocurrencies including Bitcoin, Ethereum, and stablecoins like USDT and USDC. This diversification ensures maximum user accessibility.',
      'Implement instant deposit and withdrawal systems with comprehensive fraud protection. Use multi-signature wallets and cold storage for maximum security.',
      'Set up automated KYC/AML compliance checks to meet regulatory requirements while maintaining user privacy.',
    ],
  },
  {
    id: 'step5',
    title: 'Step 5: Launch & Grow',
    content: [
      'Conduct thorough security testing, penetration testing, and performance optimization before launch. Your platform must handle peak loads gracefully.',
      'Implement comprehensive marketing campaigns and SEO strategies to drive organic traffic. Focus on community building and player retention. You can also expand into sports betting development for additional revenue streams.',
      'Monitor analytics closely, gather user feedback, and continuously iterate on features to improve player lifetime value.',
    ],
  },
];

const costBreakdown = [
  {
    package: 'Startup Package',
    price: '$2,500',
    description: 'Basic launch with essential features',
    features: [
      'White label platform setup',
      '50+ games integration',
      'Basic payment gateway',
      'Standard support',
      'Mobile responsive design',
    ],
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    package: 'Standard Package',
    price: '$4,000',
    description: 'Advanced features for growth',
    features: [
      'Advanced white label features',
      '150+ game providers',
      'Crypto payment integration',
      'Priority support',
      'Analytics dashboard',
      'Bonus system',
    ],
    icon: <TrendingUp className="w-5 h-5" />,
    highlighted: true,
  },
  {
    package: 'Premium Package',
    price: '$7,000',
    description: 'Full ownership and customization',
    features: [
      'Complete ownership',
      '20,000+ games',
      'Full crypto payment suite',
      '24/7 dedicated support',
      'Advanced analytics',
      'Custom development',
      'Licensing assistance',
      'Multi-vertical support',
    ],
    icon: <Users className="w-5 h-5" />,
  },
];

export default function CryptoCasinoBlogPage() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();

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

  // Track active section for TOC
  useEffect(() => {
    const handleScroll = () => {
      const sections = blogSections.map(s => {
        const el = document.getElementById(s.id);
        return { id: s.id, el, top: el?.getBoundingClientRect().top || 0 };
      });

      const active = sections.find(s => s.top > 0 && s.top < 300);
      if (active) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-trigger animations when component mounts or route changes
  useEffect(() => {
    const elements = document.querySelectorAll("[data-anim]");
    elements.forEach((el) => {
      el.classList.remove("visible");
    });

    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add("visible");
      });
    }, 100);
  }, [pathname]);

  return (
    <>
      <style>{styles}</style>

      {/* HERO SECTION - PROPER BLOG STYLE */}
      <section className="relative bg-[#0b0b0f] pt-16 pb-3 overflow-hidden">
        {/* Animated Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(40% 80% at 50% 0, rgba(27, 87, 88, 0.58) 0, rgba(13, 11, 16, 0) 80.49%), #0b0b0f`,
            backgroundSize: '125% 125%',
            animation: 'gradient 20s ease infinite',
          }}
        />

        {/* Grid Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundSize: '214.4px 169.6px',
            backgroundPosition: '50% 50%',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
            maskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskSize: 'cover',
            maskSize: 'cover',
          }}
        />

        {/* 🔵 Radial Gradient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)'
          }}
        />

        {/* 🟣 SVG Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: 'url(/assets/grid-bg.svg)',
            backgroundRepeat: 'repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: '8rem 6.3rem',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <div
            ref={(el) => { elementsRef.current[0] = el; }}
            data-anim="from-top"
            className="flex items-center gap-2 text-sm text-gray-400 mb-2 pt-9"
          >
            <Link href="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-cyan-300 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">How to Start a Crypto Casino in 2026</span>
          </div>

          {/* Main Title */}
          <div
            ref={(el) => { elementsRef.current[1] = el; }}
            data-anim="from-bottom"
            data-anim-delay="1"
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              How to Start a Crypto Casino Platform Step by Step in 2026
            </h1>
          </div>

          {/* Author & Metadata */}
          <div
            ref={(el) => { elementsRef.current[2] = el; }}
            data-anim="from-bottom"
            data-anim-delay="2"
            className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-400  pb-8"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-300">Ruchika Gupta</span>
            </div>
            <span className="hidden sm:block text-gray-600">•</span>
            <span>Published: <span className="text-gray-300">September 29, 2025 at 5:26 am</span></span>
            <span className="hidden sm:block text-gray-600">•</span>
            <span>Last Updated: <span className="text-gray-300">30 Apr 2026, 6:33 PM</span></span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE - ✅ OPTIMIZED */}
      <section className="relative bg-[#0b0b0f] pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            ref={(el) => { elementsRef.current[3] = el; }}
            data-anim="from-bottom"
            className="rounded-lg overflow-hidden border border-gray-700/50"
          >
            {/* ✅ NEXT/IMAGE - OPTIMIZED */}
            <Image
              src="/assets/features/tab-casino-platform-3.webp"
              alt="crypto casino platform development software dashboard"
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzA2MGIwZiIvPjwvc3ZnPg=='
              }}
            />
          </div>
        </div>
      </section>

      {/* BLOG ARTICLE WITH SIDEBAR */}
      <section className="relative bg-[#0b0b0f] py-9">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* LEFT SIDEBAR - TABLE OF CONTENTS */}
            <aside className="lg:col-span-1">
              <div className="toc-sidebar">
                {/* ✅ Changed h3 to p tag - fixes heading order */}
                <p className="text-lg font-bold text-white mb-6">TABLE OF CONTENTS</p>
                <nav className="space-y-3">
                  {blogSections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`toc-link block text-sm transition-colors ${
                        activeSection === section.id
                          ? 'active text-cyan-400 font-semibold'
                          : 'text-gray-400 hover:text-cyan-300'
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* MAIN CONTENT - 3 COLUMNS */}
            <article className="lg:col-span-3 blog-content">
              {blogSections.map((section, index) => (
                <div key={section.id}>
                  {/* 🔥 INJECT H2 BEFORE STEP1 - PERFECT SEO STRUCTURE */}
                  {section.id === 'step1' && (
                    <h2 className="text-2xl font-bold text-white mb-8">
                      Steps to Start Crypto Casino Platform
                    </h2>
                  )}

                  <div
                    id={section.id}
                    ref={(el) => { elementsRef.current[4 + index] = el; }}
                    data-anim="from-bottom"
                    data-anim-delay={String((index % 3) + 1)}
                    className="mb-12"
                  >
                    {section.id.startsWith('step') ? (
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {section.title}
                      </h3>
                    ) : (
                      <h2 className="text-2xl font-bold text-white mb-6">
                        {section.title}
                      </h2>
                    )}
                    
                    {section.content.map((paragraph, pIndex) => {
                      // Parse and render internal links
                      let content: any = paragraph;
                      
                      if (section.id === 'step1') {
                        if (pIndex === 0) {
                          content = (
                            <>
                              White Label: Fully branded platform with minimal development. You can start quickly using a{" "}
                              <Link href="/white-label-casino-solutions" className="text-cyan-400 underline hover:text-cyan-300">
                                white label casino solution
                              </Link>{" "}
                              for faster market entry. Quick market entry in 2-4 weeks with pre-built features.
                            </>
                          );
                        } else if (pIndex === 1) {
                          content = (
                            <>
                              Turnkey: Complete ownership with all features built-in. You can build a scalable platform using a{" "}
                              <Link href="/turnkey-casino-software-solutions" className="text-cyan-400 underline hover:text-cyan-300">
                                turnkey iGaming solution
                              </Link>
                              . Full control and customization with 8-12 weeks development timeline.
                            </>
                          );
                        }
                      } else if (section.id === 'step3' && pIndex === 0) {
                        content = (
                          <>
                            Connect slots, live casino, sports betting, and other gaming verticals through reliable APIs. You can streamline this process using a{" "}
                            <Link href="/casino-aggregator-api-solution" className="text-cyan-400 underline hover:text-cyan-300">
                              casino aggregator API solution
                            </Link>{" "}
                            to access multiple providers easily. Integration should be seamless and transparent to your end users.
                          </>
                        );
                      } else if (section.id === 'step2' && pIndex === 1) {
                        content = (
                          <>
                            Multi-currency support, strong security infrastructure, and 24/7 technical support are essential features. Choose a provider with proven track record in the iGaming industry. For unique business requirements, you can build a{" "}
                            <Link href="/custom-igaming-solution" className="text-cyan-400 underline hover:text-cyan-300">
                              custom iGaming solution
                            </Link>{" "}
                            tailored to your specific needs.
                          </>
                        );
                      } else if (section.id === 'step5' && pIndex === 1) {
                        content = (
                          <>
                            Implement comprehensive marketing campaigns and SEO strategies to drive organic traffic. Focus on community building and player retention. You can also expand into{" "}
                            <Link href="/turnkey-sportsbook-solutions" className="text-cyan-400 underline hover:text-cyan-300">
                              sports betting development
                            </Link>{" "}
                            for additional revenue streams.
                          </>
                        );
                      }
                      
                      return <p key={pIndex}>{content}</p>;
                    })}

                    {/* Different CTA Buttons for each Step */}
                    {section.id === 'step1' && (
                      <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <a
                          href="https://kelvurnux.com/#contact-form-section"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gradient-button px-6 py-3 rounded-lg font-bold text-black inline-block text-base hover:shadow-lg transition-shadow"
                        >
                          Get Demo
                        </a>
                      </div>
                    )}

                    {section.id === 'step2' && (
                      <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <a
                          href="https://kelvurnux.com/#contact-form-section"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gradient-button px-6 py-3 rounded-lg font-bold text-black inline-block text-base hover:shadow-lg transition-shadow"
                        >
                          Let's Discuss in Detail
                        </a>
                      </div>
                    )}

                    {section.id === 'step3' && (
                      <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <a
                          href="https://kelvurnux.com/#contact-form-section"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gradient-button px-6 py-3 rounded-lg font-bold text-black inline-block text-base hover:shadow-lg transition-shadow"
                        >
                          Talk To Us!
                        </a>
                      </div>
                    )}

                    {section.id === 'step4' && (
                      <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <a
                          href="https://kelvurnux.com/#contact-form-section"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gradient-button px-6 py-3 rounded-lg font-bold text-black inline-block text-base hover:shadow-lg transition-shadow"
                        >
                          Contact us to Know Today!
                        </a>
                      </div>
                    )}

                    {section.id === 'step5' && (
                      <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <a
                          href="https://kelvurnux.com/#contact-form-section"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gradient-button px-6 py-3 rounded-lg font-bold text-black inline-block text-base hover:shadow-lg transition-shadow"
                        >
                          Get Demo
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

   

      {/* CRYPTO CASINO FAQ SECTION */}
      <FAQSection
        faqs={[
          {
            question: 'How much does it cost to start a crypto casino?',
            answer:
              'The cost depends on features and customization. A startup package starts at $2,500, a standard package costs $4,000, and a premium crypto casino platform with full ownership costs $7,000. All packages include essential features, and you can upgrade based on your business needs.',
          },
          {
            question: 'How long does it take to launch a crypto casino platform?',
            answer:
              'A white label crypto casino platform can launch in 2–4 weeks, while a custom or turnkey platform may take 8–12 weeks depending on APIs, payment setup, and features. After understanding your requirements, we provide a clear timeline.',
          },
          {
            question: 'What software is needed for crypto casino development?',
            answer:
              'You need crypto casino software with game APIs, crypto payment integration, wallet system, admin panel, user management, security tools, analytics, and bonus systems. Our solutions provide all these integrated features with 150+ game providers and 20,000+ games.',
          },
          {
            question: 'Can I customize my crypto casino platform?',
            answer:
              'Yes, you can customize the design, games, payment methods, bonus system, admin panel, and features based on your business model and market. Our Turnkey and Custom solutions offer full customization capabilities.',
          },
          {
            question: 'Do I need a license to start a crypto casino?',
            answer:
              'Licensing depends on your target market and jurisdiction. Some businesses use licensed providers, while others apply for their own gaming license based on legal requirements. We can guide you on licensing best practices for your specific market.',
          },
        ]}
      />

     
    </>
  );
}