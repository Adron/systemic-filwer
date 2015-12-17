/**
 * Created by Adron on 12/16/15.
 * Description:
 */

"use strict";

var sitrep = require("../src/sitrep");
var assert = require('assert');
var should = require("chai").should();
var stat = require("../src/stat");

describe("When working with immediate sitrep status", function () {

  describe("the json file", function () {

    before(function () {
      sitrep.SaveStat("someevent", "blagh", false, false);
    });

    it("should exist.", function () {
      var stat = sitrep.ReadStat();
      stat.should.exist;
    });

    it("should have a stamped date equal to today's date.", function () {
      var stat = sitrep.ReadStat();
      stat.StampedDate.should.equal(new Date().getDate());
    });

    after(function () {

    })
  });
});