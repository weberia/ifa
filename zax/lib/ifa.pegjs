{

  /*
  All functions which will return some values based
  on IfA statement

  Start functions
  */
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
  function request(url, propositional) {
    return {
      force: 'request',
      theUrl: url,
      directivePropositional: propositional
    }
  }
  function consent(url, action, requirements) {
    return {
      force: 'consent',
      theUrl: url,
      theAction: action,
      theRequirements: requirements
    }
  }
  function declare(url, propositional) {
    return {
      force: 'declare',
      theUrl: url,
      declarativePropositional: propositional
    }
  }
  function apologize(url, propositional) {
    return {
      force: 'apologize',
      theUrl: url,
      apologizePropositional: propositional
    }
  }
  function thank(url, propositional) {
    return {
      force: 'thank',
      theUrl: url,
      thankPropositional: propositional
    }
  }
  function complain(url, propositional) {
    return {
      force: 'complain',
      theUrl: url,
      complainPropositional: propositional
    }
  }
  // End functions

}

// rule for a statemet
// --------------------
start
  = (IllocutionaryActs EOL)+
// --------------------

// Illocutionary acts can be:
// ---------------------
IllocutionaryActs
  = representatives / directives / commissives / expressives / declaratives
// ---------------------

/*
    Patterns of statement:
      f(p)
        where: f => Illocutionary for
               p => propositional contents
*/

// Start representatives illocutionary act pattern
// Representatives speech act: a speech act which states that something
//    is true.
representatives
  = assertive / informative
assertive
  = assertiveForce _ assertivePropositional
assertiveForce
  = 'ASSERT' / 'assert'
assertivePropositional
  = url:string _ propositional:string
    { return assert(url, propositional); }
informative
  = informativeForce _ informativePropositional
informativeForce
  = 'INFORM' / 'inform'
informativePropositional
  = url:string _ propositional:string
    { return inform(url, propositional); }
// End of representatives illocutionary act pattern

// Start directives illocutionary act pattern
// Directives: speech acts that are to cause the hearer to take a
//    particular action
directives
  = directiveForce _ directivePropositional
directiveForce
  = 'REQUEST' / 'request'
directivePropositional
  = _ url:string _ propositional:string
  { return request(url, propositional);  }
// End of directives illocutionary act pattern

// Start commissives illocutionary act pattern
// Commissives: Making a commitment, such as a promise or threat,
//    by illocutionary means.
// 	  ex: "I will buy if you give me 30% discounts"
commissives
  = commissiveForce _ commissivePropositional
commissiveForce
  = 'CONSENT' / 'consent'
commissivePropositional
  = _ url:string _ action:string _ requirements:string
{ return consent(url, action, requirements); }
// End of commissives illocutionary act pattern


// Start expressives illocutionary act pattern
// Expressives: speech acts that express the speaker's attitudes
//    and emotions towards the proposition, e.g. congratulations,
//    excuses and thanks
expressives
  = apologize / thank / complain
apologize
  = apologizeForce _ apologizePropositional
apologizeForce
  = 'APOLOGIZE' / 'apologize'
apologizePropositional
  = url:string _ propositional:string
    { return apologize(url, propositional); }
thank
  = thankForce _ thankPropositional
thankForce
  = 'THANK' / 'thank'
thankPropositional
  = url:string _ propositional:string
    { return thank(url, propositional); }
complain
  = complainForce _ complainPropositional
complainForce
  = 'COMPLAIN' / 'complain'
complainPropositional
  = url:string _ propositional:string
    { return complain(url, propositional); }
// End of expressives illocutionary act pattern


// Start declaratives illocutionary act pattern
// Declaratices: speech acts that change the reality in accord
//    with the proposition of the declaration, e.g. pronouncing
//    someone guilty or pronouncing someone husband and wife
declaratives
  = declarativeForce _ declarativePropositional
declarativeForce
  = 'DECLARE' / 'declare'
declarativePropositional
  = _ url:string _ propositional:string
{ return declare(url, propositional); }
// End of declaratives illocutionary act pattern


// Common rules
// Start
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
// end common rules
