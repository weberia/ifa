'use strict';

var	fs = require('fs'),
    PEG = require('pegjs');

function Zax() {
  this.grammar = fs.readFileSync(__dirname + '/ifa.pegjs', 'utf8').toString().trim();
};

Zax.prototype.query = function (statement) {
  var parser = PEG.buildParser(this.grammar);
  // I need to deal with these arrays later,  without array:
  // [ [ [ 'ASSERT', [Object], [Object] ], [] ] ]
  return parser.parse(statement.trim())[0][0][2];
}

module.exports = Zax;
