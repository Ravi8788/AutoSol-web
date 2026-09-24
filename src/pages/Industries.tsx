import { Link } from "react-router";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

const industries = [
  "Small business",
  "Agriculture",
  "Civic technology",
  "Education",
  "Healthcare",
  "Real estate",
  "Retail",
  "Manufacturing",
  "Startups",
  "E-commerce",
  "Professional services",
  "Technology",
];

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries | Solutions for Every Sector"
        description="AutoSol Technologies builds software, AI and automation solutions for agriculture, e-commerce, healthcare, education, logistics, hospitality and more."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--dark"><span />INDUSTRIES</p>
          <h1>Technology for Real-World Problems</h1>
          <p>Domain-aware systems for organizations ready to move from manual to digital, automated and intelligent.</p>
        </div>
      </section>

      <section className="section industries">
        <div className="container industries-layout">
          <div className="section-head">
            <p className="eyebrow"><span />SECTORS WE SERVE</p>
            <h2>Where we work.</h2>
            <p className="section-copy">We bring technology understanding to domains where intelligent systems can create the most meaningful change.</p>
          </div>
          <div className="industry-grid">
            {industries.map((item, index) => (
              <div className="industry-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
                <Arrow />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />YOUR INDUSTRY</p>
            <h2>{"Don't"} see yours?<br /><span>{"Let's"} talk.</span></h2>
            <p>{"We've"} worked across many sectors. If your domain {"isn't"} listed, reach out—we {"probably"} have relevant experience.</p>
            <a href="mailto:autosoltechnologies@gmail.com">autosoltechnologies@gmail.com <Arrow /></a>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Link to="/contact" className="button button--primary" style={{ fontSize: "16px", padding: "0 36px", minHeight: "58px" }}>
              Start a conversation <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
