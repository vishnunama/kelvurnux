// Evaluate the actual form handlers with isolated browser/backend mocks. No network requests.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('typescript');
const file = 'src/components/contactform/ContactForm.tsx';
const source = fs.readFileSync(file, 'utf8');
const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
const handlers = {};
function visit(node) {
  if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name)
      && ['triggerConversionTracking', 'handleSubmit'].includes(node.name.text)) {
    handlers[node.name.text] = node.initializer.getText(tree);
  }
  ts.forEachChild(node, visit);
}
visit(tree);
assert.equal(Object.keys(handlers).length, 2);
const compiled = ts.transpileModule(Object.entries(handlers)
  .map(([name, value]) => `const ${name} = ${value};`).join('\n') + '\n globalThis.submit = handleSubmit;',
  { compilerOptions: { target: ts.ScriptTarget.ES2020 } }).outputText;

async function run({ ok = true, success = true, brokenJson = false, busy = false, analytics = true } = {}) {
  const ads = [], events = [], routes = [], errors = [];
  let requests = 0;
  const context = {
    window: {
      location: { pathname: '/custom-sweepstakes-casino-development' },
      ...(analytics ? { gtag: (...args) => ads.push(args), dataLayer: { push: event => events.push(event) } } : {}),
    },
    formData: { name: 'Private Name', email: 'private@example.test', phone: 'Private Phone', request: 'Private project text', category: 'Sweepstakes Casino Software' },
    honeypot: '', isSubmitting: false,
    submitInProgressRef: { current: busy },
    validateStep: () => true,
    setIsSubmitting: () => {}, setSubmitError: error => errors.push(error),
    setFormData: () => {}, setHoneypot: () => {},
    router: { push: route => routes.push(route) },
    setTimeout: callback => callback(),
    console: { log: () => {}, error: () => {} },
    fetch: async () => { requests++; return { ok, json: async () => { if (brokenJson) throw Error('invalid JSON'); return { success }; } }; },
  };
  vm.createContext(context);
  vm.runInContext(compiled, context);
  await context.submit({ preventDefault() {} });
  return { ads, events, routes, errors, requests };
}

(async () => {
  const accepted = await run();
  assert.equal(accepted.ads.length, 1);
  assert.equal(accepted.events.length, 1);
  assert.equal(accepted.events[0].page_path, '/custom-sweepstakes-casino-development');
  assert.equal(accepted.events[0].solution_category, 'Sweepstakes Casino Software');
  assert.deepEqual(accepted.routes, ['/thank-you']);
  for (const secret of ['Private Name', 'private@example.test', 'Private Phone', 'Private project text']) {
    assert.ok(!JSON.stringify([...accepted.ads, ...accepted.events]).includes(secret));
  }
  for (const options of [{ ok: false }, { success: false }, { brokenJson: true }]) {
    const rejected = await run(options);
    assert.equal(rejected.ads.length + rejected.events.length + rejected.routes.length, 0);
  }
  const busy = await run({ busy: true });
  assert.equal(busy.requests, 0);
  const noAnalytics = await run({ analytics: false });
  assert.deepEqual(noAnalytics.routes, ['/thank-you']);
  assert.equal(noAnalytics.events.length + noAnalytics.ads.length, 0);
  console.log('PASS: confirmed success, rejected/malformed acknowledgements, duplicate guard, missing analytics, attribution and exclusion of personal fields. No real submission sent.');
})().catch(error => { console.error(error); process.exitCode = 1; });
