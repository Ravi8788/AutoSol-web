export type ProductStatus = "IN DEVELOPMENT" | "PRODUCT VISION" | "PROTOTYPE" | "COMING SOON";

export type RoadmapPhase = { phase: string; title: string; items?: string[] };

export type Product = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  statusVariant: "amber" | "purple" | "blue";
  shortDesc: string;
  longDesc: string;
  chips: string[];
  color: string;
};

export const products: Product[] = [
  {
    slug: "ai-core",
    index: "01",
    name: "AutoSol AI Core",
    tagline: "The intelligence layer behind future AutoSol products.",
    status: "IN DEVELOPMENT",
    statusVariant: "amber",
    shortDesc: "A reusable AI infrastructure layer for language models, retrieval, agents, workflows and business context.",
    longDesc: "AutoSol AI Core is being designed as a reusable intelligence layer for powering AI-enabled applications, business workflows and future AutoSol products. Instead of rebuilding AI capabilities separately inside every application, AI Core is intended to provide a shared foundation for language models, business context, retrieval, agents, tools, workflows and evaluation.",
    chips: ["LLM Integration", "RAG", "Vector Search", "AI Agents", "Tool Calling", "Embeddings"],
    color: "#0052e8",
  },
  {
    slug: "crm",
    index: "02",
    name: "AutoSol CRM",
    tagline: "Manage customers. Automate follow-ups. Understand your business.",
    status: "IN DEVELOPMENT",
    statusVariant: "amber",
    shortDesc: "A connected CRM designed for businesses managing leads through WhatsApp, spreadsheets and manual processes.",
    longDesc: "AutoSol CRM is being designed for small and growing businesses that manage leads and customer relationships across WhatsApp, spreadsheets, phone calls and manual processes. The goal is to bring customer information, sales activity, follow-ups, communication, AI assistance and business workflows into one connected environment.",
    chips: ["Leads", "Pipeline", "Follow-Ups", "AI Assistant", "Automation", "Analytics"],
    color: "#00aadd",
  },
  {
    slug: "business-os",
    index: "03",
    name: "AutoSol Business OS",
    tagline: "A connected operating system for the modern business.",
    status: "PRODUCT VISION",
    statusVariant: "purple",
    shortDesc: "A long-term platform vision connecting CRM, sales, operations, inventory, marketing, analytics and AI.",
    longDesc: "AutoSol Business OS is the long-term product vision for bringing CRM, sales, operations, inventory, marketing, documents, analytics, automation and AI into one connected business environment.",
    chips: ["CRM", "Sales", "Inventory", "Projects", "Analytics", "AI"],
    color: "#7c3aed",
  },
];
