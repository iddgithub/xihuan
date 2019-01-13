//导入axios
import axios from 'axios';

//设置基地址
axios.defaults.baseURL = "http://localhost:8888/api/private/v1/";

//暴露出去     （vue的组件）
export default {
    install(Vue) {
        // 4添加实例
        Vue.prototype.$axios = axios;
    }
}