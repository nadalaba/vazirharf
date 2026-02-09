"use client";

import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import LanguageIcon from "@mui/icons-material/Translate";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
//import { usePathname, useSearchParams } from 'next/navigation'
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

import Link from "../Link";
import { languages, languagesList } from "@/i18n/settings";

export function LanguageMenu() {
  const t = useTranslations("header");
  const locale = useLocale();
  const theme = useTheme();
  const pathname = usePathname();
  //todo wrap components that use useSearchParams with suspense
  //const searchParams = useSearchParams();
  //const query = searchParams.toString();
  // Recreate the full URL path (pathname + search params)
  //const fullPath = query ? `${pathname}?${query}` : pathname;
  const fullPath = pathname;

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <React.Fragment>
          <Button
            {...bindTrigger(popupState)}
            variant="text"
            startIcon={<LanguageIcon fontSize="small" />}
            sx={{ color: theme.vars?.palette.text.primary, ml: 1 }}
            title={t("select_language")}
          >
            {languages[locale].localCaption}
          </Button>
          <Menu
            elevation={0}
            {...bindMenu(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {languagesList.map((lang: string) => (
              <Link
                key={lang}
                sx={{
                  textDecoration: "none",
                  color: theme.vars?.palette.text.primary,
                }}
                //href={{ pathname, query }}
                href={{ pathname }}
                as={fullPath}
                lang={lang}
                onClick={() => {
                  popupState.close();
                }}
              >
                <MenuItem selected={locale === lang}>
                  {languages[lang].localCaption}
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
