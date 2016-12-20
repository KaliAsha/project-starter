/* Dependencies */
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['./Front/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'Front/', 'build/'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
