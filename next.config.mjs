/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ESLint errors ko ignore karega deployment mein
  },
  images: {
    unoptimized: true, // Image warnings fix
  },
};

export default nextConfig;