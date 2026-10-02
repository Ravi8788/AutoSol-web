import Home from "@/views/Home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI, Software & Automation Solutions",
  description:
    "AutoSol Technologies builds AI systems, custom software, automation workflows, CRM, ERP, web and mobile applications for growing businesses.",
  path: "/",
  absolute: true,
});

export default function Page() {
  return <Home />;
}
