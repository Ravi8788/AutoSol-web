import { useParams, Link } from "react-router";
import { products } from "@/data/products";
import Seo from "@/components/Seo";

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

/* ── AI Core content ── */
const AI_CORE_CAPABILITIES = [
  { title: "LLM Integration", copy: "Connect applications with supported language models." },
  { title: "Prompt Management", copy: "Reusable and versioned prompt patterns for application workflows." },
  { title: "Structured Outputs", copy: "Convert model responses into predictable application-ready structures." },
  { title: "Embeddings", copy: "Represent text and knowledge in vector form for retrieval and similarity-based systems." },
  { title: "RAG", copy: "Retrieve relevant business information before generating responses." },
  { title: "Vector Search", copy: "Support semantic search across business knowledge." },
  { title: "Tool Calling", copy: "Allow AI systems to interact with defined tools and application functions." },
  { title: "AI Agents", copy: "Coordinate multi-step tasks through controlled agentic workflows." },
  { title: "AI Workflows", copy: "Connect AI reasoning with deterministic business processes." },
  { title: "Evaluation", copy: "Evaluate outputs for quality, reliability and expected behavior." },
  { title: "Model Routing", copy: "Use different models or model strategies depending on the task." },
  { title: "Business Context", copy: "Provide applications with relevant business information and workflow context." },
  { title: "AI Cost Tracking", copy: "Track AI usage and infrastructure considerations as the product evolves." },
  { title: "AI Security Direction", copy: "Design for controlled access, data handling and safer AI workflows." },
];
const AI_CORE_USECASES = [
  "Business Assistants", "Customer Intelligence", "Document Processing",
  "Knowledge Assistants", "AI CRM", "AI Reports", "Lead Intelligence",
  "Workflow Agents", "Internal Search", "Decision Support",
];
const AI_CORE_ARCH = [
  "USER / APPLICATION", "AUTOSOL AI CORE", "CONTEXT + KNOWLEDGE",
  "RAG / VECTOR SEARCH", "MODEL / AGENT", "TOOLS / FUNCTIONS",
  "WORKFLOW", "BUSINESS ACTION",
];
const AI_CORE_ROADMAP = [
  { phase: "PHASE 1", title: "Core AI Integration" },
  { phase: "PHASE 2", title: "Context + RAG" },
  { phase: "PHASE 3", title: "Tools + Workflows" },
  { phase: "PHASE 4", title: "Agentic Capabilities" },
  { phase: "PHASE 5", title: "Evaluation + Routing" },
  { phase: "PHASE 6", title: "Integration Across AutoSol Products" },
];

/* ── CRM content ── */
const CRM_MODULES = [
  "Dashboard", "Leads", "Customers", "Contacts", "Deals",
  "Follow-Ups", "Tasks", "Activities", "Communication",
  "Analytics", "AI Assistant", "Automation", "Business Memory", "Settings / Roles",
];
const CRM_PIPELINE = [
  { stage: "NEW", desc: "Fresh lead enters the system." },
  { stage: "CONTACTED", desc: "Initial outreach has been made." },
  { stage: "QUALIFIED", desc: "Lead is confirmed as a genuine opportunity." },
  { stage: "QUOTATION", desc: "Proposal or quote has been sent." },
  { stage: "NEGOTIATION", desc: "Terms are being discussed." },
  { stage: "WON / LOST", desc: "Deal is closed or removed from pipeline." },
];
const CRM_AI = [
  { title: "AI Customer Summary", copy: "Summarize customer history and interactions." },
  { title: "AI Lead Intelligence", copy: "Surface useful lead context and signals." },
  { title: "Follow-Up Suggestions", copy: "Suggest what to do next." },
  { title: "Next Best Action", copy: "Help teams identify possible next actions." },
  { title: "Reply Drafting", copy: "Assist with writing customer responses." },
  { title: "Business Questions", copy: "Allow natural-language questions about business data." },
  { title: "AI Reports", copy: "Generate structured summaries and insights." },
  { title: "Business Memory", copy: "Keep relevant customer and operational context accessible." },
];
const CRM_ROADMAP = [
  { phase: "PHASE 1", title: "Core CRM" },
  { phase: "PHASE 2", title: "Communication + Follow-Ups" },
  { phase: "PHASE 3", title: "Automation" },
  { phase: "PHASE 4", title: "AI Assistance" },
  { phase: "PHASE 5", title: "Business Intelligence" },
  { phase: "PHASE 6", title: "Connected Business Operations" },
];
const CRM_TARGET = [
  "Small Businesses", "Growing Businesses", "Sales Teams", "Service Businesses",
  "Local Businesses", "Agencies", "Professional Services", "E-Commerce Businesses",
  "Businesses using WhatsApp + Excel",
];
const CRM_BEYOND = [
  "WhatsApp → Workflow", "Next Best Action", "Business Memory",
  "AI-Assisted Follow-Up", "Connected Automation", "Exception-First Workflows",
  "Decision Support", "Human-in-the-Loop Automation",
];

/* ── Business OS content ── */
const BOS_MODULES = [
  "CRM", "Sales", "Inventory", "Purchase", "Marketing",
  "HR / Team", "Projects", "Documents", "Analytics", "Automation", "AI",
];
const BOS_WORKFLOW = [
  "LEAD", "CRM", "SALES", "ORDER", "INVENTORY",
  "PURCHASE", "OPERATIONS", "ANALYTICS", "AI", "AUTOMATION",
];
const BOS_AI = [
  "AI Assistant", "AI Insights", "Workflow Automation",
  "Business Intelligence", "Document Intelligence",
  "Predictive / Decision Support Concepts", "Natural Language Business Queries",
];
const BOS_ARCH = [
  { label: "AUTOSOL AI CORE", sub: "Intelligence Layer" },
  { label: "AUTOSOL CRM", sub: "Customer Management" },
  { label: "AUTOSOL BUSINESS OS", sub: "Connected Operations" },
  { label: "INTEGRATIONS", sub: "External Systems" },
  { label: "BUSINESS ECOSYSTEM", sub: "Outcomes" },
];
const BOS_ROADMAP = [
  { phase: "PHASE 1", title: "CRM Foundation" },
  { phase: "PHASE 2", title: "Sales + Customer Operations" },
  { phase: "PHASE 3", title: "Inventory + Purchase" },
  { phase: "PHASE 4", title: "Marketing + Team" },
  { phase: "PHASE 5", title: "Automation" },
  { phase: "PHASE 6", title: "AI + Analytics" },
  { phase: "PHASE 7", title: "Connected Business Platform" },
];

/* ──────────────────────────── AI CORE PAGE ──────────────────────────── */
function AiCorePage() {
  return (
    <>
      <Seo
        title="AutoSol AI Core | AI Intelligence Platform"
        description="AutoSol AI Core is a reusable AI intelligence layer in development, designed to power language models, RAG, vector search, AI agents, tool calling and business workflows."
      />
      {/* Hero */}
      <section className="pd-hero" style={{ "--pd-color": "#0052e8" } as React.CSSProperties}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="container pd-hero-inner">
          <div className="pd-hero-copy">
            <Link to="/products" className="breadcrumb">← Products</Link>
            <span className="badge badge--amber"><i /> IN DEVELOPMENT</span>
            <p className="pd-product-num">PRODUCT 01</p>
            <h1>AutoSol AI Core</h1>
            <p className="pd-tagline">The intelligence layer behind future AutoSol products.</p>
            <p className="pd-lead">AutoSol AI Core is being designed as a reusable intelligence layer for powering AI-enabled applications, business workflows and future AutoSol products.</p>
            <p style={{ color: "#64788f", fontSize: "14px", lineHeight: 1.8, maxWidth: "520px", marginTop: "12px" }}>
              Instead of rebuilding AI capabilities separately inside every application, AI Core is intended to provide a shared foundation for language models, business context, retrieval, agents, tools, workflows and evaluation.
            </p>
          </div>
          <div className="pd-hero-arch" aria-hidden="true">
            {AI_CORE_ARCH.map((node, i, arr) => (
              <div key={node} className="pd-arch-item">
                <div className={`pd-arch-node${i === 1 ? " pd-arch-node--core" : ""}`}>{node}</div>
                {i < arr.length - 1 && <div className="pd-arch-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />PROBLEM</p>
            <h2>Why Build an AI Core?</h2>
          </div>
          <div className="pd-why-layout">
            <div>
              <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: 1.8, marginBottom: "24px" }}>
                Modern applications increasingly need: AI assistants, context-aware responses, document intelligence, retrieval, tool calling, workflow automation, structured outputs and business-specific knowledge.
              </p>
              <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: 1.8 }}>
                Building each capability separately can lead to duplicated engineering work and inconsistent AI behavior. AutoSol AI Core is intended to provide reusable AI infrastructure across future products.
              </p>
            </div>
            <div className="pd-need-chips">
              {["AI Assistants", "Context-Aware Responses", "Document Intelligence", "Retrieval", "Tool Calling", "Workflow Automation", "Structured Outputs", "Business Knowledge"].map((n) => (
                <span key={n} className="pd-need-chip">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />CORE CAPABILITIES</p>
            <h2>What AI Core Is Designed to Do</h2>
          </div>
          <div className="pd-caps-grid">
            {AI_CORE_CAPABILITIES.map((cap) => (
              <div key={cap.title} className="pd-cap-card">
                <h3>{cap.title}</h3>
                <p>{cap.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section dark-surface">
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "36px" }}>
            <p className="eyebrow eyebrow--dark"><span />POTENTIAL USE CASES</p>
            <h2>Where AI Core Could Be Applied</h2>
            <p style={{ color: "#8292a8", fontSize: "14px", marginTop: "8px" }}>These are product capabilities and development direction — not currently deployed products.</p>
          </div>
          <div className="pd-usecase-chips">
            {AI_CORE_USECASES.map((u) => <span key={u} className="pd-usecase-chip">{u}</span>)}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section" style={{ background: "var(--deep)", borderTop: "1px solid var(--dark-border)" }}>
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "40px" }}>
            <p className="eyebrow eyebrow--dark"><span />PRODUCT ROADMAP / DEVELOPMENT DIRECTION</p>
            <h2>Development Roadmap</h2>
          </div>
          <div className="pd-roadmap">
            {AI_CORE_ROADMAP.map((phase, i) => (
              <div key={phase.phase} className="pd-phase">
                <span className="pd-phase-label">{phase.phase}</span>
                <div className="pd-phase-line" aria-hidden="true" />
                <h3>{phase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />EXPLORE AI</p>
            <h2>Explore<br /><span>AI Automation</span></h2>
            <p>Interested in AI-enabled workflows, intelligent business systems or AI product consulting?</p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/services/automation" className="button button--primary" style={{ minHeight: "54px", padding: "0 32px", fontSize: "15px" }}>
              Explore AI Automation <Arrow />
            </Link>
            <Link to="/products" className="button button--secondary" style={{ minHeight: "54px", padding: "0 32px", fontSize: "15px" }}>
              View AutoSol Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ──────────────────────────── CRM PAGE ──────────────────────────── */
function CrmPage() {
  return (
    <>
      <Seo
        title="AutoSol CRM | AI-Powered CRM in Development"
        description="AutoSol CRM is being designed for small and growing businesses to manage leads, customers, follow-ups, pipeline and communication with AI assistance."
      />
      {/* Hero */}
      <section className="pd-hero" style={{ "--pd-color": "#00aadd" } as React.CSSProperties}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="container pd-hero-inner">
          <div className="pd-hero-copy">
            <Link to="/products" className="breadcrumb">← Products</Link>
            <span className="badge badge--amber"><i /> IN DEVELOPMENT</span>
            <p className="pd-product-num">PRODUCT 02</p>
            <h1>AutoSol CRM</h1>
            <p className="pd-tagline">Manage customers. Automate follow-ups. Understand your business.</p>
            <p className="pd-lead">AutoSol CRM is being designed for small and growing businesses that manage leads and customer relationships across WhatsApp, spreadsheets, phone calls and manual processes.</p>
            <p style={{ color: "#64788f", fontSize: "14px", lineHeight: 1.8, maxWidth: "520px", marginTop: "12px" }}>
              The goal is to bring customer information, sales activity, follow-ups, communication, AI assistance and business workflows into one connected environment.
            </p>
          </div>
          <div className="pd-crm-pipeline" aria-hidden="true">
            <p style={{ color: "#4b607e", fontSize: "10px", fontWeight: 700, letterSpacing: ".12em", marginBottom: "16px" }}>SALES PIPELINE</p>
            {CRM_PIPELINE.map((p, i, arr) => (
              <div key={p.stage} className="pd-crm-pipe-item">
                <div className="pd-crm-pipe-node">{p.stage}</div>
                {i < arr.length - 1 && <div className="pd-crm-pipe-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />PROBLEM</p>
            <h2>Why AutoSol CRM?</h2>
          </div>
          <div className="pd-why-layout">
            <div>
              <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px" }}>
                Many businesses manage customer information across WhatsApp, Excel, phone calls, notes, email, spreadsheets and multiple disconnected tools. This can make customer history, follow-ups and sales activity difficult to organize.
              </p>
              <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: 1.8 }}>
                AutoSol CRM is designed around connecting these activities into a structured business workflow.
              </p>
            </div>
            <div className="pd-need-chips">
              {["WhatsApp", "Excel", "Phone Calls", "Notes", "Email", "Spreadsheets", "Multiple Tools"].map((n) => (
                <span key={n} className="pd-need-chip">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />PLANNED MODULES</p>
            <h2>CRM Module System</h2>
          </div>
          <div className="pd-modules-grid">
            {CRM_MODULES.map((m, i) => (
              <div key={m} className="pd-module-card">
                <span className="pd-module-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pd-module-name">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline detail */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />SALES WORKFLOW</p>
            <h2>Sales Pipeline</h2>
          </div>
          <div className="pd-pipeline-row">
            {CRM_PIPELINE.map((p, i, arr) => (
              <div key={p.stage} className="pd-pipe-card">
                <div className="pd-pipe-stage">{p.stage}</div>
                <p>{p.desc}</p>
                {i < arr.length - 1 && <span className="pd-pipe-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="section dark-surface">
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "40px" }}>
            <p className="eyebrow eyebrow--dark"><span />AI CAPABILITIES / PRODUCT DIRECTION</p>
            <h2>AI Inside the CRM</h2>
            <p style={{ color: "#8292a8", fontSize: "14px", marginTop: "8px" }}>These are product capabilities and development direction — not all currently implemented.</p>
          </div>
          <div className="pd-caps-grid">
            {CRM_AI.map((cap) => (
              <div key={cap.title} className="pd-cap-card pd-cap-card--dark">
                <h3>{cap.title}</h3>
                <p>{cap.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Traditional CRM */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "36px" }}>
            <p className="eyebrow"><span />PRODUCT DIRECTION</p>
            <h2>Beyond Traditional CRM</h2>
          </div>
          <div className="pd-usecase-chips" style={{ justifyContent: "flex-start" }}>
            {CRM_BEYOND.map((b) => <span key={b} className="pd-usecase-chip pd-usecase-chip--light">{b}</span>)}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "36px" }}>
            <p className="eyebrow"><span />TARGET AUDIENCE</p>
            <h2>Designed For</h2>
            <p style={{ color: "var(--text)", fontSize: "14px", marginTop: "8px" }}>These represent the businesses we are designing AutoSol CRM for — not current customers.</p>
          </div>
          <div className="pd-target-chips">
            {CRM_TARGET.map((t) => <span key={t} className="pd-target-chip">{t}</span>)}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section" style={{ background: "var(--deep)", borderTop: "1px solid var(--dark-border)" }}>
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "40px" }}>
            <p className="eyebrow eyebrow--dark"><span />PRODUCT ROADMAP / DEVELOPMENT DIRECTION</p>
            <h2>Development Roadmap</h2>
          </div>
          <div className="pd-roadmap">
            {CRM_ROADMAP.map((phase) => (
              <div key={phase.phase} className="pd-phase">
                <span className="pd-phase-label">{phase.phase}</span>
                <div className="pd-phase-line" aria-hidden="true" />
                <h3>{phase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />BUSINESS SYSTEMS</p>
            <h2>Need a CRM<br /><span>or Business System?</span></h2>
            <p>Looking to improve how you manage customers, leads and follow-ups? Let us understand your workflow.</p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/services/crm" className="button button--primary" style={{ minHeight: "54px", padding: "0 32px", fontSize: "15px" }}>
              CRM Services <Arrow />
            </Link>
            <Link to="/products" className="button button--secondary" style={{ minHeight: "54px", padding: "0 32px", fontSize: "15px" }}>
              View AutoSol Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ──────────────────────────── BUSINESS OS PAGE ──────────────────────────── */
function BusinessOsPage() {
  return (
    <>
      <Seo
        title="AutoSol Business OS | Connected Business Platform Vision"
        description="AutoSol Business OS is a long-term product vision connecting CRM, sales, inventory, purchase, marketing, analytics, AI and automation into one business environment."
      />
      {/* Hero */}
      <section className="pd-hero" style={{ "--pd-color": "#7c3aed" } as React.CSSProperties}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" />
        <div className="container pd-hero-inner">
          <div className="pd-hero-copy">
            <Link to="/products" className="breadcrumb">← Products</Link>
            <span className="badge badge--purple"><i /> PRODUCT VISION</span>
            <p className="pd-product-num">PRODUCT 03</p>
            <h1>AutoSol Business OS</h1>
            <p className="pd-tagline">A connected operating system for the modern business.</p>
            <p className="pd-lead">AutoSol Business OS is the long-term product vision for bringing CRM, sales, operations, inventory, marketing, documents, analytics, automation and AI into one connected business environment.</p>
          </div>
          <div className="pd-bos-visual" aria-hidden="true">
            <p style={{ color: "#4b607e", fontSize: "10px", fontWeight: 700, letterSpacing: ".12em", marginBottom: "16px" }}>CONNECTED WORKFLOW</p>
            {BOS_WORKFLOW.map((node, i, arr) => (
              <div key={node} className="pd-bos-node-item">
                <div className="pd-bos-node">{node}</div>
                {i < arr.length - 1 && <div className="pd-arch-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section" style={{ background: "var(--light)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />THE PROBLEM</p>
            <h2>One Business. Many Processes. One Connected System.</h2>
          </div>
          <div className="pd-why-layout">
            <p style={{ color: "var(--text)", fontSize: "15px", lineHeight: 1.8 }}>
              Businesses often use separate tools for CRM, sales, inventory, purchase, marketing, HR, projects, documents and analytics. The Business OS concept is designed to connect these operational areas instead of treating them as isolated systems.
            </p>
            <div className="pd-need-chips">
              {["CRM", "Sales", "Inventory", "Purchase", "Marketing", "HR", "Projects", "Documents", "Analytics"].map((n) => (
                <span key={n} className="pd-need-chip">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <p className="eyebrow"><span />PLANNED PLATFORM MODULES</p>
            <h2>Business OS Modules</h2>
          </div>
          <div className="pd-modules-grid">
            {BOS_MODULES.map((m, i) => (
              <div key={m} className="pd-module-card pd-module-card--purple">
                <span className="pd-module-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="pd-module-name">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Layer */}
      <section className="section dark-surface">
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "36px" }}>
            <p className="eyebrow eyebrow--dark"><span />PRODUCT DIRECTION</p>
            <h2>AI Layer Inside Business OS</h2>
            <p style={{ color: "#8292a8", fontSize: "14px", marginTop: "8px" }}>These are product vision capabilities — not current production features.</p>
          </div>
          <div className="pd-usecase-chips">
            {BOS_AI.map((a) => <span key={a} className="pd-usecase-chip">{a}</span>)}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section" style={{ background: "var(--deep)", borderTop: "1px solid var(--dark-border)" }}>
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "40px" }}>
            <p className="eyebrow eyebrow--dark"><span />FUTURE ARCHITECTURE</p>
            <h2>How the Products Connect</h2>
          </div>
          <div className="ecosystem-layers">
            {BOS_ARCH.map((layer, i, arr) => (
              <div key={layer.label} className="eco-layer-item">
                <div className="eco-layer-node">
                  <strong>{layer.label}</strong>
                  <small>{layer.sub}</small>
                </div>
                {i < arr.length - 1 && <div className="eco-layer-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section" style={{ background: "var(--dark)", borderTop: "1px solid var(--dark-border)" }}>
        <div className="container">
          <div className="section-head section-head--light" style={{ marginBottom: "40px" }}>
            <p className="eyebrow eyebrow--dark"><span />LONG-TERM PRODUCT VISION</p>
            <h2>Development Roadmap</h2>
          </div>
          <div className="pd-roadmap">
            {BOS_ROADMAP.map((phase) => (
              <div key={phase.phase} className="pd-phase">
                <span className="pd-phase-label">{phase.phase}</span>
                <div className="pd-phase-line" aria-hidden="true" />
                <h3>{phase.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section contact">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--dark"><span />BUILD WITH US</p>
            <h2>Need a Connected<br /><span>Business System?</span></h2>
            <p>From CRM to full business operations — we build systems around your actual workflow.</p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/contact" className="button button--primary" style={{ minHeight: "54px", padding: "0 32px", fontSize: "15px" }}>
              Start a Project <Arrow />
            </Link>
            <Link to="/products" className="button button--secondary" style={{ minHeight: "54px", padding: "0 32px", fontSize: "15px" }}>
              View AutoSol Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ──────────────────────────── ROUTER ──────────────────────────── */
export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  if (slug === "ai-core") return <AiCorePage />;
  if (slug === "crm") return <CrmPage />;
  if (slug === "business-os") return <BusinessOsPage />;

  return (
    <section className="section" style={{ background: "var(--deep)", minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 style={{ color: "white", marginBottom: "16px" }}>Product Not Found</h1>
        <Link to="/products" className="button button--primary">View Products <Arrow /></Link>
      </div>
    </section>
  );
}
