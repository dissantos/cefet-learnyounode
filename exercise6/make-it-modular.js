const mymodule = require('./mymodule');
const dir = process.argv[2];
const ext = process.argv[3];

const printFiles = (err, data) => {
    if(err) throw err;

    data.forEach(element => {
        console.log(element);
    });
}

mymodule(dir, ext, printFiles);