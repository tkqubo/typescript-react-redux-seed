'use strict';
import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import * as Promise from 'bluebird';

export interface ServerConfig {
  port?: number;
}

export class ServerBuilder {
  static get defaultPort() { return 3000; }

  constructor(public config: ServerConfig = {}) { }

  start(): Promise<http.Server> {
    let html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf-8');

    let app: express.Express = express();
    app.use('/', express.static(path.join(__dirname, '..', 'dist')));
    app.get('/', (req: express.Request, res: express.Response) => {
      res
        .contentType('html')
        .end(html);
    });

    let server = http.createServer(app);

    let port = this.config.port || ServerBuilder.defaultPort;
    return new Promise<http.Server>((resolve: Function) => {
      server.listen(port, resolve(server));
    });
  }
}
