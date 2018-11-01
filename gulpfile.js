/* File: gulpfile.js */

const gulp   = require('gulp'),
      rename = require('gulp-rename'),
      uglify = require('gulp-terser'),
      concat = require('gulp-concat');

var jsFiles = './js_sources/*.js',
    jsDest  = './app/public/js/',
    jsDestSources  = './js_sources/concated/';

// Works witn Gulp Version 4.0.0
exports.default = function() {
        return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(gulp.dest(jsDestSources))
        .pipe(rename('system-all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
      }

