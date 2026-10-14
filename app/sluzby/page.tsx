import Link from "next/link";
import Navigation from "@/components/navigation";
import SiteFooter from "@/components/site-footer";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/creative-metadata";
export const metadata = pageMetadata(
  "/sluzby",
  "SEO, tvorba webů a AI automatizace",
  "SEO a obsah, linkbuilding, tvorba webů, webové aplikace a AI automatizace od Pavly Zimmermannové.",
);
export default function Services() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <header className="cf-page-hero">
          <div className="cf-wrap">
            <p className="cf-eyebrow">SLUŽBY / LINKLADY</p>
            <h1>
              Jeden digitální svět.
              <br />
              <em>Spousta možností.</em>
            </h1>
            <p>
              Vybereme, co vaše podnikání potřebuje právě teď. A postavíme na
              tom další krok.
            </p>
          </div>
        </header>
        <section
          className="cf-section cf-wrap cf-service-index"
          aria-label="Přehled služeb"
        >
          {services.map((s, i) => (
            <article key={s.slug}>
              <p className="cf-eyebrow">0{i + 1}</p>
              <h2>{s.title}</h2>
              <p>{s.intro}</p>
              <Link href={`/sluzby/${s.slug}`} className="cf-text-link">
                Prozkoumat službu ↗
              </Link>
            </article>
          ))}
          <article>
            <p className="cf-eyebrow">06</p>
            <h2>Obsah & video</h2>
            <p>
              Články, obsah pro sociální sítě a střih videa jako součást vaší
              komunikace. Rozsah domluvíme podle konkrétního zadání.
            </p>
            <Link className="cf-text-link" href="/kontakt">
              Probrat obsah ↗
            </Link>
          </article>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
