/*global suite, test, assert, setup, bb  */
'use strict';

suite('<%= _.classify(name) %> Controller', function () {

    setup(function () {
        this.<%= _.classify(name) %> = new <%= _.camelize(appname) %>.Controllers.<%= _.classify(name) %>Controller();
    });

});
