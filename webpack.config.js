// webpack.config.js
const webpack = require('webpack')

const config = {
  entry: './src/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
}

module.exports = config
