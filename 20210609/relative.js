const {relative} = require('path');
const from = '/usr/local/project/'
const to = '/usr/local/project/components/'
console.log(relative(from, to)) // components