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
    id: 'launch-checklist-for-operators',
    title: 'From First Quote to Go-Live',
    content: (
      <>
        <p>
          Before you pay a platform deposit, ask the vendor to show you what happens when a player’s withdrawal fails. Can your team see why it failed? Does the balance update correctly? Who can approve a retry? That short demo tells you more about running the business than a tour of the game lobby.
        </p>
        <p>
          To start your own iGaming business, define your product and target market, confirm the approvals you need, compare platform quotes on the same scope, and test a full player journey before you launch. Give one person responsibility for each launch check and agree in advance which problems would delay opening.
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>What you should have before moving on</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Define the launch</strong></td>
                <td>A one-page brief with your product, market and first-day requirements</td>
              </tr>
              <tr>
                <td><strong>Confirm approvals</strong></td>
                <td>A written list of approvals and provider accounts, with an owner for each</td>
              </tr>
              <tr>
                <td><strong>Compare quotes</strong></td>
                <td>Setup, recurring and third-party fees shown separately</td>
              </tr>
              <tr>
                <td><strong>Test the demo</strong></td>
                <td>Evidence that registration, play, deposits and withdrawals work end to end</td>
              </tr>
              <tr>
                <td><strong>Prepare the team</strong></td>
                <td>Named staff for player support, payment reviews and launch issues</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: '1-write-down-what-you-want-to-launch',
    title: '1. Write down what you want to launch',
    content: (
      <>
        <p>
          Start with the product. Is it an online casino, a sportsbook, or both? Then list the first market, currency, languages, must-have games and payment methods. Keep it to one page so every vendor prices the same project.
        </p>
        <p>
          Separate what you need on opening day from what you can add later. If your players need local bank transfers, get that into the launch scope before spending time on a loyalty program. Give each requirement a simple acceptance check. For a bank transfer, that could mean making a test payment on a phone and finding the same payment in the admin panel.
        </p>
      </>
    ),
  },
  {
    id: '2-confirm-approvals-and-provider-accounts',
    title: '2. Confirm who handles approvals and provider accounts',
    content: (
      <>
        <p>
          Ask a qualified adviser to confirm the approvals required for your product and intended market. Ask each vendor which parts they handle and which parts your company must arrange, including game provider agreements, payment accounts and player checks. Record who owns each task and what needs to be in place before you can open.
        </p>
        <p>
          A platform demo and an approved payment account are separate milestones. Ask the payment provider to confirm that it can support your business before you treat that payment method as part of the launch.
        </p>
      </>
    ),
  },
  {
    id: '3-compare-platform-quotes-same-scope',
    title: '3. Compare platform quotes on the same scope',
    showCta: true,
    ctaText: 'Compare Platform Options',
    content: (
      <>
        <p>
          Send the same one-page brief to each vendor. Ask for setup, branding, monthly support, hosting, game fees and payment fees on separate lines. If there’s a revenue share, ask what it applies to, whether a monthly minimum is charged and whether the minimum is credited against the share. Also ask what happens to player records and account balances if you move providers.
        </p>
        <p>
          A lower setup fee can still mean a bigger first-year bill. For example, a hypothetical quote of $5,000 upfront plus $1,000 a month totals $17,000 in year one. A quote of $10,000 upfront plus $500 a month totals $16,000. Both examples exclude other charges. Run the same calculation using your actual quotes and check whether they include the same work.
        </p>
        <p>
          KVAORNUX offers{' '}
          <Link
            href="/white-label-casino-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            White Label Casino Solutions
          </Link>{' '}
          on a ready-built platform, with source code available separately. Its{' '}
          <Link
            href="/turnkey-casino-software-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            Turnkey Casino package
          </Link>{' '}
          includes casino, sportsbook and platform source code, with rights and delivery terms set in the agreement. For a broader comparison of platform models, see the{' '}
          <Link
            href="/blog/igaming-software-development"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            iGaming software development guide
          </Link>.
        </p>
      </>
    ),
  },
  {
    id: '4-run-demo-player-and-operator',
    title: '4. Run the demo as a player and an operator',
    showCta: true,
    ctaText: 'Request a Platform Demo',
    content: (
      <>
        <p>
          Use a phone and a fresh test account. Register, make a test deposit, open a game, finish a round and request a withdrawal. Then switch to the admin panel. Ask your support lead to find the account, explain the balance and check the withdrawal status without the vendor taking over the screen.
        </p>
        <p>
          Ask the vendor to show at least one exception. A pending deposit or failed payout will do. Write down what the player sees, what the support team sees and who can resolve it. If the vendor says a key step will only be available later, put that step in the written scope and agree when you’ll test it.
        </p>
      </>
    ),
  },
  {
    id: '5-decide-what-would-stop-the-launch',
    title: '5. Decide what would stop the launch',
    content: (
      <>
        <p>
          Agree on your go-live checks while there’s still time to fix problems. Confirm the agreed games load, payments work, staff can access the right screens and your team can respond if a player gets stuck. Check that your team knows who handles payment issues outside normal working hours.
        </p>
        <p>
          A banner that needs new artwork can usually wait. A balance you can’t explain, a withdrawal nobody can approve or a missing approval needs a decision before launch. Record the issue, who owns it and what you need to see before it’s closed.
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
            What do I need before asking for an iGaming platform quote?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Bring your product type, intended market, currency, must-have games and payment methods. Add a target launch date and say which features can wait. This gives each vendor a consistent scope to price.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            How much does it cost to start an iGaming business?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Your costs depend on the platform scope, provider fees, payments, approvals, staffing and other operating expenses. Ask for a written quote and separate one-time charges from recurring and usage-based fees. Compare first-year totals using the same assumptions.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            What should I test in an iGaming platform demo?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Test registration, a deposit, a game round and a withdrawal. Review the same account in the back office. Ask the provider to show a pending payment or failed withdrawal so your support team knows what it can do.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            How long does it take to launch an iGaming platform?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            The timeline depends on what needs configuring, which providers and approvals are ready, and how much testing or custom work is involved. Ask the vendor to separate software setup from the other steps that determine your opening date.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'request-a-platform-demo',
    title: 'Request a Platform Demo',
    showCta: true,
    ctaText: 'Request a Platform Demo',
    content: (
      <>
        <p>
          Send KVAORNUX your product, target market and must-have games and payments. We’ll use that list to walk through the player experience and operator dashboard and clarify what belongs in your quote.
        </p>
      </>
    ),
  },
];

export default function StartYourOwnIgamingBusinessClient() {
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
        title="How to Start Your Own iGaming Business: A Launch Checklist for Operators"
        date="03.11.2026"
        readTime="7 min read"
        tags={['iGaming Launch', 'Operator Checklist', 'Platform Demo', 'Turnkey']}
        bannerImage="/assets/features/start-your-own-igaming-business-banner.webp"
        authorRole="Editorial Team"
        factCheckerName=""
        breadcrumbCurrent="Start Your Own iGaming Business"
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
                          {section.ctaText || 'Request a Platform Demo'}
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
      <BlogArticleFooter currentSlug="start-your-own-igaming-business" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner
        title="Request a Platform Demo"
        buttonText="Request Demo"
      />
    </>
  );
}

