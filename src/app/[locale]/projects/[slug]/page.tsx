import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/routing";
import { getDictionary } from "@/lib/messages";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import ProjectDetailContent from "@/components/pages/ProjectDetailContent";

export function generateStaticParams() {
  return getAllProjectSlugs();
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale as Locale);
  const project = getProjectBySlug(locale as Locale, slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailContent
      locale={locale}
      project={project}
      backLabel={dict.projects.backLabel}
    />
  );
}
