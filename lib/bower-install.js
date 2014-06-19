/*jshint node:true*/
'use strict';

/**
 * Dependencies
 */

var spawn = require('child_process').spawn;

/**
 * Locals
 */

var bin = __dirname + '/../node_modules/.bin/bower';
var cwd = process.cwd();

/**
 * Exports
 */

module.exports = function(done) {
  console.log(bin);
  spawn(bin, ['install'], { cwd: cwd, stdio: 'inherit' })
    .on('close', done);
};
