var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');
var jsmin = require("gulp-jsmin");
var rename = require("gulp-rename");

/* Compile Sass */

gulp.task("sass", function(){
  return gulp.src("./**/.scss");
  .pipe(gulp.dest("./css"));
});

/* Minify CSS */

gulp.task("minify-css", function() {
  return gulp.src("./css");
  .pipe(gulp.dest("dist"));
});

/* Minify JS */

gulp.task("minify-js", function(){
  gulp.src("src/**/*.js");
  .pipe(jsmin());
  .pipe(rename({suffix: ".min"}));
  .pipe(gulp.dest("dist"));
});
