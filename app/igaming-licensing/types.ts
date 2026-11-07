export interface JurisdictionFact {
  label: string;
  value: string;
}

export interface FeeItem {
  item: string;
  amount: string;
  currency: string;
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

export interface JurisdictionGuideData {
  slug: string;
  title: string;
  jurisdiction: string;
  summary: string;
  status: 'draft' | 'verified';
  noticeText: string;
  overviewText: string[];
  facts?: JurisdictionFact[];
  licensingAuthority: {
    name: string;
    description?: string;
    officialResources?: OfficialResource[];
  };
  eligibilityRequirements: string[];
  applicationDocuments: DocumentChecklistItem[];
  applicationProcessSteps: { step: number; title: string; text: string }[];
  fees?: FeeItem[];
  ongoingObligations: string[];
  platformPlanning: {
    casinoTech: string;
    gameAggregation: string;
    paymentsAndWallets: string;
  };
  faqs?: FAQItem[];
  sources?: SourceReference[];
  reviewDate?: string;
}

