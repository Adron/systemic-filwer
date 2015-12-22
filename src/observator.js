/**
 * Created by Adron on 12/10/15.
 * Description: Wraps the core functionality around the needs of the project 'systemic-filewatcher'
 */
"use strict";

var observator = {};
var chokidar = require("chokidar");
var fs = require("fs");
var systemic_options = require("../configuration/options.json").systemic_watcher;

var options = systemic_options.watch_options;
var pathToWatch = systemic_options.watch_path;
var logFile = systemic_options.watch_log;
var watcher;

var loggit = function (appendData) {
  console.log(appendData);
  fs.appendFile(logFile, appendData + "\n", function () {
    console.log("  - Wrote: " + appendData);
  });
};

observator.watch = function () {

  // Initialize File.


  watcher = chokidar.watch(pathToWatch, options)
    .on("all", eventAll)
    .on("add", eventAll)
    .on("change", eventAll)
    .on("unlink", eventAll)
    .on("addDir", eventAll)
    .on("unlinkDir", eventAll)
    .on("ready", eventAll)
    .on("raw", eventAll)
    .on("error", eventAll);
};

observator.watchStop = function () {
  watcher.close();
};

observator.watchPaths = function () {
  return watcher.getWatched();
};

function logEventAndPath(event, path) {
  loggit("Event: " + event);
  loggit("Path: " + path);
}

function eventAll(event, path) {
  logEventAndPath(event, path);
}

function eventChange(event, path) {
  logEventAndPath(event, path);
}

function eventUnlink(event, path) {
  logEventAndPath(event, path);
}

function eventAddDir(event, path) {
  logEventAndPath(event, path);
}

module.exports = observator;