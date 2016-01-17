var	fs = require('fs'),
    PEG = require('pegjs'),
    Zax = require('zax'),
    S = require('string'),
    cmdline = require('commander');


const zax = new Zax();

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function completeReq(strRes) {
  var strLen = S(strRes.toString().trim()).length - 1;
  var returned = S(strRes.toString().trim()).left(strLen).toString().trim();
  return returned;
}
/*
var result = zax.query('REQUEST "https://raw.githubusercontent.com/json-ld/json-ld.org/master/test-suite/tests/toRdf-manifest.jsonld"');
//var result = zax.query('REQUEST "http://www.w3.org/Consortium/Offices/Presentations/RDFTutorial/rdfs/Countries.owl"');
//console.log('Query result: \n' + result + '\n');
//console.log('Char terakhir: ' + S(result).right(10));
//console.log('Description: ' + result.description);
//console.log(isJson(result));
//console.log(result instanceof Promise);
//console.log(S(result).toString().trim());
var strLen = S(result.toString().trim()).length - 1;
console.log(strLen);
var asu = S(result.toString().trim()).left(strLen).toString().trim();
console.log(asu);
console.log(isJson(asu))
var obj = JSON.parse(asu);
console.log(obj.name)
*/

var result = zax.query('REQUEST "http://www.w3.org/Consortium/Offices/Presentations/RDFTutorial/rdfs/Countries.owl"');
/*
var strLen1 = S(result1.toString().trim()).length - 1;
console.log(strLen1);
var asu1 = S(result1.toString().trim()).left(strLen1).toString().trim();
console.log(asu1);
*/
var countries = completeReq(result);
console.log(countries);
