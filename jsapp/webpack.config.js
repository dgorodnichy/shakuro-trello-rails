var webpack = require("webpack");
module.exports = {
  entry: './src/index.js',
  output: {
    path: '../public/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: [/node_modules/, /public/],
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
