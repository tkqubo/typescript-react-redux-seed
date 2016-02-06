'use strict';
import * as webpack from 'webpack';
import * as Promise from 'bluebird';
import {ServerRunner, ServerConfig} from './serverRunner';

const WebpackDevServer = require('webpack-dev-server');

export class WebpackDevServerRunner extends ServerRunner {
  public run(): Promise<ServerConfig> {
    let configuration = this.loadWebpackConfiguration();
    let compiler = webpack(configuration);
    let server = new WebpackDevServer(compiler, {
      contentBase: 'dist',
      quiet: false,
      noInfo: false,
      stats: { colors: true },
    });

    return new Promise<ServerConfig>((resolve: Function, reject: Function) => {
      server.listen(this.config.port, 'localhost', (err: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(this.config);
        }
      });
    });
  }

  private loadWebpackConfiguration(): webpack.Configuration {
    let { environment } = this.config;
    if (!environment) throw new Error('Environment is not set!');
    let configuration: webpack.Configuration = require(`../webpack/${environment}`);

    configuration.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(environment)
        },
        __DEVELOPMENT__: environment !== 'production',
      })
    );

    return configuration;
  }
}
