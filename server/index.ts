'use strict';
import * as yargs from 'yargs';
import {DefaultServerRunner} from './defaultServerRunner';
import {WebpackDevServerRunner} from './webpackDevServerBuilder';
import {ServerConfig} from './serverRunner';

export type Environment = 'development'|'production';

let {port, dev, environment} = yargs
  .alias('d', 'dev')
  .alias('p', 'port')
  .alias('e', 'environment')
  .describe('port', "Web server's port")
  .alias('h', 'help')
  .help('help')
  .argv
;

new (dev ? WebpackDevServerRunner : DefaultServerRunner)({ port, environment })
  .run()
  .then((config: ServerConfig) => {
    console.log(`listened to ${config.port}`);
  });
