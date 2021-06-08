const fs = require('fs');
const promisify = require('./promisify');
const {resolve} = require('path');
const stat = promisify(fs.stat);
const filename = resolve(__dirname, 'test.txt');

(async () => {
    const data = await stat('test.txt');
    console.log(data.size); // 12 文件大小
    console.log(data.atime.toLocaleString()); // 2021/6/8 下午8:27:46 文件最后一次访问时间
    console.log(data.birthtime.toLocaleString()); // 2021/6/8 下午8:06:18 文件创建时间
    console.log(data.mtime.toLocaleString()); // 2021/6/8 下午8:27:45 文件最后一次修改时间
    console.log(data.ctime.toLocaleString()); // 2021/6/8 下午8:27:45 文件状态发生变化时间
    console.log(data.isFile()); // true 是否是文件
    console.log(data.isDirectory()); // false 是否是目录
})()