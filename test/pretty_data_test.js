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


var filetypes = ['json','xml','css','sql','html','js'];
var neverFind = ['html','js'];

var testSingleFile = function(oTest,sActualRoot,sExpectedRoot,sTestFiletype,sTestDescription) {
  
  oTest.expect(filetypes.length);
  filetypes.forEach(function(sFiletype) {
    var sFile = sActualRoot + 'test.' + sFiletype;
    var bExists = grunt.file.exists(sFile);
    if (sFiletype===sTestFiletype) {
      var sActual = (bExists) ? grunt.file.read(sFile) : ''; 
      var sExpected = grunt.file.read(sExpectedRoot + 'test.' + sFiletype);
      oTest.equal(sActual,sExpected,sTestDescription);
    } else {
      oTest.ok(!bExists);
    }
  });
  oTest.done();
};

var testMultipleFiles = function(oTest,sActualRoot,sExpectedRoot,sTestDescription) {
  oTest.expect(filetypes.length);
  filetypes.forEach(function(sFiletype){
    var sFile = sActualRoot + 'test.' + sFiletype;
    var bExists = grunt.file.exists(sFile);
    if (neverFind.indexOf(sFiletype) > -1 ) {
      oTest.ok(!bExists,sTestDescription + ' test.' + sFiletype + ' existence check');
    } else {
      var sActual = (bExists) ? grunt.file.read(sFile) : ''; 
      var sExpected = grunt.file.read(sExpectedRoot + 'test.' + sFiletype);
      oTest.equal(sActual,sExpected,sTestDescription + 'test.' + sFiletype + ' equal check');      
    }
  }); 
  oTest.done();
};

exports.pretty_data = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default: function (test) {
    testMultipleFiles(test,'tmp/multiple/default/','test/expected/single/min/','Default');
  },
  beautify: function (test) {
    testMultipleFiles(test,'tmp/multiple/beautify/','test/expected/single/unmin/','Beautify');
  },
  preserveComments: function (test) {
    testMultipleFiles(test,'tmp/multiple/preserveComments/','test/expected/single/mincom/','Default');
  },
  xml: function (test) {
    testSingleFile(test,'tmp/single/unmin/xml/','test/expected/single/unmin/','xml','xml beautified');
  },
  xmlmincom: function (test) {
    testSingleFile(test,'tmp/single/mincom/xml/','test/expected/single/mincom/','xml','xml minified preserve comments');
  },
  xmlmin: function (test) {
    testSingleFile(test,'tmp/single/min/xml/','test/expected/single/min/','xml','xml minified');
  },
  json: function (test) {
    testSingleFile(test,'tmp/single/unmin/json/','test/expected/single/unmin/','json','json beautified');
  },
  jsonmin: function (test) {
    testSingleFile(test,'tmp/single/min/json/','test/expected/single/min/','json','json minified');
  },
  css: function (test) {
    testSingleFile(test,'tmp/single/unmin/css/','test/expected/single/unmin/','css','css beautified');
  },
  cssmincom: function (test) {
    testSingleFile(test,'tmp/single/mincom/css/','test/expected/single/mincom/','css','css minified preserve comments');
  },
  cssmin: function (test) {
    testSingleFile(test,'tmp/single/min/css/','test/expected/single/min/','css','css minified preserve comments');
  },
  sql: function (test) {
    testSingleFile(test,'tmp/single/unmin/sql/','test/expected/single/unmin/','sql','sql beautified');
  },
  sqlmin: function (test) {
    testSingleFile(test,'tmp/single/min/sql/','test/expected/single/min/','sql','sql minified');
  },  
  doubledot: function (test) {
    test.expect(2);
    var expected = grunt.file.read('test/expected/single/unmin/test.view.xml');
    var actual = grunt.file.read('tmp/single/doubledot/test.xml');
    test.equal(actual, expected, 'test xml beautify test.xml');
    actual = grunt.file.read('tmp/single/doubledot/test.view.xml');
    test.equal(actual, expected, 'test xml beautify test.view.xml');
    test.done();
  },
};
