import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  compiler: {
    // Enable styled-components support
    styledComponents: {
      // Enable displayName in development for better debugging
      displayName: process.env.NODE_ENV === 'development',
      // Enable minification in production
      minify: process.env.NODE_ENV === 'production',
      // Enable server-side rendering
      ssr: true,
      // Enable CSS source maps in development
      cssProp: true,
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config, { isServer, dev }) => {
    // Add path aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
    };

    // Add support for TypeScript path aliases
    if (!dev) {
      const tsPaths = new (require('tsconfig-paths-webpack-plugin')({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      }));
      
      if (config.resolve) {
        config.resolve.plugins = [
          ...(config.resolve.plugins || []),
          tsPaths,
        ];
      }
    }

    return config;
  },
  // Enable TypeScript type checking in development
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  // Enable ESLint on save in development
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
