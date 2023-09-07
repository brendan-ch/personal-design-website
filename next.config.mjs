import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ["image/avif", "image/webp"]
  },
  experimental: {
    outputFileTracingExcludes: {
      '/*': ['public/static/work/**/*.png'],
      '/**': ['public/static/work/**/*.png'],
    }
  },
}

export default withPlaiceholder(nextConfig)
