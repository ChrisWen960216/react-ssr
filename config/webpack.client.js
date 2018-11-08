const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');

const clientConfig = {
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            localIndentName: '[name]_[local]_[hash:base64]',
          },
        }],
      },
    ],

  },
};

module.exports = merge(commonConfig, clientConfig);
