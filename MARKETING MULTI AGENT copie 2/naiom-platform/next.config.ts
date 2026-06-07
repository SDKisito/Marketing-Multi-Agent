import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/avatars/**", search: "?v=3" },
      { pathname: "/avatars/**", search: "" },
    ],
  },
};

export default nextConfig;
