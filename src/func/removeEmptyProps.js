'use strict';

module.exports = function() {
	let newObj = {};

	Object.keys(this.struct).forEach(key => {
		if (Array.isArray(this.struct[key])) {
			newObj[key] = new Array();
			this.struct[key].forEach((o) => {
				newObj[key].push(removeEmptyProperties(o));
			});
		} else if (this.struct[key] && typeof this.struct[key] === 'object') {
			newObj[key] = removeEmptyProperties(this.struct[key]); // recurse
		} else if (typeof this.struct[key] === 'string') {
			if (this.struct[key] !== '') newObj[key] = this.struct[key]; // copy if string and not whitespace
		} else if (this.struct[key] !== null && this.struct[key] !== undefined) {
			newObj[key] = this.struct[key]; // copy if not null
		}
	});

	return newObj;
};
