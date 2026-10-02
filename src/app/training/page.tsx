import Training from "@/views/Training";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Training",
  description:
    "Hands-on training from AutoSol Technologies in AI, Python, data science, LLM engineering, full-stack development and cloud.",
  path: "/training",
});

export default function Page() {
  return <Training />;
}
