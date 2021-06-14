const {program} = require('commander')


program
.option('-p, --process <type>', 'this is process')
program.parse(process.argv);
const options = program.opts();
console.log(options); //{ process: '1' }