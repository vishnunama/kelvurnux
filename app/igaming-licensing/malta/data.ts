import { JurisdictionGuideData } from '../types';

export const maltaData: JurisdictionGuideData = {
  slug: 'malta',
  title: 'Malta Gaming License: Costs, Requirements & Application',
  jurisdiction: 'Malta (European Union)',
  summary:
    'Planning an online casino or sportsbook? See what the Malta Gaming Authority charges, what to prepare and how to apply. Use the official register to check a licence.',
  status: 'verified',
  noticeBadge: 'Application Information',
  noticeHeading: 'Use the Official MGA Application Route',
  noticeText:
    'Start from the MGA website and Licensee Portal to find current application guidelines, checklists and fee regulations. Confirm current requirements before submitting an application.',
  noticeLinks: [
    {
      label: 'MGA Remote Gaming Information',
      url: 'https://www.mga.org.mt/licensee-hub/applications/b2c-licences/remote-gaming-services/',
    },
  ],
  heroTags: ['Malta', 'MGA Framework', 'EU / EEA'],
  overviewHeading: 'What Is a Malta Gaming Licence?',
  overviewText: [
    'The Malta Gaming Authority issues a Gaming Service Licence for businesses that offer games to players. It issues a Critical Gaming Supply Licence for businesses that supply certain games, systems or software to operators.',
    'Online casino is generally Type 1. Fixed-odds betting, including live betting, is Type 2. If you plan to offer both, confirm which approvals you need for each activity.',
  ],
  facts: [
    { label: 'Regulator', value: 'Malta Gaming Authority (MGA)' },
    { label: 'Application fee', value: '€5,000' },
    { label: 'Standard B2C annual licence fee', value: '€25,000' },
    { label: 'Licence routes', value: 'B2C operators and B2B suppliers' },
  ],
  factsNote:
    'Note: Regulatory charges published by the MGA. Application fees are separate from annual charges.',
  authorityHeading: 'How to Check a Malta Gaming Licence',
  authorityText: [
    'Use the MGA Licensee Register or URL Checker. Search for the company or website and compare the listed authorisation with the details you were given.',
  ],
  licensingAuthority: {
    name: 'Malta Gaming Authority (MGA)',
    description:
      'Use the MGA Licensee Register or URL Checker. Search for the company or website and compare the listed authorisation with the details you were given.',
    officialResources: [
      {
        name: 'MGA Licensee Register',
        url: 'https://www.mga.org.mt/licensee-hub/licensee-register/',
        verified: true,
        linkLabel: 'Check the MGA Licensee Register',
        description: 'Official licensee register and URL checker maintained by the MGA.',
      },
    ],
  },
  eligibilityHeading: 'Eligibility and Company Requirements',
  eligibilityText: [
    'The MGA accepts applications from companies established in the EU or EEA that meet the applicable capital and financial reporting requirements.',
  ],
  eligibilityIntro:
    'The MGA accepts applications from companies established in the EU or EEA that meet the applicable capital and financial reporting requirements.',
  eligibilityRequirements: [],
  documentsHeading: 'Documents to Prepare',
  documentsIntro:
    'Start with the MGA checklist for your licence type. Prepare company and ownership records, declarations from the relevant individuals, your business plan, financial forecasts, operating policies and documentation for your proposed gaming system. Use the official checklist to confirm the full list.',
  applicationDocuments: [
    {
      title: 'Company and corporate formation records',
      description: '',
      mandatory: true,
    },
    {
      title: 'Ownership records and personal declarations from relevant individuals',
      description: '',
      mandatory: true,
    },
    {
      title: 'Comprehensive business plan and financial forecasts',
      description: '',
      mandatory: true,
    },
    {
      title: 'Operating policies (AML, player protection, dispute resolution)',
      description: '',
      mandatory: true,
    },
    {
      title: 'Documentation for the proposed gaming system',
      description: '',
      mandatory: true,
    },
  ],
  documentsClosing:
    'Confirm the full list and specific checklist items on the official MGA portal before paying for certifications or third-party audits.',
  processHeading: 'How to Apply for a Malta Gaming Licence',
  processIntro:
    'The MGA application process involves route selection, document verification, regulatory review, and technical systems readiness.',
  applicationProcessSteps: [
    {
      step: 1,
      title: 'Choose Your Licence Route',
      text: 'Decide whether you will serve players or supply operators.',
    },
    {
      step: 2,
      title: 'Confirm Your Game Types',
      text: 'List the casino, betting or other activities you want to offer.',
    },
    {
      step: 3,
      title: 'Gather Your Documents',
      text: 'Use the MGA checklist to prepare company, financial and system information.',
    },
    {
      step: 4,
      title: 'Apply Online',
      text: 'Submit the application through the MGA Licensee Portal.',
    },
    {
      step: 5,
      title: 'Complete the Review',
      text: 'Respond to MGA questions about the company, funding, business plan and operating procedures.',
    },
    {
      step: 6,
      title: 'Prepare for the System Audit',
      text: 'Set up the system for review and follow the MGA instructions before going live.',
    },
  ],
  processTimingNote:
    'Timing note: Timing depends on the application, follow-up requests and system readiness. Avoid relying on a fixed approval or launch promise.',
  feesHeading: 'How Much Does a Malta Gaming Licence Cost?',
  feesIntro:
    'The MGA lists a €5,000 non-refundable application fee and a standard annual B2C licence fee of €25,000. Use the breakdown below for published regulatory fees:',
  fees: [
    {
      item: 'Application fee',
      amount: '€5,000',
      currency: 'EUR',
      notes: 'For the remote licence routes covered here',
      source: 'MGA published fee schedule',
    },
    {
      item: 'Standard B2C annual licence fee',
      amount: '€25,000',
      currency: 'EUR',
      notes: 'Standard annual licence fee for B2C operators',
      source: 'MGA published fee schedule',
    },
    {
      item: 'B2C annual fee for Type 4 only',
      amount: '€10,000',
      currency: 'EUR',
      notes: 'Controlled skill games only',
      source: 'MGA published fee schedule',
    },
    {
      item: 'B2B supplying material elements of games',
      amount: '€25,000 – €35,000',
      currency: 'EUR',
      notes: 'Based on annual revenue (€10,000 for Type 4 supplies only)',
      source: 'MGA published fee schedule',
    },
    {
      item: 'B2B back-office software annual fee',
      amount: '€3,000 or €5,000',
      currency: 'EUR',
      notes: 'Based on annual revenue',
      source: 'MGA published fee schedule',
    },
  ],
  feesSupportingText: [
    'Budget separately for applicable compliance contributions, tax, company setup, professional advice, software and audits. Malta revised its gaming tax rules on 1 October 2026. Check the current rules for your activities and the players you serve.',
    'Keep share capital separate from fees. Do not add a universal first-year total or repeat the older flat 5% tax figure.',
  ],
  obligationsHeading: 'Check Your Target Markets and Ongoing Responsibilities',
  obligationsIntro:
    'Check the rules of every country you plan to serve. A Malta gaming licence does not automatically grant permission to offer games across the EU or elsewhere.',
  obligationsText: [
    'Plan for player protection, financial reporting and other ongoing duties that apply to your licence. Confirm those duties before choosing how your platform will operate.',
  ],
  ongoingObligations: [],
  platformHeading: 'Plan Your Casino or Sportsbook Software',
  platformIntro:
    'Kvaornux develops white-label, turnkey and custom casino and sportsbook software. Share your planned games, payment providers and target markets so we can discuss your software scope.',
  platformSupportingCopy:
    'Licensing and legal advice are separate from Kvaornux’s software development services. Contact our team to discuss your platform technology scope.',
  platformPlanning: {
    casinoTech:
      'Choose a turnkey setup or a custom platform with the features your business needs.',
    gameAggregation:
      'Connect the selected game providers and organize your casino’s game selection.',
    paymentsAndWallets:
      'Connect your selected crypto payment provider and bring payment records into your back office.',
    cards: [
      {
        title: 'Casino & Sportsbook Software',
        description:
          'Choose a turnkey setup or a custom platform with the features your business needs.',
        linkHref: '/turnkey-casino-software-solutions',
        linkText: 'Explore Turnkey Casino Software',
      },
      {
        title: 'Games & Provider Integrations',
        description:
          'Connect the selected game providers and organize your casino’s game selection.',
        linkHref: '/casino-aggregator-api-solution',
        linkText: 'Explore Game Aggregator API',
      },
      {
        title: 'Crypto Payment Integration',
        description:
          'Connect your selected crypto payment provider and bring payment records into your back office.',
        linkHref: '/crypto-casino-software',
        linkText: 'Explore Crypto Casino Software',
      },
    ],
  },
  faqs: [
    {
      question: 'How much does a Malta gaming licence cost?',
      answer:
        'The MGA lists a €5,000 application fee and a €25,000 standard annual operator fee. Budget separately for any compliance contribution, tax and business setup costs.',
    },
    {
      question: 'What is the difference between B2C and B2B?',
      answer:
        'B2C is for offering games to players. B2B is for supplying certain games, systems or software to operators.',
    },
    {
      question: 'Can an MGA licence cover casino and sportsbook?',
      answer:
        'A B2C licence can cover multiple approved activities. Check the approvals required for casino and fixed-odds betting before offering both.',
    },
    {
      question: 'What documents do I need?',
      answer:
        'Start with the MGA checklist for your licence type. It covers company information, people involved, business and financial plans, operating policies and details about the gaming system.',
    },
    {
      question: 'Can I use a Malta gaming licence in every EU country?',
      answer:
        'Check each country\'s requirements. An MGA licence does not automatically give you permission to serve players throughout the EU.',
    },
    {
      question: 'How can I check an MGA licence?',
      answer:
        'Search the MGA Licensee Register by company or website and compare the authorisation details with the business you are checking.',
    },
    {
      question: 'Does Kvaornux software include a gaming licence?',
      answer:
        'Kvaornux provides platform development. Arrange the gaming licence separately before launch.',
    },
  ],
  sources: [
    {
      title: 'B2C fees, game types and checklists',
      url: 'https://www.mga.org.mt/licensee-hub/applications/b2c-licences/remote-gaming-services/',
      verified: true,
      notes: 'Official MGA B2C remote gaming guidance',
    },
    {
      title: 'B2B game supplier fees',
      url: 'https://www.mga.org.mt/licensee-hub/applications/b2b-licences/game-providers-and-back-office/',
      verified: true,
      notes: 'Official critical gaming supply fees',
    },
    {
      title: 'B2B back-office software fees',
      url: 'https://www.mga.org.mt/licensee-hub/applications/b2b-licences/back-office/',
      verified: true,
      notes: 'Official back-office software supply fees',
    },
    {
      title: 'MGA 2026/2027 fact sheet',
      url: 'https://www.mga.org.mt/app/uploads/Malta-Gaming-Authority-Fact-Sheet-2026.pdf.pdf',
      verified: true,
      notes: 'Official MGA publication',
    },
    {
      title: 'Application guidance',
      url: 'https://www.mga.org.mt/app/uploads/Guidance-Note-Application-Process.pdf',
      verified: true,
      notes: 'Guidance note on the application process',
    },
    {
      title: 'Application portal',
      url: 'https://portal.mga.org.mt/',
      verified: true,
      notes: 'Official MGA Licensee Portal',
    },
    {
      title: 'Licensee register',
      url: 'https://www.mga.org.mt/licensee-hub/licensee-register/',
      verified: true,
      notes: 'Official MGA Licensee Register and URL Checker',
    },
    {
      title: 'October 2026 tax update',
      url: 'https://www.mga.org.mt/revised-vat-and-gaming-tax-frameworks-come-into-effect-tomorrow/',
      verified: true,
      notes: 'Official framework revision details',
    },
  ],
  reviewDateLabel: 'Sources checked:',
  reviewDate: '12 November 2026',
};
