const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const alias = require('./webpack_alias');

module.exports = {
  entry: {
    index: { import: './src/index.tsx', dependOn: 'shared' },
    shared: ['react'],
  },
  module: {
    rules: [
      {
        use: ['ts-loader', 'thread-loader'],
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {},
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'json'],
    alias,
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9000,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
};
