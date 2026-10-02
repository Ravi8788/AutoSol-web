import JsonLd from "@/components/JsonLd";
import { services } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import ServiceDetail from "@/views/ServiceDetail";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.filter((service) => service.slug !== "support").map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return pageMetadata({
      title: "Service not found",
      description: "This service page does not exist.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }
  return pageMetadata({
    title: `${service.name} services`,
    description: `${service.copy} Includes ${service.capabilities.slice(0, 4).join(", ")}.`,
    path: `/services/${slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return (
    <>
      {service && (
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${slug}` },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.name,
              description: service.copy,
              url: `${SITE_URL}/services/${slug}`,
              serviceType: service.name,
              areaServed: "IN",
              provider: { "@id": `${SITE_URL}/#organization` },
            },
          ]}
        />
      )}
      <ServiceDetail />
    </>
  );
}
