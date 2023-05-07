const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const RefresherPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: {
    bundle: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'babel-loader'
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new RefresherPlugin()
  ]
}