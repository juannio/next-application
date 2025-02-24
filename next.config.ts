import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: ( config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    return config
  },
  output: 'standalone',
};

export default nextConfig;
