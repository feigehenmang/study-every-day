const fs = require('fs');
const promisify = require('./promisify');
const {resolve} = require('path');
const readdir = promisify(fs.readdir);

(async () => {
    const data = await readdir(resolve(__dirname, '../'));
    console.log(data); // [ '.git', '.gitignore', '20210608', 'LICENSE', 'README.md' ]
    const items = await readdir(resolve(__dirname, '../'), {withFileTypes: true});
    console.log(items);
    /**
    Dirent { name: '.git', [Symbol(type)]: 2 },
    Dirent { name: '.gitignore', [Symbol(type)]: 1 },
    Dirent { name: '20210608', [Symbol(type)]: 2 },
    Dirent { name: 'LICENSE', [Symbol(type)]: 1 },
    Dirent { name: 'README.md', [Symbol(type)]: 1 }
    ]
     */
})()