'use strict';
var util = require('util');
var path = require('path');
var scriptBase = require('../script-base');

var BackboneMochaGenerator = module.exports = function (args, options, config) {
  scriptBase.apply(this, arguments);

  this.mkdir('test/controllers');
  this.destFile = path.join('test/controllers', this.fileName());
};

util.inherits(BackboneMochaGenerator, scriptBase);

BackboneMochaGenerator.prototype.createController = function createModel() {
  if(this.options.coffee){
    return;
  }

  this.template(this.options.ui + '/controller' + this.ext, this.destFile);
  this.addScriptToIndex('controllers/' + this.name);
};

BackboneMochaGenerator.prototype.createControllerCoffee = function createCollectionCoffee() {
  if(!this.options.coffee){
    return;
  }

  this.template('coffee-' + this.options.ui + '/controller' + this.ext, this.destFile);
  this.addScriptToIndex('controllers/' + this.name);
};
