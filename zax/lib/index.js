'use strict';

var	fs = require('fs'),
    PEG = require('pegjs');

const internals = {};

exports = module.exports = internals.Zax = function() {

}

internals.Zax.prototype.getProduct = function (id) {

  var product = products.filter(function(p) {
    return p.id == id;
  }).pop();

  return 'Product name: ' + product.name;

}

internals.Zax.prototype.query = function (statement) {
  fs.readFile(__dirname + '/ifa.pegjs', 'utf8', function (err,grammar) {
    if (err) {
      return console.log(err);
    }
    var parser = PEG.buildParser(grammar.trim());
    return parser.parse(statement.trim());
  });
}

var products = [{
    id: 1,
    name: 'Guitar'
  },
  {
    id: 2,
    name: 'Banjo'
  }
];
