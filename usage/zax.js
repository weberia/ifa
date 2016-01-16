var	fs = require('fs'),
    PEG = require('pegjs'),
    Zax = require('zax'),
    cmdline = require('commander');

const zax = new Zax();

var result = zax.query('REQUEST "https://raw.githubusercontent.com/json-ld/json-ld.org/master/test-suite/tests/toRdf-manifest.jsonld"');
console.log('Query result: \n' + result);
