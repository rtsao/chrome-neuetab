var gulp = require('gulp')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , rename = require('gulp-rename')
  , less = require('gulp-less')
  , jade = require('gulp-jade')
  , notify = require('gulp-notify')
  , prefix = require('gulp-autoprefixer');

var handleErrors = function (error) {
 	return 'Error on line' + error.line + ' :' + error.message;
}

gulp.task('scripts', function() {
  browserify('./src/newtab/app.js')
  .bundle({debug: true})
  .on('error', notify.onError(handleErrors))
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
		.on('error', notify.onError(handleErrors))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./extension/override_newtab/'));

  gulp.src('./src/newtab/templates/*.jade')
    .pipe(jade())
    .on('error', notify.onError(handleErrors))
    .pipe(gulp.dest('./extension/override_newtab/templates/'));

});

gulp.task('default', ['scripts', 'less', 'jade', 'watch']);

gulp.task('watch', function() {
  gulp.watch('./src/newtab/*.js', ['scripts']);
  gulp.watch('./src/newtab/**/*.jade', ['jade']);
  gulp.watch('./src/newtab/*.less', ['less']);
});
