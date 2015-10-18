'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.pretty_data = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  xml: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/unmin/test.xml');
    var actual = grunt.file.read('tmp/single/unmin/test.xml');
    test.equal(actual, expected, 'test xml beautify');
    test.done();
  },
  xmlmincom: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/mincom/test.xml');
    var actual = grunt.file.read('tmp/single/mincom/test.xml');
    test.equal(actual, expected, 'test xml minify preserve comments');
    test.done();
  },
  xmlmin: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/min/test.xml');
    var actual = grunt.file.read('tmp/single/min/test.xml');
    test.equal(actual, expected, 'test xml minify');
    test.done();
  },
  json: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/unmin/test.json');
    var actual = grunt.file.read('tmp/single/unmin/test.json');
    test.equal(actual, expected, 'test json beautify');
    test.done();
  },
  jsonmin: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/min/test.json');
    var actual = grunt.file.read('tmp/single/min/test.json');
    test.equal(actual, expected, 'test json minify');
    test.done();
  },
  css: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/unmin/test.css');
    var actual = grunt.file.read('tmp/single/unmin/test.css');
    test.equal(actual, expected, 'test css beautify');
    test.done();
  },
  cssmincom: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/mincom/test.css');
    var actual = grunt.file.read('tmp/single/mincom/test.css');
    test.equal(actual, expected, 'test css minify preserve comments');
    test.done();
  },
  cssmin: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/min/test.css');
    var actual = grunt.file.read('tmp/single/min/test.css');
    test.equal(actual, expected, 'test css minify');
    test.done();
  },
  sql: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/unmin/test.sql');
    var actual = grunt.file.read('tmp/single/unmin/test.sql');
    test.equal(actual, expected, 'test sql beautify');
    test.done();
  },
  sqlmin: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/min/test.sql');
    var actual = grunt.file.read('tmp/single/min/test.sql');
    test.equal(actual, expected, 'test sql minify');
    test.done();
  },  
};
