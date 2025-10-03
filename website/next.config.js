/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  basePath: process.env.NEXT_PUBLIC_BASE_PATH === "/" ? "" : "/vazirharf",

  output: "export",
  distDir: "out/vazirharf"
};
