import Products from "@/views/Products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "AutoSol is building AI Core, CRM and Business OS — a connected product ecosystem for intelligence, customers and operations.",
  path: "/products",
});

export default function Page() {
  return <Products />;
}
