/*global require */

var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify'),
	reactify = require('reactify');

gulp.task('browserify', function() {

	var bundle = browserify({entries: './lib/index.js' })
			.transform(reactify)
			.bundle();

	return bundle
		.pipe(source('app.js'))
		.pipe(gulp.dest('./dist/)'));
});

gulp.task('watch', ['browserify'], function() {
	gulp.watch('./lib/**/*.js', ['browserify'])
});

gulp.task('default', ['browserify']);
gulp.task('dev', ['watch']);
