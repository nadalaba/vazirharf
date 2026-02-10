import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/assets`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|assets|_next|_vercel|.*\\..*).*)",
};

export default createMiddleware(routing);
