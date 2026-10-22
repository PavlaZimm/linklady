import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import SiteFooter from "@/components/site-footer";
import ContactForm from "@/components/contact-form";
import JsonLd from "@/components/json-ld";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/creative-metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s ? pageMetadata(`/sluzby/${slug}`, s.seoTitle ?? s.title, s.metaDescription ?? s.intro) : {};
}
export default async function Service({ params }: Props) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  const related = services.find((t) => t.slug === s.related)!;
  return (
    <>
      <Navigation />
      <main id="main-content">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.intro,
            url: `https://www.linklady.cz/sluzby/${s.slug}`,
            provider: { "@id": "https://www.linklady.cz/#person" },
          }}
        />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Úvod", item: "https://www.linklady.cz" },
            { "@type": "ListItem", position: 2, name: "Služby", item: "https://www.linklady.cz/sluzby" },
            { "@type": "ListItem", position: 3, name: s.title, item: `https://www.linklady.cz/sluzby/${s.slug}` },
          ],
        }} />
        <header className="cf-page-hero">
          <div className="cf-wrap">
            <Link className="cf-back" href="/sluzby">
              ← Všechny služby
            </Link>
            <p className="cf-eyebrow">SLUŽBY / LINKLADY</p>
            <h1>{s.title}</h1>
            <p>{s.intro}</p>
            <a className="cf-button" href="#poptavka">
              Probrat projekt ↗
            </a>
          </div>
        </header>
        <div className="cf-wrap cf-section cf-service-body">
          {s.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              <ul>
                {section.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          ))}
          {s.questions && (
            <section>
              <h2>Na co se často ptáte</h2>
              <div className="cf-faq">
                {s.questions.map(({ question, answer }) => (
                  <details key={question}><summary>{question}</summary><p>{answer}</p></details>
                ))}
              </div>
            </section>
          )}
          <section>
            <h2>Prohlédněte si také</h2>
            {s.reading?.map(({ href, label }) => (
              <p key={href}><Link className="cf-text-link" href={href}>{label} ↗</Link></p>
            ))}
            <p>
              <Link className="cf-text-link" href={s.legacy}>
                {s.legacyLabel} ↗
              </Link>
            </p>
            <p>
              <Link className="cf-text-link" href={`/sluzby/${related.slug}`}>
                {related.title} ↗
              </Link>
            </p>
            {s.slug === "ai-automatizace" && (
              <p>
                <Link className="cf-text-link" href="/ai-agent">
                  AI agenti a asistenti ↗
                </Link>
              </p>
            )}
            <p>
              <Link className="cf-text-link" href="/projekty">
                Prohlédnout projekty ↗
              </Link>
            </p>
          </section>
          <section id="poptavka">
            <ContactForm
              service={s.title}
              subtitle={s.contactPrompt ?? "Popište mi svůj záměr. Společně najdeme vhodný další krok."}
            />
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
