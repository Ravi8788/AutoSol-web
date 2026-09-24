import { Link } from "react-router";
import { products } from "@/data/products";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

const PRINCIPLES = [
  { num: "01", title: "PROBLEM FIRST", copy: "Start with a meaningful problem." },
  { num: "02", title: "MODULAR", copy: "Build reusable components and capabilities." },
  { num: "03", title: "CONNECTED", copy: "Design systems that can communicate." },
  { num: "04", title: "AI WITH PURPOSE", copy: "Use AI where it adds practical value." },
  { num: "05", title: "HUMAN CONTROL", copy: "Keep people involved where judgment matters." },
  { num: "06", title: "EVOLVE THROUGH FEEDBACK", copy: "Products improve through testing, usage and iteration." },
];

const TECH_TAGS = [
  "AI / LLMs", "RAG", "Vector Search", "APIs", "Webhooks",
  "PostgreSQL", "Web Applications", "Cloud", "Containers", "Analytics", "Automation",
];

const ECOSYSTEM_LAYERS = [
  { label: "AUTOSOL AI CORE", sub: "Intelligence Layer" },
  { label: "AUTOSOL CRM", sub: "Customer Management" },
  { label: "AUTOSOL BUSINESS OS", sub: "Connected Operations" },
  { label: "INTEGRATIONS", sub: "External Systems" },
  { label: "BUSINESS WORKFLOWS", sub: "Automation & Action" },
];

const BUILD_STEPS = ["USE", "INTEGRATE", "CUSTOMIZE", "IMPROVE", "OWN"];

export default function Products() {
  return (
    <>
      <Seo
        title="Products | AutoSol AI Core, CRM & Business OS"
        description="AutoSol Technologies is building AI Core, CRM and Business OS — a connected product ecosystem of AI intelligence, customer management and business operations tools."
      />
      {/* Hero */}
      <section className="products-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <div className="container products-hero-inner">
          <div className="products-hero-copy">
            <p className="eyebrow eyebrow--dark"><span />AUTOSOL PRODUCTS</p>
            <h1>Technology We Are Building<br /><span>for the Next Generation</span><br />of Business.</h1>
            <p className="products-hero-lead">We are developing our own AI, CRM and business platform ecosystem to turn intelligent technology and automation into practical business tools.</p>
            <p className="products-hero-sub">Our product direction combines AI, software, workflow automation, business context and connected operations.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#products-grid" className="button button--primary">Explore Products <Arrow /></a>
              <Link to="/contact" className="button button--secondary">Start a Project</Link>
            </div>
          </div>
          <div className="products-hero-stack" aria-hidden="true">
            {["AI CORE", "CRM", "BUSINESS OS", "AUTOMATION", "DATA", "BUSINESS ACTION"].map((label, i, arr) => (
              <div key={label} className="phs-item">
                <div className="phs-node">{label}</div>
                {i < arr.length - 1 && <div className="phs-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="section" id="products-grid" style={{ background: "var(--deep)" }}>
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "48px" }}>
            <p className="eyebrow eyebrow--dark"><span />AUTOSOL PRODUCTS</p>
            <h2>Three Products. One Connected Ecosystem.</h2>
          </div>
          <div className="products-cards-grid">
            {products.map((p) => (
              <article key={p.slug} className="product-card-v2">
                <div className="pcv2-top">
                  <span className={`badge badge--${p.statusVariant}`}><i /> {p.status}</span>
                  <p className="product-index">{p.index}</p>
                </div>
                <div className="pcv2-accent" style={{ background: `linear-gradient(135deg, ${p.color}33, ${p.color}11)`, borderColor: `${p.color}44` }} />
                <h3 className="pcv2-name">{p.name}</h3>
                <p className="pcv2-tagline">{p.tagline}</p>
                <p className="pcv2-desc">{p.shortDesc}</p>
                <div className="pcv2-chips">
                  {p.chips.map((chip) => <span key={chip}>{chip}</span>)}
                </div>
                <Link to={`/products/${p.slug}`} className="pcv2-link">
                  Explore Product <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="section" style={{ background: "var(--dark)" }}>
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "48px" }}>
            <p className="eyebrow eyebrow--dark"><span />PRODUCT ECOSYSTEM</p>
            <h2>One Ecosystem. Multiple Layers.</h2>
            <p style={{ color: "#8292a8", fontSize: "16px", lineHeight: 1.7, maxWidth: "640px", marginTop: "16px" }}>
              Our product direction is not a collection of disconnected applications. We are exploring a connected ecosystem where intelligence, customer management, business operations and automation can work together.
            </p>
          </div>
          <div className="ecosystem-layers">
            {ECOSYSTEM_LAYERS.map((layer, i, arr) => (
              <div key={layer.label} className="eco-layer-item">
                <div className="eco-layer-node">
                  <strong>{layer.label}</strong>
                  <small>{layer.sub}</small>
                </div>
                {i < arr.length - 1 && <div className="eco-layer-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Philosophy */}
      <section className="section" style={{ background: "var(--deep)", borderTop: "1px solid var(--dark-border)" }}>
        <div className="container prod-philosophy-layout">
          <div>
            <p className="eyebrow eyebrow--dark"><span />PRODUCT PHILOSOPHY</p>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "-.05em", color: "white", lineHeight: 1.1, marginBottom: "24px" }}>
              BUILD WHAT DIFFERENTIATES.<br /><span style={{ color: "var(--cyan)" }}>CONNECT WHAT ALREADY WORKS.</span>
            </h2>
            <p style={{ color: "#8292a8", fontSize: "15px", lineHeight: 1.8, maxWidth: "480px" }}>
              We do not believe every business problem requires building a new platform from zero. Our approach is to use existing technology where it makes sense, integrate reliable external services, customize workflows around business needs, build reusable technology where differentiation matters, and improve systems through feedback and iteration.
            </p>
          </div>
          <div className="build-steps">
            {BUILD_STEPS.map((step, i, arr) => (
              <div key={step} className="build-step-item">
                <div className="build-step-pill">{step}</div>
                {i < arr.length - 1 && <span className="build-step-sep">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Principles */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "48px" }}>
            <p className="eyebrow"><span />PRODUCT DEVELOPMENT PRINCIPLES</p>
            <h2>How We Think About Products</h2>
          </div>
          <div className="principles-grid">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="principle-card">
                <span className="principle-num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Foundations */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />TECHNOLOGY FOUNDATIONS</p>
            <h2>Technology We Are Building On</h2>
            <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: 1.7, maxWidth: "600px", marginTop: "12px" }}>
              AutoSol products are being designed around modern AI, software engineering, data and integration technologies.
            </p>
          </div>
          <div className="tech-chips-row">
            {TECH_TAGS.map((t) => <span key={t} className="tech-chip">{t}</span>)}
          </div>
        </div>
      </section>

      {/* Status Disclaimer */}
      <section className="section" style={{ background: "var(--deep)", borderTop: "1px solid var(--dark-border)" }}>
        <div className="container prod-status-box">
          <p className="eyebrow eyebrow--dark"><span />PRODUCT DEVELOPMENT STATUS</p>
          <p style={{ color: "#9cacc0", fontSize: "15px", lineHeight: 1.8, maxWidth: "720px", marginTop: "16px" }}>
            AutoSol AI Core and AutoSol CRM are currently in development. AutoSol Business OS represents a longer-term product vision. Features and architecture may evolve during development based on technical validation, user feedback and product requirements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />GET INVOLVED</p>
            <h2>BUILD WITH US.<br /><span>OR BUILD WITH AUTOSOL.</span></h2>
            <p>Have a business problem that could become a product, workflow or intelligent system? Let us explore the opportunity.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/contact" className="button button--primary" style={{ fontSize: "16px", padding: "0 36px", minHeight: "58px" }}>
              Start a Project <Arrow />
            </Link>
            <Link to="/services" className="button button--secondary" style={{ fontSize: "16px", padding: "0 36px", minHeight: "58px" }}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
