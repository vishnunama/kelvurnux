'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { faqList } from './faqData';
import { usePathname } from 'next/navigation';
import FAQSection from '@/src/components/FAQSection/FAQSection';
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
    background: #00ebaa;
    color: #000;
    font-weight: 700;
  }

  /* TOC Sticky Sidebar */
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

  /* Blog Article Typography & Elements */
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
    id: 'introduction',
    title: 'More Games. Greater Control. A Better Experience for Every Player.',
    content: (
      <>
        <p className="text-xl font-medium text-white/95 mb-4 leading-relaxed">
          <strong>A great sweepstakes platform needs more than an attractive website and a collection of popular games.</strong>
        </p>
        <p>
          Behind every successful game library is a series of important decisions: which providers to work with, which games are available for promotional play, how content is managed, and how the platform adapts as the business grows.
        </p>
        <p>
          For operators, bringing these pieces together can be challenging.
        </p>
        <p>
          Different studios may have different commercial agreements, technical requirements, content restrictions, and approval processes. Managing those relationships becomes increasingly complicated as the game library expands.
        </p>
        <p>
          That&apos;s where game aggregation can make a difference.
        </p>
        <p>
          Instead of treating every provider as a separate technical project, a game aggregator can help operators access and manage content from multiple studios through a more connected setup.
        </p>
        <p>
          But choosing the right aggregation solution involves much more than comparing game counts.
        </p>
        <p>
          This guide explores how game aggregation works for sweepstakes operators in 2026, what makes the promotional gaming model different, and what to evaluate before selecting a solution.
        </p>
      </>
    ),
  },
  {
    id: 'what-is-game-aggregation',
    title: 'What Is Game Aggregation for Sweepstakes Operators?',
    showCta: true,
    ctaText: 'Explore Aggregator Options',
    content: (
      <>
        <p>
          Game aggregation is a way of connecting gaming content from multiple providers to a single platform through an aggregation service or integration layer.
        </p>
        <p>
          Rather than developing and maintaining a separate connection for every studio, an operator can work with an aggregator that brings supported content together.
        </p>
        <p>
          For sweepstakes operators, however, access to a game catalog is only part of the equation.
        </p>
        <p>
          The platform must also support the operator&apos;s Gold Coin and Sweeps Coin experience, respect applicable content permissions, and provide the controls needed to manage game availability.
        </p>
        <div className="p-4 rounded-xl bg-gray-900 border border-[#00ebaa]/30 my-5">
          <p className="text-[#00ebaa] font-semibold mb-1">The Important Distinction:</p>
          <p className="text-gray-300 text-sm mb-0">
            A game being available through an aggregator does not automatically mean it is approved for every sweepstakes business, promotional model, or US jurisdiction. Operators should confirm these details before launching content.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'why-aggregation-matters',
    title: 'Why Game Aggregation Matters for Sweepstakes Businesses',
    content: (
      <>
        <p>
          Players notice the games they can play. Operators also need to consider everything required to make those games available.
        </p>
        <p>
          Working with multiple providers can involve separate integration schedules, commercial discussions, catalog updates, support processes, and ongoing maintenance.
        </p>
        <p>
          Aggregation may simplify parts of this work by providing a more centralized connection to participating studios:
        </p>

        <h3>1. Expand Your Game Library More Efficiently</h3>
        <p>
          An aggregator can provide access to multiple participating game providers without requiring a completely independent integration for each one. The actual selection depends on the aggregator&apos;s catalog and the permissions available to the operator.
        </p>

        <h3>2. Simplify Day-to-Day Game Management</h3>
        <p>
          A connected catalog can make it easier to organize games, manage availability, and coordinate updates. The exact management tools vary between solutions. Operators should confirm whether controls are available directly in their back office or require assistance from the aggregation provider.
        </p>

        <h3>3. Support Long-Term Platform Growth</h3>
        <p>
          A sweepstakes business may launch with a limited selection of games and expand over time. An aggregation setup that supports additional studios and content updates can reduce some of the technical work associated with expansion. However, new games may still require commercial approval, configuration, and testing.
        </p>
      </>
    ),
  },
  {
    id: 'provider-support-sweepstakes',
    title: 'Not Every Game Provider Supports the Same Sweepstakes Model',
    content: (
      <>
        <p>
          One of the most important questions for a sweepstakes operator is also one of the easiest to overlook:
        </p>
        <p className="text-lg font-bold text-white bg-[#0a141a] p-4 rounded-xl border border-gray-800">
          Can the games actually be offered through your intended promotional model?
        </p>
        <p>
          A studio&apos;s availability in traditional online gaming does not establish permission to distribute its content through a US sweepstakes platform. Rights may depend on the provider, aggregator, operator, brand, territory, and intended use.
        </p>
        <p>
          Before choosing an aggregator, operators should clarify:
        </p>
        <ul>
          <li>Which studios support the proposed sweepstakes model?</li>
          <li>Which titles are available for Gold Coin play, Sweeps Coin play, or both?</li>
          <li>Are there geographic or contractual restrictions?</li>
          <li>Does the operator need additional approvals?</li>
          <li>What happens if a provider changes its content permissions?</li>
        </ul>
        <p>
          A large advertised game library is useful only when the operator can actually offer the relevant titles.
        </p>
        <p className="font-semibold text-[#00ebaa]">
          The better question isn&apos;t simply, &ldquo;How many games do you have?&rdquo; It&apos;s, &ldquo;Which games can my business launch and maintain?&rdquo;
        </p>
      </>
    ),
  },
  {
    id: 'gc-sc-game-availability',
    title: 'Gold Coins, Sweeps Coins, and Game Availability',
    showCta: true,
    ctaText: 'Review API Callbacks',
    content: (
      <>
        <p>
          Sweepstakes platforms commonly distinguish between Gold Coins used for social gameplay and Sweeps Coins associated with promotional sweepstakes participation.
        </p>
        <p>
          This creates additional considerations for game aggregation. An operator needs to understand how participating games support each mode and how the platform maintains the appropriate separation between them.
        </p>
        <p>
          For example, the same title may require different configuration or availability rules depending on the supported play mode. The precise implementation depends on the platform and provider.
        </p>
        <p>
          Operators should evaluate whether their solution can:
        </p>
        <ul>
          <li>Present the appropriate games for each supported mode.</li>
          <li>Maintain accurate records of gameplay activity.</li>
          <li>Apply configured eligibility and availability restrictions.</li>
          <li>Support reliable communication between games and the platform wallet.</li>
          <li>Provide reporting that helps investigate player questions and transaction discrepancies.</li>
        </ul>
        <p>
          These requirements are especially important when multiple providers contribute games to the same platform.
        </p>
        <p>
          For a detailed technical explanation of how games communicate with platform ledgers, read our guide to{' '}
          <Link
            href="/blog/sweepstakes-casino-api-integration"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            Sweepstakes Casino API Integration: How Games Connect to Dual-Currency Wallets
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'aggregator-pricing-models',
    title: 'How Do Sweepstakes Game Aggregators Charge Operators?',
    content: (
      <>
        <p>
          Game aggregation pricing is not necessarily identical across traditional gaming and sweepstakes arrangements. Commercial terms depend on the provider, distribution rights, content selection, usage, and contractual structure.
        </p>
        <p>
          Depending on the agreement, operators may encounter setup charges, recurring minimums, usage-based fees, or other negotiated commercial models. There is no single pricing formula that applies to every sweepstakes aggregator.
        </p>
        <p>
          This makes it important to understand what a proposal actually includes:
        </p>

        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>Commercial Question</th>
                <th>Why It Matters for Operators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Is there an initial integration or setup fee?</strong></td>
                <td>Helps operators forecast initial capital requirements before launch.</td>
              </tr>
              <tr>
                <td><strong>Are there recurring minimum commitments?</strong></td>
                <td>Affects baseline operational overhead during lower-activity periods or early launch phases.</td>
              </tr>
              <tr>
                <td><strong>How is usage measured and billed?</strong></td>
                <td>Clarifies how coin activity or gameplay turnover translates into commercial invoices.</td>
              </tr>
              <tr>
                <td><strong>Are all advertised studios included?</strong></td>
                <td>Prevents surprises regarding tier-1 studios that may require separate commercial terms.</td>
              </tr>
              <tr>
                <td><strong>Are additional studio integrations charged separately?</strong></td>
                <td>Identifies future expansion costs when broadening the game catalog.</td>
              </tr>
              <tr>
                <td><strong>What reporting supports invoicing?</strong></td>
                <td>Ensures transparency during monthly commercial reconciliation and financial audits.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Operators should ask for a written explanation of the billing model, including how Gold Coin and Sweeps Coin activity is treated where relevant.
        </p>
        <p className="font-semibold text-white/90">
          A lower headline price does not always mean a lower total operating cost. The most useful commercial comparison is one that considers content access, platform support, contract terms, and the operator&apos;s expected business activity.
        </p>
      </>
    ),
  },
  {
    id: 'building-game-library',
    title: 'Building a Game Library Players Want to Explore',
    content: (
      <>
        <p>
          A strong game catalog is not necessarily the largest one. Different audiences may prefer different game formats, themes, features, and playing experiences.
        </p>
        <p>
          For operators, game selection should reflect the intended player audience rather than simply maximizing the number of titles displayed in the lobby:
        </p>

        <h3>1. Start With Variety</h3>
        <p>
          A balanced library may include different slot formats and other supported game categories, depending on the providers and promotional model. The goal is to give players meaningful choices without making the platform difficult to navigate.
        </p>

        <h3>2. Consider the Player Experience</h3>
        <p>
          Game loading, mobile compatibility, clear categorization, and reliable performance all influence how easy a catalog is to use. An attractive lobby cannot compensate for games that fail to launch consistently.
        </p>

        <h3>3. Keep the Catalog Fresh</h3>
        <p>
          Operators should ask how frequently new titles become available and how updates are communicated. New releases can create opportunities to refresh the player experience, but every addition should pass the appropriate availability and quality checks.
        </p>

        <h3>4. Measure What Actually Works</h3>
        <p>
          Catalog decisions should be informed by reliable operational data. Useful measures may include game launches, engagement patterns, technical errors, and the popularity of different content categories. These insights can help operators improve navigation and identify content that deserves greater visibility.
        </p>
      </>
    ),
  },
  {
    id: 'managing-availability-us-markets',
    title: 'Managing Game Availability Across US Markets',
    content: (
      <>
        <p>
          US sweepstakes operations require careful attention to jurisdiction-specific rules and business restrictions. Game availability may be affected by legal requirements, provider agreements, operator policies, and changes in the markets a business serves.
        </p>
        <p>
          An operator should not assume that permission to offer a game in one location extends automatically to another. This is why game availability controls matter.
        </p>
        <p>
          Depending on the platform, operators may need the ability to restrict individual titles, disable providers, or adjust catalog visibility for particular locations.
        </p>
        <p>
          These controls should be supported by appropriate server-side enforcement rather than relying only on whether a game tile appears in the lobby. Legal and contractual requirements should be reviewed with qualified advisers and the relevant providers.
        </p>
        <div className="p-4 rounded-xl bg-gray-900 border border-gray-800 my-4 text-sm text-gray-300">
          <p className="font-semibold text-[#00ebaa] mb-1">Key Operational Objective:</p>
          <p className="mb-0">
            Operators need to know which games are available, where they can be offered, and how quickly availability can be adjusted when regulatory conditions change.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'evaluation-checklist',
    title: 'What to Check Before Choosing a Sweepstakes Aggregator',
    content: (
      <>
        <p>
          Before signing an aggregation agreement, operators should evaluate both the content offering and the operational responsibilities involved. Here are eight practical questions worth asking:
        </p>

        <div className="my-6 space-y-3">
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">1</span>
              Which game providers are actually available for our sweepstakes model?
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Request a current, verified list of supported studios and eligible titles authorized specifically for promotional sweepstakes in your target territory.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">2</span>
              What approvals are required before launch?
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Clarify whether onboarding approvals apply to the operating company, brand name, domain, promotional sweepstakes terms, or individual studio feeds.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">3</span>
              How are Gold Coin and Sweeps Coin modes supported?
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Confirm that the proposed integration architecture integrates seamlessly with your platform&apos;s dual-currency wallet and session verification rules.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">4</span>
              Can we manage game availability by location?
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Understand which geographical restrictions can be configured and verify that game sessions enforce location checks on the server side.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">5</span>
              What are the complete commercial terms?
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Review setup fees, monthly minimum volume commitments, usage fees, and any potential pass-through studio expenses in writing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">6</span>
              How are new games added to the catalog?
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Ask about catalog update schedules, automated metadata synchronization, testing sandbox access, and rollout timelines.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">7</span>
              What happens when a game or provider becomes unavailable?
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Understand how studio maintenance or content withdrawals are handled, and how quickly your operations team is notified.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">8</span>
              What reporting and technical support will we receive?
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Confirm access to granular transaction logs, round reconciliation exports, responsive technical support, and defined escalation pathways.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'game-library-migration',
    title: 'Planning a Game Library Migration',
    content: (
      <>
        <p>
          Some sweepstakes operators are not launching a new platform from scratch. They are replacing an existing technology provider or expanding their current game offering.
        </p>
        <p>
          In these situations, migration planning deserves special attention. Moving to a different aggregator or platform does not necessarily transfer existing content permissions automatically.
        </p>
        <p>
          Operators should confirm which studios require new approvals and whether their current game selection can be maintained without interruption. They should also plan for changes to game identifiers, catalog organization, player favorites, reporting, and historical ledger records.
        </p>
        <p>
          A practical migration plan should address content availability before the switch, not after players discover missing games. Testing in a sandbox environment and clear player communication can help reduce disruption.
        </p>
        <p>
          For businesses evaluating whether to connect directly to studios or partner with an aggregator, our guide on{' '}
          <Link
            href="/blog/game-aggregator-vs-direct-provider-integration"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            Game Aggregator vs Direct Game Provider Integration
          </Link>{' '}
          explores the broader architectural trade-offs.
        </p>
      </>
    ),
  },
  {
    id: 'how-kvaornux-supports',
    title: 'How KVAORNUX Supports Sweepstakes Game Integration',
    showCta: true,
    ctaText: 'Discuss Your Sweepstakes Platform',
    content: (
      <>
        <p>
          Choosing game content is one decision. Building the platform that brings everything together is another.
        </p>
        <p>
          At KVAORNUX, we engineer scalable iGaming platforms and integrate game provider APIs for operators building and expanding their gaming businesses. Our team has delivered more than 50 iGaming projects and has experience integrating over 150 game provider APIs.
        </p>
        <p>
          We work on the platform components that connect the player experience with the underlying gaming infrastructure:
        </p>
        <ul>
          <li>
            <strong>Dual-Currency Wallet Systems:</strong> Robust ledger architecture supporting synchronized Gold Coin and Sweeps Coin sessions with atomic transaction validation.
          </li>
          <li>
            <strong>Turnkey &amp; Custom Platform Options:</strong> Choose between fast-to-market{' '}
            <Link
              href="/turnkey-sweepstakes-casino-software"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              turnkey sweepstakes casino software
            </Link>{' '}
            or complete{' '}
            <Link
              href="/custom-sweepstakes-casino-development"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              custom sweepstakes casino development
            </Link>{' '}
            with source code ownership included.
          </li>
          <li>
            <strong>Centralized Back-Office Controls:</strong> Configure game availability, denomination limits, and location filters across multiple aggregator feeds.
          </li>
          <li>
            <strong>Flexible Aggregator Connectivity:</strong> Connect your approved aggregator accounts seamlessly via our modular{' '}
            <Link
              href="/casino-aggregator-api-solution"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              casino aggregator API solution
            </Link>
            .
          </li>
        </ul>
        <p>
          <em>Please note: KVAORNUX provides the platform software and technical API integration layer. Provider access, commercial approvals, and game content distribution rights remain subject to the operator&apos;s direct third-party agreements with aggregators and studios.</em>
        </p>
        <p>
          Whether you&apos;re planning a new sweepstakes brand or upgrading an existing operation, our engineering team is here to help you build a reliable platform. Contact us today to discuss your project.
        </p>
      </>
    ),
  },
];

export default function SweepstakesGameAggregationClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<string>(blogSections[0].id);
  const pathname = usePathname();

  // Track active section for Table of Contents
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
        title="Game Aggregation for Sweepstakes Operators: A Complete Guide for 2026"
        date="29.10.2026"
        readTime="15 min read"
        tags={['Sweepstakes', 'Game Aggregation', 'API Integration', 'Turnkey']}
        bannerImage="/assets/features/sweepstakes-game-aggregation-banner.webp"
        breadcrumbCurrent="Sweepstakes Game Aggregation"
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
                          {section.ctaText || 'Discuss Your Project'}
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

      {/* Blog Article Footer: Previous Article Navigation & Recommendations */}
      <BlogArticleFooter currentSlug="sweepstakes-game-aggregation" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner />

      {/* SHARED FAQ SECTION */}
      <FAQSection faqs={faqList} />
    </>
  );
}
