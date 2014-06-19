/*jshint node:true*/
'use strict';

/**
 * Dependencies
 */

var download = require('mozilla-download');
var exists = require('fs').existsSync;

/**
 * Exports
 */

module.exports = function(done) {
  var path = __dirname + '/../firefox';
  var options = {
    branch: 'nightly',
    channel: 'prerelease'
  };

  if (exists(path)) return done();
  download(path, options, done);
};