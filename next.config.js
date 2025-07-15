/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you need
  },
  experimental: {
    // Enable new features you might want to use
    appDir: true,
    serverActions: true,
  },
  // Add any other configurations you need
};

module.exports = nextConfig;
