'use strict';

module.exports = function (grunt, CFG) {

	this

		.clean([
			CFG.BUILD + '/styles'
		])

		.less({
			options: {},
			files: [{
				expand: true,
				cwd: CFG.SRC + '/styles',
				src: [
					'**/*.less',
					'!_*/**/*.less'
				],
				ext: '.css',
				dest: CFG.BUILD + '/styles'
			}]
		})

		.autoprefixer({
			options: {
				browsers: [ 'chrome' ],
				diff: false,
				map: false
			},
			files: [{
				expand: true,
				cwd: CFG.BUILD,
				dest: CFG.BUILD,
				src: [
					'**/*.css'
				]
			}]
		});

};
