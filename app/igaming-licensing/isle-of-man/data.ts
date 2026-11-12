import { JurisdictionGuideData } from '../types';

export const isleOfManData: JurisdictionGuideData = {
  slug: 'isle-of-man',
  title: 'Isle of Man Gaming License',
  jurisdiction: 'Isle of Man (British Crown Dependency)',
  summary:
    'Operational guide for the Isle of Man Gambling Supervision Commission (GSC) regulatory framework, OGRA licensing models, player fund segregation, and platform architecture planning.',
  status: 'draft',
  noticeText:
    'Research pending — review draft: This jurisdiction guide is currently in draft review status. Factual figures, official fee schedules, and statutory registry links are undergoing technical and regulatory verification. Placeholders are maintained where research is pending.',
  overviewText: [
    'The Isle of Man is a premier British Crown Dependency renowned for its world-class financial infrastructure and high-integrity regulatory ecosystem. Regulated under the Online Gambling Regulation Act 2001 (OGRA) by the Gambling Supervision Commission (GSC), an Isle of Man license is considered one of the most prestigious Tier-1 credentials globally.',
    'The jurisdiction offers several licensing tiers: a Full OGRA License (allowing direct B2C operations and white-label sub-licensing), a Sub-License (operating under an existing full licensee), a Network Services License (allowing onboarding of players from external partners without re-registration), and a B2B Software Supplier License.',
    'Key attractions of the Isle of Man include 0% corporation tax, no capital gains tax, zero gaming duty on B2B activities, and world-leading player protection standards requiring 100% segregated player deposits.',
  ],
  facts: [
    { label: 'Jurisdiction', value: 'Isle of Man (British Crown Dependency)' },
    { label: 'Regulatory Authority', value: 'Gambling Supervision Commission (GSC)' },
    { label: 'Permitted Activities', value: 'Online Casino, Sportsbook, Poker, Exchanges, Esports, Lottery' },
    { label: 'Licensing Model', value: 'Full OGRA License, Sub-License, Network Services License' },
    { label: 'Typical Processing Time', value: '10–12 Weeks' },
    { label: 'Corporate Entity Requirement', value: 'Isle of Man Incorporated Company (1931 or 2006 Act)' },
    { label: 'Hosting & Server Requirements', value: 'Primary hosting servers located in Isle of Man data centers' },
  ],
  licensingAuthority: {
    name: 'Gambling Supervision Commission (GSC)',
    description:
      'Independent statutory board established in 1962, regulating land-based and online gambling activities with an emphasis on player fund protection, anti-crime measures, and fair gaming.',
    officialResources: [
      {
        name: 'GSC Official Portal',
        verified: true,
        url: 'https://gov.im/gambling',
        description: 'Official Commission portal and register of approved licensees.',
      },
    ],
  },
  eligibilityRequirements: [
    'Incorporation of an Isle of Man company with at least two local resident directors.',
    'Appointment of a resident Designated Official (DO) or Operations Manager.',
    'Mandatory segregation of player balances in verified trust or escrow accounts with approved banks.',
    'Hosting of primary transaction servers on the Isle of Man.',
    'RNG and game software certification by an approved independent testing house (e.g. GLI, BMM, eCOGRA).',
  ],
  applicationDocuments: [
    { title: 'Company incorporation documents and register of members/directors', mandatory: true },
    { title: 'Comprehensive Personal Declaration Forms for all UBOs and Directors', mandatory: true },
    { title: 'Detailed 3-Year Business Plan and Financial Projections', mandatory: true },
    { title: 'Independent Game Software & RNG Testing Certificates', mandatory: true },
    { title: 'System Architecture & Data Hosting Documentation with IOM Data Center', mandatory: true },
    { title: 'Player Fund Protection Mechanism Documentation (Bank Escrow / Trust Deed)', mandatory: true },
    { title: 'AML / CFT and Responsible Gaming Policy Manuals', mandatory: true },
  ],
  applicationProcessSteps: [
    { step: 1, title: 'Corporate Incorporation & Local Substance', text: 'Form an Isle of Man company, appoint two local resident directors, and secure local physical presence.' },
    { step: 2, title: 'Pre-Application Meeting with GSC', text: 'Engage with the Gambling Supervision Commission to discuss operational scope, platform architecture, and timelines.' },
    { step: 3, title: 'Formal Application Submission', text: 'Submit comprehensive personal, technical, financial, and policy documentation alongside statutory application fees.' },
    { step: 4, title: 'Commission Hearing & Review', text: 'The Commissioners review the findings of the inspectorate and determine the approval of the license.' },
    { step: 5, title: 'License Grant & Go-Live Inspection', text: 'Following payment of the license duty, the 5-year renewable license is formally issued.' },
  ],
  fees: [
    { item: 'Application Fee', amount: 'Content pending verification', currency: 'GBP' },
    { item: 'Annual License Duty', amount: 'Content pending verification', currency: 'GBP' },
  ],
  ongoingObligations: [
    'Strict maintenance and periodic external auditing of segregated player funds.',
    'Annual license duty payment and quarterly regulatory reporting.',
    'Compliance with Isle of Man AML/CFT Code 2019 and reporting of suspicious activity to the FIU.',
    'Prompt reporting of any changes in corporate ownership, directors, or gaming software.',
  ],
  platformPlanning: {
    casinoTech: 'Enterprise-grade hosting architecture compliant with IOM data protection and disaster recovery requirements.',
    gameAggregation: 'Curated library of RNG-certified game providers meeting stringent GSC technical compliance standards.',
    paymentsAndWallets: 'Direct access to premier UK and European corporate banking institutions with segregated account structures.',
  },
};

