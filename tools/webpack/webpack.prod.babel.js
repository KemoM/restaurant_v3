// Important modules this config uses
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = require('./webpack.base.babel')({
  // In production, we skip all hot-reloading stuff
  entry: {
    index: path.join(process.cwd(), 'client-app/index.js'),
    vendor: ['react', 'react-dom', 'react-redux', 'react-router-redux', 'react-router-dom', 'redux', 'redux-form', 'redux-thunk', 'redux-promise-middleware' ],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
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
      sourceMap: true,   // enable source maps to map errors (stack traces) to modules
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
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
  devtool: 'source-map',
  performance: {
    assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename)),
  },
});