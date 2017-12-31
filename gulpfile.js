var gulp = require('gulp');
var sass = require('gulp-sass');

var rename = require('gulp-rename');

gulp.task('styles', function () {
	gulp
	.src('index.scss') // toma primero este archivo
	.pipe(sass()) 
	.pipe(rename('style.css'))
	.pipe(gulp.dest('public')); 



gulp.task('default', ['styles'])
