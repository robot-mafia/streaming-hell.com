/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  pwa: {
    dest: 'public',
  },
});

module.exports = nextConfig;
