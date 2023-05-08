const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const dev = require('../webpack.dev')
const { merge } = require('webpack-merge')

module.exports = merge(dev, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})