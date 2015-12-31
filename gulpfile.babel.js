import gulp from 'gulp'
import babel from 'gulp-babel'
import mocha from 'gulp-mocha'
import clean from 'gulp-clean'
import wiredep from 'wiredep'

gulp.task('default', () => {
  return gulp.src('app/index.html')
    .pipe(wiredep.stream())
    .pipe(gulp.dest('app'))
})

gulp.task('babel', () => {
  return gulp.src('app/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('copy', () => {
  return gulp.src(['app/**/*.html', 'app/style.css'])
    .pipe(gulp.dest('dist'))
})

gulp.task('clean', () => {
  return gulp.src('dist', {read: false})
    .pipe(clean())
})

gulp.task('test', () => {
  return gulp.src('app/**/*.spec.js')
    .pipe(babel())
    .pipe(mocha())
})

gulp.task('build', ['clean'], () => {
  gulp.start('babel', 'copy')
})
