//导入vue ，因为router是vue的插件，要vue.use关联，所以要导入vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';

//注册插件，让router和vue给关联 则把人router抽出来，在vue的实例里面就能用
Vue.use(VueRouter);

//导入路由管理工具
import login from '../components/login.vue';
import main from '../components/main.vue';

// 写规则
let routes = [
    //登陆页
    {
        path: "/login",
        component: login
    },
    {
        path: "/",
        component: main
    },
]

// 实例化对象
let router = new VueRouter({
    routes
})

// 暴露出去
export default router