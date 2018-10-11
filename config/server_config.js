
const proxy = require('http-proxy-middleware');

// 开发服务器的配置
const server_config = {
    host: 'localhost',
    port: 8080,
    livereload: true,
    middleware: [
        proxy('/lagou', { // /lagou 这个是判断依据 当我们请求'http://localhost:8080/lagou/abc'的时候，这个代理就生效了
            target: 'https://m.lagou.com',// 配置目标服务器 当前服务器回去请求 https://m.lagou.com/lagou/abc
            changeOrigin: true,
            pathRewrite: { // https://m.lagou.com/abc
                '^/lagou': ''
            }
        }),
        proxy('/api', {
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    ]
    // open: true,
    // 以gulp file.js文件路径为基准
    // directoryListing: true
}

// CommonJS
// 其实暴露的是module.exports这是一个对象
module.exports = server_config