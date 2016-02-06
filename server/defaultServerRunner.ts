'use strict';
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import * as Promise from 'bluebird';
import {ServerRunner, ServerConfig} from './serverRunner';

export class DefaultServerRunner extends ServerRunner {
  public run(): Promise<ServerConfig> {
    let html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8');

    let app: express.Express = express();
    app.use('/', express.static(path.join(__dirname, '..', 'dist')));
    app.get('/', (req: express.Request, res: express.Response) => {
      res
        .contentType('html')
        .end(html);
    });

    let server = http.createServer(app);

    return new Promise<ServerConfig>((resolve: Function) => {
      server.listen(this.config.port, resolve(this.config));
    });
  }
}
