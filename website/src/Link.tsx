"use client";

import * as React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { useLocale } from 'next-intl';

//import {Link as intlLink} from '@/i18n/navigation';
import { languagesList } from "@/i18n/settings";

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled("a")({});

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
  Omit<NextLinkProps, "href" | "as"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
  href?: NextLinkProps["href"];
}

export const NextLinkComposed = styled((props: NextLinkComposedProps) => {
  const {
    to,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
    ...other
  } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
      {...other}
    />
  );
})({});;

export type StyledLinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"]; // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<MuiLinkProps, "href">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
function StyledLink(props: StyledLinkProps) {
  const {
    activeClassName = "active",
    as: linkAs,
    className: classNameProps,
    href,
    noLinkStyle,
    //role, // Link don't have roles.
    ...other
  } = props;

  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: usePathname() === pathname && activeClassName,
  });

  const isExternal =
    typeof href === "string" &&
    (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return (
        <Anchor className={className} href={href} {...other} />
      );
    }

    return <MuiLink className={className} href={href} {...other} />;
  }

  if (noLinkStyle) {
    return (
      <NextLinkComposed
        className={className}
        to={href}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={linkAs}
      className={className}
      to={href}
      {...other}
    />
  );
}

function pathnameWithoutLang(pathname: string | null | undefined) {
  if (!pathname) {
    return "/";
  }
  if (!pathname.startsWith("/")) {
    pathname = "/" + pathname;
  }
  const parts = pathname.split("/");
  // if path doesn't have lang
  if (!languagesList.includes(parts[1])) {
    return parts.join("/");
  }
  // remove lang
  return parts.length > 2 ? `/${parts.slice(2).join("/")}` : "/";
}

export type LinkProps = {
  lang?: string;
} & StyledLinkProps;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
function Link(props: LinkProps) {
  const { href, lang, as, ...other } = props;
  const locale = useLocale();

  let pathname = typeof href === "string" ? href : href.pathname;
  if (as) pathname = as.toString();

  const isExternal =
    typeof href === "string" &&
    (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

  const localeHref: string = !isExternal
    ? lang
      ? `/${lang}${pathnameWithoutLang(pathname)}`
      : `/${locale}${pathname}`
    : href;

  // console.log(localeHref);
  return <StyledLink href={localeHref} {...other} />;
}

export default Link;
