import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

// Resolve __dirname and __filename for ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default{
    mode: 'development',
  entry: {
    index: './src/index.js',
    createContent: './src/createContent.mjs',
  },
  devtool: 'inline-source-map',
  
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
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
};