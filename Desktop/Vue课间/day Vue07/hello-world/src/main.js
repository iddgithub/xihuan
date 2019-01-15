import Vue from 'vue';
import App from './App.vue';


// 全局样式导入
import './assets/base.css';

// 导入自己抽取的axios
import VueAxios from './lib/vue-axios';
// 通过Vue.use和vue进关联
Vue.use(VueAxios)

// el-ui导入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入自己抽取的路由
import router from './lib/router'

//导入自己的面包
import myBread from './components/myBread.vue';
// 全局注册面包🍞组件
Vue.component('myBread', myBread)

new Vue({
  el: '#app',
  // 挂在vue身上实际上作为参数传给vue的构造函数中，南无所有vue实例的对象都有router这个方法。
  router,
  render: h => h(App)
})