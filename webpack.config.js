const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.mjs'),
  module: {
    rules: [
      {
        test: /\.(mjs)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.mjs', '.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },
};