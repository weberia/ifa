var assert = require('assert'),
  PEG = require('pegjs'),
  Zax = require('../lib/index.js'),
  S = require('string');

var zax = new Zax();

// representatives
var assertResult = zax.query('ASSERT "http://bpdp.xyz/commitment" "test assert"');
var informResult = zax.query('INFORM "http://bpdp.xyz/commitment" "test inform"');

// directives
var requestResult = zax.query('REQUEST "http://bpdp.xyz/commitment" "test request"');

// commissives
var consentResult = zax.query('CONSENT "http://bpdp.xyz/commitment" "buy" "discount > 10"');

// declaratves
var declareResult = zax.query('DECLARE "http://bpdp.xyz/commitment" "test declare"');

// expressives
var apologizeResult = zax.query('APOLOGIZE "http://bpdp.xyz/commitment" "test apologize"');
var thankResult = zax.query('THANK "http://bpdp.xyz/commitment" "test thank"');
var complainResult = zax.query('COMPLAIN "http://bpdp.xyz/commitment" "test complain"');

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

describe('REQUEST', function() {
  describe('request url propositionalContents', function () {
    it('should return parsed REQUEST statement', function () {
      assert.equal('request', requestResult.force);
      assert.equal('http://bpdp.xyz/commitment', requestResult.theUrl);
      assert.equal('test request', requestResult.directivePropositional);
    });
  });
});

describe('CONSENT', function() {
  describe('consent url action requirements', function () {
    it('should return parsed CONSENT statement', function () {
      assert.equal('consent', consentResult.force);
      assert.equal('http://bpdp.xyz/commitment', consentResult.theUrl);
      assert.equal('buy', consentResult.theAction);
      assert.equal('discount > 10', consentResult.theRequirements);
    });
  });
});

describe('DECLARE', function() {
  describe('declare url propositionalContents', function () {
    it('should return parsed DECLARE statement', function () {
      assert.equal('declare', declareResult.force);
      assert.equal('http://bpdp.xyz/commitment', declareResult.theUrl);
      assert.equal('test declare', declareResult.declarativePropositional);
    });
  });
});

describe('APOLOGIZE', function() {
  describe('apologize url propositionalContents', function () {
    it('should return parsed APOLOGIZE statement', function () {
      assert.equal('apologize', apologizeResult.force);
      assert.equal('http://bpdp.xyz/commitment', apologizeResult.theUrl);
      assert.equal('test apologize', apologizeResult.apologizePropositional);
    });
  });
});
describe('THANK', function() {
  describe('thank url propositionalContents', function () {
    it('should return parsed THANK statement', function () {
      assert.equal('thank', thankResult.force);
      assert.equal('http://bpdp.xyz/commitment', thankResult.theUrl);
      assert.equal('test thank', thankResult.thankPropositional);
    });
  });
});
describe('COMPLAIN', function() {
  describe('complain url propositionalContents', function () {
    it('should return parsed COMPLAIN statement', function () {
      assert.equal('complain', complainResult.force);
      assert.equal('http://bpdp.xyz/commitment', complainResult.theUrl);
      assert.equal('test complain', complainResult.complainPropositional);
    });
  });
});
