var path = require('path');
var webpack = require('webpack');
var loaders = require('./loaders');
var entries = require('./entries');

module.exports = {
  entry: entries,
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '.')
  },
  resolve: {
    modules: [
      path.resolve('.'),
      'node_modules'
    ],
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      env: JSON.stringify('development')
    }),
  ],
  module: {
    rules: loaders
  }
};
