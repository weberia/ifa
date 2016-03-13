var assert = require('assert'),
  PEG = require('pegjs'),
  Zax = require('../lib/index.js'),
  S = require('string');

var zax = new Zax();

// I need to deal with these arrays later,  without array:
// [ [ [ 'ASSERT', [Object], [Object] ], [] ] ]
var assertResult = zax.query('ASSERT "http://bpdp.xyz/commitment" "test1"')[0][0][2];

describe('Assert', function() {
  describe('assert url propositional', function () {
    it('should return parsed assert statement', function () {
      assert.equal('assert', assertResult.force);
      assert.equal('http://bpdp.xyz/commitment', assertResult.theUrl);
      assert.equal('test1', assertResult.assertivePropositional);
    });
  });
});
