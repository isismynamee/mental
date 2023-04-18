/** @type {import('next').NextConfig} */
const withImages = require('next-images');
module.exports = withImages({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    apiKeyNews: 'de7b734b68724f79a3e04c821de6422d'
  }
}

module.exports = nextConfig
