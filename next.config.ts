import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;
