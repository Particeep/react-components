const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(commonConfig, {
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     favicon: './src/demo/favicon.ico',
  //   }),
  // ],
  entry: {
    'app': ['babel-polyfill', path.resolve('./src/demo/index.tsx')],
  },
})
