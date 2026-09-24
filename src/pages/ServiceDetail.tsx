import { useParams, Link } from "react-router";
import { services } from "@/data/site";
import Icon from "@/components/Icon";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: "center", padding: "80px 0" }}>
          <h1>Service not found</h1>
          <p>The service you are looking for does not exist.</p>
          <div style={{ marginTop: "32px" }}>
            <Link to="/services" className="button button--primary">← All services</Link>
          </div>
        </div>
      </section>
    );
  }

  const relatedServices = services
    .filter((s) => s.slug !== service.slug && s.group === service.group)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={`${service.name} Services`}
        description={`AutoSol Technologies offers ${service.name} services. ${service.copy} Capabilities: ${service.capabilities.slice(0, 5).join(", ")}.`}
      />
      <section className="page-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="container">
          <p className="eyebrow eyebrow--dark"><span />AUTOSOL SERVICES</p>
          <h1>{service.name}</h1>
          <p>{service.copy}</p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Link to="/contact" className="button button--primary">Start a project →</Link>
            <Link to="/services" className="button button--secondary">← All services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span />CAPABILITIES</p>
            <h2>What we cover in {service.name}.</h2>
          </div>
          <div className="why-grid">
            {service.capabilities.map((cap) => (
              <div className="why-card" key={cap}>
                <div className="service-icon"><Icon name={service.icon} /></div>
                <h3>{cap}</h3>
                <p>Delivered as part of our {service.name} practice — practical, outcome-focused and built for your context.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow--dark"><span />TECHNOLOGIES & FOCUS AREAS</p>
            <h2>Specialist areas.</h2>
          </div>
          <div className="tags">
            {service.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section services">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow"><span />RELATED SERVICES</p>
              <h2>You may also need.</h2>
            </div>
            <div className="service-grid">
              {relatedServices.map((related) => (
                <article className="service-card" key={related.slug}>
                  <div className="service-icon"><Icon name={related.icon} /></div>
                  <div>
                    <h3>{related.name}</h3>
                    <p>{related.copy}</p>
                    <div className="tags">{related.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <Link to={`/services/${related.slug}`} aria-label={`Explore ${related.name}`}>Explore <Arrow /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />START A CONVERSATION</p>
            <h2>Start a <span>{service.name}</span> project.</h2>
            <p>Tell us about your requirements and {"we'll"} get back to you quickly.</p>
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
