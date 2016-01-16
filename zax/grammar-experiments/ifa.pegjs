{
	var http = require('http');

	function cmdGetUrl(url) {
		console.log('Getting  '  + url + ' ...')
		http.get(url, function(res) {
		  console.log("Got response: " + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
		  res.setEncoding('utf8');
		  res.on('data', function (chunk) {
		    console.log('BODY: ' + chunk);
		  });
		  res.on('end', function() {
		    console.log('No more data in response.')
		  })
		}).on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
	}

}

start
	=	force+
force
	=	representatives / directives / commissives / expressives / declaratives

representatives
	=	assertive / informative
assertive
	=	'ASSERT'
informative
	=	'INFORM'

directives
	=	request:'REQUEST' _ url:string { cmdGetUrl(url) }

commissives
	=	'CONSENT'

expressives
	=	apologize / thank / complain
apologize
	=	'APOLOGIZE'
thank
	=	'THANK'
complain
	=	'COMPLAIN'

declaratives
	=	'DECLARE'

string "string"
	= quotation_mark chars:char* quotation_mark { return chars.join(""); }
char
	= unescaped
   / escape
     sequence:(
         '"'
       / "\\"
       / "/"
       / "b" { return "\b"; }
       / "f" { return "\f"; }
       / "n" { return "\n"; }
       / "r" { return "\r"; }
       / "t" { return "\t"; }
       / "u" digits:$(HEXDIG HEXDIG HEXDIG HEXDIG) {
           return String.fromCharCode(parseInt(digits, 16));
         }
     )
     { return sequence; }
escape
	= "\\"
quotation_mark
	= '"'
unescaped
	= [\x20-\x21\x23-\x5B\x5D-\u10FFFF]
HEXDIG
	= [0-9a-f]i
_ "whitespace"
	= [ \t\n\r]*
