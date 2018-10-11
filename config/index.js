
const sass = require('gulp-sass');

// require函数的返回值就是模块暴露的东西
const server_config = require('./server_config')
const webpack_config = require('./webpack_config')
// 全局配置
const config = {
    server_config,
    sass_config: {outputStyle: 'compressed'},
    webpack_config
}

module.exports = config;