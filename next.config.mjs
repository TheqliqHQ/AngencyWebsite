// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com", "images.unsplash.com"],
  },
  experimental: {
    // Disable to avoid strict href typing issues in next/link on Vercel
    typedRoutes: false,
  },
};

export default nextConfig;
