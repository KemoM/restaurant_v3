// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(process.cwd(), 'client-app/index.js'),
  ],

  // Utilize long-term caching by adding content hashes (not compilation hashes) to compiled assets
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true,
    }),
    new ImageminPlugin({
      disable: false,
      optipng: {
        optimizationLevel: 3,
      },
      gifsicle: {
        optimizationLevel: 1,
      },
      jpegtran: {
        progressive: false,
      },
      svgo: {
      },
      pngquant: null,
      plugins: [],
    }),
    new UglifyJSPlugin({
      compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true
    },
    output: {
      comments: false
    }
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    }),
  ],
  devtool: 'cheap-module-source-map',
  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});