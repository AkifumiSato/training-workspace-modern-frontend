/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    dynamicIO: true,
    cacheComponents: true,
  },
};

export default nextConfig;
