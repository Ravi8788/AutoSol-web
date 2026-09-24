import { Link } from "react-router";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

const INCLUDED = [
  {
    num: "01",
    title: "Bug & Issue Support",
    copy: "Support for identifying and resolving bugs related to the delivered project scope.",
  },
  {
    num: "02",
    title: "Technical Guidance",
    copy: "Help with technical questions related to the delivered solution.",
  },
  {
    num: "03",
    title: "Deployment Assistance",
    copy: "Support with deployment-related issues for the delivered application where applicable.",
  },
  {
    num: "04",
    title: "Minor Adjustments",
    copy: "Reasonable minor configuration or content-related adjustments within the agreed support scope.",
  },
  {
    num: "05",
    title: "Maintenance Guidance",
    copy: "Ongoing guidance for keeping the delivered system maintained.",
  },
  {
    num: "06",
    title: "Project Continuity",
    copy: "A support relationship that gives the client a clear point of technical continuity after launch.",
  },
];

const NOT_INCLUDED = [
  "New major features",
  "Large scope changes",
  "Complete redesigns",
  "New applications",
  "Major infrastructure migrations",
  "Unrelated third-party systems",
  "New product development",
];

const HOW_WORKS = [
  "ISSUE / QUESTION",
  "CONTACT AUTOSOL",
  "UNDERSTAND THE CONTEXT",
  "CHECK THE SCOPE",
  "RESOLVE / GUIDE",
  "CLOSE / FOLLOW UP",
];

const DELIVERY_FLOW = [
  { label: "PLAN", sub: "Scope & Requirements" },
  { label: "BUILD", sub: "Development" },
  { label: "TEST", sub: "QA & Validation" },
  { label: "DEPLOY", sub: "Go Live" },
  { label: "12-MONTH CARE", sub: "Technology Care", highlight: true },
  { label: "IMPROVE", sub: "Continuous Evolution" },
];

const FAQ = [
  {
    q: "Is 12-Month Technology Care included with every project?",
    a: "Support availability and scope depend on the project agreement. The Technology Care plan can be included for eligible engagements.",
  },
  {
    q: "Does support include new features?",
    a: "The support period is primarily intended for technical support, issue resolution and agreed maintenance. New major features or scope changes may be handled separately.",
  },
  {
    q: "Does it include unlimited development?",
    a: "No. The included support scope is defined in the project agreement.",
  },
  {
    q: "Can we continue working with AutoSol after the support period?",
    a: "Yes. Future maintenance, improvements, new features or additional technology work can be discussed separately.",
  },
];

const MONTHS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));

const CLIENT_GETS = [
  { label: "ONE YEAR OF CONTINUITY", copy: "Clear support scope for twelve months after delivery." },
  { label: "PROJECT CONTEXT", copy: "The team already understands the solution that was delivered." },
  { label: "TECHNICAL GUIDANCE", copy: "Support when questions arise or issues need attention." },
  { label: "MAINTENANCE MINDSET", copy: "Keep the delivered system moving forward." },
  { label: "FUTURE-READY", copy: "A clearer path for future improvements and next steps." },
];

export default function Support() {
  return (
    <>
      <Seo
        title="12-Month Technology Care | Post-Launch Support"
        description="AutoSol Technologies offers structured 12-Month Technology Care for eligible projects — bug support, technical guidance, deployment assistance and project continuity after launch."
      />

      {/* Hero */}
      <section className="support-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <div className="container support-hero-inner">
          <div className="support-hero-copy">
            <Link to="/services" className="breadcrumb">← Services</Link>
            <p className="eyebrow eyebrow--dark"><span />12-MONTH TECHNOLOGY CARE</p>
            <h1>Build.<br /><span>Launch.</span><br />Stay Supported.</h1>
            <p className="support-hero-lead">Technology should not become someone else's problem the day it goes live.</p>
            <p className="support-hero-sub">AutoSol's 12-Month Technology Care offering provides structured post-launch technical support for eligible projects — so your investment keeps moving forward.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link to="/contact" className="button button--primary">Enquire About Support <Arrow /></Link>
              <Link to="/services" className="button button--secondary">All Services</Link>
            </div>
            <p className="support-avail-note">Available as part of selected project engagements.</p>
          </div>

          {/* 12-month timeline visual */}
          <div className="support-months-visual" aria-hidden="true">
            <p className="support-months-label">12 MONTHS OF TECHNOLOGY CARE</p>
            <div className="support-months-grid">
              {MONTHS.map((m) => (
                <div key={m} className="support-month-cell">{m}</div>
              ))}
            </div>
            <div className="support-months-bar" />
            <p className="support-months-sub">Structured support from launch to month 12</p>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container support-why-layout">
          <div>
            <p className="eyebrow"><span />WHY THIS MATTERS</p>
            <h2>Your project should not be left alone after launch.</h2>
          </div>
          <div>
            <p style={{ color: "var(--text)", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              Launching software is only one part of the journey. Teams may need help understanding issues, making small adjustments, handling deployment questions or deciding what should come next.
            </p>
            <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: 1.8 }}>
              Our 12-Month Technology Care approach is designed to provide continuity after delivery — not to promise unlimited development, but to ensure your team has a clear point of technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery flow */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />THE FULL JOURNEY</p>
            <h2>From plan to post-launch care.</h2>
          </div>
          <div className="support-delivery-flow">
            {DELIVERY_FLOW.map((step, i, arr) => (
              <div key={step.label} className={`support-flow-step${step.highlight ? " support-flow-step--highlight" : ""}`}>
                <div className="support-flow-node">
                  <strong>{step.label}</strong>
                  <small>{step.sub}</small>
                </div>
                {i < arr.length - 1 && <div className="support-flow-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section" style={{ background: "var(--deep)" }}>
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "48px" }}>
            <p className="eyebrow eyebrow--dark"><span />WHAT IS INCLUDED</p>
            <h2>What Technology Care covers.</h2>
            <p style={{ color: "#8292a8", fontSize: "15px", lineHeight: 1.7, maxWidth: "580px", marginTop: "12px" }}>
              Support scope, response expectations and included maintenance activities are defined in the project agreement.
            </p>
          </div>
          <div className="support-included-grid">
            {INCLUDED.map((item) => (
              <div key={item.num} className="support-included-card">
                <span className="support-inc-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How support works */}
      <section className="section" style={{ background: "var(--dark)", borderTop: "1px solid var(--dark-border)" }}>
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "40px" }}>
            <p className="eyebrow eyebrow--dark"><span />HOW SUPPORT WORKS</p>
            <h2>A clear resolution process.</h2>
          </div>
          <div className="support-flow-row">
            {HOW_WORKS.map((step, i, arr) => (
              <div key={step} className="support-how-item">
                <div className="support-how-node">{step}</div>
                {i < arr.length - 1 && <div className="support-how-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT included */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container support-not-layout">
          <div>
            <p className="eyebrow"><span />IMPORTANT SCOPE BOUNDARY</p>
            <h2>What is not included.</h2>
            <p style={{ color: "var(--text)", fontSize: "14px", lineHeight: 1.8, maxWidth: "440px", marginTop: "16px" }}>
              To keep the offer honest and clearly scoped — the following are outside the standard 12-Month Technology Care period. These may be handled separately depending on the project agreement.
            </p>
          </div>
          <div className="support-not-list">
            {NOT_INCLUDED.map((item) => (
              <div key={item} className="support-not-item">
                <span className="support-not-icon">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the client gets */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />PROJECT CONTINUITY</p>
            <h2>What you get with 12-Month Care.</h2>
          </div>
          <div className="support-gets-grid">
            {CLIENT_GETS.map((item) => (
              <div key={item.label} className="support-gets-card">
                <h3>{item.label}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />FREQUENTLY ASKED</p>
            <h2>Technology Care questions.</h2>
          </div>
          <div className="support-faq">
            {FAQ.map((item) => (
              <div key={item.q} className="support-faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="section dark-surface" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="eyebrow eyebrow--dark" style={{ justifyContent: "center" }}><span />OUR APPROACH</p>
          <div className="support-brand-statement">
            <span>We build.</span>
            <span>We launch.</span>
            <span>We support.</span>
            <span>We improve.</span>
          </div>
          <p style={{ color: "#8292a8", fontSize: "15px", lineHeight: 1.7, marginBottom: "32px", maxWidth: "540px", margin: "0 auto 32px" }}>
            Our relationship does not have to end when the project goes live.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="button button--primary" style={{ minHeight: "54px", padding: "0 36px", fontSize: "15px" }}>
              Enquire About Support <Arrow />
            </Link>
            <Link to="/work" className="button button--secondary" style={{ minHeight: "54px", padding: "0 36px", fontSize: "15px" }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
