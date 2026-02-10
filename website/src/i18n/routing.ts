import { defineRouting } from "next-intl/routing";
import { languagesList, defaultLang } from "./settings";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languagesList,

  // Used when no locale matches
  defaultLocale: defaultLang,
});
