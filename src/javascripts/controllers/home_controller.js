// home 视图的控制器
import home_template from '../views/home.html'; 

// const job_controller = require('./home_job_controller'); 
// const search_controller = require('./search_controller'); 
// const profile_controller = require('./profile_controller'); 

// 负责将home视图模板渲染在对应的地方
const render = () => {
    // 刚才说了，一切皆模块，说明html也是模块，看一下它暴露的是什么 发现是字符串
    // console.log(homeTemplate)
    document.querySelector('#root').innerHTML = home_template;
    
    // 渲染home的job视图
    // job_controller.render();

    // switchTab();
    $('.home-title').tap(function () {
        router.switch('#/job');
    })
}

// // 切换标签
// const switchTab = () => {
//     $('.footer__item').on('tap', function () {
//         let _controllers = [ job_controller, search_controller, profile_controller ];
//         _controllers[$(this).index()].render();
//         $(this).addClass('active').siblings().removeClass('active');
//     })
// }

export default { render }


// 需求： 显示home  MVC