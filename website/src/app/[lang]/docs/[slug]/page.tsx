import { setRequestLocale } from "next-intl/server";

import { NotFound } from "@/components/NotFound";
import markdownToHtml from "@/lib/markdownToHtml";
import { getDocBySlug, getDocs } from "@/lib/api";
import { SITE_BASE_PATH, SITE_NAME } from "@/lib/constants";
import { languagesList, defaultLang } from "@/i18n/settings";
import type { Doc } from "@/types";

import { ClientSlug } from "./client";

export default async function Doc({
  params,
}: PageProps<"/[lang]/docs/[slug]">) {
  const { lang, slug } = await params;
  // Enable static rendering
  setRequestLocale(lang);

  const doc = getDocBySlug(
    slug,
    ["title", "date", "slug", "author", "content"],
    lang
  ) as Doc;
  doc.content = await markdownToHtml(doc.content || "");

  if (!doc?.slug) {
    return <NotFound />;
  }

  return <ClientSlug doc={doc} />;
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/docs/[slug]">) {
  const { slug, lang } = await params;
  const doc = getDocBySlug(slug, ["title", "slug"], lang);
  return {
    title: `${doc.title} | ${SITE_NAME}`,
    alternates: {
      canonical: `${SITE_BASE_PATH}/${defaultLang}/docs/${doc.slug}`,
    },
  };
}

export const dynamicParams = false; // true | false. default true
export function generateStaticParams() {
  const params = [];

  for (const lang of languagesList) {
    const docs = getDocs(["slug"], lang);
    for (const doc of docs) {
      params.push({ lang, slug: doc.slug });
    }
  }
  return params;
}
