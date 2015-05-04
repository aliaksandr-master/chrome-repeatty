'use strict';

module.exports = function (grunt, CFG) {

	this
		.uglify({
			files: [{
				expand: true,
				cwd: CFG.BUILD + '/scripts',
				src: '**/*.js',
				dest: CFG.BUILD + '/scripts/'
			}]
		})

		.imagemin({
			files: [{
				expand: true,
				cwd: CFG.BUILD + '/images',
				src: '**/*.{gif,jpeg,jpg,png}',
				dest: CFG.BUILD + '/images'
			}]
		})

		.svgmin({
			files: [{
				expand: true,
				cwd: CFG.BUILD + '/images',
				src: '**/*.svg',
				dest: CFG.BUILD + '/images'
			}]
		})

		.htmlmin({
			options: {
				// removeCommentsFromCDATA: true,
				// collapseWhitespace: true,
				// collapseBooleanAttributes: true,
				// removeAttributeQuotes: true,
				// removeRedundantAttributes: true,
				// useShortDoctype: true,
				// removeEmptyAttributes: true,
				// removeOptionalTags: true
			},
			files: [{
				expand: true,
				cwd: CFG.BUILD,
				src: '*.html',
				dest: CFG.BUILD
			}]
		})
	;
};
