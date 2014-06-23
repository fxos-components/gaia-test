/*jshint node:true*/
'use strict';

/**
 * Dependencies
 */

var spawn = require('child_process').spawn;
var which = require('npm-which').sync;
var async = require('async');

/**
 * Exports
 */

/**
 * Run `bower install` at cwd.
 *
 * We use `npm-which` to find the Bower
 * binary as we don't know if it has been
 * installed into this package, or further
 * up the module hierachy.
 *
 * @param  {Function} done
 * @return
 */
module.exports = function(done) {
  var bin = which('bower', { cwd: __dirname + '/..' });
  var cwd = process.cwd();
  spawn(bin, ['install'], { cwd: cwd, stdio: 'inherit' })
    .on('close', done);
};
