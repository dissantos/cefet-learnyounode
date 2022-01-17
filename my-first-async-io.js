const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data) => {
    if(err) {
        throw err
    }
    let fileString = data.toString();
    let result = 0
    result = fileString.split('').filter((value) => value === '\n').length
    console.log(result);
})


