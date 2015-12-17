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
var options = require("../options");
var generalData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mattis lacus ac velit hendrerit, at hendrerit ex iaculis. Donec odio dui, dapibus id magna non, luctus sollicitudin nulla. Donec dictum nec lacus ut bibendum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dapibus, odio in vestibulum tempor, lorem ex tincidunt tellus, vel feugiat nulla erat id arcu. Vivamus faucibus odio sit amet aliquet ultrices. Curabitur viverra nibh luctus ligula vulputate, et maximus sem tempus. Cras auctor velit ac lacus congue, vel porta ligula dignissim. Duis interdum ac arcu eu semper. Fusce efficitur metus sed arcu feugiat, at consequat magna faucibus. Praesent facilisis erat nec bibendum eleifend. Fusce vitae neque quis odio feugiat elementum. Suspendisse potenti. Maecenas at ipsum sem. Pellentesque tincidunt massa quis mi fringilla, eget ornare dui tincidunt. Cras auctor turpis et nunc molestie ultrices. Nullam eu risus aliquam, sagittis velit sed, convallis nibh. Aliquam feugiat vulputate velit eget fringilla. Integer mattis vel nisi ac rutrum. Mauris sagittis leo et erat sodales, venenatis imperdiet libero tincidunt. Aenean aliquet ultricies orci, facilisis vehicula enim mattis a. Fusce egestas, nisl at finibus dignissim, elit velit porta nunc, eget sagittis massa sapien vel leo. Maecenas justo diam, lobortis sed nibh non, molestie porta purus. Integer dignissim ipsum ac quam vehicula, non condimentum mauris porta. Duis lacus elit, bibendum sit amet scelerisque id, lobortis sed tortor.";

describe("When using the file watcher", function () {

  before(function () {
    systemicWatcherUnderTest.watch();
    fs.mkdirSync(path);
    fs.appendFile(fileAndPath);
  });

  describe("a file", function () {

    it("should have paths registered to watch.", function (done) {
      var result = systemicWatcherUnderTest.watchPaths();
      result.should.exist;
      done();
    });

    it("should add directory.", function (done) {
      var pathTest = path + "someDirectory/";
      fs.mkdirSync(pathTest);
      fs.statSync(pathTest).isDirectory().should.be.equal(true);
      fs.rmdirSync(pathTest);
      done();
    });

    it("should trigger upon all file & directory actions.", function (done) {
      // Add test to verify .on("all", eventDefault)
      should.exist(failall);
      done();
    });

    it("should trigger upon add file & directory actions.", function (done) {
      // Add test to verify .on("add", eventDefault)
      should.exist(failadd);
      done();
    });

    it("should trigger upon change file & directory actions.", function (done) {
      // Add test to verify .on("change", eventDefault)
      should.exist(failchange);
      done();
    });

    it("should trigger upon unlink/delete file & directory actions.", function (done) {
      // Add test to verify .on("unlink", eventDefault)
      should.exist(failunlink);
      done();
    });

    // TODO: Finish others.
  });

  after(function () {
    fs.unlinkSync(fileAndPath);
    fs.rmdirSync(path);
    systemicWatcherUnderTest.watchStop();
  })

});