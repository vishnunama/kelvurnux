'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PartnershipBanner from '@/src/components/partnershipbanner/PartnershipBanner';
import BlogHeaderBanner from '@/src/components/blogheaderbanner/BlogHeaderBanner';
import BlogArticleFooter from '@/src/components/blogfooternav/BlogArticleFooter';

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
    id: 'sportsbook-integration-overview',
    title: 'Add Sports Betting to Your Casino',
    content: (
      <>
        <p>
          A player opens your sportsbook, places a bet and switches back to slots. Later, the match is canceled. Where does the stake go? Can your support team see why it came back? Ask the provider to show you that in a demo. The answer matters more to your launch than a long list of sports.
        </p>
        <p>
          Sportsbook integration connects sports betting to an existing casino. Depending on your platform and provider, players may be able to use their existing login and bet from the same balance. Before you sign, agree on what stays in your casino, what the sportsbook provider supplies, and who handles a bet when something goes wrong.
        </p>
      </>
    ),
  },
  {
    id: '1-decide-what-you-want-to-keep',
    title: '1. Decide what you want to keep',
    content: (
      <>
        <p>
          Write down what already works. That could be your website, player accounts, payments, wallet or back office. Tell the provider which pieces need to stay and ask what it needs from your current vendor.
        </p>
        <p>
          If another company controls your casino software, ask it to confirm that you can add an external sportsbook. Find out who can make the changes, what access they need and whether you’ll pay a separate fee. Get those answers before treating the integration date as firm.
        </p>
        <p>
          A sportsbook can appear inside your site or open as a separate branded experience. Ask the provider to demonstrate how players move between casino and sports on a phone. A smooth handoff matters even if the two sections look different.
        </p>
      </>
    ),
  },
  {
    id: '2-test-login-and-wallet-together',
    title: '2. Test the login and wallet together',
    content: (
      <>
        <p>
          Start with an existing casino test account. Log in, open sports betting and place a bet. Return to casino and check the balance. Ask where each balance change appears in the player history and in your admin panel.
        </p>
        <p>
          Agree upfront whether players will use one shared wallet or transfer funds between casino and sports balances. A shared wallet can simplify the player experience. Separate balances can also work if the transfer steps are clear and your team can trace both sides.
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Demo check</th>
                <th>What you should be able to see</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Existing login</strong></td>
                <td>A casino player opens sports betting with the agreed sign-in flow</td>
              </tr>
              <tr>
                <td><strong>Accepted bet</strong></td>
                <td>The stake leaves the correct balance and the bet appears in history</td>
              </tr>
              <tr>
                <td><strong>Changed odds</strong></td>
                <td>The player can see the new price before confirming, where applicable</td>
              </tr>
              <tr>
                <td><strong>Settled win</strong></td>
                <td>Winnings reach the expected balance and appear in the report</td>
              </tr>
              <tr>
                <td><strong>Void bet</strong></td>
                <td>The stake is returned according to the betting rules and recorded clearly</td>
              </tr>
              <tr>
                <td><strong>Admin review</strong></td>
                <td>Support can find the bet and explain the balance without vendor help</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: '3-watch-what-happens-when-bet-changes',
    title: '3. Watch what happens when a bet changes',
    showCta: true,
    ctaText: 'Discuss Your Sportsbook Integration',
    content: (
      <>
        <p>
          Ask for a win, a loss and a void bet in the demo. If you plan to offer live betting, ask what the player sees when odds change or a market closes while they are placing a bet. For any feature you plan to sell at launch, ask to see it with the configuration you intend to use.
        </p>
        <p>
          Also ask who corrects a settlement if a result changes. Your support team should know which details to capture, who reviews the issue and where the final decision is recorded. A screenshot of the bet slip only tells part of the story. You also need the bet reference and the related wallet records.
        </p>
      </>
    ),
  },
  {
    id: '4-check-what-team-can-see-and-control',
    title: '4. Check what your team can see and control',
    content: (
      <>
        <p>
          Ask a support lead to find a test bet without the vendor guiding them through the screens. Then ask someone on finance to pull the report they would use at month-end. Check whether it separates stakes, payouts and voids, and whether it can be matched against wallet activity.
        </p>
        <p>
          Ask who controls betting limits, market availability and access to reports. Write down which changes your team can make and which ones require the provider. If there’s a live betting issue outside business hours, your team should know who to contact.
        </p>
      </>
    ),
  },
  {
    id: '5-get-itemized-quote-before-committing',
    title: '5. Get an itemized quote before committing',
    content: (
      <>
        <p>
          Ask for setup, customization, ongoing support and provider charges on separate lines. If the quote includes a revenue share or monthly minimum, ask how it is calculated and when billing starts. Confirm which sports, markets and features are included in your quote.
        </p>
        <p>
          Before setting a launch date, agree on who will supply test access, who will sign off on the wallet and settlement checks, and what happens if a launch-critical issue remains open. Confirm the approvals and provider permissions required for your intended markets with your advisers and providers.
        </p>
      </>
    ),
  },
  {
    id: 'integration-or-full-sportsbook-setup',
    title: 'Integration or a full sportsbook setup?',
    content: (
      <>
        <p>
          If your casino platform is staying, start with a review of its login, wallet and back office. The scope depends on what your current platform and chosen sportsbook can support.
        </p>
        <p>
          If you need the full platform,{' '}
          <Link
            href="/turnkey-sportsbook-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            KVAORNUX Turnkey Sportsbook Solutions
          </Link>{' '}
          covers the sportsbook interface, provider integration, live betting features and operator tools for managing bets, payments and reporting. Tell us what you already have so we can discuss the work your project actually needs.
        </p>
      </>
    ),
  },
  {
    id: 'frequently-asked-questions',
    title: 'Frequently asked questions',
    content: (
      <div className="space-y-6">
        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            Can I add a sportsbook to my existing casino website?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Yes, if your current casino platform and sportsbook provider support the connection. Confirm access to player accounts and wallet functions with your current vendor before agreeing on scope.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            Do casino and sportsbook need separate wallets?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            That depends on the setup. Ask your provider to demo a shared balance or a transfer between balances. Test a stake, a payout and a void before deciding.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            What affects sportsbook integration cost?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            The main variables are provider fees, work on your existing platform, branding, reporting and support. Ask for an itemized quote so you can compare setup and ongoing charges.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            Can we test sportsbook integration before going live?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Ask the provider whether it offers a test environment, which flows it supports and whether any fees apply to test activity. Agree on these points before scheduling testing.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'discuss-your-sportsbook-integration',
    title: 'Discuss Your Sportsbook Integration',
    showCta: true,
    ctaText: 'Discuss Your Sportsbook Integration',
    content: (
      <>
        <p>
          Already have a casino platform? Share your current setup, preferred sportsbook provider and wallet model. We’ll discuss what can stay, what needs to connect and which flows to test before launch.
        </p>
      </>
    ),
  },
];

export default function SportsbookIntegrationClient() {
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
        title="Sportsbook Integration: How to Add Sports Betting to an Existing Casino"
        date="03.11.2026"
        readTime="6 min read"
        tags={['Sportsbook Integration', 'Sports Betting API', 'Turnkey', 'Shared Wallet']}
        bannerImage="/assets/features/sportsbook-integration-banner.webp"
        authorRole="Editorial Team"
        factCheckerName=""
        breadcrumbCurrent="Sportsbook Integration"
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
                          {section.ctaText || 'Discuss Your Sportsbook Integration'}
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
      <BlogArticleFooter currentSlug="sportsbook-integration" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner
        title="Discuss Your Sportsbook Integration"
        buttonText="Contact Us"
      />
    </>
  );
}

