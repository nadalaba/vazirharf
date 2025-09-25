export const SITE_NAME = "فونت وزیرحرف Vazirharf";
export const SITE_BASE_PATH = "https://NadAlaba.github.io/vazirharf";
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH === "/" ? "" : "/vazirharf";
export const DOWNLOAD_BASE_URL =
  "https://github.com/NadAlaba/vazirharf/releases/download";

export const TAG_NAME = process.env.NEXT_PUBLIC_TAG_NAME
  ? process.env.NEXT_PUBLIC_TAG_NAME
  : process.env.NEXT_PUBLIC_LAST_TAG_NAME
  ? process.env.NEXT_PUBLIC_LAST_TAG_NAME
  : "v0.0.0";

export const DOWNLOAD_URL = `${DOWNLOAD_BASE_URL}/${TAG_NAME}/vazirharf-${TAG_NAME}.zip`;

export const VAZIRHARF_CDN_URL = process.env.NEXT_PUBLIC_CDN_URL
  ? process.env.NEXT_PUBLIC_CDN_URL
  : `https://cdn.jsdelivr.net/gh/NadAlaba/vazirharf@${TAG_NAME}`;

export const VAZIRHARF_CSS_URL = `${VAZIRHARF_CDN_URL}/Vazirharf-font-face.css`;
export const VAZIRHARF_RD_CSS_URL = `${VAZIRHARF_CDN_URL}/Round-Dots/Vazirharf-RD-font-face.css`;
