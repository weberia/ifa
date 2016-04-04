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

//var result = zax.query('REQUEST "http://hubusercontent.com/json-ld/json-ld.org/master/test-suite/tests/toRdf-manifest.jsonld"');
var result = zax.query('REQUEST "http://localhost:8000/resources.json"');

console.log(result);

/*
var result = zax.query('REQUEST "http://www.w3.org/Consortium/Offices/Presentations/RDFTutorial/rdfs/Countries.owl"');
console.log('Query result: \n' + result + '\n');
console.log('Char terakhir: ' + S(result).right(10));
console.log('Description: ' + result.description);
console.log(isJson(result));
console.log(result instanceof Promise);
console.log(S(result).toString().trim());
*/


/*
var strLen = S(result.toString().trim()).length - 1;
console.log(strLen);
var aha = S(result.toString().trim()).left(strLen).toString().trim();
console.log(aha);
console.log(isJson(aha))
var obj = JSON.parse(aha);
console.log(obj["@context"]);
console.log(obj["@id"]);
console.log(obj["@type"]);
console.log(obj.name);
console.log(obj.description);
*/

