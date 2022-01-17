const port = process.argv[2];
const fileName = process.argv[3];

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    let fileStream = fs.createReadStream(fileName);
    fileStream.pipe(res);
})
server.listen(port);