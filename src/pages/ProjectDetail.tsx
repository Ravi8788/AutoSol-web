import { useParams, Link } from "react-router";
import { projects } from "@/data/site";
import type { Project } from "@/data/site";
import Seo from "@/components/Seo";

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

const featuresMap: Record<string, string[]> = {
  "kvk-farmer-management": [
    "Role-based access control",
    "Farmer record management",
    "Agricultural programme tracking",
    "PDF and CSV report export",
    "Data search and filtering",
    "Desktop installer packaging",
  ],
  "swadeshi-mart": [
    "Community-exclusive user registration",
    "Product catalogue and inventory",
    "Order and fulfilment workflows",
    "CRM and customer management",
    "MLM referral structure",
    "HRM and staff management",
  ],
  "rebelsalon": [
    "Salon and barber discovery",
    "Service listing and details",
    "Appointment booking flow",
    "Firebase real-time data",
    "Android native interface",
    "Push notification support",
  ],
  "real-estate": [
    "Property listing pages",
    "Responsive layout across devices",
    "Contact and enquiry forms",
    "Search and filter functionality",
    "Professional visual design",
    "Fast page load performance",
  ],
  "inspring-ecommerce": [
    "Product catalogue and categories",
    "Shopping cart and checkout",
    "Responsive design for all devices",
    "Product search and filters",
    "Order management interface",
    "Professional brand presentation",
  ],
  "krushnai-amrutulya": [
    "Business identity and branding",
    "Menu and service presentation",
    "Location and contact information",
    "Mobile-responsive layout",
    "Fast and accessible design",
    "Professional web presence",
  ],
  "hotel-management-crm": [
    "Guest check-in and check-out workflows",
    "Lead and enquiry management",
    "Room availability tracking",
    "Customer communication history",
    "Booking and reservation records",
    "Business reporting dashboard",
  ],
  "shoe-shop-erp-pos": [
    "Point-of-sale billing interface",
    "Inventory and stock management",
    "Sales reporting and analytics",
    "Supplier and purchase management",
    "Customer records and history",
    "Category and variant tracking",
  ],
  "wedding-invitation-websites": [
    "Animated invitation layouts",
    "Indian and Maharashtrian design themes",
    "Event schedule and venue details",
    "RSVP and guest management",
    "Multi-page invitation flow",
    "Mobile-optimised experience",
  ],
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section" style={{ background: "white", textAlign: "center" }}>
        <div className="container">
          <h2>Project not found</h2>
          <p style={{ color: "var(--text)", marginBottom: "32px" }}>The project you are looking for does not exist.</p>
          <Link to="/work" className="button button--primary">Back to Work <Arrow /></Link>
        </div>
      </section>
    );
  }

  const features = featuresMap[project.slug] ?? [];
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${project.name} | Work`}
        description={`${project.name} — ${project.description} Built by AutoSol Technologies.`}
      />
      {/* Hero */}
      <section className="project-detail-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/work">Work</Link>
            <span>/</span>
            <span style={{ color: "#9cacc0" }}>{project.name}</span>
          </div>
          <div className="project-detail-hero-layout">
            <div>
              <p className="eyebrow eyebrow--dark"><span />{project.category}</p>
              <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-.045em", marginBottom: "20px", lineHeight: 1.1 }}>
                {project.name}
              </h1>
              <p style={{ color: "#9cacc0", fontSize: "16px", lineHeight: 1.7, marginBottom: "24px" }}>{project.copy}</p>
              <div style={{ marginBottom: "24px" }}>
                <span className={statusBadgeClass(project.status)}>{project.status}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link to="/contact" className="button button--primary">
                  Start a similar project <Arrow />
                </Link>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="button button--secondary">
                    Visit Live Site <Arrow />
                  </a>
                )}
              </div>
            </div>
            <div className="project-detail-image">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {features.length > 0 && (
        <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
          <div className="container">
            <p className="eyebrow"><span />KEY FEATURES</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-.04em", marginBottom: "40px" }}>
              What this project includes
            </h2>
            <div className="why-grid">
              {features.map((feature) => (
                <div className="why-card" key={feature} style={{ minHeight: "auto", padding: "22px 24px" }}>
                  <p style={{ fontWeight: 600, fontSize: "15px", color: "var(--ink)", margin: 0 }}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <p className="eyebrow"><span />TECHNOLOGY</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-.04em", marginBottom: "32px" }}>
            Built with
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: "10px 18px",
                  border: "1px solid var(--line)",
                  borderRadius: "10px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "var(--ink)",
                  background: "var(--light)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="section dark-surface">
        <div className="container">
          <p className="eyebrow eyebrow--dark"><span />PROJECT STATUS</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-.04em", marginBottom: "20px", color: "white" }}>
            Current status
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span className={statusBadgeClass(project.status)} style={{ fontSize: "11px" }}>{project.status}</span>
            <p style={{ color: "#9cacc0", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>
              {project.status === "DEVELOPED" && "This project has been fully developed and delivered."}
              {project.status === "DEVELOPED / PROJECT" && "This project has been developed and delivered to the client."}
              {project.status === "PROJECT" && "This project is in active development or planning stages."}
              {project.status === "PROPOSAL / SRS" && "A detailed proposal and software requirements specification has been prepared for this project."}
              {project.status === "IN DEVELOPMENT" && "This project is currently under active development."}
              {project.status === "PROTOTYPE" && "A working prototype has been developed for this project."}
              {project.status === "PRODUCT VISION" && "This project represents a product vision and strategic direction."}
            </p>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <p className="eyebrow"><span />RELATED WORK</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-.04em", marginBottom: "40px" }}>
            More projects
          </h2>
          <div className="related-grid">
            {related.map((p) => (
              <article className="project-card-v2" key={p.slug}>
                <div style={{ position: "relative", overflow: "hidden", height: "200px", background: p.color }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="project-photo"
                    loading="lazy"
                    style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,10,30,.15) 0%, rgba(0,10,30,.5) 100%)" }} />
                </div>
                <div className="project-info">
                  <span className={statusBadgeClass(p.status)} style={{ marginBottom: "10px" }}>{p.status}</span>
                  <h3 style={{ fontSize: "17px", marginTop: "10px", marginBottom: "8px" }}>{p.name}</h3>
                  <p style={{ color: "var(--text)", fontSize: "12px", lineHeight: 1.6, marginBottom: "14px" }}>{p.copy}</p>
                  <Link to={`/work/${p.slug}`} style={{ color: "var(--blue)", fontSize: "12px", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    View Case Study <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />START A PROJECT</p>
            <h2>Start a similar<br /><span>project.</span></h2>
            <p>Have a similar idea or business problem? {"Let's"} build a solution together.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/contact" className="button button--primary" style={{ fontSize: "16px", padding: "0 36px", minHeight: "58px" }}>
              Get in touch <Arrow />
            </Link>
            <Link to="/services" className="button button--secondary" style={{ fontSize: "16px", padding: "0 36px", minHeight: "58px" }}>
              Our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
