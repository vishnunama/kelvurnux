import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Responsible Gaming Policy',
  description:
    'Read the Kvaornux Responsible Gaming Policy to learn about our approach, operator responsibilities, and responsible gaming technology features.',
  alternates: {
    canonical: '/responsible-gaming-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Responsible Gaming Policy | Kvaornux',
    description:
      'Read the Kvaornux Responsible Gaming Policy to learn about our approach, operator responsibilities, and responsible gaming technology features.',
    url: 'https://kvaornux.com/responsible-gaming-policy',
    siteName: 'Kvaornux',
    type: 'website',
    images: [
      {
        url: 'https://kvaornux.com/assets/og-image.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Responsible Gaming Policy | Kvaornux',
    description:
      'Read the Kvaornux Responsible Gaming Policy to learn about our approach, operator responsibilities, and responsible gaming technology features.',
    images: ['https://kvaornux.com/assets/og-image.png'],
  },
};

export default function ResponsibleGamingPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Spacer to push page content safely below fixed site header */}
      <div className="h-32 sm:h-44 md:h-52 w-full pointer-events-none" aria-hidden="true" />

      {/* Radial Background Glow Effect */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(100% 70% at 50% 0%, rgba(0, 235, 170, 0.15) 0%, rgba(0, 69, 85, 0.08) 40%, rgba(11, 11, 15, 0) 100%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title & Introduction */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Responsible Gaming Policy
          </h1>
          <p className="text-[#00ebaa] font-medium text-xs sm:text-sm tracking-wider uppercase mb-6">
            Last Updated: September 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-300 leading-relaxed font-normal">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              1. Our Approach
            </h2>
            <p className="mb-4">
              Kvaornux is a software development and technology service provider offering solutions for the iGaming and betting industry.
            </p>
            <p className="mb-4">
              We recognize the importance of responsible gaming and encourage operators using gaming technology to implement appropriate safeguards designed to promote responsible participation and protect vulnerable individuals.
            </p>
            <p>
              Kvaornux does not directly operate gambling or betting services for players, accept wagers, manage player funds, or provide gambling accounts to consumers.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              2. Operator Responsibility
            </h2>
            <p className="mb-4">
              Operators using gaming or betting platforms are responsible for ensuring that their services comply with the responsible gaming, licensing, age-verification, advertising, and consumer-protection requirements applicable in their jurisdictions.
            </p>
            <p>
              Where required, operators should implement appropriate responsible gaming controls and provide users with clear information about available support and restrictions.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              3. Age Restrictions
            </h2>
            <p className="mb-4">
              Real-money gambling and betting services should only be accessible to individuals who meet the minimum legal gambling age in their applicable jurisdiction.
            </p>
            <p>
              Operators should use appropriate age-verification and KYC procedures where required to prevent minors from accessing restricted gaming services.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              4. Responsible Gaming Tools
            </h2>
            <p className="mb-4">
              Depending on the project requirements and applicable regulations, Kvaornux can develop or integrate responsible gaming features such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Deposit limits</li>
              <li>Betting or spending limits</li>
              <li>Loss limits</li>
              <li>Session or time limits</li>
              <li>Cooling-off periods</li>
              <li>Self-exclusion functionality</li>
              <li>Account suspension</li>
              <li>Responsible gaming notifications</li>
              <li>Account activity and transaction history</li>
              <li>KYC and age-verification integrations</li>
            </ul>
            <p>
              The availability and configuration of these features depend on the individual platform, operator requirements, and applicable regulations.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              5. Self-Exclusion
            </h2>
            <p className="mb-4">
              Where applicable, gaming operators should provide users with mechanisms to temporarily or permanently restrict access to gambling services.
            </p>
            <p>
              Self-exclusion requests and related account restrictions should be handled according to the operator&apos;s policies and applicable regulatory requirements.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              6. Player Awareness
            </h2>
            <p className="mb-4">
              Gaming should be treated as entertainment and not as a guaranteed way to make money.
            </p>
            <p>
              Operators should provide clear information regarding game rules, financial risks, applicable limits, and responsible gaming resources.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              7. Support for Problem Gambling
            </h2>
            <p>
              Individuals who believe that gambling is negatively affecting their financial situation, personal life, relationships, or wellbeing should consider stopping gambling activity and seeking assistance from an appropriate professional or recognized responsible-gambling support organization available in their country.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              8. Technology and Compliance
            </h2>
            <p className="mb-4">
              Kvaornux can provide technical functionality that assists operators with responsible gaming and compliance requirements.
            </p>
            <p>
              However, implementation of technical tools does not itself guarantee regulatory compliance. Operators remain responsible for determining their legal obligations and configuring and operating their platforms accordingly.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              9. Updates to This Policy
            </h2>
            <p className="mb-4">
              We may update this Responsible Gaming Policy periodically to reflect changes in our services, technology, or industry practices.
            </p>
            <p>
              The latest version will be published on this page.
            </p>
          </section>

          {/* Section 10 - Contact Us */}
          <section className="border-t border-gray-800 pt-8 mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              10. Contact Us
            </h2>
            <p className="mb-6">
              For questions regarding responsible gaming functionality available within Kvaornux technology solutions, contact:
            </p>
            <div className="space-y-3 font-medium">
              <div className="text-[#00ebaa] font-semibold text-lg">Kvaornux</div>
              <div>
                <span className="text-gray-400">Email: </span>
                <a
                  href="mailto:info@kvaornux.com"
                  className="text-[#00ebaa] hover:text-cyan-300 transition-colors underline"
                >
                  info@kvaornux.com
                </a>
              </div>
              <div>
                <span className="text-gray-400">Phone: </span>
                <a
                  href="tel:+917240328393"
                  className="text-[#00ebaa] hover:text-cyan-300 transition-colors underline"
                >
                  +91 72403 28393
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
