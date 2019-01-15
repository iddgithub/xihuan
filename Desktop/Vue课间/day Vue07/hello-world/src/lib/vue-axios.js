//导入axios
import axios from 'axios';
//导入Vue 
// import Vue from 'vue';
// 导入el-ui的message  单文件单独引用
// 如果单独引入 MessageBox：
import {Message} from 'element-ui'

//设置基地址
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";

//设置axios拦截器   就是回调函数 在请求发送之前设置请求头，如果成功登陆了，把token存入进去，类似express的中间件
axios.interceptors.request.use( (config)=> {
    // console.log('响应回来了');
    // console.log(config);
    if(config.url.indexOf('/login') != -1){
        //登录接口
    }else {
        // 非登陆接口
        config.headers.Authorization = window.sessionStorage.getItem('token');
        return config;
    }
  },  (error) =>{
      // console.log(error);
    return Promise.reject(error);
  });

  //axios 响应拦截器
//   请求响应回来  会触发这个回调函数
  axios.interceptors.response.use(function (response) {
    // console.log('响应返回了');
        if(response.data.data.status === 200){
            // 成功 提示返回的信息
            // Vue.prototype.$message.success(response.data.meta.msg)
          Message.success(response.data.meta.msg)
        }else if(response.data.data.status === 400){
            // 失败 提示信息
            // Vue.prototype.$message.success(response.data.meta.msg)
          Message.success(response.data.meta.msg)
        }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });


//暴露出去     （vue的组件）
export default {
    install(Vue) {
        // 4添加实例
        Vue.prototype.$axios = axios;
    }
}