"use client";

import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Link from "@/Link";

export function LinkTitle({href, title, lang}: {href: string, title: string, lang: string}) {
  const theme = useTheme();
  return (
    <Typography
      variant="subtitle1"
      component="h2"
      sx={{
        color: "text",
        borderBottom: 1,
        borderBottomColor: theme.vars?.palette.divider,
        mb: 2,
      }}
      dir="auto"
    >
      <Link href={href} lang={lang} sx={{ color: "inherit" }}>
        {title}
      </Link>
    </Typography>
  );
}
