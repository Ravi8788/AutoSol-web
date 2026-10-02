import Support from "@/views/Support";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "12-Month Technology Care",
  description:
    "Structured post-launch support for eligible AutoSol projects, including bug fixes, technical guidance and deployment help.",
  path: "/services/support",
});

export default function Page() {
  return <Support />;
}
