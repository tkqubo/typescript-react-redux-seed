'use strict';
import * as http from 'http';
import * as yargs from 'yargs';
import {ServerBuilder} from './serverBuilder';

let {port} = yargs
  .alias('p', 'port')
  .describe('port', "Web server's port")
  .alias('h', 'help')
  .help('help')
  .argv
;

new ServerBuilder({ port })
  .start()
  .then((server: http.Server) => {
    console.log(`listened to ${server.address().port}`);
  });
