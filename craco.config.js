const CracoLessPlugin = require('craco-less');
const CssModules = require('babel-plugin-react-css-modules');

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
