var path = require('path');
var webpack = require('webpack');
var loaders = require('./loaders');
var entries = require('./entries');
var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: entries,
  target: 'node',
  output: {
    library: 'index',
    libraryTarget: 'commonjs2',
    filename: 'index.js',
    path: path.resolve(__dirname, './out')
  },
  resolve: {
    modules: [
      path.resolve('.'),
      'node_modules'
    ],
    extensions: ['.ts', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true
      },
      mangle: false,
      sourceMap: true
    }),
    new WebpackShellPlugin({
      safe: true,
      onBuildExit: ['zip -j out/index.js.zip out/index.js ; ls ; ls out/']
    }),
    new webpack.DefinePlugin({
      env: JSON.stringify('production')
    }),
    function() {
      this.plugin("done", function(stats) {
        if (stats.compilation.errors && stats.compilation.errors.length) {
          process.on('beforeExit', function() {
            process.exit(1);
          });
        }
      });
    }
  ],
  module: {
    rules: loaders
  }
};
