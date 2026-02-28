"use client";

import { useTheme, useColorScheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import NightIcon from "@mui/icons-material/DarkModeOutlined";
import DayIcon from "@mui/icons-material/LightModeOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import DocIcon from "@mui/icons-material/MenuBookOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TestPageIcon from "@mui/icons-material/ScienceOutlined";
import { useTranslations } from "next-intl";

import { LanguageMenu } from "./LanguageMenu";
import Link from "@/Link";

export const Header = () => {
  const t = useTranslations("header");
  const theme = useTheme();
  const { mode, systemMode, setMode } = useColorScheme();
  const colorMode = mode === "system" ? systemMode : mode;

  return (
    <AppBar
      sx={{
        backgroundColor: theme.vars?.palette.background.default,
        backgroundImage: "none",
        boxShadow: "none",
        borderBottomColor: theme.vars?.palette.divider,
        top: "0 !important",
      }}
      enableColorOnDark
      position="sticky"
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Link href={"/"}>
          <IconButton
            size="large"
            sx={{ color: theme.vars?.palette.text.primary }}
            title={t("home")}
          >
            <HomeIcon fontSize="small" />
          </IconButton>
        </Link>
        <Link href="/docs">
          <IconButton
            size="large"
            sx={{ color: theme.vars?.palette.text.primary }}
            title={t("docs")}
          >
            <DocIcon fontSize="small" />
          </IconButton>
        </Link>
        <Link href="/lab">
          <IconButton
            size="large"
            sx={{ color: theme.vars?.palette.text.primary }}
            title={t("lab")}
          >
            <TestPageIcon fontSize="small" />
          </IconButton>
        </Link>
        <IconButton
          onClick={() => setMode(colorMode !== "dark" ? "dark" : "light")}
          size="large"
          sx={{ color: theme.vars?.palette.text.primary }}
          title={colorMode !== "dark" ? t("night_mode") : t("day_mode")}
        >
          {colorMode !== "dark" ? (<NightIcon fontSize="small" />) : (<DayIcon fontSize="small" />)}
        </IconButton>
        <LanguageMenu />
      </Toolbar>
    </AppBar>
  );
};
