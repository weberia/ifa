var assert = require('assert'),
  PEG = require('pegjs'),
  Zax = require('../lib/index.js'),
  S = require('string');

var zax = new Zax();

var assertResult = zax.query('ASSERT "http://bpdp.xyz/commitment" "test assert"');
var informResult = zax.query('INFORM "http://bpdp.xyz/commitment" "test inform"');

describe('ASSERT', function() {
  describe('assert url propositionalContents', function () {
    it('should return parsed ASSERT statement', function () {
      assert.equal('assert', assertResult.force);
      assert.equal('http://bpdp.xyz/commitment', assertResult.theUrl);
      assert.equal('test assert', assertResult.assertivePropositional);
    });
  });
});

describe('INFORM', function() {
  describe('inform url propositionalContents', function () {
    it('should return parsed INFORM statement', function () {
      assert.equal('inform', informResult.force);
      assert.equal('http://bpdp.xyz/commitment', informResult.theUrl);
      assert.equal('test inform', informResult.informativePropositional);
    });
  });
});
