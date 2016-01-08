var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var paths = {
    scss: ['./scss/**/*.scss', './scss/*.scss', './modules/**/*.scss', './directives/**/*.scss'],
    js: ['app.js','modules/*/*.js','./directives/**/*-*.js','./services/**/*-*.js'],
};

gulp.task('sass', function () {
  return gulp.src(['./scss/*.scss', './modules/**/*.scss', './directives/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('css', ['sass'], function (done) {
    gulp.src([
        './css/*.css',
        './css/**/*.css',
        './bower_components/angular-material/angular-material.min.css'
    ])
        .pipe(concat('bundle.js'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('dist/css'))
        .on('end', done);
});

gulp.task('uglify', function() {
    return gulp.src([
        './app.js',
        './modules/*/!(*-*).js',
        './modules/*/*-*.js',
        './directives/*/*-*.js',
        './services/*/*-*.js'
    ])
        .pipe(uglify('prod.js'))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('buildjs', ['uglify'], function(done) {
    gulp.src([
        './bower_components/angular/angular.min.js',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-material/angular-material.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-aria/angular-aria.min.js',
        './bower_components/lodash/lodash.min.js',
        './dist/js/prod.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist/js'))
        .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.scss, ['css']);
    gulp.watch(paths.js, ['buildjs']);
});

gulp.task('build', ['buildjs', 'css'])
