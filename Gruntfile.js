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
      default: {
        files: { 'tmp/multiple/default/': ['test/fixtures/*'] }
      },
      beautify: {
        options: { minify: false },
        files: { 'tmp/multiple/beautify/': ['test/fixtures/*'] }      
      },
      preserveComments: {
        options: { minify: true, preserveComments: true },
        files: { 'tmp/multiple/preserveComments/': ['test/fixtures/*'] }      
      },
      xml: {
        options: { minify: false, filetypes: ['xml'] },
        files: { 'tmp/single/unmin/xml/': ['test/fixtures/*']}
      },
      xmlmincom: {
        options: { minify: true, preserveComments: true, filetypes: ['xml'] },
        files: { 'tmp/single/mincom/xml/': ['test/fixtures/*']}
      },
      xmlmin: {
        options: { minify: true, preserveComments: false, filetypes: ['xml'] },
        files: { 'tmp/single/min/xml/': ['test/fixtures/*']}
      },
      json: {
        options: { minify: false, filetypes: ['json'] },
        files: { 'tmp/single/unmin/json/': ['test/fixtures/*']}
      },
      jsonmin: {
        options: { minify: true, filetypes: ['json'] },
        files: { 'tmp/single/min/json/': ['test/fixtures/*']}
      },
      css: {
        options: { minify: false, filetypes: ['css'] },
        files: { 'tmp/single/unmin/css/': ['test/fixtures/*']}
      },
      cssmincom: {
        options: { minify: true, preserveComments: true, filetypes: ['css'] },
        files: { 'tmp/single/mincom/css/': ['test/fixtures/*']}
      },
      cssmin: {
        options: { minify: true, preserveComments: false, filetypes: ['css'] },
        files: { 'tmp/single/min/css/': ['test/fixtures/*']}
      },
      sql: {
        options: { minify: false, filetypes: ['sql'] },
        files: { 'tmp/single/unmin/sql/': ['test/fixtures/*']}
      },
      sqlmin: {
        options: { minify: true, filetypes: ['sql'] },
        files: { 'tmp/single/min/sql/': ['test/fixtures/*']}
      },
      doubledot: {
        options: { minify: false, preserveComments: false, filetypes: ['xml'] },
        files: {'tmp/single/doubledot/': ['test/fixtures/*']}
      }
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
