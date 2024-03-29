const { merge } = require('webpack-merge'); // to merge different webpack config files
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const packageJson = require('../package.json');

const commonConfig = require('./webpack.common');

const PORT = 8080;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html', // prefixing the / OR historyApiFallback can be set to "true" directly intead of this object
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js',
        dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
