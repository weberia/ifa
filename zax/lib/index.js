'use strict';

var	fs = require('fs'),
    PEG = require('pegjs');

function Zax() {
  this.grammar = fs.readFileSync(__dirname + '/ifa.pegjs', 'utf8').toString().trim();
};

Zax.prototype.query = function (statement) {
  var parser = PEG.buildParser(this.grammar);
  return parser.parse(statement.trim());
}

module.exports = Zax;
