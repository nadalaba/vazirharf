type Languages = {
  [key: string]: {
    direction: "ltr" | "rtl";
    caption: string;
    localCaption: string;
  };
};

export const languages: Languages = {
  en: { direction: "ltr", caption: "English", localCaption: "English" },
  ar: { direction: "rtl", caption: "Arabic", localCaption: "العربية" },
  fa: { direction: "rtl", caption: "Persian", localCaption: "فارسی" },
};
export const languagesList = Object.keys(languages);
export const defaultLang = "en";
