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
    test.equal(actual, expected, 'File has been pretty printed correctly');
    test.done();
  },
  xmlmincom: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/mincom/test.xml');
    var actual = grunt.file.read('tmp/single/mincom/test.xml');
    test.equal(actual, expected, '02 - xmlmincom failed');
    test.done();
  },
  xmlmin: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/min/test.xml');
    var actual = grunt.file.read('tmp/single/min/test.xml');
    test.equal(actual, expected, '03 - xmlmin failed');
    test.done();
  },
//  json: function (test) {
//    test.expect(1);
//    var expected = grunt.file.read('test/expected/single/unmin/test.json');
//    var actual = grunt.file.read('tmp/single/unmin/test.json');
//    test.equal(actual, expected, '04 - json failed');
//    test.done();
//  },
  jsonmin: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/single/min/test.json');
    var actual = grunt.file.read('tmp/single/min/test.json');
    test.equal(actual, expected, '05 - jsonmin failed');
    test.done();
  },

//  custom_options: function (test) {
//    test.expect(1);
//
//    var actual = grunt.file.read('tmp/custom_options');
//    var expected = grunt.file.read('test/expected/custom_options');
//    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
//
//    test.done();
//  }
};
