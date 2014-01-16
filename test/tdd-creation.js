/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('m-mocha generator : tdd', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      done();
    }.bind(this));
  });

  it('creates model', function (done) {
    this.model = helpers.createGenerator('m-mocha:model', [
      '../../model'
      ], ['temp'], {ui: 'tdd'});
    this.model.run({}, function () {
      helpers.assertFiles([
        ['test/models/temp-test.js',
        /suite\(\'Temp Model\'/]
      ]);
      done();
    });
  });

  it('creates collection', function(done){
    this.collection = helpers.createGenerator('m-mocha:collection', [
      '../../collection'
      ], ['temp'], {ui: 'tdd'});
    this.collection.run({}, function () {
      helpers.assertFiles([
        ['test/collections/temp-test.js',
        /suite\(\'Temp Collection\'/]
      ]);
      done();
    });
  });

  it('creates view', function(done){
    this.view = helpers.createGenerator('m-mocha:view', [
      '../../view'
      ], ['temp'], {ui: 'tdd'});

    this.view.run({}, function () {
      helpers.assertFiles([
        ['test/views/temp-test.js',
        /suite\(\'Temp View\'/]
      ]);
      done();
    });
  });

  it('creates router', function(done){
    this.router = helpers.createGenerator('m-mocha:router', [
      '../../router'
      ], ['temp'], {ui: 'tdd'});

    this.router.run({}, function () {
      helpers.assertFiles([
        ['test/routers/temp-test.js',
        /suite\(\'Temp Router\'/]
      ]);
      done();
    });
  });

  it('creates controller', function(done){
    this.controller = helpers.createGenerator('m-mocha:controller', [
      '../../controller'
      ], ['temp'], {ui: 'tdd'});

    this.controller.run({}, function () {
      helpers.assertFiles([
        ['test/controllers/temp-test.js',
        /suite\(\'Temp Controller\'/]
      ]);
      done();
    });
  });
});
