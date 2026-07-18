import "server-only";

import type { Locale } from "@/i18n/routing";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

const projectsByLocale: Record<Locale, typeof en.projects> = { en: en.projects, es: es.projects };

export function getAllProjectSlugs(): { locale: Locale; slug: string }[] {
  const slugs: { locale: Locale; slug: string }[] = [];
  for (const locale of ["en", "es"] as Locale[]) {
    for (const item of projectsByLocale[locale].items) {
      slugs.push({ locale, slug: item.slug });
    }
  }
  return slugs;
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return projectsByLocale[locale].items.find((p) => p.slug === slug) ?? null;
}
