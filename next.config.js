require('dotenv').config();

module.exports = {
  env: {
    STREAMING_HELL_API_ENDPOINT:
      process.env.STREAMING_HELL_API_ENDPOINT ||
      'https://api.streaming-hell.com/v1',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
