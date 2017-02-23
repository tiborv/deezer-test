const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              './node_modules'
            ]
          }
        }
      ]
    }, {
      test: /\.png|\.jpe?g|\.gif|\.svg|\.woff|\.woff2|\.ttf|\.eot|\.ico|\.svg$/,
      use: 'file?name=fonts/[name].[hash].[ext]?'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.json$/,
      use: ['json-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.scss', '.json', '.css']
  },
  entry: {
    app: './app/app.js'
  },
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[hash].app.js',
    publicPath: '/js'
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/**': {
        target: 'https://api.deezer.com/',
        pathRewrite: {'^/api': ''},
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      title: 'TIBAL',
      filename: '../index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    process.env.DASHBOARD ? new DashboardPlugin() : () => {}
  ]
}
