/*
 * @Descripttion:
 * @version:
 * @Author: huangyueshi
 * @Date: 2020-07-21 14:33:44
 * @LastEditors: huangyueshi
 * @LastEditTime: 2020-07-21 14:42:10
 */
// 获取状态信息
// 优点类似计算属性，改变state里面的数据的时候会触发 getters里面的方法 获取新的值*/
const getters = {
  showState (state) {
    return state.data;
  }
};
export default getters;
