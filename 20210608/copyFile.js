const fs = require('fs');
const {promisify} = require('util');
const {resolve} = require('path');
const copyFile = promisify(fs.copyFile);
const filename = resolve(__dirname, 'test.txt');

(async () => {
    const data = await copyFile(filename, 'copy_test.txt');
    console.log(data); // undefined
})()