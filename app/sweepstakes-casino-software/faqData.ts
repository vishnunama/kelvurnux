export interface FAQItemData {
  question: string;
  answer: string;
}

export const SWEEPSTAKES_FAQS: FAQItemData[] = [
  {
    question: 'What is sweepstakes casino software?',
    answer:
      'Sweepstakes casino software is a specialized gaming platform that allows operators to run promotional, sweepstakes-style casino games. Unlike traditional real-money gambling platforms, a sweepstakes casino operates using a dual-currency system—typically Gold Coins for free entertainment play and Sweeps Coins for promotional play where eligible winnings can be redeemed for real prizes. The software manages coin balances, game integrations, player accounts, and prize redemptions.',
  },
  {
    question: 'How do Gold Coins and Sweeps Coins work?',
    answer:
      'The platform maintains two separate virtual coin balances for each player. Gold Coins (GC) are purchased in packages strictly for entertainment gameplay and hold no real cash value. Sweeps Coins (SC) are promotional entries that players receive as complimentary bonuses—such as during account registration, daily logins, Gold Coin package purchases, or via an Alternative Method of Entry (AMOE). Players can use Sweeps Coins in promotional gameplay and request to redeem accumulated winnings for real prizes once eligibility conditions are met.',
  },
  {
    question: 'What is AMOE (Alternative Method of Entry) and why is it required?',
    answer:
      'Alternative Method of Entry (AMOE) is a fundamental component of legal sweepstakes promotions that allows participants to enter without making any purchase. In a sweepstakes casino, AMOE is typically handled via mail-in entry cards or digital request forms where players request free Sweeps Coins. The Kvaornux platform provides automated entry code generation, validation queues, rate-limiting, and audit ledgers to help operators process and track AMOE entries efficiently.',
  },
  {
    question: 'What is the difference between a sweepstakes casino and a real-money casino?',
    answer:
      'A real-money online casino requires a formal gambling license to accept direct cash deposits, process wagers in fiat currency, and pay out cash winnings. A sweepstakes casino operates under promotional sweepstakes laws rather than traditional gambling regulations. Players never deposit or wager real money directly on games; instead, they play with virtual Gold Coins or promotional Sweeps Coins, and eligible Sweeps Coin prizes are reviewed and redeemed through an operator-managed workflow.',
  },
  {
    question: 'Can Kvaornux build a custom sweepstakes casino platform?',
    answer:
      'Yes. Kvaornux offers custom sweepstakes software development for operators who want a bespoke solution. This includes developing tailored player interfaces (UI/UX), proprietary wallet and playthrough rules, custom backend administration consoles, specialized payment processor integrations, and bespoke loyalty and promotional mechanics built to your exact specifications.',
  },
  {
    question: 'What is included in turnkey sweepstakes casino software?',
    answer:
      'Turnkey sweepstakes casino software provides a pre-configured platform core that allows operators to launch faster with lower upfront engineering overhead. It includes an established dual-currency wallet, responsive player lobby, integrated casino game aggregators, player account management (PAM), fraud detection tools, and an operator back-office dashboard. You can customize the platform with your brand logo, color palette, and operational parameters.',
  },
  {
    question: 'Can multiple casino game providers be integrated?',
    answer:
      'Yes. Compatible game studios and aggregation APIs can be integrated into the platform to offer slots, table games, live dealer streams, fish games, and crash games. During the project scoping phase, we confirm which game providers support dual-currency sweepstakes callbacks and help coordinate the technical integration to display games within your branded player lobby.',
  },
  {
    question: 'How does the prize redemption workflow operate?',
    answer:
      'When a player submits a prize redemption request from their eligible Sweeps Coin balance, the platform automatically validates that minimum redemption thresholds and playthrough requirements have been satisfied. The request is then placed in an operator back-office queue where administrative staff can review identity verification (KYC), check geolocation records, and approve the payout through connected banking, gift card, or payment channels.',
  },
  {
    question: 'Can identity verification (KYC) and geolocation services be integrated?',
    answer:
      'Yes. The platform includes modular API hooks for third-party identity verification (KYC), anti-money laundering (AML), and geolocation providers. These integrations allow operators to verify player age, confirm identity documents, detect VPNs or proxies, and restrict access from jurisdictions where sweepstakes promotions are prohibited or restricted by local laws.',
  },
  {
    question: 'How long does it take to launch a sweepstakes casino?',
    answer:
      'Launch timelines depend on whether you select a turnkey platform or custom software development. Turnkey implementations can be deployed more rapidly because the core platform modules are pre-built, requiring primarily branding configuration, provider connections, and testing. Custom bespoke projects follow a phased development roadmap covering discovery, UX/UI design, custom engineering, QA, and deployment based on your technical scope.',
  },
  {
    question: 'What factors determine the development cost of a sweepstakes platform?',
    answer:
      'The total investment depends on your chosen delivery model (turnkey configuration vs. custom development), the depth of custom UI/UX design, the number of third-party game and payment integrations, and specific back-office requirements. In addition to software development or platform licensing fees, operators should account for ongoing operational expenses such as game aggregator revenue shares, payment processing fees, and identity/geolocation provider costs.',
  },
  {
    question: 'Who owns the source code and player data?',
    answer:
      'Source-code licensing and ownership terms depend on the agreed contractual agreement and delivery model. With custom development arrangements, operators can negotiate specific intellectual property rights for custom-built frontends and proprietary logic, while standard turnkey deployments typically involve licensed platform access. In all cases, operators maintain full ownership and access to their customer and operational player data.',
  },
  {
    question: 'What should I prepare before contacting Kvaornux for a proposal?',
    answer:
      'To help us provide an accurate proposal, prepare an overview of your target operating jurisdictions, preferred delivery model (turnkey vs. custom), estimated project budget, desired launch timeline, and any specific game studios, payment processors, or verification providers you want to integrate. Our team will review your requirements and outline recommended technical options.',
  },
];
