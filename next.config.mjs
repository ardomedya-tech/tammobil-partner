/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
  distDir: "build",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
