const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.js');

const serverConfig = {
  target: 'node',
  entry: './src/server/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: [nodeExternals()],

};

module.exports = merge(commonConfig, serverConfig);
