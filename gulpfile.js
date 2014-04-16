var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var less = require('gulp-less');
var jade = require('gulp-jade');

gulp.task('scripts', function() {
  browserify('./src/newtab/app.js')
  .bundle({debug: true})
  .pipe(source('build.js'))
  .pipe(gulp.dest('./extension/override_newtab/'));

  browserify('./src/background/background.js')
  .bundle({debug: true})
  .pipe(source('background.js'))
  .pipe(gulp.dest('./extension/'));

});

gulp.task('less', function() {
  gulp.src('./src/newtab/style.less')
  	.pipe(less({ compress: true }))
  	.pipe(gulp.dest('./extension/override_newtab/'));
});

gulp.task('jade', function() {
	gulp.src('./src/newtab/layout.jade')
		.pipe(jade())
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./extension/override_newtab/'));
});

gulp.task('default', ['scripts', 'less', 'jade']);