'use strict';

var NumFmtXform = require('../../../../../lib/xlsx/xform/style/numfmt-xform');
var testXformHelper = require('./../test-xform-helper');

var expectations = [
  {
    title: 'date',
    create:  function() { return new NumFmtXform()},
    preparedModel: {id: 165, formatCode: 'd-mmm-yyyy'},
    xml: '<numFmt numFmtId="165" formatCode="d-mmm-yyyy"/>',
    get parsedModel() { return this.preparedModel; },
    tests: ['render', 'parse']
  },
  {
    title: 'thing',
    create:  function() { return new NumFmtXform()},
    preparedModel: {id: 165, formatCode: "[Green]#,##0 ;[Red](#,##0)"},
    xml: '<numFmt numFmtId="165" formatCode="[Green]#,##0 ;[Red](#,##0)"/>',
    get parsedModel() { return this.preparedModel; },
    tests: ['render', 'parse']
  }
];

describe('NumFmtXform', function () {
  testXformHelper(expectations);
});
