import JsonLd from "@/components/JsonLd";
import { projects } from "@/data/site";
import { breadcrumbJsonLd, pageMetadata, SITE_URL } from "@/lib/seo";
import ProjectDetail from "@/views/ProjectDetail";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return pageMetadata({
      title: "Project not found",
      description: "This project page does not exist.",
      path: `/work/${slug}`,
      noIndex: true,
    });
  }
  return pageMetadata({
    title: project.name,
    description: project.copy,
    path: `/work/${slug}`,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return (
    <>
      {project && (
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Work", path: "/work" },
              { name: project.name, path: `/work/${slug}` },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: project.name,
              description: project.copy,
              url: `${SITE_URL}/work/${slug}`,
              creator: { "@id": `${SITE_URL}/#organization` },
              ...(project.link ? { sameAs: project.link } : {}),
            },
          ]}
        />
      )}
      <ProjectDetail />
    </>
  );
}
