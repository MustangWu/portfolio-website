/** @type {import('next').NextConfig} */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "lf3-starry.byteimg.com",
      "img.alicdn.com",
      "upload.wikimedia.org",
      "avatars.githubusercontent.com",
      "static.wikia.nocookie.net",
    ]
  },
  // 忽略@douyinfe/semi-ui库中的findDOMNode警告
  webpack: (config, { dev, isServer }) => {
    // 仅在开发模式下应用
    if (dev && !isServer) {
      // 忽略特定模块的警告
      config.ignoreWarnings = [
        { module: /node_modules\/@douyinfe\/semi-ui/ }
      ];
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      // 提供react-dom/client导出findDOMNode的兼容性实现
      'react-dom': 'react-dom/profiling',
    };
    return config;
  },
};

export default nextConfig;
