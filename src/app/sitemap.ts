import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { projects, services } from "@/data/site";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/products", priority: 0.8, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
    { path: "/training", priority: 0.7, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/services/support", priority: 0.7, changeFrequency: "yearly" },
  ];

  const servicePages = services
    .filter((service) => service.slug !== "support")
    .map((service) => ({ path: `/services/${service.slug}`, priority: 0.7, changeFrequency: "monthly" as const }));

  const productPages = products.map((product) => ({
    path: `/products/${product.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const workPages = projects.map((project) => ({
    path: `/work/${project.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...pages, ...servicePages, ...productPages, ...workPages].map((page) => ({
    url: page.path === "/" ? SITE_URL : `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
