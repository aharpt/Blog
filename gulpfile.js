var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');

/* Compile Sass */

gulp.task("sass", function(){
  return gulp.src("./**/.scss");
  .pipe(gulp.dest("./css"));
});

gulp.task("minify-css", function() {
  return gulp.src("./css");
  .pipe(gulp.dest("dist"))
});
