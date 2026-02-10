/*
import {redirect} from 'next/navigation';
import { defaultLang } from '@/i18n/settings';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect(`/${defaultLang}`);
}
*/

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { languagesList, defaultLang } from "@/i18n/settings";
import { SITE_BASE_PATH } from "@/lib/constants";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // 1. Check cookie
    const cookieLocale = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith("NEXT_LOCALE="))
      ?.split("=")[1];

    if (cookieLocale && languagesList.includes(cookieLocale)) {
      router.replace(`/${cookieLocale}`);
      return;
    }

    // 2. Fall back to browser language
    const browserLocale =
      navigator.languages?.[0] || navigator.language || defaultLang;
    const browserLang = browserLocale.split("-")[0];
    const targetLang = languagesList.includes(browserLang)
      ? browserLang
      : defaultLang;

    router.replace(`/${targetLang}`);
  }, [router]);

  return (
    <html>
      <head>
        {/* Tell search engines not to index this page */}
        <meta name="robots" content="noindex" />

        {/* Alternative links for each language */}
        {languagesList.map((lang) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={`${SITE_BASE_PATH}/${lang}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${SITE_BASE_PATH}/${defaultLang}`}
        />

        {/* Canonical to avoid duplicate content */}
        <link rel="canonical" href={`${SITE_BASE_PATH}/${defaultLang}`} />

        {/* Fallback redirect for no-JS users */}
        <noscript>
          <meta
            httpEquiv="refresh"
            content={`0; url=${SITE_BASE_PATH}/${defaultLang}`}
          />
        </noscript>
      </head>
      <body>
        <p>Redirecting...</p>
      </body>
    </html>
  );
}
