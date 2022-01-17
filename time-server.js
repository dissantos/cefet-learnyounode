const port = process.argv[2];
const net = require('net');

const addZero = (number) => {
    return number > 9 ? number: `0${number}`;
}

const server = net.createServer((socket) => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();

    let fullDate = `${year}-${addZero(month)}-${addZero(day)} ${addZero(hour)}:${addZero(minute)}\n`

    socket.write(fullDate)
    socket.end();
});

server.listen(port);