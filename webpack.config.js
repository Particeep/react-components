const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.js')
const path = require('path')

module.exports = webpackMerge(commonConfig, {
  entry: {
    'app': ['babel-polyfill', path.resolve('./src/demo/index.tsx')],
  },
})
