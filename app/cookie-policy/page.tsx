import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Kvaornux',
  description:
    'Read the Kvaornux Cookie Policy to understand how we use cookies and similar technologies on our website.',
  alternates: {
    canonical: '/cookie-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cookie Policy | Kvaornux',
    description:
      'Read the Kvaornux Cookie Policy to understand how we use cookies and similar technologies on our website.',
    url: 'https://kvaornux.com/cookie-policy',
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
    title: 'Cookie Policy | Kvaornux',
    description:
      'Read the Kvaornux Cookie Policy to understand how we use cookies and similar technologies on our website.',
    images: ['https://kvaornux.com/assets/og-image.png'],
  },
};

export default function CookiePolicyPage() {
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
            Cookie Policy
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
              This Cookie Policy explains how Kvaornux uses cookies and similar technologies when you visit our website.
            </p>
            <p>
              Cookies help websites function properly, remember preferences, understand how visitors interact with pages, and improve overall website performance and user experience.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              2. What Are Cookies?
            </h2>
            <p className="mb-4">
              Cookies are small text files stored on your device when you visit a website.
            </p>
            <p className="mb-4">
              They may store information about your browser, device, preferences, session, or interactions with the website.
            </p>
            <p>
              Some cookies are necessary for website functionality, while others may be used for analytics, performance, or marketing purposes.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              3. Cookies We May Use
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#00ebaa] mb-2">
                  Essential Cookies
                </h3>
                <p>
                  These cookies may be required for basic website functionality, security, forms, sessions, and other essential features.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#00ebaa] mb-2">
                  Analytics Cookies
                </h3>
                <p>
                  We may use analytics technologies to understand how visitors use our website, including information such as pages visited, traffic sources, approximate session duration, and website interactions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#00ebaa] mb-2">
                  Functional Cookies
                </h3>
                <p>
                  These cookies may remember preferences or settings that improve your experience when returning to the website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#00ebaa] mb-2">
                  Marketing Cookies
                </h3>
                <p>
                  Where applicable and subject to required consent, cookies or similar technologies may be used to understand marketing performance or provide more relevant communications.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              4. Third-Party Services
            </h2>
            <p className="mb-4">
              Our website may use third-party services for analytics, hosting, security, communications, embedded content, or other functionality.
            </p>
            <p>
              These third parties may use their own cookies or similar technologies according to their respective privacy and cookie policies.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              5. Managing Cookies
            </h2>
            <p className="mb-4">
              You can control or delete cookies through your browser settings.
            </p>
            <p className="mb-4">
              Depending on your location and applicable requirements, our website may also provide a cookie consent mechanism allowing you to accept or manage certain categories of non-essential cookies.
            </p>
            <p>
              Disabling certain cookies may affect some website functionality.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              6. Changes to This Cookie Policy
            </h2>
            <p className="mb-4">
              We may update this Cookie Policy when our website, technologies, third-party services, or applicable requirements change.
            </p>
            <p>
              The latest version will be published on this page with the updated revision date.
            </p>
          </section>

          {/* Section 7 - Contact Us */}
          <section className="border-t border-gray-800 pt-8 mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              7. Contact Us
            </h2>
            <p className="mb-6">
              If you have questions regarding this Cookie Policy, contact:
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
