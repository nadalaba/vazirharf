import Box from "@mui/material/Box";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { Layout } from "@/components/Layout";
import { getDocs } from "@/lib/api";

import { LinkTitle } from "./client";

export async function generateMetadata({ params }: PageProps<"/[lang]/docs">) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "docs" });
  return {
    title: t("docs_pages"),
  };
}

export default async function Docs({ params }: PageProps<"/[lang]/docs">) {
  const { lang } = await params;
  // Enable static rendering
  setRequestLocale(lang);

  const docs = getDocs(["title", "date", "slug", "author", "lang"], lang);

  return (
    <Layout>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          maxWidth="md"
          sx={{
            mt: 2,
            px: 2,
            maxWidth: {
              xs: "100%", // theme.breakpoints.up('xs')
              md: 900,
            },
            minWidth: {
              xs: "100%", // theme.breakpoints.up('xs')
              sm: 600,
            },
          }}
        >
          <article>
            {docs.map((doc) => (
              <div key={doc.slug + (doc.lang || "")}>
                <LinkTitle
                  href={`/docs/${doc.slug}`}
                  title={doc.title}
                  lang={lang}
                />
              </div>
            ))}
          </article>
        </Box>
      </Box>
    </Layout>
  );
}

export { generateStaticParams } from "@/lib/getStatic";
