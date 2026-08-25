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
      // Staré adresy z WordPressu → tematicky nejbližší stránka
      // (doplněno 25. 8. 2026 podle GSC: 1 614 zobrazení končilo na 404)
      {
        source: '/11-tipu-jak-ziskat-validni-zpetny-odkaz',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/11-tipu-jak-ziskat-validni-zpetny-odkaz/',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/3-typy-zpetnych-odkazu-ktery-je-ten-spravny',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/3-typy-zpetnych-odkazu-ktery-je-ten-spravny/',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/ziskejte-zpetne-odkazy-pet-tipu-ktere-pomohou-kazdemu',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/ziskejte-zpetne-odkazy-pet-tipu-ktere-pomohou-kazdemu/',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/linkbuilding-je',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/linkbuilding-je/',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/seo-copywriting-ma-vubec-vliv',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/seo-copywriting-ma-vubec-vliv/',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/wordpress-a-organika-aneb-neotrele-seo-triky',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/wordpress-a-organika-aneb-neotrele-seo-triky/',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/3-triky-pro-propagaci-webovych-stranek-prohlednete-metody-profesionalu',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/3-triky-pro-propagaci-webovych-stranek-prohlednete-metody-profesionalu/',
        destination: '/seo-konzultant-usti-nad-labem',
        permanent: true,
      },
      {
        source: '/proc-potrebujete-webove-stranky',
        destination: '/tvorba-webu-bilina',
        permanent: true,
      },
      {
        source: '/proc-potrebujete-webove-stranky/',
        destination: '/tvorba-webu-bilina',
        permanent: true,
      },
      {
        source: '/nad-cim-se-zamyslet-nez-zacnete-tvorit-web-ve-wordpressu',
        destination: '/tvorba-webu-bilina',
        permanent: true,
      },
      {
        source: '/nad-cim-se-zamyslet-nez-zacnete-tvorit-web-ve-wordpressu/',
        destination: '/tvorba-webu-bilina',
        permanent: true,
      },
      {
        source: '/vyhody-a-nevyhody-wordpressu',
        destination: '/tvorba-webu-bilina',
        permanent: true,
      },
      {
        source: '/vyhody-a-nevyhody-wordpressu/',
        destination: '/tvorba-webu-bilina',
        permanent: true,
      },
      {
        source: '/kdo-jsem',
        destination: '/o-mne',
        permanent: true,
      },
      {
        source: '/kdo-jsem/',
        destination: '/o-mne',
        permanent: true,
      },
      {
        source: '/barterova-spoluprace-idealni-marketingovy-tah',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/barterova-spoluprace-idealni-marketingovy-tah/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/google-analytics-4-co-prinasi-a-komu-se-vyplati-prejit',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/google-analytics-4-co-prinasi-a-komu-se-vyplati-prejit/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/firemni-poradenstvi-klic-k-uspechu-vaseho-podnikani',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/firemni-poradenstvi-klic-k-uspechu-vaseho-podnikani/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/interim-management-co-to-je-a-kdy-ho-vyuzit',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/interim-management-co-to-je-a-kdy-ho-vyuzit/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/vizitky-maly-ale-vyznamny-nastroj-v-dnesni-dobe',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/vizitky-maly-ale-vyznamny-nastroj-v-dnesni-dobe/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/cookies-lista-pro-rok-2022-splnujete-vse-nezbytne-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/cookies-lista-pro-rok-2022-splnujete-vse-nezbytne-2/',
        destination: '/blog',
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
