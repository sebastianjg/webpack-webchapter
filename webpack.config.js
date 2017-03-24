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
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 } // Convert images < 10k to base64 strings
        }]
      },
    ],
  }
}

module.exports = config
