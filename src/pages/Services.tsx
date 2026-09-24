import { Link } from "react-router";
import { services } from "@/data/site";
import Icon from "@/components/Icon";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

const GROUPS = ["AI, Software & Engineering", "Digital Growth", "Business & Professional"];

export default function Services() {
  return (
    <>
      <Seo
        title="Services | AI, Software, Automation & Digital Solutions"
        description="AutoSol Technologies offers 17 services including AI & GenAI, software development, web, mobile, CRM, ERP, automation, data analytics, performance marketing and IoT."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--dark"><span />CAPABILITIES</p>
          <h1>What We Build</h1>
          <p>We combine strategy, engineering and design to create useful technology—built around the way your business actually works.</p>
        </div>
      </section>

      <section className="section services">
        <div className="container">
          {GROUPS.map((group) => {
            const groupServices = services.filter((s) => s.group === group);
            return (
              <div key={group} style={{ marginBottom: "56px" }}>
                <div className="section-head" style={{ marginBottom: "32px" }}>
                  <p className="eyebrow"><span />{group.toUpperCase()}</p>
                </div>
                <div className="service-grid">
                  {groupServices.map((service) => {
                    const to = service.slug === "training" ? "/training" : `/services/${service.slug}`;
                    return (
                      <article className={`service-card ${service.featured ? "service-card--featured" : ""}`} key={service.slug}>
                        <div className="service-icon"><Icon name={service.icon} /></div>
                        <div>
                          <h3>{service.name}</h3>
                          <p>{service.copy}</p>
                          <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        </div>
                        <Link to={to} aria-label={`Explore ${service.name}`}>Explore <Arrow /></Link>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span />OUR APPROACH</p>
            <h2>From idea to impact.</h2>
            <p className="section-copy">A clear, collaborative path from business context to a system that keeps improving.</p>
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
            <p className="eyebrow eyebrow--dark"><span />START A CONVERSATION</p>
            <h2>Ready to<br /><span>build together?</span></h2>
            <p>Tell us what {"you're"} building or what {"you'd"} like to automate.</p>
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
