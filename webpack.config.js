const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.js');

module.exports = webpackMerge(commonConfig, {
  entry: {
    'app': ['babel-polyfill', './src/demo/index.tsx'],
  },
})
