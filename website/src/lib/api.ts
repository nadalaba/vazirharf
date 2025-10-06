import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { getLanguages } from "../i18n";

const docsDirectory = join(process.cwd(), "src/_docs");

export function getDocSlugs() {
  return fs.readdirSync(docsDirectory);
}

export function getDocBySlug(slug: string, fields: string[] = [], lang?: string) {
  const slugWithoutExtension = slug.replace(/\.md$/, "");
  const slugLangMatch = slugWithoutExtension.match(
    new RegExp(`-(${getLanguages().join("|")})$`)
  );
  let slugBaseName = slugWithoutExtension;
  if (slugLangMatch) slugBaseName = slugBaseName.replace(slugLangMatch[0], "");
  const slugLang = slugLangMatch ? slugLangMatch[1] : null;
  let fullPath = join(docsDirectory, `${slugWithoutExtension}.md`);
  if (lang && slugLang === null) {
    fullPath = join(docsDirectory, `${slugBaseName}-${lang}.md`);
    if(!fs.existsSync(fullPath)) fullPath = join(docsDirectory, `${slugBaseName}.md`);
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  type Items = {
    [key: string]: string;
  } & { lang?: string | null };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slugBaseName;
    }
    if (field === "lang") {
      items[field] = slugLang;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getDocs(fields: string[] = [], lang?: string) {
  let slugs = getDocSlugs();
  if (lang) {
    const excludeLangs = getLanguages().filter((lng) => lng !== lang);
    slugs = slugs.filter((slug) => {
      const slugWithoutExtension = slug.replace(/\.md$/, "");
      return !excludeLangs.some((exclLang) =>
        slugWithoutExtension.endsWith(`-${exclLang}`)
      );
    });
  }
  const docs = slugs
    .map((slug) => getDocBySlug(slug, fields))
    // sort docs by date in descending order
    .sort((doc1, doc2) => (doc1.date < doc2.date ? 1 : -1));
  return docs;
}
