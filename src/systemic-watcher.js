/**
 * Created by Adron on 12/10/15.
 * Description: Wraps the core functionality around the needs of the project 'systemic-filewatcher'
 */
"use strict";

var systemic_watcher = {};
var chokidar = require("chokidar");
var systemic_options = require("../options.json").systemic_watcher;

var watchOptions = systemic_options.watch_options;
var pathToWatch = systemic_options.watch_path;
var logFile = systemic_options.watch_log;

var log = function(appendData){
  console.log(appendData);
  fs.appendFile(logFile, appendData, function() {
    console.log("Wrote: " + appendData);
  });
}

var watcher = chokidar.watch(pathToWatch, options)
  .on('all', eventDefault)
  .on('add', path => log('Extra event message for $path'))
  .on('change', path => log('Blargh'));

function eventDefault(event, path) {
  log("Event: " + event + " Path: " + path);
}



module.exports = systemic_watcher;