var gulp = require('gulp');
var replace = require('gulp-replace');
var package = require('./package.json');
var angularCli = require('./.angular-cli.json');

gulp.task('add-version', function () {
  return gulp.src(angularCli.apps[0].outDir + '/index.html')
    .pipe(replace('<%VERSION%>', package.version))
    .pipe(gulp.dest(angularCli.apps[0].outDir));
});
