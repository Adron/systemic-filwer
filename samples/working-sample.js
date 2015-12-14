/**
 * Created by Adron on 12/11/15.
 * Description: Working sample code that is implemented.
 */
"use strict";
var chokidar = require('chokidar');

// Parameters
var pathToWatch = "../../FTP-Backup-Drive/process/.";
var log = console.log.bind(console);
var options = {
  persistent: true,
  //ignored: '*.txt',
  //ignoreInitial: false,
  //followSymlinks: true,
  cwd: '.',
  usePolling: true,
  interval: 100,
  binaryInterval: 300,
  alwaysStat: false,
  depth: 99,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100
  },
  ignorePermissionErrors: false,
  atomic: true
};

function eventDefault(event, path){
  log(event, path);
}

var watcher = chokidar.watch(pathToWatch, options)
  .on('all', eventDefault)
  .on('add', path => log('Extra event message for $path'))
  .on('change', path => log('Blargh'));

