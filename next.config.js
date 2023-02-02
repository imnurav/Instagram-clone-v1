/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [{ protocol: "http", hostname: "www.jennexplores.com" }],
    minimumCacheTTL: 150000,
  },
};

module.exports=nextConfig