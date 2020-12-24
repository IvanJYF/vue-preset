import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '../components/baseLayout/BaseLayout'
import store from '../store/index'
import Main from './main'
const Login = () => import('../views/login/Login.vue')
const ErrorPage = () => import('../views/other/Error.vue')

Vue.use(Router)

/*  注意：
   1. 但凡用到基础页面模板(BaseLayout)的页面，路由都在main.js里面配置 
*/
var router = new Router({
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        /* 登录路由 */
        {
            path: '/',
            name: 'login',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            meta:{
                title:'登录'
            },
            component: Login
        },
        /* 主体页面内容路由 */
        {
            path:'/main',
            component:BaseLayout,
            children:Main
        },
        /* 错误路由 */
        {
            path: '*',
            component: ErrorPage
        }
    ],
    // base:'/app'
})

// 路由守卫
router.beforeEach((to, form, next) => {
    //设置页面标题
    document.title = to.meta.title ? to.meta.title : '后台管理系统'; 
    // 判断是不是跳转到登录页
    if(to.name == 'login'){ 
        // 如果已登录则不会跳转到登录页
        if(store.state.isLogin){
            next(false)
        }else{
            next()
        }
    }else{
        // 未登录无法打开除登录页以外的页面
        if(store.state.isLogin){
            next()
        }else{
            next('/')
        }
    }
})

export default router