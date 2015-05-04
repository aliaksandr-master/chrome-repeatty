'use strict';

module.exports = function (grunt, CFG) {

	this
		.include([
			'install',
			'build',
			'minify'
		])

		.compress({
			options: {
				archive: function () {
					var manifest = grunt.file.readJSON(CFG.BUILD + '/manifest.json');

					return CFG.DEPLOY + '/need-water-extension-' + manifest.version + '.zip';
				}
			},
			files: [{
				expand: true,
				cwd: CFG.BUILD + '/',
				src: [
					'**'
				],
				dest: ''
			}]
		});
};
