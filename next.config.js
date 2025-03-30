/** @type {import('next').NextConfig} */
const isDev = process.env.NEXT_PUBLIC_ENV === "dev";

module.exports = {
  output: "export", // Enables static export
  basePath: isDev ? "/ci-cd-lab/dev" : "/ci-cd-lab",
  assetPrefix: isDev ? "/ci-cd-lab/dev/" : "/ci-cd-lab/",
  images: {
    unoptimized: true, // Needed for GitHub Pages
  },
};