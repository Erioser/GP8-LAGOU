

const gulp = require('gulp');
const sass   = require('gulp-sass');
const webpack = require('webpack-stream');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const gulpSequence = require('gulp-sequence');
// 全局的配置
const config = require('./config/build');

const { sass_config, webpack_config } = config

// 输出静态文件
gulp.task('copy:static', () => {
    return gulp.src('./src/static/**/*.*')
            .pipe(gulp.dest('./dist/static'));
})

// 输出html页面
gulp.task('copy:html', () => {
    return gulp.src(['./dist/rev/**/*.json', './src/*.html'])
            .pipe(revCollector())

            .pipe( gulp.dest('dist') );
})

// 处理scss
gulp.task('compile:scss', () => {
    return gulp.src('./src/stylesheets/*.scss')
            .pipe(sass(sass_config).on('error', sass.logError))
            .pipe(rev())
            
            .pipe(gulp.dest('./dist/stylesheets'))
            .pipe(rev.manifest())
            .pipe(gulp.dest('./dist/rev/stylesheets'))
})

// 模块化打包js
gulp.task('compile:js', () => {
    return gulp.src('./src/javascripts/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(rev())
        .pipe(gulp.dest('./dist/javascripts'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/javascripts'))
})



// 默认任务
gulp.task('default', function (cb) {
    gulpSequence(['copy:static',  'compile:scss', 'compile:js'], 'copy:html')(cb)
  })