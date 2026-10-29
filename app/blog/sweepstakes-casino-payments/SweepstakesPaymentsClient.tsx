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
    id: 'why-payments-matter',
    title: 'Why Payments Matter More Than You Think',
    content: (
      <>
        <p className="text-xl font-medium text-white/95 mb-4 leading-relaxed">
          <strong>Great Games Bring Players In. Smooth Payments Keep Them Coming Back.</strong>
        </p>
        <p>
          A successful sweepstakes casino is about more than exciting games, attractive bonuses, and a beautiful website. Behind every great player experience is something just as important: a payment system people can trust.
        </p>
        <p>
          Players want to purchase Gold Coins without complications. When they win eligible prizes, they expect a clear and reliable redemption process.
        </p>
        <p>
          For operators, getting both experiences right can make a real difference.
        </p>
        <p>
          A complicated checkout can turn away a potential customer. Delayed redemptions can damage player confidence. And choosing the wrong payment provider can create challenges long before your casino reaches its full potential.
        </p>
        <p>
          That&apos;s why payments should never be an afterthought when launching a sweepstakes casino.
        </p>
        <p>
          From credit cards and digital wallets to prize redemptions and payment security, this guide explores what operators need to know about building a smoother, more reliable payment experience in 2026.
        </p>
      </>
    ),
  },
  {
    id: 'two-transactions-one-experience',
    title: 'Two Different Transactions. One Seamless Experience.',
    showCta: true,
    ctaText: 'Explore Sweepstakes Software',
    content: (
      <>
        <p>
          Sweepstakes casinos operate differently from traditional online casinos.
        </p>
        <p>
          Players typically purchase Gold Coins for entertainment, while Sweeps Coins may be awarded through eligible promotional offers or free entry methods.
        </p>
        <p>
          Gold Coins and Sweeps Coins serve different purposes, and a well-designed{' '}
          <Link
            href="/sweepstakes-casino-software"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            sweepstakes casino software platform
          </Link>{' '}
          keeps their balances and transactions separate.
        </p>
        <p>
          For players, the experience should feel simple.
        </p>
        <p>
          For operators, the system needs to provide clear visibility into purchases, promotional coin balances, redemption requests, and transaction activity.
        </p>
        <p className="font-semibold text-white/90">
          The goal isn&apos;t simply to accept payments. It&apos;s to create an experience that players feel confident using again and again.
        </p>

        {/* Operational Flow Diagram */}
        <div className="my-7 p-6 rounded-2xl bg-gray-900/90 border border-gray-800 text-sm text-gray-300">
          <p className="font-semibold text-[#00ebaa] mb-4 text-base">
            The Two Financial Channels in a Sweepstakes Casino:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0a141a] border border-[#00ebaa]/20">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00ebaa]">
                1. Coin Purchases (Inbound)
              </span>
              <h4 className="text-white font-bold text-base mt-1 mb-2">
                Gold Coin Package Checkout
              </h4>
              <ul className="text-xs sm:text-sm space-y-1.5 text-gray-300 list-none ml-0">
                <li>• Popular rails: Credit cards, debit cards, instant bank transfers, mobile wallets</li>
                <li>• Purpose: Purchasing virtual tokens for social entertainment gameplay</li>
                <li>• Promotional bonus: Complimentary Sweeps Coins may be included as a promotional gift</li>
                <li>• Destination: Deposited directly into your merchant acquiring account</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#0a141a] border border-[#00ebaa]/20">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                2. Prize Redemptions (Outbound)
              </span>
              <h4 className="text-white font-bold text-base mt-1 mb-2">
                Sweeps Coin Prize Delivery
              </h4>
              <ul className="text-xs sm:text-sm space-y-1.5 text-gray-300 list-none ml-0">
                <li>• Payout rails: Direct bank transfers (ACH), push-to-card, or digital gift cards</li>
                <li>• Prerequisites: Verified account (KYC), minimum threshold, and playthrough rules</li>
                <li>• Workflow: Systematic review in the operator back-office queue</li>
                <li>• Destination: Disbursed to the player&apos;s verified bank account or email address</li>
              </ul>
            </div>
          </div>
        </div>

        <p>
          Keeping these two transaction flows clearly isolated is essential for transparent accounting and regulatory alignment. To learn more about how virtual currencies work across the platform, read our guide on{' '}
          <Link
            href="/blog/what-is-sweepstakes-casino-software"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            how sweepstakes casino software works
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'how-players-purchase',
    title: 'How Players Purchase Gold Coins',
    content: (
      <>
        <p>
          The checkout process is where a player&apos;s interest turns into active engagement. If checkout is slow, complicated, or frequently declined, players quickly lose patience.
        </p>
        <p>
          In 2026, successful sweepstakes casinos provide a familiar, reliable mix of payment options that match how modern consumers shop online:
        </p>

        <h3>1. Credit and Debit Cards</h3>
        <p>
          Cards remain the most common purchase method for social gaming. Players expect a straightforward experience where they can enter card details securely or save them for future purchases.
        </p>
        <ul>
          <li>
            <strong>Smart Fraud Checks (3D Secure):</strong> Modern payment systems use intelligent risk analysis to verify high-risk transactions without slowing down routine purchases for returning players.
          </li>
          <li>
            <strong>Tokenized Card Storage:</strong> By storing card data as encrypted tokens rather than raw card numbers, platforms improve security and boost transaction authorization rates.
          </li>
          <li>
            <strong>Backup Processing:</strong> Because card issuer acceptance can vary across banks, having backup payment gateways helps ensure valid purchases go through smoothly.
          </li>
        </ul>

        <h3>2. Instant Bank Transfers (ACH &amp; Open Banking)</h3>
        <p>
          Direct account-to-account payments have become increasingly popular with players who prefer paying directly from their bank accounts. Modern open banking solutions allow players to authenticate securely through their regular banking app.
        </p>
        <ul>
          <li>
            <strong>Cost-Effective Processing:</strong> Bank transfer fees are generally lower than credit card interchange rates, helping operators preserve profit margins on larger coin packages.
          </li>
          <li>
            <strong>Higher Transaction Reliability:</strong> Bank-authenticated transactions typically experience fewer disputes and chargebacks than card transactions.
          </li>
        </ul>

        <h3>3. Mobile Wallets (Apple Pay &amp; Google Pay)</h3>
        <p>
          With most sweepstakes gameplay taking place on smartphones, one-touch mobile checkouts have become a major advantage. Supporting Apple Pay and Google Pay lets mobile players complete a purchase in seconds using face or fingerprint recognition.
        </p>

        <h3>4. Alternative Payment Methods</h3>
        <p>
          Some operators also explore alternative payment rails, such as prepaid vouchers or cryptocurrency, to accommodate specific player demographics. When adopting alternative methods, operators should always ensure their choices align with the regulatory guidelines of their target jurisdictions.
        </p>
      </>
    ),
  },
  {
    id: 'how-redemptions-work',
    title: 'How Sweepstakes Prize Redemptions Work',
    showCta: true,
    ctaText: 'Explore Turnkey Payout Options',
    content: (
      <>
        <p>
          Prize redemptions are where player loyalty is won or lost. While smooth purchases welcome players in, prompt and transparent redemptions prove that your platform delivers on its promises.
        </p>
        <p>
          Today&apos;s leading sweepstakes platforms typically offer a combination of cash and digital prize redemption methods:
        </p>

        <h3>1. Direct Bank Transfers (ACH)</h3>
        <p>
          Direct bank transfer is the most popular choice for cash redemptions. Once an operator approves a request in the admin back office, funds are transferred directly into the player&apos;s verified domestic checking account. Delivery depends on standard banking clearing cycles and the operator&apos;s banking partner arrangements.
        </p>

        <h3>2. Push-to-Card Payouts</h3>
        <p>
          Push-to-card payout rails allow operators to disburse funds directly to an eligible debit card. This provides rapid settlement to the cardholder, creating a modern, high-speed redemption experience that players appreciate.
        </p>

        <h3>3. Digital Gift Cards</h3>
        <p>
          Digital gift cards are one of the most effective and popular redemption options in the sweepstakes industry. Players can select digital gift cards for major retail and entertainment brands:
        </p>
        <ul>
          <li>
            <strong>Prompt Delivery:</strong> Gift card claim codes can be delivered electronically straight to a verified player&apos;s inbox upon operator approval.
          </li>
          <li>
            <strong>Flexible Minimum Limits:</strong> Operators often allow players to redeem digital gift cards at lower coin thresholds than direct bank transfers.
          </li>
          <li>
            <strong>Operator Cost Benefits:</strong> Because digital gift card distribution networks often provide commercial incentives on bulk catalog orders, operators can lower their net payout expenses while offering high-value rewards.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'provider-challenges',
    title: 'Why Finding the Right Payment Provider Can Be Challenging',
    content: (
      <>
        <p>
          Many new operators are surprised to discover that general-purpose consumer payment processors often restrict gaming and sweepstakes platforms under their standard acceptable use policies.
        </p>
        <p>
          Operating a compliant sweepstakes casino requires working with specialized merchant acquirers who understand promotional gaming models and can underwrite your business properly:
        </p>

        <h3>1. Understanding High-Risk Underwriting</h3>
        <p>
          Because sweepstakes casinos involve digital transactions and remote customers, merchant banks classify them as high-risk businesses. Securing payment approval requires presenting clear business documentation, transparent terms of service, and official sweepstakes rules.
        </p>

        <h3>2. Rolling Reserves and Processing Rates</h3>
        <p>
          To protect against potential dispute risks, acquiring banks establish customized commercial terms:
        </p>
        <ul>
          <li>
            <strong>Processing Fees:</strong> Acquirers establish custom merchant processing rates based on business operating history, projected transaction volume, and overall chargeback risk profile.
          </li>
          <li>
            <strong>Rolling Reserves:</strong> Acquiring banks frequently establish a rolling reserve—temporarily holding a portion of processed revenue for a designated period—to safeguard against unexpected dispute spikes or chargebacks before releasing settlements to your operating account.
          </li>
        </ul>

        <h3>3. The Power of Multiple Payment Gateways</h3>
        <p>
          Relying entirely on a single payment processor is an unnecessary risk. If that provider experiences technical downtime or changes its business policies, your platform could suddenly be unable to accept coin purchases.
        </p>
        <p>
          Modern platform technology, such as our{' '}
          <Link
            href="/turnkey-sweepstakes-casino-software"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            turnkey sweepstakes casino software
          </Link>
          , supports multi-gateway routing. If one payment route experiences issues, transactions can automatically route through a backup processor, keeping your casino open and transactions moving.
        </p>
      </>
    ),
  },
  {
    id: 'security-and-confidence',
    title: 'Keeping Payments Secure and Players Confident',
    content: (
      <>
        <p>
          A reliable payment system does more than move money—it protects your gaming business against fraud, bonus abuse, and unauthorized chargebacks while giving players peace of mind.
        </p>
        <p>
          Every well-engineered sweepstakes casino platform should include these essential security safeguards:
        </p>

        <div className="my-6 space-y-3">
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">1</span>
              Player Identity Verification (KYC)
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Verifying player identity and age before processing redemptions confirms that prizes are delivered to real, eligible individuals. Automated identity verification tools check government IDs, age, and residency against verified data sources.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">2</span>
              Configurable Redemption Thresholds
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Operators establish minimum redemption thresholds within their official platform rules to manage operational overhead and prevent micro-transactions, balancing customer convenience with efficient transaction costs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">3</span>
              Promotional Playthrough Rules
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              Operators configure playthrough requirements in their official sweepstakes rules to ensure promotional tokens participate in gameplay before becoming eligible for prize redemption. The platform ledger tracks eligible balances automatically according to your custom rules.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">4</span>
              Jurisdictional Eligibility &amp; Geofencing
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              State-level legal landscapes vary, and operators configure jurisdiction filters under the guidance of legal counsel to exclude territories where promotional sweepstakes are restricted. Automated location checks ensure only eligible participants can make purchases or redeem prizes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00ebaa] text-black text-xs font-black flex items-center justify-center">5</span>
              Structured Administrative Review Queue
            </h4>
            <p className="text-sm text-gray-400 mt-1 mb-0">
              A clear review workflow (Pending &rarr; In Review &rarr; Approved &rarr; Disbursed) gives your compliance team total oversight before payouts leave your business accounts.
            </p>
          </div>
        </div>

        <p>
          To understand how platform wallets communicate with game servers during active play, explore our deep dive on{' '}
          <Link
            href="/blog/sweepstakes-casino-api-integration"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            sweepstakes casino API integration and dual-currency wallets
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'choosing-solution',
    title: 'Choosing a Payment Solution That Fits Your Business',
    content: (
      <>
        <p>
          Every sweepstakes operation has unique goals, target demographics, and working capital requirements. Balancing player convenience against processing expenses is key to long-term profitability.
        </p>
        <p>
          Here is a high-level comparison of the most common payment and redemption options in 2026:
        </p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Payment / Payout Method</th>
                <th>Primary Use</th>
                <th>Settlement Speed</th>
                <th>Fee Profile</th>
                <th>Dispute &amp; Fraud Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Credit &amp; Debit Cards</strong></td>
                <td>Coin Purchases</td>
                <td>Immediate authorization</td>
                <td>Underwriter-determined card processing rates</td>
                <td>Moderate (Subject to consumer chargebacks)</td>
              </tr>
              <tr>
                <td><strong>Instant Bank Transfers (ACH)</strong></td>
                <td>Purchases &amp; Redemptions</td>
                <td>Standard banking clearing cycles</td>
                <td>Generally lower transaction fees than card interchange</td>
                <td>Low (Bank authentication required)</td>
              </tr>
              <tr>
                <td><strong>Mobile Wallets (Apple &amp; Google Pay)</strong></td>
                <td>Coin Purchases</td>
                <td>Immediate authorization</td>
                <td>Standard card-linked processing fees</td>
                <td>Low (Protected by device biometrics)</td>
              </tr>
              <tr>
                <td><strong>Push-to-Card</strong></td>
                <td>Prize Redemptions</td>
                <td>Rapid card settlement</td>
                <td>Standard per-transaction disbursement fee</td>
                <td>Very Low (Account verified prior to transfer)</td>
              </tr>
              <tr>
                <td><strong>Digital Gift Cards</strong></td>
                <td>Prize Redemptions</td>
                <td>Prompt electronic delivery</td>
                <td>Often favorable through bulk merchant catalog pricing</td>
                <td>Minimal (Non-reversible digital vouchers)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Many successful operators begin by launching with reliable card and ACH options for purchases, alongside direct ACH and digital gift cards for redemptions. As transaction volume scales, adding push-to-card and expanded wallet options further enhances player retention.
        </p>
      </>
    ),
  },
  {
    id: 'how-kvaornux-helps',
    title: 'How KVAORNUX Helps You Build a Better Sweepstakes Platform',
    showCta: true,
    ctaText: 'Discuss Your Sweepstakes Project',
    content: (
      <>
        <p>
          Building a high-performing sweepstakes casino requires technical infrastructure that treats payment processing and player redemptions as mission-critical features.
        </p>
        <p>
          At KVAORNUX, we engineer flexible gaming platform technology tailored to your operational goals:
        </p>
        <ul>
          <li>
            <strong>Flexible Payment Gateway Integrations:</strong> Connect your approved merchant accounts, banking partners, and payout providers seamlessly via modular API adapters.
          </li>
          <li>
            <strong>Independent Dual-Currency Wallets:</strong> Maintain strict, reliable separation between entertainment Gold Coins and promotional Sweeps Coins with real-time transaction ledgers.
          </li>
          <li>
            <strong>Configurable Redemption Management:</strong> Set your own minimum redemption thresholds, playthrough rules, and approval steps in a centralized back-office dashboard.
          </li>
          <li>
            <strong>Centralized Risk &amp; Verification Tools:</strong> Integrate third-party KYC and geolocation screening tools directly into player registration and payout request workflows.
          </li>
          <li>
            <strong>Source Code Included:</strong> For operators seeking complete technical independence, our{' '}
            <Link
              href="/custom-sweepstakes-casino-development"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              custom sweepstakes casino development
            </Link>{' '}
            includes full platform source code under clear contractual terms.
          </li>
        </ul>
        <p>
          <em>Please note: KVAORNUX is a specialized software technology provider. We develop the platform architecture and integration tools; operators establish their own direct agreements with merchant processing banks and payment partners.</em>
        </p>
        <p>
          Whether you are launching your first sweepstakes brand or upgrading an existing operation, our engineering team is here to help you build a reliable platform. Contact us today to discuss your project.
        </p>
      </>
    ),
  },
];

export default function SweepstakesPaymentsClient() {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<string>(blogSections[0].id);
  const pathname = usePathname();

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
        title="Sweepstakes Casino Payments in 2026: Methods, Gateways & Redemptions"
        date="29.10.2026"
        readTime="16 min read"
        tags={['Sweepstakes', 'Payments & Banking', 'Prize Redemptions', 'Turnkey']}
        bannerImage="/assets/features/sweepstakes-casino-payments-banner.webp"
        breadcrumbCurrent="Sweepstakes Casino Payments"
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

      {/* Blog Article Footer: Previous Article Button & Experts Recommendations */}
      <BlogArticleFooter currentSlug="sweepstakes-casino-payments" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner />

      {/* SHARED FAQ SECTION */}
      <FAQSection faqs={faqList} />
    </>
  );
}

export { SweepstakesPaymentsClient };
