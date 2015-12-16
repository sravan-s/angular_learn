var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp
		.src('src/styles/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/styles'))
});

gulp.task('connect', function() {
	return connect.server({
		root: 'build',
		livereload: true
	});
})

gulp.task('default', ['sass', 'connect']);
