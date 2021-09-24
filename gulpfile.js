var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
  return gulp.src('assets/theme.scss.liquid')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('assets'))
});