import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/igaming-api-integration",
        destination: "/casino-aggregator-api-solution",
        permanent: true,
      },
      {
        source: "/how-to-start-crypto-casino-platform-step-by-step",
        destination: "/blog/how-to-start-crypto-casino-platform-step-by-step",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
