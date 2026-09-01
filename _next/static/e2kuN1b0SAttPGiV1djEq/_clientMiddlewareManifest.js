self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/vazirharf(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|trpc|assets|_next|_vercel|.*\\..*).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api|trpc|assets|_next|_vercel|.*\\..*).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()