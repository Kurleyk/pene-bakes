/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/clients/pene_bakes',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
