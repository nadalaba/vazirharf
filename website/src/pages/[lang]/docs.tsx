import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { getDocs } from "../../lib/api";
import { SITE_NAME } from "../../lib/constants";
import { Doc } from "../../types";
import Link from "../../Link";
import { Layout } from "../../components/Layout";
import { GetStaticProps } from "../../lib/getStatic";

type Props = {
  docs: Doc[];
  lang: string;
};

const Index = ({ docs, lang }: Props) => {
  const theme = useTheme();

  return (
    <Layout>
      <Head>
        <title>صفحات راهنما | {SITE_NAME}</title>
      </Head>
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
                <Typography
                  variant="subtitle1"
                  component="h2"
                  sx={{
                    color: "text",
                    borderBottom: 1,
                    borderBottomColor: theme.palette.divider,
                    mb: 2,
                  }}
                  dir="auto"
                >
                  <Link
                    href={`/docs/${doc.slug}`}
                    lang={lang}
                    sx={{ color: "inherit" }}
                  >
                    {doc.title}
                  </Link>
                </Typography>
              </div>
            ))}
          </article>
        </Box>
      </Box>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ params }: GetStaticProps) {
  const docs = getDocs(["title", "date", "slug", "author", "lang"], params.lang);
  return {
    props: { lang: params.lang, docs },
  };
}

export { getStaticPaths } from "../../lib/getStatic";
