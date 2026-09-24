import { Link } from "react-router";
import Seo from "@/components/Seo";

const PROJECT_TYPES = [
  "AI & GenAI",
  "AI Automation",
  "Software Development",
  "Web Development",
  "Mobile App Development",
  "SaaS / Product",
  "CRM",
  "ERP / Business System",
  "E-Commerce",
  "Data & Analytics",
  "Performance Marketing",
  "SEO",
  "IoT",
  "UI/UX",
  "Training",
  "Technology Consulting",
  "Other",
];

const BUDGETS = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not Sure Yet",
];

const TIMELINES = [
  "As Soon As Possible",
  "1–2 Months",
  "2–3 Months",
  "3–6 Months",
  "Flexible",
  "Not Sure Yet",
];

const WE_WORK_ON = [
  "AI & GenAI",
  "AI Automation",
  "Software Development",
  "Web Development",
  "Mobile Applications",
  "SaaS Products",
  "CRM",
  "ERP / Business Systems",
  "Data & Analytics",
  "E-Commerce",
  "Performance Marketing",
  "SEO",
  "IoT",
  "UI/UX",
  "Training",
  "Technology Consulting",
];

const HELP_CARDS = [
  {
    title: "AI Solutions",
    copy: "Build intelligent applications, assistants, RAG systems and AI-enabled workflows.",
    link: "/services/ai",
  },
  {
    title: "Automation",
    copy: "Connect repetitive processes, systems and business workflows.",
    link: "/services/automation",
  },
  {
    title: "Software",
    copy: "Build custom software around real business requirements.",
    link: "/services/software",
  },
  {
    title: "Digital Products",
    copy: "Create websites, applications, SaaS products and digital platforms.",
    link: "/services/web",
  },
  {
    title: "Business Systems",
    copy: "CRM, ERP, dashboards and connected business operations.",
    link: "/services/business-systems",
  },
  {
    title: "Digital Growth",
    copy: "Performance marketing, SEO and conversion-focused digital experiences.",
    link: "/services/marketing",
  },
];

const PREPARE_QUESTIONS = [
  "What problem are you trying to solve?",
  "Who will use the solution?",
  "What are you using today?",
  "What would you like the new system to do?",
  "Do you already have designs or requirements?",
  "What timeline are you considering?",
];

const NEXT_STEPS = [
  { num: "01", title: "Discover", copy: "We understand your problem and requirements." },
  { num: "02", title: "Define", copy: "We clarify scope, priorities and expectations." },
  { num: "03", title: "Plan", copy: "We outline the solution, technology and next steps." },
  { num: "04", title: "Build", copy: "We develop and refine the solution." },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Start a Project"
        description="Have a project in mind? Contact AutoSol Technologies to discuss AI, software development, automation, CRM, ERP or digital growth requirements. Send us a project enquiry."
      />
      {/* Hero */}
      <section className="contact-page-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <div className="container contact-page-hero-inner">
          <div className="contact-hero-copy">
            <p className="eyebrow eyebrow--dark"><span />LET'S BUILD SOMETHING USEFUL</p>
            <h1>Have a Project<br /><span>in Mind?</span></h1>
            <p className="contact-hero-lead">Tell us what you want to build, automate, improve or transform.</p>
            <p className="contact-hero-sub">Whether you need AI, software, automation, a digital product, a business system or digital growth support, start by telling us what you're trying to solve.</p>
            <a href="#enquiry-form" className="button button--primary">Send an enquiry <Arrow /></a>
          </div>
          <div className="contact-hero-flow" aria-hidden="true">
            {["MESSAGE", "REQUIREMENT", "DISCOVERY", "SOLUTION", "BUILD"].map((step, i, arr) => (
              <div key={step} className="contact-flow-item">
                <div className="contact-flow-step">{step}</div>
                {i < arr.length - 1 && <div className="contact-flow-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main 2-col: left info + right form */}
      <section className="section" id="enquiry-form" style={{ background: "var(--deep)" }}>
        <div className="container contact-main-layout">

          {/* Left */}
          <div className="contact-left">
            <p className="eyebrow eyebrow--dark"><span />GET IN TOUCH</p>
            <h2 className="contact-left-heading">Let's Talk About<br />Your Project</h2>
            <p style={{ color: "#8292a8", fontSize: "14px", lineHeight: 1.7, marginBottom: "32px" }}>
              Tell us what you are working on and we will figure out the best way to help.
            </p>

            <p style={{ color: "#4b607e", fontSize: "10px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: "14px" }}>We work on</p>
            <div className="contact-services-list">
              {WE_WORK_ON.map((item) => (
                <span key={item} className="contact-service-tag">{item}</span>
              ))}
            </div>

            {/* Email card */}
            <div className="contact-info-card">
              <p style={{ color: "#4b607e", fontSize: "9px", fontWeight: 700, letterSpacing: ".14em", marginBottom: "8px" }}>EMAIL</p>
              <a href="mailto:autosoltechnologies@gmail.com" className="contact-email-link">
                autosoltechnologies@gmail.com
              </a>
              <a href="mailto:autosoltechnologies@gmail.com" className="button button--primary" style={{ marginTop: "20px", alignSelf: "flex-start", minHeight: "44px", fontSize: "13px" }}>
                Email us <Arrow />
              </a>
            </div>

            {/* WhatsApp card */}
            <div className="contact-info-card contact-wa-card">
              <p style={{ color: "#4b607e", fontSize: "9px", fontWeight: 700, letterSpacing: ".14em", marginBottom: "8px" }}>WHATSAPP / PHONE</p>
              <a href="tel:+918668686934" className="contact-email-link" style={{ fontSize: "16px" }}>
                +91 86686 86934
              </a>
              <p style={{ color: "#8292a8", fontSize: "12px", lineHeight: 1.5, margin: "8px 0 0" }}>Available for quick queries, project discussions and support enquiries.</p>
              <a
                href="https://wa.me/918668686934"
                target="_blank"
                rel="noopener noreferrer"
                className="button contact-wa-btn"
                style={{ marginTop: "16px", alignSelf: "flex-start", minHeight: "44px", fontSize: "13px" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.727.974 1.003-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Chat on WhatsApp <Arrow />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-right">
            <form
              className="contact-form-v2"
              action="mailto:autosoltechnologies@gmail.com"
              method="get"
              encType="text/plain"
            >
              <div className="field-row">
                <label>Full Name *<input name="name" placeholder="Your full name" required /></label>
                <label>Email *<input type="email" name="email" placeholder="you@company.com" required /></label>
              </div>
              <label>Company / Organization<input name="company" placeholder="Your company or organization" /></label>
              <div className="field-row">
                <label>
                  Project Type *
                  <select name="project-type" defaultValue="" required>
                    <option value="" disabled>Select a project type</option>
                    {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
                <label>
                  Budget Range
                  <select name="budget" defaultValue="">
                    <option value="">Select a range</option>
                    {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </label>
              </div>
              <label>
                Project Timeline
                <select name="timeline" defaultValue="">
                  <option value="">Select a timeline</option>
                  {TIMELINES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label>
                Interested in 12-Month Technology Care?
                <select name="technology-care" defaultValue="">
                  <option value="">Select an option</option>
                  <option value="yes">Yes — include Technology Care</option>
                  <option value="discuss">{"Let's Discuss"}</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </label>
              <label>
                Project Description *
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your business, the problem you want to solve, what you want to build, or the workflow you want to automate."
                  required
                />
              </label>
              <button type="submit" className="button button--primary" style={{ width: "100%", minHeight: "54px", fontSize: "15px" }}>
                Send Project Details <Arrow />
              </button>
              <p style={{ color: "#4b607e", fontSize: "11px", textAlign: "center", marginTop: "12px", marginBottom: 0 }}>
                Submitting will open your email client with your details pre-filled.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* What We Can Help With */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span />WHAT CAN WE HELP YOU BUILD?</p>
            <h2>The right technology for the right problem.</h2>
          </div>
          <div className="why-grid">
            {HELP_CARDS.map((card) => (
              <Link to={card.link} key={card.title} className="why-card" style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
                <span style={{ color: "var(--blue)", fontSize: "12px", fontWeight: 700, marginTop: "auto" }}>Learn more <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prepare section */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container contact-prepare-layout">
          <div>
            <p className="eyebrow"><span />MAKE YOUR ENQUIRY MORE USEFUL</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", letterSpacing: "-.04em" }}>A few details help us respond faster.</h2>
            <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: 1.7, maxWidth: "440px" }}>
              Before sending your enquiry, consider these questions. The more context you share, the more specific and useful our response can be.
            </p>
          </div>
          <div className="contact-prepare-list">
            {PREPARE_QUESTIONS.map((q, i) => (
              <div key={q} className="contact-prepare-item">
                <span className="contact-prepare-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section dark-surface">
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "48px" }}>
            <p className="eyebrow eyebrow--dark"><span />WHAT HAPPENS NEXT?</p>
            <h2>From conversation to solution.</h2>
          </div>
          <div className="contact-steps">
            {NEXT_STEPS.map((step, i) => (
              <div key={step.num} className="contact-step">
                <span className="contact-step-num">{step.num}</span>
                <div className="contact-step-line" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="section" style={{ background: "var(--deep)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <p className="eyebrow eyebrow--dark" style={{ justifyContent: "center" }}><span />READY TO START?</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-.05em", color: "white", marginBottom: "16px" }}>
            Ready to Start a Conversation?
          </h2>
          <p style={{ color: "#8292a8", fontSize: "16px", lineHeight: 1.7, marginBottom: "8px" }}>
            Have an idea, business problem or workflow in mind?
          </p>
          <p style={{ color: "#4b607e", fontSize: "14px", marginBottom: "32px" }}>
            Email us at{" "}
            <a href="mailto:autosoltechnologies@gmail.com" style={{ color: "var(--cyan)" }}>
              autosoltechnologies@gmail.com
            </a>
            {" "}or WhatsApp{" "}
            <a href="https://wa.me/918668686934" target="_blank" rel="noopener noreferrer" style={{ color: "#25d366" }}>
              +91 86686 86934
            </a>
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:autosoltechnologies@gmail.com" className="button button--primary" style={{ fontSize: "15px", minHeight: "54px", padding: "0 40px" }}>
              Email AutoSol <Arrow />
            </a>
            <a href="https://wa.me/918668686934" target="_blank" rel="noopener noreferrer" className="button contact-wa-btn" style={{ fontSize: "15px", minHeight: "54px", padding: "0 32px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.532 5.856L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.727.974 1.003-3.634-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
