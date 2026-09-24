import { Link } from "react-router";
import { services, projects, products } from "@/data/site";
import Icon from "@/components/Icon";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-head ${light ? "section-head--light" : ""}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

export default function Home() {
  const featuredServices = [
    ...services.filter((s) => s.featured),
    ...services.filter((s) => !s.featured),
  ].slice(0, 4);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      <Seo
        title="AI, Software & Automation Solutions"
        description="AutoSol Technologies builds AI systems, custom software, automation workflows, CRM, ERP, web and mobile applications for growing businesses. BUILD. AUTOMATE. GROW."
      />
      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="hero-glow hero-glow--two" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker">AI <i /> SOFTWARE <i /> AUTOMATION <i /> DATA <i /> IoT</p>
            <h1>
              Build smarter.<br />
              Automate faster.<br />
              <span>Grow further.</span>
            </h1>
            <p className="hero-description">
              We build intelligent software, AI systems and automation solutions that turn complex business problems into connected digital experiences.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="button button--primary">Start a project <Arrow /></Link>
              <Link to="/work" className="button button--secondary">Explore our work</Link>
            </div>
          </div>

          <div className="system-visual" aria-label="Connected intelligence system diagram">
            <div className="visual-topbar">
              <div><span className="status-dot" /> AUTOSOL SYSTEM</div>
              <span>CONNECTED</span>
            </div>
            <div className="visual-canvas">
              <span className="orbit orbit--one" />
              <span className="orbit orbit--two" />
              {/* Connector lines from nodes to core */}
              <svg className="vc-connectors" viewBox="0 0 480 390" aria-hidden="true">
                {/* data → core */}
                <line x1="130" y1="78" x2="240" y2="195" stroke="rgba(0,204,255,.22)" strokeWidth="1" strokeDasharray="4 4"/>
                {/* automation → core */}
                <line x1="350" y1="78" x2="240" y2="195" stroke="rgba(0,82,232,.22)" strokeWidth="1" strokeDasharray="4 4"/>
                {/* software → core */}
                <line x1="130" y1="312" x2="240" y2="195" stroke="rgba(0,82,232,.22)" strokeWidth="1" strokeDasharray="4 4"/>
                {/* outcome → core */}
                <line x1="350" y1="312" x2="240" y2="195" stroke="rgba(0,204,255,.22)" strokeWidth="1" strokeDasharray="4 4"/>
              </svg>
              {/* Particles ON the connector lines (midpoints) */}
              <span className="particle vc-p1" />
              <span className="particle vc-p2" />
              <span className="particle vc-p3" />
              <span className="particle vc-p4" />
              <div className="core">
                <span className="core-pulse" />
                <small>AUTOSOL</small>
                <strong>AI CORE</strong>
                <em>INTELLIGENCE LAYER</em>
              </div>
              <div className="node node--data"><Icon name="data" /><span>BUSINESS DATA</span></div>
              <div className="node node--automation"><Icon name="automation" /><span>AUTOMATION</span></div>
              <div className="node node--software"><Icon name="code" /><span>SOFTWARE</span></div>
              <div className="node node--outcome"><Icon name="growth" /><span>OUTCOME</span></div>
            </div>
            <div className="visual-footer">
              <span><i /> Data flowing</span>
              <span>API · AI · WORKFLOW</span>
            </div>
          </div>
        </div>
        <div className="container capability-strip">
          {["AI Systems", "Software", "Automation", "Data", "Growth", "IoT"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="statement dark-surface">
        <div className="container statement-layout">
          <div>
            <p className="eyebrow eyebrow--dark"><span />CONNECTED INTELLIGENCE</p>
            <h2>Technology should not make business more complicated. <span>It should make it smarter.</span></h2>
          </div>
          <div className="statement-flow" aria-label="Business transformation flow">
            {["Problem", "Data", "AI", "Automation", "Outcome"].map((item, index) => (
              <div className={item === "AI" ? "flow-item active" : "flow-item"} key={item}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                <strong>{item}</strong>
                {index < 4 && <Arrow />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section services">
        <div className="container">
          <SectionHead
            eyebrow="What we build"
            title="From intelligent automation to complete digital systems."
            copy="We combine strategy, engineering and design to create useful technology—built around the way your business actually works."
          />
          <div className="service-grid">
            {featuredServices.map((service) => (
              <article className={`service-card ${service.featured ? "service-card--featured" : ""}`} key={service.slug}>
                <div className="service-icon"><Icon name={service.icon} /></div>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.copy}</p>
                  <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <Link to={`/services/${service.slug}`} aria-label={`Explore ${service.name}`}>Explore <Arrow /></Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link to="/services" className="button button--dark">View all services <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process">
        <div className="container">
          <SectionHead
            eyebrow="OUR APPROACH"
            title="From idea to impact."
            copy="A clear, collaborative path from business context to a system that keeps improving."
          />
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

          {/* Technology Care card */}
          <div className="home-support-card">
            <div>
              <div className="home-support-badge"><i style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan)", display: "inline-block" }} />12-MONTH SUPPORT</div>
              <h3>BUILD. LAUNCH. STAY SUPPORTED.</h3>
              <p>Selected AutoSol projects can include a 12-Month Technology Care period after delivery — structured post-launch support so your investment keeps moving forward.</p>
            </div>
            <Link to="/services/support" className="button button--primary" style={{ whiteSpace: "nowrap", minHeight: "50px", fontSize: "14px" }}>
              Explore Technology Care <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="section products">
        <div className="container">
          <SectionHead
            light
            eyebrow="AUTOSOL PRODUCTS"
            title="Technology We Are Building."
            copy="We are developing our own AI, CRM and business platform ecosystem to turn intelligent technology and automation into practical business tools."
          />
          <div className="products-cards-grid">
            {[
              {
                slug: "ai-core",
                index: "01",
                name: "AutoSol AI Core",
                tagline: "The intelligence layer behind future AutoSol products.",
                status: "IN DEVELOPMENT",
                variant: "amber",
                desc: "A reusable AI infrastructure layer for language models, retrieval, agents, workflows and business context.",
                chips: ["LLM Integration", "RAG", "AI Agents", "Tool Calling"],
                color: "#0052e8",
              },
              {
                slug: "crm",
                index: "02",
                name: "AutoSol CRM",
                tagline: "Manage customers. Automate follow-ups. Understand your business.",
                status: "IN DEVELOPMENT",
                variant: "amber",
                desc: "A connected CRM designed for businesses managing leads through WhatsApp, spreadsheets and manual processes.",
                chips: ["Leads", "Pipeline", "Follow-Ups", "AI Assistant"],
                color: "#00aadd",
              },
              {
                slug: "business-os",
                index: "03",
                name: "AutoSol Business OS",
                tagline: "A connected operating system for the modern business.",
                status: "PRODUCT VISION",
                variant: "purple",
                desc: "A long-term platform vision connecting CRM, sales, operations, inventory, marketing, analytics and AI.",
                chips: ["CRM", "Sales", "Inventory", "Analytics", "AI"],
                color: "#7c3aed",
              },
            ].map((p) => (
              <article key={p.slug} className="product-card-v2">
                <div className="pcv2-top">
                  <span className={`badge badge--${p.variant}`}><i /> {p.status}</span>
                  <p className="product-index">{p.index}</p>
                </div>
                <div className="pcv2-accent" style={{ background: `linear-gradient(135deg, ${p.color}33, ${p.color}11)`, borderColor: `${p.color}44` }} />
                <h3 className="pcv2-name">{p.name}</h3>
                <p className="pcv2-tagline">{p.tagline}</p>
                <p className="pcv2-desc">{p.desc}</p>
                <div className="pcv2-chips">
                  {p.chips.map((chip) => <span key={chip}>{chip}</span>)}
                </div>
                <Link to={`/products/${p.slug}`} className="pcv2-link">
                  Explore Product <Arrow />
                </Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link to="/products" className="button button--primary">VIEW ALL PRODUCTS <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section work">
        <div className="container">
          <SectionHead
            eyebrow="Built by us"
            title="Real projects, practical systems."
            copy="A selection of products, prototypes and project work across government, agriculture, mobile, web and business systems."
          />
          <div className="project-grid-v2">
            {featuredProjects.map((project) => (
              <article className="project-card-v2" key={project.slug}>
                <div style={{ position: "relative", overflow: "hidden", height: "240px", background: project.color }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-photo"
                    loading="lazy"
                    style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,10,30,.15) 0%, rgba(0,10,30,.55) 100%)" }} />
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    {project.status && <span className="project-status">{project.status}</span>}
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.copy}</p>
                  <div className="project-bottom">
                    <div className="tags">{project.tech.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <Link to={`/work/${project.slug}`} aria-label={`View ${project.name}`}><Arrow /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link to="/work" className="button button--dark">View all projects <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* Training teaser */}
      <section className="section training">
        <div className="container training-layout">
          <div>
            <SectionHead
              eyebrow="Training & skill development"
              title="Learn. Build. Deploy."
              copy="Practical technology training focused on building real skills through projects—from AI and data to full-stack development and automation."
            />
            <div className="training-tags">
              {["AI & GenAI", "Python", "Data Science", "LLM Engineering", "Full Stack", "Cloud & DevOps", "REST APIs", "IoT", "UI/UX"].map((item) => <span key={item}>{item}</span>)}
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

      {/* Final CTA */}
      <section className="vision">
        <div className="container vision-layout">
          <div>
            <span className="badge badge--purple"><i /> Let's collaborate</span>
            <h2>{"Let's build"} <span>{"what's next."}</span></h2>
            <p>Have an idea, business problem or process you want to automate? {"Let's"} turn it into a practical digital solution.</p>
            <div style={{ marginTop: "32px" }}>
              <Link to="/contact" className="button button--primary">Start a conversation <Arrow /></Link>
            </div>
          </div>
          <div className="vision-flow">
            {["AI Core", "AutoSol CRM", "Business OS", "Intelligence", "Connected Business"].map((item, index) => (
              <div key={item} className={index === 4 ? "active" : ""}><span>0{index + 1}</span><strong>{item}</strong>{index < 4 && <Arrow />}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
