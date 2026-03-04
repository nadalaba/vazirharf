import { setRequestLocale, getTranslations } from "next-intl/server";
import { Layout } from "@/components/Layout";
import { Lab } from "@/features/lab/Lab";

export async function generateMetadata({ params }: PageProps<"/[lang]/lab">) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "lab" });
  return {
    title: t("vazirharf_font_laboratory"),
  };
}

export default async function LabPage({ params }: PageProps<"/[lang]/lab">) {
  const { lang } = await params;
  // Enable static rendering
  setRequestLocale(lang);
  return (
    <Layout disableFooter>
      <Lab />
    </Layout>
  );
}

export { generateStaticParams } from "@/lib/getStatic";
