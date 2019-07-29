 var gulp = require('gulp');
 var browswerSync = require('browser-sync').create();

// gulp task
gulp.task('browser-sync', function() {
  browswerSync.init({
    server: {
      baseDir: "./"
    }
  }); 
  gulp.watch([
    "./*.html",
    "./Pages/*.html",
    "./*.css",
    "./Content/grid/*.css"
  ]).on('change', browswerSync.reload);
})
