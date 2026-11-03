'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PartnershipBanner from '@/src/components/partnershipbanner/PartnershipBanner';
import BlogHeaderBanner from '@/src/components/blogheaderbanner/BlogHeaderBanner';
import BlogArticleFooter from '@/src/components/blogfooternav/BlogArticleFooter';
import { faqList } from './faqData';

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
    background: linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a;
    border: 1px solid rgba(0, 235, 170, 0.3);
  }

  .gradient-button {
    background: radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%);
    box-shadow: 0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset;
    color: #04160f;
    font-weight: 700;
    overflow: hidden;
    transition: filter 0.25s ease;
  }

  .gradient-button:hover {
    transform: none;
    filter: brightness(0.92);
    color: #04160f;
  }

  .gradient-button:active {
    transform: none;
    filter: brightness(0.86);
  }

  /* TOC Sticky Sidebar (Right Side) */
  .toc-card {
    position: sticky;
    top: 6rem;
    z-index: 10;
    max-height: calc(100vh - 8rem);
    overflow-y: auto;
    border-radius: 1.2rem;
    border: 1px solid rgba(0, 235, 170, 0.25);
    background: linear-gradient(180deg, #0a2528 0%, #07151c 100%);
    box-shadow: -2px 2px 4px 0 rgba(255, 139, 67, 0.11) inset, 0 -2px 4.6px 0 rgba(126, 201, 255, 0.16) inset, 0 10px 30px rgba(0, 0, 0, 0.4);
    padding: 1.8rem 1.5rem;
    width: 100%;
  }

  .toc-card::-webkit-scrollbar {
    width: 4px;
  }
  .toc-card::-webkit-scrollbar-thumb {
    background: rgba(0, 235, 170, 0.3);
    border-radius: 4px;
  }

  .toc-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1.25rem;
    line-height: 1.3;
  }

  .toc-list {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .toc-link-item {
    font-size: 0.92rem;
    line-height: 1.45;
    color: #00ebaa;
    text-decoration: none;
    transition: all 0.2s ease;
    display: block;
  }

  .toc-link-item:hover {
    color: #fff;
  }

  .toc-link-item.active {
    color: #00ebaa;
    font-weight: 700;
  }

  /* Blog Article Styles */
  .blog-content h2 {
    font-size: 1.85rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    color: #fff;
    scroll-margin-top: 100px;
  }

  .blog-content h3 {
    font-size: 1.35rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.85rem;
    color: #00ebaa;
    scroll-margin-top: 100px;
  }

  .blog-content p {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: #d1d5db;
    margin-bottom: 1.25rem;
  }

  .blog-content ul, .blog-content ol {
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
    list-style-type: disc;
  }

  .blog-content li {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: #d1d5db;
    margin-bottom: 0.6rem;
  }

  .blog-content table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .blog-content th, .blog-content td {
    padding: 0.85rem 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.95rem;
    color: #d1d5db;
  }

  .blog-content th {
    background: rgba(0, 235, 170, 0.1);
    color: #00ebaa;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
  }

  .blog-content tr:last-child td {
    border-bottom: none;
  }
`;

interface BlogSection {
  id: string;
  title: string;
  content: React.ReactNode;
  showCta?: boolean;
  ctaText?: string;
}

const blogSections: BlogSection[] = [
  {
    id: 'gambling-software-for-sale-overview',
    title: 'Know What You’re Buying',
    content: (
      <>
        <p>
          Two vendors can sell you a “complete casino” and mean very different things. One quote might cover your branded site and admin panel. The other might also include the platform code, installation on your hosting and a handover to your team. Ask both vendors for the same list of deliverables before you compare the prices.
        </p>
        <p>
          <strong className="text-white">Gambling software for sale</strong> can mean a ready-made casino platform you license or a package that includes the platform source code. Before you buy, check what the vendor delivers, what you can operate independently, and which fees continue after launch.
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Ask the vendor</th>
                <th>What to get in writing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">What can I launch with this package?</td>
                <td>Player site, admin panel, wallet, game connections and payment setup</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">What code will I receive?</td>
                <td>Exact components, delivery date and rights to host or modify them</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Which games can I offer?</td>
                <td>Approved studios, markets, activation steps and fees</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Who controls the accounts and data?</td>
                <td>Hosting and provider account holders, export access and exit terms</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">What will I pay after launch?</td>
                <td>Support, hosting, updates and third-party fees</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: '1-check-what-package-includes',
    title: '1. Check what the package actually includes',
    content: (
      <>
        <p>
          Ask to see the player site and the admin panel in the same demo. Register a test player, make a test deposit, open a game and request a withdrawal. Then find those steps in the admin panel. Your support team should be able to see why a payment is pending and who can review it.
        </p>
        <p>
          Ask the vendor to mark each item on the quote as included, optional or supplied by a third party. If you only need casino games, say so. If you need a sportsbook too, ask whether it comes in the quoted package and whether it uses the same player account and wallet.
        </p>
      </>
    ),
  },
  {
    id: '2-ask-what-source-code-included-means',
    title: '2. Ask what “source code included” means',
    content: (
      <>
        <p>
          Ask for a list of the code you’ll receive. Does it cover the player site, admin panel and the parts that manage accounts and balances? Will your team receive setup instructions and the information needed to run the software on your hosting?
        </p>
        <p>
          Then check the contract. Can you modify the code? Can another developer maintain it? Can you use it for another brand? The answers depend on the agreement. If independent hosting is part of your purchase, ask the vendor to show that the software can run in an environment you control before you sign off on delivery.
        </p>
      </>
    ),
  },
  {
    id: '3-separate-platform-code-from-game-access',
    title: '3. Separate platform code from casino game access',
    content: (
      <>
        <p>
          A casino platform can connect to games through a game provider or aggregator. That connection gives your platform a way to offer the games covered by the provider agreement. Buying the casino platform code does not give you the source code for those third-party games.
        </p>
        <p>
          Send the vendor a short list of the studios and titles you want. Ask which can be activated for your intended markets, who signs the provider agreement and who receives the invoice. If you need to move to another platform later, ask whether you can keep using the same game account or need a new agreement.
        </p>
      </>
    ),
  },
  {
    id: '4-compare-first-year-bill',
    title: '4. Compare the first-year bill',
    content: (
      <>
        <p>
          Get the upfront cost and ongoing fees on separate lines. Ask about hosting, software updates, support, payment processing and game content. If a fee is based on revenue, confirm the calculation and any monthly minimum. Ask when billing starts and whether testing carries separate charges.
        </p>
        <p>
          For example, a hypothetical quote with a $6,000 setup fee and $700 a month totals $14,400 over 12 months. A quote with a $10,000 setup fee and $300 a month totals $13,600. Both totals exclude third-party fees. Compare the same game list, payment setup and support coverage before choosing between them.
        </p>
      </>
    ),
  },
  {
    id: '5-know-what-happens-if-you-change-vendors',
    title: '5. Know what happens if you change vendors',
    content: (
      <>
        <p>
          Ask for a sample export of player accounts, balances and transaction history. Check who can request it, what format it comes in and how long you can access it after the contract ends.
        </p>
        <p>
          Write down who holds the hosting, payment and game provider accounts. If you plan to switch vendors someday, those accounts and the data export will matter as much as the code. Ask the vendor to explain the handover before you need it.
        </p>
      </>
    ),
  },
  {
    id: 'compare-white-label-and-turnkey',
    title: 'Compare KVAORNUX White Label and Turnkey',
    content: (
      <>
        <p>
          <Link
            href="/white-label-casino-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            KVAORNUX White Label Casino Solutions
          </Link>{' '}
          start with a ready-built platform that can be branded for your business. Platform source code is available separately. The{' '}
          <Link
            href="/turnkey-casino-software-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            Turnkey Casino package
          </Link>{' '}
          includes casino, sportsbook and platform source code. Your agreement defines the delivery scope and usage rights.
        </p>
        <p>
          If you’re comparing quotes, send us the markets you intend to serve, the games and payments you need, and whether you want your team to host or maintain the platform. We can discuss those requirements in a demo and itemize the proposed scope.
        </p>
      </>
    ),
  },
  {
    id: 'frequently-asked-questions',
    title: 'Frequently asked questions',
    content: (
      <div className="space-y-6">
        {faqList.map((faq, index) => (
          <div key={index} className="border-b border-white/10 pb-6">
            <h3 className="text-xl font-medium text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'request-itemized-platform-quote',
    title: 'Request an Itemized Platform Quote',
    showCta: true,
    ctaText: 'Request an Itemized Platform Quote',
    content: (
      <>
        <p>
          Tell KVAORNUX what you want to launch, which games and payments you need, and whether source code matters to your team. We’ll walk through the proposed scope so you can compare it against your other quotes.
        </p>
      </>
    ),
  },
];

export default function GamblingSoftwareForSaleClient() {
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
      const sections = blogSections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, el, top: el?.getBoundingClientRect().top || 0 };
      });

      const active = sections.find((s) => s.top > 0 && s.top < 300);
      if (active) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-trigger animations when component mounts or route changes
  useEffect(() => {
    const elements = document.querySelectorAll('[data-anim]');
    elements.forEach((el) => {
      el.classList.remove('visible');
    });

    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add('visible');
      });
    }, 100);
  }, [pathname]);

  return (
    <>
      <style>{styles}</style>

      {/* BLOG HEADER BANNER */}
      <BlogHeaderBanner
        title="Gambling Software for Sale: What to Check Before Buying a Casino Platform"
        date="03.11.2026"
        readTime="6 min read"
        tags={['Gambling Software for Sale', 'Casino Source Code', 'Casino Game API', 'White Label', 'Turnkey']}
        bannerImage="/assets/features/gambling-software-for-sale-banner.webp"
        authorRole="Editorial Team"
        factCheckerName=""
        breadcrumbCurrent="Gambling Software for Sale"
      />

      {/* BLOG ARTICLE WITH SIDEBAR */}
      <section className="relative bg-[#0b0b0f] py-9">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)',
          }}
        />

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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* LEFT SIDE - MAIN ARTICLE CONTENT */}
            <article className="lg:col-span-8 blog-content">
              {blogSections.map((section, index) => (
                <div key={section.id}>
                  <div
                    id={section.id}
                    ref={(el) => {
                      elementsRef.current[4 + index] = el;
                    }}
                    data-anim="from-bottom"
                    data-anim-delay={String((index % 3) + 1)}
                    className="mb-12"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6">
                      {section.title}
                    </h2>

                    {section.content}

                    {section.showCta && (
                      <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <Link
                          href="/#contact-form-section"
                          className="gradient-button px-6 py-3 rounded-lg font-bold text-black inline-block text-base hover:shadow-lg transition-shadow"
                        >
                          {section.ctaText || 'Request an Itemized Platform Quote'}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </article>

            {/* RIGHT SIDEBAR - STYLED TABLE OF CONTENTS CARD */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="toc-card">
                <h3 className="toc-title gradient-text">Table of Contents</h3>
                <ul className="toc-list">
                  {blogSections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`toc-link-item ${
                          activeSection === section.id ? 'active' : ''
                        }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Blog Article Footer: Previous Article Button & Experts Recommendations */}
      <BlogArticleFooter currentSlug="gambling-software-for-sale" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner
        title="Request an Itemized Platform Quote"
        buttonText="Get Quote"
      />
    </>
  );
}

