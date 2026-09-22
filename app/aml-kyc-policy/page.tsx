import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AML & KYC Policy | Kvaornux',
  description:
    'Read the Kvaornux AML & KYC Policy to understand our technical capabilities for Anti-Money Laundering and Know Your Customer compliance.',
  alternates: {
    canonical: '/aml-kyc-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AmlKycPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            AML &amp; KYC Policy
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
              1. Introduction
            </h2>
            <p className="mb-4">
              Kvaornux is a software development and technology service provider offering solutions for the iGaming, betting, gaming, and related digital industries.
            </p>
            <p className="mb-4">
              We recognize the importance of Anti-Money Laundering (AML), Know Your Customer (KYC), fraud prevention, and identity verification measures within regulated gaming environments.
            </p>
            <p>
              Kvaornux does not directly operate gambling or betting services, accept player wagers, hold player funds, or provide gambling accounts to consumers.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              2. Operator Responsibility
            </h2>
            <p className="mb-4">
              Operators using gaming or betting technology are responsible for determining and complying with the AML, KYC, identity verification, sanctions, financial crime prevention, and regulatory requirements applicable to their business and jurisdictions.
            </p>
            <p>
              Operators are responsible for obtaining any licenses, registrations, approvals, and compliance services required for their operations.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              3. KYC &amp; Identity Verification
            </h2>
            <p className="mb-4">
              Depending on project requirements, Kvaornux can develop or integrate functionality that assists operators with customer verification, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Identity verification workflows</li>
              <li>Age verification</li>
              <li>Document submission and verification</li>
              <li>Account verification status</li>
              <li>KYC provider integrations</li>
              <li>Verification before deposits or withdrawals</li>
              <li>Account restrictions based on verification status</li>
              <li>Administrative review and approval workflows</li>
            </ul>
            <p>
              The exact verification process depends on the operator&apos;s requirements, jurisdiction, and third-party verification provider.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              4. AML &amp; Transaction Monitoring
            </h2>
            <p className="mb-4">
              Where required by the project, platforms may include functionality supporting:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Transaction records</li>
              <li>Deposit and withdrawal monitoring</li>
              <li>Account activity monitoring</li>
              <li>Transaction limits</li>
              <li>Suspicious activity flags</li>
              <li>Risk indicators</li>
              <li>Administrative alerts</li>
              <li>User and transaction history</li>
              <li>Audit logs</li>
              <li>Manual compliance review</li>
            </ul>
            <p>
              Such technology assists operators with compliance processes but does not replace professional legal or compliance assessment.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              5. Third-Party KYC and Compliance Providers
            </h2>
            <p className="mb-4">
              Kvaornux may integrate third-party identity verification, KYC, AML, fraud prevention, geolocation, payment, or compliance services.
            </p>
            <p className="mb-4">
              Third-party services operate under their own terms, privacy policies, pricing, geographic availability, and regulatory requirements.
            </p>
            <p>
              Kvaornux does not control the decisions or verification results produced by independent third-party providers.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              6. Record Keeping
            </h2>
            <p className="mb-4">
              Platforms can be designed to maintain appropriate records relating to user verification, account activity, transactions, administrative actions, and other relevant events.
            </p>
            <p>
              Operators are responsible for determining how long such information must be retained under applicable laws and regulatory requirements.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              7. Suspicious Activity
            </h2>
            <p className="mb-4">
              Operators should establish appropriate procedures for identifying, reviewing, restricting, and reporting suspicious activity where required by applicable law.
            </p>
            <p>
              Kvaornux can provide technical functionality to assist with monitoring and administrative review, but regulatory reporting and compliance decisions remain the responsibility of the operator.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              8. Data Protection
            </h2>
            <p className="mb-4">
              Personal information collected through KYC or AML processes should be handled securely and in accordance with applicable privacy and data-protection requirements.
            </p>
            <p>
              Operators are responsible for ensuring that they have an appropriate legal basis for collecting and processing customer information.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              9. No Legal or Compliance Advice
            </h2>
            <p className="mb-4">
              Information provided by Kvaornux regarding AML, KYC, or other compliance-related functionality is provided for general and technical purposes.
            </p>
            <p className="mb-4">
              It should not be considered legal, regulatory, financial, or professional compliance advice.
            </p>
            <p>
              Operators should obtain independent professional advice regarding their specific regulatory obligations.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              10. Policy Updates
            </h2>
            <p className="mb-4">
              We may update this policy periodically to reflect changes in our services, technologies, or industry practices.
            </p>
            <p>
              The latest version will be made available on this page.
            </p>
          </section>

          {/* Section 11 - Contact Us */}
          <section className="border-t border-gray-800 pt-8 mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              11. Contact Us
            </h2>
            <p className="mb-6">
              For questions regarding AML/KYC functionality or integrations available through Kvaornux solutions, contact:
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
    </main>
  );
}
