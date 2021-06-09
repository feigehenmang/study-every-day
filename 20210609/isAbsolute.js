const {isAbsolute} = require('path');


console.log(isAbsolute(__dirname));  // true
console.log(isAbsolute('join')); // false
