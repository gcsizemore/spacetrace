var gulp        = require('gulp'),
    browserSync = require('browser-sync').create();

//* BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    },
    // browser: 'firefox',
    reloadDelay: 500
  });
  gulp.watch('**/*.*').on('change', browserSync.reload);
});


//* Default task (build and serve)
gulp.task('default', ['browser-sync']);
