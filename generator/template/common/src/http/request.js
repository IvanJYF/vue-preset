import axios from 'axios';
import { showLoading, hideLoading } from '../components/loading/index.js'
import store from '../store/index'
// import qs from 'qs'
//默认请求接口地址
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production'){
    //生产环境接口地址(打包后的地址)
    axios.defaults.baseURL = 'http://127.0.0.1:8686';
}else{
    // 开发环境接口地址
    axios.defaults.baseURL = 'http://127.0.0.1:8080';
}
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
const instance = axios.create({
    timeout: 15000,
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 是否显示请求loading
    var isLoading;
    if(config.method == 'post'){
		const { ISLOADING = true } = config.data || {}
		isLoading = ISLOADING
        config.data && delete config.data.ISLOADING;
    }else{
		const { ISLOADING = true } = config.params || {}
		isLoading = ISLOADING
        config.params && delete config.params.ISLOADING;
    }
    
    if(isLoading){
        showLoading();
    }
    
    //获取vuex里的token
    const token = store.state.token;
    //每次请求都设置token
    if(token) config.headers['token'] = token;
    return config;
}, function (error) {
    // 对请求错误做些什么
    hideLoading();
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 获取请求头里的token
    const token = response.headers['token'];
    if (token) {
        //将token存入vuex
        store.commit("setToken",token)
    }
    hideLoading();
    return response.data;
}, function (error) {
    hideLoading();
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance;