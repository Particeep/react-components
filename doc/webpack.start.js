const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  entry: {
    'app': ['babel-polyfill', path.resolve('./src/index.tsx')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      favicon: './src/asset/favicon.ico',
    })
  ],
})
