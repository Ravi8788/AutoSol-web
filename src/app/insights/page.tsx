import Insights from "@/views/Insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Notes from AutoSol Technologies on AI, automation, software engineering, data, CRM and digital product work.",
  path: "/insights",
});

export default function Page() {
  return <Insights />;
}
