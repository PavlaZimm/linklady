import Link from "next/link";
export default function SiteFooter() {
  return (
    <>
      <section className="cf-contact-band">
        <div className="cf-wrap cf-split">
          <div>
            <p className="cf-eyebrow">MÁTE NÁPAD?</p>
            <h2>
              Tak ho pojďme
              <br />
              rozjet. <span aria-hidden="true">✳</span>
            </h2>
          </div>
          <Link href="/kontakt" className="cf-button cf-navy">
            Probrat projekt ↗
          </Link>
        </div>
      </section>
      <footer className="cf-footer">
        <div className="cf-wrap">
          <div className="cf-footer-grid">
            <div>
              <Link href="/" className="cf-brand">
                linklady<span>.</span>
              </Link>
              <p>SEO · Weby · AI & automatizace</p>
              <a href="mailto:zimmermannovap@gmail.com">
                zimmermannovap@gmail.com
              </a>
            </div>
            <nav aria-label="Odkazy v patičce">
              <Link href="/sluzby">Služby</Link>
              <Link href="/projekty">Moje práce</Link>
              <Link href="/o-mne">O mně</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/ebook">E-book</Link>
            </nav>
            <nav aria-label="Specializace">
              <Link href="/seo-konzultant-usti-nad-labem">
                SEO Ústí nad Labem
              </Link>
              <Link href="/tvorba-webu-bilina">Tvorba webu Bílina</Link>
              <Link href="/webova-aplikace">Webové aplikace</Link>
              <Link href="/ai-agent">AI agenti</Link>
              <Link href="/automatizace">Automatizace</Link>
              <Link href="/vibecoding">Vibecoding</Link>
            </nav>
          </div>
          <div className="cf-footer-bottom">
            <span>
              © {new Date().getFullYear()} Pavla Zimmermannová · IČO 04352041
            </span>
            <a
              href="https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
