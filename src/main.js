/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:35:41
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-23 17:36:19
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vuex from 'vuex';

import Interceptors from './service/interceptors'; // 拦截器
import authGuard from './service/auth-guard'; // 路由守卫
import Antd from 'ant-design-vue';// UI组件库
import Mock from '../static/mock/mockAdapter'; // 模拟请求失败状态的mock

import './assets/styles/reset.css';
import './assets/styles/border.css';
import 'ant-design-vue/dist/antd.css';

// require('./../static/mock/index.js'); // 模拟普通请求状态的mock

Vue.config.productionTip = false;

Mock.init(); // 模拟请求失败状态的mock
Vue.use(Antd);
Vue.use(Vuex);
Vue.use(Interceptors.request);// 请求拦截器
Vue.use(Interceptors.response); // 相应拦截器

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  authGuard,
  store,
  components: { App },
  template: '<App/>'
});
