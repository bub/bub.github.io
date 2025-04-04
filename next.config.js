const nextMdx = require('@next/mdx');

const withMDX = nextMdx({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [],
  },
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withMDX({
  output: 'export', // 👈 Enable static export for GitHub Pages
  basePath: '/bub.github.io', // 👈 Replace with your actual repo name
  trailingSlash: true,
  pageExtensions: ['tsx', 'md', 'mdx'],
  experimental: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      os: false,
      assert: false,
      fs: false,
    };
    return config;
  },
});

module.exports = nextConfig;
