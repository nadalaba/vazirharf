"use client";

import { ThemeProvider } from "@mui/material/styles";
import { createCustomMuiTheme } from "@/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const muiTheme = createCustomMuiTheme();

  return (
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  );
}
