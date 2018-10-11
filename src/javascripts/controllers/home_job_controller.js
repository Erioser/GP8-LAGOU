
import home_job_template from '../views/home-job.html';
import home_job_content_template from '../views/home-job-content.html';
import home_job_model    from '../models/home_job_model';

import BScroll from 'better-scroll';

// 当前加载的职位信息的页数
let _pageNo = 1;

const render = () => {
    
    // 初始加载一下 首页的框架
    let _template = Handlebars.compile(home_job_template);
    let _html = _template();
    $('.home-container main').html(_html);
    handleContentScroll();
} 

const handleContentScroll = () => { // 处理整个程序滚动等等逻辑
    getJobList(); // 初始加载第一页

    // 实力和bscroll
    let _job_scroll = new BScroll('main', {
        startY: -80
    });
}

const getJobList = async () => { // 获取某一页数据然后渲染出来

    let _job_data = await home_job_model.job_list(_pageNo);

    // 多个职位信息数组
    let _job_list = _job_data.content.data.page.result;
    // 将html字符串处理成编译函数
    let _template = Handlebars.compile(home_job_content_template);
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({ _job_list});
    //  渲染job视图
    $('.home-container main .job-content').append(_html);
}


export default {
    render
}