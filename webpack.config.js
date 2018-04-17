const path = require('path');

module.exports = {
  entry: path.resolve('src') + '/index.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      options: {
        presets: ["env", "react"]
      }
    }]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  // optimization: {
  //   minimize: true,
  // },
  devtool: 'source-map',
  target: 'web'
};