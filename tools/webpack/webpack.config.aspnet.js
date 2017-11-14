/* eslint-disable */
var webpack = require('webpack');
var path = require('path');
const merge = require('webpack-merge');


module.exports = {
    resolve: { extensions: ['.js', '.jsx'] },
    devtool: 'source-map',
    entry: {
        'main': './client-app/index.js'
    },
    output: {
       path: path.resolve(process.cwd(), 'wwwroot', 'dist'),
       publicPath: '/dist/',
       filename: 'aspnetbundle.js'
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-1'],
                    plugins: ['transform-class-properties', 'react-hot-loader/babel']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'image/png',
                    limit: 100000
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'image/svg+xml',
                    limit: 10000
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'application/octet-stream',
                    limit: 10000
                }
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                query: {
                    mimetype: 'application/font-woff',
                    limit: 10000
                }
            },
            {
                test: /\.(jpg|eot)$/,
                loader: 'file-loader'
            }
        ]
    }
};