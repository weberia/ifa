var	fs = require('fs'),
    PEG = require('pegjs'),
    Zax = require('zax'),
    request = require('request'),
    S = require('string');

const zax = new Zax();

var qResources = 'REQUEST "http://localhost:8000/resources.json" "null"';

var result = zax.query(qResources);

console.log(result);

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

request('http://archera:8000/resources.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var resourcesjson = JSON.parse(body);
    console.log(resourcesjson);
    console.log(resourcesjson[0].resources.semantic);
  }
});

