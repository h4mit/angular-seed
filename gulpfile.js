const gulp = require('gulp');
const requireDir = require('require-dir');
requireDir('./tasks', { recurse: true });

const serve = (done) => {
    gulp.series('localization', 'localiz1', 'localiz2')(done);
};

exports.default = serve;