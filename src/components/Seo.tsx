import { Helmet } from "react-helmet-async";

const SITE_NAME = "AutoSol Technologies";
const DEFAULT_DESC =
  "AutoSol Technologies builds AI systems, custom software, automation workflows, CRM, ERP, web and mobile applications for growing businesses.";

type Props = {
  title: string;
  description?: string;
  canonical?: string;
};

export default function Seo({ title, description = DEFAULT_DESC, canonical }: Props) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
