/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/seo/en/social-deduction-party-game",
        destination: "/online-social-deduction-game",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
