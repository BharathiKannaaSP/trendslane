import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@workspace/ui"],
  cacheComponents: true,
  experimental: {
    authInterrupts: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.mango.com",
      },
      {
        protocol: "https",
        hostname: '"images.pexels.com"',
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
}

export default nextConfig
