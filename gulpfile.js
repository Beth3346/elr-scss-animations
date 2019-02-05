const gulp = require('gulp');
const path = require('path');
const sass = require('gulp-sass');
const scsslint = require('gulp-scss-lint');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');

var paths = {
  app: 'dist/',
  css: 'dist/css/'
};

gulp.task('scsslint', () => {
  return gulp.src('src/**/*.scss').pipe(scsslint());
});

gulp.task('styles', ['scsslint'], () => {
  return gulp
    .src('./*.scss')
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ['node_modules']
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest(paths.css))
    .pipe(
      autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest(paths.css))
    .pipe(cleanCSS({ debug: true }))
    .pipe(gulp.dest(paths.css));
});

gulp.task('default', ['styles']);
