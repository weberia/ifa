{

  function assert(url, propositional) {
    return {
      force: 'assert',
      theUrl: url,
      assertivePropositional: propositional
    }
  }
  function inform(url, propositional) {
    return {
      force: 'inform',
      theUrl: url,
      informativePropositional: propositional
    }
  }

}
start
  = (force EOL)+

force
  = representatives / directives / commissives / expressives / declaratives

representatives
  = assertive / informative
assertive
  = assertiveForce _ assertivePropositional
assertiveForce
  = 'ASSERT' / 'assert'
assertivePropositional
  = url:string _ propositional:string
    {
      return assert(url, propositional);
    }
informative
  = informativeForce _ informativePropositional
informativeForce
  = 'INFORM' / 'inform'
informativePropositional
  = url:string _ propositional:string
    { return inform(url, propositional) }

directives
  = 'REQUEST' _ url:string { return getRequest(url)  } //return getRequest(url) }

// (pragmatics) Making a commitment, such as a promise or threat,
// by illocutionary means.
// 	ex: "I will buy if you give me 30% discounts"
commissives
  = 'CONSENT' _ url:string _ action:string _ requirements:string
    { consent(action, requirements) }

expressives
  = apologize / thank / complain
apologize
  = 'APOLOGIZE' _ url:string _ propositional:string
    { apologize(url, propositional) }
thank
  = 'THANK' _ url:string _ propositional:string
    { thank(url, propositional) }
complain
  = 'COMPLAIN' _ url:string _ propositional:string
    { complain(url, propositional) }

declaratives
  = 'DECLARE'

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
    ) {
        return sequence;
    }

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
