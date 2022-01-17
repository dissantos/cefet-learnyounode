const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, data) => {
        if(err) {
            return callback(err)
        }

        data = data.filter(value => path.extname(value) === '.'.concat(ext));

        callback(null, data)
    }) 
}