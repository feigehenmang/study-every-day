const {program} = require('commander')
program
  .command('clone <source> [destination]')
  .description('clone a repository into a newly created directory')
  .action(require('./clone.js'));
program.parse(process.argv);