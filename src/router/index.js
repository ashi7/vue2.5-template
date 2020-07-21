/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-06 15:12:22
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-21 10:54:48
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import HomeChildren from '@/pages/homeChildren/homeChildren'
import Setting from '@/pages/setting/setting'

Vue.use(Router)

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
    { path: '/setting', component: Setting } // 参数设置
  ]
})
