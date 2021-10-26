const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },
};