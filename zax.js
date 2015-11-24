var	fs = require('fs'),
    PEG = require('pegjs'),
    cmdline = require('commander');

cmdline
  .version('1.0.0')
  .usage('<options>')
  .option('-i, --inputfile <file>', 'Use <file>, consists of IfA command(s) as input')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  cmdline.outputHelp();
}

if (cmdline.inputfile) {
  console.log('Executing ' + cmdline.inputfile + ' ... ');
  fs.readFile('ifa.pegjs', 'utf8', function (err,grammar) {
    if (err) {
      return console.log(err);
    }
    var parser = PEG.buildParser(grammar.trim());
    fs.readFile(cmdline.inputfile, 'utf8', function (err,ifa) {
      if (err) {
        return console.log(err);
      }
      console.log(ifa);
      parser.parse(ifa.trim());
    });
  });
}
