import Link from "next/link";
import Image from "next/image";
import SiteFooter from "./site-footer";
import ProjectCard from "./project-card";
import { projects } from "@/lib/projects";
export default function HomePageContent() {
  return (
    <>
      <main id="main-content">
        <section className="cf-hero">
          <div className="cf-wrap cf-hero-grid">
            <div className="cf-hero-copy">
              <p className="cf-eyebrow">KREATIVITA × DATA × TECHNOLOGIE</p>
              <h1>
                Dobré nápady.
                <br />
                <em>Chytrá řešení.</em>
                <span className="cf-star" aria-hidden="true">
                  ✳
                </span>
              </h1>
              <p className="cf-hero-description">
                Tvořím webové stránky a pomáhám firmám se SEO. Propojím
                srozumitelnou nabídku, obsah a technologie, aby vás zákazníci
                našli a snadno se vám ozvali.
              </p>
              <div className="cf-buttons">
                <Link href="/kontakt" className="cf-button">
                  Probrat projekt ↗
                </Link>
                <Link href="/projekty" className="cf-button cf-outline">
                  Moje práce →
                </Link>
              </div>
            </div>
            <div className="cf-hero-art" aria-hidden="true">
              <div className="cf-orbit" />
              <div className="cf-browser">
                <div className="cf-browser-bar">
                  <span>● ● ●</span> LINKLADY / DIGITAL STUDIO
                </div>
                <h2>
                  Od prvního nápadu
                  <br />k výsledku.
                </h2>
                <div>
                  <b>01 ↗</b> SEO & obsah
                </div>
                <div>
                  <b>02 ↗</b> Web & UX
                </div>
                <div>
                  <b>03 ✳</b> AI & automatizace
                </div>
              </div>
              <span className="cf-sticker">IDEAS INTO ACTION ↗</span>
              <span className="cf-sticker cf-sticker-lower">
                CREATIVE TECH ✳
              </span>
            </div>
          </div>
        </section>
        <div className="cf-ticker" aria-hidden="true">
          <div className="cf-wrap">
            {[
              "SEO & OBSAH",
              "MODERNÍ WEBY",
              "WEBOVÉ APLIKACE",
              "AI AUTOMATIZACE",
            ].map((t) => (
              <span key={t}>✳ {t}</span>
            ))}
          </div>
        </div>
        <section className="cf-section cf-wrap">
          <p className="cf-eyebrow">01 / CO PRO VÁS UMÍM</p>
          <h2>
            Jeden digitální svět.
            <br />
            Spousta možností.
          </h2>
          <p className="cf-lede">
            Potřebujete nový web, nebo chcete zlepšit ten současný?
            Začneme tím, co pomůže vašim zákazníkům najít vás a pochopit vaši nabídku.
          </p>
          <div className="cf-service-grid cf-primary-services">
            {[
              {
                title: "SEO služby a konzultace",
                description:
                  "Audity, klíčová slova, technické SEO, obsah a linkbuilding.",
                href: "/sluzby/seo",
                symbol: "↗",
                label: "SEO služby",
              },
              {
                title: "Tvorba webových stránek",
                description: "Firemní weby na míru, promyšlená struktura, obsah a SEO od začátku.",
                href: "/sluzby/tvorba-webu",
                symbol: "▧",
                label: "Tvorba webů",
              },
            ].map((s) => (
              <article className="cf-service" key={s.title}>
                <span className="cf-service-symbol" aria-hidden="true">
                  {s.symbol}
                </span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link className="cf-text-link" href={s.href}>
                  {s.label} ↗
                </Link>
              </article>
            ))}
          </div>
          <aside className="cf-supporting-services" aria-label="Navazující služby">
            <div>
              <h3>Potřebujete jít o krok dál?</h3>
              <p>Web můžeme doplnit aplikací nebo propojit s nástroji, které vám usnadní každodenní práci.</p>
            </div>
            <div className="cf-supporting-links">
              <Link className="cf-text-link" href="/sluzby/webove-aplikace">Webové aplikace ↗</Link>
              <Link className="cf-text-link" href="/sluzby/ai-automatizace">AI a automatizace ↗</Link>
            </div>
          </aside>
        </section>
        <section className="cf-project-section">
          <div className="cf-wrap cf-section">
            <div className="cf-split">
              <div>
                <p className="cf-eyebrow">02 / VYBRANÉ PROJEKTY</p>
                <h2>
                  Nápady, které žijí
                  <br />
                  vlastním životem.
                </h2>
              </div>
              <Link className="cf-text-link" href="/projekty">
                Všech devět projektů ↗
              </Link>
            </div>
            <p className="cf-lede">
              Od leteckých dat přes vesmír až po cestování a místa kolem nás.
            </p>
            <p className="cf-art-note">
              Ilustrace představují zaměření projektů; nejsou snímky jejich
              webů.
            </p>
            <div className="cf-project-grid">
              {projects.slice(0, 6).map((p) => (
                <ProjectCard project={p} key={p.slug} />
              ))}
            </div>
            <div className="cf-center">
              <Link className="cf-button cf-blue" href="/projekty">
                Prohlédnout celé portfolio ↗
              </Link>
            </div>
          </div>
        </section>
        <section className="cf-wrap cf-section cf-about">
          <div className="cf-portrait">
            <Image
              src="/profile.jpg"
              alt="Pavla Zimmermannová"
              width={665}
              height={1000}
              sizes="(max-width: 700px) 90vw, 40vw"
            />
            <span>PAVLA / LINKLADY ✳</span>
          </div>
          <div>
            <p className="cf-eyebrow">03 / ZA ZNAČKOU LINKLADY</p>
            <h2>
              Ahoj, já jsem Pavla.
              <br />A mám ráda, když
              <br />
              věci fungují.
            </h2>
            <p className="cf-lede">
              V online marketingu působím od roku 2015. Zkušenosti ze SEO,
              obsahu a správy webů dnes propojuji s moderním vývojem a AI. Baví
              mě tvořit a hledat řešení, která lidem pomáhají.
            </p>
            <Link className="cf-button cf-blue" href="/o-mne">
              Více o mně ↗
            </Link>
          </div>
        </section>
        <section className="cf-wrap cf-section cf-process">
          <p className="cf-eyebrow">04 / JAK SPOLUPRACUJI</p>
          <h2>
            Od rozhovoru
            <br />k funkčnímu řešení.
          </h2>
          <div className="cf-service-grid">
            {[
              [
                "01",
                "Nejdřív porozumět",
                "Probereme váš záměr, současný web i to, co potřebujete změnit.",
              ],
              [
                "02",
                "Najít směr",
                "Navrhnu postup a společně domluvíme rozsah práce i priority.",
              ],
              [
                "03",
                "Tvořit a ověřovat",
                "Řešení připravím, otestuji a projdeme si ho před spuštěním.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <p className="cf-eyebrow">{n}</p>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <div className="cf-faq">
            <details>
              <summary>Musím mít hotové zadání?</summary>
              <p>
                Nemusíte. Napište, co řešíte, a společně upřesníme, kde začít.
              </p>
            </details>
            <details>
              <summary>Můžeme navázat na můj současný web?</summary>
              <p>
                Ano. Nejdřív se podíváme na jeho obsah, technický stav a cíle.
                Podle toho zvolíme vhodné úpravy.
              </p>
            </details>
            <details>
              <summary>Spolupracujete i na dálku?</summary>
              <p>Ano, zadání i jednotlivé kroky můžeme probrat online.</p>
            </details>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
