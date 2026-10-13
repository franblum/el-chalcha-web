import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/el-chalcha-web',
  trailingSlash: true,
};

export default nextConfig;
