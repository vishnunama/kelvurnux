import { JurisdictionGuideData } from '../types';

export const maltaData: JurisdictionGuideData = {
  slug: 'malta',
  title: 'Malta Gaming Authority (MGA)',
  jurisdiction: 'Malta (European Union)',
  summary:
    'Comprehensive operational guide for the Malta Gaming Authority (MGA) regulatory framework, European Tier-1 B2C and B2B software supplier licensing, and technical architecture compliance.',
  status: 'draft',
  noticeText:
    'Research pending — review draft: This jurisdiction guide is currently in draft review status. Factual figures, official fee schedules, and statutory registry links are undergoing technical and regulatory verification. Placeholders are maintained where research is pending.',
  overviewText: [
    'The Malta Gaming Authority (MGA) is widely recognized as the premier Tier-1 regulatory benchmark within the European Union. An MGA license provides the highest degree of player trust, corporate legitimacy, and direct access to top-tier European banking and merchant acquirers.',
    'The framework establishes clear divisions between B2C Gaming Service Licenses (covering Type 1 casino games, Type 2 fixed odds sports, Type 3 peer-to-peer poker, and Type 4 controlled skill games) and B2B Critical Gaming Supply Licenses for platform software and aggregator providers.',
    'Operating under an MGA license requires strict capitalization, local substance in Malta, appointment of approved Key Functions, and rigorous system audits by MGA-approved testing laboratories.',
  ],
  facts: [
    { label: 'Jurisdiction', value: 'Malta, European Union' },
    { label: 'Regulatory Authority', value: 'Malta Gaming Authority (MGA)' },
    { label: 'Permitted Activities', value: 'Type 1 (Casino), Type 2 (Sports), Type 3 (Poker), Type 4' },
    { label: 'Licensing Model', value: 'B2C Gaming Service & B2B Critical Supply' },
    { label: 'Typical Processing Time', value: '4–6 Months' },
    { label: 'Corporate Entity Requirement', value: 'Malta Registered Company (Ltd)' },
    { label: 'Hosting & Server Requirements', value: 'EU hosting with local regulatory replication node' },
  ],
  licensingAuthority: {
    name: 'Malta Gaming Authority (MGA)',
    description:
      'The single regulatory body responsible for the governance of all gaming activities in and from Malta, enforcing the Gaming Act 2018.',
    officialResources: [
      {
        name: 'MGA Official Portal',
        verified: true,
        url: 'https://mga.org.mt',
        description: 'Official portal and licensee registry.',
      },
    ],
  },
  eligibilityRequirements: [
    'Incorporation of a limited liability company in Malta with minimum share capital requirements according to game types.',
    'Appointment of MGA-approved Key Function holders (CEO, Compliance, Legal, AML/MLRO, Tech/CTO, Internal Audit).',
    'Stringent fit and proper testing including exhaustive Source of Wealth documentation.',
    'Implementation of certified Responsible Gaming tools (deposit limits, session limits, reality checks, self-exclusion).',
    'Independent third-party technical systems and information security audit.',
  ],
  applicationDocuments: [
    { title: 'Personal Declarations & Criminal Records for all Key Persons & Shareholders', mandatory: true },
    { title: 'Verified Bank Statements & Tax Returns proving Source of Wealth', mandatory: true },
    { title: 'Comprehensive 3-Year Financial Model and Platform Architecture Plan', mandatory: true },
    { title: 'Detailed Information Security (ISO 27001 or equivalent) Audit Reports', mandatory: true },
    { title: 'Full Suite of Operational Policies (AML, KYC, Responsible Gaming, Dispute Resolution)', mandatory: true },
    { title: 'Game and RNG Certification from accredited test houses (e.g. GLI, eCOGRA, BMM)', mandatory: true },
  ],
  applicationProcessSteps: [
    { step: 1, title: 'Corporate Formation & Key Person Vetting', text: 'Incorporate the Maltese entity and apply for Personal Management Licences (PML) for key function roles.' },
    { step: 2, title: 'Formal Application Submission', text: 'Submit comprehensive corporate, financial, technical, and regulatory compliance documentation to the MGA portal.' },
    { step: 3, title: 'Systems Audit & 60-Day Testing Window', text: 'Engage an approved external auditor to verify that the live platform architecture matches the documented specifications.' },
    { step: 4, title: 'License Issuance (10-Year Term)', text: 'Following positive audit results, the MGA grants a 10-year Gaming Service or Critical Supply License.' },
    { step: 5, title: 'Compliance Audit within Year 1', text: 'Undergo a mandatory post-licensing compliance audit during the first year of live commercial operations.' },
  ],
  fees: [
    { item: 'Application Fee', amount: 'Content pending verification', currency: 'EUR' },
    { item: 'Annual License Fee', amount: 'Content pending verification', currency: 'EUR' },
  ],
  ongoingObligations: [
    'Monthly compliance reporting, player balance reconciliation, and compliance contribution payments.',
    'Maintenance of strictly segregated player funds accounts with Tier-1 European credit institutions.',
    'Adherence to EU GDPR data protection and continuous AML screening through an appointed MLRO.',
    'Immediate notification of any significant system outages, security breaches, or management changes.',
  ],
  platformPlanning: {
    casinoTech: 'Full responsible gaming suites, reality check popups, session tracking, and rigorous RNG verification.',
    gameAggregation: 'Integration of pre-certified European game providers adhering strictly to MGA technical standards.',
    paymentsAndWallets: 'Dedicated segregated player balance handling and verified European payment gateways.',
  },
};

