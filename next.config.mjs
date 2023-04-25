/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // 12.3.0以前配置
  images: {
    domains: ['images.unsplash.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',
  //       port: '',
  //       pathname: '',
  //     },
  //   ],
  // },
}

export default nextConfig
