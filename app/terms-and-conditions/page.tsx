import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Read the Kvaornux Terms & Conditions governing your use of our website, software development services, and technology solutions.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms & Conditions | Kvaornux',
    description:
      'Read the Kvaornux Terms & Conditions governing your use of our website, software development services, and technology solutions.',
    url: 'https://kvaornux.com/terms-and-conditions',
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
    title: 'Terms & Conditions | Kvaornux',
    description:
      'Read the Kvaornux Terms & Conditions governing your use of our website, software development services, and technology solutions.',
    images: ['https://kvaornux.com/assets/og-image.png'],
  },
};

export default function TermsAndConditionsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-[#00ebaa] font-medium text-xs sm:text-sm tracking-wider uppercase mb-6">
            Last Updated: September 2026
          </p>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Welcome to Kvaornux. These Terms &amp; Conditions govern your use of our website, services, and communication channels. By accessing our website or engaging our services, you agree to these Terms &amp; Conditions.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-300 leading-relaxed font-normal">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              1. About Kvaornux
            </h2>
            <p className="mb-4">
              Kvaornux provides software development and technology services, including custom iGaming platforms, casino and sportsbook technology, game and API integrations, payment integrations, backend systems, admin panels, mobile and web applications, and related technical solutions.
            </p>
            <p>
              Kvaornux is a technology and software development service provider. Unless explicitly stated otherwise in a separate written agreement, Kvaornux does not operate gambling or betting services for end users, accept player bets, hold player funds, or provide gambling accounts directly to consumers.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              2. Our Services
            </h2>
            <p className="mb-4">Services may include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Custom iGaming platform development</li>
              <li>Casino and sportsbook development</li>
              <li>Game and third-party API integrations</li>
              <li>Payment gateway integrations</li>
              <li>Wallet and transaction systems</li>
              <li>Admin and back-office systems</li>
              <li>Web and mobile application development</li>
              <li>UI/UX customization</li>
              <li>Deployment and server configuration</li>
              <li>Maintenance and technical support</li>
              <li>Other custom software development services</li>
            </ul>
            <p>
              The exact features, deliverables, timeline, pricing, source-code rights, support period, and other project-specific terms will be defined in the applicable proposal, quotation, contract, milestone agreement, or other written communication agreed with the client.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              3. Client Responsibilities
            </h2>
            <p className="mb-4">
              Clients are responsible for providing accurate project requirements, necessary content, branding materials, credentials, third-party accounts, licenses, approvals, and other information required to complete their project.
            </p>
            <p>
              Clients are also responsible for ensuring that their use and operation of any software delivered by Kvaornux complies with the laws, regulations, licensing requirements, payment rules, and other legal requirements applicable in the jurisdictions where they operate.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              4. Gambling and Regulatory Compliance
            </h2>
            <p className="mb-4">
              Kvaornux provides technology services and does not provide legal advice.
            </p>
            <p className="mb-4">
              Gambling, betting, sweepstakes, gaming, payment processing, cryptocurrency, and related activities may be regulated differently across jurisdictions.
            </p>
            <p className="mb-4">
              The client is solely responsible for determining whether its proposed business model is permitted in its target jurisdiction and for obtaining any required licenses, registrations, approvals, certifications, or professional legal advice before launching or operating the platform.
            </p>
            <p>
              Kvaornux may request information regarding licensing, compliance, or intended use where reasonably necessary for a project.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              5. Third-Party Services and APIs
            </h2>
            <p className="mb-4">
              Projects may use third-party services such as game providers, sports-data providers, payment processors, KYC providers, hosting services, cloud infrastructure, SMS providers, cryptocurrency services, or other external APIs.
            </p>
            <p className="mb-4">
              These services are governed by their own terms, pricing, availability, technical limitations, and policies.
            </p>
            <p>
              Kvaornux is not responsible for outages, pricing changes, account restrictions, API modifications, service discontinuation, or other actions controlled by third-party providers.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              6. Payments and Project Milestones
            </h2>
            <p className="mb-4">
              Project pricing and payment schedules will be agreed upon before or during the project.
            </p>
            <p className="mb-4">
              Depending on the project, payments may be divided into milestones.
            </p>
            <p className="mb-4">
              Unless otherwise agreed in writing, work associated with a milestone may begin after the applicable payment has been received.
            </p>
            <p>
              Additional features, integrations, revisions, or requirements outside the agreed scope may require additional fees and development time.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              7. Project Timeline
            </h2>
            <p className="mb-4">
              Any development timeline provided by Kvaornux is based on the scope and information available at the time of estimation.
            </p>
            <p className="mb-4">Timelines may change because of:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Changes in project requirements</li>
              <li>Additional features or revisions</li>
              <li>Delayed client feedback</li>
              <li>Delayed access or credentials</li>
              <li>Third-party API/provider delays</li>
              <li>Infrastructure issues</li>
              <li>Testing requirements</li>
              <li>Other circumstances outside reasonable control</li>
            </ul>
            <p>
              Kvaornux will make reasonable efforts to communicate material changes to the development schedule.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              8. Intellectual Property and Source Code
            </h2>
            <p className="mb-4">
              Ownership of source code, designs, software components, and other project deliverables depends on the package and written agreement applicable to the project.
            </p>
            <p className="mb-4">
              Full source-code ownership is not automatically included with every service or package.
            </p>
            <p className="mb-4">
              Where full ownership or source-code transfer is included, the applicable rights and deliverables will be specified in the project agreement.
            </p>
            <p>
              Pre-existing frameworks, reusable components, libraries, development tools, third-party software, APIs, and other materials not specifically transferred to the client remain subject to their existing ownership and licensing terms.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              9. Confidentiality
            </h2>
            <p className="mb-4">
              Kvaornux will take reasonable measures to protect confidential project information provided by clients.
            </p>
            <p className="mb-4">
              Clients must also protect confidential information, credentials, documentation, source code, API access, demonstrations, and other non-public materials provided by Kvaornux or its technology partners.
            </p>
            <p>
              Separate confidentiality or non-disclosure agreements may be used where required.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              10. Support and Maintenance
            </h2>
            <p className="mb-4">
              The support or maintenance period, if included, will be specified in the applicable project package or agreement.
            </p>
            <p>
              Support generally covers issues within the agreed project scope. New functionality, major modifications, third-party changes, infrastructure migration, or requirements introduced after project completion may be treated as additional work.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              11. Acceptable Use
            </h2>
            <p className="mb-4">You may not use our website or services to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Violate applicable laws or regulations</li>
              <li>Infringe intellectual property rights</li>
              <li>Introduce malware or malicious code</li>
              <li>Attempt unauthorized access to systems or accounts</li>
              <li>Conduct fraudulent or deceptive activities</li>
              <li>Abuse or interfere with our infrastructure or services</li>
            </ul>
            <p>
              Kvaornux reserves the right to decline or discontinue services where their use would violate applicable law, contractual obligations, or third-party requirements.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              12. No Guarantee of Business Results
            </h2>
            <p className="mb-4">
              Software development does not guarantee revenue, profitability, player acquisition, market acceptance, regulatory approval, payment-provider approval, App Store approval, Google Play approval, or other commercial outcomes.
            </p>
            <p>
              Clients remain responsible for their business operations, marketing, licensing, compliance, and commercial decisions.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              13. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the extent permitted by applicable law, Kvaornux will not be liable for indirect, incidental, consequential, or special losses arising from the use or inability to use our website, software, or services.
            </p>
            <p className="mb-4">
              This includes losses resulting from third-party providers, hosting failures, payment-provider actions, external API outages, regulatory changes, or unauthorized activities outside Kvaornux&apos;s reasonable control.
            </p>
            <p>
              Nothing in these Terms excludes liability that cannot legally be excluded or limited.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              14. Changes to Services or Terms
            </h2>
            <p className="mb-4">
              We may update these Terms &amp; Conditions when our services, business practices, technologies, or applicable requirements change.
            </p>
            <p>
              The latest version will be published on this page with an updated revision date.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              15. Privacy
            </h2>
            <p>
              Personal information collected through our website or services is handled according to our{' '}
              <Link
                href="/privacy-policy"
                className="text-[#00ebaa] hover:text-cyan-300 transition-colors underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* Section 16 - Contact Us */}
          <section className="border-t border-gray-800 pt-8 mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              16. Contact Us
            </h2>
            <p className="mb-6">
              For questions regarding these Terms &amp; Conditions or our services, contact:
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
