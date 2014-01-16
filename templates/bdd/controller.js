/*global describe, beforeEach, assert, it  */
'use strict';

describe('<%= _.classify(name) %> Controller', function () {

    beforeEach(function () {
        this.<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Controllers.<%= _.classify(name) %>Controller();
    });

});
