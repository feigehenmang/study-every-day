const fs = require('fs');
const {promisify} = require('util');
const {resolve} = require('path');
const unlink = promisify(fs.unlink);
const filename = resolve(__dirname, 'test.txt');

(async () => {
    const data = await unlink('copy_test.txt');
    console.log(data); // undefined
})()