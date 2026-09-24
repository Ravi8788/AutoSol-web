import { Link } from "react-router";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

const trainingTopics = [
  "AI & GenAI",
  "Python",
  "Data Science",
  "LLM Engineering",
  "Full Stack Development",
  "Cloud & DevOps",
  "REST APIs",
  "IoT & Embedded Systems",
  "UI/UX Design",
  "Machine Learning",
  "Automation & Workflows",
  "Database Engineering",
];

const formats = [
  { title: "Beginner", copy: "Foundation-level programs for those new to technology and programming.", icon: "01" },
  { title: "Intermediate", copy: "Skill-building tracks for developers ready to go deeper.", icon: "02" },
  { title: "Advanced", copy: "Expert-level modules for senior engineers and architects.", icon: "03" },
  { title: "Project-Based", copy: "Learn by building real, deployable projects from day one.", icon: "04" },
  { title: "Workshops", copy: "Focused, hands-on sessions on specific tools and techniques.", icon: "05" },
  { title: "College Programs", copy: "Structured programs for final-year students and fresh graduates.", icon: "06" },
  { title: "Bootcamps", copy: "Intensive short-duration programs for rapid skill acquisition.", icon: "07" },
];

export default function Training() {
  return (
    <>
      <Seo
        title="Training & Learning | AI, Python, Data Science & Full Stack"
        description="AutoSol Technologies offers hands-on technology training in AI, Python, Data Science, LLM Engineering, Full Stack Development, React and Cloud. Build skills by building real things."
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow--dark"><span />TRAINING & SKILL DEVELOPMENT</p>
          <h1>Learn. Build. Deploy.</h1>
          <p>Practical technology training focused on building real skills through projects—from AI and data to full-stack development and automation.</p>
        </div>
      </section>

      <section className="section training">
        <div className="container training-layout">
          <div>
            <div className="section-head">
              <p className="eyebrow"><span />WHAT WE TEACH</p>
              <h2>Technology skills that matter.</h2>
              <p className="section-copy">Every program is built around practical application. You build real things, not toy examples.</p>
            </div>
            <div className="training-tags">
              {trainingTopics.map((item) => <span key={item}>{item}</span>)}
            </div>
            <Link to="/contact" className="button button--dark">Enquire about training <Arrow /></Link>
          </div>
          <div className="learning-path">
            {["Learn", "Practice", "Build", "Deploy", "Present", "Improve"].map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><i /></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div className="section-head">
            <p className="eyebrow"><span />FORMATS</p>
            <h2>Training for every stage.</h2>
            <p className="section-copy">Whether {"you're"} a student, a professional or an organization, we have a format built for you.</p>
          </div>
          <div className="why-grid">
            {formats.map((format) => (
              <article className="why-card" key={format.title}>
                <div style={{ color: "var(--blue)", fontWeight: 700, fontSize: "11px", letterSpacing: ".1em" }}>{format.icon}</div>
                <h3>{format.title}</h3>
                <p>{format.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />GET IN TOUCH</p>
            <h2>Ready to<br /><span>upskill?</span></h2>
            <p>Tell us about your team, {"your"} goals and {"what you'd"} like to build. {"We'll"} put together the right program.</p>
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
