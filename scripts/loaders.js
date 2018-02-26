module.exports = [
  {
    test: /\.ts(x?)$/,
    use: ['ts-loader'],
    exclude: /node_modules/
  },
  {
    test: /\.yml$/,
    use: ['json-loader', 'yaml-loader'],
    exclude: /node_modules/
  }
];
