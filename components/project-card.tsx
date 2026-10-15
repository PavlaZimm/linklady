import Link from "next/link";
import type { Project } from "@/lib/projects";
export function ProjectArt({ project }: { project: Project }) {
  return (
    <div className={`cf-project-art ${project.art}`}>
      <span className="cf-project-tag">{project.tag}</span>
      <p className="cf-project-heading">{project.heading}</p>
    </div>
  );
}
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="cf-project">
      <Link href={`/projekty/${project.slug}`} className="cf-project-link">
        <ProjectArt project={project} />
        <div className="cf-project-copy">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <span className="cf-text-link">Detail projektu ↗</span>
        </div>
      </Link>
    </article>
  );
}
