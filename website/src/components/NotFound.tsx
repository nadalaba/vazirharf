"use client";

import ErrorPage from "next/error";

export function NotFound() {
  return <ErrorPage statusCode={404} />;
}
