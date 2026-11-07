import { JurisdictionGuideData } from '../types';

export const anjouanData: JurisdictionGuideData = {
  slug: 'anjouan',
  title: 'Anjouan Gaming License',
  jurisdiction: 'Anjouan (Autonomous Island of Anjouan, Union of the Comoros)',
  summary:
    'Operational and regulatory reference guide for the Anjouan offshore gaming license, covering statutory frameworks, application requirements, and technical casino platform planning.',
  status: 'draft',
  noticeText:
    'Research pending — review draft: This jurisdiction guide is currently in draft review status. Factual figures, official fee schedules, and statutory registry links are undergoing technical and regulatory verification. Placeholders are maintained where research is pending.',
  overviewText: [
    'The Anjouan gaming license is an offshore regulatory framework issued under the authority of the Autonomous Island of Anjouan (Union of the Comoros). It has gained attention among international operators seeking a single-license model covering online casino and sportsbook operations.',
    'Under this framework, a single master or operator license generally covers multiple vertical categories including slots, table games, live dealer streams, sports wagering, and esports betting.',
    'This guide outlines the regulatory framework, eligibility criteria, corporate documentation, and platform technical readiness required to operate under an Anjouan license. All details are subject to ongoing regulatory verification.',
  ],
  facts: [
    { label: 'Jurisdiction', value: 'Anjouan, Union of the Comoros' },
    { label: 'Regulatory Authority', value: 'Anjouan Gaming Board / Offshore Finance Authority' },
    { label: 'Permitted Activities', value: 'Online Casino, Sportsbook, Live Casino, Lottery' },
    { label: 'Licensing Model', value: 'B2C and B2B Operations' },
    { label: 'Typical Processing Time', value: 'Content pending verification' },
    { label: 'Corporate Entity Requirement', value: 'Content pending verification' },
    { label: 'Hosting & Server Requirements', value: 'Content pending verification' },
  ],
  licensingAuthority: {
    name: 'Anjouan Gaming Board / Offshore Finance Authority',
    description:
      'The administrative authority overseeing interactive gaming activities registered within the Autonomous Island of Anjouan. Official regulations and direct oversight procedures are undergoing verification.',
    officialResources: [
      {
        name: 'Official Gaming Authority Portal',
        verified: false,
        description: 'Direct authority link: Content pending verification',
      },
      {
        name: 'Official Licensee Registry',
        verified: false,
        description: 'Public verification register: Content pending verification',
      },
    ],
  },
  eligibilityRequirements: [
    'Incorporation of an operating company under the relevant local or approved offshore jurisdiction (Content pending verification).',
    'Appointment of qualified directors and key managerial personnel undergoing standard fit and proper background checks.',
    'Implementation of Anti-Money Laundering (AML) and Counter-Terrorist Financing (CFT) compliance protocols.',
    'Demonstrated financial solvency and segregated operational funds account planning.',
    'Technical architecture capable of maintaining secure player transaction records and audit logs.',
  ],
  applicationDocuments: [
    {
      title: 'Certified Certificate of Incorporation & Memorandum',
      description: 'Corporate registration documents for the operating applicant entity.',
      mandatory: true,
    },
    {
      title: 'Director & Shareholder KYC (Passports & Proof of Address)',
      description: 'Notarized identification documents for beneficial owners holding significant equity.',
      mandatory: true,
    },
    {
      title: 'Police Clearance / Certificate of Good Conduct',
      description: 'Criminal background clearance for all ultimate beneficial owners and key persons.',
      mandatory: true,
    },
    {
      title: 'Comprehensive Business Plan & Financial Projections',
      description: 'Detailed operational forecast, marketing plan, and financial sustainability modeling.',
      mandatory: true,
    },
    {
      title: 'AML/CFT Compliance Manual & Risk Policy',
      description: 'Standard operating procedures for customer due diligence, sanctions screening, and suspicious transaction reporting.',
      mandatory: true,
    },
    {
      title: 'Software & RNG Audit Certificates',
      description: 'Independent test lab certificates for platform games and random number generation: Content pending verification.',
      mandatory: true,
    },
  ],
  applicationProcessSteps: [
    {
      step: 1,
      title: 'Corporate Structuring & Due Diligence',
      text: 'Preparation of the corporate entity, identification of beneficial owners, and compilation of notarized personal and corporate documentation.',
    },
    {
      step: 2,
      title: 'Technical Platform & Compliance Preparation',
      text: 'Aligning platform architecture, terms of service, player dispute mechanisms, and responsible gaming controls with regulatory expectations.',
    },
    {
      step: 3,
      title: 'Formal Application Submission',
      text: 'Lodging the application dossier and required background screening materials with the regulatory authority: Content pending verification.',
    },
    {
      step: 4,
      title: 'Regulatory Review & Due Diligence Period',
      text: 'Background checks, corporate vetting, and evaluation of technical platform submissions by the licensing authority.',
    },
    {
      step: 5,
      title: 'License Issuance & Operational Activation',
      text: 'Issuance of the gaming license, connection of verified payment gateways, and final pre-live technical checks.',
    },
  ],
  fees: [
    {
      item: 'Application & Due Diligence Fee',
      amount: 'Content pending verification',
      currency: 'EUR / USD',
      source: 'Pending official fee schedule publication',
      notes: 'Initial vetting and background investigation cost.',
    },
    {
      item: 'Annual License Fee',
      amount: 'Content pending verification',
      currency: 'EUR / USD',
      source: 'Pending official fee schedule publication',
      notes: 'Statutory annual authorization fee.',
    },
    {
      item: 'Annual Renewal & Regulatory Contribution',
      amount: 'Content pending verification',
      currency: 'EUR / USD',
      source: 'Pending official fee schedule publication',
      notes: 'Ongoing compliance and maintenance levy.',
    },
  ],
  ongoingObligations: [
    'Annual license renewal and submission of updated corporate standing records.',
    'Continuous monitoring and reporting of suspicious financial activities in compliance with AML/CFT standards.',
    'Maintaining player balance segregation from day-to-day operating accounts.',
    'Prompt reporting of material changes to corporate structure, beneficial ownership, or primary platform software.',
    'Upholding player data privacy, fair gameplay monitoring, and responsible gaming limits.',
  ],
  platformPlanning: {
    casinoTech:
      'Kvaornux provides turnkey and white label casino platform software engineered to satisfy technical compliance criteria, including multi-tier PAM architecture, atomic transaction logging, and configurable jurisdictional rules.',
    gameAggregation:
      'Certified game content from 150+ providers connected via a single normalized aggregation gateway, enabling operators to activate slots, live dealers, and table titles compatible with their operational licensing scope.',
    paymentsAndWallets:
      'Multi-currency fiat and cryptocurrency payment infrastructure equipped with automated deposit/withdrawal ledgers, player verification status tracking, and exportable financial audit trails.',
  },
  // Note: FAQ and reviewDate left undefined/empty during draft phase to satisfy:
  // "Do not show a fabricated review date or empty FAQ accordion."
  faqs: [],
  sources: [
    {
      title: 'Anjouan Gaming Regulatory Framework Documentation',
      verified: false,
      notes: 'Official gazette and registry references pending verification.',
    },
  ],
  reviewDate: undefined,
};

