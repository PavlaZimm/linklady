const { chromium } = require(process.env.QA_PLAYWRIGHT_MODULE || "playwright");
const fs = require("fs"),
  assert = require("assert");
const out = __dirname;
(async () => {
  const browser = await chromium.launch({ headless: true, channel: "chrome" });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const base = process.env.QA_URL || "http://127.0.0.1:3102";
  const routes = [
    "/",
    "/projekty",
    "/sluzby",
    "/o-mne",
    "/kontakt",
    "/blog",
    "/ebook",
    "/seo-konzultant-usti-nad-labem",
    "/tvorba-webu-bilina",
    "/ai-agent",
    "/automatizace",
    "/vibecoding",
    "/webova-aplikace",
    "/blog/jak-vytvorit-webovou-aplikaci",
    "/blog/webove-aplikace-priklady",
    "/blog/prodej-firmy-strategicky-krok",
    "/11-tipu-jak-ziskat-validni-zpetny-odkaz/",
    "/3-typy-zpetnych-odkazu-ktery-je-ten-spravny/",
    "/barterova-spoluprace-idealni-marketingovy-tah/",
    "/linkbuilding-outreach-jak-budovat-zpetne-odkazy-a-posilit-autoritu-webu/",
  ];
  const projects = [
    "flyqueens",
    "spacelady",
    "attersee",
    "ithaka",
    "tripradar",
    "bilinsko",
    "csz-novosedlice",
    "vse-pro-mineraly",
    "autoskola-jana",
  ];
  const services = [
    "seo",
    "linkbuilding",
    "tvorba-webu",
    "webove-aplikace",
    "ai-automatizace",
  ];
  routes.push(
    ...projects.map((s) => "/projekty/" + s),
    ...services.map((s) => "/sluzby/" + s),
  );
  const report = {
    routes: [],
    axe: [],
    screenshots: [],
    interactions: [],
    pageErrors: errors,
  };
  const internal = new Set();
  for (const route of routes) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    assert.equal(response.status(), 200, route);
    assert.equal(await page.locator("h1").count(), 1, route + " one h1");
    assert.equal(await page.locator("main").count(), 1, route + " one main");
    const canonical = await page
      .locator("link[rel=canonical]")
      .getAttribute("href");
    assert.equal(
      canonical,
      "https://www.linklady.cz" + (route === "/" ? "" : route),
      route + " canonical",
    );
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((a) => a.map((x) => x.getAttribute("href")));
    links.forEach((x) => internal.add(x));
    report.routes.push({ route, status: response.status(), canonical });
    await page.evaluate(
      fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8"),
    );
    const allAudit = await page.evaluate(() =>
      axe.run(document, {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"],
        },
      }),
    );
    report.axe.push({
      route,
      width: 1440,
      violations: allAudit.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => ({
          target: n.target,
          summary: n.failureSummary,
        })),
      })),
    });
    if (report.routes.length % 10 === 0)
      console.log("Checked routes:", report.routes.length);
  }
  for (const link of internal) {
    const response = await page.request.get(base + link);
    assert(response.status() < 400, link + " broken " + response.status());
  }
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of [
      "/",
      "/projekty",
      "/projekty/flyqueens",
      "/projekty/spacelady",
      "/projekty/attersee",
      "/projekty/ithaka",
      "/o-mne",
      "/kontakt",
      "/blog",
      "/sluzby/seo",
    ]) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      const size = await page.evaluate(() => ({
        scroll: document.documentElement.scrollWidth,
        view: innerWidth,
      }));
      assert(
        size.scroll <= size.view,
        route + " overflow at " + width + " " + JSON.stringify(size),
      );
      if (
        [390, 768, 1440].includes(width) &&
        ["/", "/projekty"].includes(route)
      ) {
        const file =
          (route === "/" ? "home" : "portfolio") + "-" + width + ".png";
        await page.screenshot({ path: out + "/" + file, fullPage: true });
        report.screenshots.push(file);
      }
      if (width === 390 || width === 1440) {
        await page.evaluate(
          fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8"),
        );
        const result = await page.evaluate(() =>
          axe.run(document, {
            runOnly: {
              type: "tag",
              values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"],
            },
          }),
        );
        report.axe.push({
          route,
          width,
          violations: result.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            nodes: v.nodes.map((n) => ({
              target: n.target,
              summary: n.failureSummary,
            })),
          })),
        });
      }
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/");
  await page.getByRole("button", { name: "Otevřít menu" }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Zavřít menu" })
      .getAttribute("aria-expanded"),
    "true",
  );
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .getByRole("button", { name: "Otevřít menu" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.getByRole("button", { name: "Otevřít menu" }).click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Moje práce", exact: true })
    .click();
  await page.waitForURL("**/projekty");
  assert.equal(await page.locator(".cf-project").count(), 9);
  for (const [name, count] of [
    ["Aplikace & data", 2],
    ["Obsahové weby", 4],
    ["Další realizace", 3],
    ["Všechny", 9],
  ]) {
    const button = page.getByRole("button", { name, exact: true });
    await button.click();
    assert.equal(await button.getAttribute("aria-pressed"), "true");
    assert.equal(await page.locator(".cf-project").count(), count);
  }
  report.interactions.push(
    "Mobile menu: open, Escape, navigation close; filters 9/2/4/3/9",
  );
  await page.goto(base + "/kontakt");
  const fill = async () => {
    await page.getByLabel("Jméno").fill("Test uživatelského rozhraní");
    await page.getByLabel("E-mail", { exact: false }).fill("qa@example.com");
    await page
      .getByLabel("Co řešíte")
      .fill("Test formuláře bez skutečného odeslání.");
  };
  await fill();
  let body;
  await page.route("**/api/poptavka", async (route) => {
    body = route.request().postDataJSON();
    await route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({ ok: false }),
    });
  });
  await page
    .getByRole("button", { name: "Odeslat nezávaznou poptávku" })
    .click();
  await page.getByText("Automatické odeslání se nepodařilo.").waitFor();
  assert.equal(body.email, "qa@example.com");
  assert(
    await page
      .getByRole("link", { name: "Odeslat e-mailem" })
      .getAttribute("href"),
  );
  await page.unroute("**/api/poptavka");
  await page.reload();
  await fill();
  await page.route("**/api/poptavka", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true, accepted: true }),
    }),
  );
  await page
    .getByRole("button", { name: "Odeslat nezávaznou poptávku" })
    .click();
  await page
    .getByRole("heading", { name: "Poptávka je přijatá, děkuji" })
    .waitFor();
  report.interactions.push(
    "Contact: mocked 503 fallback and mocked 200 success, no email sent",
  );
  const invalid = await page.request.post(base + "/api/poptavka", { data: {} });
  assert.equal(invalid.status(), 400);
  report.interactions.push("Real API rejects invalid payload with 400");
  const contrast = await page.goto(base + "/");
  report.contrast = await page.evaluate(() => {
    const a = document.querySelector(".cf-hero h1"),
      b = document.querySelector(".cf-hero h1 em"),
      c = document.querySelector(".fly .cf-project-heading");
    return {
      hero: getComputedStyle(a).color,
      mint: getComputedStyle(b).color,
      fly: getComputedStyle(c).color,
    };
  });
  assert.equal(report.contrast.hero, "rgb(255, 255, 255)");
  assert.equal(report.contrast.mint, "rgb(164, 237, 214)");
  assert.equal(report.contrast.fly, "rgb(255, 255, 255)");
  fs.writeFileSync(
    out + "/browser-report.json",
    JSON.stringify(report, null, 2),
  );
  console.log(
    JSON.stringify(
      {
        routes: report.routes.length,
        links: internal.size,
        axe: report.axe.filter((a) => a.violations.length),
        errors,
        interactions: report.interactions,
      },
      null,
      2,
    ),
  );
  await browser.close();
  if (errors.length || report.axe.some((x) => x.violations.length))
    process.exit(1);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
