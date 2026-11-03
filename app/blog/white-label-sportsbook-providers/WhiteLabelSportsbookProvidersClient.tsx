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
    id: 'compare-before-you-sign',
    title: 'Compare Before You Sign',
    content: (
      <>
        <p>
          Two sportsbook quotes land in your inbox. Both promise live betting. One includes a trading team that manages odds and limits during matches. The other gives your staff the tools to do that work themselves. If you compare only the monthly fee, you miss a cost that will show up every weekend.
        </p>
        <p>
          <strong className="text-white">
            White label sportsbook providers supply sports betting software that operators can configure under their own brand.
          </strong>{' '}
          A package may also include odds, trading, hosting and support. Ask who handles each of those jobs, what happens when a match goes wrong, and what you’ll pay once the sportsbook is live.
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Compare</th>
                <th>What to get in writing</th>
                <th>What to test in the demo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Sports and markets</td>
                <td>Launch coverage, live markets and bet types</td>
                <td>Find the events your audience follows</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Trading and risk</td>
                <td>Who manages odds, limits and market suspensions</td>
                <td>See a price change and a rejected bet</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Settlement</td>
                <td>Who settles, voids and corrects bets</td>
                <td>Trace a payout and a returned stake</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Fees</td>
                <td>Setup, monthly charges, revenue share and extras</td>
                <td>Ask for a sample invoice</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Support</td>
                <td>Hours, escalation contacts and response commitments</td>
                <td>Ask who handles a Saturday outage</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Data and exit</td>
                <td>Export scope, access and handover terms</td>
                <td>Download a sample report</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'give-every-provider-same-brief',
    title: 'Give every provider the same brief',
    content: (
      <>
        <p>
          Start with one page. List the markets you intend to serve, your preferred currency, the sports that matter and whether you already have a casino. State whether you need a complete platform or want the sportsbook to work with existing player accounts and balances. Ask providers to quote against that same brief.
        </p>
        <p>
          Be specific about what has to work on opening day. If football is your main product, name the leagues and bet types you want before and during matches. If you plan to add another sport later, ask whether adding it changes the fee or requires extra setup. A long sports list is less useful than a written answer about the events your audience actually watches.
        </p>
        <p>
          Also ask how the provider defines white label. Some proposals cover software and branding. Others include a wider set of operating services. Put hosting, trading, customer support, payments and any licensing responsibilities on separate lines. Have your own qualified adviser confirm what approvals apply to the intended operation before committing to a launch date.
        </p>
      </>
    ),
  },
  {
    id: 'check-live-coverage-on-a-phone',
    title: 'Check live coverage on a phone',
    content: (
      <>
        <p>
          Ask for a live demo during an event that matters to you. Open the sportsbook on a phone. Find the event, open the markets and add a selection to the bet slip. If you expect customers to use a particular bet type, ask to see it in the quoted package. A feature may appear in a general demo even if it requires another module or depends on the event.
        </p>
        <p>
          Watch what happens when odds change just before confirmation. Does the player see the new price? Can they choose whether to accept it? Then ask the provider to suspend a market in a test environment. The player should receive a clear status, and support should be able to see why the bet was unavailable.
        </p>
        <p>
          Give the provider a copy of your required sports and markets after the call. Ask them to mark each item as available at launch, available with additional work, or unavailable. Keep the response with the quote so the person signing it can see exactly what the demo proved.
        </p>
      </>
    ),
  },
  {
    id: 'find-out-who-manages-odds-limits-and-risk',
    title: 'Find out who manages odds, limits and risk',
    content: (
      <>
        <p>
          An odds feed supplies prices and event updates. A trading service may also monitor betting activity, adjust prices and limits, or suspend markets. Ask a white label sportsbook provider to explain which tasks its team takes on and which tasks remain with you.
        </p>
        <p>
          Use a concrete example. Say an unusual number of bets arrive on a small league. Ask who can lower the limits, whether your team can pause the market, and who can see the record of that decision. If you prefer managed trading, confirm who responds outside business hours and which decisions still require your approval. If you plan to manage trading yourself, ask which controls come with the quoted software and what training is included.
        </p>
        <p>
          Check permissions with two test accounts. A support agent may need to see a bet and its status. A manager may need to change a limit. Ask the vendor to show how those roles differ and where changes are recorded. Your team should know who can take action before a real incident puts that question under pressure.
        </p>
      </>
    ),
  },
  {
    id: 'test-a-win-a-void-and-a-correction',
    title: 'Test a win, a void and a correction',
    content: (
      <>
        <p>
          Ask for three examples in the test environment. First, settle a winning bet and trace the payout in the player’s wallet. Second, void a bet and check how the stake returns. Third, ask how the provider handles a result that needs correcting after the original settlement.
        </p>
        <p>
          For each example, look at the player view and the back office. Can support find the bet by its reference number? Can finance match the stake and payout to the transaction report? If the vendor corrects a result, can your team see the original entry and the correction? These checks matter more when someone raises a dispute after the match.
        </p>
        <p>
          If you already run a casino, also test the transition between products. Ask whether the sportsbook can use the same sign-in and wallet, or whether players need to move funds between balances. The{' '}
          <Link
            href="/blog/sportsbook-integration"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            Sportsbook Integration guide
          </Link>{' '}
          covers those connection tests in more detail. Keep your provider decision focused on whether the quoted setup can pass the checks you need.
        </p>
      </>
    ),
  },
  {
    id: 'compare-the-full-bill',
    title: 'Compare the full bill',
    content: (
      <>
        <p>
          Ask for an itemized quote showing setup, branding, hosting, trading, support and any third-party charges. Confirm when recurring fees start. If there is a percentage of gross gaming revenue, ask the provider to define the calculation and show how adjustments, voids and bonuses affect the invoice. A monthly minimum may be applied differently across offers, so ask how it interacts with the percentage.
        </p>
        <p>
          For example, imagine one proposal costs a flat $2,500 per month and another charges 10% of monthly gross gaming revenue with a $1,500 minimum. At $10,000 in monthly revenue under that definition, the second proposal costs $1,500. At $40,000 it costs $4,000. Those are illustrative figures, assuming the minimum is a floor and both offers cover the same scope. Include setup and any separate charges when comparing the first year.
        </p>
        <p>
          Ask whether testing carries a fee and which test flows are available. A sandbox may let you try a bet and payout while leaving some live features unavailable. Agree which checks can be completed before launch and which need to be verified with the production setup.
        </p>
      </>
    ),
  },
  {
    id: 'confirm-match-day-support-and-handover',
    title: 'Confirm match-day support and what you can take with you',
    content: (
      <>
        <p>
          Ask who takes the first call when odds stop updating during a major match. Find out whether your staff can suspend a market, what information to send and when the provider will respond. If support is part of the package, ask for the hours, escalation route and response commitments in writing. A general support promise tells you less than a named contact for the incident you expect to face.
        </p>
        <p>
          Then ask for a sample export. Check whether you can retrieve player records, bet history, settlement changes and wallet transactions in a format your team can use. Ask who owns the relevant accounts and what happens to reports and exports when the agreement ends. If source code or independent hosting matters, ask for the exact delivery scope and rights in the contract.
        </p>
      </>
    ),
  },
  {
    id: 'make-decision-against-launch-requirements',
    title: 'Make the decision against your launch requirements',
    content: (
      <>
        <p>
          Give each supplier the same test list. Record what the provider demonstrated, what it confirmed in writing and what is still open. If a required league, wallet flow or support arrangement remains unconfirmed, assign an owner and a deadline before you commit.
        </p>
        <p>
          If you need a complete sportsbook setup, see{' '}
          <Link
            href="/turnkey-sportsbook-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            KVAORNUX Turnkey Sportsbook Solutions
          </Link>. Share the sports, markets and player experience you need so the demo can focus on your launch requirements. If you already have a platform, bring your current login and wallet setup to the discussion.
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
    id: 'book-a-free-demo',
    title: 'Book a Free Demo',
    showCta: true,
    ctaText: 'Book a Free Demo',
    content: (
      <>
        <p>
          Tell KVAORNUX which sports and markets you need, whether you already have a platform, and how you want trading and support handled. We’ll use that brief to discuss the setup and the checks your team should see in a demo.
        </p>
      </>
    ),
  },
];

export default function WhiteLabelSportsbookProvidersClient() {
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
        title="White Label Sportsbook Providers: How to Compare"
        date="03.11.2026"
        readTime="7 min read"
        tags={['Sportsbook', 'White Label', 'Sports Betting', 'Trading & Risk']}
        bannerImage="/assets/features/white-label-sportsbook-providers-banner.webp"
        authorRole="Editorial Team"
        factCheckerName=""
        breadcrumbCurrent="White Label Sportsbook Providers"
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
                          {section.ctaText || 'Book a Free Demo'}
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
      <BlogArticleFooter currentSlug="white-label-sportsbook-providers" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner
        title="Book a Free Demo"
        buttonText="Book Demo"
      />
    </>
  );
}

