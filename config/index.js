
const sass = require('gulp-sass');

// require函数的返回值就是模块暴露的东西
const server_config = require('./server_config')
const webpack_config = require('./webpack_config')
webpack_config.mode = 'development'
// 全局配置

const base_config = {
    sass_config: {outputStyle: 'compressed'},
    webpack_config
}
const build_config = { ...base_config }
const dev_config = {
    server_config, ...base_config
}
module.exports = {
    build_config,
    dev_config
};