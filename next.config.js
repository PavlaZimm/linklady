/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Security: restrict powered-by header leakage
  poweredByHeader: false,
  // Redirects from old WordPress URLs to current pages
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/pavla-zimmermannova',
        destination: '/o-mne',
        permanent: true,
      },
      {
        source: '/author/pavla-zimmermannova/',
        destination: '/o-mne',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/o-mne',
        permanent: true,
      },
      // Old WordPress blog articles → blog page
      {
        source: '/5-duvodu-proc-na-nic-necekat-a-zacit-s-linkbuildingem',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/linkbuilding-outreach-jak-budovat-zpetne-odkazy-a-posilit-autoritu-webu',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.linklady.cz',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
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
