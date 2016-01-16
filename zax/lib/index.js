'use strict';

var	fs = require('fs'),
    PEG = require('pegjs');

function Zax() {};

Zax.prototype.query = function (statement) {
  fs.readFile(__dirname + '/ifa.pegjs', 'utf8', function (err,grammar) {
    if (err) {
      return console.log(err);
    }
    var parser = PEG.buildParser(grammar);
    return parser.parse(statement.trim());
  });
}

module.exports = Zax;
