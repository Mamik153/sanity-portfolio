/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'cdn.sanity.io',
  },
}

module.exports = nextConfig
