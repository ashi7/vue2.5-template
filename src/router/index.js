/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:12:22
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-23 11:35:16
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import HomeChildren from '@/pages/homeChildren/homeChildren';
import StatusError from '@/pages/error/error';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/',
      component: Home,
      children: [
        {
          path: 'homeChildren',
          component: HomeChildren
        }
      ]
    }, // 首页
    {
      path: '/StatusError',
      component: StatusError
    } // 请求状态错误页面
  ]
});
