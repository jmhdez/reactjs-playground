/*global require */

var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	browserify = require('browserify'),
	reactify = require('reactify');


var cfg = {

	src: ['gulpfile.js', './lib/**/*.js'],
	srcmain: './lib/index.js',

	outdir: './dist/',
	outfile: 'app.js'
};


gulp.task('browserify', function() {

	var bundle = browserify({entries: cfg.srcmain })
			.transform(reactify)
			.bundle();

	return bundle
		.pipe(source(cfg.outfile))
		.pipe(gulp.dest(cfg.outdir));
});

gulp.task('watch', ['browserify'], function() {
	gulp.watch(cfg.src, ['browserify'])
});

gulp.task('default', ['browserify']);
gulp.task('dev', ['watch']);
