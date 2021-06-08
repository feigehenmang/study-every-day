const fs = require('fs');
const {promisify} = require('util');
const {resolve} = require('path');
const readFile = promisify(fs.readFile);
const filename = resolve(__dirname, 'test.txt');

(async () => {
    const data = await readFile(filename);
    console.log(data); // <Buffer e8 bf 99 e6 98 af e4 b8 80 e4 b8 aa e6 b5 8b e8 af 95 e6 96 87 e6 9c ac>
    const str = await readFile(filename, 'utf-8');
    console.log(str); // 这是一个测试文本
})()








