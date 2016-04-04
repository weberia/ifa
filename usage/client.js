var	fs = require('fs'),
    PEG = require('pegjs'),
    Zax = require('zax'),
    request = require('request'),
    async = require('async'),
    S = require('string');

const zax = new Zax();

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/*
request('http://archera:8000/resources.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var resourcesjson = JSON.parse(body);
    console.log(resourcesjson);
    console.log(resourcesjson[0].resources.semantic);
  }
});
*/

var q1 = 'REQUEST "http://archera:8000/speax" "null"';
var q1Sent = zax.query(q1);
request('http://archera:8000/speax/' + q1 , function (error, response, body) {
  console.log('request ' + q1 + '...');
  if (!error && response.statusCode == 200) {
    var resourcesjson = JSON.parse(body);
    console.log(resourcesjson);
  }
});



/*
async.series([
  function (callback) {
    request(
      { method: 'POST',
        uri: q1Sent.theURL, 
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var q1Result = JSON.parse(body);
          }
        }
      });
    callback();
  },
  function (callback) {
    callback();
  }
],
  function(err, results){
});
*/
