/*
 * grunt-pretty-data
 * https://github.com/lxinspc/grunt-pretty-data
 *
 * Copyright (c) 2015 Nathan Adams
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    "pretty-data": {
//      default: {
//        //files: { 'tmp/json': ['test/fixtures'] }
//      },
//      minify_all: {
//        options: { minify: true }
//        //files: { 'tmp/json': }
//      },
//      minify_none: {
//        options: { minify: false }
//      },
//      minify_xml: {
//        options: { filetypes: ['xml'] }
//      },
//      minify_json: {
//        options: { filetypes: ['json'] }
//      },
//      minify_css: {
//        options: { filetypes: ['css'] }
//      },
//      minify_sql: {
//        options: { filetypes: ['sql'] }
//      },
      xml: {
        options: { minify: false, filetypes: ['xml'] },
        files: { 'tmp/single/unmin': ['test/fixtures/*']}
      },
      xmlmincom: {
        options: { minify: true, preserveComments: true, filetypes: ['xml'] },
        files: { 'tmp/single/mincom': ['test/fixtures/*']}
      },
      xmlmin: {
        options: { minify: true, preserveComments: false, filetypes: ['xml'] },
        files: { 'tmp/single/min': ['test/fixtures/*']}
      },
//      json: {
//        options: { minify: false, filetypes: ['json'] }
//      },
//      css: {
//        options: { minify: false, filetypes: ['css'] }
//      },
//      sql: {
//        options: { minify: false, filetypes: ['sql'] },
//      },
      
      
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'pretty-data', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
