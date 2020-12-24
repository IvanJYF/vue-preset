// 配置列表模块接口
import request from '@/http/request';

// 获取列表
const getList = (params) => {
    return request({
        url:'/api/getlist',
        method: 'get',
        params: params
    })
}

export {
    getList,
}

