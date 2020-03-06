require('dotenv').config();

module.exports = {
  env: {
    STREAMING_HELL_API_ENDPOINT: process.env.STREAMING_HELL_API_ENDPOINT,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
