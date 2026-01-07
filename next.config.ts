import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* This allows your site to display GitHub profile pictures safely */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  // Optimized for 2026 performance
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
