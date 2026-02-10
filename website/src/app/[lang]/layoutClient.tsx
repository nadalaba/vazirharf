"use client";

//import { useState } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import rtlPlugin from "@mui/stylis-plugin-rtl";
import { prefixer } from "stylis";
import { usePathname } from "next/navigation";

import { createCustomMuiTheme } from "@/theme";
import { languages, languagesList, defaultLang } from "@/i18n/settings";

const cacheLtr = {
  key: "muiltr",
  //prepend: true,
  stylisPlugins: [prefixer],
};

const cacheRtl = {
  key: "muirtl",
  //prepend: true,
  stylisPlugins: [prefixer, rtlPlugin],
};

function getLangFromPath(path: string) {
  if (!path.startsWith("/")) {
    return "";
  }
  const parts = path.split("/");
  return languagesList.includes(parts[1]) ? parts[1] : "";
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = getLangFromPath(usePathname()) || defaultLang;
  //const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  //const { mode, systemMode } = useColorScheme();
  //const [theme, setTheme] = useState<"dark" | "light">(() => {
  //  if (typeof window !== "undefined") {
  //    const saved = localStorage?.getItem("theme");
  //    if (saved === "dark" || saved === "light") return saved;
  //    // fallback: use prefersDarkMode only if we’re on client
  //    return prefersDarkMode ? "dark" : "light";
  //  }
  //  return "light"; // default for SSR
  //});

  const muiTheme = createCustomMuiTheme(languages[lang].direction);

  //const handleToggleTheme = () => {
  //  //if (typeof localStorage !== "undefined") {
  //  //  localStorage.setItem("theme", mode === "light" ? "dark" : "light");
  //  //}
  //  //setTheme(theme === "light" ? "dark" : "light");
  //  setMode(mode === "light" ? "dark" : "light");
  //};

  return (
    <StyledEngineProvider injectFirst>
      <AppRouterCacheProvider
        options={languages[lang].direction === "rtl" ? cacheRtl : cacheLtr}
      >
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StyledEngineProvider>
  );
}
