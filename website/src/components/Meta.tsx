import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import { SITE_NAME } from "../lib/constants";
import { useTranslation } from "react-i18next";

export const Meta = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "meta" });
  const theme = useTheme();

  return (
    <Head>
      <meta name="theme-color" content={theme.palette.background.default} />
      <meta name="description" content={t("site_description")} />
    </Head>
  );
};
