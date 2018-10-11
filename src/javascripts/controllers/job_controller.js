
import job_template from '../views/home-job.html';
import job_content_template from '../views/home-job-content.html';
import job_model    from '../models/home_job_model';

import BScroll from 'better-scroll';

// 当前加载的职位信息的页数
let _pageNo = 1;
let datasources = [] // job页面要显示的所有的数据
const render = () => {
    
    // 初始加载一下 首页的框架
    let _template = Handlebars.compile(job_template);
    let _html = _template();
    $('.home-container main').html(_html);
    handleContentScroll();
} 

const handleContentScroll = async () => { // 处理整个程序滚动等等逻辑
    

    // 实力和bscroll
    let _job_scroll = new BScroll('main', {
        startY: -80,
        probeType: 2
    });

    await getJobList(); // 初始加载第一页
    _job_scroll.refresh(); // 异步加载完成后，让better-scroll重新计算


    let _o_scroll_info_top = $('.scroll-info--top') // 下拉刷新的dom元素
    let _o_scroll_info_top_title = _o_scroll_info_top.find('.scroll-info__title') // 下拉刷新的文字dom
    let _top_class = 'scroll-info--top scroll-info ' // 下拉刷新元素的初始类名

    let _scroll_y_sta = 'go' // 下拉刷新的状态

    _job_scroll.on('scroll', ({ x, y }) => {
        if ( y > 0 && _scroll_y_sta !== 'release') { // 放手就刷新
            // 使用状态判断是放在符合条件还不断的更改视图
            _scroll_y_sta = 'release'
            _o_scroll_info_top.prop('class', _top_class + 'release-refresh')
            _o_scroll_info_top_title.html('放开就刷新')
        }
    })

    _job_scroll.on('scrollEnd', async ({ x, y }) => {
        if ( y > -80 && y < 0 ) { // 没有完全拉出刷新元素
            // 塞回去
            _job_scroll.scrollTo(0, -80, 300)
        }else if ( y === 0 ) { // 说明该获取数据去了
            _o_scroll_info_top.prop('class', _top_class + 'loading')
            _o_scroll_info_top_title.html('正在加载')
            await refreshJobList()
            _o_scroll_info_top.prop('class', _top_class + 'go-refresh')
            _o_scroll_info_top_title.html('下拉就刷新')
            _scroll_y_sta = 'go'
            _job_scroll.refresh()
            _job_scroll.scrollTo(0, -80, 300)
        }
    })
}



const refreshJobList = async () => { // 下拉刷新的时候去获取数据
    let _job_data = await job_model.job_refresh()
    let _job_list = _job_data.content.data.page.result
    datasources = [ ..._job_list, ...datasources ] // 刷新，新数据放在前面
    renderJobList()
}

const getJobList = async () => { // 获取某一页数据

    let _job_data = await job_model.job_list(_pageNo)

    // 多个职位信息数组
    let _job_list = _job_data.content.data.page.result

    datasources = [ ...datasources, ..._job_list ]

    renderJobList() // 每次获取到新的数据后重新渲染
   
}

const renderJobList = () => { // 渲染job-content
    // 将html字符串处理成编译函数
    let _template = Handlebars.compile(job_content_template)
    // 将handlebar模板编译成html格式的字符串
    let _html = _template({ _job_list: datasources})
    //  渲染job视图
    $('.home-container main .job-content').html(_html)
}


export default {
    render
}