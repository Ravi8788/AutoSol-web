import JsonLd from "@/components/JsonLd";
import { products } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import ProductDetail from "@/views/ProductDetail";

const copy: Record<string, { title: string; description: string }> = {
  "ai-core": {
    title: "AI Core",
    description:
      "AutoSol AI Core is a reusable intelligence layer in development for language models, retrieval, agents, tools and business workflows.",
  },
  crm: {
    title: "CRM",
    description:
      "AutoSol CRM is in development for small businesses that manage leads, follow-ups and customer conversations across WhatsApp and spreadsheets.",
  },
  "business-os": {
    title: "Business OS",
    description:
      "AutoSol Business OS is a product vision connecting CRM, sales, inventory, marketing, analytics and AI in one business environment.",
  },
};

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = copy[slug];
  if (!product) {
    return pageMetadata({
      title: "Product not found",
      description: "This product page does not exist.",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }
  return pageMetadata({
    title: product.title,
    description: product.description,
    path: `/products/${slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  const details = copy[slug];

  return (
    <>
      {product && details && (
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: product.name, path: `/products/${slug}` },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: product.name,
              description: details.description,
              url: `${SITE_URL}/products/${slug}`,
              applicationCategory: "BusinessApplication",
              creator: { "@id": `${SITE_URL}/#organization` },
            },
          ]}
        />
      )}
      <ProductDetail />
    </>
  );
}
