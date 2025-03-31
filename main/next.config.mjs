/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/main", // Change to your repo name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

module.exports = nextConfig;
