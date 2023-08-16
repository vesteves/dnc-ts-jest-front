/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ed.escoladnc.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
