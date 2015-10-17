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

    grunt.registerMultiTask('pretty-data', 'Apply pretty data to supplied files', function() {
        var options = this.options({ preserveComments: false, minify: true, filetypes: ['xml','json','css','sql'] });

        options.filetypes.forEach(function(fileType) {
          var sPdFunction = 'pd.' + fileType + (options.minify) ? 'min' : ''; 
          grunt.log.writeln('Will run ' + chalk.yellow(sPdFunction));
        });

    });
};
