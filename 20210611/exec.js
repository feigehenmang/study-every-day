const {exec } = require('child_process');
exec('ls', (err, stdout, stderr) => {
    console.log('err', err); // err null
    console.log('stdout', stdout); // stdout xxxx
    console.log('stderr', stderr); // stderr   
})



