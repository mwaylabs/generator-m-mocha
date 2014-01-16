/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('m-mocha generator : BDD', function () {
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
      ], ['temp']);
    this.model.options.ui = 'bdd';
    this.model.run({}, function () {
      helpers.assertFiles([
        ['test/models/temp.spec.js',
        /describe\(\'Temp Model\'/]
      ]);
      done();
    });
  });

  it('creates collection', function(done){
    this.collection = helpers.createGenerator('m-mocha:collection', [
      '../../collection'
      ], ['temp']);
    this.collection.options.ui = 'bdd';
    this.collection.run({}, function () {
      helpers.assertFiles([
        ['test/collections/temp.spec.js',
        /describe\(\'Temp Collection\'/]
      ]);
      done();
    });
  });

  it('creates view', function(done){
    this.view = helpers.createGenerator('m-mocha:view', [
      '../../view'
      ], ['temp']);
    this.view.options.ui = 'bdd'
    this.view.run({}, function () {
      helpers.assertFiles([
        ['test/views/temp.spec.js',
        /describe\(\'Temp View\'/]
      ]);
      done();
    });
  });

  it('creates router', function(done){
    this.router = helpers.createGenerator('m-mocha:router', [
      '../../router'
      ], ['temp']);
    this.router.options.ui = 'bdd'
    this.router.run({}, function () {
      helpers.assertFiles([
        ['test/routers/temp.spec.js',
        /describe\(\'Temp Router\'/]
      ]);
      done();
    });
  });

  it('creates controller', function(done){
    this.controller = helpers.createGenerator('m-mocha:controller', [
      '../../controller'
      ], ['temp']);
    this.controller.options.ui = 'bdd'
    this.controller.run({}, function () {
      helpers.assertFiles([
        ['test/controllers/temp.spec.js',
        /describe\(\'Temp Controller\'/]
      ]);
      done();
    });
  });
});
