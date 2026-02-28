import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  basePath: process.env.NEXT_PUBLIC_BASE_PATH === "/" ? "" : "/vazirharf",

  output: "export",
  distDir: "out/vazirharf",

  images: { unoptimized: true }
}

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
