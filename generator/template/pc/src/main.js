import Vue from 'vue'
import App from './App.vue'
// 引入样式库
import './assets/styles/index.scss'
// 解决ie浏览器空白兼容问题
import 'babel-polyfill'
import promise from 'es6-promise'
promise.polyfill()

import store from './store/index' //Vuex
import api from './http/index' //请求封装
import Element from './plugins/element.js' //element按需引入
import echarts from 'echarts'
import components from './components/index'; //注册自定义组件
import filter from './libs/filter' //过滤器

Vue.use(api);
Vue.use(filter);
Vue.use(Element);
Vue.use(components);

Vue.config.productionTip = false;
//全局调用store
Vue.prototype.$store = store
// echarts
Vue.prototype.$echarts = echarts

//刷新保存状态
if (sessionStorage.getItem("store")) {
  store.replaceState(
      Object.assign(
          {},
          store.state,
          JSON.parse(sessionStorage.getItem("store"))
      )
  );
  sessionStorage.removeItem("store")
}
//监听，在页面刷新时将vuex里的信息保存到sessionStorage里
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("store", JSON.stringify(store.state));
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
