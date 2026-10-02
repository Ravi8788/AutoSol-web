import Image from "next/image";
import Link from "next/link";
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
      <section className="hero fx" id="home">
        <div className="fx-media" aria-hidden="true">
          <div className="fx-sky" />
          <div className="fx-glow fx-glow--a" />
          <div className="fx-glow fx-glow--b" />
          <div className="fx-grid" />
          <div className="fx-scrim" />
          <div className="fx-rules"><span /><span /><span /></div>
        </div>

        <div className="fx-inner">
          <div className="fx-lead">
            <p className="fx-note">
              <svg className="fx-note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.6 3.7 5.7 3.7 9S14.5 18.4 12 21c-2.5-2.6-3.7-5.7-3.7-9S9.5 5.6 12 3Z" />
              </svg>
              <span>AI, software and automation<br />for growing businesses</span>
            </p>

            <h1 className="fx-title">
              Build smarter.<br />
              Automate faster.<br />
              Grow <em>further.</em>
            </h1>

            <p className="fx-sub">
              We build intelligent software, AI systems and automation solutions that turn complex business problems into connected digital experiences.
            </p>

            <div className="fx-cta">
              <Link className="fx-go" href="/contact">
                Start a project
                <span className="fx-go-dot" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10h12M11 5l5 5-5 5" />
                  </svg>
                </span>
              </Link>

              <div className="fx-proof">
                <div className="fx-faces" aria-hidden="true">
                  <i /><i /><i /><i />
                </div>
                <span className="fx-proof-text">
                  <strong>BUILD. AUTOMATE. GROW.</strong>
                  Kolhapur · India
                </span>
              </div>
            </div>

            <ul className="fx-stats">
              <li className="fx-stat">
                <span className="fx-stat-mark" aria-hidden="true">*</span>
                <span className="fx-stat-value">17+</span>
                <span className="fx-stat-label">Capabilities we build</span>
                <span className="fx-stat-rule" aria-hidden="true" />
              </li>
              <li className="fx-stat">
                <span className="fx-stat-mark" aria-hidden="true">*</span>
                <span className="fx-stat-value">12 mo</span>
                <span className="fx-stat-label">Technology Care</span>
                <span className="fx-stat-rule" aria-hidden="true" />
              </li>
            </ul>
          </div>

          <aside className="fx-ghost" aria-hidden="true">
            <div className="fx-ghost-row">
              <div className="fx-bars">
                <span /><span /><span /><span /><span />
              </div>
              <p className="fx-kpi"><strong>Live</strong>Connected<br />systems</p>
            </div>
            <h2 className="fx-ghost-title">From data to outcome</h2>
            <p className="fx-ghost-copy">
              Business data, software and automation meet in one intelligence layer — then keep improving after launch.
            </p>
          </aside>
        </div>

        <div className="fx-foot">
          <span className="fx-watermark" aria-hidden="true">SOL</span>
          <div className="fx-focus">
            <span className="fx-focus-label">Our focus</span>
            <ul>
              {["AI Systems", "Software", "Automation", "Data", "IoT"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
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
                <Link href={`/services/${service.slug}`} aria-label={`Explore ${service.name}`}>Explore <Arrow /></Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link href="/services" className="button button--dark">View all services <Arrow /></Link>
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
            <Link href="/services/support" className="button button--primary" style={{ whiteSpace: "nowrap", minHeight: "50px", fontSize: "14px" }}>
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
                color: "#0057e6",
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
                color: "#0090d4",
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
                <Link href={`/products/${p.slug}`} className="pcv2-link">
                  Explore Product <Arrow />
                </Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link href="/products" className="button button--primary">VIEW ALL PRODUCTS <Arrow /></Link>
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
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    className="project-photo"
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
                    <Link href={`/work/${project.slug}`} aria-label={`View ${project.name}`}><Arrow /></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link href="/work" className="button button--dark">View all projects <Arrow /></Link>
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
            <Link href="/training" className="button button--dark">Explore training <Arrow /></Link>
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
              <Link href="/contact" className="button button--primary">Start a conversation <Arrow /></Link>
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
