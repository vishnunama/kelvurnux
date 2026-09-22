import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Kvaornux',
  description:
    'Read the Kvaornux Privacy Policy to understand how information submitted through our website is collected, used and protected.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
        {/* Simple Clean Header Section */}
        {/* <header className="mb-12 border-b border-gray-800 pb-8">
          <p className="text-[#00ebaa] font-medium text-xs sm:text-sm tracking-wider uppercase mb-2">
            Last updated: September 2026
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            This Privacy Policy explains how Kvaornux collects, uses and handles information when you visit our website, contact our team or submit information through our forms.
          </p>
        </header> */}

        {/* Content Sections */}
        <div className="space-y-10 text-gray-300 leading-relaxed font-normal">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you voluntarily provide to us when you fill out contact forms, request information, or communicate with our team through the website. Depending on your enquiry, this information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name or organization</li>
              <li>Project details and technology requirements</li>
              <li>Messages and any additional information you choose to provide in your enquiry</li>
            </ul>
            <p className="text-gray-400 text-sm">
              In addition, basic technical information related to website access or operation—such as IP address, browser type, device information, and general usage metrics—may be processed where necessary to ensure website performance and security.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              How We Use Information
            </h2>
            <p className="mb-4">
              Information collected through our website is used strictly for legitimate operational and business purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding to your enquiries and requests</li>
              <li>Understanding project requirements and providing relevant technical information</li>
              <li>Communicating about requested services and platform capabilities</li>
              <li>Maintaining, operating, and improving website functionality</li>
              <li>Protecting website security and preventing unauthorized access or abuse</li>
              <li>Maintaining necessary business communications and records</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Contact Forms
            </h2>
            <p className="mb-4">
              When you submit a contact form on the Kvaornux website, the information you provide is used by our team to review your request and communicate with you regarding your project, service, or technology enquiry.
            </p>
            <p className="text-gray-400 text-sm">
              Submitting an enquiry or contact form through this website does not by itself create a formal contractual relationship with Kvaornux.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Cookies and Technical Data
            </h2>
            <p className="mb-4">
              Our website may use cookies, local storage, or similar technical mechanisms where necessary for basic website functionality, user preferences, security enforcement, and performance monitoring.
            </p>
            <p className="text-gray-400 text-sm">
              You can manage or disable cookies through your browser settings. Please note that disabling essential technical cookies may affect how certain features of the website function.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Third-Party Services
            </h2>
            <p className="mb-4">
              Kvaornux may utilize trusted third-party service providers to support our website infrastructure and operations. These services may assist with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Website hosting and content delivery</li>
              <li>Infrastructure and server management</li>
              <li>Email and communication processing</li>
              <li>Form data processing and routing</li>
              <li>Security monitoring and abuse prevention</li>
            </ul>
            <p className="text-gray-400 text-sm">
              These third-party service providers have access to limited technical or submitted data only as necessary to perform their specific operational functions.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Data Retention
            </h2>
            <p>
              We retain personal and project information only for as long as reasonably necessary to fulfill the purposes for which it was collected, respond to your enquiries, maintain business communication records, protect system security, or comply with operational and legal obligations.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Data Security
            </h2>
            <p>
              Kvaornux implements reasonable technical and organizational security measures designed to protect submitted information from unauthorized access, disclosure, alteration, or destruction. However, no electronic transmission over the Internet or digital storage system can be guaranteed to be entirely immune from risk.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              International Users
            </h2>
            <p>
              Kvaornux receives enquiries from international users and business partners. Information submitted through our website may be processed using cloud infrastructure and service providers located in various jurisdictions. By using the website and submitting your information, you acknowledge that your data may be processed across different operational regions.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Your Privacy Requests
            </h2>
            <p className="mb-4">
              If you have submitted information through our website and wish to inquire about, update, or request the deletion of your information, you may contact us. We will review and handle privacy requests in accordance with applicable requirements.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Third-Party Links
            </h2>
            <p>
              Our website may contain links to external third-party websites, platforms, or services. Third-party sites operate under their own independent privacy policies and terms. Kvaornux is not responsible for the privacy practices, content, or policies of third-party websites.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our website features, technology, data practices, or legal requirements. Updated versions will be published on this page, and the &quot;Last updated&quot; date at the top of the policy will be revised accordingly.
            </p>
          </section>

          {/* Section 12 - Clean Contact Section */}
          <section className="border-t border-gray-800 pt-8 mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="mb-6">
              For privacy-related questions or requests, you can contact Kvaornux using the details below.
            </p>
            <div className="space-y-3 font-medium">
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
