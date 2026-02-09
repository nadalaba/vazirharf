import { setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/Layout";
import { SITE_NAME, SITE_BASE_PATH } from "@/lib/constants";
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
  return (
    <Layout>
      <IndexLayout />
    </Layout>
  );
};

export { generateStaticParams } from "@/lib/getStatic";
