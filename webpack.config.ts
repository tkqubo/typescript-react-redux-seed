import {Configuration} from 'webpack';

let configuration: Configuration = {
  entry: [
   './src/client/index.tsx'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  resolve: {
    alias: {},
    extensions: ['', '.tsx', '.ts', '.js', '.styl'],
  },
  module: {
    preLoaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'tslint',
      },
    ],
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.css$/,
        loader: 'css?minimize'
      },
    ],
  },
};

module.exports = configuration;
