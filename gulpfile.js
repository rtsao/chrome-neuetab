var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var less = require('gulp-less');
var jade = require('gulp-jade');
var mold  =  require('mold-source-map')

gulp.task('scripts', function() {
  browserify({
  	entries: ['./src/newtab/app.js'],
  	extensions: ['.js']
  })
  .bundle({debug: true})
  .pipe(mold.transformSourcesRelativeTo('./extension/override_newtab/'))
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./extension/override_newtab/'));

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