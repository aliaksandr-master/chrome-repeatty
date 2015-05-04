'use strict';

var path = require('path');

module.exports = function (grunt, CFG) {

	this
		.copy({
			files: [
				{
					expand: true,
					cwd: CFG.SRC + '/bower_components',
					dest: CFG.BUILD + '/fonts',
					src: [
						'**/fonts/*.{woff,eot,otf,ttf,svg}'
					],
					rename: function (cwd, file) {
						return path.join(cwd, file.replace('/fonts', ''));
					}
				},
				{
					expand: true,
					cwd: CFG.SRC,
					dest: CFG.BUILD,
					src: [
						'*.{ico,txt,png,html}',
						'images/**/*.{gif,jpeg,jpg,png,webp,gif}',
						'styles/**/*.css',
						'scripts/**/*.js',
						'fonts/**/*.{woff,eot,otf,ttf,svg}',
						'_locales/**/*.json'
					]
				}
			]
		})
	;
};
