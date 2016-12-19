/* Dependencies */
const path = require('path')

module.exports = {
  entry: './Front/app.js',
  output: {
    path: path.resolve(__dirname, 'Front/', 'dist'),
    filename: 'bundle.js'
  }
}
