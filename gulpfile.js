const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sassCompiler = () => {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'));
}

const watch = () => {
    gulp.watch('./sass/*.scss', sassCompiler);
}

const defaultTask = (cb) => {
    watch();
    cb();
}

exports.default = defaultTask;