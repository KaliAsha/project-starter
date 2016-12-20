/* Dependencies */
const path = require('path')

module.exports = {
  entry: './Front/js/app.js',
  output: {
    path: path.resolve(__dirname, 'Front/', 'build/'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
}
