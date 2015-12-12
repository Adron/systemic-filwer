/**
 * Created by Adron on 12/10/15.
 */
"use strict";

var chokidar = require('chokidar');

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

var watcher = chokidar.watch(pathToWatch, options).on('all', eventDefault).on('add', function (path) {
  return log('Extra event message for $path');
}).on('change', function (path) {
  return log('Blargh');
});

function eventDefault(event, path) {
  log(event, path);
}

//# sourceMappingURL=sample-complex-compiled.js.map