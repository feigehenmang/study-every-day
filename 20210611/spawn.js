const {spawn} = require('child_process');
const child = spawn('ps', ['-ef'])
child.stdout.pipe(process.stdout); // 输出很多
child.stderr.pipe(process.stderr);