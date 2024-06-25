const { src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));
const exec = require('gulp-exec');

const paths = {
  srcScripts: './src/js/*.js',
  distScripts: './dist/js',
  srcSass: './src/scss/*.scss',
  distCss: './dist/css'
};

function scripts() {
  return src(paths.srcScripts, { since: watch.since })
    .pipe(concat('scripts.js'))
    // .pipe(uglify())
    // .pipe(minify())
    .pipe(dest(paths.distScripts));
}

function styles() {
  return src(paths.srcSass, { since: watch.since })
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(dest(paths.distCss));
}

function tailwind() {
  return src(paths.srcSass, { since: watch.since })
    .pipe(exec('npx tailwindcss -i src/scss/styles.scss -o dist/css/styles.css --watch'))
    .pipe(exec.reporter())
}

exports.watch = function () {
  watch(paths.srcSass, styles);
  watch(paths.srcSass, tailwind);
  watch(paths.srcScripts, scripts);
}