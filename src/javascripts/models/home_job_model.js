
// 提供职位信息数据
const job_list = (pageNo = 1) => {
    //  https://m.lagou.com/listmore.json?pageNo=2&pageSize=15

    // return new Promise(resolve => {
    //     $.ajax({
    //         url: '/lagou/listmore.json?pageNo=2&pageSize=15',
    //         success: (res) => {
    //            resolve(res)
    //         }
    //     })
    // })

    return $.ajax({
            url: '/lagou/listmore.json?pageNo='+ pageNo +'&pageSize=15',
            success: (res) => {
               return res;
            }
        })
    

    // return  $.ajax({
    //             // url: '/static/mock/list.json',
    //             url: '/api/job/list_time',
    //             success: (res) => {
    //                 return res;
    //             }
    //         })

}


const job_refresh = () => {
    return  $.ajax({
                url: '/lagou/listmore.json?pageNo=1&pageSize=15',
                success: (res) => {
                    return res;
                }
            })
}

export default {
    job_list,
    job_refresh
}