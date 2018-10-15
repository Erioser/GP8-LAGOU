// home 视图的控制器
import home_template from '../views/home.html'; 


// 负责将home视图模板渲染在对应的地方
const render = () => {
    // 刚才说了，一切皆模块，说明html也是模块，看一下它暴露的是什么 发现是字符串
    // console.log(homeTemplate)
    document.querySelector('#root').innerHTML = home_template;
    
    

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