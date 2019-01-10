const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/demo/index.html')
    })
  ],
}
