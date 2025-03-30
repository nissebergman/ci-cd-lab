/** @type {import('next').NextConfig} */
const isDev = process.env.NEXT_PUBLIC_ENV === "dev";

module.exports = {
  output: "export", // Enables `next export` mode
  basePath: isDev ? "/dev" : "/release",
  assetPrefix: isDev ? "/dev/" : "/release/",
  images: {
    unoptimized: true, // Needed for GitHub Pages
  },
};