'use strict';

module.exports = function (grunt, CFG) {

	this
		.eslint([
			'Gruntfile.js',
			CFG.GRUNT + '/**/*.js',
			CFG.SRC + '/scripts/**/*.js'
		])

		.react({
			options: {
				sourceMap: true,
				es6module: true,
				nonStrictEs6module: true
			},
			files: [
				{
					expand: true,
					cwd: CFG.SRC,
					src: [
						'**/*.jsx',
						'!bower_components/**/*.jsx'
					],
					dest: CFG.BUILD,
					ext: '.jsx'
				}
			]
		})

		.babel('scriptsWithModules', {
			options: {
				sourceMap: true//,
				//modules: 'none'
			},
			files: [
				{
					expand: true,
					cwd: CFG.SRC,
					src: [
						'**/*.js',
						'**/*.jsx',
						'!bower_components/**/*.jsx',
						'!bower_components/**/*.js',
						'!require.js'
					],
					dest: CFG.BUILD,
					ext: '.js'
				}
			]
		})

		.babel('scriptsWithoutModules', {
			options: {
				sourceMap: true,
				modules: 'common'
			},
			files: [
				{
					expand: true,
					cwd: CFG.SRC,
					src: [
						'require.js'
					],
					dest: CFG.BUILD,
					ext: '.js'
				}
			]
		})

		.clean([
			CFG.BUILD + '/**/*.jsx'
		])

		.concat({
			options: {
				stripBanners: true
			},
			files: [{
				src: [
					CFG.SRC + '/bower_components/jquery/dist/jquery.min.js',
					CFG.SRC + '/bower_components/lodash/dist/lodash.min.js',
					CFG.SRC + '/bower_components/moment/min/moment.min.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/transition.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/alert.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/button.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/carousel.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/collapse.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/dropdown.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/modal.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/tooltip.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/popover.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/scrollspy.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/tab.js',
					CFG.SRC + '/bower_components/bootstrap-less/js/affix.js',
					CFG.SRC + '/scripts/vendor.js'
				],
				dest: CFG.BUILD + '/scripts/vendor.js'
			}]
		})
	;
};
