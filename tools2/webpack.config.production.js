var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  bail: true,
  entry: ['./src/client/init'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ // Optimize the JavaScript...
      compress: {
        warnings: false // ...but do not show warnings in the console (there is a lot of them)
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new ExtractTextPlugin('css/main.css'),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        BABEL_ENV: JSON.stringify("production")
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },
      { test: /\.woff(\d+|\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,  loader: "file" },
      { test: /\.jpe?g$|\.gif$|\.png$/i, loader: 'file?name=[path][name].[ext]' }
    ]
  }
}
