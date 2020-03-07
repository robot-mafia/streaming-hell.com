require('dotenv').config();

module.exports = {
  env: {
    STREAMING_HELL_API_ENDPOINT: process.env.STREAMING_HELL_API_ENDPOINT || 'http://95.216.141.51:3000/api/v1-alpha.1',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
