var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),

    // More complex configuration example
    config = {
        mode: {
            view: { // Activate the «view» mode
                bust: false,
                render: {
                    scss: true // Activate Sass output (with default options)
                }
            },
            symbol: true // Activate the «symbol» mode
        }
    };
gulp.task('svg', function () {
    gulp.src('**/*.svg', { cwd: 'src/image/svg' })
    .pipe(svgSprite(config))
    .pipe(gulp.dest('out'));
})