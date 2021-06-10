const {execFile} = require('child_process');
execFile('node', ['./20210611/exec.js'], (err, stdout, stderr) => {
    console.log('err', err); // err null
    console.log('stdout', stdout); // stdout err null stdout xxx stderr
    console.log('stderr', stderr); // stderr   
})