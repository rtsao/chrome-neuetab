var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var less = require('gulp-less');
var jade = require('gulp-jade');
var mold = require('mold-source-map');
var notify = require('gulp-notify');
var prefix = require('gulp-autoprefixer');

var handleErrors = function (error) {
 	return 'Error: ' + error.message;
}

gulp.task('scripts', function() {
  browserify('./src/newtab/app.js')
  .bundle({debug: true})
  .on('error', notify.onError(handleErrors))
  .pipe(mold.transformSourcesRelativeTo('./extension/override_newtab/'))
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./extension/override_newtab/'));

  browserify('./src/background/background.js')
  .bundle()
  .pipe(source('background.js'))
  .pipe(gulp.dest('./extension/'));
});

gulp.task('less', function() {
  gulp.src('./src/newtab/style.less')
  	.pipe(less({ compress: true }))
  	.on('error', notify.onError(handleErrors))
    .pipe(prefix('last 2 Chrome versions'))
  	.pipe(gulp.dest('./extension/override_newtab/'));
});

gulp.task('jade', function() {
	gulp.src('./src/newtab/layout.jade')
		.pipe(jade())
		.on("error", notify.onError(handleErrors))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./extension/override_newtab/'));
});

gulp.task('default', ['scripts', 'less', 'jade', 'watch']);

gulp.task('watch', function() {
  gulp.watch('./src/newtab/*.js', ['scripts']);
  gulp.watch('./src/newtab/*.jade', ['jade']);
  gulp.watch('./src/newtab/*.less', ['less']);
});
