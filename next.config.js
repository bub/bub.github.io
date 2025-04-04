const repoName = 'bub.github.io';

const nextMdx = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [require('remark-gfm')],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  output: 'export',
  pageExtensions: ['tsx', 'ts', 'js', 'jsx', 'md', 'mdx'],
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
};

module.exports = nextMdx(nextConfig);
