/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  images: {
    // Simple allow-list
    domains: [
      'images.unsplash.com',
      'img.youtube.com',  // <- YouTube thumbnails
      'i.ytimg.com'       // <- Alt YouTube host (sometimes used)
    ],
    // Or use remotePatterns if you prefer:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'images.unsplash.com' },
    //   { protocol: 'https', hostname: 'img.youtube.com' },
    //   { protocol: 'https', hostname: 'i.ytimg.com' },
    // ],
  },
};
export default nextConfig;
