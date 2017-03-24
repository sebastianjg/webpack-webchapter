// webpack.config.js
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

const config = {
  entry: './src/index.js',
  output: {
    path: './dist/',
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, use: 'babel-loader'},
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader','sass-loader'])
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 } // Convert images < 10k to base64 strings
        }]
      },
    ],
  },
  plugins: [
    extractCSS,
  ]
}

module.exports = config
