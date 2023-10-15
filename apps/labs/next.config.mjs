import { withContentlayer } from 'next-contentlayer';

import './env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client'],
    serverActions: true,
  },
};

export default withContentlayer(nextConfig);
