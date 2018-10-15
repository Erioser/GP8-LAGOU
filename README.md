# GP8-LAGOU
一个基于gulp+webpack并且使用了RMVC结构的SPA应用框架，在其中开发拉钩项目。

此项目选择了gulp+webpack的前端自动化环境，在业务逻辑开发中，架构层面选择了RMVC结构，实现了SPA应用


### 项目目录结构

1. 顶层分为 ：

* src (开发目录)
* config（配置目录）
* gulpfile-dev.js （开发环境所需gulp启动文件）
* gulpfile-build.js （生产环境所需gulp启动文件）

2. 快速启动项（package.json）：

* npm run dev 开启开发环境
* npm run build 生产打包
* npm run mock 开启mock数据服务
* npm start   开启开发环境与mock服务

下面是启动项配置代码实现
```
"scripts": {
    "dev": "gulp --gulpfile ./gulpfile-dev.js",
    "build": "gulp --gulpfile ./gulpfile-build.js",
    "mock": "json-server ./src/static/mock/mock.js -r ./src/static/mock/routes.json",
    "start": "concurrently \"npm run mock\"  \"npm run dev\""
  }
```

3. SRC开发目录配置

* static 放入静态资源文件
    mock 模拟数据配置
        mock.js json-server接口配置
        routes.json 接口路由配置 （可以配置其他接口来重定向到某个具体的接口）
* stylesheets 放入scss文件
    modules 放入scss独立模块文化
    yo      yo框架的scss代码，可以选择性的引入
    app.scss scss入口文件
* javascript js开发目录
    controllers 控制层逻辑代码
    views       视图层html文件（引入到js中，使用了string-loader处理成字符串）
    models      数据层文件，提供数据或者获取数据的方法
    router      Router实现
        index.js Router类的实现
        route.js 路由表配置  （配置hash路径与控制器的对应关系）
    app.js     项目js入口文件，可以是多个，需要在config中配置多入口

4. config 配置文件

    index.js 保存了生产配置和开发配置
    build.js  生产配置项
    server_config.js gulp-webserver配置项，配置端口,proxy等配置...
    webpack_config.js webpack的配置项，可以配置入口出口loader等...

### 依赖说明

依赖管理工具： yarn -> cnpm

通用依赖：

    * gul-sass + node-sass 编译sass文件
    * yo3                  提供了部分scss代码
    * webpack-stream 在gulp利用webpack对js进行打包
    * string-loader  将引入到js中的html视图文件转换成字符串
    * handlebars     模板引擎，可以将html视图与model数据按照某些语法格式结合在一起
    * babel          将高级ES语法转换成ES5通用语法

开发依赖：

    * gulp-webserver  开启开发服务器
    * http-proxy-middleware 反向代理获取数据
    * gulp-watch      监听static中文件的创建和删除在对应的输出目录中实时对应
    * del             删除文件
    * json-server     mock数据
    * concurrently    控制mock任务和开发任务同时执行

生产依赖：

    * gulp-dev   添加版本号
    * gulp-dev-collector 根据gulp-dev生成的json中文件的对应关系来对html文件中的引入进行替换
    * gulp-sequence 控制任务顺序执行
    * gulp-autoprefixer 处理css前缀兼容问题
    * gulp-htmlmin  压缩HTML代码

