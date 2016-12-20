/* Dependencies */
const path = require('path')
const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config')
config.entry.unshift('webpack-dev-server/client?http://localhost:8080/')
const compiler = webpack(config)

let server = new WebpackDevServer(compiler, {
  hot: false,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  clientLogLevel: 'info',
  contentBase: path.join(__dirname, 'Front/'),
  watchContentBase: true,
  publicPath: '/assets/',
  stats: {
    colors: true,
    chunks: false
  }
})
server.listen(8080, function (error) {
  if (error) throw error
})
