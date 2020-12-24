// 配置登录相关模块接口
import request from '@/http/request';

// 登录
const login = (params) => {
    return request({
        url:'/api/login',
        method: 'post',
        data:{...params, ISLOADING: false}
    })
}
// 退出登录
const logOut = (params) => {
    return request({
        url:'/api/logout',
        method: 'post',
        data: params
    })
}

export {
    login,
    logOut
}



