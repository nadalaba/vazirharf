import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { languages, languagesList } from "@/i18n/settings";
import {
  BASE_PATH,
  VAZIRHARF_CSS_URL,
  VAZIRHARF_RD_CSS_URL,
} from "@/lib/constants";

import { NotFound } from "@/components/NotFound";
import ClientRootLayout from "./layoutClient";

export function generateViewport() {
  //const theme = useTheme();
  return {
    initialScale: 1,
    width: "device-width",
    //themeColor: theme.vars?.palette.background.default,
  };
}

export async function generateMetadata(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  const t = await getTranslations({ locale: lang, namespace: "meta" });
  return {
    icons: {
      shortcut: `${BASE_PATH}/images/favicon.ico`,
    },
    verification: {
      google: "8V-RQNs3c782s0E32CYMaxnBb_ID6zgS_xR5E_PJJj8",
    },
    description: t("site_description"),
  };
}

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;

  if (!hasLocale(languagesList, lang)) {
    return <NotFound />;
  }

  // Enable static rendering
  setRequestLocale(lang);

  return (
    <html lang={lang} dir={languages[lang].direction} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href={`${VAZIRHARF_CSS_URL}`} />
        <link rel="stylesheet" href={`${VAZIRHARF_RD_CSS_URL}`} />
      </head>
      <body>
        <InitColorSchemeScript attribute="class" />
        <ClientRootLayout>
          <NextIntlClientProvider>{props.children}</NextIntlClientProvider>
        </ClientRootLayout>
      </body>
    </html>
  );
}

export { generateStaticParams } from "@/lib/getStatic";
