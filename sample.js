/**
 * Created by Adron on 12/10/15.
 */
"use strict";
var chokidar = require('chokidar');

var pathToWatch = "../FTP-Backup-Drive/process/.";
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

var watcher = chokidar.watch(pathToWatch, options).on('all', (event, path) => {
  console.log(event, path);
});

