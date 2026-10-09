import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/black-white-preview',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
