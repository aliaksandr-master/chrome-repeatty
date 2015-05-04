'use strict';

module.exports = function (grunt, CFG) {

	this.bower({
		options: {
			copy: false,
			install: true,
			verbose: true,
			cleanTargetDir: false,
			cleanBowerDir: false,
			bowerOptions: {}
		}
	});
};
