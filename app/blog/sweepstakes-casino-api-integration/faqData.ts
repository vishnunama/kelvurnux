// Shared by the visible FAQ and server-rendered FAQ structured data.
export const faqList = [
  {
    question: 'What is a sweepstakes casino API?',
    answer:
      'A sweepstakes casino API is a technical integration interface that connects remote game servers to a sweepstakes platform, managing game launches, dual-currency wallet callbacks (GC and SC), bet debits, win credits, and transaction rollbacks.',
  },
  {
    question: 'How does a sweepstakes game API work?',
    answer:
      'When a player selects a game and coin mode (GC or SC), the platform dispatches a launch request to the game API. During gameplay, the remote game server sends real-time HTTP callbacks to the platform wallet to debit wagers and credit wins in the active coin ledger.',
  },
  {
    question: 'How are Gold Coins and Sweeps Coins handled during game integration?',
    answer:
      'The platform embeds an explicit currency mode flag (GC or SC) inside the session launch token. All subsequent balance checks, wager debits, and win credits carry this currency parameter to update the correct database ledger.',
  },
  {
    question: 'What is a wallet callback in a sweepstakes casino?',
    answer:
      'A wallet callback is an HTTP REST endpoint hosted on the platform backend that the remote game server invokes to perform real-time balance checks, wager debits, payout credits, or transaction rollbacks during gameplay.',
  },
  {
    question: 'What happens if a game transaction fails or times out?',
    answer:
      'A timeout leaves the outcome uncertain; it does not automatically mean the transaction failed. Follow the provider’s retry and reconciliation rules, retain the original transaction identifiers and process any confirmed cancellation or rollback with duplicate protection. A browser disconnect alone is not a reason to issue an automatic refund.',
  },
  {
    question: 'What is the difference between direct provider integration and a game aggregator API?',
    answer:
      'Direct provider integration connects to one specific game studio at a time, requiring separate API codebases. A game aggregator API connects to dozens of game studios through a single normalized integration endpoint.',
  },
  {
    question: 'Can an existing gaming platform integrate sweepstakes APIs?',
    answer:
      'Yes. Gaming platforms with modular Player Account Management (PAM) architecture can integrate sweepstakes dual-currency wallet engines and aggregator APIs to support promotional gaming models.',
  },
  {
    question: 'What should operators check before integrating a sweepstakes game API?',
    answer:
      'Operators should evaluate dual-currency mode support, callback response latency, idempotency protection, rollback handling routines, API documentation quality, staging sandboxes, and back-office reporting tools.',
  },
];
