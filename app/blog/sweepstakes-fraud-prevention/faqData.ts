export interface FAQItem {
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    question: 'What is sweepstakes fraud prevention?',
    answer:
      'Sweepstakes fraud prevention involves software controls, verification procedures, monitoring, and operational policies designed to reduce fraudulent activity on a sweepstakes platform. Common concerns include duplicate accounts, payment fraud, promotional abuse, and suspicious redemption requests.',
  },
  {
    question: 'How can sweepstakes operators prevent bonus abuse?',
    answer:
      'Operators can use promotional eligibility rules, account monitoring, registration safeguards, and proportionate identity checks. Suspicious patterns should be reviewed using multiple signals to reduce false positives.',
  },
  {
    question: 'Why are chargebacks a risk for sweepstakes platforms?',
    answer:
      'Chargebacks can create financial losses, additional operational costs, and problems with payment partners. Operators should maintain reliable transaction records and follow the requirements of their payment providers.',
  },
  {
    question: 'Can KYC prevent all fraudulent accounts?',
    answer:
      'No. Identity verification can reduce certain risks, but it cannot eliminate fraud. Effective prevention also requires transaction monitoring, account security, operational reviews, and appropriate payment controls.',
  },
  {
    question: 'How can operators protect Sweeps Coin redemptions?',
    answer:
      'Operators should verify applicable eligibility conditions, maintain accurate wallet records, prevent duplicate processing, and review suspicious activity before approving redemptions.',
  },
  {
    question: 'Can geolocation software detect VPN usage?',
    answer:
      'Some geolocation and risk services can identify indicators associated with VPNs, proxies, or location manipulation. Detection capabilities vary, and no single signal is completely reliable.',
  },
  {
    question: 'Does KVAORNUX provide fraud prevention software?',
    answer:
      'KVAORNUX develops iGaming platforms and can discuss fraud-related platform controls and third-party integrations as part of a project’s requirements. Specific features and integrations should be confirmed for the proposed solution.',
  },
];
