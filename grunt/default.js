'use strict';

module.exports = function (grunt, CFG) {

	this.include([
		'install',
		'build'
	]);

	this.watch({
		files: [
			CFG.SRC + '/**/*',
			'!' + CFG.SRC + '/manifest.json'
		],
		tasks: [
			'install',
			'build'
		]
	});
};
