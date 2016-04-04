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

var qR1 = 'REQUEST "http://archera:8000/speax" "null"';
var qR1Sent = zax.query(qR1);
request('http://archera:8000/speax/' + qR1 , function (error, response, bodyR1) {
  console.log('request ' + qR1 + '...');
  if (!error && response.statusCode == 200) {
    var jsonRequest1 = JSON.parse(bodyR1);
    console.log(jsonRequest1);
  }
});

var qA1 = 'ASSERT "http://archera:8000/speax" "9781617292019 > 0"';
var qA1Sent = zax.query(qA1);
request('http://archera:8000/speax/' + qA1 , function (error, response, bodyA1) {
  console.log('request ' + qA1 + '...');
  if (!error && response.statusCode == 200) {
    var jsonAssert1 = JSON.parse(bodyA1);
    console.log(jsonAssert1);
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
