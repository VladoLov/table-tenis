import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["firebasestorage.googleapis.com"], // Use only the domain, no protocol
  },
};

export default nextConfig;
