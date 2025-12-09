/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  // Remove or comment out basePath if deploying to root domain
  // basePath: '/myportfolio',
  assetPrefix: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Enable static exports
  reactStrictMode: true,
};

module.exports = nextConfig;