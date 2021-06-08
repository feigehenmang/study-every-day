const fs = require('fs');
const {promisify} = require('util');
const {resolve} = require('path');
const appendFile = promisify(fs.appendFile);
const filename = resolve(__dirname, 'test.txt');

(async () => {
    const data = await appendFile(filename, '这是在测试fs.appendFile方法')
    console.log(data); // undefined 此时文件内容变为 测试测试这是在测试fs.appendFile方法
    const str = await appendFile(filename, '测试测试', {flag: 'w'})
    console.log(str); // 文件内容变为测试测试 w为覆盖写入操作
})()