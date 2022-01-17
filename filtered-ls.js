const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const extension = '.'.concat(process.argv[3]);

fs.readdir(dir, (err, files) => {
    if(err) throw err;

    let filesFilter = [];
    filesFilter = files.filter(value => path.extname(value) === extension);
    filesFilter.map(value => {
        console.log(value);
        return value;
    })
})