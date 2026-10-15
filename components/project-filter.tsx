"use client";
import { useState } from "react";
import { categories, projects } from "@/lib/projects";
import ProjectCard from "./project-card";
export default function ProjectFilter() {
  const [filter, setFilter] = useState<string>("all");
  const selection = projects.filter(
    (p) => filter === "all" || p.category === filter,
  );
  return (
    <>
      <div className="cf-filters" role="group" aria-label="Filtrovat projekty">
        {categories.map((c) => (
          <button
            type="button"
            key={c.id}
            aria-pressed={c.id === filter}
            onClick={() => setFilter(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <p className="cf-result-count" role="status" aria-live="polite">
        Zobrazeno {selection.length} z {projects.length} projektů
      </p>
      <div className="cf-project-grid">
        {selection.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
