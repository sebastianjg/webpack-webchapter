// webpack.config.js
const webpack = require('webpack')

const config = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, use: 'babel-loader'},
      {
        test: /\.scss$/,
        use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        ],
      },
    ],
  }
}

module.exports = config
