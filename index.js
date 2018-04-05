// See https://github.com/jonschlinkert/pretty for Pretty configuration
var pretty       = require('pretty');
var objectAssign = require('object-assign');
var through      = require('through2');
var defaultPug   = require('pug');
var ext          = require('gulp-util').replaceExtension;
var PluginError  = require('gulp-util').PluginError;
var log          = require('gulp-util').log;

module.exports = function(options) {
  return through.obj(function(file, enc, cb) {
    if (file.isStream()) {
      return cb(new PluginError('gulp-pretty', 'Streaming not supported'));
    }

    if (file.isBuffer()) {
      try {
        var contents = String(file.contents);
        var compiled = pretty(contents, {ocd: options.ocd});
        
        file.contents = new Buffer(compiled);
      } catch (e) {
        return cb(new PluginError('gulp-pretty', e));
      }
    }
    cb(null, file);
  });
};