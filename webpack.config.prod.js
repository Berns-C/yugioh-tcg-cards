const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
require('dotenv').config({ path: './.env' });

module.exports = merge(common, {
  mode: 'production',
  devtool: 'nosources-source-map',
  plugins: [
    new HtmlPlugin({
      title: 'YuGiOh',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify(env),
      },
    }),
  ],
});
