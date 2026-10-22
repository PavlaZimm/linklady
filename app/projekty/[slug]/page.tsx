import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import SiteFooter from "@/components/site-footer";
import JsonLd from "@/components/json-ld";
import ProjectCard, { ProjectArt } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { pageMetadata } from "@/lib/creative-metadata";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    ...pageMetadata(`/projekty/${p.slug}`, p.name, p.description),
    ...(p.pending ? { robots: { index: false, follow: true } } : {}),
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <>
      <Navigation />
      <main id="main-content">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Úvod",
                item: "https://www.linklady.cz",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Moje práce",
                item: "https://www.linklady.cz/projekty",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: p.name,
                item: `https://www.linklady.cz/projekty/${p.slug}`,
              },
            ],
          }}
        />
        <header className="cf-page-hero">
          <div className="cf-wrap">
            <Link className="cf-back" href="/projekty">
              ← Moje práce
            </Link>
            <p className="cf-eyebrow">{p.tag}</p>
            <h1>{p.name}</h1>
            <p>{p.description}</p>
            <a
              className="cf-button"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Navštívit web ↗
            </a>
          </div>
        </header>
        <section className="cf-wrap cf-section cf-project-detail">
          <div>
            <ProjectArt project={p} />
            <p className="cf-art-note">Tematická ilustrace projektu.</p>
          </div>
          <div>
            <p className="cf-eyebrow">O PROJEKTU</p>
            <h2>{p.heading}</h2>
            {p.paragraphs.map((t, index) => (
              <p className="cf-lede" key={t}>
                {t}
                {index === p.paragraphs.length - 1 && p.serviceContext && (
                  <>
                    {" "}{p.serviceContext.before}
                    <Link className="cf-text-link" href={p.serviceContext.href}>{p.serviceContext.label}</Link>
                    {p.serviceContext.after}
                  </>
                )}
              </p>
            ))}
            {p.features.length > 0 && (
              <>
                <h3>Co na webu najdete</h3>
                <ul className="cf-checks">
                  {p.features.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </>
            )}
            <a className="cf-text-link" href={p.source}>
              Více o projektu ↗
            </a>
          </div>
        </section>
        <section className="cf-wrap cf-section cf-related">
          <p className="cf-eyebrow">DALŠÍ PROJEKT</p>
          <h2>Ještě jeden příběh.</h2>
          <ProjectCard project={next} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
