import { Link } from "react-router";
import Icon from "@/components/Icon";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

export default function About() {
  return (
    <>
      <Seo
        title="About AutoSol Technologies"
        description="AutoSol Technologies is a software and AI company building intelligent systems, automation workflows and digital products for growing businesses. BUILD. AUTOMATE. GROW."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--dark"><span />ABOUT</p>
          <h1>Who We Are</h1>
          <p>From ideas to intelligent systems. We build technology that thinks, connects and grows with your business.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="statement dark-surface">
        <div className="container statement-layout">
          <div>
            <p className="eyebrow eyebrow--dark"><span />OUR MISSION</p>
            <h2>Make intelligent technology <span>accessible to every business.</span></h2>
          </div>
          <div>
            <p className="eyebrow eyebrow--dark"><span />OUR VISION</p>
            <h2>A world where <span>every business runs on connected, intelligent systems.</span></h2>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span />OUR STORY</p>
            <h2>From ideas to intelligent systems.</h2>
            <p className="section-copy">AutoSol Technologies is a technology company focused on building practical software, AI systems and automation solutions for real business problems. We work across industries—from small businesses and startups to civic organizations and enterprises—bringing intelligent systems to wherever they create the most value.</p>
          </div>

          <div className="why-grid">
            {[
              { icon: "ai" as const, title: "AI-first thinking", copy: "We bring artificial intelligence into the core of every system we build—not as an afterthought, but as a foundational capability." },
              { icon: "growth" as const, title: "Business-first engineering", copy: "Every project starts with understanding the real business problem. Technology is the tool, not the goal." },
              { icon: "automation" as const, title: "Connected systems", copy: "We bring data, software, workflows and people together into systems that actually work end-to-end." },
              { icon: "design" as const, title: "Product mindset", copy: "We build with the end user in mind—useful, intuitive systems that people want to use." },
              { icon: "data" as const, title: "Data-driven", copy: "We design systems that generate useful information and make decisions clearer at every level." },
              { icon: "cloud" as const, title: "Long-term thinking", copy: "We design for evolution. Systems that can grow, adapt and improve as the business changes." },
            ].map((item) => (
              <article className="why-card" key={item.title}>
                <div className="service-icon"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3><p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach flow */}
      <section className="section technology dark-surface">
        <div className="container">
          <div className="section-head section-head--light">
            <p className="eyebrow eyebrow--dark"><span />OUR APPROACH</p>
            <h2>Manual → Digital → Automated → Intelligent</h2>
            <p className="section-copy">We help businesses move along the maturity curve—from paper-based processes to fully intelligent, connected systems.</p>
          </div>
          <div className="statement-flow">
            {["Manual", "Digital", "Automated", "Intelligent"].map((item, index) => (
              <div className={`flow-item ${item === "Intelligent" ? "active" : ""}`} key={item}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                <strong>{item}</strong>
                {index < 3 && <Arrow />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="section process">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span />HOW WE WORK</p>
            <h2>A clear path from context to outcome.</h2>
            <p className="section-copy">We start with your business problem and work through a structured, collaborative process to deliver systems that keep improving.</p>
          </div>
          <div className="process-bento">
            {[
              { num: "01", title: "Discover", copy: "Understand your business, goals and the real problem we are solving." },
              { num: "02", title: "Design", copy: "Plan the solution architecture, user experience and technical blueprint." },
              { num: "03", title: "Build", copy: "Develop with iterative feedback, code quality and technical precision." },
              { num: "04", title: "Integrate", copy: "Connect with your existing tools, data sources and business workflows." },
              { num: "05", title: "Deploy", copy: "Ship to production with quality checks and performance validation." },
              { num: "06", title: "Improve", copy: "Monitor, learn and continuously evolve the system over time." },
            ].map((step) => (
              <div key={step.num} className="process-bento-card" data-num={step.num}>
                <span className="pbc-num">{step.num}</span>
                <h3 className="pbc-title">{step.title}</h3>
                <p className="pbc-copy">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />WORK WITH US</p>
            <h2>{"Let's build"}<br /><span>something great.</span></h2>
            <p>{"We're"} always open to new projects, partnerships and conversations.</p>
            <a href="mailto:autosoltechnologies@gmail.com">autosoltechnologies@gmail.com <Arrow /></a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link to="/contact" className="button button--primary" style={{ fontSize: "16px", padding: "0 36px", minHeight: "58px" }}>
              Get in touch <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
