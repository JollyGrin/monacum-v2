/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Served at the root of the custom domain (monacum-immobilien.de),
  // so no basePath/asset prefix. NEXT_PUBLIC_BASE_PATH stays unset too.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
