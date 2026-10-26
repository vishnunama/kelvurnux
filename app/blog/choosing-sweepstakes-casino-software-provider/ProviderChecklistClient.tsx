'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { faqList } from './articleData';
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
  { id: "start-with-the-decisions-the-software-must-support", title: "Start with the decisions the software must support", content: (<>
<p>A platform demo can look convincing before anyone has checked what the proposal includes. A familiar game lobby tells you little about how the operator resolves a disputed transaction, reviews a redemption or moves its data later.</p>
<p>Before comparing providers, write down your player journey and the work your team will do behind it. Include account creation, coin allocation, game sessions, verification, redemption review and staff permissions. Ask each supplier to explain those same workflows. That makes proposals easier to compare than a list of feature names.</p>
<p>For an overview of the underlying modules, see <Link href="/sweepstakes-casino-software" className="text-cyan-400 underline hover:text-cyan-300">sweepstakes casino software</Link>. The checklist below focuses on the buying decision rather than repeating that architecture guide.</p>
</>) },
  { id: "1-establish-what-the-delivery-model-means-in-the-proposal", title: "1. Establish what the delivery model means in the proposal", content: (<>
<p>Treat “turnkey,” “white label” and “custom” as starting points for questions. Do not assume those labels establish identical contract terms across suppliers.</p>
<p>Ask which platform core you will use, what can be configured without development, and what counts as a paid change. Also ask who hosts the platform, who deploys updates and whether your team can use another development partner.</p>
<p>An existing core may suit a product whose requirements fit the available workflows. A more specialized operating model may need deeper development. Compare the proposed scope against <Link href="/turnkey-sweepstakes-casino-software" className="text-cyan-400 underline hover:text-cyan-300">turnkey configuration</Link> and <Link href="/custom-sweepstakes-casino-development" className="text-cyan-400 underline hover:text-cyan-300">custom development</Link>, rather than choosing a label first.</p>
</>) },
  { id: "2-request-a-workflow-demonstration-not-only-a-lobby-tour", title: "2. Request a workflow demonstration, not only a lobby tour", content: (<>
<p>Ask the supplier to demonstrate one ordinary journey and one exception. An illustrative test: a player requests a redemption, the review cannot be completed immediately, and an authorized staff member must explain the next step.</p>
<p>Can your team see the request status, relevant records, staff actions and outcome? Are permissions clear? Can an operator investigate without directly changing database records?</p>
<p>For wallet testing, agree examples that show separate coin balances and the effect of a repeated or interrupted transaction. Your technical team should review the expected outcome with the integration documentation. See the <Link href="/blog/sweepstakes-casino-api-integration" className="text-cyan-400 underline hover:text-cyan-300">API integration guide</Link> for the technical questions behind that discussion.</p>
</>) },
  { id: "3-separate-game-availability-from-permission-to-use-the-content", title: "3. Separate game availability from permission to use the content", content: (<>
<p>A studio logo on a website does not explain what your contract permits. Request a proposed content list and written confirmation of the commercial and technical arrangements applicable to your product.</p>
<p>Ask who contracts the content, which game modes are supported and what happens if a provider changes availability. Identify whether a new catalog requires configuration, development or another commercial agreement.</p>
<p>Do the same for payment, payout, identity and location services. Record who obtains approval, pays provider charges and supplies production credentials. An integration appearing in a demo is not an approval for your business.</p>
</>) },
  { id: "4-compare-costs-over-the-same-scope", title: "4. Compare costs over the same scope", content: (<>
<p>Do not compare one supplier’s setup fee with another supplier’s complete development proposal. Request separate lines for platform delivery, branding, integrations, hosting, maintenance and third-party services.</p>
<p>Where the agreement includes minimum fees, usage charges or revenue share, ask how those charges are calculated. Request an example bill using assumptions you provide. Keep those assumptions consistent across suppliers; they are planning inputs, not traffic or revenue forecasts.</p>
<p>Also ask what triggers a change request. A lower starting price is harder to assess if ordinary workflow changes are excluded and the price of additional work is unspecified.</p>
</>) },
  { id: "5-make-acceptance-testing-part-of-the-agreement", title: "5. Make acceptance testing part of the agreement", content: (<>
<p>Define the scenarios your team must approve before launch. Include successful journeys, rejected requests, provider outages, duplicate notifications and staff access restrictions where relevant to your scope.</p>
<p>Ask which tests happen in a sandbox and what must be rechecked in production. For example, <a href="https://docs.sumsub.com/docs/test-in-sandbox" className="text-cyan-400 underline hover:text-cyan-300" target="_blank" rel="noopener noreferrer">Sumsub distinguishes sandbox testing from production verification</a>: a successful sandbox exercise should not be presented as proof that real identity checks have passed.</p>
<p>Agree who records defects, who fixes them and what evidence closes a test. Keep any operator legal review and provider approvals separate from technical test completion.</p>
</>) },
  { id: "6-read-the-handover-and-exit-terms-before-signing", title: "6. Read the handover and exit terms before signing", content: (<>
<p>Code access, ownership and operational control are different questions. Confirm what is handed over: repositories, technical documentation, deployment instructions, data exports and administrative access, as applicable to the agreement.</p>
<p>Identify third-party components that have separate licenses. Ask how a later migration would handle account records, balances, transaction history and pending requests. Do not assume migration is included unless the scope says so.</p>
<p>Support also needs a definition. Establish how incidents are reported, which hours are covered and which responsibilities sit with the platform provider, hosting company or another integration partner.</p>
</>) },
  { id: "discuss-a-defined-scope", title: "Discuss a defined scope", content: (<>
<p>If you are evaluating Kvaornux, start with your player and operator requirements. Use the <Link href="/sweepstakes-casino-software" className="text-cyan-400 underline hover:text-cyan-300">main software page</Link> to compare available delivery paths and discuss the project through the existing enquiry form. Confirm capabilities and terms in the proposal rather than assuming every feature is included.</p>
</>) },
];

export default function ProviderChecklistClient() {
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
        title="Choosing a Sweepstakes Casino Software Provider: A Buyer\u2019s Checklist"
        date="Local draft · 26.10.2026"
        readTime="7 min read"
        tags={['Sweepstakes', 'Buyer Guide', 'Platform Selection']}
        bannerImage="/assets/features/what-is-sweepstakes-casino-software-banner.webp"
        authorRole="Editorial"
        factCheckerName=""
        breadcrumbCurrent="Software Provider Checklist"
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
      <BlogArticleFooter currentSlug="choosing-sweepstakes-casino-software-provider" />

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner />

      {/* SHARED FAQ SECTION */}
      <FAQSection faqs={faqList} />
    </>
  );
}
