const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  entry: {
    'app': ['babel-polyfill', path.resolve('./src/demo/index.tsx')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/demo/index.html'),
      favicon: './src/demo/asset/favicon.ico',
    })
  ],
})
