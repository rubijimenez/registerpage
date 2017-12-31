var gulp = require('gulp');
var sass = require('gulp-sass');

var rename = require('gulp-rename');

gulp.task('styles', function () {
	gulp
	.src('index.scss') // toma primero este archivo
	.pipe(sass()) // primero que pase por sass
	.pipe(rename('style.css'))
	.pipe(gulp.dest('public')); // con ese archivo que ya procesaste lo pondrá en la carpeta public
})

// definir la tarea por default a través de un array

gulp.task('default', ['styles'])
