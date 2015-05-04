'use strict';

module.exports = function (grunt, CFG) {

	this
		.jade({
			options: {
				pretty: true
			},
			files: [{
				expand: true,
				src: '*.jade',
				cwd: CFG.SRC,
				ext: '.html',
				dest: CFG.BUILD
			}]
		})
	;
};
