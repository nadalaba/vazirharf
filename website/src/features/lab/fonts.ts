import { VAZIRHARF_CDN_URL } from "../../lib/constants";

export type Font = {
  cssURL: string;
  family: string;
  cssFamily: string;
  isVariable: boolean;
  isLocal: boolean;
};

export const fonts: Array<Font> = [
  {
    cssURL: `${VAZIRHARF_CDN_URL}/Vazirharf-font-face.css`,
    family: "vazirharf",
    cssFamily: "vazirharf, roboto, sans-serif",
    isVariable: false,
    isLocal: false,
  },
  {
    cssURL: `${VAZIRHARF_CDN_URL}/Round-Dots/Vazirharf-RD-font-face.css`,
    family: "vazirharf rd",
    cssFamily: "vazirharf rd, roboto, sans-serif",
    isVariable: false,
    isLocal: false,
  },
  {
    cssURL: `https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirharf-font-face.css`,
    family: "vazirmatn",
    cssFamily: "vazirmatn, roboto, sans-serif",
    isVariable: false,
    isLocal: false,
  },
  {
    cssURL: `https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css`,
    family: "old vazir",
    cssFamily: "vazir, roboto, sans-serif",
    isVariable: false,
    isLocal: false,
  },
];
