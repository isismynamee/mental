/** @type {import('next').NextConfig} */
const withImages = require('next-images');
// const withTM = require("next-transpile-modules")([
//   "@fullcalendar/common",
//   "@babel/preset-react",
//   "@fullcalendar/common",
//   "@fullcalendar/daygrid",
//   "@fullcalendar/interaction",
//   "@fullcalendar/react",
//   "@fullcalendar/timegrid",
// ]);
// module.exports = withTM({
//   // your custom config goes here
// });
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
