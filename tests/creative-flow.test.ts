import { describe, expect, it } from "vitest";
import { projects } from "../lib/projects";
import { services } from "../lib/services";
import sitemap from "../app/sitemap";
import { pageMetadata } from "../lib/creative-metadata";

describe("Creative Flow URL and content integrity", () => {
  it("contains nine distinct projects and six featured projects in the agreed order", () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(9);
    expect(projects.slice(0, 6).map((p) => p.slug)).toEqual([
      "flyqueens",
      "spacelady",
      "attersee",
      "ithaka",
      "tripradar",
      "bilinsko",
    ]);
    expect(projects.filter((p) => p.category === "apps")).toHaveLength(2);
    expect(projects.filter((p) => p.category === "content")).toHaveLength(4);
    expect(projects.filter((p) => p.category === "other")).toHaveLength(3);
  });
  it("preserves legacy SEO URLs and excludes unfinished case studies from sitemap", () => {
    const urls = sitemap().map((p) => p.url);
    for (const path of [
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
    ])
      expect(urls).toContain(`https://www.linklady.cz${path}`);
    for (const p of projects)
      expect(urls.includes(`https://www.linklady.cz/projekty/${p.slug}`)).toBe(
        !p.pending,
      );
    for (const s of services) {
      expect(urls).toContain(`https://www.linklady.cz/sluzby/${s.slug}`);
      expect(services.some((t) => t.slug === s.related)).toBe(true);
    }
  });
  it("gives new routes their own canonical and social URL", () => {
    const meta = pageMetadata(
      "/projekty/attersee",
      "Attersee.cz",
      "Průvodce jezery",
    );
    expect(meta.alternates?.canonical).toBe(
      "https://www.linklady.cz/projekty/attersee",
    );
    expect(meta.openGraph).toMatchObject({
      url: "https://www.linklady.cz/projekty/attersee",
      locale: "cs_CZ",
    });
  });
});
