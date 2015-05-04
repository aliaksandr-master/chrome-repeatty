'use strict';

module.exports = function (grunt, CFG) {

	this
		.copy({
			files: [{
				expand: true,
				dest: CFG.BUILD,
				cwd: CFG.SRC,
				src: [
					'manifest.json'
				]
			}]
		})

		.chromeManifest({
			options: {
				buildnumber: true,
				background: {
					target: 'scripts/background.js',
					exclude: []
				}
			},
			src: CFG.BUILD,
			dest: CFG.BUILD
		})
	;
};
