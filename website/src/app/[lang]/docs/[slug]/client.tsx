"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";

import Link from "@/Link";
import type { Doc } from "@/types";

import { Layout } from "@/components/Layout";
import { ScrollTop } from "@/components/ScrollTop";

const MarkdownContent = styled("div")`
  pre {
    /* @noflip */
    direction: ltr;
  }
`;

export function LinkTitle({ href, title }: { href: string; title: string }) {
  const theme = useTheme();
  return (
    <Typography
      variant="h5"
      component="h1"
      sx={{
        color: "text",
        borderBottom: 1,
        borderBottomColor: theme.vars?.palette.divider,
        mb: 2,
        width: "100%",
        display: "block",
      }}
    >
      <Link href={href} sx={{ color: "inherit" }}>
        {title}
      </Link>
    </Typography>
  );
}

export function ClientSlug({ doc }: {doc: Doc}) {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            px: 2,
            mt: 2,
            maxWidth: {
              xs: "100%", // theme.breakpoints.up('xs')
              md: 900,
            },
            minWidth: {
              xs: "100%", // theme.breakpoints.up('xs')
              sm: 600,
            },
            overflowX: "auto",
          }}
        >
          <article dir="auto">
            <LinkTitle href={`/docs/${doc.slug}`} title={doc.title}/>
            <Box
              sx={{
                // "& h3": { color: theme.vars?.palette.secondary.main },
                "& pre": { px: 2, maxHeight: "300px", overflow: "auto" },
              }}
              data-nosnippet
            >
              <MarkdownContent
                dangerouslySetInnerHTML={{ __html: doc.content }}
              />
            </Box>
          </article>
          <ScrollTop />
        </Box>
      </Box>
    </Layout>
  );
}