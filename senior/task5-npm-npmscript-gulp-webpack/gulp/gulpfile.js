//获取gulp模块
var gulp = require("gulp")
//获取插件模块
var cssnano = require("gulp-cssnano")
var concat = require("gulp-concat")
//定义gulp任务
gulp.task("build:css", function () {
//gulp.task("default", function () {
    gulp.src("./src/css/*.css")
        .pipe(concat("index-merge.css"))
        .pipe(cssnano())
        .pipe(gulp.dest("dist/css/"))
})

gulp.task("default",["build:css"])