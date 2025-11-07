/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static HTML export for GitHub Pages
  basePath: '/macaly-dtpbv0z40aetemlctkuzwvr0', // GitHub Pages subpath
  assetPrefix: '/macaly-dtpbv0z40aetemlctkuzwvr0/', // Ensure assets load correctly
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  devIndicators: false,
  allowedDevOrigins: [
    "*.macaly.dev",
    "*.macaly.app",
    "*.macaly-app.com",
    "*.macaly-user-data.dev",
  ],
  webpack: (config, { dev, isServer }) => {
    // Apply macaly-tagger in development for both client and server
    if (dev) {
      config.module.rules.unshift({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "macaly-tagger",
          },
        ],
        enforce: "pre", // Run before other loaders
      });
    }

    return config;
  },
};

module.exports = nextConfig;
