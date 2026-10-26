// Read-only browser audit. Uses a new isolated browser context, never a user profile.
const { chromium } = require('/Users/vaibhavnama/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs/promises');

(async () => {
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });
  try {
    const page = await browser.newPage();
    const trackingRequests = [];
    const failures = [];
    page.on('request', request => {
      const url = new URL(request.url());
      if (/googletagmanager|google-analytics|googleadservices|doubleclick/.test(url.hostname)) {
        trackingRequests.push({ host: url.hostname, pathname: url.pathname });
      }
    });
    page.on('requestfailed', request => {
      const url = new URL(request.url());
      if (/googletagmanager|google-analytics|googleadservices|doubleclick/.test(url.hostname)) {
        failures.push({ host: url.hostname, error: request.failure()?.errorText });
      }
    });
    const response = await page.goto('https://kvaornux.com/sweepstakes-casino-software', {
      waitUntil: 'domcontentloaded', timeout: 30000,
    });
    await page.waitForTimeout(6000);
    const runtime = await page.evaluate(() => ({
      title: document.title,
      gtagType: typeof window.gtag,
      dataLayerPresent: Array.isArray(window.dataLayer),
      scripts: Array.from(document.scripts).map(s => s.src).filter(Boolean)
        .filter(src => /googletagmanager|google-analytics|googleadservices|doubleclick/.test(src)),
      consentUiMention: /cookie preferences|accept cookies|manage consent/i.test(document.body.innerText),
    }));
    const report = {
      checkedAt: new Date().toISOString(),
      page: 'https://kvaornux.com/sweepstakes-casino-software',
      status: response?.status(),
      runtime, trackingRequests, failures,
      limits: 'One fresh browser context, one page, six seconds after DOM ready; no consent interaction, enquiry submission or analytics account access. Does not prove behavior for all visitors.',
    };
    await fs.writeFile('work/seo/live-tracking-audit.json', JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify(report, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error.message); process.exitCode = 1; });
