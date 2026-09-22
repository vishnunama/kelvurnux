'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
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
    background: linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a;
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
  content: React.ReactNode;
  showCta?: boolean;
  ctaText?: string;
}

const blogSections: BlogSection[] = [
  {
    id: 'what-is',
    title: 'What is Crypto Casino Development?',
    content: (
      <>
        <p>
          Crypto casino development involves building online gaming platforms that handle digital currency deposits, wagers, and withdrawals alongside traditional player management systems. While cryptocurrency payments offer fast settlement times and global reach, launching a functional platform requires far more than connecting a crypto payment gateway to a website interface.
        </p>
        <p>
          A sustainable crypto casino depends on a modular software architecture where financial ledgers, gaming content, player accounts, and administrative controls communicate reliably. Operators evaluating platform options must consider how each component handles concurrent user traffic, multi-currency accounting, and regulatory obligations.
        </p>
        <p>
          The technology stack of a modern iGaming platform consists of several distinct operational layers:
        </p>
        <ul>
          <li><strong>Player Account Management (PAM):</strong> Handles registrations, user profiles, authentication, self-exclusion, and account limits.</li>
          <li><strong>Wallet and Transaction Ledger:</strong> Tracks real-time player balances, active bonus funds, pending withdrawals, and atomic bet/win transactions.</li>
          <li><strong>Game Aggregation Layer:</strong> Connects the platform to third-party game servers for slots, live dealer tables, crash games, and sportsbooks.</li>
          <li><strong>Payment Integration Engine:</strong> Manages crypto wallet address generation, deposit listeners, confirmation tracking, and withdrawal processing.</li>
          <li><strong>Back-Office Management Panel:</strong> Provides administrative staff with tools for user management, game catalog configuration, and bonus distribution.</li>
          <li><strong>Risk and Anti-Fraud Controls:</strong> Monitors transaction velocity, unusual betting patterns, IP anomalies, and withdrawal approval thresholds.</li>
          <li><strong>Reporting and Analytics:</strong> Generates operational reports on gross gaming revenue (GGR), player retention, game performance, and financial balances.</li>
          <li><strong>Infrastructure and Hosting:</strong> Delivers high availability, low-latency API communication, and automated data backup routines.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'step1',
    title: 'Step 1: Choose Your Business Model',
    showCta: true,
    ctaText: 'Get Demo',
    content: (
      <>
        <p>
          Selecting the right operational model is the first structural decision when planning a casino platform. The three primary models—White Label, Turnkey, and Custom Development—differ in deployment speed, technical autonomy, operational responsibility, and long-term cost.
        </p>
        
        <h3>White Label Platform</h3>
        <p>
          A White Label model is suited for operators who prioritize rapid deployment and prefer to avoid managing underlying server infrastructure, payment gateways, and game contracts directly. Operators can deploy quickly using a{' '}
          <Link href="/white-label-casino-solutions" className="text-cyan-400 underline hover:text-cyan-300">
            white label casino solution
          </Link>{' '}
          with standard pre-built features.
        </p>
        <ul>
          <li><strong>Best when:</strong> Faster launch is required, the operator does not need full technology ownership, and established turnkey infrastructure can be leveraged.</li>
          <li><strong>Trade-offs:</strong> Reduced technical control over platform source code, dependency on the provider&apos;s operational policies, and potential commercial or regional operating restrictions.</li>
        </ul>

        <h3>Turnkey Platform</h3>
        <p>
          A Turnkey platform offers dedicated control over branding, frontend layouts, payment configurations, and bonus rules while leveraging established core platform infrastructure. Teams can build a flexible setup using a{' '}
          <Link href="/turnkey-casino-software-solutions" className="text-cyan-400 underline hover:text-cyan-300">
            turnkey iGaming solution
          </Link>.
        </p>
        <ul>
          <li><strong>Best when:</strong> More control and customization are required, the operator wants unique brand configuration, and deeper integrations are needed.</li>
          <li><strong>Trade-offs:</strong> Higher initial setup scope and greater operational responsibility for marketing, customer support, and local compliance compared to white label models.</li>
        </ul>

        <h3>Custom / Full-Source Development</h3>
        <p>
          Custom development is designed for enterprise operators requiring complete technology ownership, proprietary game or wallet logic, or specialized architectural workflows tailored to specific regional markets. For unique business requirements, operators choose a{' '}
          <Link href="/custom-igaming-solution" className="text-cyan-400 underline hover:text-cyan-300">
            custom iGaming solution
          </Link>.
        </p>
        <ul>
          <li><strong>Best when:</strong> The business requires deep technology ownership, proprietary workflows are central to the value proposition, and long-term independent platform development is planned.</li>
          <li><strong>Trade-offs:</strong> Requires significant development timelines, dedicated technical teams, and full internal responsibility for infrastructure maintenance, security, and ongoing updates.</li>
        </ul>

        <p>
          No single model is universally superior. The optimal choice depends on the operator&apos;s capital allocation, technical capabilities, target launch date, and long-term business goals.
        </p>
      </>
    ),
  },
  {
    id: 'step2',
    title: 'Step 2: Select Platform Architecture',
    showCta: true,
    ctaText: "Let's Discuss in Detail",
    content: (
      <>
        <p>
          A resilient casino software architecture separates frontend user interfaces from backend transactional engines. This decoupling ensures that frontend visual updates or high concurrent traffic do not disrupt core database operations or payment processing.
        </p>
        <p>
          The Player Account Management (PAM) system sits at the center of the architecture, serving as the single source of truth for player data, session state, verification status, and responsible gaming limits. Connected directly to the PAM is the central wallet and accounting ledger.
        </p>
        <p>
          Wallet and transaction consistency is critical. Every financial event—whether a crypto deposit, a slot spin, a bonus award, or a withdrawal—must be recorded atomically in the database ledger. If a network disruption occurs mid-spin between the game provider and the casino backend, the transaction ledger must resolve the state correctly without balance drift or double-credited funds.
        </p>
        
        <h3>Core Platform Modules</h3>
        <ul>
          <li><strong>Frontend (Web-H5):</strong> Responsive web interface optimized for desktop and mobile browsers without requiring native app downloads.</li>
          <li><strong>PAM Core:</strong> Handles identity verification, user authentication, session security, and self-exclusion enforcement.</li>
          <li><strong>Wallet Engine:</strong> Maintains real-time ledger accounting for main balances, bonus balances, and locked funds across multiple cryptocurrencies.</li>
          <li><strong>Back Office Panel:</strong> Central dashboard for administrative operations, player management, transaction auditing, and game catalog management.</li>
          <li><strong>Game Integration Gateway:</strong> Standardizes API requests between internal wallets and third-party remote gaming servers (RGS).</li>
          <li><strong>Promotion Engine:</strong> Calculates and applies deposit matches, free spins, cashback, and wagering progress in real time.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'step3',
    title: 'Step 3: Integrate Games & Content',
    showCta: true,
    ctaText: 'Talk To Us!',
    content: (
      <>
        <p>
          A casino&apos;s game library is its primary consumer product. Operators can acquire content either through direct individual API integrations with each game studio or through a centralized game aggregator.
        </p>
        <p>
          Integrating game providers directly requires negotiating separate commercial contracts, maintaining distinct API integrations, and handling multiple technical support channels. In contrast, using a{' '}
          <Link href="/casino-aggregator-api-solution" className="text-cyan-400 underline hover:text-cyan-300">
            casino aggregator API solution
          </Link>{' '}
          provides access to thousands of titles from multiple studios through a single unified API protocol, simplifying ongoing content management.
        </p>
        
        <h3>Operational Dependencies to Evaluate</h3>
        <ul>
          <li><strong>Provider Commercial Approvals:</strong> Game studios frequently require individual operator approval before enabling their titles.</li>
          <li><strong>Territorial Restrictions:</strong> Specific game providers restrict their titles in certain jurisdictions due to local licensing laws.</li>
          <li><strong>Currency & Crypto Support:</strong> Some game providers natively display crypto values (such as BTC, ETH, or USDT), while others require the platform wallet to convert balances into fiat display values during active gameplay.</li>
          <li><strong>Technical Hosting Requirements:</strong> Game assets are served directly from provider Remote Gaming Servers (RGS), making low-latency server connections essential for smooth loading times.</li>
        </ul>
        <p>
          Platform providers such as Kvaornux offer technical integration capabilities for 150+ game provider APIs and over 20,000 game titles across their software ecosystem. However, final game availability per project depends on commercial provider sign-off, regional regulatory permissions, and target market requirements.
        </p>
      </>
    ),
  },
  {
    id: 'step4',
    title: 'Step 4: Set Up Crypto Payments & Wallets',
    showCta: true,
    ctaText: 'Contact us to Know Today!',
    content: (
      <>
        <p>
          Crypto payment processing requires a dedicated wallet management pipeline to ensure funds flow securely between players, hot wallets, and secure cold storage.
        </p>
        <p>
          An operational crypto payment workflow consists of several structured steps:
        </p>
        <ol className="list-decimal ml-6 space-y-2 text-gray-300 mb-6">
          <li><strong>Address Generation:</strong> When a player requests a deposit, the system generates a unique blockchain deposit address or payment QR code associated with their account ID.</li>
          <li><strong>Network Confirmation Monitoring:</strong> Blockchain nodes or API listeners track incoming transactions on the network, waiting for a configured number of network confirmations before crediting.</li>
          <li><strong>Automated Balance Crediting:</strong> Once network confirmation requirements are satisfied, the wallet engine credits the player&apos;s internal ledger balance.</li>
          <li><strong>Withdrawal Request Processing:</strong> Players request withdrawals through their account dashboard. Low-value withdrawals can be processed automatically, while high-value transactions trigger manual review flags.</li>
          <li><strong>Hot/Cold Wallet Management:</strong> Platform administrators monitor hot wallet liquidity for automated payouts while routing excess funds to multi-signature cold storage wallets.</li>
          <li><strong>Daily Ledger Reconciliation:</strong> Automated daily reporting compares blockchain ledger receipts against internal PAM balance updates to detect any balance discrepancies.</li>
        </ol>
        <p>
          Platforms typically support widely used digital assets such as Tether (USDT), Bitcoin (BTC), and Ethereum (ETH) as standard payment options.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security and Operational Controls',
    content: (
      <>
        <p>
          Online casino platforms are frequent targets for automated abuse, bonus exploitation, and cyber threats. Maintaining platform security requires multi-layered defensive controls across admin access, API endpoints, and financial operations.
        </p>
        
        <h3>Key Security & Operational Controls</h3>
        <ul>
          <li><strong>Multi-Factor Authentication (MFA):</strong> Mandated for all admin staff and back-office logins.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> Restricts employee permissions so support agents, financial managers, and developers access only necessary tools.</li>
          <li><strong>Immutable Audit Trails:</strong> Logs every administrative action—such as balance adjustments, bonus grants, or setting changes—with timestamps and user IDs.</li>
          <li><strong>Withdrawal Velocity Checks:</strong> Automatically flags accounts requesting multiple rapid withdrawals or attempting to withdraw without meeting minimum wagering thresholds.</li>
          <li><strong>API Rate Limiting & Encryption:</strong> Encrypts all data transmission via TLS/SSL and applies strict rate limiting to prevent brute-force attacks and API abuse.</li>
          <li><strong>Disaster Recovery & Backups:</strong> Executes automated encrypted database snapshots stored in geographically redundant locations.</li>
          <li><strong>Infrastructure Monitoring:</strong> Provides real-time alerts for server resource utilization, latency spikes, and abnormal database activity.</li>
        </ul>
        <p>
          It is important to note that third-party game mechanics, Return to Player (RTP) percentages, and Random Number Generator (RNG) certifications are governed exclusively by each game studio&apos;s certified Remote Gaming Servers (RGS). A casino platform provider does not alter or manipulate the certified RTP of third-party casino games.
        </p>
      </>
    ),
  },
  {
    id: 'compliance',
    title: 'Licensing, KYC and Market Requirements',
    content: (
      <>
        <p>
          Regulatory and compliance requirements vary substantially depending on the target jurisdiction, player demographics, and business structure. Operating an online casino using cryptocurrency does not eliminate legal, tax, or regulatory obligations.
        </p>
        <p>
          Key regulatory considerations that operators must evaluate prior to launching include:
        </p>
        <ul>
          <li><strong>Jurisdictional Licensing:</strong> Determining whether to operate under established offshore gaming licenses (such as Curaçao, Anjouan, or Tobique) or local national frameworks.</li>
          <li><strong>Know Your Customer (KYC):</strong> Implementing identity verification protocols to prevent underage gambling, fraud, and identity theft.</li>
          <li><strong>Anti-Money Laundering (AML):</strong> Establishing transaction monitoring and source-of-funds checks for high-volume accounts.</li>
          <li><strong>Responsible Gaming Tools:</strong> Providing self-exclusion options, deposit limits, session timeouts, and reality checks.</li>
          <li><strong>Provider & Market Restrictions:</strong> Ensuring game providers and payment processors are legally authorized to operate in the target player regions.</li>
        </ul>
        <p>
          Legal frameworks governing iGaming and digital assets evolve rapidly. Operators should obtain professional legal and regulatory advice tailored specifically to their target markets before accepting live player deposits.
        </p>
      </>
    ),
  },
  {
    id: 'step5',
    title: 'Step 5: Pre-Launch Checklist & Operational Deployment',
    showCta: true,
    ctaText: 'Get Demo',
    content: (
      <>
        <p>
          Before opening a platform to public traffic, operators must execute a thorough end-to-end quality assurance (QA) and operational testing checklist. Launching with unverified workflows can lead to financial loss, player dissatisfaction, and security vulnerabilities.
        </p>
        
        <h3>Pre-Launch Operational Checklist</h3>
        <ul>
          <li><strong>Account Management:</strong> Test user registration, email/SMS verification, password resets, and login session persistence across devices.</li>
          <li><strong>Deposit Workflows:</strong> Verify deposit address generation, QR code rendering, block explorer tracking, and automated balance crediting across all supported cryptocurrencies.</li>
          <li><strong>Withdrawal Pipelines:</strong> Test manual approval queues, automated payout limits, gas fee calculations, and transaction status updates.</li>
          <li><strong>Game Session Stability:</strong> Confirm game launch times, balance handshakes with provider RGS, bet deduction accuracy, and win credit reliability.</li>
          <li><strong>Bonus Mechanics:</strong> Test bonus code activation, deposit match calculations, wagering progress tracking, and balance release rules.</li>
          <li><strong>Cross-Vertical Expansion:</strong> If expanding into sports betting, test live odds updates, bet slip calculations, and settlement routines. Operators can add sportsbook functionality through dedicated{' '}
          <Link href="/turnkey-sportsbook-solutions" className="text-cyan-400 underline hover:text-cyan-300">
            sports betting development
          </Link>.</li>
          <li><strong>Admin Permissions:</strong> Confirm that back-office roles restrict sensitive functions (such as manual balance credits or system settings) to authorized personnel.</li>
          <li><strong>Mobile Responsiveness:</strong> Audit UI layout, navigation menus, and game rendering across iOS and Android mobile web browsers.</li>
          <li><strong>Failover & Error Handling:</strong> Test platform behavior during simulated third-party API outages to ensure grace periods and user error notices function correctly.</li>
          <li><strong>Monitoring & Backups:</strong> Verify real-time server health metrics, error logging, and database backup restoration routines.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cost-factors',
    title: 'What Determines Crypto Casino Platform Cost?',
    content: (
      <>
        <p>
          Platform cost varies significantly based on technical scope, integration requirements, operational scale, and customization depth. Rather than relying on rigid package quotes, operators should evaluate the specific cost drivers that influence initial setup fees and ongoing operational expenses.
        </p>
        
        <h3>Primary Cost Drivers</h3>
        <ul>
          <li><strong>Operating Model Selection:</strong> White Label setups generally carry lower upfront costs compared to Turnkey or Custom Full-Source development projects.</li>
          <li><strong>UI/UX Design Customization:</strong> Utilizing standard pre-built frontend templates is more economical than designing bespoke user interfaces and brand assets.</li>
          <li><strong>Third-Party Game Integrations:</strong> The number of game studios, custom content feeds, and premium live dealer packages directly impacts setup and monthly licensing fees.</li>
          <li><strong>Product Vertical Scope:</strong> Adding sportsbooks, esports feeds, or poker networks expands licensing, data feed, and technical integration requirements.</li>
          <li><strong>Payment Gateway Infrastructure:</strong> Advanced wallet automation, multi-asset deposit routing, and integrated fiat-to-crypto ramp services increase setup complexity.</li>
          <li><strong>Automated KYC & AML Services:</strong> Integrating third-party identity verification and sanction screening tools introduces per-verification operational costs.</li>
          <li><strong>Infrastructure & Hosting:</strong> High-availability server clusters, global Content Delivery Networks (CDNs), and DDoS protection scale with traffic volume.</li>
          <li><strong>Source Code Ownership & Licensing:</strong> Acquiring proprietary source code rights requires higher financial investment than software-as-a-service (SaaS) licensing.</li>
          <li><strong>Ongoing Operating Expenses:</strong> Monthly costs include game provider Gross Gaming Revenue (GGR) rev-share fees, hosting infrastructure, technical support, and platform maintenance.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'common-mistakes',
    title: 'Common Mistakes When Launching a Crypto Casino',
    content: (
      <>
        <p>
          Operational failures during a casino launch are rarely caused by a lack of games; they typically stem from architectural flaws, inadequate risk management, or poor operational planning.
        </p>
        
        <h3>Critical Operational Pitfalls</h3>
        <ul>
          <li><strong>Selecting Software Solely on Upfront Price:</strong> Choosing a vendor based only on low initial fees often leads to unstable wallet ledgers, security vulnerabilities, and limited technical support.</li>
          <li><strong>Overlooking Atomic Transaction Accounting:</strong> Failing to verify that the wallet ledger handles concurrent bet requests cleanly can lead to duplicate credits or balance errors.</li>
          <li><strong>Assuming Universal Provider Availability:</strong> Expecting every game studio to work in every geographic market without verifying territorial permissions.</li>
          <li><strong>Launching Without Fraud & Withdrawal Workflows:</strong> Failing to define manual review thresholds and automated velocity checks before processing live withdrawals.</li>
          <li><strong>Weak Admin Permission Management:</strong> Granting overly broad back-office access to support staff without role-based restriction enforcement.</li>
          <li><strong>Neglecting Backup & Disaster Recovery Plans:</strong> Failing to automate encrypted database backups and test recovery routines prior to launch.</li>
          <li><strong>Inadequate API Error Handling:</strong> Building frontends that freeze or crash when a third-party game provider experiences temporary network latency.</li>
          <li><strong>Over-Integrating Before Product Validation:</strong> Adding dozens of complex features before testing core platform stability and marketing channels.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'kvaornux-approach',
    title: 'How Kvaornux Approaches iGaming Platform Development',
    content: (
      <>
        <p>
          Kvaornux develops modular B2B technology for casino and sportsbook operators globally. Our engineering focus centers on building reliable infrastructure, flexible API integration layers, and maintainable software architectures that adapt to evolving operator requirements.
        </p>
        
        <h3>Platform Engineering Capabilities</h3>
        <ul>
          <li><strong>Casino Platform Technology:</strong> Modular PAM engines, user management systems, and flexible frontend frameworks.</li>
          <li><strong>Sportsbook Integrations:</strong> Sports betting solutions with live odds feeds and automated event settlement.</li>
          <li><strong>Game Aggregation APIs:</strong> Unified API protocol connecting operators to extensive game provider libraries.</li>
          <li><strong>Wallet & Ledger Systems:</strong> Multi-currency accounting engines designed for reliable real-time transaction processing.</li>
          <li><strong>Payment Gateways:</strong> Integration frameworks supporting crypto processing, digital wallets, and traditional payment methods.</li>
          <li><strong>Back-Office Tools:</strong> Centralized management dashboards for operational oversight, player auditing, and bonus administration.</li>
          <li><strong>Custom iGaming Development:</strong> Tailored platform engineering for operators with specialized technical or workflow requirements.</li>
        </ul>
      </>
    ),
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

      {/* HERO SECTION */}
      <section className="relative bg-[#0b0b0f] pt-16 pb-3 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(40% 80% at 50% 0, rgba(0, 235, 170, 0.25) 0, rgba(13, 11, 16, 0) 80.49%), #0b0b0f`,
            backgroundSize: '125% 125%',
            animation: 'gradient 20s ease infinite',
          }}
        />

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

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)'
          }}
        />

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

          <div
            ref={(el) => { elementsRef.current[2] = el; }}
            data-anim="from-bottom"
            data-anim-delay="2"
            className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-400 pb-8"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-300">Kvaornux Editorial Team</span>
            </div>
            <span className="hidden sm:block text-gray-600">•</span>
            <span>Published: <span className="text-gray-300">September 29, 2025 at 5:26 am</span></span>
            <span className="hidden sm:block text-gray-600">•</span>
            <span>Last Updated: <span className="text-gray-300">30 Apr 2026, 6:33 PM</span></span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="relative bg-[#0b0b0f] pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            ref={(el) => { elementsRef.current[3] = el; }}
            data-anim="from-bottom"
            className="rounded-lg overflow-hidden border border-gray-700/50"
          >
            <Image
              src="/assets/features/comprehensive-casino-platform-features-roulette-dice.webp"
              alt="Crypto Casino Platform Development Software Dashboard showing Slots, Roulette, and Live Games"
              width={800}
              height={400}
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzA2MGIwZiIvPjwvc3ZnPg==';
              }}
            />
          </div>
        </div>
      </section>

      {/* BLOG ARTICLE WITH SIDEBAR */}
      <section className="relative bg-[#0b0b0f] py-9">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)'
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
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* LEFT SIDEBAR - TABLE OF CONTENTS */}
            <aside className="lg:col-span-1">
              <div className="toc-sidebar">
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

            {/* MAIN CONTENT */}
            <article className="lg:col-span-3 blog-content">
              {blogSections.map((section, index) => (
                <div key={section.id}>
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

                    {section.content}

                    {section.showCta && (
                      <div className="mt-8 pt-8 border-t border-gray-700/50">
                        <a
                          href="/#contact-form-section"
                          className="gradient-button px-6 py-3 rounded-lg font-bold text-black inline-block text-base hover:shadow-lg transition-shadow"
                        >
                          {section.ctaText || 'Get Demo'}
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
              'The total cost depends on factors such as platform scope, game and provider integrations, sportsbook requirements, payment gateway setup, design customization, and operational infrastructure. Contact our team to get a detailed proposal tailored to your project requirements.',
          },
          {
            question: 'How long does it take to launch a crypto casino platform?',
            answer:
              'Launch timeline depends on the chosen platform model, requested third-party integrations, custom design scope, testing, and regulatory requirements. After reviewing your specific project needs, our team provides a clear project timeline.',
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