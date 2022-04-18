/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
    // pnpm virtual-store-dir is outside the app directory
    outputFileTracingRoot: path.resolve(__dirname, '../'),
  },
};

module.exports = nextConfig;
