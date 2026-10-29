export interface FAQItem {
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    question: 'What is a sweepstakes game aggregator?',
    answer:
      'A sweepstakes game aggregator is a service or integration layer that connects a sweepstakes platform with gaming content from multiple participating studios. It simplifies technical integration by providing a centralized connection, allowing operators to manage, update, and organize supported titles through their platform.',
  },
  {
    question: 'Can one aggregator provide games from multiple studios?',
    answer:
      'Yes. Aggregators commonly provide access to content from multiple participating game studios. However, the actual games an operator can launch depend on the aggregator’s catalog, specific studio distribution rights for promotional sweepstakes, and the operator’s target jurisdictions.',
  },
  {
    question: 'How do sweepstakes game aggregators charge operators?',
    answer:
      'Commercial terms vary depending on the aggregator, content rights, and contract structure. Pricing models may include initial integration fees, recurring monthly minimum commitments, usage-based fees tied to platform activity, or custom negotiated terms. Operators should request a transparent written breakdown of all fee components, including how gameplay activity is measured and whether additional studio integrations involve separate charges.',
  },
  {
    question: 'Do traditional online gaming rights automatically apply to US sweepstakes platforms?',
    answer:
      'No. A studio’s availability in traditional real-money gaming does not establish permission to distribute its content through a US sweepstakes platform. Content distribution rights depend on the provider, aggregator, operator, brand, jurisdiction, and promotional model. Operators should always verify approved sweepstakes distribution rights before launch.',
  },
  {
    question: 'Can operators configure different game availability for Gold Coin and Sweeps Coin play?',
    answer:
      'Yes. Depending on the platform capabilities and studio agreements, operators can configure which games appear for entertainment Gold Coin play and which are available for promotional Sweeps Coin play. The platform back office should allow operators to set availability rules and maintain appropriate transaction separation.',
  },
  {
    question: 'Does KVAORNUX provide game aggregation licenses directly?',
    answer:
      'No. KVAORNUX is a technology software and platform development provider. We develop the platform infrastructure, dual-currency wallet integrations, back-office controls, and API connectors that interface with third-party aggregators. Game content access, commercial agreements, and distribution approvals are established directly between the operator and the relevant providers or aggregators.',
  },
];
