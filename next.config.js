module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    // Replace React with Preact only in client production build
    if (!options.dev && !options.isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
};
