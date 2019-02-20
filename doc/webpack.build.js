const commonConfig = require('./webpack.js')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  entry: {
    'app': ['babel-polyfill', './src/index.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      favicon: './src/asset/favicon.ico',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  optimization: {
    noEmitOnErrors: true,
    removeAvailableModules: false
  },
  output: {
    path: path.resolve('./build'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
})
