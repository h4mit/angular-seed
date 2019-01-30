const gulp = require('gulp');
const watch = require('gulp-watch');
const batch = require('gulp-batch');
const merge = require('gulp-merge-json');
const paths = {
    local: 'src/**/i18n/'
};
const localizationDist = 'src/assets/i18n';
const langList = ['fa', 'en'];

const localization =  function (done) {
    var command = gulp;
    langList.forEach((lang) => {
        var categoryList = [];
        command.src(paths.local + lang + '.json')
            .pipe(merge(
                {
                    fileName: lang + '.json',
                    edit: (parsedJson, file) => {
                        if (parsedJson) {
                            for (var i in parsedJson) {
                                if (categoryList.indexOf(i) != -1) {
                                    console.log('Duplicate localization category: ' + i);
                                    return {};
                                }
                                categoryList.push(i);
                            }
                        }
                        return parsedJson;
                    },
                }))
            .pipe(gulp.dest(localizationDist));
    });
    done();
    // return command;
};
gulp.task('localization',  localization);

// Rerun the task when a file changes
const localiz1 =  function () {
    gulp.watch(paths.local + '*', gulp.parallel('localization'));
};
gulp.task('localiz1', localiz1);

const localiz2 =  function () {
    return watch(paths.local + '*.*', batch(function (events, done) {
        gulp.start(['localization', 'localiz1'], done);
    }));
};
gulp.task('localiz2', localiz2);
