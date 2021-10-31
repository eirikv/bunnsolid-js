const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const babelConfig = require('./babel.config');
const babelIeConfig = require('./babel.config.ie');

const config = (name, babelOptions) => ({
  name,
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `${name}.js`,
  },
});

module.exports = [
  config('app', babelConfig),
  config('app.legacy', babelIeConfig),
];
