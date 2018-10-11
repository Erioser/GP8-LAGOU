
const home_job_template = require('../views/home-job.html');
const home_job_content_template = require('../views/home-job-content.html');
const home_job_model    = require('../models/home_job_model');

const render = () => {
    
    
    // 初始加载一下 首页的框架
    let _template = Handlebars.compile(home_job_template);
    let _html = _template();
    $('.home-container main').html(_html);

    // 当前加载的职位信息的页数
    let _pageNo = 1;
    getJobList(_pageNo); // 初始加载第一页
    loadMore(_pageNo);

} 

const getJobList = async (_pageNo) => { // 获取某一页数据然后渲染出来
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

const loadMore = (_pageNo) => { // 点击加载更多每次加载新的数据
    $('.home-container .job-loadmore').on('tap', () => {
        _pageNo ++;
        getJobList(_pageNo);
    })
}

module.exports = {
    render
}