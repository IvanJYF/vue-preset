import BaseView from '../components/baseView/BaseView'
/*  
    二级路由配置，所有的二级路由在这里配置
    管理后台主体页面路由（应用了基础页面模板BaseLayout）
*/
const Home = () => import('../views/home/Home.vue')

const Main = [
    {
        path: '/',
        name: 'home',
        redirect: '/main/home'
    },
    {
        path: 'home',
        name: 'home',
        meta:{
            title:'首页'
        },
        component: Home
    }
]

export default Main