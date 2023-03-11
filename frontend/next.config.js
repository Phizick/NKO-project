/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {appDir: true},
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '"motionfoundation.ru',
//         port: '',
//         pathname: '/media/files_storage/**',
//       },
//     ],
//   },
// }

// config для теста:

const nextConfig = {
  reactStrictMode: true,
  experimental: {appDir: true},
  images: {
    domains: ['api.atlas.msk.ru']
  },
}

module.exports = nextConfig
