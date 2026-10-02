import Work from "@/views/Work";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies from AutoSol Technologies, including e-commerce, government systems, CRM, ERP, mobile apps and business websites.",
  path: "/work",
});

export default function Page() {
  return <Work />;
}
