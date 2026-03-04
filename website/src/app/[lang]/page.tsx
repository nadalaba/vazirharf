import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/Layout";
import { SITE_NAME, SITE_BASE_PATH, BASE_PATH } from "@/lib/constants";
import { defaultLang } from "@/i18n/settings";
import { IndexLayout } from "./client";

export const metadata = {
  title: SITE_NAME,
  alternates: {
    canonical: `${SITE_BASE_PATH}/${defaultLang}`,
  },
};

export default async function Index(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  // Enable static rendering
  setRequestLocale(lang);
  const response = await fetch(`${SITE_BASE_PATH}/donations.json`);
  const donations = await response.json();
  return (
    <Layout stableScrollBar>
      <IndexLayout donations={donations}/>
    </Layout>
  );
};

export { generateStaticParams } from "@/lib/getStatic";
