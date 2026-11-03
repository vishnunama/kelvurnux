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
    id: 'choose-the-right-casino-package',
    title: 'Choose the Right Casino Package',
    content: (
      <>
        <p>
          Say you have the budget for a branded casino today, but you might add sports betting six months from now. One quote gets your casino ready quickly. The other includes a sportsbook and the platform source code from the start. Which quote is better depends on what you need on opening day, what you expect to add later and how much responsibility you want your team to take on.
        </p>
        <p>
          For KVAORNUX buyers, the practical difference is straightforward.{' '}
          <strong className="text-white">
            White Label starts with a ready-built casino you can brand for your business, with platform source code available for an additional fee. Turnkey includes casino, sportsbook and platform source code in the package.
          </strong>{' '}
          The agreement defines what code is delivered and what you can do with it. When comparing other suppliers, ask each one to spell out what it means by white label or turnkey. The names alone tell you little about the contract.
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Decision</th>
                <th>KVAORNUX White Label</th>
                <th>KVAORNUX Turnkey</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Best starting point</td>
                <td>You want a branded casino with a smaller upfront commitment</td>
                <td>You want casino and sports betting in the same package</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Platform source code</td>
                <td>Available separately for an additional fee</td>
                <td>Included in the package</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Launch planning</td>
                <td>A preconfigured setup can be faster to prepare when requirements are ready</td>
                <td>Schedule depends on the combined casino and sportsbook scope</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Games and payments</td>
                <td>Confirm providers, payment methods and activation costs in the quote</td>
                <td>Confirm the same items, plus the sportsbook scope and dependencies</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Ongoing operation</td>
                <td>Confirm hosting, maintenance and support responsibilities</td>
                <td>Confirm who runs the platform after handover and what support covers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 'when-white-label-makes-sense',
    title: 'When white label makes sense',
    content: (
      <>
        <p>
          White label is a sensible starting point if you need a branded casino and want to use an existing platform. Your first decisions are about the business: the games you want, where you plan to serve players, which payment methods matter and what your support team needs to see in the admin panel. A ready-built platform gives you something concrete to demo while those choices are still open.
        </p>
        <p>
          For example, suppose you have a brand and an audience but no plans to offer sports betting this year. Ask for a quote that covers your casino lobby, player accounts, wallet, games, payments and admin access. Then ask how much source code would cost if you wanted it later, and whether adding a sportsbook would require a different package. That gives you a launch quote and a way to budget for the next decision.
        </p>
        <p>
          If speed is important, ask the vendor to distinguish platform setup from going live. Branding and configuration can move quickly when the scope is settled. Payment account approval, game activation, acceptance testing and any required approvals have their own timelines. Ask which items must be ready before the vendor can start and which ones must be ready before players can join.
        </p>
      </>
    ),
  },
  {
    id: 'when-turnkey-makes-sense',
    title: 'When turnkey makes sense',
    content: (
      <>
        <p>
          Turnkey is worth comparing early if casino and sports betting are both part of your business plan, or if you want the platform code delivered as part of the agreement. With KVAORNUX, both products and the platform source code are included. Use the demo to see how the casino and sportsbook fit together from the perspective of both players and staff.
        </p>
        <p>
          Ask the team to use a single test player. Open a casino game, switch to sports betting and place a test bet. Then look for both activities in the back office. Check how balances are displayed, how a canceled bet is recorded and whether the person who handles support can see the information they need. If a shared wallet or a particular reporting setup is important, make it part of the written scope.
        </p>
        <p>
          Getting the code also changes the handover conversation. If you expect your developers to maintain the platform, ask what documentation they receive, which services they need to run it and how your team gets access. If you want the vendor to provide ongoing maintenance instead, ask what that costs and who is available when a payment or betting issue needs attention.
        </p>
      </>
    ),
  },
  {
    id: 'compare-costs-over-the-same-period',
    title: 'Compare costs over the same period',
    content: (
      <>
        <p>
          The upfront number tells you how much cash you need to get started. The first-year cost tells you what you will spend to operate the quoted setup. Ask both vendors to separate one-time fees from monthly and usage-based fees. Include branding, hosting, support, payment charges, game access and any sportsbook fees that apply to your project.
        </p>
        <p>
          Here is a hypothetical example. One quote costs $6,000 upfront and $1,000 a month, for a first-year total of $18,000. A second quote costs $12,000 upfront and $400 a month, for a first-year total of $16,800. Those are illustrative figures and exclude third-party charges. The lower upfront quote needs less cash at signing, while the second costs less over the first year under those assumptions.
        </p>
        <p>
          Use the same product scope when you compare. A casino-only quote and a casino-plus-sportsbook quote cover different work. If you expect to add sports later, ask for the cost of the upgrade and any new provider fees. If a quote includes a percentage of gross gaming revenue, ask what revenue it is calculated on and whether a monthly minimum applies. Put the assumptions next to the totals so your team can revisit them when the scope changes.
        </p>
      </>
    ),
  },
  {
    id: 'read-the-source-code-and-handover-terms',
    title: 'Read the source code and handover terms',
    content: (
      <>
        <p>
          Start by asking which parts of the platform are included. Get a written list that covers the player site, back office, wallet and any other platform components you expect to receive. Then check what you are allowed to do with the code. Can your team host it, modify it, hire another developer to maintain it or use it for another brand? Each of those rights should be clear in the agreement.
        </p>
        <p>
          Ask separately about game studios, payment processors and sportsbook providers. Platform source code and access to third-party content are separate items. You may receive the code that connects your casino to a game provider while the provider retains its game code and controls access under a separate agreement. Ask whose account is used, who receives the bill and what happens if you move hosting or switch platforms later.
        </p>
        <p>
          Before signing, ask to see a sample handover. Check whether it includes setup instructions, access to the systems your team will operate and an export of the records you need. A sample export gives your operations team something to inspect before an actual move is on the table. Confirm what happens to access and support after the contract ends.
        </p>
      </>
    ),
  },
  {
    id: 'use-the-demo-to-make-the-decision',
    title: 'Use the demo to make the decision',
    content: (
      <>
        <p>
          Bring someone who will handle support or finance after launch. Have them try the admin panel while the vendor watches. A useful demo follows a player from registration through a test deposit, a game and a withdrawal. If sports betting is included, add a settled bet and a void bet. Ask your colleague to find those records and explain what happened to the balance.
        </p>
        <p>
          Write down anything that only works in the vendor’s demonstration environment. If a game studio, payment method or report is still pending, agree on when it will be ready and how you will test it. Assign a person to sign off on each requirement. It is much easier to compare white label vs turnkey casino solutions when each vendor is responding to the same checklist.
        </p>
        <p>
          Choose{' '}
          <Link
            href="/white-label-casino-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            White Label Casino Solutions
          </Link>{' '}
          if your immediate goal is a branded casino and you prefer to keep the initial commitment smaller. Compare the{' '}
          <Link
            href="/turnkey-casino-software-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            Turnkey Casino package
          </Link>{' '}
          if you need a sportsbook from the start or want platform code included. If you are still collecting quotes, the{' '}
          <Link
            href="/blog/gambling-software-for-sale"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            casino software buyer’s guide
          </Link>{' '}
          has a checklist for documenting what each supplier will deliver.
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
          Tell us whether you want casino only or casino plus sports betting, which games and payments matter, and whether you need the platform code. We’ll walk through the relevant screens with you and help you compare the two packages against the same requirements.
        </p>
      </>
    ),
  },
];

export default function WhiteLabelVsTurnkeyCasinoClient() {
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
        title="White Label vs Turnkey Casino: Which Should You Choose?"
        date="03.11.2026"
        readTime="5 min read"
        tags={['White Label', 'Turnkey Casino', 'Platform Comparison', 'Casino Source Code']}
        bannerImage="/assets/features/white-label-vs-turnkey-casino-banner.webp"
        authorRole="Editorial Team"
        factCheckerName=""
        breadcrumbCurrent="White Label vs Turnkey Casino"
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
      <BlogArticleFooter currentSlug="white-label-vs-turnkey-casino" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner
        title="Book a Free Demo"
        buttonText="Book Demo"
      />
    </>
  );
}

