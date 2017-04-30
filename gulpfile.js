//* Plugins
var gulp         = require('gulp'),
    browserSync  = require('browser-sync');


//* Browser Sync
gulp.task('browser-sync', function() {
  var files = [
    './*.php'
  ];
  browserSync.init(files, {
    proxy: "local.dev/spacetrace"
  });
  gulp.watch('**/*.*').on('change', browserSync.reload);
});


// Watch Task (default)
gulp.task('default', ['browser-sync']);
