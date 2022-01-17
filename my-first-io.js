const fs = require('fs');
const fileName = process.argv[2];

const fileBuffer = fs.readFileSync(fileName);
const fileString = fileBuffer.toString();

let result = 0;
result = fileString.split('').filter((value) => value === '\n').length
console.log(result);