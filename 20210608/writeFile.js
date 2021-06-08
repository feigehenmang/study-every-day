const fs = require('fs');
const {promisify} = require('util');
const {resolve} = require('path');
const writeFile = promisify(fs.writeFile);
const filename = resolve(__dirname, 'test.txt');

(async () => {
    const data = await writeFile(filename, '测试测试', {flag: 'w'})
    console.log(data); // 文件内容变为测试测试 w为覆盖写入操作
    const str = await writeFile(filename, '测试测试', {flag: 'a'})
    console.log(str); // 文件内容变为测试测试测试测试 a为追加写入操作
})()