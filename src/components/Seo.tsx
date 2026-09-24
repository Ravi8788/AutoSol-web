import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

const SITE_NAME = "AutoSol Technologies";
const SITE_URL = "https://autosol-web.netlify.app";
const DEFAULT_DESC =
  "AutoSol Technologies builds AI systems, custom software, automation workflows, CRM, ERP, web and mobile applications for growing businesses.";
const DEFAULT_KEYWORDS =
  "AI solutions, software development, automation, CRM, ERP, web app development, mobile app development, business automation, AI consulting";
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
    logo: DEFAULT_IMAGE,
    sameAs: [
      "https://www.linkedin.com",
      "https://www.facebook.com",
      "https://www.instagram.com",
    ],
    description: DEFAULT_DESC,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={SITE_NAME} />
      <meta name="keywords" content={DEFAULT_KEYWORDS} />
      <meta name="theme-color" content="#090e1b" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
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
