var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('copy', function(){
    gulp.src(['src/*'])
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

gulp.task('reload', function () {
	connect.reload();
});

gulp.task('default', ['copy', 'connect']);
gulp.task('build', ['copy', 'reload']);
