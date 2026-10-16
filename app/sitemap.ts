import { guides } from '@/lib/editorial-guides';
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { MetadataRoute } from "next";
import { restoredArticles, articleUpdated } from "@/lib/restored-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.linklady.cz";
  const pages = [
    { path: "", lastModified: "2026-10-16" },
    { path: "/o-mne", lastModified: "2026-10-16" },
    { path: "/blog", lastModified: "2026-10-16" },
    { path: "/ebook", lastModified: "2026-10-16" },
    { path: "/tvorba-webu-bilina", lastModified: "2026-10-16" },
    { path: "/automatizace", lastModified: "2026-10-16" },
    { path: "/vibecoding", lastModified: "2026-09-13" },
    { path: "/seo-konzultant-usti-nad-labem", lastModified: "2026-10-02" },
    { path: "/ai-agent", lastModified: "2026-10-16" },
    { path: "/webova-aplikace", lastModified: "2026-09-14" },
    { path: "/blog/prodej-firmy-strategicky-krok", lastModified: "2026-02-27" },
    { path: "/blog/jak-vytvorit-webovou-aplikaci", lastModified: "2026-09-13" },
    { path: "/blog/webove-aplikace-priklady", lastModified: "2026-09-14" },
    { path: "/blog/co-obsahuje-seo-audit", lastModified: "2026-10-16" },
    { path: "/soukromi", lastModified: "2026-10-16" },
    { path: "/kontakt", lastModified: "2026-10-16" },
  ] as const;

  return [
    ...pages,
    ...guides.map(g => ({path:`/blog/${g.slug}`,lastModified:g.date})),
    { path: "/projekty", lastModified: "2026-10-14" },
    { path: "/sluzby", lastModified: "2026-10-16" },
    ...services.map((s) => ({
      path: `/sluzby/${s.slug}`,
      lastModified: "2026-10-16",
    })),
    ...projects
      .filter((p) => !p.pending)
      .map((p) => ({
        path: `/projekty/${p.slug}`,
        lastModified: "2026-10-14",
      })),
    ...restoredArticles.map((article) => ({
      path: `/${article.slug}/`,
      lastModified: articleUpdated,
    })),
  ].map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));
}
