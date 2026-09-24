import { useState } from "react";
import { Link } from "react-router";
import { insights } from "@/data/insights";
import Seo from "@/components/Seo";

const CATEGORIES = [
  "All",
  "AI & GenAI",
  "AI Automation",
  "Software Engineering",
  "Data & Analytics",
  "SaaS & Products",
  "CRM & Business Systems",
  "Cloud & DevOps",
  "Digital Growth",
  "Technology Strategy",
  "Learning & Development",
];

const PROCESS_STEPS = ["PROBLEM", "RESEARCH", "DESIGN", "BUILD", "INTEGRATE", "TEST", "DEPLOY", "IMPROVE"];
const AI_STEPS = ["DATA", "AI", "DECISION SUPPORT", "AUTOMATION", "HUMAN ACTION", "BUSINESS PROCESS"];

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = insights.find((i) => i.featured);
  const rest = insights.filter((i) => !i.featured);

  const filteredRest = activeCategory === "All"
    ? rest
    : rest.filter((i) => i.category === activeCategory);

  const filteredFeatured = featured && (activeCategory === "All" || featured.category === activeCategory)
    ? featured
    : null;

  return (
    <>
      <Seo
        title="Insights | AI, Software Engineering & Technology"
        description="Practical perspectives on AI, automation, software engineering, data, SaaS, CRM, digital growth and technology learning from AutoSol Technologies."
      />
      {/* Page Hero */}
      <section className="page-hero insights-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <div className="container insights-hero-layout">
          <div className="insights-hero-copy">
            <p className="eyebrow eyebrow--dark"><span />AUTOSOL INSIGHTS</p>
            <h1>Ideas, Engineering &amp; Technology for a Smarter Digital Future.</h1>
            <p>Explore practical perspectives on AI, automation, software engineering, data, SaaS, CRM, digital growth and technology learning.</p>
            <p style={{ color: "#64788f", fontSize: "14px", lineHeight: 1.7, maxWidth: "540px", marginTop: "12px" }}>
              We share concepts, engineering approaches and practical ideas that help businesses and technology teams understand what to build, what to automate and where technology can create meaningful value.
            </p>
          </div>
          <div className="insights-hero-visual" aria-hidden="true">
            <div className="ih-node ih-node--center"><span className="ih-dot" /><strong>AI CORE</strong><small>INTELLIGENCE</small></div>
            {[
              { label: "Generative AI", cls: "ih-node--tl" },
              { label: "Automation", cls: "ih-node--tr" },
              { label: "Data & Analytics", cls: "ih-node--bl" },
              { label: "Software Eng.", cls: "ih-node--br" },
            ].map(({ label, cls }) => (
              <div key={label} className={`ih-node ${cls}`}><span />{label}</div>
            ))}
            <svg className="ih-lines" viewBox="0 0 320 220" aria-hidden="true">
              <line x1="160" y1="110" x2="55" y2="45" stroke="rgba(0,204,255,.25)" strokeWidth="1" />
              <line x1="160" y1="110" x2="265" y2="45" stroke="rgba(0,82,232,.25)" strokeWidth="1" />
              <line x1="160" y1="110" x2="55" y2="175" stroke="rgba(0,82,232,.25)" strokeWidth="1" />
              <line x1="160" y1="110" x2="265" y2="175" stroke="rgba(0,204,255,.25)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </section>

      {/* Category Filter + Cards */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-tab${activeCategory === cat ? " active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Insight */}
          {filteredFeatured && (
            <div className="insight-card--featured">
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
                <p className="insight-category" style={{ margin: 0 }}>{filteredFeatured.category}</p>
                <span className="badge badge--amber">COMING SOON</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)", letterSpacing: "-.04em", marginBottom: "16px", color: "white", lineHeight: 1.15 }}>
                {filteredFeatured.title}
              </h2>
              <p style={{ color: "#9cacc0", fontSize: "16px", lineHeight: 1.7, maxWidth: "720px", marginBottom: "24px" }}>
                {filteredFeatured.description}
              </p>
              {filteredFeatured.topics && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                  {filteredFeatured.topics.map((topic) => (
                    <span key={topic} style={{
                      padding: "6px 12px",
                      border: "1px solid var(--dark-border)",
                      borderRadius: "999px",
                      color: "#8fa0b5",
                      fontSize: "10px",
                      fontWeight: 600,
                      background: "rgba(255,255,255,.04)",
                    }}>
                      {topic}
                    </span>
                  ))}
                </div>
              )}
              <span style={{ color: "#4b607e", fontSize: "12px", fontWeight: 700 }}>Article coming soon</span>
            </div>
          )}

          {/* Insights Grid */}
          {filteredRest.length > 0 && (
            <div className="insights-grid">
              {filteredRest.map((insight) => (
                <article className="insight-card" key={insight.slug}>
                  <p className="insight-category">{insight.category}</p>
                  <h3 style={{ fontSize: "17px", letterSpacing: "-.02em", margin: 0, fontFamily: '"Manrope", sans-serif' }}>{insight.title}</h3>
                  <p style={{ color: "var(--text)", fontSize: "13px", lineHeight: 1.6, margin: 0, flex: 1 }}>{insight.description}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px" }}>
                    <span className="badge badge--amber">COMING SOON</span>
                    <span style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px", cursor: "default" }}>
                      Read Insight <Arrow />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredRest.length === 0 && !filteredFeatured && (
            <div style={{ textAlign: "center", padding: "80px 0", color: "var(--muted)" }}>
              <p>Articles in this category are coming soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Flow */}
      <section className="section dark-surface">
        <div className="container">
          <p className="eyebrow eyebrow--dark"><span />OUR APPROACH</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-.04em", color: "white", marginBottom: "40px" }}>
            From Idea to Implementation
          </h2>
          <div className="process-bento process-bento--dark">
            {[
              { num: "01", title: "Problem", copy: "Identify the real business challenge worth solving." },
              { num: "02", title: "Research", copy: "Understand context, constraints and existing systems." },
              { num: "03", title: "Design", copy: "Define the solution architecture and experience." },
              { num: "04", title: "Build", copy: "Develop with precision, feedback and iteration." },
              { num: "05", title: "Integrate", copy: "Connect to tools, data sources and workflows." },
              { num: "06", title: "Test", copy: "Validate for quality, performance and edge cases." },
              { num: "07", title: "Deploy", copy: "Ship to production with care and monitoring." },
              { num: "08", title: "Improve", copy: "Keep evolving based on real usage and feedback." },
            ].map((step) => (
              <div key={step.num} className="process-bento-card process-bento-card--dark" data-num={step.num}>
                <span className="pbc-num">{step.num}</span>
                <h3 className="pbc-title" style={{ color: "white" }}>{step.title}</h3>
                <p className="pbc-copy" style={{ color: "#7a8fa5" }}>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI + Automation Editorial */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <p className="eyebrow"><span />AI & AUTOMATION</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-.04em", maxWidth: "780px", marginBottom: "40px", lineHeight: 1.2 }}>
            AI Is Not the Workflow. AI Becomes More Valuable Inside the Workflow.
          </h2>
          <div className="flow-diagram" style={{ justifyContent: "flex-start" }}>
            {AI_STEPS.map((step, index) => (
              <div className="flow-step" key={step}>
                <span style={{
                  border: "1px solid var(--line)",
                  background: "white",
                  color: "var(--ink)",
                }}>{step}</span>
                {index < AI_STEPS.length - 1 && <i style={{ color: "var(--blue)", fontStyle: "normal", fontSize: "14px" }}>→</i>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="section training">
        <div className="container training-layout">
          <div>
            <p className="eyebrow"><span />TRAINING & LEARNING</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-.04em", marginBottom: "20px" }}>
              Build Skills by Building Real Things.
            </h2>
            <p style={{ color: "var(--text)", fontSize: "16px", lineHeight: 1.7, maxWidth: "540px", marginBottom: "30px" }}>
              Technology skills are best developed through real projects. Our training programmes are built around practical work—not theory alone.
            </p>
            <div className="training-tags" style={{ marginBottom: "28px" }}>
              {["AI", "Python", "Data Science", "Full Stack", "Cloud", "LLM Engineering", "Web Development", "React", "Node.js"].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <Link to="/training" className="button button--dark">Explore training <Arrow /></Link>
          </div>
          <div className="learning-path">
            {["Learn", "Practice", "Build", "Deploy", "Present", "Improve"].map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><i /></div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />GET IN TOUCH</p>
            <h2>Have a Problem<br /><span>Worth Solving?</span></h2>
            <p>Every useful system starts with a real problem. Tell us what you are trying to solve.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link to="/contact" className="button button--primary" style={{ fontSize: "16px", padding: "0 36px", minHeight: "58px" }}>
              Start a conversation <Arrow />
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
