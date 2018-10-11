
// tom-login

//rem
// require('./modules/flexible');

const Router = require('./router');

const home_controller = require('./controllers/home_controller');

// 渲染视图
home_controller.render(); 

// 启动路由
const router = new Router({ initial: '#/job' });
window.router = router;
router.init();


