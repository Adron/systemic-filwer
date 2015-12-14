/**
 * Created by Adron on 12/11/15.
 * Description: Template for node.js projects.
 */
"use strict";

var assert = require('assert');
var should = require("chai").should();
var fs = require("fs");
var systemicWatcherUnderTest = require("../src/systemic-watcher");

var path = "./FTP-Backup-Drive/";
var file = "dataToImport.dat";
var fileAndPath = path + file;
var generalData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis lacus ac velit hendrerit, at hendrerit ex iaculis. Donec odio dui, dapibus id magna non, luctus sollicitudin nulla. Donec dictum nec lacus ut bibendum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dapibus, odio in vestibulum tempor, lorem ex tincidunt tellus, vel feugiat nulla erat id arcu. Vivamus faucibus odio sit amet aliquet ultrices. Curabitur viverra nibh luctus ligula vulputate, et maximus sem tempus. Cras auctor velit ac lacus congue, vel porta ligula dignissim. Duis interdum ac arcu eu semper. Fusce efficitur metus sed arcu feugiat, at consequat magna faucibus. Praesent facilisis erat nec bibendum eleifend. Fusce vitae neque quis odio feugiat elementum. Suspendisse potenti. Maecenas at ipsum sem. Pellentesque tincidunt massa quis mi fringilla, eget ornare dui tincidunt. Cras auctor turpis et nunc molestie ultrices. Nullam eu risus aliquam, sagittis velit sed, convallis nibh. Aliquam feugiat vulputate velit eget fringilla. Integer mattis vel nisi ac rutrum. Mauris sagittis leo et erat sodales, venenatis imperdiet libero tincidunt. Aenean aliquet ultricies orci, facilisis vehicula enim mattis a. Fusce egestas, nisl at finibus dignissim, elit velit porta nunc, eget sagittis massa sapien vel leo. Maecenas justo diam, lobortis sed nibh non, molestie porta purus. Integer dignissim ipsum ac quam vehicula, non condimentum mauris porta. Duis lacus elit, bibendum sit amet scelerisque id, lobortis sed tortor.";

describe("When using the file watcher", function () {
  describe("a file", function () {
    it("should be detected.", function (done) {

      fs.mkdir(path, function (err) {
        if (err === null || err.code === "EEXIST") {
          fs.appendFile(fileAndPath, generalData, function () {
            // Begin Test here.

            systemicWatcherUnderTest.

            // End Test here.
            fs.unlinkSync(fileAndPath);
            fs.rmdirSync(path);
          });
        } else {
          throw err;
        }
      });
      done();
    });
  });
});

//# sourceMappingURL=delete-first-test-compiled.js.map