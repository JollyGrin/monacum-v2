/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/monacum-v2' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
