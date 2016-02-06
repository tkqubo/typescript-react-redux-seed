'use strict';
import * as Promise from 'bluebird';
import {Environment} from './index';

export interface ServerConfig {
  port?: number;
  environment?: Environment;
}

export abstract class ServerRunner {
  static get defaultPort() { return 3000; }
  static get defaultEnvironment(): Environment { return 'development'; }

  constructor(public config: ServerConfig = {}) {
    config.port = config.port || ServerRunner.defaultPort;
    config.environment = config.environment || ServerRunner.defaultEnvironment;
  }

  public abstract run(): Promise<ServerConfig>;
}
