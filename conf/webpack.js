const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('src/demo/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
      // {
      //   test: /\.tsx?$/,
      //   loader: "ts-loader"
      // }
      , {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?importLoaders=1&localIdentName=[local]_[hash:base64:5]!sass-loader'
      }
    ]
  },
};
