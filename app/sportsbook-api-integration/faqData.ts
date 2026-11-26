export interface SportsbookApiFAQItem {
  question: string;
  answer: string;
}

export const SPORTSBOOK_API_FAQS: SportsbookApiFAQItem[] = [
  {
    question: 'What is a sportsbook API and how does sportsbook API integration work?',
    answer:
      'A sportsbook API connects your betting website, mobile app, or online casino to real-time sports schedules, pre-match and live odds feeds, bet placement validators, and automated match settlement webhooks. KVAORNUX handles full sportsbook API integration using WebSocket delta streaming and atomic single-wallet API endpoints.',
  },
  {
    question: 'Which official odds feed providers and sports data feeds do you integrate?',
    answer:
      'As an experienced sportsbook API provider, odds feed supplier, and betting integration partner, we connect trusted odds APIs for sportsbook integrations including Betradar (Sportradar sportsbook data feed products), Genius Sports data feeds, Pinnacle Solution, Kambi, and Sporting Solutions—plus horse racing odds APIs, football odds APIs, and virtual sports feeds.',
  },
  {
    question: 'What is the difference between sportsbook iframe integration and a full REST/WebSocket API?',
    answer:
      'Sportsbook iframe integration tools embed a complete, styled betting lobby into your existing online casino with single-sign-on wallet sync for faster launch. A full REST and WebSocket betting API gives your frontend developers granular control over custom UI, Bet Builder layouts, and proprietary odds presentation.',
  },
  {
    question: 'How does your WebSocket odds API ensure low latency for live in-play betting?',
    answer:
      'Ensuring low-latency APIs for live odds delivery requires replacing heavy HTTP polling with topic-scoped Socket.io rooms backed by Redis Pub/Sub. Our odds API WebSocket gateway pushes compressed price deltas in under 140ms, while automated bet acceptance delays and market suspensions protect operators against latency arbitrage.',
  },
  {
    question: 'Do you support esports API, esports odds feeds, and esports payouts APIs?',
    answer:
      'Yes. Our unified sportsbetting API and sportsbookapi middleware includes dedicated esport API / esports data feeds and esport odds API channels covering CS2, Dota 2, League of Legends, and Valorant—complete with live map telemetry, player props, automated ticket grading, and instant esports payouts.',
  },
  {
    question: 'Can you integrate a horse racing odds API and multi-sport lines API together?',
    answer:
      'Yes. We normalize multi-sport betting lines APIs across 80+ sports alongside dedicated horse racing odds APIs (fixed-odds, tote/SP, and form feeds) into one consistent JSON and WebSocket schema so your bet slip and risk desk handle every event uniformly.',
  },
  {
    question: 'Is a free sports betting API or odds scraping software safe for commercial sportsbooks?',
    answer:
      'No. A free sportsbook api, free betting odds api, or Python web scraping software targeting consumer sites lacks commercial licensing, suffers from slow polling delays, breaks whenever HTML changes, and misses live market suspensions. Commercial betting operators require official B2B odds feeds with contractual SLA guarantees.',
  },
  {
    question: 'How do you handle securing API keys for sportsbook data integration and wallets?',
    answer:
      'Securing API keys for sportsbook data integration is built into our gateway architecture: we enforce HMAC-SHA256 request signing, mTLS or IP whitelisting between your PAM and odds ingestion workers, short-lived JWT session tokens, idempotency keys on every bet/payout debit, and strict rate limiting.',
  },
  {
    question: 'Can you integrate sportsbook payment gateways, CRM, and bonus engines via API?',
    answer:
      'Yes. Alongside odds and bet settlement, KVAORNUX provides sportsbook payment gateway integration services (multi-currency fiat processors and Bitcoin/USDT crypto rails) plus sportsbook CRM and bonus integration webhooks for free bets, cashback, odds boosts, and player retention triggers.',
  },
  {
    question: 'How does single-wallet seamless integration work for existing casino operators?',
    answer:
      'Our seamless wallet adapter syncs your casino Player Account Management (PAM) database with the sportsbook engine via atomic debit, credit, win, and rollback webhooks. Players wager seamlessly across 10,000+ casino slots and live sports with one shared balance.',
  },
  {
    question: 'Do you support multi-provider failover across external odds feeds?',
    answer:
      'Yes. Our best-in-class odds feed normalizer ingests primary and backup sports data feeds concurrently. If a primary provider experiences feed lag or downtime, traffic routes automatically to secondary external odds feeds without dropping active in-play markets.',
  },
  {
    question: 'What backend stack powers your high-availability sportsbook data API and what affects pricing cost?',
    answer:
      'Our high-availability sportsbook data API middleware runs on clustered Node.js and Go microservices paired with Redis Pub/Sub and PostgreSQL ledgers for 99.99% uptime during peak tournament traffic. Integration pricing and cost depend on chosen official feeds, iframe vs headless scope, and custom wallet endpoints—request a technical quote for exact terms.',
  },
];
