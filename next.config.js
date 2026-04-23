/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/bub.github.io",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;