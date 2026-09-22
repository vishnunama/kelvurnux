import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/crypto-igaming-Solutions",
        destination: "/crypto-igaming-solutions",
        permanent: true,
      },
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
