export interface JurisdictionFact {
  label: string;
  value: string;
}

export interface FeeItem {
  item: string;
  amount: string;
  currency: string;
  b2bAmount?: string;
  source?: string;
  notes?: string;
}

export interface DocumentChecklistItem {
  title: string;
  description?: string;
  mandatory: boolean;
}

export interface OfficialResource {
  name: string;
  url?: string;
  verified: boolean;
  description?: string;
  linkLabel?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SourceReference {
  title: string;
  url?: string;
  verified: boolean;
  notes?: string;
}

export interface NoticeLink {
  label: string;
  url: string;
}

export interface PlatformPlanningCard {
  title: string;
  description: string;
  linkText?: string;
  linkHref: string;
}

export interface JurisdictionGuideData {
  slug: string;
  title: string;
  jurisdiction: string;
  summary: string;
  status: 'draft' | 'verified';
  noticeBadge?: string;
  noticeHeading?: string;
  noticeText: string;
  noticeLinks?: NoticeLink[];
  overviewHeading?: string;
  overviewText: string[];
  facts?: JurisdictionFact[];
  factsNote?: string;
  heroTags?: string[];
  authorityHeading?: string;
  authorityText?: string[];
  licensingAuthority: {
    name: string;
    description?: string;
    officialResources?: OfficialResource[];
  };
  eligibilityHeading?: string;
  eligibilityIntro?: string;
  eligibilityText?: string[];
  eligibilityRequirements?: string[];
  documentsHeading?: string;
  documentsIntro?: string;
  documentsClosing?: string;
  applicationDocuments: DocumentChecklistItem[];
  processHeading?: string;
  processIntro?: string;
  processTimingNote?: string;
  applicationProcessSteps: { step: number; title: string; text: string }[];
  feesHeading?: string;
  feesIntro?: string;
  feesTableHeaders?: { charge?: string; b2c?: string; b2b?: string };
  feesSupportingText?: string[];
  fees?: FeeItem[];
  obligationsHeading?: string;
  obligationsIntro?: string;
  obligationsText?: string[];
  ongoingObligations: string[];
  platformHeading?: string;
  platformIntro?: string;
  platformSupportingCopy?: string;
  platformPlanning: {
    casinoTech: string;
    gameAggregation: string;
    paymentsAndWallets: string;
    cards?: PlatformPlanningCard[];
  };
  faqs?: FAQItem[];
  sources?: SourceReference[];
  reviewDateLabel?: string;
  reviewDate?: string;
}

