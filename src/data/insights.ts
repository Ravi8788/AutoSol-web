export type Insight = {
  slug: string;
  title: string;
  category: string;
  description: string;
  status: "DRAFT" | "COMING SOON" | "PUBLISHED";
  featured?: boolean;
  topics?: string[];
};

export const insights: Insight[] = [
  {
    slug: "what-is-generative-ai-business-use",
    title: "What Is Generative AI and How Businesses Can Use It",
    category: "AI & GenAI",
    description: "A practical introduction to generative AI, large language models and real business use cases across customer support, documents, content and internal workflows.",
    status: "DRAFT",
    featured: true,
    topics: ["Generative AI", "LLMs", "AI assistants", "Content workflows", "Document processing", "Business automation"],
  },
  {
    slug: "ai-agents-vs-traditional-automation",
    title: "AI Agents vs Traditional Automation: What Is the Difference?",
    category: "AI Automation",
    description: "Traditional automation follows predefined rules. AI agents can interpret information, decide which tools to use and complete multi-step tasks under defined controls.",
    status: "DRAFT",
  },
  {
    slug: "rag-business-knowledge",
    title: "How RAG Helps AI Work With Business Knowledge",
    category: "AI & GenAI",
    description: "Retrieval-Augmented Generation connects AI systems with business documents and structured knowledge. Understand embeddings, retrieval and vector search.",
    status: "DRAFT",
  },
  {
    slug: "automated-lead-workflows",
    title: "From Manual Lead Handling to Automated Lead Workflows",
    category: "AI Automation",
    description: "See how businesses can connect lead capture, qualification, CRM updates, assignment, follow-ups and notifications into one structured workflow.",
    status: "DRAFT",
  },
  {
    slug: "crm-and-automation",
    title: "Why CRM and Automation Work Better Together",
    category: "CRM & Business Systems",
    description: "A CRM stores customer information. Automation turns that information into action through reminders, follow-ups, workflows and business processes.",
    status: "DRAFT",
  },
  {
    slug: "building-a-saas-product",
    title: "Building a SaaS Product: From Idea to Scalable Architecture",
    category: "SaaS & Products",
    description: "A practical look at the journey from problem definition and MVP planning to architecture, APIs, databases, authentication and deployment.",
    status: "DRAFT",
  },
  {
    slug: "data-quality-and-ai",
    title: "Why Data Quality Matters More Than AI Hype",
    category: "Data & Analytics",
    description: "AI systems depend on the quality of the information behind them. Explore data collection, consistency, cleaning, modeling and AI readiness.",
    status: "DRAFT",
  },
  {
    slug: "rest-apis-and-webhooks",
    title: "REST APIs and Webhooks: The Foundation of Connected Software",
    category: "Software Engineering",
    description: "Understand how APIs and webhooks allow websites, CRMs, payment systems, AI services and business applications to communicate.",
    status: "DRAFT",
  },
  {
    slug: "whatsapp-crm-automation",
    title: "Connecting WhatsApp, CRM and Automation for Modern Businesses",
    category: "CRM & Business Systems",
    description: "Many businesses operate through WhatsApp. Explore how conversations, leads, customer records and follow-up workflows can be connected.",
    status: "DRAFT",
  },
  {
    slug: "choosing-business-software",
    title: "What Small Businesses Should Look for in Business Software",
    category: "Technology Strategy",
    description: "Choosing business software is about more than features. Explore usability, integrations, scalability, security, automation and long-term fit.",
    status: "DRAFT",
  },
  {
    slug: "manual-processes-to-digital-workflows",
    title: "From Manual Processes to Intelligent Digital Workflows",
    category: "AI Automation",
    description: "A practical framework for identifying repetitive work, mapping processes, digitizing operations and introducing automation where it helps.",
    status: "DRAFT",
  },
  {
    slug: "building-final-year-project",
    title: "How to Build a Strong Final-Year Technology Project",
    category: "Learning & Development",
    description: "A practical guide for students from choosing a real problem to requirements, architecture, development, testing, documentation and presentation.",
    status: "DRAFT",
  },
  {
    slug: "cloud-and-devops",
    title: "Why Cloud and DevOps Matter for Modern Applications",
    category: "Cloud & DevOps",
    description: "Understand how deployment, containers, CI/CD, infrastructure, monitoring and operational practices help software reach reliable environments.",
    status: "DRAFT",
  },
  {
    slug: "performance-marketing-fundamentals",
    title: "Performance Marketing: Turning Attention Into Measurable Actions",
    category: "Digital Growth",
    description: "Explore the fundamentals of performance marketing including audience targeting, campaign structure, landing pages and conversion optimization.",
    status: "DRAFT",
  },
  {
    slug: "technical-seo-foundations",
    title: "Technical SEO Foundations for Modern Websites",
    category: "Digital Growth",
    description: "A practical overview of crawlability, metadata, page structure, internal linking, performance, Core Web Vitals and search visibility.",
    status: "DRAFT",
  },
  {
    slug: "when-to-build-custom-software",
    title: "When Should a Business Build Custom Software?",
    category: "Software Engineering",
    description: "Custom software can be useful when existing tools do not match a business process. Explore signals that indicate when customization may be appropriate.",
    status: "DRAFT",
  },
];
