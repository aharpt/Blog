var gulp = require("gulp");
var sass = require("gulp-sass");

/* Compile Sass */

gulp.task("sass", function(){
  return gulp.src("./**/.scss");
  .pipe(gulp.dest("./css"));
});
