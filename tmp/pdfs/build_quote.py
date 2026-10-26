from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from pathlib import Path
O=Path('output/pdf/Kvaornux_PAM_MVP_Quotation.pdf')
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='BodyX',fontName='Helvetica',fontSize=10,leading=14,spaceAfter=8,textColor=colors.HexColor('#263341')))
styles.add(ParagraphStyle(name='SmallX',fontName='Helvetica',fontSize=8.6,leading=12,spaceAfter=4))
styles.add(ParagraphStyle(name='TitleX',fontName='Helvetica-Bold',fontSize=25,leading=29,spaceAfter=14,textColor=colors.black))
styles.add(ParagraphStyle(name='HeadX',fontName='Helvetica-Bold',fontSize=14,leading=18,spaceBefore=12,spaceAfter=8,textColor=colors.black))
styles.add(ParagraphStyle(name='WhiteX',fontName='Helvetica-Bold',fontSize=9,leading=12,textColor=colors.white))
story=[]
def p(t,style='BodyX'): return Paragraph(t,styles[style])
def add(t): story.append(p(t))
def h(t): story.append(p(t,'HeadX'))
def table(headers, rows, widths):
 data=[[p(x,'WhiteX') for x in headers]]+[[p(str(x),'SmallX') for x in r] for r in rows]
 t=Table(data,colWidths=widths,repeatRows=1,hAlign='LEFT')
 t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#173348')),('GRID',(0,0),(-1,-1),.5,colors.HexColor('#D9D9D9')),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#F2F5F7')])]))
 story.append(t);story.append(Spacer(1,10))
def page(): story.append(PageBreak())
add('KVAORNUX  |  COMMERCIAL PROPOSAL')
story.append(p('Existing PAM and<br/>MVP Integration Quotation','TitleX'))
add('<b>Prepared for:</b> Zohai and Technical Team<br/><b>Prepared by:</b> Kvaornux<br/><b>Date:</b> 26 October 2026<br/><b>Reference:</b> KVA-PAM-20261026')
h('Project scope')
add('Supply and configure our existing Player Account Management backend and admin panel, complete the agreed launch functionality, and integrate it with your existing frontend and SoftSwiss game interface. Your current frontend design and game interface will be retained; connection work and necessary integration adjustments are included.')
add('The core PAM/backend and admin panel are available, while the overall platform remains in development. The function descriptions in this proposal define the proposed MVP delivery scope; they do not represent a claim that every listed function is already complete. The demo and technical review will establish the current feature baseline and remaining work before project commencement.')
table(['Commercial item','Quotation'],[
 ('Total PAM and implementation fee','USD 7,000'),
 ('Third-party service and operating fees','Excluded; paid directly by the client'),
 ('Estimated implementation period','21-28 working days, subject to technical review'),
 ('Delivery model','Existing PAM configuration, customization and integration'),
], [205,294])
h('What the fee covers')
add('The USD 7,000 package covers the PAM/backend and admin panel, the MVP functions described on pages 2 and 3, one existing website integration, one SoftSwiss integration, one primary payment provider integration, Shufti KYC integration, GeoComply integration, testing and deployment. This is a combined implementation price rather than separate charges for each module.')
add('Final scope is confirmed against the demo, frontend access and provider documentation. Any material requirement outside this written scope will be quoted and agreed separately before work begins.')
page()
h('MVP function descriptions')
add('Existing modules will be reused where available. Any gaps against the agreed scope below will be identified during the demo and technical review.')
table(['Module','Proposed delivery scope'],[
('Player management','Registration and login APIs, profiles, account status, account suspension and reactivation, KYC status and player activity records. Connect these functions to the existing frontend.'),
('Dual currency wallets','Separate GC and SC balances and ledgers; GC purchase packages with configured promotional SC awards; mode selection and wallet mapping for gameplay. SC is not sold directly under the requested model.'),
('SC playthrough and redemption','Separate unplayed and redeemable SC; track the requested 1x playthrough rule and settlement conversion. Configure minimum redemption and daily limits using client-approved rules.'),
('Transactions and payouts','Purchase and wallet transaction records, payment status, redemption requests, admin approval or rejection, payout status and history. Automatic payouts depend on the selected provider API.'),
('Basic bonuses','Basic configurable promotional awards and admin-issued GC/SC rewards with transaction history.'),
('AMOE workflow','Request codes with expiry and configured issuance limits; admin entry and validation of received mail codes; duplicate-use prevention and free SC credit history. Manual mail review is the MVP baseline.'),
('Admin and reporting','Player and wallet controls, package configuration, bonus and redemption management, KYC status, transaction and game history, basic operational reports and audit records.'),
('Security and player controls','Admin roles and permissions, authenticated API access, TLS configuration, account and admin logs, configurable limits, session reminders, cool-off and self-exclusion controls.'),
('Terms and consent records','Record acceptance timestamps, IP addresses and policy versions. Connect required consent checks to the existing frontend using client-supplied terms and rules.'),
], [122,377])
page()
h('Integration responsibilities')
table(['Integration','Included work and dependencies'],[
('Existing frontend','Connect current player pages to agreed PAM APIs, including accounts, wallets, payments, KYC, redemption and AMOE. Client supplies source/repository access and technical cooperation.'),
('SoftSwiss','Connect the existing game interface to account, game-launch and GC/SC wallet flows; handle supported bet, win, rollback and duplicate callback scenarios. Subject to the client\'s contract, API access and supported currency model.'),
('Primary payment provider','Integrate one client-selected Hong Kong provider for supported purchase and payout flows, callbacks and transaction records. Provider name, documentation, payment methods and payout support must be confirmed.'),
('Shufti KYC','Verification initiation, result callbacks, admin status and configurable purchase/redemption gates. Document checks, OCR, liveness and age checks depend on the subscribed provider package.'),
('GeoComply','Integrate location decisions and supported VPN/proxy signals with the agreed account, purchase and gameplay restrictions. API documentation access is available; client activation and service entitlement are separate.'),
], [122,377])
h('Third party charges are excluded')
add('The client contracts with and pays providers directly. KYC verification charges, geolocation subscriptions and usage, payment processing and payout fees, game-provider fees, hosting, domains, messaging and mail handling are excluded from the USD 7,000 fee. Provider approval and production credentials remain prerequisites for launch.')
add('The client reported Shufti pricing of USD 1.50 per verification. This is a reference only and must be confirmed directly with Shufti. No GeoComply or payment-provider rate is committed in this quotation.')
h('Optional and deferred scope')
add('<b>Breeze:</b> Optional alternative payment provider; integration pricing will be quoted separately if requested. A second gateway is not included in the base package.<br/><b>AMOE scanning:</b> No scanning provider is selected in this proposal. Physical mail collection, scanning/OCR and automated ingestion are separate scope.<br/><b>Later phases:</b> CRM, advanced marketing, referral automation, enhanced analytics, native Android/iOS apps, push notifications and frontend redesign are excluded.')
page()
h('Payment schedule')
table(['Milestone','Payment','Acceptance point'],[
('1  Project commencement','40%\nUSD 2,800','Demo and scope review completed, agreed feature baseline documented, access checklist confirmed and project initiated.'),
('2  Integrated MVP demonstration','40%\nUSD 2,800','Agreed core modules and integrations demonstrated in staging, ready for client acceptance testing.'),
('3  Final delivery','20%\nUSD 1,400','Acceptance testing completed, agreed defects resolved and production deployment/handover completed.'),
],[140,91,268])
h('Timeline and launch acceptance')
add('Estimated delivery is 21-28 working days from scope confirmation, initial payment and receipt of required access and credentials. This estimate is carried forward from the earlier proposal and will be confirmed after the demo and API review. Provider onboarding, unavailable credentials, client review delays and agreed scope changes may extend the schedule.')
add('Acceptance testing will cover account access, GC/SC balances, purchase callbacks, duplicate transaction handling, game debit/credit and rollback flows, playthrough accounting, redemption gates, KYC/location decisions, AMOE code redemption and admin permissions. Launch follows successful testing of the agreed MVP flows and availability of production provider accounts.')
h('Client inputs')
add('Provide frontend source access, SoftSwiss documentation and credentials, the selected payment provider details, Shufti and GeoComply accounts, hosting access, approved GC/SC and redemption rules, AMOE rules, target regions, age thresholds and legal/policy text. The configuration implements the rules approved by the client; it does not constitute legal certification.')
h('Delivery and support')
add('Delivery includes the configured backend, database, admin panel, integration configuration, deployment and operational handover. Source-code handover and usage rights will be specified in the final agreement; this quotation does not promise exclusive ownership of the reusable PAM product.')
add('One year of technical support for defects in the delivered scope is included, consistent with the earlier proposal. New features, provider changes, additional integrations and ongoing infrastructure operation are separately scoped.')
h('Scope confirmation')
add('Approval confirms the USD 7,000 implementation package and the written scope, subject to the demo and technical review. The final feature baseline, timeline and source-code terms will be recorded before commencement. Functions from the broader requirements document that are deferred or excluded above are not included by reference.')
def footer(c,d):
 c.setStrokeColor(colors.HexColor('#D9D9D9'));c.line(48,44,547,44)
 c.setFont('Helvetica',8);c.setFillColor(colors.HexColor('#5B6875'));c.drawString(48,31,'Kvaornux | PAM MVP | 26 October 2026');c.drawRightString(547,31,str(d.page))
SimpleDocTemplate(str(O),pagesize=A4,rightMargin=48,leftMargin=48,topMargin=44,bottomMargin=58).build(story,onFirstPage=footer,onLaterPages=footer)
print(O.resolve())
import pypdfium2 as pdf
D=pdf.PdfDocument(str(O));print('Pages:',len(D))
for i,page in enumerate(D):page.render(scale=1.2).to_pil().save('tmp/pdfs/quote-%d.png'%i)
