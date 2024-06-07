const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function override(config, env) {
  // Punto de entrada para index.js
  config.entry = path.resolve(__dirname, 'src/index.js');

  // Ajusta el output para asegurarte de que los archivos se generan correctamente
  config.output = {
    ...config.output,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  };

  // Reemplaza HtmlWebpackPlugin para usar cart.html
  config.plugins = config.plugins.map(plugin => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      return new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'public/cart.html'),
        filename: 'cart.html',
      });
    }
    return plugin;
  });

  return config;
};
