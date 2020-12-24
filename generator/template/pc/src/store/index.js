import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //登录的token
        token: '',
        //是否登录
        isLogin:false,
        //用户信息
        userInfo:{},
    },
    getters:{
    },
    mutations: {
        setToken (state, token) {
            state.token = token;
        },
        setIsLogin (state, isLogin) {
            state.isLogin = isLogin;
        },
        setUserInfo (state, userInfo) {
            state.userInfo = userInfo;
        },
        // 退出登录
        LOG_OUT(state){
            state.userInfo = {}
            state.token = '';
            state.isLogin = false;
        }
    },
})
