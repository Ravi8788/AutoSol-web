import Contact from "@/views/Contact";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact AutoSol Technologies in Kolhapur to discuss AI, software, automation, CRM, ERP or digital product work.",
  path: "/contact",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/contact`,
            name: "Contact AutoSol Technologies",
            mainEntity: { "@id": `${SITE_URL}/#organization` },
          },
        ]}
      />
      <Contact />
    </>
  );
}
