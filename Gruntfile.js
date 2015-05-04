'use strict';

module.exports = require('grunto')(function (grunt) {

	this.context({
		CWD: __dirname,
		SRC: 'app',
		GRUNT: 'grunt',
		DEPLOY: 'package',
		BUILD: 'dist'
	});

	this.scan([{
		cwd: 'grunt/',
		src: [
			'**/*.js',
			'!**/_*.js',
			'!**/_*/**/*.js'
		]
	}]);

	return {
		watch: {
			options: {
				interrupt: true,
				spawn: false
			}
		}
	};
});
