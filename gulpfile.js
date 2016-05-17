var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    tscConfig = require('./tsconfig.json');

    var appSrc = 'app/',
        tsSrc = 'app/';

    gulp.task('typescript', function () {
      return gulp
        .src(tsSrc + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appSrc));
        //.pipe(gulp.dest(appSrc + 'angular-app/'));
    });

    gulp.task('watch', function() {
      gulp.watch(tsSrc + '**/*.ts', ['typescript']);
      //gulp.watch(appSrc + 'css/*.css', ['css']);
      //gulp.watch(appSrc + '**/*.html', ['html']);
    });

    gulp.task('webserver', function() {
      gulp.src("./")
        .pipe(webserver({
          livereload: true,
          open: true
        }));
    });

    // gulp.task('webserver', function() {
    //   gulp.src(appSrc)
    //     .pipe(webserver({
    //       livereload: true,
    //       open: true
    //     }));
    // });

    //gulp.task('default', ['copylibs', 'typescript', 'watch', 'webserver']);
    gulp.task('default', ['typescript', 'watch', 'webserver']);
