import Navigation from "@/components/navigation";
import SiteFooter from "@/components/site-footer";
import ProjectFilter from "@/components/project-filter";
import { pageMetadata } from "@/lib/creative-metadata";
export const metadata = pageMetadata(
  "/projekty",
  "Moje práce – weby, aplikace a obsah",
  "Devět projektů z oblasti webových aplikací, cestovatelského obsahu a firemních webů. Prohlédněte si portfolio Linklady.",
);
export default function Portfolio() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <header className="cf-page-hero">
          <div className="cf-wrap">
            <p className="cf-eyebrow">MOJE PRÁCE</p>
            <h1>
              Každý projekt.
              <br />
              <em>Jiný příběh.</em>
            </h1>
            <p>
              Od leteckých dat přes vesmír až po regionální weby a cestovatelské
              magazíny.
            </p>
          </div>
        </header>
        <section className="cf-section cf-wrap" aria-label="Portfolio projektů">
          <p className="cf-art-note">
            Ilustrace představují zaměření projektů; nejsou snímky jejich webů.
          </p>
          <ProjectFilter />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
