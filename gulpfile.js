const gulp = require('gulp');
const ts = require('gulp-typescript');

const build = () => {
    return gulp
        .src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            target: 'es2020',
            outDir: 'output',
            module: 'commonjs',
            lib: ['es2020', 'dom'],
            esModuleInterop: true,
        }))
        .pipe(gulp.dest('build'));
};

gulp.task('build', build);

gulp.task('bw', () => {
    gulp.watch('./src/**/*.ts', build);
});
