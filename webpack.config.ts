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
