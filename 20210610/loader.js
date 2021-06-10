const { readdir } = require("fs/promises")

module.exports = {
    load: (path, callback) => {
        readdir(path)
        .then(files => {
            files.forEach(filename => {
                callback(filename);
            })
        })
    }
}