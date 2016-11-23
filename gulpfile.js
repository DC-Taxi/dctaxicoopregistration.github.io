var gulp = require('gulp'),
    cp = require('child_process'),
    connect = require('gulp-connect');

gulp.task('jekyll', (code) =>{
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
    .on('close', code);
});

gulp.task('server', () => {
  connect.server({
    root: ['_site'],
    port: 4000
  });
})

gulp.task('default', ['jekyll', 'server'], function() {

});
