export interface FAQItemData {
  question: string;
  answer: string;
}

export const SWEEPSTAKES_FAQS: FAQItemData[] = [
  {
    question: 'What is sweepstakes casino software?',
    answer:
      'Sweepstakes casino software is a specialized iGaming platform configured with dual-currency wallets (Gold Coins and Sweeps Coins), promotional distribution rules, AMOE (Alternative Method of Entry) processing, player management, and compliance controls to support sweepstakes-style gaming operations.',
  },
  {
    question: 'How do Gold Coins and Sweeps Coins work?',
    answer:
      'Gold Coins are virtual currencies used strictly for entertainment gameplay and can be purchased in coin packages. Sweeps Coins are promotional virtual currencies obtained complimentary through promotions, coin purchases, or AMOE requests, and can be used to participate in sweepstakes games for prize redemption eligibility.',
  },
  {
    question: 'What is AMOE in a sweepstakes casino?',
    answer:
      'Alternative Method of Entry (AMOE) is a mechanism that allows players to request promotional Sweeps Coins for free without making a purchase, typically via digital forms or mail-in requests. The software automates the processing, verification, rate limiting, and allocation of AMOE entry credits.',
  },
  {
    question: 'What is the difference between a sweepstakes casino and a real-money casino?',
    answer:
      'A real-money casino processes direct cash wagers and payouts under gaming licenses. A sweepstakes casino operates using a dual virtual currency system where gameplay occurs using virtual coins, and promotional coins can be accumulated and reviewed for prize redemptions under specific promotional sweepstakes rules.',
  },
  {
    question: 'Can Kvaornux build a custom sweepstakes casino platform?',
    answer:
      'Yes. Kvaornux develops custom sweepstakes technology tailored to an operator’s proprietary workflows, branded player interfaces, specific payment gateways, and custom backend administration requirements.',
  },
  {
    question: 'What is included in turnkey sweepstakes casino software?',
    answer:
      'A turnkey project starts from an established platform core, with branding, wallet rules, player management and operator workflows configured to the agreed scope. Confirm which game, payment, verification and geolocation integrations are included, which need separate provider agreements and which require additional development.',
  },
  {
    question: 'Can multiple casino game providers be integrated?',
    answer:
      'Compatible game-provider and aggregation APIs can connect multiple content studios to the platform. Before selecting a catalog, confirm each provider’s sweepstakes usage rights, supported currencies, wallet callbacks and commercial terms. A provider’s availability for a real-money casino does not by itself confirm availability for a sweepstakes product.',
  },
  {
    question: 'How does sweepstakes prize redemption work?',
    answer:
      'A player requests redemption from an eligible Sweeps Coin balance. The configured workflow can route that request through eligibility checks, identity and location verification, and operator review before an approved payout integration processes the prize. Available payout methods and review rules depend on the operator’s setup and provider agreements.',
  },
  {
    question: 'Can KYC and geolocation providers be integrated?',
    answer:
      'Yes. The platform includes modular API integrations for leading identity verification (KYC) and state-level geolocation providers to enforce age, identity, and jurisdictional rules.',
  },
  {
    question: 'How long does sweepstakes casino software development take?',
    answer:
      'Development timelines depend on the project scope, level of custom UI/UX design, required third-party integrations, and operating configurations. Turnkey setups launch faster, while custom bespoke development follows a structured multi-phase roadmap.',
  },
  {
    question: 'What affects the cost of sweepstakes casino software?',
    answer:
      'The delivery model, branding, wallet rules, integrations and back-office requirements all affect the scope. When comparing proposals, separate platform setup or development from hosting, maintenance and third-party charges such as game content, payment processing and verification services. Ask which costs are included and which require separate agreements.',
  },
  {
    question: 'Will I own the source code for my sweepstakes platform?',
    answer:
      'Source-code access and ownership depend on the agreed delivery model and contract. Custom development does not automatically mean every third-party component transfers to you. Before signing, confirm platform licensing, code access, data access, handover responsibilities and the terms for future changes.',
  },
  {
    question: 'What should I prepare before requesting a platform proposal?',
    answer:
      'Share your preferred delivery model, intended operating markets, player journeys, wallet and redemption requirements, existing systems and preferred providers. Include your budget range and target launch date so the team can assess the scope and dependencies. Provider compatibility and commercial arrangements need to be confirmed during scoping.',
  },
];
