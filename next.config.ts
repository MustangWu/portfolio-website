/** @type {import('next').NextConfig} */

const nextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
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
    return config;
  },
};

module.exports = nextConfig;
