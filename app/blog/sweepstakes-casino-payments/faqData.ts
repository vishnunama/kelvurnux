export interface FAQItem {
  question: string;
  answer: string;
}

export const faqList: FAQItem[] = [
  {
    question: 'How do payments work in a US sweepstakes casino?',
    answer:
      'Sweepstakes casinos operate under a two-sided financial model. Players make inbound purchases exclusively for virtual entertainment tokens (Gold Coins) using standard payment methods such as credit cards, debit cards, bank transfers, or mobile wallets. Promotional tokens (Sweeps Coins) are awarded free as promotional rewards, bonuses, or via mail-in Alternative Method of Entry (AMOE). Eligible Sweeps Coins won through promotional play can subsequently be redeemed for real prizes through separate outbound redemption channels.',
  },
  {
    question: 'Can players purchase Sweeps Coins directly with credit cards or cash?',
    answer:
      'No. Under United States sweepstakes law, promotional tokens (Sweeps Coins) can never be directly purchased, exchanged, or loaded with real currency. This distinction is the core legal pillar that separates social gaming with sweepstakes prizes from real-money online gambling. Sweeps Coins are distributed solely as complimentary gifts alongside Gold Coin purchases, through daily login rewards, social contests, or postal mail-in requests (AMOE).',
  },
  {
    question: 'What payment methods are most commonly accepted for Gold Coin purchases?',
    answer:
      'In 2026, leading sweepstakes casinos accept major credit and debit cards (Visa, Mastercard, Discover), real-time bank transfers (ACH, instant account-to-account payments), and digital mobile wallets (Apple Pay and Google Pay). Alternative options, such as cryptocurrency or prepaid vouchers, may also be integrated depending on the operator’s merchant processing approvals and jurisdictional compliance roadmap.',
  },
  {
    question: 'How are prize redemptions disbursed to players?',
    answer:
      'Approved prize redemptions are typically disbursed through three primary channels: automated clearing house (ACH) bank transfers directly to the player’s verified domestic checking account, push-to-card disbursements for rapid card settlement, or digital gift card codes delivered electronically to the player’s verified email address.',
  },
  {
    question: 'Why is identity verification (KYC) required before prize redemption?',
    answer:
      'Identity verification (KYC) and age verification are essential security and regulatory safeguards. Operators must confirm that a player meets the required legal age, resides in an eligible jurisdiction according to platform rules, does not appear on sanctions lists, and that the payout account belongs to the registered player. Automated KYC checks also protect operators against bonus abuse, multi-accounting, and fraudulent chargeback schemes.',
  },
  {
    question: 'Does KVAORNUX provide merchant processing accounts directly?',
    answer:
      'No. KVAORNUX is a technology software provider and does not serve as a payment processing entity, acquiring bank, or merchant of record. We provide the modular technical API integration adapters, multi-processor routing logic, real-time wallet webhooks, and back-office redemption management queues. Operators enter into direct commercial merchant agreements with their chosen acquiring banks and payment gateways.',
  },
];
