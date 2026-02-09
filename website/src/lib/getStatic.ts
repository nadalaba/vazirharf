import { languagesList } from "@/i18n/settings";

export const dynamicParams = false; // true | false. default true. true does not work with static exports
export function generateStaticParams() {
  return languagesList.map((lang) => ({ lang }));
}
