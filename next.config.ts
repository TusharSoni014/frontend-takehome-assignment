import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "**",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
