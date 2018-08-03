var gulp = require("gulp");
var scss = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var clean = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var html = require("gulp-htmlmin");
gulp.task("scss", function() {
    gulp.src("./src/scss/*.scss")
        .pipe(scss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android>=4.0']
        }))
        .pipe(clean())
        .pipe(gulp.dest("./src/dist/css"));
});
gulp.task("js", function() {
    gulp.src("./src/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./src/dist/js"));
});
gulp.task("css", function() {
    gulp.src("./src/scss/*.scss")
        .pipe(scss())
        .pipe(gulp.dest("./src/css"));
});
gulp.task("watch", function() {
    gulp.watch("./src/scss/*.scss", ["scss"])
});
gulp.task("default", ["scss", "js", "css", "watch"]);