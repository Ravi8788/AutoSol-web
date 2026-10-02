import Industries from "@/views/Industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Software, AI and automation for agriculture, e-commerce, healthcare, education, logistics, hospitality and other sectors.",
  path: "/solutions",
  canonical: "/industries",
});

export default function Page() {
  return <Industries />;
}
