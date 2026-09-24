export type IconName =
  | "ai"
  | "automation"
  | "code"
  | "web"
  | "mobile"
  | "data"
  | "cloud"
  | "design"
  | "growth";

export type Service = {
  name: string;
  copy: string;
  tags: string[];
  icon: IconName;
  featured?: boolean;
  slug: string;
  group: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "ai",
    name: "AI & GenAI",
    icon: "ai",
    featured: true,
    copy: "Practical intelligence for assistants, agents, knowledge systems and business workflows.",
    tags: ["LLM integration", "RAG", "AI agents", "Vector search"],
    group: "AI, Software & Engineering",
    capabilities: ["Generative AI", "LLM integration", "AI assistants", "AI agents", "RAG", "Embeddings", "Vector search", "Document intelligence", "AI APIs", "Prompt engineering", "AI consulting"],
  },
  {
    slug: "automation",
    name: "AI Automation",
    icon: "automation",
    copy: "Connected workflows that remove repetitive work while keeping people in control.",
    tags: ["Workflow", "CRM", "WhatsApp", "Documents"],
    group: "AI, Software & Engineering",
    capabilities: ["AI workflow automation", "Business process automation", "Agentic workflows", "CRM automation", "Lead automation", "Email automation", "WhatsApp automation", "Document automation", "Human-in-the-loop workflows", "API/webhook automation"],
  },
  {
    slug: "software",
    name: "Software Development",
    icon: "code",
    copy: "Reliable custom software, business applications and product platforms built to evolve.",
    tags: ["Web apps", "APIs", "SaaS", "Dashboards"],
    group: "AI, Software & Engineering",
    capabilities: ["Custom software", "Business applications", "Admin portals", "Management systems", "Enterprise software", "Backend systems", "APIs", "Database-driven applications"],
  },
  {
    slug: "web",
    name: "Web Development",
    icon: "web",
    copy: "High-performance websites and web applications across all browsers and devices.",
    tags: ["React", "Next.js", "PWA", "E-commerce"],
    group: "AI, Software & Engineering",
    capabilities: ["Business websites", "Corporate websites", "E-commerce", "Web applications", "SaaS interfaces", "Portals", "PWA", "Responsive websites", "SEO-friendly websites"],
  },
  {
    slug: "mobile",
    name: "Mobile App Development",
    icon: "mobile",
    copy: "High-performance digital experiences across Android and iOS.",
    tags: ["Flutter", "React Native", "Android", "iOS"],
    group: "AI, Software & Engineering",
    capabilities: ["Android", "iOS", "Flutter", "React Native", "Business applications", "Customer applications", "Booking applications"],
  },
  {
    slug: "saas",
    name: "SaaS & Product Development",
    icon: "code",
    copy: "End-to-end product engineering from MVP to scalable multi-tenant SaaS.",
    tags: ["MVP", "SaaS", "Multi-tenant", "Subscriptions"],
    group: "AI, Software & Engineering",
    capabilities: ["MVP development", "SaaS architecture", "Product engineering", "Multi-tenant architecture", "Authentication", "Dashboards", "Subscription systems", "Product scaling"],
  },
  {
    slug: "crm",
    name: "CRM Development",
    icon: "growth",
    copy: "Custom CRM systems built around your sales process, not the other way around.",
    tags: ["Lead management", "Sales pipeline", "WhatsApp", "AI CRM"],
    group: "AI, Software & Engineering",
    capabilities: ["Custom CRM", "Lead management", "Customer management", "Sales pipeline", "Follow-ups", "Tasks", "Activities", "Communication tracking", "WhatsApp integration", "AI CRM", "CRM automation", "CRM dashboards"],
  },
  {
    slug: "business-systems",
    name: "ERP & Business Systems",
    icon: "data",
    copy: "Integrated operational systems connecting inventory, sales, HR and business intelligence.",
    tags: ["ERP", "Inventory", "Operations", "Dashboards"],
    group: "AI, Software & Engineering",
    capabilities: ["ERP", "Inventory", "Purchase", "Sales", "Operations", "HR workflows", "Business dashboards", "Custom business systems", "Integrated business platforms"],
  },
  {
    slug: "data",
    name: "Data Science & Analytics",
    icon: "data",
    copy: "Turn fragmented data into clear dashboards, pipelines and useful decisions.",
    tags: ["BI", "ML", "Pipelines", "Visualization"],
    group: "AI, Software & Engineering",
    capabilities: ["Data analytics", "Business intelligence", "Dashboards", "Data processing", "Data visualization", "Machine learning", "Predictive analytics", "Data pipelines", "Reporting systems"],
  },
  {
    slug: "integrations",
    name: "API & Integrations",
    icon: "cloud",
    copy: "Seamless connections across tools, APIs, platforms and payment systems.",
    tags: ["REST APIs", "Webhooks", "Payments", "WhatsApp API"],
    group: "AI, Software & Engineering",
    capabilities: ["REST APIs", "Webhooks", "Payment integrations", "WhatsApp Business API", "Meta integrations", "AI APIs", "CRM/ERP integrations", "Third-party integrations", "Data synchronization"],
  },
  {
    slug: "cloud",
    name: "Cloud & DevOps",
    icon: "cloud",
    copy: "Secure deployments and infrastructure built to scale reliably.",
    tags: ["Docker", "CI/CD", "VPS", "Monitoring"],
    group: "AI, Software & Engineering",
    capabilities: ["Cloud deployment", "Docker", "CI/CD", "Server deployment", "VPS", "Monitoring", "Database deployment", "Application scaling", "Infrastructure setup"],
  },
  {
    slug: "iot",
    name: "IoT & Smart Systems",
    icon: "automation",
    copy: "Connected device systems with real-time monitoring and AI intelligence.",
    tags: ["IoT", "Sensors", "Real-time", "Smart systems"],
    group: "AI, Software & Engineering",
    capabilities: ["IoT applications", "Sensors", "Device integration", "Monitoring", "Real-time dashboards", "Device APIs", "AI + IoT", "Smart systems"],
  },
  {
    slug: "ui-ux",
    name: "UI/UX Design",
    icon: "design",
    copy: "Research-led interfaces and design systems for complex products and workflows.",
    tags: ["UX", "UI systems", "Prototypes", "Design systems"],
    group: "AI, Software & Engineering",
    capabilities: ["UX research", "Wireframes", "UI design", "Design systems", "SaaS dashboards", "Mobile UI", "Prototypes", "User flows"],
  },
  {
    slug: "marketing",
    name: "Performance Marketing",
    icon: "growth",
    copy: "Data-driven Meta and Google campaigns engineered for measurable growth.",
    tags: ["Meta Ads", "Google Ads", "Lead gen", "ROAS"],
    group: "Digital Growth",
    capabilities: ["Meta Ads", "Google Ads", "Lead generation", "Campaign setup", "Audience targeting", "Retargeting", "Conversion optimization", "Landing page optimization", "Campaign analytics", "ROI/ROAS analysis", "Marketing automation", "Growth strategy"],
  },
  {
    slug: "seo",
    name: "SEO & Digital Growth",
    icon: "growth",
    copy: "Technical and content SEO that builds lasting search visibility.",
    tags: ["Technical SEO", "On-page", "Off-page", "Local SEO"],
    group: "Digital Growth",
    capabilities: ["Technical SEO", "On-page SEO", "Off-page SEO", "Local SEO", "Keyword research", "Competitor research", "Content strategy", "SEO content", "SEO audits", "Core Web Vitals", "Schema", "Search Console", "Analytics", "SEO reporting"],
  },
  {
    slug: "consulting",
    name: "Technology Consulting",
    icon: "design",
    copy: "Strategy-first technology advice connecting business problems to practical solutions.",
    tags: ["AI strategy", "Architecture", "Digital transformation", "MVP planning"],
    group: "Business & Professional",
    capabilities: ["AI strategy", "Software architecture", "Digital transformation", "Automation strategy", "Product strategy", "MVP planning", "Technology consulting"],
  },
  {
    slug: "training",
    name: "Training & Skill Development",
    icon: "code",
    copy: "Practical technology training through real project-based learning.",
    tags: ["AI & GenAI", "Python", "Full Stack", "Data Science"],
    group: "Business & Professional",
    capabilities: ["AI & GenAI", "Agentic AI", "Python", "Data Science", "Machine Learning", "LLM Engineering", "Full Stack", "Web Development", "Mobile", "Cloud", "IoT", "UI/UX", "Digital Marketing"],
  },
  {
    slug: "support",
    name: "12-Month Technology Care",
    icon: "code",
    copy: "Structured post-launch technical support for eligible project engagements. Build. Launch. Stay Supported.",
    tags: ["Post-launch support", "Bug resolution", "Technical guidance", "Project continuity"],
    group: "Business & Professional",
    capabilities: ["Bug & issue support", "Technical guidance", "Deployment assistance", "Minor adjustments", "Maintenance guidance", "Project continuity"],
  },
];

export type Project = {
  name: string;
  slug: string;
  category: string;
  filterCategories: string[];
  copy: string;
  tech: string[];
  status: "DEVELOPED" | "PROTOTYPE" | "IN DEVELOPMENT" | "PROPOSAL / SRS" | "PRODUCT VISION" | "DEVELOPED / PROJECT" | "PROJECT";
  featured?: boolean;
  image: string;
  color: string;
  link?: string;
};

export const projects: Project[] = [
  {
    name: "KVK Farmer Database Management System",
    slug: "kvk-farmer-management",
    category: "Government / Agriculture",
    filterCategories: ["Government", "Agriculture"],
    copy: "A desktop management system developed for Krishi Vigyan Kendra offices to manage farmer data and agricultural programme records.",
    tech: ["Python", "PyQt5", "PostgreSQL", "SQLAlchemy", "ReportLab", "PyInstaller"],
    status: "DEVELOPED",
    featured: true,
    image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#0d2e1a",
  },
  {
    name: "Swadeshi Mart",
    slug: "swadeshi-mart",
    category: "E-Commerce / ERP / CRM",
    filterCategories: ["E-Commerce", "ERP", "CRM"],
    copy: "A large-scale community-exclusive commerce platform combining e-commerce operations with ERP, CRM, HRM and MLM functionality.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "NextAuth"],
    status: "DEVELOPED / PROJECT",
    featured: true,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#1a0d2e",
  },
  {
    name: "RebelSalon",
    slug: "rebelsalon",
    category: "Mobile Application",
    filterCategories: ["Mobile"],
    copy: "A salon-focused mobile application designed around salon services, barber information and booking functionality.",
    tech: ["Java", "XML", "Firebase", "Android"],
    status: "DEVELOPED",
    featured: true,
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#2e0d1a",
  },
  {
    name: "Real Estate Website",
    slug: "real-estate",
    category: "Web Development / Real Estate",
    filterCategories: ["Web"],
    copy: "A modern responsive real-estate website focused on presenting properties and providing a professional digital experience.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    status: "DEVELOPED",
    featured: true,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#0d1a2e",
  },
  {
    name: "Inspiring E-Commerce Website",
    slug: "inspring-ecommerce",
    category: "E-Commerce / Web Development",
    filterCategories: ["E-Commerce", "Web"],
    copy: "A modern e-commerce website built for a product-focused online shopping experience.",
    tech: ["Web", "E-Commerce", "UI/UX"],
    status: "DEVELOPED",
    featured: true,
    link: "https://inspiring.in",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#1a1a0d",
  },
  {
    name: "Krushnai Amrutulya",
    slug: "krushnai-amrutulya",
    category: "Business Website",
    filterCategories: ["Web"],
    copy: "A digital business web project developed for Krushnai Amrutulya to establish their online presence.",
    tech: ["Web", "UI/UX", "Responsive Design"],
    status: "DEVELOPED",
    featured: true,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#1a0d0d",
  },
  {
    name: "Hotel Management System & CRM",
    slug: "hotel-management-crm",
    category: "Hospitality / CRM",
    filterCategories: ["CRM", "Hospitality"],
    copy: "A hotel-focused management and CRM solution connecting customer management, lead handling and business workflows.",
    tech: ["CRM", "Automation", "Business Systems"],
    status: "PROJECT",
    featured: false,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#0d1a1a",
  },
  {
    name: "Shoe Shop ERP & POS System",
    slug: "shoe-shop-erp-pos",
    category: "Retail / ERP / POS",
    filterCategories: ["Retail", "ERP"],
    copy: "A proposed retail management system designed around shoe-store inventory, sales and point-of-sale operations.",
    tech: ["ERP", "POS", "Inventory", "Billing"],
    status: "PROPOSAL / SRS",
    featured: false,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#1a1a1a",
  },
  {
    name: "Wedding & Engagement Invitation Websites",
    slug: "wedding-invitation-websites",
    category: "Creative Web / Animation",
    filterCategories: ["Creative Web", "Web"],
    copy: "A collection of premium digital wedding and engagement invitation websites with Indian and Maharashtrian visual themes.",
    tech: ["Next.js", "Framer Motion", "GSAP"],
    status: "DEVELOPED",
    featured: false,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    color: "#1a0d1a",
  },
];

export const products: {
  index: string;
  name: string;
  copy: string;
  badge: string;
  badgeVariant: "amber" | "purple";
  primary?: boolean;
}[] = [
  {
    index: "PRODUCT 01",
    name: "AutoSol AI Core",
    copy: "A shared intelligence layer powering future AutoSol products and intelligent business workflows.",
    badge: "In development",
    badgeVariant: "amber",
    primary: true,
  },
  {
    index: "PRODUCT 02",
    name: "AutoSol CRM",
    copy: "Manage. Automate. Grow. A connected CRM concept for small and growing businesses.",
    badge: "In development",
    badgeVariant: "amber",
  },
  {
    index: "PRODUCT 03",
    name: "Business OS",
    copy: "One connected operating system for CRM, sales, inventory, projects, data and automation.",
    badge: "Product vision",
    badgeVariant: "purple",
  },
];
