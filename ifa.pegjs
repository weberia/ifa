{
	var http = require('http')
		, https = require('https');

	function getHttpContents(url) {
		console.log('Getting  '  + url + ' ...')
		http.get(url, function(res) {
		  console.log("Got response: " + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
		  res.setEncoding('utf8');
			var body = '';
		  res.on('data', function (chunk) {
		    body += chunk;
		  });
		  res.on('end', function() {
		    console.log(body)
		  })
		}).on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
	}

	function getHttpsContents(url) {
		console.log('Getting  '  + url + ' ...')
		https.get(url, function(res) {
		  console.log("Got response: " + res.statusCode);
			console.log('HEADERS: ' + JSON.stringify(res.headers));
		  res.setEncoding('utf8');
			var body = '';
		  res.on('data', function (chunk) {
		    body += chunk;
		  });
		  res.on('end', function() {
		    console.log(body)
		  })
		}).on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
	}

	function getRequest(url) {
		if (url.substr(0,5)=='https') {
			getHttpsContents(url);
		} else {
			getHttpContents(url);
		}
	}
}

start
	=	(force EOL)+
force
	=	representatives / directives / commissives / expressives / declaratives

representatives
	=	assertive / informative
assertive
	=	'ASSERT' _ url:string _ propositional:string
informative
	=	'INFORM'

directives
	=	request:'REQUEST' _ url:string { getRequest(url) }

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
EOL
	= [\n\r]*
_ "whitespace"
	= [ \t\n\r]*
