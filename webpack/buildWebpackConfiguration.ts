'use strict';
import * as webpack from 'webpack';
import * as path from 'path';

import {Environment} from '../server/index';

export interface WebpackConfigurationOption {
  environment?: Environment;
}

export function buildWebpackConfiguration(options: WebpackConfigurationOption = {}): webpack.Configuration {
  options.environment = options.environment || 'development';

  let configuration: webpack.Configuration = {
    entry: [
      './client/index.tsx',
    ],
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'bundle.js',
    },
    resolve: {
      alias: {},
      extensions: ['', '.tsx', '.ts', '.js', '.styl'],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.environment)
        },
        __DEVELOPMENT__: options.environment !== 'production',
      }),
    ],
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
          loader: 'css?minimize',
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: 'file',
          query: {
            name: '/images/[1]/[name].[ext]?[hash]',
            regExp: '([^/]*)/[^/]*$',
          },
        },
      ],
    },
  };

  return configuration;
}
