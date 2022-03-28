//CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flav');
const numData = require('./7-mind-bomb')
console.log(numData)
sayHi('susan')
sayHi(names.maurice)
sayHi(names.smalls)