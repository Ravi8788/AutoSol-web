import { useState } from "react";
import { Link } from "react-router";
import { projects } from "@/data/site";
import type { Project } from "@/data/site";
import Seo from "@/components/Seo";

const ALL_FILTER_CATEGORIES = [
  "All", "Government", "Agriculture", "E-Commerce", "ERP", "CRM",
  "Mobile", "Web", "Hospitality", "Retail", "Creative Web",
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

function statusBadgeClass(status: Project["status"]): string {
  switch (status) {
    case "DEVELOPED":
      return "badge badge--green";
    case "DEVELOPED / PROJECT":
    case "PROJECT":
      return "badge badge--blue";
    case "PROPOSAL / SRS":
    case "IN DEVELOPMENT":
      return "badge badge--amber";
    default:
      return "badge badge--amber";
  }
}

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.filterCategories.includes(activeCategory));

  return (
    <>
      <Seo
        title="Our Work | Projects & Case Studies"
        description="Explore AutoSol Technologies project portfolio including e-commerce, government systems, CRM, ERP, mobile apps, hospitality and agricultural platforms."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--dark"><span />PORTFOLIO</p>
          <h1>Built By Us</h1>
          <p>A selection of products, prototypes and project work across government, agriculture, mobile, web and business systems.</p>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="filter-tabs">
            {ALL_FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-tab${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
              <p>No projects in this category yet.</p>
            </div>
          )}

          <div className="project-grid-v2">
            {filtered.map((project) => (
              <article className="project-card-v2" key={project.slug}>
                <div style={{ position: "relative", overflow: "hidden", height: "240px", background: project.color }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-photo"
                    loading="lazy"
                    style={{ width: "100%", height: "240px", objectFit: "cover", display: "block", transition: "transform .5s var(--ease)" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,10,30,.15) 0%, rgba(0,10,30,.55) 100%)" }} />
                </div>
                <div className="project-info">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                    <span className={statusBadgeClass(project.status)}>{project.status}</span>
                  </div>
                  <p className="project-meta" style={{ marginBottom: "8px" }}>
                    <span>{project.category}</span>
                  </p>
                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>{project.name}</h3>
                  <p style={{ color: "var(--text)", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>{project.copy}</p>
                  <div className="tags" style={{ marginBottom: "20px" }}>
                    {project.tech.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <Link
                    to={`/work/${project.slug}`}
                    style={{ color: "var(--blue)", fontSize: "12px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    View Case Study <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />NEXT PROJECT</p>
            <h2>{"Let's build"}<br /><span>yours.</span></h2>
            <p>Have an idea or a system you want to build? {"Let's"} talk about it.</p>
            <a href="mailto:autosoltechnologies@gmail.com">autosoltechnologies@gmail.com <Arrow /></a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link to="/contact" className="button button--primary" style={{ fontSize: "16px", padding: "0 36px", minHeight: "58px" }}>
              Start a project <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
