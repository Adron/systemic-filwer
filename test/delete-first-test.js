/**
 * Created by Adron on 12/11/15.
 * Description: Template for node.js projects.
 */
"use strict";

var assert = require('assert');
var should = require("chai").should();
var fs = require("fs");

var path = "./FTP-Backup-Drive/";
var file = "dataToImport.dat";
var fileAndPath = path + file;

describe("When using the file watcher", function() {
  describe("a file", function() {
    it("should be detected.", function(done){

      fs.mkdir(path, function(err){
        if(err === null || err.code === "EEXIST") {
          fs.appendFile(fileAndPath, 'data to append', function() {

            // Test here.

            fs.unlinkSync(fileAndPath);
            fs.rmdirSync(path);
          });
        } else {
          throw err;
        }
      });
      done();

    })

    it("should be true is true", function () {
      true.should.be.equal(true);
    })
  })
});