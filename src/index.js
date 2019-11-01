'use strict';

function Struct(obj) {
  if (obj !== undefined && !Array.isArray(obj) && typeof obj !== 'object') {
    this.struct = [obj];
  } else if (obj instanceof this.constructor) {
    this.struct = obj.all();
  } else {
    this.struct = obj || [];
  }
}

Struct.prototype.removeEmptyProps = require('./func/removeEmptyProps');

const utils = obj => new Struct(obj);

module.exports = utils;
module.exports.utils = utils;
module.exports.default = utils;
