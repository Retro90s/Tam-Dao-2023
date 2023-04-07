/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
