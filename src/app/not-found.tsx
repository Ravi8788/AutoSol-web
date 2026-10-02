import NotFound from "@/views/NotFound";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Page not found",
  description: "This page does not exist on the AutoSol Technologies website.",
  path: "/404",
  noIndex: true,
});

export default function Page() {
  return <NotFound />;
}
