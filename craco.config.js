const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#003a8c',
              '@gold-base': '#857438'
            },
            javascriptEnabled: true,
          },
        },
      },
    },

  ],
};
