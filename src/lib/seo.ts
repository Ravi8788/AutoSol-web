import type { Metadata } from "next";

export const SITE_URL = "https://www.autosoltechnologies.com";
export const SITE_NAME = "AutoSol Technologies";
export const SITE_DESCRIPTION =
  "AutoSol Technologies delivers AI solutions, automation systems, CRM, ERP, web development, mobile app development, and digital transformation services for growing businesses in India.";

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "AutoSol Technologies technology and automation solutions",
};

function clip(text: string, max = 158) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const boundary = cut.lastIndexOf(" ");
  return `${(boundary > 80 ? cut.slice(0, boundary) : cut).trim()}…`;
}

export function pageMetadata({
  title,
  description,
  path,
  canonical,
  absolute = false,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  canonical?: string;
  absolute?: boolean;
  noIndex?: boolean;
}): Metadata {
  const summary = clip(description);
  const canonicalPath = canonical ?? path;
  const branded = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absolute ? { absolute: branded } : title,
    description: summary,
    alternates: { canonical: canonicalPath },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonicalPath,
      siteName: SITE_NAME,
      title: branded,
      description: summary,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description: summary,
      images: [OG_IMAGE.url],
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

