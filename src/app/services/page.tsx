import Services from "@/views/Services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "AI, software, web, mobile, CRM, ERP, automation, data, marketing and IoT services from AutoSol Technologies.",
  path: "/services",
});

export default function Page() {
  return <Services />;
}
