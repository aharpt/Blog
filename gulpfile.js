var gulp = require("gulp");
var cleanCSS = require('gulp-clean-css');
var jsmin = require("gulp-jsmin");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");

/* Minify CSS */

gulp.task("minify-css", function() {
  return gulp.src("./css")
  .pipe(cleanCSS())
  .pipe(rename({suffix: ".min"}))
  .pipe(gulp.dest("dist"));
});

/* Minify JS */

gulp.task("minify-js", function(){
  gulp.src("src/**/*.js")
  .pipe(jsmin())
  .pipe(rename({suffix: ".min"}))
  .pipe(gulp.dest("dist"));
});
