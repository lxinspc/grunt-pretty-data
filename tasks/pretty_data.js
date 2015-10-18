/*
 * grunt-pretty-data
 * https://github.com/lxinspc/grunt-pretty-data
 *
 * Copyright (c) 2015 Nathan Adams
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var pd = require('pretty-data').pd,
    maxmin = require('maxmin'),
    chalk = require('chalk');

  grunt.registerMultiTask('pretty-data', 'Apply pretty data to supplied files', function () {
    //Set default options (preserve comments, minify and filtypes)
    var options = this.options({
      preserveComments: false,
      minify: true,
      filetypes: ['xml', 'json', 'css', 'sql']
    });
    var oFiletypes = {};
    //Build functions we will execute for each
    grunt.verbose.writeln(chalk.white.underline('Building function map for filetypes specified'));
    var mSupportComments = { xml: true, css: true, json: false, sql: false };
    options.filetypes.forEach(function(filetype) {
      var sPdFunction = (options.minify) ? filetype + 'min' : filetype;
      oFiletypes[filetype] = {
        name: sPdFunction,
        supportComments: mSupportComments[filetype]
      };
      grunt.verbose.writeln('Filetype: ' + chalk.cyan(filetype) + ' will be processed with ' + chalk.red('pd.' + sPdFunction));
    });
    //Process file supplied
    this.files.forEach(function (file) {
      var aMin = file.src.filter(function (filepath) {
        //Test to see of file should be processed
        if (grunt.file.exists(filepath) && grunt.file.isFile(filepath) && oFiletypes[filepath.substr(filepath.lastIndexOf('.')+1)]) {
          return true;
        } else {
          grunt.verbose.warn(chalk.blue(filepath) + ' will be ignored');
          return false;
        }
      });
      aMin.forEach(function(filepath) {
        var sMin;
        var sFiletype = filepath.substr(filepath.lastIndexOf('.')+1);
        try {
          var sMax = grunt.file.read(filepath);
          var sPdFunction = oFiletypes[sFiletype].name;
          sMin = (oFiletypes[sFiletype].supportComments) ? pd[sPdFunction](sMax,options.preserveComments) : pd[sPdFunction](sMax);
          var sFile = filepath.match(/\/([^/]*)$/)[1];
          grunt.file.write(file.dest + '/' + sFile,sMin);
          var sOption = (options.preserveComments && oFiletypes[sFiletype].supportComments) ? ' --preserve-comments' : '';
          grunt.log.writeln(chalk.blue.underline(filepath) + ' written using ' + chalk.red(sPdFunction + sOption) + ' to ' + chalk.blue.underline(file.dest + '/' + sFile) + ' ' + chalk.green(maxmin(sMax,sMin,true)));
        } catch (err) {
          grunt.log.warn(chalk.blue(filepath) + ' has error ' + chalk.red.underline(err));
        }
      });
    });
  });
};
