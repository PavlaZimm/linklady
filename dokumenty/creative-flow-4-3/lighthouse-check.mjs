import lighthouse from "lighthouse";
import * as chromeLauncher from "chrome-launcher";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
const out = path.dirname(fileURLToPath(import.meta.url));
const chrome = await chromeLauncher.launch({
  chromePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  chromeFlags: ["--headless", "--no-sandbox"],
});
try {
  const reports = [];
  for (const formFactor of ["mobile", "desktop"]) {
    const result = await lighthouse(
      process.env.QA_URL || "http://127.0.0.1:3103/",
      {
        port: chrome.port,
        output: "json",
        onlyCategories: [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
        ],
        formFactor,
        ...(formFactor === "desktop"
          ? {
              screenEmulation: {
                mobile: false,
                width: 1440,
                height: 1000,
                deviceScaleFactor: 1,
                disabled: false,
              },
              throttling: {
                rttMs: 40,
                throughputKbps: 10240,
                cpuSlowdownMultiplier: 1,
                requestLatencyMs: 0,
                downloadThroughputKbps: 0,
                uploadThroughputKbps: 0,
              },
            }
          : {}),
      },
    );
    const lhr = result.lhr;
    const report = {
      formFactor,
      categories: Object.fromEntries(
        Object.entries(lhr.categories).map(([k, v]) => [k, v.score]),
      ),
      metrics: Object.fromEntries(
        [
          "largest-contentful-paint",
          "cumulative-layout-shift",
          "total-blocking-time",
          "first-contentful-paint",
          "speed-index",
        ].map((k) => [k, lhr.audits[k].displayValue]),
      ),
      issues: Object.entries(lhr.audits)
        .filter(
          ([k, v]) =>
            v.score !== null &&
            v.score < 1 &&
            v.details?.type !== "opportunity",
        )
        .map(([k, v]) => ({
          id: k,
          title: v.title,
          score: v.score,
          description: v.description,
        })),
    };
    reports.push(report);
    fs.writeFileSync(
      path.join(out, "lighthouse-" + formFactor + ".json"),
      JSON.stringify(lhr),
    );
    console.log(JSON.stringify(report, null, 2));
  }
  fs.writeFileSync(
    path.join(out, "lighthouse-summary.json"),
    JSON.stringify(reports, null, 2),
  );
} finally {
  await chrome.kill();
}
