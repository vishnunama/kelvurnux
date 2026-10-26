# Sweepstakes SEO progress

## Working rules

- Make local code/content changes only. Never commit, push, publish or deploy.
- Preserve existing design, layouts, styles, assets and URLs. Use existing blog and FAQ templates.
- Preserve user changes and git stash. Research before adding useful buyer content; do not repeatedly rewrite approved copy.
- Treat Semrush exports as dated estimates. No authenticated automatic Semrush or Search Console access is established.

## Completed — 26 October 2026

- Reviewed the existing Antigravity text changes for main, turnkey and custom sweepstakes service pages. Existing changes are still uncommitted.
- Removed duplicate conversion events from the thank-you page. The contact form still triggers tracking only after backend-confirmed success. Tracking delivery to an analytics account remains unverified.
- Confirmed all three sweepstakes service routes and both existing sweepstakes blog routes appear in the local sitemap. Local robots.txt allows crawling and references the sitemap; this is not confirmation of Google indexing.
- Confirmed existing sweepstakes blogs already link to relevant service pages. No redundant links were added.
- Added three buyer FAQs to the main software page: cost factors, source-code/licensing terms and information needed for a proposal. Existing FAQ design is reused; visible answers and FAQ schema share the same data source. No prices or ownership promises were invented.
- Verified 13 unique populated FAQ entries, shared data wiring and clean whitespace diff. Targeted FAQ lint run; see current task result for completion.

## Research references

- GammaStack turnkey page covers pricing factors and project consultation: https://www.gammastack.com/turnkey-sweepstakes-software
- CrustLab sweepstakes service page provides an additional competitor reference: https://crustlab.com/verticals/sweepstakes/
- Google AI Search guidance does not support FAQ-count guarantees: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

## Next work

1. Verify browser-runtime analytics initialization or obtain the intended analytics configuration. Public live HTML has now been fetched: no GA4/GTM/Google Ads loader or tracking ID was found in that response; only Cloudflare email decoding appeared among non-Next external scripts. This is not a browser-network or account-delivery test. Do not guess IDs or install duplicate tags.
2. Audit remaining FAQ answers for unsupported integration, game-rights and payout claims against actual product evidence. Competitor claims do not establish Kvaornux capabilities.
3. Research a distinct buyer content brief using prior keyword evidence and existing content coverage before creating a blog with the existing template. Keep legal facts sourced and current; do not imply universal legality.
4. Before a human-led release, run the production build once and review the cumulative diff. After release, verify live tags, canonicals, schema and enquiry measurement; rankings and lead results require fresh data.

## Measurement limits

- No new ranking, traffic or enquiry numbers were obtained in this run.
- A missing analytics loader in source does not rule out deployment-layer injection. No end-to-end enquiry was submitted.
- Local copy changes are not deployed and cannot yet produce live SEO results.

## Buyer content draft — 26 October 2026

- Prepared `work/seo/sweepstakes-provider-checklist-draft.md`: an operator procurement guide focused on proposal scope, workflow demonstration, integration responsibilities, costs, acceptance testing and handover.
- Differentiated from existing introductory/API articles. Five FAQs address purchasing decisions without promising legal outcomes, prices or ownership terms.
- Researched primary vendor pages from GammaStack, Tecpinion and Capermint plus Sumsub sandbox documentation. Vendor claims are evidence of advertised offerings, not proof of Kvaornux capabilities.
- Draft remains outside public routes and listings. Next content step: editorial review, then implementation using the existing blog design and shared FAQ data. Do not add a fictitious fact-checker credit or a past publication date.
  - Superseded below: a local preview route is now implemented; listings and sitemap remain unchanged.

## Follow-up — 26 October 2026

- Fetched public live HTML for the main sweepstakes service page without submitting an enquiry. The response contained no recognized analytics initialization tokens. Full runtime/account verification remains pending; this finding alone does not establish that every visitor lacks tracking.
- Reviewed the three integration-related main-page FAQs. Replaced unconditional turnkey inclusions, broad game availability and named payout-method promises with scope- and provider-dependent explanations. No change to layout or FAQ components; the shared FAQ source continues to drive visible content and schema.
- Follow-up verification passed: targeted FAQ ESLint, 13 unique populated FAQ records and whitespace diff check. Existing shared-source wiring for visible FAQs/schema remains unchanged.

## Scheduled run — 26 October 2026, evening IST

- Extracted the API integration blog’s eight duplicated FAQ records into `app/blog/sweepstakes-casino-api-integration/faqData.ts`. Server FAQ schema and visible FAQ now import one source, preventing future answer drift. Exact record-equality check confirms no question/answer changes; design and article copy are untouched.
- TypeScript and whitespace checks pass. Full article lint exposes five pre-existing errors (four unescaped quotes, one internal anchor); the same errors were reproduced against HEAD via ESLint stdin. Do not describe the article as lint-clean. The new data module and server page are checked separately.
- Technical research identified a later editorial review item: the API article currently describes automatic rollback/refund after disconnect as universal. Provider recovery contracts differ. VeliGames documents retryable wins, separate cancel handling and duplicate rejection: https://doc.velitech.games/wallet-api. Update the article explanation and shared FAQ together in a later focused pass, with source attribution; do not infer Kvaornux integrations from provider documentation.
- No commit, push, deployment, enquiry submission or new design.

## Scheduled run — 26 October 2026, 18:40 IST

- Completed the previously identified rollback editorial correction in the existing API blog and its shared FAQ. Removed the blanket claim that a browser disconnect automatically triggers a refund; recovery is described as provider-specific with reconciliation and duplicate protection.
- Corrected the universal HTTP-200 claim. Added an inline primary-source example from https://doc.velitech.games/wallet-api showing separate win/cancel operations and duplicate rejection via HTTP 409. Explicitly distinguishes a protocol example from any Kvaornux integration/content-rights claim.
- Updated two existing troubleshooting table cells to avoid automatic refunds and generic retry instructions. Table structure, styles, assets, navigation and all other page design remain unchanged.
- Verification: targeted shared-FAQ/server-page lint, TypeScript, eight unique populated FAQ entries, shared-source imports, source-link presence and whitespace diff checks. Previously documented client-file lint issues are unrelated and remain pending.
- No new ranking/lead evidence, tracking configuration or deployment. Next: review remaining provider-specific claims in this article (especially launch fields and direct-versus-aggregator assertions), then implement the researched buyer checklist with the existing blog template once its draft review is complete.

## Buyer-checklist local preview — 26 October 2026

- Implemented `/blog/choosing-sweepstakes-casino-software-provider` with eight article sections and five buyer FAQs from the researched draft. Reused the existing API blog template CSS byte-for-byte, header, sidebar, footer and FAQ component; reused an existing sweepstakes banner asset.
- New `articleData.ts` supplies shared visible FAQ/schema data. Internal links point to existing main/turnkey/custom offerings and the API guide. Primary Sumsub sandbox documentation is linked in context; no invented vendor ranking, product capability, prices or statistics.
- Clearly marked as a local draft with `noindex, follow`; not added to blog listings or sitemap. No publication date or fictitious fact-checker is asserted. Before eventual human-led release, remove draft labeling/noindex and register the article in listings/sitemap with the actual publication date.
- Verification passed: targeted lint, TypeScript, rendered HTML on the existing port-3000 server, one H1, five FAQ schema entries, valid internal article links, unique section IDs, no invented fact-checker/date, and exact preservation of source template CSS. No existing server was stopped.
- Automated visual screenshots could not run because the bundled Playwright browser executable is absent; visual appearance is not independently verified. Do not claim desktop/mobile screenshots passed. No browser download was performed.
- No commit, push, deployment or external submission. Next: shared-FAQ consistency on the introductory sweepstakes blog, remaining unsupported API explanations, then draft release review when appropriate.

## Scheduled run — 26 October 2026, 18:52 IST

- Moved the introductory sweepstakes blog’s ten duplicated FAQ records into a shared `faqData.ts` imported by both the page schema and visible FAQ component. Preserved nine answers exactly.
- Removed unsupported universal launch estimates (2–4 weeks turnkey / 3–6 months custom) from the remaining FAQ and existing comparison-table cells. The replacement explains scope, discovery, testing and provider-dependency milestones without inventing an alternative range. This aligns with the already-reviewed service pages and avoids implying a Kvaornux delivery promise.
- No CSS, section, image, animation, URL or component-design changes. Verified ten unique FAQs, exact preservation of the other nine records, shared data imports, removal of old ranges, targeted FAQ/server ESLint, TypeScript and whitespace diff checks.
- Remaining editorial work: the introductory article’s commercial-model table and API guide contain other broad provider/model assertions; review those against primary evidence rather than treating competitor marketing as a universal rule. Analytics account configuration and fresh ranking data remain unavailable. No commit, push or publish.

## Scheduled run — 26 October 2026, 19:00 IST

- Reviewed primary Tecpinion and OmiSoft sweepstakes service pages to check whether commercial labels establish universal ownership/fee terms. Updated six existing commercial-comparison cells to tell buyers what fees, licenses, access and ownership exclusions to verify instead of asserting a fixed revenue-share or code-ownership model for every supplier.
- Removed the claim that custom development provides unrestricted access to any studio; the replacement explicitly depends on compatibility and content rights. Replaced the existing closing paragraph with a scope-based comparison recommendation and inline primary vendor examples, clearly identified as packaging examples rather than tested endorsements.
- No pricing numbers, legal conclusions, Kvaornux contractual promises, design changes or extra sections were introduced. Table element counts and existing CSS are preserved. Source links, TypeScript and whitespace checks pass.
- Full introductory-client ESLint still reports the existing internal home anchor issue; not a new error from the content edits. No deploy, commit or push. Remaining content review: the API guide’s provider-specific assumptions and the introductory article’s broader pricing statements. Do not repeat the completed ownership/fee-row rewrite.

## Scheduled run — 26 October 2026, 19:03 IST

- Corrected the remaining idempotency paragraph/list in the API integration blog: a lookup alone is not atomic, identifiers/formats are provider-specific, and duplicate responses are not universally HTTP 200. Retained the existing section and list structure; no design change.
- Reused the previously cited VeliGames protocol evidence for HTTP 409 duplicates. Checked PostgreSQL primary documentation on atomic conflict handling: https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT. No database implementation or Kvaornux stack guarantee is asserted.
- TypeScript, targeted claim-removal assertions and whitespace checks pass. No new API integration capabilities, ranking data or published content were claimed. No commit, push, deployment or enquiry submission.

## Scheduled run — 26 October 2026, 19:05 IST

- Completed a bounded local route/asset audit across all three sweepstakes service pages, both established sweepstakes blogs and the new buyer-checklist draft.
- Checked 49 literal internal link references and 19 literal asset references: all resolved to existing local routes/files. This audit excludes dynamic links and does not establish production HTTP status or Google index coverage.
- The five established routes are included in the local sitemap and contain no page-level noindex setting. The buyer-checklist draft is intentionally noindex and absent from the sitemap. No routing, sitemap or content edits were justified by this audit.
- Avoid rerunning this unchanged audit until links/assets/routing change. Next substantive work should address the remaining provider-contract explanations or validate browser-runtime tracking; do not add redundant links or tags merely because another heartbeat ran.

## Scheduled run — 26 October 2026, 19:07 IST

- Resolved the six previously recorded lint errors in the two existing sweepstakes blog clients: escaped four JSX quotation marks without changing displayed text and used the already-imported Next.js Link for the existing home-contact CTA in each article.
- CTA styling, destination, labels and layout are unchanged. Reviewed installed Link documentation before editing. No new design, assets or sections.
- ESLint now passes across both established sweepstakes blog directories and the new buyer-checklist preview. TypeScript, whitespace and CTA destination/style assertions pass. Earlier log entries reporting those errors describe the previous state and are superseded here.
- Do not repeat these checks until related code changes. No commit, push, publish or external submission. Remaining tasks: primary-evidence review of broad integration/pricing claims and browser-runtime analytics audit when suitable browser access is available.

## Live tracking verification and enquiry context — 26 October 2026

- Completed a fresh isolated Chrome runtime audit of the public main sweepstakes page (HTTP 200), recorded in `work/seo/live-tracking-audit.json` at 13:42:37 UTC / 19:12:37 IST. Six seconds after DOM ready: `gtag` undefined, no array dataLayer, no recognized analytics scripts or network requests, no tracking request failures and no detected consent-UI text. No consent interaction, personal browser profile or enquiry submission was used. This is one page/context, not proof of all visitor behavior.
- Analytics initialization is now a specific configuration dependency: verify the intended GA4/GTM/Ads account and consent/deployment setup before installing any loader. Do not infer a GA4 measurement ID from the existing Ads conversion target or claim reports are receiving data.
- Both turnkey/custom forms now reuse the existing `Sweepstakes Casino Software` default category, matching the main page. Users retain the existing editable category control; no new form UI or layout.
- Existing backend-confirmed `form_submission` dataLayer event now includes public `page_path` (no query string) and the selected `solution_category`. No name, email, phone or enquiry text is added. Event names and Ads conversion target are unchanged; GTM/GA4 mapping and receipt are not established by this code change.
- Removed misleading success console text claiming conversion delivery. Typed optional tracking APIs, retained graceful submission when analytics is absent and guarded parsed backend acknowledgement/error values. Escaped an existing JSX apostrophe without changing displayed text.
- Verification passed: mocked actual form handlers for confirmed success, HTTP failure, negative acknowledgement, broken JSON, duplicate-submission guard, absent analytics, attribution values and exclusion of personal fields. No real request was sent. Three-page default-category assertions, TypeScript, whitespace and contact-form ESLint (0 errors, 2 existing warnings) pass. Existing service-page warnings remain unrelated.
- No commit, push, publication or deployment. Next: continue distinct buyer content/editorial work; tracking activation awaits authentic account configuration, not more source-code guessing.
