
//jack-detail
// tom-login

//rem
// require('./modules/flexible');
// import './modules/flexible'

import Router from './router'
import home_controller from './controllers/home_controller';


// 渲染视图
home_controller.render(); 

// 启动路由
const router = new Router({ initial: '#/job' });
window.router = router;
router.init();


