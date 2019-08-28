const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const babel = require('gulp-babel');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require("gulp-uglify");

function js() {
  return src('src/main/webapp/static/js/*.js', { sourcemaps: true })
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    //.pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(dest('src/main/webapp/static/js'))
}

exports.js = js;
exports.default = parallel(js);