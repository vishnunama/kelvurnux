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
    id: 'from-deposit-to-withdrawal',
    title: 'From Deposit to Withdrawal',
    content: (
      <>
        <p>
          A player deposits $50. The cashier says the payment went through, but the lobby still shows a balance of $0. Your support team needs to know whether the payment is pending, the balance failed to update, or the player is looking at the wrong account. That is a better integration test than opening a game from a demo lobby.
        </p>
        <p>
          <strong className="text-white">
            White label casino integration connects your branded casino to game providers, payment services and the wallet that tracks each player’s balance.
          </strong>{' '}
          The platform can come with these tools ready to configure. The exact games, payment methods and provider accounts available at launch depend on your agreement and setup.
        </p>
        <p>
          Before comparing quotes, write down the games and payment methods you want to offer on day one. Ask the vendor to show how each one works with a single test player, from the first deposit to the final withdrawal. Then ask to see the same activity in the back office.
        </p>
      </>
    ),
  },
  {
    id: 'what-comes-with-the-platform',
    title: 'What comes with the platform, and what needs arranging?',
    content: (
      <>
        <p>
          A ready-built platform gives you the pieces your team and players will use. The quote tells you which connections will be set up for your business, who supplies them and what is included in the price. Use this table to review a proposal before you book a launch date.
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Area</th>
                <th>What the platform can include</th>
                <th>What to arrange or confirm separately</th>
                <th>What to see in the demo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Branded casino</td>
                <td>Lobby, registration and player account</td>
                <td>Brand assets, domain and launch requirements</td>
                <td>A fresh account created on a phone</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Games</td>
                <td>Lobby and tools for connecting game content</td>
                <td>Studio access, approved game list and any provider charges</td>
                <td>A game from the proposed launch catalog</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Payments</td>
                <td>Cashier and tools for deposits and withdrawals</td>
                <td>Payment account, methods, currencies, fees and approval status</td>
                <td>A successful deposit and a pending or failed payment</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Wallet</td>
                <td>Player balance and transaction history</td>
                <td>Currency rules, bonus balance and any restrictions on withdrawals</td>
                <td>A deposit, game round and withdrawal traced to the same player</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Back office</td>
                <td>Player records, reporting and staff controls</td>
                <td>Who can approve payments, adjust balances and contact providers</td>
                <td>A support user finding a payment and explaining its status</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The{' '}
          <Link
            href="/white-label-casino-solutions"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            KVAORNUX White Label Casino Solutions
          </Link>{' '}
          page describes the branded platform, game integration infrastructure, payment connectivity and admin tools. Ask for your quote to name the specific games, payment methods and services included for your project. A platform feature and an active third-party account are two different things to confirm.
        </p>
      </>
    ),
  },
  {
    id: '1-choose-games-you-can-launch-with',
    title: '1. Choose the games you can actually launch with',
    content: (
      <>
        <p>
          Casino game API integration connects the platform to games supplied by studios or an aggregator. An aggregator gives you one connection for content from multiple studios. Which titles you can activate still depends on the provider agreement and the markets you intend to serve.
        </p>
        <p>
          Start with a short list. Which slot studios matter to your audience? Do you need live dealer tables at launch? Are there specific titles you want the vendor to show? Send that list before the demo so you can see what is ready, what requires activation and what should be left for later.
        </p>
        <p>
          Then test a title from the proposed catalog with a fresh player account. Check that it opens on mobile, uses the correct currency and displays the expected balance when the player returns to the lobby. Ask what the player sees if a game goes offline while a round is open. In the admin panel, find the round by player and reference number, and check whether the outcome can be traced without asking the studio for a screenshot.
        </p>
        <p>
          For a closer look at what happens between the game and the platform, read the{' '}
          <Link
            href="/blog/how-casino-game-api-integration-works"
            className="text-cyan-400 underline hover:text-cyan-300 font-bold"
          >
            casino game API integration guide
          </Link>.
        </p>
      </>
    ),
  },
  {
    id: '2-walk-through-deposit-and-withdrawal',
    title: '2. Walk through a deposit and a withdrawal',
    content: (
      <>
        <p>
          White label casino payment integration covers how the cashier works with your approved payment provider. Ask who opens and controls the provider account, which currencies and methods are available, and which fees apply. A deposit method can have a different withdrawal process, so confirm both sides of the cashier.
        </p>
        <p>
          In the demo, start with a $50 test deposit. Check the amount and currency before submitting. Once the provider confirms the payment, verify that the cashier and wallet show the same outcome. Then ask for a second payment to be left pending. Can the support team find it by reference number? Can they tell the player what is happening without manually crediting the account?
        </p>
        <p>
          Next, request a withdrawal with the same test player. Ask who reviews it and what checks are required. Watch the status change after approval. Then ask the vendor to show what happens if the payment provider rejects the payout. Your team should be able to see whether funds are still reserved, whether the balance has been restored and who can authorize another attempt.
        </p>
        <p>
          Ask when the production payment account can be tested and who will confirm it is ready. Put that milestone in the launch plan alongside the platform configuration date.
        </p>
      </>
    ),
  },
  {
    id: '3-follow-one-balance-through-whole-journey',
    title: '3. Follow one balance through the whole journey',
    content: (
      <>
        <p>
          Casino wallet integration keeps the game activity, cashier and player balance in step. It matters whenever money moves or a transaction changes status. Ask the vendor to show the records behind each balance change, using amounts that make it easy for everyone in the demo to follow.
        </p>
        <p>
          Here is a simple test. The player starts at $0. A confirmed $50 deposit takes the balance to $50. A $5 stake takes it to $45. The game then credits an $8 payout, bringing the balance to $53. After a completed $20 withdrawal, the balance is $33. This example assumes no fees or bonuses, and the $8 is the total amount credited for the round.
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th className="text-right">Change</th>
                <th className="text-right">Expected balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-white">Opening balance</td>
                <td className="text-right text-gray-400">—</td>
                <td className="text-right font-medium text-white">$0</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Confirmed deposit</td>
                <td className="text-right text-[#00ebaa]">+$50</td>
                <td className="text-right font-medium text-white">$50</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Game stake</td>
                <td className="text-right text-red-400">−$5</td>
                <td className="text-right font-medium text-white">$45</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Game payout</td>
                <td className="text-right text-[#00ebaa]">+$8</td>
                <td className="text-right font-medium text-white">$53</td>
              </tr>
              <tr>
                <td className="font-semibold text-white">Completed withdrawal</td>
                <td className="text-right text-amber-400">−$20</td>
                <td className="text-right font-medium text-white">$33</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Ask the support lead to find all four entries in the back office. Check whether the cashier, player history and admin report agree. If they differ, ask the vendor to explain whether the difference comes from a pending withdrawal, a fee or another rule.
        </p>
        <p>
          If bonuses are part of the launch, repeat the test with a bonus balance. Can the player see what is available to withdraw? Can support explain the restriction without guessing? If a game round is canceled, ask the vendor to show the reversal and verify that the same stake cannot be refunded twice.
        </p>
      </>
    ),
  },
  {
    id: '4-decide-who-handles-problems-after-launch',
    title: '4. Decide who handles problems after launch',
    content: (
      <>
        <p>
          Give each dependency a name and an owner. The platform team may handle the cashier connection while the payment provider reviews the merchant account. The studio or aggregator may activate the games, while your operations team decides which ones appear in the lobby. Write down these responsibilities before signing so your team knows whom to call when a player gets stuck.
        </p>
        <p>
          For example, if a payment is confirmed but the wallet still shows $0, your support team should be able to gather the player reference, payment reference and status. Ask who investigates each part, who can approve an adjustment and whether that adjustment appears in the activity history. Also confirm how your team escalates an urgent issue outside normal working hours.
        </p>
        <p>
          Get separate figures for setup, hosting, support, games and payments where applicable. Ask which fees start in testing, which start at launch and who invoices your company. If a provider is still pending, ask whether the quote includes a replacement connection or whether it would require extra work.
        </p>
      </>
    ),
  },
  {
    id: '5-use-this-white-label-casino-launch-checklist',
    title: '5. Use this White Label Casino launch checklist',
    content: (
      <>
        <p>
          Run the checklist with the proposed games, payment methods and staff roles. Keep a record of who tested each item and what they saw.
        </p>
        <ul className="space-y-2 my-4">
          <li>
            <strong className="text-white">Mobile registration:</strong> A new test player can sign up and reach the lobby.
          </li>
          <li>
            <strong className="text-white">Game access:</strong> The titles you plan to offer load with the expected currency and balance.
          </li>
          <li>
            <strong className="text-white">Deposits:</strong> Confirmed and pending payments show the correct status to the player and support team.
          </li>
          <li>
            <strong className="text-white">Withdrawals:</strong> An authorized user can review, approve and trace a payout. A failed payout follows the agreed balance rules.
          </li>
          <li>
            <strong className="text-white">Wallet history:</strong> Your team can match a deposit, game round and withdrawal to the same player.
          </li>
          <li>
            <strong className="text-white">Staff access:</strong> Each person can see the screens they need. Only authorized staff can approve payouts or change balances.
          </li>
          <li>
            <strong className="text-white">Provider readiness:</strong> The required accounts, permissions and live payment methods are confirmed.
          </li>
          <li>
            <strong className="text-white">Support coverage:</strong> Staff know how to report a game, payment or wallet issue and who owns the next action.
          </li>
        </ul>
        <p>
          A missing launch title may be manageable if you have a replacement. A payment you cannot trace or a balance nobody can explain should be resolved before you open that flow to players. Agree on the checks that must pass before go-live and the person who can sign each one off.
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
          Send KVAORNUX the game studios, payment methods and currencies you want at launch. We’ll walk through a test player journey and help you identify what the platform covers, what needs a separate provider arrangement and what to test before launch.
        </p>
      </>
    ),
  },
];

export default function WhiteLabelCasinoIntegrationClient() {
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
        title="White Label Casino Integration: Games, Payments & Wallets"
        date="03.11.2026"
        readTime="6 min read"
        tags={['White Label', 'Game API', 'Payment Integration', 'Casino Wallet']}
        bannerImage="/assets/features/white-label-casino-integration-banner.webp"
        authorRole="Editorial Team"
        factCheckerName=""
        breadcrumbCurrent="White Label Casino Integration"
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
      <BlogArticleFooter currentSlug="white-label-casino-integration" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner
        title="Book a Free Demo"
        buttonText="Book Demo"
      />
    </>
  );
}

