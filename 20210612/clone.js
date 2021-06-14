module.exports = (target, desc) => {
    console.log(target, desc)
    const {spawn} = require('child_process');
    target = require('path').resolve(__dirname, target)
    desc = require('path').resolve(__dirname, desc)
    const child = spawn('cp', ['-r', target, desc]);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}