/**
 * Created by Adron on 12/10/15.
 * Description: Wraps the core functionality around the needs of the project 'systemic-filewatcher'
 */
"use strict";

var systemic_watcher = {};
var chokidar = require("chokidar");
var fs = require("fs");
var systemic_options = require("../options.json").systemic_watcher;

var options = systemic_options.watch_options;
var pathToWatch = systemic_options.watch_path;
var logFile = systemic_options.watch_log;
var watch_file = systemic_options.watch_file;
var watcher;

var loggit = function (appendData) {
  console.log(appendData);
  fs.appendFile(logFile, appendData + "\n", function () {
    console.log("  - Wrote: " + appendData);
  });
};

systemic_watcher.watch = function () {
  watcher = chokidar.watch(pathToWatch, options)
    .on("all", eventDefault)
    .on("add", eventDefault)
    .on("change", eventDefault)
    .on("unlink", eventDefault)
    .on("addDir", eventDefault)
    .on("unlinkDir", eventDefault)
    .on("ready", eventDefault)
    .on("raw", eventDefault)
    .on("error", eventDefault);
};

systemic_watcher.watchStop = function () {
  watcher.close();
};

systemic_watcher.watchPaths = function () {
  return watcher.getWatched();
};

function eventDefault(event, path) {
  loggit("Event: " + event);
  loggit("Path: " + path);
}

module.exports = systemic_watcher;