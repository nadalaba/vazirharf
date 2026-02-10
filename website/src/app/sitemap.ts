import type { MetadataRoute } from "next";
import { languagesList, defaultLang } from "@/i18n/settings";
import { SITE_BASE_PATH } from "@/lib/constants";

const routes = [
  { path: "", priority: 1 },
  { path: "/lab", priority: 0.8 },
  { path: "/docs", priority: 0.7 },
  { path: "/docs/HELP", priority: 0.7 },
  { path: "/docs/Vazirharf-Files", priority: 0.6 },
  { path: "/docs/Vazirharf-Variable", priority: 0.6 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_BASE_PATH}/${defaultLang}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route.priority,
    alternates: {
      languages: Object.fromEntries(
        languagesList.map((lang) => [
          lang,
          `${SITE_BASE_PATH}/${lang}${route.path}`,
        ]),
      ),
    },
  }));
}
