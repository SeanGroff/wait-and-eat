// Reference https://css-tricks.com/gulp-for-beginners/

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const jade = require('gulp-jade');

gulp.task('jade', () => {
   return gulp.src('src/app/**/*.jade')
      .pipe(jade())
      .pipe(gulp.dest('dist/app'))
      .pipe(browserSync.reload({
         stream: true
      }));
});

gulp.task('sass', () => {
   return gulp.src('src/app/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/app'))
      .pipe(browserSync.reload({
         stream: true
      }));
});

gulp.task('babel', () => {
   return gulp.src('src/app/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('dist/app'));
});

gulp.task('browserSync', () => {
   browserSync.init({
      server: {
         baseDir: 'dist/app'
      },
   });
});

gulp.task('default', ['jade', 'sass', 'babel']);

gulp.task('watch', ['browserSync', 'jade', 'sass', 'babel'], () => {
   gulp.watch('src/app/**/*.scss', ['sass']);
   gulp.watch('src/app/**/*.jade', ['jade']);
   gulp.watch('src/app/**/*.js', ['babel'], browserSync.reload);
});
