/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/clients/pene_bakes',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/pene-bakes.html' },
      ],
    }
  },
}

export default nextConfig
