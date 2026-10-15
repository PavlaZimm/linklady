const { chromium } = require('playwright');
const fs = require('fs');
const assert = require('assert');
const base = process.env.QA_URL || 'https://linklady-ayqzlt8l1-pavlazimms-projects.vercel.app';
const remote = base.startsWith('https://');
(async () => {
  if (remote) assert(process.env.VERCEL_OIDC_TOKEN, 'Project OIDC token required');
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  if (remote) await page.route(`${base}/**`, route => route.continue({ headers: {
    ...route.request().headers(),
    'x-vercel-trusted-oidc-idp-token': process.env.VERCEL_OIDC_TOKEN,
  }}));
  const report = { base, routes: [], widths: [], errors };
  for (const path of ['/', '/sluzby', '/sluzby/seo', '/sluzby/tvorba-webu', '/blog', '/kontakt']) {
    const response = await page.goto(base + path, { waitUntil: 'networkidle' });
    assert.equal(response.status(), 200, path);
    assert.equal(await page.locator('h1').count(), 1);
    const canonical = await page.locator('link[rel=canonical]').getAttribute('href');
    assert.equal(canonical, 'https://www.linklady.cz' + (path === '/' ? '' : path));
    report.routes.push({ path, canonical, title: await page.title(), status: response.status() });
  }
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base + '/sluzby/tvorba-webu', { waitUntil: 'networkidle' });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow ${width}`);
    await page.getByText('Kolik stojí tvorba webových stránek?', { exact: true }).click();
    assert(await page.getByText('Záleží na počtu a typu stránek,', { exact: false }).isVisible());
    report.widths.push(width);
    if (width === 390 || width === 1440) await page.screenshot({ path: `${__dirname}/web-service-${width}.png`, fullPage: true });
  }
  await page.locator('a[href="#poptavka"]').click();
  await page.getByLabel('Jméno').fill('Test rozhraní');
  await page.getByLabel('E-mail', { exact: false }).fill('qa@example.com');
  await page.getByLabel('Co řešíte').fill('Simulovaná poptávka bez odeslání.');
  let submitted;
  await page.route(`${base}/api/poptavka`, route => {
    submitted = route.request().postDataJSON();
    return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, accepted: true }) });
  });
  await page.getByRole('button', { name: 'Odeslat nezávaznou poptávku' }).click();
  await page.getByRole('heading', { name: 'Poptávka je přijatá, děkuji' }).waitFor();
  assert.equal(submitted.service, 'Tvorba webových stránek na míru');
  report.form = 'Mocked success, correct service attribution; no lead or email sent';
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${__dirname}/service-home-desktop.png` });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: `${__dirname}/service-home-mobile.png` });
  assert.equal(errors.length, 0);
  fs.writeFileSync(`${__dirname}/service-report.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });
