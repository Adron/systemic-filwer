/**
 * Created by Adron on 12/16/15.
 * Description: Code to handle the json file used for immediate sitrep response providing a way to...
 *   A: have a way to gain feedback on the file watcher for testing and...
 *   B: provide a way to determine the exact state of the file watcher.
 */
"use strict";

var sitrep = {};
var jsonfile = require('jsonfile');
var util = require('util');
var sitrepPath = "./sitrep.json";
var sitrepStat = require("./stat");

sitrep.ReadStat = function () {
  return jsonfile.readFileSync(sitrepPath);
};

sitrep.SaveStat = function (event, path, directory, file) {
  sitrepStat.StampedDate = new Date().getDate();
  sitrepStat.StampedTime = new Date().getTime();
  sitrepStat.WatcherStat.Event = event;
  sitrepStat.WatcherStat.Path = path;
  sitrepStat.WatcherStat.Directory = directory;
  sitrepStat.WatcherStat.File = file;
  jsonfile.writeFileSync(sitrepPath, sitrepStat);
};

module.exports = sitrep;