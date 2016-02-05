import {Configuration} from 'webpack';

let configuration: Configuration = {
  entry: [
   './src/client/index.tsx'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {},
    extensions: ['', '.tsx', '.ts', '.js']
  },
  module: {
    preLoaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = configuration;
