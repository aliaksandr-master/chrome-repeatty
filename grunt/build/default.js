'use strict';

module.exports = function (grunt, CFG) {

	this
		.clean([
			CFG.BUILD
		])

		.include([
			'build/styles',
			'build/scripts',
			'build/templates',
			'build/fonts',
			'build/images',
			'build/manifest'
		]);
};
