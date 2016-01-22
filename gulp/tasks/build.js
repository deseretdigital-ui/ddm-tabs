var gulp = require('gulp');
var webpack = require('../util/webpack');

gulp.task('build', ['example'], function() {
  return webpack({ watch: false });
});
