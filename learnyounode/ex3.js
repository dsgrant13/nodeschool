var fs = require('fs');

numNewLines = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
console.log(numNewLines);
