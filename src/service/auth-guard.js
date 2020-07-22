/*
 * @Descripttion:路由守卫
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-20 18:02:46
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-21 15:52:51
 */
import router from '../router';

// to是当前页面，from是上一个页面
// 路由跳转前
const beforeEach = router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  next();
});
// to是当前页面，from是上一个页面
// 路由跳转后
const afterEach = router.afterEach((to, from) => {
  // console.log(to)
  // console.log(from)
});

export default {beforeEach, afterEach};
