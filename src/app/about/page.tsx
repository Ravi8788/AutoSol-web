import About from "@/views/About";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "AutoSol Technologies is a software and AI company in Kolhapur building intelligent systems, automation workflows and digital products for growing businesses.",
  path: "/about",
});

export default function Page() {
  return <About />;
}
