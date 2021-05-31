const utils = require('./src/index');

const newObj = utils({ name: 'ehsan', car: '' }).removeEmptyProps();

console.log('newObj:', newObj);
