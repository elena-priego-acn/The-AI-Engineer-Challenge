import type { NextConfig } from "next";

/**
 * In local development, proxy chat requests to the FastAPI backend on port 8000.
 * On Vercel, vercel.json routes /api/chat to the Python serverless function.
 */
const nextConfig: NextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/chat",
          destination: "http://127.0.0.1:8000/api/chat",
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
