/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var fs      = require('fs');

describe('m-mocha generator : tdd', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      done();
    }.bind(this));
  });

  it('creates collection', function (done) {
    this.collection = helpers.createGenerator('m-mocha:collection', [
      '../../collection'
    ], ['temp'], {ui: 'tdd', coffee: true});

    this.collection.run({}, function () {
      helpers.assertFiles([
        ['test/collections/temp-test.coffee',
        /suite \'Temp Collection\', ->/]
      ]);
      done();
    });
  });

  it('creates model', function (done) {
    this.model = helpers.createGenerator('m-mocha:model', [
      '../../model'
    ], ['temp'], {ui: 'tdd', coffee: true});
    this.model.run({}, function () {
      helpers.assertFiles([
        ['test/models/temp-test.coffee',
        /suite \'Temp Model\', ->/]
      ]);
      done();
    });
  });

  it('creates router', function (done) {
    this.router = helpers.createGenerator('m-mocha:router', [
      '../../router'
    ], ['temp'], {ui: 'tdd', coffee: true});

    this.router.run({}, function () {
      helpers.assertFiles([
        ['test/routers/temp-test.coffee',
        /suite \'Temp Router\', ->/]
      ]);
      done();
    });
  });

  it('creates view', function (done) {
    this.view = helpers.createGenerator('m-mocha:view', [
      '../../view'
    ], ['temp'], {ui: 'tdd', coffee: true});

    this.view.run({}, function () {
      helpers.assertFiles([
        ['test/views/temp-test.coffee',
        /suite \'Temp View\', ->/]
      ]);
      done();
    });
  });
});
