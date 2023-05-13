/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placedog.net',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
