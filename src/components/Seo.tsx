import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

const SITE_NAME = "AutoSol Technologies";
const SITE_URL = "https://autosol-web.netlify.app";
const BUSINESS_LOCATION = "Kolhapur, Maharashtra, India";
const DEFAULT_DESC =
  "AutoSol Technologies delivers AI solutions, automation systems, CRM, ERP, web development, mobile app development, and digital transformation services for growing businesses in India.";
const DEFAULT_KEYWORDS =
  "AutoSol Technologies, AI solutions, software development company, automation company, CRM development, ERP software, web development, mobile app development, business automation, AI consulting, Kolhapur Maharashtra";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

type Props = {
  title: string;
  description?: string;
  canonical?: string;
};

export default function Seo({ title, description = DEFAULT_DESC, canonical }: Props) {
  const location = useLocation();
  const fullTitle = `${title} | ${SITE_NAME}`;
  const currentPath = `${location.pathname}${location.search}`;
  const canonicalUrl = canonical ?? `${SITE_URL}${currentPath}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: DEFAULT_IMAGE,
    description: DEFAULT_DESC,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolhapur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: "IN",
    foundLocation: {
      "@type": "Place",
      name: BUSINESS_LOCATION,
    },
    sameAs: [
      "https://www.linkedin.com/in/autosoltechnologies-4b948043a",
      "https://www.instagram.com/autosoltechnologies",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={SITE_NAME} />
      <meta name="keywords" content={DEFAULT_KEYWORDS} />
      <meta name="theme-color" content="#090e1b" />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Kolhapur, Maharashtra" />
      <meta name="geo.position" content="16.7050;74.2433" />
      <meta name="ICBM" content="16.7050, 74.2433" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} technology and automation solutions`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:site" content="@AutoSolTech" />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
