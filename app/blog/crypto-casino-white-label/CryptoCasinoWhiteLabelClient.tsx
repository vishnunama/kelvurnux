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
    id: '7-checks-before-you-sign',
    title: '7 Checks Before You Sign',
    content: (
      <>
        <p>
          A crypto casino demo can make a deposit look easy. The harder question is what your team sees when a player says the money left their wallet but never reached their account. Ask the provider to show you that screen before you sign.
        </p>
        <p>
          A <strong>crypto casino white label</strong> is a ready-built online casino platform that an operator can launch under its own brand, with crypto payments configured for the project. Packages differ in what they cover. Before choosing one, check how money moves, which games you can offer, how you&apos;ll be billed and what you can take with you if you switch providers.
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Check</th>
                <th>What to ask the provider to show</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Coins and networks</strong></td>
                <td>The exact coin and network combinations for deposits and withdrawals</td>
              </tr>
              <tr>
                <td><strong>Deposits</strong></td>
                <td>A payment moving from pending to credited</td>
              </tr>
              <tr>
                <td><strong>Withdrawals</strong></td>
                <td>An approval, a completed payout and a failed payout</td>
              </tr>
              <tr>
                <td><strong>Wallet records</strong></td>
                <td>One transaction traced from payment to player balance</td>
              </tr>
              <tr>
                <td><strong>Games</strong></td>
                <td>A sample lobby using the studios available for your project</td>
              </tr>
              <tr>
                <td><strong>Fees</strong></td>
                <td>An itemized quote and one sample monthly invoice</td>
              </tr>
              <tr>
                <td><strong>Ownership</strong></td>
                <td>A sample data export and the written source code terms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: '1-confirm-supported-coins-and-networks',
    title: '1. Confirm which coins and networks are supported',
    content: (
      <>
        <p>
          Ask for a written list of what players can deposit and withdraw. A coin name alone leaves room for confusion. If the provider says it supports USDT, ask which networks it supports and whether the same options are available for withdrawals.
        </p>
        <p>
          Open the cashier on a phone during the demo. Check whether the player can clearly see the coin, network, minimum amount and any fee before sending money. Ask what support can do if a player sends funds on the wrong network and when recovery may be possible.
        </p>
      </>
    ),
  },
  {
    id: '2-watch-deposit-pending-to-credited',
    title: '2. Watch a deposit go from pending to credited',
    content: (
      <>
        <p>
          Ask the provider to make a test deposit and show both sides of the transaction. The player should see whether it is pending or complete. Your support team should be able to find the same payment in the back office.
        </p>
        <p>
          Then ask what happens if the payment arrives late or the player sends less than expected. Can support find it using a transaction ID? Who can review it, and what record is kept if anyone adjusts the balance? The demo should give your team a clear answer to each of those questions.
        </p>
      </>
    ),
  },
  {
    id: '3-test-withdrawal-request-to-payout',
    title: '3. Test a withdrawal from request to payout',
    showCta: true,
    ctaText: 'Request a Crypto Casino Demo',
    content: (
      <>
        <p>
          Ask the provider to submit a test withdrawal, approve it and show the completed payout. Find out which withdrawals can go through automatically and which need someone to review them. Ask who controls the funds used for payouts and who can approve a payout.
        </p>
        <p>
          Run through a failed withdrawal too. Check what the player sees, whether their balance is restored, and how your team avoids paying twice if it retries. Ask who handles identity checks and where your team sees the outcome before approving a payout.
        </p>
      </>
    ),
  },
  {
    id: '4-trace-transaction-wallet-back-office',
    title: '4. Trace one transaction through the wallet and back office',
    content: (
      <>
        <p>
          Ask the provider to follow one test account through a deposit, a game round and a withdrawal. Your team should be able to see what changed the balance at each step and export the history for review.
        </p>
        <p>
          Also ask what happens if a game round is cancelled or a payment update is received twice. For an operator, the question is simple: can your team explain the player’s balance without asking the provider to investigate every discrepancy?
        </p>
      </>
    ),
  },
  {
    id: '5-verify-games-you-can-offer',
    title: '5. Verify the games you can actually offer',
    content: (
      <>
        <p>
          Give the provider a short list of the studios and game types you want at launch. Ask them to confirm what can be activated for your intended markets and what requires a separate agreement or fee.
        </p>
        <p>
          Test a few representative titles with a demo balance. Ask whether games display the player’s crypto balance directly or use a converted currency. If there’s a conversion, find out which rate is used and whether your back office shows the original and converted amounts.
        </p>
      </>
    ),
  },
  {
    id: '6-compare-full-bill-ggr-fees',
    title: '6. Compare the full bill, including GGR fees',
    showCta: true,
    ctaText: 'Request Platform Pricing',
    content: (
      <>
        <p>
          Ask for the setup cost, ongoing platform fees and third-party charges on separate lines. Confirm what the quote includes for hosting, support, game content, payment processing and additional brands.
        </p>
        <p>
          If the quote uses a percentage of gross gaming revenue (GGR), ask the provider to define the amount the percentage applies to. Ask how bonuses, refunds and adjustments affect the invoice, and whether a monthly minimum is added to the fee or credited against it.
        </p>
        <p>
          For example, suppose one quote charges a flat $2,000 per month and another charges 10% of $30,000 in monthly GGR. The platform fees would be $2,000 and $3,000 respectively for that month, before other charges. These figures are illustrative. Run your real quotes at a quiet month and a busy month to see how the bill changes.
        </p>
      </>
    ),
  },
  {
    id: '7-confirm-what-you-can-take',
    title: '7. Confirm what you can take with you',
    content: (
      <>
        <p>
          Ask for a sample export of player accounts, balances and transaction records. Check who can request an export, how long it takes, what it costs and what access you retain after the contract ends.
        </p>
        <p>
          If source code matters to your business, ask exactly what is delivered, what you can modify and which third-party components require separate agreements. Also confirm whose accounts are used for hosting, game providers and payment services. Those details shape how easily you can move the platform later.
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
          KVAORNUX’s{' '}
          <Link
            href="/white-label-casino-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            White Label Casino Solutions
          </Link>{' '}
          use a ready-built platform with branding, player accounts, wallet tools and an operator back office. Source code can be purchased separately. The{' '}
          <Link
            href="/turnkey-casino-software-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            Turnkey Casino package
          </Link>{' '}
          includes casino, sportsbook and platform source code. The agreement defines the rights and delivery terms.
        </p>
        <p>
          If crypto payments are central to your launch, share your preferred coins, networks, game studios and target markets when you request a demo. The{' '}
          <Link
            href="/crypto-casino-software"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            Crypto iGaming Solutions page
          </Link>{' '}
          explains the platform options. The demo is where you can confirm what fits your project.
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
            What is a crypto casino white label?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            It is an existing casino platform configured for an operator’s brand and crypto payment requirements. The quote should spell out the software, games, payment services, hosting and support included in the package.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            What should I test first in a crypto casino demo?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Start with a test deposit and a test withdrawal. Follow both from the player cashier to the admin panel. Then ask the provider to show what happens when a transaction fails or needs manual review.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            How much does a white label crypto casino platform cost?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Pricing depends on the package and integrations. Ask for a one-time setup figure, recurring fees, any revenue share, and separate charges for games and payments. Compare quotes using the same expected activity and support needs.
          </p>
        </div>

        <div className="border-b border-white/10 pb-6">
          <h3 className="text-xl font-medium text-white mb-2">
            Does white label crypto casino software include source code?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            That depends on the provider and agreement. KVAORNUX offers source code separately with White Label and includes platform source code in its Turnkey package. Ask for the delivery scope and usage rights in writing.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'request-crypto-casino-demo',
    title: 'Request a Crypto Casino Demo',
    showCta: true,
    ctaText: 'Request a Crypto Casino Demo',
    content: (
      <>
        <p>
          Send us the coins, networks and games you want to support. We’ll walk through the cashier and back office with you and clarify what should go into your quote.
        </p>
      </>
    ),
  },
];

export default function CryptoCasinoWhiteLabelClient() {
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
        title="Crypto Casino White Label: 7 Checks Before You Sign"
        date="03.11.2026"
        readTime="8 min read"
        tags={['Crypto Casino', 'White Label', 'Operator Checklist', 'Turnkey']}
        bannerImage="/assets/features/crypto-casino-white-label-banner.webp"
        authorRole="Editorial Team"
        factCheckerName=""
        breadcrumbCurrent="Crypto Casino White Label"
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
                          {section.ctaText || 'Request a Crypto Casino Demo'}
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
      <BlogArticleFooter currentSlug="crypto-casino-white-label" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner
        title="Request a Crypto Casino Demo"
        buttonText="Request Demo"
      />
    </>
  );
}

