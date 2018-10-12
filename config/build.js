
const sass = require('gulp-sass');

// require函数的返回值就是模块暴露的东西
const webpack_config = require('./webpack_config')
webpack_config.mode = "production"
// 全局配置

const config = {
    sass_config: {outputStyle: 'compressed'},
    webpack_config
}
module.exports = config;