const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { default: createContent } = require('./src/createContent');
const { runtime } = require('webpack');

module.exports = {
    mode: 'development',
  entry: {
    index: './src/index.js',
    createContent: './src/createContent.js',
  },
    devServer : {
        static: './dist',
    },
    plugins: [
    new HtmlWebpackPlugin({
        title: 'Restuarant Page',
        template: './src/index.html',
    }),
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
    ],
  },
};