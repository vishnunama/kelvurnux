import { JurisdictionGuideData } from '../types';

export const kahnawakeData: JurisdictionGuideData = {
  slug: 'kahnawake',
  title: 'Kahnawake Gaming Commission',
  jurisdiction: 'Mohawk Territory of Kahnawake (Canada)',
  summary:
    'Operational guide for the Kahnawake Gaming Commission regulatory framework, Client Provider Authorizations (CPA), data-center hosting standards, and casino platform planning.',
  status: 'draft',
  noticeText:
    'Research pending — review draft: This jurisdiction guide is currently in draft review status. Factual figures, official fee schedules, and statutory registry links are undergoing technical and regulatory verification. Placeholders are maintained where research is pending.',
  overviewText: [
    'Established in 1999 under the Kahnawake Gaming Law, the Kahnawake Gaming Commission (KGC) is one of the earliest interactive gaming regulatory bodies in the world. Operating from the sovereign Mohawk Territory of Kahnawake, it has regulated hundreds of global operators and software providers.',
    'The KGC issues Client Provider Authorizations (CPA) to operators wishing to offer interactive gaming, as well as Inter-Jurisdictional Authorizations (IJA) for entities holding licenses in other approved jurisdictions and seeking hosting within Kahnawake.',
    'Known for its high reliability, robust hosting infrastructure at Mohawk Internet Technologies (MIT), and established dispute resolution mechanisms, Kahnawake remains a respected jurisdiction for international platforms.',
  ],
  facts: [
    { label: 'Jurisdiction', value: 'Mohawk Territory of Kahnawake' },
    { label: 'Regulatory Authority', value: 'Kahnawake Gaming Commission (KGC)' },
    { label: 'Permitted Activities', value: 'Online Casino, Sportsbook, Poker, Live Dealer' },
    { label: 'Licensing Model', value: 'Client Provider Authorization (CPA) & Software Authorizations' },
    { label: 'Typical Processing Time', value: '8–12 Weeks' },
    { label: 'Corporate Entity Requirement', value: 'Eligible onshore or approved offshore corporation' },
    { label: 'Hosting & Server Requirements', value: 'Servers hosted at MIT (Mohawk Internet Technologies) facility' },
  ],
  licensingAuthority: {
    name: 'Kahnawake Gaming Commission (KGC)',
    description:
      'The regulatory body responsible for licensing and overseeing online gaming, sports betting, and land-based gaming within the Mohawk Territory of Kahnawake.',
    officialResources: [
      {
        name: 'KGC Official Portal',
        verified: true,
        url: 'https://gamingcommission.ca',
        description: 'Official Commission portal, regulations, and permit holder registry.',
      },
    ],
  },
  eligibilityRequirements: [
    'Incorporation of an approved operating entity with clear beneficial ownership structure.',
    'Appointment of at least two Key Persons holding Key Person Permits from the KGC.',
    'Hosting of primary servers or authorized data replication within Mohawk Internet Technologies (MIT).',
    'Independent third-party RNG and software testing verification.',
    'Implementation of comprehensive AML, customer identification, and dispute handling procedures.',
  ],
  applicationDocuments: [
    { title: 'Business Entity Application and Certificate of Good Standing', mandatory: true },
    { title: 'Personal Information Forms & Background Dossiers for all Key Persons and Shareholders', mandatory: true },
    { title: 'Detailed Platform Architecture & MIT Hosting Hosting Agreement', mandatory: true },
    { title: 'Software Audit and RNG Certifications from accredited testing facilities', mandatory: true },
    { title: 'Financial capability statements and business plan', mandatory: true },
    { title: 'Customer dispute resolution mechanism and player protection policies', mandatory: true },
  ],
  applicationProcessSteps: [
    { step: 1, title: 'Preliminary Review & Application Filing', text: 'Submit application forms, personal disclosure forms for key persons, and initial application fees.' },
    { step: 2, title: 'Comprehensive Due Diligence', text: 'KGC conducts thorough background, financial, and criminal history checks across all key stakeholders.' },
    { step: 3, title: 'Technical & Hosting Verification', text: 'Coordinate infrastructure setup and compliance auditing with Mohawk Internet Technologies (MIT).' },
    { step: 4, title: 'Issuance of Permit & Preliminary Period', text: 'Grant of the initial Client Provider Authorization for an introductory evaluation period.' },
    { step: 5, title: 'Full 5-Year Authorization', text: 'Following satisfactory operation and continuous compliance, issuance of the full 5-year renewable permit.' },
  ],
  fees: [
    { item: 'Application & Due Diligence Fee', amount: 'Content pending verification', currency: 'USD' },
    { item: 'Annual Authorization Fee', amount: 'Content pending verification', currency: 'USD' },
  ],
  ongoingObligations: [
    'Continuous hosting compliance at MIT facility.',
    'Annual license renewal and ongoing key person reporting.',
    'Maintenance of segregated accounts for player balances.',
    'Prompt investigation and submission of reports regarding player complaints referred by the Commission.',
  ],
  platformPlanning: {
    casinoTech: 'High availability data-center clustering compatible with MIT infrastructure and strict player privacy standards.',
    gameAggregation: 'Integration with authorized tier-1 aggregators ensuring verified game RTP and fair play.',
    paymentsAndWallets: 'Flexible multi-currency payment processing including international banking and digital currency gateways.',
  },
};

