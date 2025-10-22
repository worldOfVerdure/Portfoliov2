import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Helps catch potential issues in development
  // Enable experimental features if needed
  typedRoutes: true,   // Type-safe routing (Next.js 14+)
  // images: {
  //   domains: ["your-cdn.com",  "payloadcms.com"], // For next/image external sources
  // },
  outputFileTracingRoot: path.join(__dirname),
  // env: {
  //   GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  //   PAYLOAD_API_URL: process.env.PAYLOAD_API_URL,
  // }
};

export default nextConfig;
