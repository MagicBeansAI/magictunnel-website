/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you need
  },
  // Add any other configurations you need
};

module.exports = nextConfig;
