/** @type {import('next').NextConfig} */
const defaultNextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: false,
  poweredByHeader: false,
  staticPageGenerationTimeout:160,
  experimental: {
    esmExternals: 'loose',
  },
  images: {
    loader: '',
    path: 'https:',
    domains: [],
  },
  eslint: {
    dirs: [
      // ...
      'app',
      'components',
      'functions',
      'lib',
      'pages',
      'providers',
      'types',
      'ui',
    ],
  },
  webpack: (config, { isServer }) => {
    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        dns: false,
        tls: false,
        net: false,
      }
    }

    config.module = {
      ...config.module,
      exprContextCritical: false,
    }

    return config
  },
}

module.exports = defaultNextConfig