var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass');

// Watch Changes in Files
gulp.task('watchFiles', function() {
  gulp.watch('./assets/js/*.js', ['reloadPageScripts']);
  gulp.watch('./scss/*.scss', ['convertSass', 'reloadPage']);
  gulp.watch('./*.html', ['reloadPageScripts']);
});

gulp.task('reloadPage', function() {
  browserSync.reload({stream:true});
});

gulp.task('reloadPageScripts', function() {
  browserSync.reload({stream:false});
});

// Browser Live View
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./",
            index: "home.html"
        }
    });
});

gulp.task('convertSass', function() {
  gulp.src('./scss/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './assets/css',
      sass: 'scss'
    }))
    .pipe(gulp.dest('./assets/css'));
  browserSync.reload({stream:true});
});

gulp.task('default', ['browserSync', 'convertSass', 'watchFiles']);
