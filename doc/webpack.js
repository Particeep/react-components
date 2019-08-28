const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      // Why do we need this ?
      // To use npm link, peerDependency must be also added to devDependency
      // BUT having multiples react and material-ui instances causes bugs (e.g. https://github.com/facebook/react/issues/13991)
      // SO using alias seems to prevent using libraries from devDependency of the library.
      // NOTE that it was not needed before, so maybe I'm missing something.
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      '@material-ui/core': path.resolve('./node_modules/@material-ui/core'),
      '@material-ui/styles': path.resolve('./node_modules/@material-ui/styles')
    },
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
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },
    ]
  },
};
